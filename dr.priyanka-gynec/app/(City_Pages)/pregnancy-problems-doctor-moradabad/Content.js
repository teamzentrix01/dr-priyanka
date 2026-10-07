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


export default function PregnancyProblemsDoctorMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for pregnancy problems?",
      a: "A gynaecologist or obstetrician experienced in antenatal and high-risk pregnancy care.",
    },
    {
      q: "When should I book my first pregnancy visit?",
      a: "As soon as your home pregnancy test is positive.",
    },
    {
      q: "Is spotting in pregnancy normal?",
      a: "It can be, but any bleeding should be checked by a doctor.",
    },
    {
      q: "What are danger signs in pregnancy?",
      a: "Heavy bleeding, severe pain, fluid leakage, severe headache, blurred vision or reduced baby movements.",
    },
    {
      q: "What is a high-risk pregnancy?",
      a: "One needing extra monitoring due to age, health conditions or past complications.",
    },
    {
      q: "Does Dr. Priyanka offer antenatal care in Moradabad?",
      a: "Yes. The clinic lists antenatal services, pregnancy and birthing care and normal delivery.",
    },
    {
      q: "Are ultrasound scans available?",
      a: "The clinic highlights 3D/4D ultrasound. Confirm scan timing when booking.",
    },
    {
      q: "Does the clinic handle emergencies or deliveries at night?",
      a: "Please confirm emergency and delivery arrangements directly with the clinic.",
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
                Pregnancy Problems Doctor in Moradabad: Safe, Caring Support
                from Test to Delivery
              </h1>


              <p className="mb-4 text-gray-700">
                Pregnancy is exciting, but it can also be worrying. A little
                spotting, a sudden headache or a drop in baby movements can send
                your mind racing. If you are searching for a pregnancy problems
                doctor in Moradabad, you want someone who listens, explains
                clearly and acts quickly when something is not right.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Counts as a &quot;Pregnancy Problem&quot;?
              </h2>


              <p className="mb-4 text-gray-700">
                Not every discomfort is dangerous, but some symptoms need
                medical attention. Pregnancy problems can involve you, your baby
                or both.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Problems Affecting the Mother
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Nausea and vomiting that stop you from eating or drinking</li>
                <li>High blood pressure and pre-eclampsia</li>
                <li>Gestational diabetes</li>
                <li>Anaemia</li>
                <li>Thyroid disorders</li>
                <li>Urinary tract infections</li>
                <li>Bleeding or spotting</li>
                <li>Severe back pain or pelvic pain</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Problems Affecting the Baby
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Slow growth</li>
                <li>Low amniotic fluid</li>
                <li>Abnormal baby position near delivery</li>
                <li>Changes in heart rate</li>
                <li>Twin or multiple pregnancy complications</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy-Specific Complications
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Threatened miscarriage</li>
                <li>Ectopic pregnancy</li>
                <li>Placenta previa or placental problems</li>
                <li>Preterm labour</li>
                <li>Cervical weakness</li>
                <li>Post-dates pregnancy (going past the due date)</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Signs: Do Not Wait for an Appointment
              </h2>


              <p className="mb-4 text-gray-700">
                Go to the nearest hospital immediately if you notice any of
                these.
              </p>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy vaginal bleeding or soaking through a pad</li>
                <li>Severe abdominal pain that does not ease</li>
                <li>
                  Sudden severe headache with blurred vision or flashing lights
                </li>
                <li>Sudden swelling of the face, hands or feet</li>
                <li>Fluid leaking from the vagina</li>
                <li>Baby moving much less than usual</li>
                <li>Fever with chills</li>
                <li>Seizures or fainting</li>
                <li>Chest pain or severe breathlessness</li>
                <li>Regular painful contractions before 37 weeks</li>
              </ul>


              <p className="text-gray-700">
                Tip: Keep the clinic number, a hospital name and a family
                member&apos;s number saved on your phone, so you can act without
                delay.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Pregnancy Doctor?
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                As Soon as You Suspect Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A positive home pregnancy test</li>
                <li>Missed period with nausea or tiredness</li>
                <li>
                  Early booking allows timely scans, folic acid and risk
                  assessment
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Regular Antenatal Visits
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Routine check-ups across all trimesters</li>
                <li>Blood pressure, weight, urine and growth checks</li>
                <li>Ultrasound scans at the recommended times</li>
                <li>Vaccinations and supplements</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Visit Sooner If You Have
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Spotting or light bleeding</li>
                <li>Persistent vomiting</li>
                <li>Severe tiredness or dizziness</li>
                <li>Burning with urination</li>
                <li>Swelling that worsens</li>
                <li>
                  A history of miscarriage, stillbirth, caesarean or preterm
                  delivery
                </li>
                <li>
                  Pre-existing diabetes, thyroid disease, hypertension or PCOS
                </li>
                <li>Pregnancy after IVF or fertility treatment</li>
                <li>Age under 18 or above 35</li>
                <li>Twin pregnancy</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Pregnancy Problems and What Doctors Do
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Bleeding in Early Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Possible causes: Implantation spotting, threatened miscarriage,
                  infection, ectopic pregnancy
                </li>
                <li>
                  What the doctor does: Examination, ultrasound, blood tests and
                  rest advice when appropriate
                </li>
                <li>
                  See a doctor: Any bleeding with pain, heavy flow or dizziness
                  needs urgent care
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Severe Nausea and Vomiting (Hyperemesis)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Signs: Unable to keep food or water down, weight loss,
                  dizziness
                </li>
                <li>
                  What the doctor does: Checks hydration, advises safe
                  medicines, diet changes and sometimes fluids
                </li>
                <li>
                  See a doctor: If you cannot eat or drink for more than a day
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. High Blood Pressure and Pre-eclampsia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Signs: Headaches, blurred vision, swelling, upper abdominal
                  pain
                </li>
                <li>
                  What the doctor does: Regular blood pressure checks, urine
                  tests, blood tests, growth scans and delivery planning
                </li>
                <li>
                  Why it matters: Untreated, it can seriously affect mother and
                  baby
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Gestational Diabetes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Signs: Often none, found on screening</li>
                <li>
                  What the doctor does: Blood sugar testing, diet advice,
                  monitoring and medicines or insulin when needed
                </li>
                <li>
                  Why it matters: Good control lowers risks for the baby
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Anaemia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Signs: Tiredness, paleness, breathlessness, hair fall</li>
                <li>
                  What the doctor does: Blood tests, iron and vitamin
                  supplements and diet advice
                </li>
                <li>
                  Why it matters: Anaemia raises the risk of tiredness, preterm
                  birth and heavy bleeding after delivery
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Thyroid Disorders
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>What the doctor does: Thyroid tests and dose adjustment</li>
                <li>
                  Why it matters: Untreated thyroid problems can affect
                  baby&apos;s development
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Urinary and Vaginal Infections
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Signs: Burning, frequent urination, itching, discharge
                </li>
                <li>
                  What the doctor does: Urine and swab tests and pregnancy-safe
                  treatment
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Low Amniotic Fluid or Slow Baby Growth
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What the doctor does: Growth scans, fluid assessment and
                  timing of delivery
                </li>
                <li>Why it matters: Close monitoring protects the baby</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Preterm Labour
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Signs: Regular tightening, lower back pain, pelvic pressure,
                  fluid leakage before 37 weeks
                </li>
                <li>
                  What the doctor does: Examination, scans and treatment to
                  support the baby and prolong pregnancy when possible
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Placental Problems
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Examples: Low-lying placenta (placenta previa) or placental
                  separation
                </li>
                <li>Signs: Painless or painful bleeding</li>
                <li>
                  What the doctor does: Scans, rest advice and planned delivery
                  strategy
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding High-Risk Pregnancy
              </h2>


              <p className="mb-4 text-gray-700">
                A pregnancy is called high-risk when mother, baby or both need
                extra monitoring. It does not mean something will go wrong. It
                means closer care.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Reasons for High-Risk Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Age under 18 or above 35</li>
                <li>Previous miscarriages or preterm births</li>
                <li>Previous caesarean section</li>
                <li>High blood pressure, diabetes or thyroid disease</li>
                <li>Twin or multiple pregnancy</li>
                <li>Anaemia</li>
                <li>Pregnancy after IVF</li>
                <li>Placental problems</li>
                <li>Slow baby growth</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What High-Risk Care Usually Includes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits</li>
                <li>Additional blood tests and scans</li>
                <li>Careful monitoring of blood pressure and sugar</li>
                <li>Medicines and supplements</li>
                <li>A personalised delivery plan</li>
                <li>Clear emergency instructions</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans in a Pregnancy Journey
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirmation scan to check location and heartbeat</li>
                <li>
                  Blood group, haemoglobin, thyroid and infection screening
                </li>
                <li>Early dating scan</li>
                <li>Folic acid and vitamin advice</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed anomaly scan (commonly around 18–20 weeks)
                </li>
                <li>Glucose screening for gestational diabetes</li>
                <li>Blood pressure and weight tracking</li>
                <li>Iron and calcium supplements</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Growth scans</li>
                <li>Fluid and placental position checks</li>
                <li>Baby position and heart rate monitoring</li>
                <li>Birth planning discussion</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advanced Imaging
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The clinic highlights 3D/4D ultrasound capability for detailed
                  scanning
                </li>
                <li>
                  Your doctor will advise which scans suit your situation
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Trimester-by-Trimester Care Checklist
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester (Weeks 1–13)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Start folic acid as advised</li>
                <li>Attend your first antenatal visit early</li>
                <li>
                  Avoid alcohol, smoking and unprescribed medicines
                </li>
                <li>Manage nausea with small, frequent meals</li>
                <li>Report bleeding or severe pain</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester (Weeks 14–27)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend the anomaly scan</li>
                <li>Continue iron and calcium</li>
                <li>Stay active with gentle walking</li>
                <li>Watch for swelling and headaches</li>
                <li>Begin feeling baby movements</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester (Weeks 28–40)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Count baby movements daily</li>
                <li>Attend growth scans and check-ups</li>
                <li>Prepare your hospital bag and documents</li>
                <li>Learn labour signs</li>
                <li>
                  Discuss delivery options and pain relief with your doctor
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery and Caesarean: Planning with Your Doctor
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Preferred when the pregnancy is low-risk</li>
                <li>Faster recovery and early return to routine</li>
                <li>
                  The clinic highlights gentle, normal-delivery-focused care
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Caesarean Section
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Advised for medical reasons such as certain placental
                  problems, abnormal baby position or distress
                </li>
                <li>
                  Planned or emergency depending on the situation
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions to Ask About Delivery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What delivery option is best for me?</li>
                <li>What pain relief options are available?</li>
                <li>
                  What facilities are available if complications occur?
                </li>
                <li>Who will attend my delivery?</li>
                <li>What are the emergency arrangements?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle for a Healthy Pregnancy
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Nutritious Foods
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Leafy greens, beans, lentils and sprouts</li>
                <li>Milk, curd and paneer for calcium and protein</li>
                <li>
                  Eggs, fish and lean meat, if non-vegetarian and well cooked
                </li>
                <li>Fruits such as oranges, guava and banana</li>
                <li>Nuts, seeds, dates and jaggery in moderation</li>
                <li>Plenty of water</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to Avoid or Limit
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Raw or undercooked meat, eggs and fish</li>
                <li>Unpasteurised milk and soft cheeses</li>
                <li>Excess caffeine</li>
                <li>Alcohol and tobacco</li>
                <li>Street food with poor hygiene</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Healthy Habits
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Walk gently every day, if your doctor agrees</li>
                <li>Sleep on your side with pillow support</li>
                <li>Take prescribed supplements regularly</li>
                <li>Avoid heavy lifting and stress</li>
                <li>Practise relaxation and breathing exercises</li>
                <li>Avoid self-medication</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Patient-first philosophy: &quot;Her Health First&quot; shapes
                  every visit
                </li>
                <li>
                  Experienced gynaecologist: Dr. Priyanka Pachauri is known for
                  antenatal and postnatal care, high-risk pregnancies and
                  safe-motherhood focused care
                </li>
                <li>
                  Complete pregnancy services: Antenatal Services, Pregnancy
                  &amp; Birthing Care and Normal Delivery
                </li>
                <li>Advanced imaging: 3D/4D ultrasound for detailed scans</li>
                <li>
                  Surgical expertise: Laparoscopic and gynaecological surgery
                  when needed
                </li>
                <li>
                  Fertility support: Fertility and IVF services for women
                  planning or recovering from fertility treatment
                </li>
                <li>
                  Newborn and child care: Paediatric consultations and
                  vaccinations are listed among the services
                </li>
                <li>
                  Continuity of care: The same team follows your history across
                  visits
                </li>
                <li>
                  Clear communication: Options and risks are explained in simple
                  language
                </li>
                <li>Easy contact: Phone, WhatsApp and email</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Before You Visit: Preparation Tips
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Gather Information
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>First day of your last period</li>
                <li>Symptoms and when they started</li>
                <li>Current medicines and supplements</li>
                <li>Allergies</li>
                <li>Previous pregnancies, miscarriages or surgeries</li>
                <li>
                  Family history of diabetes, high blood pressure or twins
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bring Documents
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous scan and blood reports</li>
                <li>Old prescriptions</li>
                <li>Vaccination records</li>
                <li>Photo ID</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prepare Questions
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is my pregnancy normal so far?</li>
                <li>Which tests do I need and when?</li>
                <li>
                  What symptoms should make me call immediately?
                </li>
                <li>What can I eat and avoid?</li>
                <li>What delivery options suit me?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Partner and Family Support
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend appointments together when possible</li>
                <li>Learn the warning signs</li>
                <li>Help with healthy meals and rest</li>
                <li>Keep emergency numbers handy</li>
                <li>Plan transport to the hospital in advance</li>
                <li>
                  Offer emotional support, as mood swings and anxiety are common
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mental Health in Pregnancy
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mood changes, worry and tearfulness can happen</li>
                <li>
                  Persistent sadness, loss of interest or panic needs attention
                </li>
                <li>Talk openly with your doctor</li>
                <li>Rest, nutrition and gentle activity help</li>
                <li>
                  Seek urgent help if you have thoughts of harming yourself or
                  the baby
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Bleeding in pregnancy is always normal.{" "}
                  <strong>Fact:</strong> Any bleeding should be checked.
                </li>
                <li>
                  <strong>Myth:</strong> You must eat for two.{" "}
                  <strong>Fact:</strong> Quality matters more than quantity.
                </li>
                <li>
                  <strong>Myth:</strong> Normal delivery is always possible.{" "}
                  <strong>Fact:</strong> Some situations need caesarean for
                  safety.
                </li>
                <li>
                  <strong>Myth:</strong> Exercise harms the baby.{" "}
                  <strong>Fact:</strong> Gentle, doctor-approved activity is
                  usually beneficial.
                </li>
                <li>
                  <strong>Myth:</strong> Medicines are always unsafe.{" "}
                  <strong>Fact:</strong> Many are safe, but only when prescribed
                  by your doctor.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment Today
              </h2>


              <p className="mb-4 text-gray-700">
                Do not wait and worry. Early advice brings peace of mind and
                better protection for you and your baby.
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


                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
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
