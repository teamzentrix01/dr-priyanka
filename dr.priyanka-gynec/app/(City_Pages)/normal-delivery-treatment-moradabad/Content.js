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

export default function NormalDeliveryMoradabad() {
  const faqs = [
    {
      q: "Is normal delivery safer than a cesarean section?",
      a: "For low-risk pregnancies, normal delivery is generally considered safer, with faster recovery and fewer surgical risks compared to a cesarean section.",
    },
    {
      q: "How can I increase my chances of having a normal delivery?",
      a: "Regular antenatal check-ups, staying active, maintaining healthy weight gain, and following your doctor's guidance can improve the chances of a normal delivery.",
    },
    {
      q: "Is labor pain manageable during normal delivery?",
      a: "Yes, options like epidural anesthesia, breathing techniques, and supportive labor positions can significantly help manage labor pain.",
    },
    {
      q: "Can I have a normal delivery after a previous cesarean?",
      a: "In many cases, a trial of labor after cesarean (TOLAC) is possible and can be discussed with your doctor based on your specific history.",
    },
    {
      q: "How long does labor usually last?",
      a: "Labor duration varies widely, but first labors often last longer, averaging 12 to 18 hours, while subsequent labors are typically shorter.",
    },
    {
      q: "What if my baby is in a breech position?",
      a: "A breech position often requires a cesarean section, although some cases may be evaluated for repositioning techniques before delivery.",
    },
    {
      q: "How soon can I go home after a normal delivery?",
      a: "Most mothers can be discharged within 24 to 48 hours after an uncomplicated normal delivery.",
    },
    {
      q: "How can I book a consultation for normal delivery care in Moradabad?",
      a: "You can call or WhatsApp the clinic directly using the contact details above to schedule a consultation and evaluation.",
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
                Normal Delivery Treatment in Moradabad – Expert Care by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Bringing a new life into the world is one of the most beautiful experiences a woman can have, and for most healthy pregnancies, a normal (vaginal) delivery is the safest and most natural way to give birth. Many expectant mothers, however, feel anxious about labor pain, complications, or whether they will need a cesarean section. With the right guidance, preparation, and medical support, the majority of women can have a safe and successful normal delivery. Dr. Priyanka Gynaec offers expert normal delivery treatment in Moradabad, focusing on personalized antenatal care, labor support, and a patient-first approach to help every mother experience a safe and empowering birth.
              </p>

              <p className="text-gray-700">
                This detailed guide explains what normal delivery involves, how to prepare for it, what to expect during labor, and why choosing the right Gynaecologist in Moradabad makes all the difference.
              </p>
            </div>

            {/* Section 2 — What Is Normal Delivery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Normal Delivery?
              </h2>

              <p className="text-gray-700 mb-4">
                Normal delivery, also called vaginal birth, refers to the natural process of childbirth in which the baby is delivered through the birth canal without surgical intervention. It is generally considered the safest mode of delivery for both mother and baby when there are no medical complications, offering benefits such as faster recovery, shorter hospital stay, and reduced risk of surgical complications compared to a cesarean section.
              </p>

              <p className="text-gray-700">
                Normal delivery typically progresses through three stages of labor: the first stage (cervical dilation), the second stage (delivery of the baby), and the third stage (delivery of the placenta). Understanding this process can help expectant mothers feel more prepared and less anxious as their due date approaches.
              </p>
            </div>

            {/* Section 3 — Benefits of Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Normal Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a normal delivery, when medically appropriate, offers several advantages for both mother and baby:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Faster Recovery:</strong> Mothers typically recover within a few days and can resume daily activities sooner compared to a cesarean.</li>
                <li><strong>Shorter Hospital Stay:</strong> Most women can go home within 24 to 48 hours after an uncomplicated normal delivery.</li>
                <li><strong>Lower Risk of Infection:</strong> Since there is no surgical incision, the risk of surgical site infection is significantly reduced.</li>
                <li><strong>Immediate Bonding and Breastfeeding:</strong> Vaginal birth often allows for earlier skin-to-skin contact and easier initiation of breastfeeding.</li>
                <li><strong>Benefits for the Baby:</strong> Passing through the birth canal helps clear the baby&apos;s lungs of fluid and supports the development of healthy gut bacteria.</li>
                <li><strong>Lower Risk for Future Pregnancies:</strong> Normal delivery avoids the risks associated with repeat cesarean sections in future pregnancies.</li>
              </ul>
            </div>

            {/* Section 4 — Who Is a Good Candidate for Normal Delivery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Is a Good Candidate for Normal Delivery?
              </h2>

              <p className="text-gray-700 mb-4">
                Most pregnancies with no significant complications are suitable for a normal delivery. Favorable factors include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A healthy, low-risk pregnancy with no major complications</li>
                <li>The baby positioned head-down (cephalic presentation) closer to the due date</li>
                <li>Normal placental position, without conditions like placenta previa</li>
                <li>No prior cesarean section, or a pregnancy suitable for a trial of labor after cesarean (TOLAC), when medically appropriate</li>
                <li>Absence of conditions like severe preeclampsia that may require early surgical delivery</li>
                <li>A pelvis adequate in size for vaginal delivery, assessed during antenatal check-ups</li>
              </ul>

              <p className="text-gray-700">
                Each pregnancy is unique, and the final decision about the mode of delivery is made closely with the treating Gynaecologist based on the mother&apos;s health, the baby&apos;s condition, and how labor progresses.
              </p>
            </div>

            {/* Section 5 — Preparing for a Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a Normal Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Preparation throughout pregnancy plays a significant role in increasing the chances of a smooth, normal delivery. Dr. Priyanka Gynaec guides expectant mothers through this preparation with a structured antenatal care plan that includes:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Regular Antenatal Check-Ups
              </h3>

              <p className="text-gray-700 mb-3">
                Consistent prenatal visits allow the doctor to monitor the baby&apos;s growth, position, and overall health of the mother, catching any potential complications early so they can be managed proactively.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Nutrition and Weight Management
              </h3>

              <p className="text-gray-700 mb-3">
                A well-balanced diet rich in essential nutrients supports healthy fetal growth while helping the mother maintain an appropriate weight gain during pregnancy, which is associated with a smoother labor process.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Physical Activity and Prenatal Exercises
              </h3>

              <p className="text-gray-700 mb-3">
                Light exercises, walking, and pelvic floor exercises, when approved by the doctor, help improve stamina, flexibility, and pelvic strength, all of which support the labor process.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Birth Preparation and Counselling
              </h3>

              <p className="text-gray-700 mb-3">
                Understanding what to expect during labor reduces fear and anxiety. Dr. Priyanka Gynaec provides guidance on breathing techniques, labor positions, and pain management options well before the due date.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Monitoring Baby&apos;s Position
              </h3>

              <p className="text-gray-700">
                As the due date approaches, the doctor monitors the baby&apos;s position to ensure it is head-down, which is favorable for a normal delivery. In some cases, techniques may be recommended to help encourage optimal positioning.
              </p>
            </div>

            {/* Section 6 — What Happens During Labor and Normal Delivery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During Labor and Normal Delivery?
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the stages of labor can help expectant mothers feel more confident and prepared:
              </p>

              <ul className="text-gray-700 space-y-3 mb-4 list-disc pl-5">
                <li><strong>First Stage – Cervical Dilation:</strong> This is usually the longest stage, during which the cervix gradually dilates from 0 to 10 centimeters. Contractions become progressively stronger and more frequent as this stage advances.</li>
                <li><strong>Second Stage – Delivery of the Baby:</strong> Once the cervix is fully dilated, the mother begins pushing with contractions to help the baby move through the birth canal until delivery.</li>
                <li><strong>Third Stage – Delivery of the Placenta:</strong> After the baby is born, mild contractions help expel the placenta, usually within 5 to 30 minutes.</li>
              </ul>

              <p className="text-gray-700">
                Throughout labor, the mother and baby are continuously monitored to ensure both are progressing safely, with the medical team ready to intervene promptly if any complications arise.
              </p>
            </div>

            {/* Section 7 — Pain Management Options During Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pain Management Options During Normal Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                One of the biggest concerns for expectant mothers is labor pain. Dr. Priyanka Gynaec offers guidance on several pain management options, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Breathing and Relaxation Techniques:</strong> Controlled breathing helps manage pain and maintain calm during contractions.</li>
                <li><strong>Epidural Anesthesia:</strong> A widely used and effective method to significantly reduce labor pain while allowing the mother to remain alert and participate in the delivery.</li>
                <li><strong>Labor Positions and Movement:</strong> Changing positions, using a birthing ball, or walking during early labor can help ease discomfort and support labor progress.</li>
                <li><strong>Continuous Support:</strong> Having a supportive medical team and companion present throughout labor has been shown to reduce perceived pain and anxiety.</li>
              </ul>
            </div>

            {/* Section 8 — When Is a Cesarean Considered Instead? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is a Cesarean Considered Instead?
              </h2>

              <p className="text-gray-700 mb-4">
                While the goal is always to support a safe normal delivery, certain situations may require a cesarean section for the safety of mother and baby, such as:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fetal distress during labor</li>
                <li>Abnormal baby position, such as breech presentation</li>
                <li>Labor not progressing despite adequate time and effort</li>
                <li>Placenta previa or other placental complications</li>
                <li>Severe maternal health conditions requiring immediate delivery</li>
              </ul>

              <p className="text-gray-700">
                Dr. Priyanka Gynaec&apos;s approach always prioritizes a trial of normal labor when it is medically safe, reserving cesarean delivery only for situations where it is genuinely necessary, ensuring mothers are neither pushed toward unnecessary surgery nor placed at risk by avoiding it when needed.
              </p>
            </div>

            {/* Section 9 — Recovery After Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Normal Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery after a normal delivery is generally quicker than after a cesarean section. Most mothers can expect:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Mild soreness in the vaginal area for a few days, which gradually improves</li>
                <li>Ability to walk and move around within hours after delivery</li>
                <li>Hospital discharge within 24 to 48 hours in uncomplicated cases</li>
                <li>Gradual return to normal activities within one to two weeks</li>
                <li>Postpartum check-ups to monitor healing, breastfeeding, and overall recovery</li>
              </ul>

              <p className="text-gray-700">
                Guidance is also provided on perineal care, pelvic floor exercises, and managing common postpartum concerns to support a smooth recovery.
              </p>
            </div>

            {/* Section 10 — Why Choose Dr. Priyanka Gynaec for Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Normal Delivery in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Expectant mothers across Moradabad trust Dr. Priyanka Gynaec for a safe and supportive normal delivery experience because of a genuine, patient-first philosophy backed by advanced medical care. Key reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Personalized antenatal care plans focused on supporting a healthy, normal delivery</li>
                <li>Advanced 3D/4D ultrasound monitoring throughout pregnancy</li>
                <li>Continuous fetal and maternal monitoring during labor for safety</li>
                <li>A calm, encouraging approach that helps reduce fear and anxiety around childbirth</li>
                <li>Availability of epidural and other pain management options</li>
                <li>Readiness to manage complications promptly, including cesarean delivery when genuinely required</li>
                <li>A strong reputation built on safe deliveries and positive birth experiences</li>
              </ul>
            </div>

            {/* Section 11 — Tips for Expectant Mothers Aiming for a Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for Expectant Mothers Aiming for a Normal Delivery
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Attend all scheduled antenatal appointments to monitor your and your baby&apos;s health</li>
                <li>Stay physically active with doctor-approved exercises throughout pregnancy</li>
                <li>Maintain a healthy, balanced diet and appropriate weight gain</li>
                <li>Practice breathing and relaxation techniques before your due date</li>
                <li>Discuss your birth preferences and concerns openly with your doctor</li>
                <li>Stay informed about the stages of labor to reduce fear of the unknown</li>
                <li>Choose a hospital and doctor experienced in supporting normal deliveries</li>
              </ul>
            </div>

            {/* Section 12 — Speciality & Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Speciality &amp; Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Speciality:</strong> Pregnancy &amp; Birthing Care, Normal &amp; High Risk Delivery, Antenatal Services, Gynaecology &amp; Advanced 3D Laparoscopy, Fertility &amp; IVF, Paediatrics
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact &amp; Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
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

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:contact@drpriyankaGynaec.com"
                          className="hover:underline"
                        >
                          contact@drpriyankaGynaec.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
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
            </div>

            {/* Section 13 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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

                    <p className="text-gray-700">{faq.a}</p>
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