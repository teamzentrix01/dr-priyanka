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

export default function DoctorForFullBodyCheckupMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a women's health check-up in Moradabad?",
      a: "A gynaecologist such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "How often should women get a health check-up?",
      a: "Generally once a year, or sooner if you have symptoms or risk factors.",
    },
    {
      q: "What tests are included in a women's check-up?",
      a: "BP, blood tests, thyroid, sugar, Pap smear, breast exam and ultrasound as needed. WhatsApp: +91 89796 70705.",
    },
    {
      q: "At what age should I start Pap smear screening?",
      a: "Usually in the early adult years, as your doctor advises based on your history.",
    },
    {
      q: "When should I start mammography?",
      a: "Often from around age 40 to 45, or earlier with a strong family history.",
    },
    {
      q: "Do I need to fast for the tests?",
      a: "Some blood tests need 8 to 10 hours of fasting. Confirm when booking.",
    },
    {
      q: "Is a Pap smear painful?",
      a: "It is usually quick and mildly uncomfortable, but not painful. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Can I get a check-up during my period?",
      a: "Some tests, like a Pap smear, are best done after your period. Ask before booking.",
    },
    {
      q: "Does the clinic cover every specialist test?",
      a: "The clinic focuses on gynaecological and reproductive health, and can guide you to other specialists if needed.",
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
                Doctor for Full Body Checkup for Women in Moradabad: Complete
                Health Screening Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Most women look after everyone else first: children, parents,
                spouse, work. Their own health check-up often comes last,
                sometimes never. But many serious conditions, such as anaemia,
                thyroid problems, diabetes, cervical and breast changes, start
                silently. If you are searching for a doctor for full body
                checkup for women in Moradabad, this guide explains which tests
                matter, at what age, and how a women&apos;s health check-up
                works.
              </p>

              <p className="mb-4 text-gray-700">
                Regular screening is not about finding problems. It is about
                staying ahead of them.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do Women Need Regular Health Check-Ups?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many conditions have no early symptoms, such as high BP, high
                  sugar, anaemia and early cervical changes.
                </li>
                <li>
                  Women face unique risks: cervical, breast and ovarian
                  conditions, PCOS, fibroids and menopause-related changes.
                </li>
                <li>
                  Hormonal and life-stage changes affect the whole body, from
                  puberty to pregnancy to menopause.
                </li>
                <li>
                  Early detection makes treatment simpler, cheaper and more
                  successful.
                </li>
                <li>
                  Indian women commonly face anaemia and vitamin D deficiency,
                  which often go untested.
                </li>
                <li>
                  Screening gives peace of mind and a health record to compare
                  year after year.
                </li>
                <li>
                  Family history of diabetes, heart disease or cancer raises the
                  value of check-ups.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a Women&apos;s Health Check-Up Include?
              </h2>

              <p className="mb-4 text-gray-700">
                A good check-up combines a conversation, an examination and
                targeted tests. It is personalised by age, symptoms and risk
                factors.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history:</strong> periods, pregnancies,
                  contraception, family history, diet and lifestyle.
                </li>
                <li>
                  <strong>General examination:</strong> weight, height, BMI,
                  blood pressure, pulse and waist measurement.
                </li>
                <li>Breast examination.</li>
                <li>
                  Pelvic and gynaecological assessment, when appropriate.
                </li>
                <li>Blood and urine tests.</li>
                <li>
                  Screening tests, such as Pap smear and, where advised, HPV
                  testing.
                </li>
                <li>Ultrasound, where indicated.</li>
                <li>
                  Counselling: diet, exercise, vaccines, mental health and
                  family planning.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Not every test is needed for every woman. Your doctor chooses
                what is right for you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Essential Blood and Urine Tests
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Complete Blood Count (CBC) and Haemoglobin
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detects anaemia, infection and blood disorders.</li>
                <li>Anaemia is very common in Indian women.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Blood Sugar (Fasting, Post-Meal, HbA1c)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Screens for diabetes and pre-diabetes.</li>
                <li>
                  Especially important with PCOS, obesity or family history.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Thyroid Profile (TSH, T3, T4)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid disorders are common in women and affect periods,
                  weight and fertility.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Lipid Profile (Cholesterol)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Checks heart-related risk.</li>
                <li>
                  Becomes more important after 30 to 40 and after menopause.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Liver and Kidney Function Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Give an overview of organ health and medicine safety.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Vitamin D and Vitamin B12
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Deficiencies are very common and cause tiredness, bone pain
                  and hair fall.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Iron Studies (Ferritin)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Shows your iron stores, even when haemoglobin looks normal.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Urine Routine and Culture
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detects urinary infections, sugar and protein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Hormone Tests (When Needed)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  FSH, LH, prolactin, AMH and others in case of irregular
                  periods, PCOS or fertility concerns.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Serology Tests (As Advised)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Screening for infections such as hepatitis B and HIV,
                  particularly before pregnancy or procedures.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Gynaecological Screening for Women
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pap Smear (Cervical Screening)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detects abnormal cervical cells before they turn into cancer.
                </li>
                <li>
                  Usually advised for sexually active women, starting in the
                  early 20s to 30s, as your doctor suggests.
                </li>
                <li>
                  Repeated at recommended intervals if results are normal.
                </li>
                <li>Quick, generally painless and done in the clinic.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                HPV Test
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checks for high-risk human papillomavirus, the main cause of
                  cervical cancer.
                </li>
                <li>
                  Often used along with or instead of a Pap smear, especially
                  after age 30.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                HPV Vaccination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Protects against cervical cancer, and is best given in
                  adolescence or as advised by your doctor.
                </li>
                <li>
                  Ask about it if you or your daughter have not been vaccinated.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Examines the uterus, ovaries and lining.
                </li>
                <li>
                  Detects fibroids, cysts, polyps, PCOS and other conditions.
                </li>
                <li>
                  3D/4D ultrasound may give more detailed views where needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checks for infection, prolapse, growths or tenderness.
                </li>
                <li>Done with privacy and consent.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                STI Screening
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recommended when there are symptoms or risk factors.
                </li>
                <li>
                  Many infections cause no symptoms but affect fertility.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Breast Health Screening
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Breast self-awareness:</strong> know how your breasts
                  normally look and feel, and report any change.
                </li>
                <li>
                  <strong>Clinical breast examination:</strong> done by a doctor
                  as part of routine visits.
                </li>
                <li>
                  <strong>Breast ultrasound:</strong> helpful in younger women
                  with dense breasts or a lump.
                </li>
                <li>
                  <strong>Mammography:</strong> commonly advised from around age
                  40 to 45, or earlier with a strong family history, as your
                  doctor decides.
                </li>
                <li>
                  <strong>When to see a doctor immediately:</strong> a new lump,
                  nipple discharge (bloody or unusual), skin dimpling, nipple
                  retraction or persistent breast pain.
                </li>
                <li>
                  <strong>Early detection:</strong> breast cancer found early is
                  highly treatable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Health Screening by Age
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenagers (13 to 19)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Menstrual history and cycle regularity.</li>
                <li>Haemoglobin and vitamin D.</li>
                <li>Discussion on hygiene, nutrition and puberty.</li>
                <li>HPV vaccination, as advised.</li>
                <li>
                  Evaluation of very heavy, painful or absent periods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in Their 20s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Annual check-up: BP, BMI, haemoglobin and thyroid.
                </li>
                <li>Pap smear as advised.</li>
                <li>Contraception and pre-pregnancy counselling.</li>
                <li>Screening for PCOS if periods are irregular.</li>
                <li>Mental health and stress check.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in Their 30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood sugar, thyroid, lipid profile and vitamin levels.
                </li>
                <li>
                  Pap smear and HPV testing at recommended intervals.
                </li>
                <li>Pelvic ultrasound if symptoms exist.</li>
                <li>Fertility advice, if planning a family.</li>
                <li>Breast examination.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women in Their 40s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular BP, sugar and lipid checks.</li>
                <li>Pap smear and HPV testing.</li>
                <li>Mammography, as advised.</li>
                <li>
                  Evaluation of heavy, irregular periods and perimenopause
                  symptoms.
                </li>
                <li>Bone health discussion and vitamin D.</li>
                <li>Thyroid check.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Women 50 and Above
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Menopause management and hormone health.</li>
                <li>
                  Bone density scan (DEXA), as advised, to check for
                  osteoporosis.
                </li>
                <li>Heart health: BP, cholesterol and sugar.</li>
                <li>Mammography and cervical screening as advised.</li>
                <li>Colon cancer screening discussion with a physician.</li>
                <li>Eye, dental and hearing checks.</li>
                <li>Urinary and pelvic floor health review.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy and Pre-Pregnancy Check-Ups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pre-pregnancy check-up:</strong> haemoglobin, thyroid,
                  blood sugar, blood group, infections, vaccination status and
                  folic acid.
                </li>
                <li>
                  <strong>Antenatal check-ups:</strong> regular BP, weight,
                  urine tests, scans and blood tests.
                </li>
                <li>
                  <strong>Postnatal check-up:</strong> recovery, contraception,
                  thyroid, anaemia and mental health.
                </li>
                <li>
                  Preconception care improves the chance of a healthy pregnancy
                  and baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms You Should Never Ignore
              </h2>

              <p className="mb-4 text-gray-700">
                Book a check-up soon if you notice any of these:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Very heavy, painful or irregular periods.</li>
                <li>
                  Bleeding between periods, after sex or after menopause.
                </li>
                <li>Persistent lower abdominal or pelvic pain.</li>
                <li>Unusual or foul-smelling vaginal discharge.</li>
                <li>A lump in the breast or nipple discharge.</li>
                <li>Unexplained weight gain or loss.</li>
                <li>Constant fatigue, weakness or dizziness.</li>
                <li>Excess hair growth, severe acne or hair fall.</li>
                <li>Trouble conceiving.</li>
                <li>Frequent urination, burning or urine leakage.</li>
                <li>Persistent sadness, anxiety or sleep problems.</li>
                <li>Swelling in legs, breathlessness or chest discomfort.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle and Preventive Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Eat a balanced diet:</strong> include protein, iron,
                  calcium, fibre, fruits and vegetables.
                </li>
                <li>Limit sugar, fried food and processed snacks.</li>
                <li>
                  <strong>Exercise regularly:</strong> about 30 minutes of
                  walking or activity on most days.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>Sleep 7 to 8 hours each night.</li>
                <li>
                  Manage stress with breathing, prayer, hobbies or talking to
                  someone you trust.
                </li>
                <li>Avoid smoking, tobacco and alcohol.</li>
                <li>Practise safe sex, and use contraception as planned.</li>
                <li>
                  Take supplements only as advised, such as iron, calcium or
                  vitamin D.
                </li>
                <li>Keep vaccinations up to date.</li>
                <li>Drink enough water.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Tips for Women&apos;s Health
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to include:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Iron-rich:</strong> palak, methi, beetroot, dates,
                  pomegranate, sprouts and dals.
                </li>
                <li>
                  <strong>Calcium-rich:</strong> milk, curd, ragi, sesame and
                  almonds.
                </li>
                <li>
                  <strong>Protein:</strong> dal, chana, rajma, paneer, eggs,
                  fish or chicken as you eat them.
                </li>
                <li>
                  <strong>Whole grains:</strong> roti, dalia, oats and millets.
                </li>
                <li>
                  <strong>Fruits and vegetables:</strong> seasonal, colourful
                  and fresh.
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts, seeds and a little ghee
                  or good oil.
                </li>
                <li>
                  <strong>Vitamin C:</strong> lemon, amla, guava and orange.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to limit:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sweets, sugary drinks and packaged snacks.</li>
                <li>Excess salt, pickles and namkeen.</li>
                <li>Refined flour products.</li>
                <li>Excess tea and coffee.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Often Should You Get Checked?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Once a year:</strong> a general women&apos;s health
                  check-up with BP, weight, blood tests and breast examination.
                </li>
                <li>
                  <strong>Every few years, as advised:</strong> Pap smear and
                  HPV testing, depending on age and previous results.
                </li>
                <li>
                  <strong>Every 1 to 2 years from about age 40 to 45:</strong>{" "}
                  mammography, as your doctor recommends.
                </li>
                <li>
                  <strong>Sooner:</strong> whenever you have symptoms, a family
                  history of disease or a pregnancy plan.
                </li>
                <li>
                  <strong>Regular follow-up:</strong> if you have PCOS, thyroid
                  disease, diabetes, high BP or other chronic conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Check-Up
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fasting:</strong> ask if you need 8 to 10 hours of
                  fasting for blood tests.
                </li>
                <li>
                  <strong>Schedule wisely:</strong> if a Pap smear is planned,
                  avoid the days of heavy periods, and avoid intercourse,
                  vaginal creams or douching for 24 to 48 hours beforehand,
                  unless your doctor says otherwise.
                </li>
                <li>
                  Carry previous reports and a list of current medicines.
                </li>
                <li>Note your period dates and any symptoms.</li>
                <li>Write your questions so nothing is forgotten.</li>
                <li>Wear comfortable clothing.</li>
                <li>Bring a family member for support, if you prefer.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are the Limits of a Check-Up?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No single check-up covers every possible disease.
                </li>
                <li>
                  Some tests need referral to other specialists, such as cardiac
                  tests, endoscopy or advanced imaging.
                </li>
                <li>
                  Normal results do not mean you can skip future screening.
                </li>
                <li>
                  Symptoms should always be checked, even after a normal
                  check-up.
                </li>
                <li>
                  Follow-up matters: an abnormal result needs a plan, not just a
                  report.
                </li>
                <li>
                  Your gynaecologist will tell you honestly when a
                  specialist&apos;s opinion is needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths and Facts About Women&apos;s Health Check-Ups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> I feel fine, so I don&apos;t need a
                  check-up. <strong>Fact:</strong> Many conditions cause no
                  early symptoms, which is why screening exists.
                </li>
                <li>
                  <strong>Myth:</strong> A Pap smear is only for older women.{" "}
                  <strong>Fact:</strong> It is recommended from an early adult
                  age, as your doctor advises.
                </li>
                <li>
                  <strong>Myth:</strong> Check-ups are only needed during
                  pregnancy. <strong>Fact:</strong> Regular checks matter at
                  every stage of a woman&apos;s life.
                </li>
                <li>
                  <strong>Myth:</strong> Pelvic exams are painful and
                  embarrassing. <strong>Fact:</strong> They are usually quick,
                  done with privacy and care, and can be discussed openly.
                </li>
                <li>
                  <strong>Myth:</strong> Breast cancer only affects women with a
                  family history. <strong>Fact:</strong> Most women who develop
                  it have no family history, so screening matters for everyone.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful discussion of your health, periods and
                  lifestyle.
                </li>
                <li>Measurement of weight, BP and general examination.</li>
                <li>
                  A breast and pelvic assessment, only with your consent.
                </li>
                <li>
                  Blood tests and screening tests suited to your age and risk.
                </li>
                <li>A pelvic ultrasound if needed.</li>
                <li>A clear explanation of your reports.</li>
                <li>Advice on diet, exercise and vaccines.</li>
                <li>
                  A follow-up plan, and referral to other specialists if
                  required.
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
