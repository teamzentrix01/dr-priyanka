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

export default function DoctorForBreastPainAfterDeliveryMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for breast pain after delivery in Moradabad?",
      a: "A gynaecologist with postnatal expertise, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "Is breast pain normal after delivery?",
      a: "Mild fullness and tenderness are common when milk comes in, but severe or lasting pain needs a check.",
    },
    {
      q: "What is engorgement?",
      a: "Swollen, hard, painful breasts when milk comes in. Frequent feeding and warm and cold compresses help. WhatsApp: +91 89796 70705.",
    },
    {
      q: "How do I know if it is mastitis?",
      a: "A red, hot, painful area with fever and body ache suggests mastitis. See a doctor promptly.",
    },
    {
      q: "Can I breastfeed with mastitis?",
      a: "Yes, in most cases it is safe and helps recovery. Continue feeding or expressing.",
    },
    {
      q: "Why are my nipples sore and cracked?",
      a: "Usually from a shallow latch or poor positioning. A correct latch and gentle care can help.",
    },
    {
      q: "When should I see a doctor for a breast lump?",
      a: "If it is hard, painful, does not improve in 1 to 2 days, or comes with fever. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Are antibiotics safe while breastfeeding?",
      a: "Many are safe. Your doctor will choose the right one for you and your baby.",
    },
    {
      q: "What if I am not breastfeeding and my breasts are painful?",
      a: "Use a supportive bra, cold packs and pain relief as advised, and consult your doctor.",
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
                Doctor for Breast Pain After Delivery in Moradabad: Causes,
                Treatment and Relief
              </h1>

              <p className="mb-4 text-gray-700">
                Breastfeeding is natural, but it is not always easy or painless.
                Many new mothers quietly struggle with swollen, tender or
                burning breasts and wonder whether it is normal. If you are
                looking for a doctor for breast pain after delivery in Moradabad,
                this guide explains the common causes, home relief, warning
                signs and treatment in simple language.
              </p>

              <p className="mb-4 text-gray-700">
                Most breast pain after birth can be treated well, and in most
                cases you can keep breastfeeding your baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Breast Pain Happen After Delivery?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Milk &quot;coming in&quot;:</strong> usually 2 to 5
                  days after delivery, causing fullness and heaviness.
                </li>
                <li>
                  <strong>Hormonal changes:</strong> prolactin and oxytocin
                  drive milk production and release.
                </li>
                <li>
                  <strong>Increased blood flow:</strong> breasts become warm,
                  swollen and sensitive.
                </li>
                <li>
                  <strong>A new baby learning to latch:</strong> early feeds can
                  cause nipple soreness.
                </li>
                <li>
                  <strong>Milk not being removed regularly:</strong> leads to
                  pressure and blockages.
                </li>
                <li>
                  <strong>Tight bras or clothing:</strong> can press on milk
                  ducts.
                </li>
                <li>
                  <strong>Stress and lack of sleep:</strong> worsen pain and
                  affect milk flow.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Breast Pain After Delivery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Breast Engorgement
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Breasts become hard, full, tight and shiny.
                </li>
                <li>
                  Usually affects both breasts, around day 3 to 5.
                </li>
                <li>Can make it hard for the baby to latch.</li>
                <li>
                  Caused by milk, extra blood and fluid in the breast.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Sore or Cracked Nipples
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain during or after feeding.</li>
                <li>
                  Nipples may look red, cracked, blistered or bleeding.
                </li>
                <li>
                  Most often caused by a shallow latch or poor positioning.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Blocked Milk Duct
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A tender, hard lump in one area of the breast.</li>
                <li>Usually no fever, and the mother feels generally well.</li>
                <li>Milk flow is blocked in one duct.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Mastitis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Inflammation of breast tissue, with or without infection.
                </li>
                <li>
                  A red, hot, painful area, often shaped like a wedge.
                </li>
                <li>May come with fever, chills and flu-like body ache.</li>
                <li>
                  Usually affects one breast, most often in the first few weeks.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Breast Abscess
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A collection of pus in the breast.</li>
                <li>
                  Presents as a very painful, firm lump that may not go away,
                  often with fever.
                </li>
                <li>Can follow untreated mastitis.</li>
                <li>Needs medical treatment.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Thrush (Fungal Infection)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Burning, stinging or shooting pain in the nipple and deep in
                  the breast.
                </li>
                <li>
                  Pain continues even after feeds and even with a good latch.
                </li>
                <li>Nipples may look shiny, pink or flaky.</li>
                <li>
                  The baby may have white patches in the mouth or nappy rash.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Other Causes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Vasospasm:</strong> nipples turn white, then blue or
                  red, with throbbing pain.
                </li>
                <li>
                  <strong>Tongue-tie in the baby:</strong> causes painful latch
                  and poor milk transfer.
                </li>
                <li>Eczema or skin conditions on the nipple.</li>
                <li>Rarely, a breast lump that needs evaluation.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms Checker: What Might You Have?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Both breasts hard, heavy and tender around day 3 to
                  5:</strong> likely engorgement.
                </li>
                <li>
                  <strong>Pain only during feeds with damaged nipples:</strong>{" "}
                  likely latch problem.
                </li>
                <li>
                  <strong>A firm, painful lump without fever:</strong> possible
                  blocked duct.
                </li>
                <li>
                  <strong>Red, hot area with fever and body ache:</strong>{" "}
                  possible mastitis.
                </li>
                <li>
                  <strong>Burning pain after feeds, baby with white mouth
                  patches:</strong> possible thrush.
                </li>
                <li>
                  <strong>A painful lump that persists with fever and
                  pus:</strong> possible abscess.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Only a doctor can confirm the cause, so do not rely on
                self-diagnosis if the pain is severe or continues.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: See a Doctor Without Delay
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor promptly if you notice any of these.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever of 38°C (100.4°F) or above.</li>
                <li>Chills and flu-like body ache.</li>
                <li>
                  A red, hot, swollen or wedge-shaped area on the breast.
                </li>
                <li>Pus or blood from the nipple or breast.</li>
                <li>
                  A hard lump that does not improve in 24 to 48 hours.
                </li>
                <li>Severe, worsening pain.</li>
                <li>
                  Symptoms lasting more than a day or two despite home care.
                </li>
                <li>Cracked, bleeding nipples that don&apos;t heal.</li>
                <li>Feeling very unwell or weak.</li>
                <li>
                  A breast lump that persists long after breastfeeding stops.
                </li>
                <li>
                  Skin changes such as dimpling, thickening or an orange-peel
                  look.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Early treatment prevents infections from becoming abscesses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care and Relief Tips
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Engorgement
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Feed often:</strong> aim for 8 to 12 feeds in 24
                  hours, and don&apos;t skip night feeds early on.
                </li>
                <li>
                  <strong>Warm compress:</strong> apply before feeding to help
                  milk flow.
                </li>
                <li>
                  <strong>Express a little milk:</strong> by hand to soften the
                  areola so the baby can latch.
                </li>
                <li>
                  <strong>Cold packs:</strong> use after feeding to reduce
                  swelling.
                </li>
                <li>
                  <strong>Supportive bra:</strong> well-fitting but not too
                  tight.
                </li>
                <li>
                  Do not stop feeding suddenly, which can worsen engorgement.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Sore or Cracked Nipples
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Check the latch:</strong> the baby should take a
                  mouthful of breast, not just the nipple.
                </li>
                <li>
                  <strong>Try different positions:</strong> such as cradle,
                  cross-cradle or football hold.
                </li>
                <li>
                  <strong>Break the suction gently:</strong> with a clean finger
                  before removing the baby.
                </li>
                <li>
                  <strong>Apply expressed milk:</strong> on the nipples and let
                  them air dry.
                </li>
                <li>
                  <strong>Nipple cream:</strong> use lanolin or a doctor-approved
                  cream if advised.
                </li>
                <li>
                  <strong>Change breast pads often:</strong> so the skin stays
                  dry.
                </li>
                <li>Avoid soap or harsh products on the nipples.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Blocked Ducts and Mastitis
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Keep feeding or expressing:</strong> regularly on the
                  affected side.
                </li>
                <li>
                  <strong>Position the baby:</strong> with chin pointing toward
                  the blocked area, if comfortable.
                </li>
                <li>
                  <strong>Warm and cold compresses:</strong> warm before feeds,
                  cold afterward.
                </li>
                <li>
                  <strong>Gentle massage:</strong> toward the nipple rather than
                  deep, forceful rubbing.
                </li>
                <li>Rest and drink plenty of fluids.</li>
                <li>Take pain relief only as advised by your doctor.</li>
                <li>Do not wear tight bras or sleep on your stomach.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                The treatment depends on the cause.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Engorgement and Latch Problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Feeding, positioning and latch support.</li>
                <li>Pain relief as advised by your doctor.</li>
                <li>
                  Guidance on hand expression or a breast pump if needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Blocked Duct
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Continued milk removal and gentle massage.</li>
                <li>Warm compresses and rest.</li>
                <li>
                  Medical review if it doesn&apos;t resolve within a day or two.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Mastitis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Continued breastfeeding or expressing, which is safe for the
                  baby and helps healing.
                </li>
                <li>
                  Pain and fever control with safe medicines prescribed by your
                  doctor.
                </li>
                <li>
                  Antibiotics when infection is suspected, chosen to be safe
                  during breastfeeding.
                </li>
                <li>Rest, fluids and follow-up to confirm improvement.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Breast Abscess
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound to confirm the collection.</li>
                <li>
                  Drainage by needle aspiration or a minor procedure, as your
                  doctor decides.
                </li>
                <li>Antibiotics and dressing care.</li>
                <li>
                  Breastfeeding can often continue, depending on the location
                  and advice.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Thrush
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antifungal treatment for the mother&apos;s nipples.</li>
                <li>
                  Treatment of the baby&apos;s mouth at the same time to prevent
                  reinfection.
                </li>
                <li>
                  Careful hygiene, including washing pads and feeding
                  accessories.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Other Causes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Correction of tongue-tie in the baby, when needed.
                </li>
                <li>
                  Guidance for vasospasm, including keeping the nipples warm.
                </li>
                <li>
                  Examination and, if needed, scans for persistent lumps.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Always follow your own doctor&apos;s prescription, and never
                self-medicate with antibiotics.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is It Safe to Breastfeed With Mastitis?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yes, in most cases, breastfeeding is safe and often helps
                  recovery.
                </li>
                <li>
                  The milk is safe for your baby even with mastitis.
                </li>
                <li>
                  Emptying the breast regularly helps clear the blockage and
                  infection.
                </li>
                <li>
                  If feeding is too painful, express the milk by hand or pump.
                </li>
                <li>
                  Ask your doctor about any medicine you take, so it is
                  compatible with breastfeeding.
                </li>
                <li>
                  Stop only if your doctor advises in a specific situation, such
                  as certain abscesses.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Latch and Positioning Guide
              </h2>

              <p className="mb-4 text-gray-700">
                A good latch is the most powerful way to prevent breast pain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bring the baby to the breast, not the breast to the baby.
                </li>
                <li>
                  Baby&apos;s mouth wide open, like a yawn, before latching.
                </li>
                <li>Chin touching the breast, with the nose free.</li>
                <li>
                  More of the areola visible above the baby&apos;s top lip than
                  below.
                </li>
                <li>Lips flanged outward, like fish lips.</li>
                <li>
                  Baby&apos;s tummy facing your tummy, with the head and body in
                  a straight line.
                </li>
                <li>
                  Sucking should feel like a strong pull, not a pinch.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ask for help early: a doctor, nurse or lactation-trained
                professional can watch a feed.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet, Fluids and Self-Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Drink plenty of water:</strong> water, buttermilk,
                  soups, coconut water and milk.
                </li>
                <li>
                  <strong>Eat a balanced diet:</strong> protein, iron, calcium,
                  fibre, fruits and vegetables.
                </li>
                <li>
                  <strong>Include healthy fats:</strong> nuts, seeds and a
                  little ghee.
                </li>
                <li>
                  <strong>Get rest:</strong> sleep when the baby sleeps and
                  accept help at home.
                </li>
                <li>Avoid smoking, alcohol and excess caffeine.</li>
                <li>Do not restrict food during breastfeeding.</li>
                <li>Continue prescribed supplements, such as iron and calcium.</li>
                <li>
                  <strong>Manage stress:</strong> gentle breathing, support from
                  family and short breaks.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Breast Pain After a C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Milk comes in a little later in some women, but engorgement
                  can still occur.
                </li>
                <li>
                  Positioning can be harder because of wound pain, so try
                  side-lying or football hold.
                </li>
                <li>
                  Use pillows to protect the stitches while feeding.
                </li>
                <li>
                  Ask for support with positioning in the first days.
                </li>
                <li>
                  The same warning signs apply, including fever and a hot, red
                  breast.
                </li>
                <li>
                  Pain medicines and antibiotics given after surgery are usually
                  compatible with breastfeeding, but confirm with your doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If You Are Not Breastfeeding or Want to Stop
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Milk still comes in, causing engorgement even if you
                  don&apos;t nurse.
                </li>
                <li>
                  Wear a supportive bra and avoid tight binding.
                </li>
                <li>Use cold packs and pain relief as advised.</li>
                <li>
                  Avoid stimulating the breasts with pumping or hot showers if
                  you&apos;re trying to dry up milk.
                </li>
                <li>
                  Express only a little for comfort if breasts are painfully
                  full.
                </li>
                <li>
                  Ask your doctor about safe ways to reduce milk and manage
                  pain.
                </li>
                <li>
                  Wean gradually when possible, to lower the risk of blocked
                  ducts and mastitis.
                </li>
                <li>
                  Check with your doctor before using any medicine to suppress
                  milk.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Breast Lumps After Delivery: When to Worry
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most lumps in breastfeeding women are milk-related, such as
                  blocked ducts or milk-filled cysts (galactoceles).
                </li>
                <li>
                  Lumps that soften after feeding are usually less worrying.
                </li>
                <li>
                  A lump that stays the same, keeps growing or does not go away
                  should be checked.
                </li>
                <li>
                  Bloody nipple discharge, skin dimpling or nipple changes need
                  medical review.
                </li>
                <li>
                  Breast cancer is rare at this stage, but it can occur, so
                  never ignore persistent lumps.
                </li>
                <li>
                  Ultrasound is safe in breastfeeding women and is often the
                  first test.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing and Breastfeeding Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain, sleeplessness and worry can leave new mothers feeling
                  low or overwhelmed.
                </li>
                <li>
                  It is not a failure if breastfeeding is difficult at first.
                </li>
                <li>
                  Ask for help early: doctors, family and trained professionals
                  can make a big difference.
                </li>
                <li>
                  Partner and family support matters, including help with night
                  feeds and household work.
                </li>
                <li>
                  Watch for signs of postpartum depression, such as constant
                  sadness or hopelessness.
                </li>
                <li>Seek professional support if your mood does not lift.</li>
                <li>
                  If you ever feel hopeless or think of harming yourself,
                  contact a healthcare professional or a trusted person
                  immediately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About Breast Pain After Delivery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Breastfeeding should always hurt at
                  first. <strong>Fact:</strong> Some tenderness is common, but
                  ongoing pain usually points to a latch or medical problem that
                  can be fixed.
                </li>
                <li>
                  <strong>Myth:</strong> I must stop breastfeeding if I have
                  mastitis. <strong>Fact:</strong> Continuing to feed usually
                  helps recovery and is safe for the baby.
                </li>
                <li>
                  <strong>Myth:</strong> Deep, forceful massage clears blocked
                  ducts. <strong>Fact:</strong> Aggressive massage can worsen
                  inflammation. Gentle techniques and feeding work better.
                </li>
                <li>
                  <strong>Myth:</strong> Antibiotics harm breastfed babies.{" "}
                  <strong>Fact:</strong> Many antibiotics are compatible with
                  breastfeeding, and your doctor will choose a safe one.
                </li>
                <li>
                  <strong>Myth:</strong> Small breasts make less milk.{" "}
                  <strong>Fact:</strong> Breast size does not determine milk
                  supply.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is known in Moradabad for antenatal and
                postnatal care, normal delivery support and patient-first
                communication. Based on the clinic&apos;s listed services, you
                can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Postnatal care:</strong> follow-up visits that review
                  your breasts, healing and overall recovery.
                </li>
                <li>
                  <strong>Continuity of care:</strong> the same team from
                  pregnancy through delivery and postnatal follow-up.
                </li>
                <li>
                  <strong>Normal delivery focus:</strong> gentle care that
                  supports natural birth wherever safe.
                </li>
                <li>
                  <strong>Newborn support:</strong> paediatric consultations and
                  vaccinations at the same centre, useful for feeding and weight
                  checks.
                </li>
                <li>
                  <strong>Ultrasound facilities:</strong> imaging when a lump or
                  abscess needs to be checked.
                </li>
                <li>
                  <strong>Empathetic communication:</strong> clear, patient
                  explanations without judgement.
                </li>
                <li>
                  <strong>Guidance on latch and feeding:</strong> practical
                  advice for new mothers.
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
                  A discussion of your symptoms, feeding pattern and delivery
                  history.
                </li>
                <li>Examination of both breasts and nipples.</li>
                <li>
                  A check of your baby&apos;s latch and feeding, where possible.
                </li>
                <li>Temperature, pulse and general health checks.</li>
                <li>
                  An ultrasound if a lump or abscess is suspected.
                </li>
                <li>
                  Treatment such as medicines, drainage or supportive care as
                  needed.
                </li>
                <li>
                  Advice on positioning, hygiene, diet and warning signs.
                </li>
                <li>
                  A follow-up plan to make sure you are healing.
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
