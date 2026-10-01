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

export default function DoctorForPregnancyAnemiaMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for anaemia in pregnancy in Moradabad?",
      a: "A gynaecologist experienced in high-risk antenatal care, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "What haemoglobin level is considered anaemia in pregnancy?",
      a: "Generally below 11 g/dL in the first and third trimesters, and below 10.5 g/dL in the second.",
    },
    {
      q: "What are the common symptoms of anaemia?",
      a: "Tiredness, pale skin, dizziness, breathlessness and a fast heartbeat. WhatsApp: +91 89796 70705.",
    },
    {
      q: "Is anaemia harmful to my baby?",
      a: "Untreated anaemia can cause low birth weight and preterm birth, but timely treatment lowers these risks.",
    },
    {
      q: "Can I treat anaemia with diet alone?",
      a: "Diet helps, but most women also need iron and folic acid tablets prescribed by their doctor.",
    },
    {
      q: "How should I take iron tablets?",
      a: "With vitamin C, and away from tea, coffee, milk and calcium. Follow your doctor's dose.",
    },
    {
      q: "When are iron injections needed?",
      a: "When tablets are not tolerated, not working, or anaemia is moderate to severe. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Do iron tablets cause constipation?",
      a: "They can. Eat fibre, drink water and ask your doctor for advice if it continues.",
    },
    {
      q: "Can I deliver normally with anaemia?",
      a: "Often yes, if anaemia is controlled and there are no other complications.",
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
                Doctor for Pregnancy Anemia in Moradabad: Symptoms, Treatment
                and Diet Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Feeling tired, weak or breathless during pregnancy is often
                brushed off as &quot;normal.&quot; Sometimes, though, the real
                reason is anaemia, a condition in which the body does not have
                enough healthy red blood cells or haemoglobin. It is one of the
                most common health problems in Indian pregnancies, yet it is
                very treatable. If you are looking for a doctor for pregnancy
                anemia in Moradabad, this guide explains the causes, tests,
                treatment and diet that help you and your baby stay healthy.
              </p>

              <p className="mb-4 text-gray-700">
                With early testing and the right treatment, most women recover
                well and deliver safely.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Anaemia in Pregnancy?
              </h2>

              <p className="mb-4 text-gray-700">
                Haemoglobin is the protein in red blood cells that carries
                oxygen to your body and your baby. In pregnancy, your blood
                volume increases a lot, so the need for iron and other nutrients
                rises sharply.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Commonly used haemoglobin (Hb) cut-offs for anaemia in
                pregnancy:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First and third trimesters:</strong> below 11 g/dL.
                </li>
                <li>
                  <strong>Second trimester:</strong> below 10.5 g/dL.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Severity levels used in India:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Mild:</strong> Hb 10 to 10.9 g/dL.
                </li>
                <li>
                  <strong>Moderate:</strong> Hb 7 to 9.9 g/dL.
                </li>
                <li>
                  <strong>Severe:</strong> Hb below 7 g/dL.
                </li>
              </ul>

              <p className="text-gray-700">
                Your doctor may use slightly different limits, so always follow
                your own reports.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Is Anaemia So Common in Pregnancy?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood volume rises by about 40 to 50%, which dilutes
                  haemoglobin.
                </li>
                <li>
                  The baby and placenta use up a lot of your iron stores.
                </li>
                <li>
                  Many women start pregnancy with low iron reserves.
                </li>
                <li>
                  Diets low in iron, protein or vitamin C add to the problem.
                </li>
                <li>
                  Closely spaced pregnancies leave little time to rebuild
                  stores.
                </li>
                <li>Heavy periods before pregnancy reduce iron levels.</li>
                <li>Vomiting and poor appetite limit nutrient intake.</li>
                <li>
                  Worm infections and chronic infections can worsen anaemia.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Anaemia in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Iron deficiency anaemia:</strong> the most common
                  type, caused by too little iron.
                </li>
                <li>
                  <strong>Folate (folic acid) deficiency anaemia:</strong> low
                  folate affects red cell formation.
                </li>
                <li>
                  <strong>Vitamin B12 deficiency anaemia:</strong> more common
                  in vegetarians and can affect nerves too.
                </li>
                <li>
                  <strong>Thalassaemia and sickle cell disease:</strong>
                  inherited blood disorders that need special care.
                </li>
                <li>
                  <strong>Anaemia of chronic disease:</strong> linked to
                  long-term infections or illnesses.
                </li>
                <li>
                  <strong>Blood loss anaemia:</strong> due to bleeding, piles
                  or heavy periods.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Identifying the type is essential, because treatment differs for
                each.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is at Higher Risk?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Women with low Hb before pregnancy.</li>
                <li>Vegetarian or low-protein diets.</li>
                <li>Frequent pregnancies with short gaps.</li>
                <li>Twin or multiple pregnancy.</li>
                <li>Teenage pregnancy.</li>
                <li>Heavy vomiting (hyperemesis).</li>
                <li>History of heavy periods.</li>
                <li>
                  Family history of thalassaemia or sickle cell disease.
                </li>
                <li>Intestinal worms or chronic infection.</li>
                <li>Poor access to regular antenatal care.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms of Anaemia in Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Mild anaemia may cause no symptoms, so testing matters. Common
                signs include:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Constant tiredness or weakness.</li>
                <li>
                  Pale skin, lips, nails or inner eyelids.
                </li>
                <li>Dizziness or light-headedness.</li>
                <li>Shortness of breath on light activity.</li>
                <li>Fast or pounding heartbeat.</li>
                <li>Headache and difficulty concentrating.</li>
                <li>Cold hands and feet.</li>
                <li>Hair fall and brittle nails.</li>
                <li>
                  Unusual cravings for ice, chalk, soil or raw rice (pica).
                </li>
                <li>Swelling of feet in severe cases.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Seek urgent help if you have:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Chest pain or severe breathlessness.</li>
                <li>Fainting.</li>
                <li>Very rapid heartbeat.</li>
                <li>Heavy bleeding.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is Anaemia Diagnosed?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Complete blood count (CBC):</strong> measures
                  haemoglobin, red cell size and other values.
                </li>
                <li>
                  <strong>Serum ferritin:</strong> shows your iron stores.
                </li>
                <li>
                  <strong>Iron studies:</strong> serum iron and transferrin
                  saturation where needed.
                </li>
                <li>
                  <strong>Peripheral blood smear:</strong> examines the shape
                  and size of red cells.
                </li>
                <li>
                  <strong>Vitamin B12 and folate levels:</strong> when
                  deficiency is suspected.
                </li>
                <li>
                  <strong>Haemoglobin electrophoresis:</strong> to detect
                  thalassaemia or sickle cell disease.
                </li>
                <li>
                  <strong>Stool and other tests:</strong> if worm infection or
                  blood loss is suspected.
                </li>
                <li>
                  <strong>Routine screening:</strong> Hb is checked at the
                  first visit and repeated in later trimesters.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Anaemia Matter for You and Your Baby?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible risks to the baby:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Slow growth and low birth weight.</li>
                <li>Preterm birth.</li>
                <li>
                  Low iron stores after birth, leading to anaemia in infancy.
                </li>
                <li>
                  Higher risk of complications in severe maternal anaemia.
                </li>
                <li>
                  Poor development in the long term if untreated.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible risks to the mother:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Extreme fatigue and weak immunity.</li>
                <li>Higher risk of infections.</li>
                <li>Heart strain in severe anaemia.</li>
                <li>
                  Greater risk of heavy bleeding after delivery.
                </li>
                <li>Need for blood transfusion in severe cases.</li>
                <li>Slower recovery and difficulty with breastfeeding.</li>
                <li>
                  Postpartum depression risk is higher with iron deficiency.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Treating anaemia early greatly reduces these risks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment of Anaemia in Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the type, severity and how far along you
                are.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Oral Iron and Folic Acid Tablets
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The standard first treatment for mild to moderate anaemia.
                </li>
                <li>
                  Commonly given as iron-folic acid tablets daily during
                  pregnancy, as your doctor prescribes.
                </li>
                <li>
                  Take exactly as advised, and do not stop when you feel better.
                </li>
                <li>
                  Higher therapeutic doses may be used to treat existing
                  anaemia.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Tips to Take Iron Tablets Properly
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Take it with a source of vitamin C, such as lemon water or an
                  orange.
                </li>
                <li>
                  Avoid taking it with tea, coffee or milk, which reduce
                  absorption.
                </li>
                <li>
                  Keep a gap of about 2 hours between iron and calcium tablets.
                </li>
                <li>
                  Take it at bedtime or after a light meal if it upsets your
                  stomach.
                </li>
                <li>
                  Drink plenty of water and eat fibre to prevent constipation.
                </li>
                <li>
                  Dark or black stools are a common, harmless effect of iron.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Iron Injections or IV Iron
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Used when tablets cause severe side effects or are not
                  working.
                </li>
                <li>
                  Also considered when anaemia is moderate to severe in the
                  second or third trimester, or when delivery is near.
                </li>
                <li>
                  Given under medical supervision in a clinic or hospital.
                </li>
                <li>
                  Works faster than tablets and raises Hb more quickly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Vitamin B12 and Folate Treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Supplements or injections for confirmed deficiencies.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Blood Transfusion
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reserved for severe anaemia, active bleeding, or when delivery
                  is very near.
                </li>
                <li>
                  Given in a hospital where safe blood is available.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Treating the Cause
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Deworming when advised.</li>
                <li>
                  Treating infections, piles or other sources of bleeding.
                </li>
                <li>
                  Special care plans for thalassaemia or sickle cell disease.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Iron-Rich Diet for Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Food supports treatment, but it usually cannot replace
                supplements when anaemia is already present.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Iron-rich foods:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Leafy greens:</strong> spinach (palak), methi, sarson,
                  bathua and amaranth.
                </li>
                <li>
                  <strong>Vegetables:</strong> beetroot, drumstick leaves,
                  pumpkin, peas.
                </li>
                <li>
                  <strong>Fruits:</strong> pomegranate, dates, apple, guava,
                  amla.
                </li>
                <li>
                  <strong>Pulses and legumes:</strong> chana, rajma, lentils,
                  soybean, sprouts.
                </li>
                <li>
                  <strong>Nuts and seeds:</strong> almonds, raisins, dried figs,
                  sesame, flaxseed.
                </li>
                <li>
                  <strong>Whole grains:</strong> ragi, bajra and jowar.
                </li>
                <li>
                  <strong>Non-vegetarian sources:</strong> eggs, chicken, fish
                  and lean meat, where you eat them.
                </li>
                <li>
                  <strong>Jaggery:</strong> in small, controlled amounts, and
                  with care if you have diabetes.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods that improve iron absorption:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lemon, orange, amla, tomato and guava (vitamin C).
                </li>
                <li>Cooking in an iron pan or kadhai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods that reduce iron absorption:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tea and coffee around meals.</li>
                <li>Excess calcium at the same time as iron.</li>
                <li>
                  Very high-fibre bran in large amounts at the same meal.
                </li>
              </ul>

              <p className="text-gray-700">
                <strong>Also important:</strong> Protein (dal, milk, paneer,
                curd and eggs) helps make red blood cells. Folate comes from
                green vegetables, legumes and citrus fruits. Vitamin B12 is in
                milk, curd, eggs, fish and meat. Vegetarians may need
                supplements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sample One-Day Iron-Rich Meal Idea
              </h2>

              <p className="mb-4 text-gray-700">
                This is a general example, and your own plan should come from
                your doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Early morning:</strong> soaked raisins and almonds.
                </li>
                <li>
                  <strong>Breakfast:</strong> vegetable paratha with curd, or
                  moong dal chilla, plus a glass of orange juice or a fruit.
                </li>
                <li>
                  <strong>Mid-morning:</strong> pomegranate or a handful of
                  dates.
                </li>
                <li>
                  <strong>Lunch:</strong> roti, dal, palak sabzi, salad with
                  lemon and curd.
                </li>
                <li>
                  <strong>Evening:</strong> roasted chana or sprouts chaat with
                  lemon.
                </li>
                <li>
                  <strong>Dinner:</strong> khichdi with vegetables, or roti with
                  methi sabzi and paneer or egg.
                </li>
                <li>
                  <strong>Bedtime:</strong> a glass of warm milk, kept apart
                  from the iron tablet by a couple of hours.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Side Effects of Iron Tablets and How to Cope
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Constipation:</strong> eat more fibre, drink water and
                  ask about a mild stool softener.
                </li>
                <li>
                  <strong>Nausea or stomach upset:</strong> take tablets after
                  food or at night.
                </li>
                <li>
                  <strong>Metallic taste:</strong> sip lemon water afterwards.
                </li>
                <li>
                  <strong>Dark stools:</strong> normal and harmless.
                </li>
                <li>
                  <strong>Heartburn:</strong> avoid lying down right after
                  taking the tablet.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If side effects are hard to tolerate, tell your doctor instead
                of stopping. Alternative forms or schedules are available.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Call Your Doctor Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe weakness or fainting.</li>
                <li>Breathlessness at rest.</li>
                <li>Chest pain or a racing heart.</li>
                <li>Heavy vaginal bleeding.</li>
                <li>Severe headache or blurred vision.</li>
                <li>
                  Swelling of face, hands or feet that appears suddenly.
                </li>
                <li>Reduced baby movements.</li>
                <li>Fever with weakness.</li>
                <li>
                  No improvement in tiredness despite taking tablets.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Do not wait for your next visit if any of these appear.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Planning with Anaemia
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Best control before labour:</strong> the aim is to
                  raise Hb well before your due date.
                </li>
                <li>
                  <strong>Delivery at a well-equipped centre:</strong> where
                  blood is available if needed.
                </li>
                <li>
                  <strong>Blood group and cross-match:</strong> kept ready in
                  moderate to severe anaemia.
                </li>
                <li>
                  <strong>Careful labour management:</strong> to reduce the risk
                  of heavy bleeding afterwards.
                </li>
                <li>
                  <strong>Active management of the third stage:</strong>
                  commonly used to lower postpartum bleeding.
                </li>
                <li>
                  <strong>Normal delivery:</strong> often possible when anaemia
                  is controlled and there are no other issues.
                </li>
                <li>
                  <strong>Caesarean section:</strong> decided on obstetric
                  grounds, not only because of anaemia.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After Delivery: Postpartum Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continue iron and calcium:</strong> usually for
                  several months, as advised.
                </li>
                <li>
                  <strong>Eat well:</strong> protein, iron and fluids support
                  recovery and breastfeeding.
                </li>
                <li>
                  <strong>Recheck haemoglobin:</strong> at your postnatal visit.
                </li>
                <li>
                  <strong>Rest properly:</strong> sleep when the baby sleeps and
                  accept family help.
                </li>
                <li>
                  <strong>Watch for heavy bleeding or infection.</strong>
                </li>
                <li>
                  <strong>Breastfeed:</strong> the baby gets nutrition, but you
                  also need to replenish yourself.
                </li>
                <li>
                  <strong>Baby&apos;s iron:</strong> discuss timing of iron
                  supplements and complementary foods with the paediatrician.
                </li>
                <li>
                  <strong>Plan the next pregnancy:</strong> allow time to
                  rebuild iron stores.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventing Anaemia Before and During Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Get a pre-pregnancy check-up and test your haemoglobin.
                </li>
                <li>
                  Start folic acid before conception and continue as advised.
                </li>
                <li>Eat an iron-rich, balanced diet regularly.</li>
                <li>
                  Take prescribed iron and folic acid tablets throughout
                  pregnancy.
                </li>
                <li>Treat heavy periods, piles or infections early.</li>
                <li>Have regular deworming if recommended.</li>
                <li>
                  Maintain a gap of at least 2 years between pregnancies if
                  possible.
                </li>
                <li>
                  Attend every antenatal visit and repeat Hb tests as advised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About Anaemia in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Iron tablets make the baby dark or too
                  big. <strong>Fact:</strong> Iron does not change the
                  baby&apos;s colour or cause excess growth. It only treats or
                  prevents anaemia.
                </li>
                <li>
                  <strong>Myth:</strong> Eating spinach alone will fix anaemia.{" "}
                  <strong>Fact:</strong> Diet helps, but supplements are usually
                  needed to correct low haemoglobin.
                </li>
                <li>
                  <strong>Myth:</strong> Iron tablets harm the baby.{" "}
                  <strong>Fact:</strong> Doctor-prescribed iron is safe and
                  protects both mother and baby.
                </li>
                <li>
                  <strong>Myth:</strong> Feeling weak is normal in pregnancy, so
                  no test is needed. <strong>Fact:</strong> Persistent weakness
                  needs testing, because anaemia is easy to treat.
                </li>
                <li>
                  <strong>Myth:</strong> Once Hb is normal, I can stop the
                  tablets. <strong>Fact:</strong> Continue for as long as your
                  doctor advises, so iron stores are rebuilt.
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
                  <strong>High-risk pregnancy expertise:</strong> careful
                  management of anaemia, diabetes and blood pressure.
                </li>
                <li>
                  <strong>Structured antenatal care:</strong> regular check-ups
                  and haemoglobin monitoring through every trimester.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> detailed monitoring of
                  baby growth and well-being.
                </li>
                <li>
                  <strong>Personalised guidance:</strong> diet, supplement and
                  lifestyle advice suited to you.
                </li>
                <li>
                  <strong>Normal delivery focus:</strong> gentle care that
                  supports natural birth wherever safe.
                </li>
                <li>
                  <strong>Continuity:</strong> the same team from pregnancy
                  through delivery and postnatal follow-up.
                </li>
                <li>
                  <strong>Newborn support:</strong> paediatric consultations and
                  vaccinations at the same centre.
                </li>
                <li>
                  <strong>Convenient location:</strong> Gandhi Nagar, Moradabad,
                  with call and WhatsApp booking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A discussion of your symptoms, diet, periods and medical
                  history.
                </li>
                <li>
                  Blood tests such as haemoglobin, ferritin, B12 and folate
                  where needed.
                </li>
                <li>
                  A clear explanation of the type and severity of anaemia.
                </li>
                <li>
                  A treatment plan with tablets, injections or other measures.
                </li>
                <li>
                  Personalised diet and supplement guidance.
                </li>
                <li>Ultrasound to check the baby&apos;s growth.</li>
                <li>
                  Follow-up tests to confirm that your Hb is improving.
                </li>
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
