import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function PregnancyCareHospitalMoradabad() {
  const faqs = [
    {
      q: "How do I choose a pregnancy care hospital in Moradabad?",
      a: "Check the doctor's experience, the hospital's technology, emergency readiness, and patient reviews before deciding.",
    },
    {
      q: "How soon after confirming pregnancy should the first checkup happen?",
      a: "Ideally within 6 to 8 weeks of confirming the pregnancy.",
    },
    {
      q: "How is the decision made between normal delivery and C-section?",
      a: "It depends on the mother's and baby's health condition, the baby's position, and how labor progresses; the doctor decides case by case.",
    },
    {
      q: "What is a high-risk pregnancy?",
      a: "A pregnancy is considered high-risk if there is diabetes, high blood pressure, thyroid issues, twin pregnancy, or a history of prior complications.",
    },
    {
      q: "How many ultrasounds are needed during pregnancy?",
      a: "Generally, at least one scan per trimester is needed, but the doctor may recommend more depending on the case.",
    },
    {
      q: "Is 3D and 4D ultrasound available in Moradabad?",
      a: "Yes, advanced centres in Moradabad such as Dr. Priyanka Gynaec offer 3D and 4D ultrasound facilities.",
    },
    {
      q: "How long do postnatal follow-ups continue after delivery?",
      a: "Regular postnatal checkups are usually recommended for up to 6 weeks after delivery.",
    },
    {
      q: "How do I book an appointment at a pregnancy care hospital?",
      a: "Most centres allow booking via call or WhatsApp. You can message on WhatsApp at 8979670705 to schedule an appointment.",
    },
    {
      q: "Does a first pregnancy need extra care?",
      a: "Yes, since the body is adjusting to new changes for the first time, regular monitoring and following the doctor's guidance is important.",
    },
  ];


  return (
    <main className="bg-white">
      <Banner />


      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">


          {/* Main Content */}
          <div className="flex-1 order-1">


            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Pregnancy Care Hospital Moradabad: Finding the Right Place for a Safe Motherhood Journey
              </h1>


              <p className="text-gray-700 mb-4">
                Pregnancy is a journey where every woman needs the right guidance,
                timely checkups, and emotional support. If you live in Moradabad
                or nearby areas and are searching for a pregnancy care hospital
                in Moradabad, this decision is about much more than just booking
                an appointment. It determines the health, safety, and overall
                experience of you and your baby for the next nine months.
              </p>


              <p className="text-gray-700">
                In this article, we&apos;ll walk through how to choose the right
                pregnancy care hospital, what services actually matter in
                Moradabad, and take a closer look at one well known centre in
                the city, Dr. Priyanka Gynaec.
              </p>
            </div>


            {/* Section 2 — Why Hospital Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why a Good Pregnancy Care Hospital in Moradabad Matters
              </h2>


              <p className="text-gray-700 mb-4">
                During pregnancy, both mother and baby need continuous
                monitoring. A missed checkup or a delayed diagnosis can increase
                the risk of complications. This is exactly why choosing the
                right pregnancy care hospital in Moradabad becomes so important.
                The right hospital means:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  An experienced gynaecologist who understands the needs of every trimester
                </li>
                <li>Modern ultrasound and diagnostic equipment</li>
                <li>Infrastructure that is ready for emergencies</li>
                <li>A team that prioritizes normal delivery whenever possible</li>
                <li>Real experience handling high-risk pregnancies</li>
                <li>Proper care for both mother and newborn after delivery</li>
              </ul>


              <p className="text-gray-700">
                Moradabad, as a growing city, now offers access to advanced
                healthcare options for women, but making the right choice is
                essential to ensure the entire pregnancy journey stays safe and
                stress-free.
              </p>
            </div>


            {/* Section 3 — Choosing Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                How to Identify a Good Pregnancy Care Hospital
              </h2>


              <p className="text-gray-700 mb-6">
                When you&apos;re searching for a pregnancy care hospital in
                Moradabad, keep the following points in mind:
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Doctor&apos;s Qualification and Experience
                  </h3>
                  <p className="text-gray-700">
                    The gynaecologist should hold relevant degrees, fellowships,
                    and genuine hands-on experience, especially in handling
                    high-risk pregnancy cases.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Technology and Infrastructure
                  </h3>
                  <p className="text-gray-700">
                    Look for 3D and 4D ultrasound machines, a properly equipped
                    labor room, newborn care facilities, and an emergency-ready
                    operation theatre.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Personalized Care
                  </h3>
                  <p className="text-gray-700">
                    No two pregnancies are the same. A good hospital treats each
                    case individually instead of applying the same protocol to
                    everyone.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Preference for Normal Delivery
                  </h3>
                  <p className="text-gray-700">
                    Many hospitals move straight to a C-section. A truly
                    trustworthy centre is one that makes every possible effort
                    toward a normal delivery first, opting for a C-section only
                    when medically necessary.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Reviews and Trust
                  </h3>
                  <p className="text-gray-700">
                    Local reviews, patient testimonials, and word-of-mouth
                    recommendations can tell you a lot before you even walk in.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 4 — Trimester Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Trimester-Wise Pregnancy Care: What to Expect
              </h2>


              <p className="text-gray-700 mb-6">
                A reliable pregnancy care hospital guides you through all three
                trimesters.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    First Trimester (Months 1 to 3)
                  </h3>
                  <p className="text-gray-700">
                    This stage includes pregnancy confirmation tests, baseline
                    blood work, folic acid supplementation, and an early
                    ultrasound scan. Doctors also provide lifestyle and diet
                    guidance so the baby&apos;s development starts on a healthy
                    note.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Second Trimester (Months 4 to 6)
                  </h3>
                  <p className="text-gray-700">
                    This trimester is generally considered the most comfortable.
                    It includes the anomaly scan, glucose tolerance test, and
                    regular checkups to track both the baby&apos;s growth and
                    the mother&apos;s health.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Third Trimester (Months 7 to 9)
                  </h3>
                  <p className="text-gray-700">
                    As delivery approaches, monitoring becomes more frequent.
                    The baby&apos;s position, fluid levels, weight gain, and
                    labor readiness are all checked closely. This is also the
                    stage where the decision between normal delivery and
                    C-section is made, based on each individual&apos;s medical
                    condition.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 5 — High Risk */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why the Right Hospital Matters for High-Risk Pregnancies
              </h2>


              <p className="text-gray-700">
                Some pregnancies fall into the high-risk category due to
                diabetes, high blood pressure, thyroid issues, twin pregnancy,
                or a history of previous miscarriage. In such cases, the role
                of an experienced gynaecologist becomes even more critical. When
                choosing a pregnancy care hospital in Moradabad, make sure the
                team has real experience managing high-risk pregnancies, so any
                complication can be identified and handled immediately.
              </p>
            </div>


            {/* Section 6 — Dr Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: A Trusted Pregnancy Care Hospital in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                One name that comes up frequently when it comes to pregnancy
                and women&apos;s health in Moradabad is Dr. Priyanka Gynaec, led
                by Dr. Priyanka Pachauri. A look at their website,
                gynaecologistmoradabad.com, shows that this centre is not
                limited to pregnancy care alone. It offers a complete solution
                for every stage of a woman&apos;s health journey.
              </p>


              <h3 className="font-semibold text-gray-900 mb-3">
                Services Available Here
              </h3>


              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Antenatal Services: Structured prenatal checkups and screenings</li>
                <li>Pregnancy and Birthing Care: A supportive and customized birthing experience for every mother</li>
                <li>Normal Delivery: Care that prioritizes natural, vaginal delivery</li>
                <li>Gynaecology and 3D Laparoscopy: Advanced treatment for women&apos;s reproductive health</li>
                <li>Fertility and IVF: Personalized fertility treatment to help couples achieve parenthood</li>
                <li>Laparoscopic Cystectomy, Myomectomy and Hysterectomy: Fertility-preserving keyhole surgeries</li>
                <li>Diagnostic Hysteroscopy and Polypectomy: Minimally invasive procedures</li>
                <li>Endometriosis Surgery: Advanced 3D laparoscopic treatment</li>
                <li>Paediatric Care: Compassionate consultation for newborns and children</li>
              </ul>


              <h3 className="font-semibold text-gray-900 mb-3">
                Technology That Makes Care More Reliable
              </h3>


              <p className="text-gray-700 mb-6">
                The centre is equipped with a High-Definition 3D laparoscopic
                surgery setup, a 3D and 4D ultrasound machine, a GERI time-lapse
                embryo incubator, and AI-powered semen analysis, meaning both
                diagnosis and treatment follow modern medical standards.
              </p>


              <h3 className="font-semibold text-gray-900 mb-3">
                Why Patients Trust Them
              </h3>


              <p className="text-gray-700">
                According to the centre, patient trust is built on gold medal
                credentials, international fellowships, and continuity of care.
                This means the same team follows your history from the first
                visit through every follow-up. Patient testimonials also
                highlight genuine warmth and clear communication, with patients
                often mentioning that the doctor explains every step and makes
                them feel comfortable.
              </p>
            </div>


            {/* Section 7 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Mistakes to Avoid While Choosing a Pregnancy Care Hospital
              </h2>


              <ol className="text-gray-700 space-y-2 list-decimal pl-5">
                <li>Choosing based on price alone: The cheapest option is not always the best one</li>
                <li>Ignoring reviews: Other patients&apos; experiences can tell you a lot</li>
                <li>Not checking emergency readiness: Labor can start anytime, so 24 by 7 availability is essential</li>
                <li>Avoiding open communication with the doctor: Always discuss your questions and concerns clearly</li>
                <li>Skipping follow-up visits: Missing regular checkups can be risky</li>
              </ol>
            </div>


            {/* Section 8 — Postnatal */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Care Is Just as Important
              </h2>


              <p className="text-gray-700">
                Care should not stop after delivery. Both mother and baby need
                continued attention. A good pregnancy care hospital also
                provides postnatal checkups, breastfeeding guidance, and a
                newborn vaccination schedule, so new parents get support at
                every step.
              </p>
            </div>


            {/* Section 9 — Local Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Local Pregnancy Care Hospital in Moradabad
              </h2>


              <p className="text-gray-700 mb-6">
                Many families in Moradabad still travel to Delhi, Lucknow, or
                other bigger cities for pregnancy care, assuming that better
                facilities are only available outside their own city. However,
                with advanced technology and experienced specialists now
                available locally, choosing a pregnancy care hospital in
                Moradabad itself comes with several real advantages.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Less Travel Stress
                  </h3>
                  <p className="text-gray-700">
                    Long-distance travel during pregnancy, especially in the
                    later trimesters, can be physically uncomfortable and
                    sometimes even risky. A local hospital means shorter travel
                    time for every checkup, scan, and emergency visit, which
                    matters a lot as the due date gets closer.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Easier Emergency Access
                  </h3>
                  <p className="text-gray-700">
                    Pregnancy-related emergencies can happen without warning.
                    Having a trusted hospital nearby means you can reach the
                    doctor quickly instead of losing precious time in transit to
                    another city.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Continuity of Care
                  </h3>
                  <p className="text-gray-700">
                    When you choose a hospital close to home, it becomes easier
                    to stick to the same doctor and team throughout your
                    pregnancy. This continuity helps the doctor understand your
                    medical history in depth, which leads to more personalized
                    and accurate care.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Family Support During Visits
                  </h3>
                  <p className="text-gray-700">
                    Local hospitals make it easier for family members, husband,
                    parents, or in-laws, to accompany you for checkups and be
                    present during delivery, which adds emotional support during
                    an already sensitive time.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Cost-Effectiveness
                  </h3>
                  <p className="text-gray-700">
                    Traveling to another city for pregnancy care often adds extra
                    expenses, including transport, accommodation, and time off
                    work for accompanying family members. Choosing a well-equipped
                    local hospital can significantly reduce these additional costs
                    while still providing quality care.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Familiarity with Local Health Patterns
                  </h3>
                  <p className="text-gray-700">
                    Doctors practicing in Moradabad are often more familiar with
                    region-specific health trends, common deficiencies, and
                    lifestyle factors affecting local patients, which can help in
                    providing more relevant advice and preventive care.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 10 — Healthy Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for a Healthy Pregnancy Journey
              </h2>


              <p className="text-gray-700 mb-4">
                Along with choosing the right hospital, a few daily habits can
                make a real difference to your pregnancy experience:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Stay hydrated and maintain a balanced diet rich in iron, calcium, and folic acid</li>
                <li>Avoid missing scheduled checkups, even if you&apos;re feeling fine, as some issues do not show obvious symptoms</li>
                <li>Keep moving with light, doctor-approved exercises like walking or prenatal yoga</li>
                <li>Track your baby&apos;s movements in the third trimester and report any unusual changes immediately</li>
                <li>Manage stress through adequate rest, sleep, and open communication with your support system</li>
                <li>Avoid self-medication and always consult your doctor before taking any medicine or supplement</li>
              </ul>


              <p className="text-gray-700">
                These small, consistent habits, combined with the right medical
                support, go a long way in ensuring a smooth and healthy
                pregnancy.
              </p>
            </div>


            {/* Section 11 — Closing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Safe Motherhood Journey in Moradabad
              </h2>


              <p className="text-gray-700">
                Pregnancy is a beautiful yet sensitive phase, and choosing the
                right pregnancy care hospital in Moradabad is one of the most
                important decisions during this time. An experienced doctor,
                modern technology, and a genuinely caring team together create a
                safe and comfortable pregnancy journey. If you&apos;re looking for
                trusted pregnancy care in Moradabad, you can reach out for
                appointments and queries on WhatsApp at 8979670705.
              </p>
            </div>


            {/* Section 12 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact Details
              </h2>


              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Contact Us</p>


                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>


                      <span className="text-gray-400">|</span>


                      <a href="tel:8979670705" className="hover:underline">
                        +91 8979670705 (WhatsApp)
                      </a>
                    </div>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <Mail
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Email</p>


                    <a
                      href="mailto:drpriyanka@gynaecologistmoradabad.com"
                      className="hover:underline"
                    >
                      drpriyanka@gynaecologistmoradabad.com
                    </a>
                  </div>
                </div>
              </div>


              <div className="flex gap-4 flex-wrap">
                <Link href="/contact">
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                    <Phone className="inline mr-2" size={18} />
                    Contact Us
                  </button>
                </Link>


                <Link href="/services">
                  <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>


            {/* Section 13 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>


              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>


                    <p className="text-gray-700">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}