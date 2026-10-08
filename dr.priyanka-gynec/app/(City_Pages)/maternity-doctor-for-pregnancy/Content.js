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

export default function MaternityDoctorForPregnancy() {
  const faqs = [
    {
      q: "Why do I need a maternity doctor for pregnancy?",
      a: "She monitors you and your baby, detects problems early and plans a safe delivery.",
    },
    {
      q: "When should I first see a doctor in pregnancy?",
      a: "As soon as the test is positive, ideally within 8 to 12 weeks.",
    },
    {
      q: "How often are check-ups needed?",
      a: "Usually monthly at first, then more often in the last trimester.",
    },
    {
      q: "Which scans are done in pregnancy?",
      a: "An early dating scan, anomaly scan around 18 to 20 weeks, and growth scans later.",
    },
    {
      q: "What are warning signs in pregnancy?",
      a: "Bleeding, severe pain, fluid leakage, reduced baby movements and severe headache.",
    },
    {
      q: "Is exercise safe during pregnancy?",
      a: "Gentle activity such as walking is usually safe with your doctor's approval.",
    },
    {
      q: "Can I choose a lady doctor for pregnancy?",
      a: "Yes. Many women prefer one for comfort, as long as she is qualified and experienced.",
    },
    {
      q: "Will my doctor suggest a C-section?",
      a: "Only when it is medically needed. A good doctor supports normal delivery when safe.",
    },
    {
      q: "Do I need care after delivery?",
      a: "Yes. A postnatal check-up around 6 weeks supports your recovery and emotional health.",
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
                Maternity Doctor for Pregnancy: Your Guide to Safe Care From the First Test to Delivery
              </h1>

              <p className="mb-4 text-gray-700">
                A pregnancy lasts about nine months, and in that time your body,
                your baby and your daily life change in many ways. Having the
                right maternity doctor for pregnancy by your side turns that
                journey from uncertain to reassuring.
              </p>

              <p className="mb-4 text-gray-700">
                She does not only treat problems. She prevents them, explains
                what is normal, and helps you make good decisions at every
                stage.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Why a maternity doctor matters in pregnancy</li>
                <li>Care in each trimester</li>
                <li>Common discomforts and when to worry</li>
                <li>Nutrition, exercise and lifestyle guidance</li>
                <li>High-risk pregnancy care</li>
                <li>Planning your delivery</li>
                <li>How to choose the right doctor</li>
              </ul>
            </div>

            {/* Section 2 — Why You Need */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do You Need a Maternity Doctor for Pregnancy?
              </h2>

              <p className="mb-4 text-gray-700">
                Many women feel fine in early pregnancy and wonder if visits are
                necessary. They are, because several problems begin silently.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Maternity Doctor Helps You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirm the pregnancy and know your due date</li>
                <li>Track your baby&apos;s growth and heartbeat</li>
                <li>Detect hidden problems such as anemia, high blood pressure or gestational diabetes</li>
                <li>Start the right supplements at the right time</li>
                <li>Understand which symptoms are normal and which are not</li>
                <li>Plan the safest delivery</li>
                <li>Feel supported emotionally</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Without Regular Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Warning signs can be missed</li>
                <li>Complications may be detected late</li>
                <li>Anxiety and confusion can increase</li>
              </ul>
            </div>

            {/* Section 3 — When to See */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Maternity Doctor for Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">Earlier is better.</p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Book a Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Before conceiving, for preconception advice</li>
                <li>As soon as your pregnancy test is positive</li>
                <li>Ideally within the first 8 to 12 weeks</li>
                <li>Immediately if you have bleeding, severe pain or persistent vomiting</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See Her Sooner If You Have
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A history of miscarriage or ectopic pregnancy</li>
                <li>A previous C-section or uterine surgery</li>
                <li>Diabetes, thyroid disease, high blood pressure or PCOS</li>
                <li>Age above 35</li>
                <li>Twins or multiple pregnancy</li>
              </ul>
            </div>

            {/* Section 4 — Preconception */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preconception Care: Before You Get Pregnant
              </h2>

              <p className="mb-4 text-gray-700">
                A good doctor can help even before the test turns positive.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Preconception Visits May Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reviewing your medical history and current medicines</li>
                <li>Checks for anemia, thyroid issues, blood sugar and blood pressure</li>
                <li>Starting folic acid before conception</li>
                <li>Vaccination review</li>
                <li>Advice on weight, diet and exercise</li>
                <li>Stopping smoking, alcohol and unsafe medicines</li>
                <li>Guidance if conception is taking longer than expected</li>
              </ul>
            </div>

            {/* Section 5 — First Trimester */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First Trimester Care (Weeks 1 to 12)
              </h2>

              <p className="mb-4 text-gray-700">
                The first three months are when the baby&apos;s organs begin to
                form, so careful guidance matters.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Your Doctor Does
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms the pregnancy with a test and early ultrasound</li>
                <li>Checks the baby&apos;s heartbeat and location</li>
                <li>Calculates your due date</li>
                <li>Orders blood tests: hemoglobin, blood group and Rh factor, sugar, thyroid and infection screening</li>
                <li>Starts folic acid, iron and other supplements as needed</li>
                <li>Reviews all your medicines for safety</li>
                <li>Advises on food hygiene, rest and safe activity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common First-Trimester Experiences
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Nausea and vomiting</li>
                <li>Tiredness and sleepiness</li>
                <li>Breast tenderness</li>
                <li>Frequent urination</li>
                <li>Mood swings</li>
                <li>Light cramping or mild spotting in some cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Your Doctor If You Notice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy bleeding or passing tissue</li>
                <li>Severe or one-sided abdominal pain</li>
                <li>Vomiting so severe that you cannot keep fluids down</li>
                <li>Fever, burning urination or dizziness</li>
              </ul>
            </div>

            {/* Section 6 — Second Trimester */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Second Trimester Care (Weeks 13 to 27)
              </h2>

              <p className="mb-4 text-gray-700">
                This is often called the most comfortable phase, and also an
                important time for scans.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Your Doctor Does
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monthly check-ups of weight, blood pressure and baby&apos;s growth</li>
                <li>Detailed anomaly scan around 18 to 20 weeks to check the baby&apos;s organs</li>
                <li>Screening for gestational diabetes around 24 to 28 weeks</li>
                <li>Vaccinations as advised, such as tetanus</li>
                <li>Review of iron, calcium and other supplements</li>
                <li>Guidance on gentle exercise and sleep positions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Second-Trimester Experiences
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More energy and less nausea</li>
                <li>Feeling the baby move for the first time</li>
                <li>Growing bump and stretching skin</li>
                <li>Backache, leg cramps or mild swelling</li>
                <li>Heartburn and constipation</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Your Doctor If You Notice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reduced or absent baby movements</li>
                <li>Fluid leakage or bleeding</li>
                <li>Persistent severe headache or blurred vision</li>
                <li>Sudden swelling of the face and hands</li>
                <li>Regular tightening or pain in the lower abdomen</li>
              </ul>
            </div>

            {/* Section 7 — Third Trimester */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Third Trimester Care (Weeks 28 to Delivery)
              </h2>

              <p className="mb-4 text-gray-700">
                The final stretch needs closer monitoring and preparation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Your Doctor Does
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check-ups about every 2 weeks, then weekly near the due date</li>
                <li>Growth scans and checks on the baby&apos;s position</li>
                <li>Monitoring for pre-eclampsia, anemia and other complications</li>
                <li>Reviewing your baby&apos;s movement pattern</li>
                <li>Discussing delivery options and your birth preferences</li>
                <li>Planning when to come to the hospital</li>
                <li>Preparing you for breastfeeding and newborn care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Third-Trimester Experiences
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tiredness and difficulty sleeping</li>
                <li>Swelling in feet and ankles</li>
                <li>Frequent urination and pelvic pressure</li>
                <li>Braxton Hicks (practice) contractions</li>
                <li>Shortness of breath as the baby grows</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Your Doctor If You Notice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular painful contractions before 37 weeks</li>
                <li>Water breaking</li>
                <li>Heavy bleeding</li>
                <li>Reduced baby movements</li>
                <li>Severe headache with vision changes or upper abdominal pain</li>
              </ul>
            </div>

            {/* Section 8 — Tests and Scans */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans in Pregnancy: What and Why
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early dating scan: confirms the pregnancy and due date</li>
                <li>Blood tests: hemoglobin, blood group, sugar, thyroid and infection screening</li>
                <li>Urine tests: check for infection and protein</li>
                <li>NT scan and screening tests: in the first trimester, when advised</li>
                <li>Anomaly scan: detailed look at the baby&apos;s growth and organs</li>
                <li>Glucose tolerance test: screens for gestational diabetes</li>
                <li>Growth scans: track the baby&apos;s size and fluid levels</li>
                <li>Doppler studies: in selected cases to check blood flow</li>
              </ul>

              <p className="text-gray-700">
                Why they matter: Early detection makes treatment simpler and
                safer.
              </p>

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

            {/* Section 9 — Nutrition */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition Guidance From Your Maternity Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Good food supports your baby&apos;s growth and your own
                strength.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods That Help
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Protein: dal, eggs, paneer, curd, milk, fish, chicken and sprouts</li>
                <li>Iron-rich foods: spinach, beetroot, dates, jaggery and lean meat</li>
                <li>Calcium: milk, curd, paneer and ragi</li>
                <li>Vitamin C: oranges, amla, guava and lemon to help iron absorption</li>
                <li>Fiber: fruits, vegetables, whole grains and salads to prevent constipation</li>
                <li>Healthy fats: nuts, seeds and a little ghee</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Habits to Follow
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat small, frequent meals</li>
                <li>Drink plenty of water</li>
                <li>Take prescribed supplements regularly</li>
                <li>Wash fruits and vegetables well and eat freshly cooked food</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Limit or Avoid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Raw or undercooked meat and eggs</li>
                <li>Unpasteurized dairy</li>
                <li>Excess caffeine</li>
                <li>Alcohol and smoking</li>
                <li>Unprescribed medicines and herbal remedies</li>
              </ul>
            </div>

            {/* Section 10 — Exercise */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Exercise and Lifestyle in Pregnancy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Usually Safe With Doctor Approval
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gentle walking</li>
                <li>Prenatal yoga and stretching</li>
                <li>Breathing and relaxation exercises</li>
                <li>Pelvic floor (Kegel) exercises</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Avoid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy lifting and strenuous workouts</li>
                <li>Activities with a risk of falls or abdominal injury</li>
                <li>Lying flat on the back for long periods in late pregnancy</li>
                <li>Overheating, such as hot baths or saunas</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Tips
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sleep on your left side in later pregnancy</li>
                <li>Rest when tired</li>
                <li>Keep regular meal and sleep times</li>
                <li>Manage stress with relaxation and family support</li>
                <li>Follow travel advice from your doctor</li>
              </ul>
            </div>

            {/* Section 11 — Emotional Health */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Health During Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy affects your mind as much as your body.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Feelings
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Excitement mixed with worry</li>
                <li>Mood swings</li>
                <li>Fear about labor or the baby&apos;s health</li>
                <li>Tiredness and irritability</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Your Doctor Can Help By
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Listening without judgment</li>
                <li>Explaining what is normal</li>
                <li>Screening for anxiety and depression</li>
                <li>Involving your family in support</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Seek Help If You Feel
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Persistent sadness or hopelessness</li>
                <li>Constant, overwhelming anxiety</li>
                <li>Loss of interest in daily life</li>
                <li>Thoughts of harming yourself</li>
              </ul>
            </div>

            {/* Section 12 — High-Risk */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                High-Risk Pregnancy: When You Need Extra Care
              </h2>

              <p className="mb-4 text-gray-700">
                Some pregnancies need closer follow-up from a doctor with
                experience in complicated cases.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Risk Factors Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Twins or multiple pregnancy</li>
                <li>Previous miscarriages or preterm birth</li>
                <li>Previous C-section or uterine surgery</li>
                <li>Placenta problems</li>
                <li>Age above 35 or below 18</li>
                <li>Anemia, heart disease or kidney problems</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Extra Care May Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Special monitoring tests</li>
                <li>Careful medicine adjustments</li>
                <li>Planning delivery in a well-equipped setting</li>
                <li>Honest discussion about risks and choices</li>
              </ul>
            </div>

            {/* Section 13 — Delivery Planning */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Delivery With Your Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                By the last trimester, you and your doctor should discuss how
                you will give birth.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Usually preferred when it is safe</li>
                <li>Shorter recovery and hospital stay</li>
                <li>Supported by monitoring and comfort measures</li>
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
                C-Section
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Advised when it is safer for you or your baby</li>
                <li>Common reasons include breech position, placenta previa, fetal distress and stalled labor</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions to Discuss
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What delivery method is likely in my case?</li>
                <li>When should I come to the hospital?</li>
                <li>What pain relief is available?</li>
                <li>Can my husband or family member stay with me?</li>
                <li>What happens in an emergency?</li>
                <li>What is the expected cost?</li>
              </ul>

              <p className="text-gray-700">
                You can read more on the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/pregnancy-birthing"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pregnancy &amp; Birthing Care
                </a>{" "}
                page.
              </p>
            </div>

            {/* Section 14 — Hospital Bag */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Hospital Bag Checklist
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>ID, insurance papers and medical records</li>
                <li>Comfortable loose clothing and nursing tops</li>
                <li>Sanitary pads and toiletries</li>
                <li>Slippers, phone and charger</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Your Baby
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soft cotton clothes and wraps</li>
                <li>Diapers and wipes</li>
                <li>Blankets and caps</li>
              </ul>

              <p className="text-gray-700">
                Tip: Keep the bag ready by about 34 to 36 weeks.
              </p>
            </div>

            {/* Section 15 — Postnatal */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Pregnancy: Postnatal and Newborn Care
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor&apos;s role continues after birth.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Checks on bleeding, recovery and any stitches or wound</li>
                <li>Breastfeeding support</li>
                <li>Emotional health screening for baby blues and postpartum depression</li>
                <li>A check-up at around 6 weeks</li>
                <li>Contraception and family planning advice</li>
                <li>Referral for newborn care, vaccinations and growth checks</li>
              </ul>

              <p className="text-gray-700">
                See the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/paediatrics"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Paediatric Care
                </a>{" "}
                page for newborn support.
              </p>
            </div>

            {/* Section 16 — Choose Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Maternity Doctor for Your Pregnancy
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications: MS, MD or DNB in obstetrics and gynaecology, with valid registration</li>
                <li>Experience: normal deliveries, C-sections and high-risk cases</li>
                <li>Communication: clear, patient and respectful</li>
                <li>Honesty: surgery advised only when truly needed</li>
                <li>Comfort: many women prefer a lady doctor for ease and trust</li>
                <li>Facilities: clean clinic, ultrasound, operation theatre and emergency readiness</li>
                <li>Availability: reachable for urgent concerns</li>
                <li>Transparent costs: a clear, written estimate</li>
              </ul>
            </div>

            {/* Section 17 — Contact */}
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

            {/* Section 18 — FAQs */}
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
