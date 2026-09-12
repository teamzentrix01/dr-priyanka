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
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function NormalDeliveryMoradabad() {
  const faqs = [
    {
      q: "Is normal delivery always possible?",
      a: "No. Vaginal delivery is not appropriate in every pregnancy. The safest mode of delivery depends on the condition of the mother, baby, pregnancy, and labor.",
    },
    {
      q: "How can I increase my chances of normal delivery?",
      a: "Regular antenatal care, following your doctor's recommendations, maintaining appropriate physical activity when medically suitable, eating a balanced diet, and learning about labor can support a healthy pregnancy. However, no doctor can guarantee a normal delivery.",
    },
    {
      q: "Is normal delivery safer than C-section?",
      a: "Both vaginal and Cesarean delivery can be safe when appropriately recommended. The safest option depends on the individual medical circumstances of the mother and baby.",
    },
    {
      q: "Is normal delivery possible after a C-section?",
      a: "In some women, VBAC may be possible. Eligibility depends on several medical factors and should be discussed with an obstetrician.",
    },
    {
      q: "How painful is normal delivery?",
      a: "Labor pain varies from person to person. Breathing techniques, movement, support, medication, and other pain-relief options may help manage discomfort.",
    },
    {
      q: "Can a breech baby be delivered normally?",
      a: "A breech presentation can affect delivery planning. The appropriate option depends on the baby's position, pregnancy stage, mother's condition, and the clinical circumstances.",
    },
    {
      q: "When should I start pregnancy care?",
      a: "Ideally, pregnancy care should begin early in pregnancy. If you are planning pregnancy, a preconception consultation can also help identify health factors that may need attention.",
    },
    {
      q: "Where can I consult for normal delivery in Moradabad?",
      a: "You can consult Dr. Priyanka Pachauri at her clinic in Gandhi Nagar, Moradabad, for pregnancy, antenatal, and delivery-related care.",
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
                Normal Delivery in Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="text-gray-700 mb-4">
                Pregnancy is an important journey, and every mother wants the safest possible experience for herself and her baby. For many women, normal delivery in Moradabad is a preferred option when vaginal birth is medically suitable. Proper antenatal care, regular pregnancy monitoring, healthy lifestyle habits, and timely medical guidance can help prepare the mother for labor and delivery.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri is an obstetrician and gynaecologist providing pregnancy and maternity care in Moradabad. Her approach focuses on personalized antenatal care, monitoring the health of both mother and baby, preparing women for labor, and choosing the safest mode of delivery according to individual medical needs.
              </p>
            </div>

            {/* Section 2 — What Is Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Normal Delivery?
              </h2>

              <p className="text-gray-700 mb-4">
                Normal delivery, also called vaginal delivery, is the birth of a baby through the vagina without a Cesarean operation.
              </p>

              <p className="text-gray-700 mb-4">
                A normal delivery usually involves three main stages:
              </p>

              <ul className="text-gray-700 space-y-2 list-decimal pl-5 mb-4">
                <li>The cervix gradually opens during labor.</li>
                <li>The baby moves through the birth canal and is delivered.</li>
                <li>The placenta is delivered after the baby is born.</li>
              </ul>

              <p className="text-gray-700">
                The duration and experience of labor can vary considerably from one woman to another. The doctor and maternity team monitor the mother and baby throughout labor and make decisions based on their condition and the progress of delivery.
              </p>
            </div>

            {/* Section 3 — Normal Delivery Care in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Good preparation for childbirth begins well before labor. Antenatal care allows your gynaecologist to monitor pregnancy and identify potential concerns at an early stage.
              </p>

              <p className="text-gray-700 mb-4">
                During pregnancy, your care may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Regular antenatal check-ups</li>
                <li>Monitoring blood pressure and weight</li>
                <li>Tracking the baby's growth</li>
                <li>Routine pregnancy investigations</li>
                <li>Ultrasound examinations when required</li>
                <li>Monitoring fetal development</li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Screening for pregnancy-related complications</li>
                <li>Birth preparation and labor guidance</li>
                <li>Planning for delivery according to the pregnancy</li>
              </ul>

              <p className="text-gray-700">
                Every pregnancy is different, so the recommended schedule of tests and appointments depends on the mother's health, pregnancy stage, and medical history.
              </p>
            </div>

            {/* Section 4 — Who May Be Suitable for Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who May Be Suitable for a Normal Delivery?
              </h2>

              <p className="text-gray-700 mb-4">
                Whether a woman can have a normal delivery cannot always be determined at the beginning of pregnancy. The possibility of vaginal birth depends on several factors that can change as pregnancy progresses.
              </p>

              <p className="text-gray-700 mb-4">
                Factors considered by the doctor may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Mother's overall health</li>
                <li>Baby's growth and development</li>
                <li>Baby's position</li>
                <li>Placental location</li>
                <li>Previous pregnancy and delivery history</li>
                <li>Previous Cesarean delivery</li>
                <li>Blood pressure and other pregnancy conditions</li>
                <li>Progress of labor</li>
                <li>Condition of the mother and baby during labor</li>
              </ul>

              <p className="text-gray-700">
                If vaginal delivery is medically appropriate, the maternity team can support the mother through labor while continuing to monitor her and the baby.
              </p>
            </div>

            {/* Section 5 — How to Prepare for Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Normal Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Preparation during pregnancy can help women understand labor and feel more confident about childbirth.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Attend Regular Antenatal Visits
                  </h3>
                  <p className="text-gray-700">
                    Regular antenatal appointments allow your doctor to monitor your pregnancy and identify issues that may require additional care. Do not skip scheduled pregnancy check-ups even if you feel healthy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Follow a Healthy Pregnancy Diet
                  </h3>
                  <p className="text-gray-700">
                    A balanced diet during pregnancy supports maternal health and fetal development. Your doctor can guide you regarding appropriate nutrition, supplements, hydration, and weight gain according to your individual needs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Stay Physically Active When Appropriate
                  </h3>
                  <p className="text-gray-700">
                    For women whose pregnancy is progressing normally and who have no medical restrictions, suitable physical activity may be beneficial. However, exercise during pregnancy should be based on your doctor's advice, especially if you have a high-risk pregnancy or pregnancy-related complications.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Learn About Labor
                  </h3>
                  <p className="text-gray-700">
                    Understanding the stages of labor, possible pain-relief options, and what happens during delivery can reduce anxiety and help you prepare for childbirth.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Discuss Your Birth Preferences
                  </h3>
                  <p className="text-gray-700">
                    You can discuss your preferred birth plan with your obstetrician. Your doctor can explain which options may be suitable for your pregnancy and what circumstances could require a change in the delivery plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 — What Happens During Labor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During Labor?
              </h2>

              <p className="text-gray-700 mb-4">
                Labor generally progresses through three stages.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    First Stage
                  </h3>
                  <p className="text-gray-700">
                    The cervix begins to soften, thin, and open. Contractions gradually become stronger and more regular. This stage can be the longest part of labor and may vary significantly between women.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Second Stage
                  </h3>
                  <p className="text-gray-700">
                    Once the cervix is fully dilated, the mother pushes and the baby is delivered through the birth canal. The medical team provides guidance and monitors the mother and baby during this stage.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Third Stage
                  </h3>
                  <p className="text-gray-700">
                    After the baby is born, the placenta is delivered. The mother continues to be monitored after delivery to identify any immediate complications and support her recovery.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 — Pain Management During Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pain Management During Normal Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Labor can be painful, but women may have different experiences and pain-management needs.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the clinical situation and availability of services, pain-relief approaches may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Breathing and relaxation techniques</li>
                <li>Changing labor positions</li>
                <li>Movement during labor when appropriate</li>
                <li>Support from the maternity team</li>
                <li>Medication-based pain relief</li>
                <li>Epidural analgesia where available and medically appropriate</li>
              </ul>

              <p className="text-gray-700">
                Discuss pain-management options with your obstetrician before labor so you understand what may be available to you.
              </p>
            </div>

            {/* Section 8 — Monitoring Mother and Baby During Labor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Monitoring Mother and Baby During Labor
              </h2>

              <p className="text-gray-700 mb-4">
                Monitoring during labor is an important part of maternity care.
              </p>

              <p className="text-gray-700 mb-4">
                The medical team may assess:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Mother's blood pressure and pulse</li>
                <li>Contractions</li>
                <li>Cervical dilation</li>
                <li>Baby's position</li>
                <li>Baby's heart rate</li>
                <li>Progress of labor</li>
                <li>Any signs of maternal or fetal distress</li>
              </ul>

              <p className="text-gray-700">
                The exact type and frequency of monitoring depends on the pregnancy and clinical situation.
              </p>
            </div>

            {/* Section 9 — When May a Cesarean Delivery Be Recommended */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When May a Cesarean Delivery Be Recommended?
              </h2>

              <p className="text-gray-700 mb-4">
                A normal delivery cannot always be safely achieved.
              </p>

              <p className="text-gray-700 mb-4">
                A Cesarean delivery may be recommended when vaginal birth could create significant risk for the mother or baby. The reasons can vary and may include certain problems with the placenta, baby's position, fetal distress, failure of labor to progress, or other maternal or fetal complications.
              </p>

              <p className="text-gray-700">
                The decision should be based on the individual pregnancy rather than pressure to achieve a particular type of birth. A safe delivery is more important than simply choosing normal delivery or Cesarean delivery.
              </p>
            </div>

            {/* Section 10 — Normal Delivery After Previous C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery After Previous C-Section
              </h2>

              <p className="text-gray-700 mb-4">
                Some women who have previously had a Cesarean may be candidates for a vaginal birth after Cesarean (VBAC), while others may not be.
              </p>

              <p className="text-gray-700 mb-4">
                Whether VBAC is appropriate depends on factors such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Reason for the previous C-section</li>
                <li>Type of uterine incision</li>
                <li>Previous delivery history</li>
                <li>Current pregnancy</li>
                <li>Baby's position</li>
                <li>Placental condition</li>
                <li>Availability of appropriate emergency care</li>
              </ul>

              <p className="text-gray-700">
                If you have had a previous Cesarean, discuss your options with your obstetrician early in pregnancy.
              </p>
            </div>

            {/* Section 11 — Recovery After Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Normal Delivery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery after vaginal delivery varies from woman to woman.
              </p>

              <p className="text-gray-700 mb-4">
                After delivery, mothers may experience tiredness, vaginal soreness, bleeding, breast discomfort, or changes associated with breastfeeding and hormonal fluctuations.
              </p>

              <p className="text-gray-700 mb-4">
                Postnatal care is important for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Monitoring recovery</li>
                <li>Supporting breastfeeding</li>
                <li>Managing postpartum discomfort</li>
                <li>Checking maternal health</li>
                <li>Discussing contraception when appropriate</li>
                <li>Identifying postpartum complications</li>
                <li>Supporting emotional wellbeing</li>
              </ul>

              <p className="text-gray-700">
                Your doctor can advise you about activity, nutrition, follow-up appointments, and when you can gradually return to your normal routine.
              </p>
            </div>

            {/* Section 12 — When Should You Contact Your Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Contact Your Doctor During Pregnancy?
              </h2>

              <p className="text-gray-700 mb-4">
                Pregnant women should seek medical advice promptly if they experience concerning symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the stage of pregnancy, these may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Vaginal bleeding</li>
                <li>Leakage of fluid</li>
                <li>Severe abdominal pain</li>
                <li>Severe headache or vision changes</li>
                <li>Sudden swelling</li>
                <li>Fever</li>
                <li>Reduced or unusual fetal movement</li>
                <li>Regular painful contractions before the expected time</li>
                <li>Any symptom that feels unusual or concerning</li>
              </ul>

              <p className="text-gray-700 mt-4">
                In an emergency, seek immediate medical attention rather than waiting for a routine appointment.
              </p>
            </div>

            {/* Section 13 — Why Choose Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka for Pregnancy and Normal Delivery Care in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing an obstetrician is an important decision during pregnancy. Dr. Priyanka Pachauri provides obstetric and gynaecological care with an emphasis on individualized pregnancy management.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the needs of the pregnancy, care may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Antenatal pregnancy monitoring</li>
                <li>Pregnancy counselling</li>
                <li>Normal delivery planning</li>
                <li>High-risk pregnancy management</li>
                <li>Labor and delivery guidance</li>
                <li>Postnatal care</li>
                <li>Gynaecological consultation</li>
                <li>Fertility and infertility care</li>
                <li>Laparoscopic gynaecological procedures</li>
              </ul>

              <p className="text-gray-700">
                The delivery plan is based on the mother's health, baby's condition, pregnancy progress, and medical indications.
              </p>
            </div>

            {/* Section 14 — Normal Delivery and Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery and Antenatal Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                A healthy pregnancy requires more than a single delivery appointment. Antenatal care throughout pregnancy helps your doctor understand how the pregnancy is progressing and whether any additional monitoring or treatment is required.
              </p>

              <p className="text-gray-700 mb-4">
                Women planning pregnancy or already pregnant can discuss:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Pregnancy check-ups</li>
                <li>Expected due date</li>
                <li>Routine investigations</li>
                <li>Ultrasound requirements</li>
                <li>Nutrition and supplements</li>
                <li>Physical activity</li>
                <li>Labor preparation</li>
                <li>Delivery preferences</li>
                <li>Warning signs during pregnancy</li>
                <li>Postpartum planning</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Starting pregnancy care early can help you make informed decisions throughout your pregnancy.
              </p>
            </div>

            {/* Section 15 — Book a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery in Moradabad – Book a Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                If you are looking for normal delivery in Moradabad, you can consult Dr. Priyanka Pachauri for pregnancy and maternity care.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Pachauri</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
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

            {/* Section 16 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions About Normal Delivery in Moradabad
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