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

export default function MaternityDoctor() {
  const faqs = [
    {
      q: "What does a maternity doctor do?",
      a: "She cares for you before, during and after pregnancy, including delivery and postnatal recovery.",
    },
    {
      q: "Is a maternity doctor the same as a gynaecologist?",
      a: "Mostly yes. Most maternity doctors are OB-GYNs trained in both pregnancy and women's health.",
    },
    {
      q: "When should I first visit a maternity doctor?",
      a: "As soon as pregnancy is confirmed, ideally within 8 to 12 weeks, or before planning a pregnancy.",
    },
    {
      q: "How often are antenatal check-ups needed?",
      a: "Usually monthly at first, then more often in the last trimester, as your doctor advises.",
    },
    {
      q: "How do I choose a good maternity doctor?",
      a: "Check qualifications, experience, communication, facilities and how comfortable you feel.",
    },
    {
      q: "Can I choose a lady maternity doctor?",
      a: "Yes. Many women prefer a lady doctor for comfort, as long as she is qualified and experienced.",
    },
    {
      q: "Will my doctor suggest a C-section?",
      a: "Only when it is medically needed. A good doctor supports normal delivery whenever it is safe.",
    },
    {
      q: "What are the warning signs in pregnancy?",
      a: "Bleeding, severe pain, reduced baby movements, severe headache and fluid leakage need urgent care.",
    },
    {
      q: "Is postnatal care necessary?",
      a: "Yes. A check-up around 6 weeks helps monitor your recovery and emotional health.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Doctor: Who She Is, What She Does and How to Choose the Right One
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy is one of the most meaningful journeys of a
                woman&apos;s life, and also one of the most sensitive. From the
                first positive test to the first cuddle with your newborn, you
                need a doctor who is knowledgeable, patient and always
                available.
              </p>

              <p className="mb-4 text-gray-700">
                That doctor is your maternity doctor. Choosing the right one
                early can make your pregnancy safer, your delivery calmer and
                your recovery smoother.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What a maternity doctor is and does</li>
                <li>When to see one</li>
                <li>Care at every stage of pregnancy</li>
                <li>Normal delivery, C-section and high-risk care</li>
                <li>How to choose the right doctor</li>
                <li>Questions to ask at your first visit</li>
                <li>Postnatal care and newborn support</li>
              </ul>
            </div>

            {/* Section 2 — What Is Maternity Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Maternity Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                A maternity doctor is an obstetrician-gynaecologist (OB-GYN)
                who looks after women before, during and after pregnancy. She
                monitors your health and your baby&apos;s growth, guides you
                through delivery and supports your recovery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Maternity Doctor Is Trained To
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirm and monitor pregnancy</li>
                <li>Guide you on nutrition, exercise and lifestyle</li>
                <li>Order and interpret scans and blood tests</li>
                <li>Detect and manage pregnancy complications</li>
                <li>Conduct normal deliveries and perform C-sections when needed</li>
                <li>Handle emergencies in labor</li>
                <li>Provide postnatal care and family planning advice</li>
              </ul>

              <p className="text-gray-700">
                Different from a general doctor: A general physician can treat
                common illnesses, but a maternity doctor specializes in the
                unique changes and risks of pregnancy.
              </p>
            </div>

            {/* Section 3 — Difference */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Doctor vs Gynaecologist vs Obstetrician: What Is the Difference?
              </h2>

              <p className="mb-4 text-gray-700">
                These terms are often used interchangeably, but there are small
                differences:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Obstetrician: specializes in pregnancy, childbirth and the postpartum period</li>
                <li>Gynaecologist: specializes in the female reproductive system overall, including periods, fertility and menopause</li>
                <li>OB-GYN: trained in both fields, which is why most maternity doctors hold this combined qualification</li>
                <li>Maternity doctor: the everyday term families use for the OB-GYN who manages pregnancy and delivery</li>
              </ul>
            </div>

            {/* Section 4 — When to See */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Maternity Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                Earlier is better. Many women wait until they are sure, but
                timely care protects you and your baby.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Consult a Maternity Doctor When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You are planning a pregnancy (preconception counselling)</li>
                <li>Your home pregnancy test is positive</li>
                <li>You miss a period and suspect pregnancy</li>
                <li>You have a history of miscarriage, fertility problems or a previous C-section</li>
                <li>You have conditions like diabetes, thyroid disease, high blood pressure or PCOS</li>
                <li>You are above 35 years of age</li>
                <li>You notice any unusual symptoms during pregnancy</li>
              </ul>

              <p className="text-gray-700">
                Ideal timing: Book your first antenatal visit within the first
                8 to 12 weeks of pregnancy.
              </p>
            </div>

            {/* Section 5 — Preconception Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preconception Care: Care Before Pregnancy Begins
              </h2>

              <p className="mb-4 text-gray-700">
                A good maternity doctor can help even before you conceive.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Preconception Visits May Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Review of your medical and family history</li>
                <li>Check for anemia, thyroid issues, blood sugar and blood pressure</li>
                <li>Advice on folic acid supplements before conception</li>
                <li>Vaccination review</li>
                <li>Guidance on weight, diet and exercise</li>
                <li>Advice on stopping smoking, alcohol or unsafe medicines</li>
                <li>Discussion of fertility concerns, if conception is taking time</li>
              </ul>
            </div>

            {/* Section 6 — Antenatal Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Antenatal Care: What Your Maternity Doctor Does During Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Antenatal care means regular check-ups throughout pregnancy. A
                typical schedule includes frequent visits that become more
                regular as your due date approaches.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (Weeks 1 to 12)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirming the pregnancy and the due date</li>
                <li>Early ultrasound to check the baby&apos;s heartbeat and position</li>
                <li>Blood tests, including hemoglobin, blood group, blood sugar and infection screening</li>
                <li>Starting folic acid, iron and other supplements</li>
                <li>Managing nausea, tiredness and early pregnancy worries</li>
                <li>Advice on safe food, medicines and activity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (Weeks 13 to 27)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed anomaly scan (around 18 to 20 weeks) to check the baby&apos;s growth and organs</li>
                <li>Screening for gestational diabetes</li>
                <li>Monitoring blood pressure, weight and baby&apos;s growth</li>
                <li>Guidance on nutrition and gentle exercise</li>
                <li>Tetanus and other recommended vaccinations</li>
                <li>Feeling baby&apos;s movements for the first time</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (Weeks 28 to Delivery)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Growth scans and checks on the baby&apos;s position</li>
                <li>Monitoring for pre-eclampsia, anemia and other complications</li>
                <li>Discussion of delivery options and birth preferences</li>
                <li>Birth planning, including when to come to hospital</li>
                <li>Breastfeeding preparation</li>
                <li>Final check-ups as the due date approaches</li>
              </ul>

              <p className="text-gray-700">
                For structured prenatal care, see the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/antenatal-services"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Antenatal Services
                </a>{" "}
                page.
              </p>
            </div>

            {/* Section 7 — Tests and Scans */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Essential Tests and Scans During Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Your maternity doctor may recommend:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests: hemoglobin, blood group and Rh factor, sugar, thyroid, and infection screening</li>
                <li>Urine tests: to check for infection and protein</li>
                <li>Dating and viability scan: early pregnancy ultrasound</li>
                <li>NT scan and double marker: screening in the first trimester, when advised</li>
                <li>Anomaly scan: detailed ultrasound in the second trimester</li>
                <li>Glucose tolerance test: to screen for gestational diabetes</li>
                <li>Growth scans: to track the baby&apos;s size and fluid levels</li>
                <li>Doppler studies: in selected cases, to assess blood flow</li>
                <li>Non-stress test (NST): in some cases near term</li>
              </ul>

              <p className="text-gray-700">
                Why it matters: These checks help detect issues early, when
                they are easier to manage.
              </p>
            </div>

            {/* Section 8 — Nutrition and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition and Lifestyle Guidance From Your Maternity Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                A good doctor does not only treat. She guides you in daily life.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Nutrition Tips Commonly Advised
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat balanced meals with protein, whole grains, fruits and vegetables</li>
                <li>Include iron-rich foods such as spinach, dates, jaggery and lean meat</li>
                <li>Get enough calcium from milk, curd and paneer</li>
                <li>Drink plenty of water</li>
                <li>Take prescribed supplements regularly</li>
                <li>Limit caffeine and avoid raw or unhygienic food</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Tips Commonly Advised
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gentle walking and doctor-approved exercise</li>
                <li>Adequate sleep, preferably on the left side in later pregnancy</li>
                <li>Avoid smoking, alcohol and unprescribed medicines</li>
                <li>Manage stress through relaxation and support</li>
                <li>Avoid heavy lifting and long periods of standing</li>
              </ul>
            </div>

            {/* Section 9 — Warning Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: When to Call Your Maternity Doctor Right Away
              </h2>

              <p className="mb-4 text-gray-700">
                Never wait for your next appointment if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding or fluid leakage</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache, blurred vision or sudden swelling of the face and hands</li>
                <li>High fever or burning urination</li>
                <li>Persistent vomiting that prevents eating or drinking</li>
                <li>Regular contractions before 37 weeks</li>
                <li>Chest pain or difficulty breathing</li>
                <li>Sudden swelling or pain in one leg</li>
              </ul>
            </div>

            {/* Section 10 — Delivery Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Care: Normal Delivery, C-Section and Emergencies
              </h2>

              <p className="mb-4 text-gray-700">
                Your maternity doctor guides you toward the safest delivery
                option for your situation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal (Vaginal) Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Generally preferred when it is safe for mother and baby</li>
                <li>Shorter recovery and hospital stay</li>
                <li>Supported by monitoring, pain relief options and encouragement during labor</li>
              </ul>

              <p className="mb-4 text-gray-700">
                See the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/normal-delivery"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Normal Delivery
                </a>{" "}
                page for details on gentle natural birth care.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                C-Section (Cesarean Delivery)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recommended when a normal delivery may be unsafe</li>
                <li>Common reasons include breech position, placenta previa, fetal distress, stalled labor and certain maternal conditions</li>
                <li>Performed under spinal or epidural anesthesia in most cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emergencies During Labor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden changes in the baby&apos;s heart rate</li>
                <li>Heavy bleeding</li>
                <li>Cord complications</li>
                <li>Prolonged labor</li>
              </ul>

              <p className="text-gray-700">
                Why continuity matters: A doctor who has followed your pregnancy
                knows your history, so she can make faster and more confident
                decisions if plans change.
              </p>
            </div>

            {/* Section 11 — High-Risk Pregnancy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                High-Risk Pregnancy: Extra Care When You Need It
              </h2>

              <p className="mb-4 text-gray-700">
                Some pregnancies need closer monitoring. A maternity doctor with
                experience in high-risk care becomes especially important if you
                have:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Twins or multiple pregnancy</li>
                <li>Previous miscarriages or preterm births</li>
                <li>Previous C-section or uterine surgery</li>
                <li>Placenta problems</li>
                <li>Age above 35 or below 18</li>
                <li>Anemia, heart disease or kidney problems</li>
                <li>Infections or other chronic conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                High-Risk Care May Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Special tests and monitoring</li>
                <li>Medication adjustments</li>
                <li>Planning delivery in a well-equipped setting</li>
              </ul>
            </div>

            {/* Section 12 — Postnatal Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal Care: Your Doctor&apos;s Role After Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                The care does not end with birth. The weeks after delivery are
                crucial for healing.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postnatal Care Includes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Checking your bleeding, uterus, wound and blood pressure</li>
                <li>Pain management and wound care</li>
                <li>Breastfeeding support and guidance</li>
                <li>Nutrition and iron or calcium supplements</li>
                <li>Screening for baby blues and postpartum depression</li>
                <li>Advice on rest, activity and recovery</li>
                <li>Contraception counselling and family planning</li>
                <li>A check-up at about 6 weeks after delivery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Contact Your Doctor If You Notice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever</li>
                <li>Heavy bleeding or foul-smelling discharge</li>
                <li>Redness, swelling or pus at the wound</li>
                <li>Severe pain</li>
                <li>Persistent sadness, anxiety or hopelessness</li>
              </ul>
            </div>

            {/* Section 13 — Newborn Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Newborn Care: Support for Your Baby Too
              </h2>

              <p className="mb-4 text-gray-700">
                Many families also want newborn care at the same place.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Newborn Support May Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Initial examination of your baby after birth</li>
                <li>Guidance on feeding, sleep and hygiene</li>
                <li>Vaccination schedule</li>
                <li>Monitoring of jaundice, weight and growth</li>
                <li>Advice on common newborn concerns</li>
              </ul>

              <p className="text-gray-700">
                Dr. Priyanka Gynaec also offers consultations, vaccinations and
                newborn care, which you can read about on the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/paediatrics"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paediatric Care
                </a>{" "}
                page.
              </p>
            </div>

            {/* Section 14 — How to Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Maternity Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Use this checklist:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Check Qualifications
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A recognized degree in obstetrics and gynaecology</li>
                <li>Valid medical council registration</li>
                <li>Extra training or fellowships</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Look at Experience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Experience with normal deliveries, C-sections and high-risk cases</li>
                <li>Comfort handling emergencies</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Evaluate Communication
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Explains clearly in simple language</li>
                <li>Listens to your concerns patiently</li>
                <li>Respects your questions and preferences</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Consider Comfort
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many women prefer a lady doctor for ease and trust</li>
                <li>Choose someone you feel safe with</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Inspect the Facilities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean clinic and operation theatre</li>
                <li>Anesthetist and newborn support available</li>
                <li>Emergency readiness</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Check Accessibility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Convenient location for regular visits</li>
                <li>Reachable for urgent concerns</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Ask About Costs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear, written estimate</li>
                <li>Understanding of what is and is not included</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Read Reviews and Seek Recommendations
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Feedback from other mothers</li>
                <li>Consistent positive experiences</li>
              </ul>
            </div>

            {/* Section 15 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-6 text-black">
                Dr. Priyanka Pachauri: Best Gynaecologist in Moradabad
              </p>

              <p className="mb-6 text-black">
                Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 16 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}