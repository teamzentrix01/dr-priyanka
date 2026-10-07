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

export default function DoctorForWomensHealthCheckupMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a women's health check-up in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri offers women's health consultations in Moradabad.",
    },
    {
      q: "How often should I get a check-up?",
      a: "Once a year, or sooner if you have symptoms.",
    },
    {
      q: "What does a women's health check-up include?",
      a: "History, examination, breast and pelvic check, ultrasound, blood tests and a Pap smear when due.",
    },
    {
      q: "What is a Pap smear?",
      a: "A simple test that screens for early cervical changes.",
    },
    {
      q: "Is a pelvic examination painful?",
      a: "It is usually brief and comfortable when done gently.",
    },
    {
      q: "Can I go during my period?",
      a: "It is better to schedule it between periods, unless you have bleeding problems.",
    },
    {
      q: "Do unmarried women need a check-up?",
      a: "Yes. Period, hormone, thyroid and general health checks are useful for everyone.",
    },
    {
      q: "Which tests are advised after 40?",
      a: "Breast screening, blood sugar, cholesterol, thyroid and bone checks, as your doctor advises.",
    },
    {
      q: "Do I need a check-up after menopause?",
      a: "Yes. Bone, heart and cancer screening remain important.",
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
                Doctor for Women&apos;s Health Checkup in Moradabad: What to
                Test, When & Why
              </h1>

              <p className="mb-4 text-gray-700">
                Most women look after everyone else first: children, husband,
                parents, work. Their own health slips down the list, and a visit
                to the doctor happens only when the pain becomes too much to
                ignore.
              </p>

              <p className="mb-4 text-gray-700">
                But many women&apos;s health conditions, such as anaemia,
                thyroid problems, PCOS, fibroids, cervical changes and bone
                loss, grow silently. By the time symptoms appear, the condition
                may need bigger treatment. A regular check-up catches problems
                early, when they are simplest to manage.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what a women&apos;s health check-up
                includes, how often to have one at each age, and how to consult
                Dr. Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Women&apos;s Health Check-Up?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A planned visit to a gynaecologist even when you feel healthy.
                </li>
                <li>
                  A review of your periods, general health, lifestyle and family
                  history.
                </li>
                <li>
                  A physical examination and, where appropriate, a pelvic
                  examination.
                </li>
                <li>
                  Screening tests and scans matched to your age and risk.
                </li>
                <li>
                  Advice on nutrition, exercise, contraception, fertility and
                  mental well-being.
                </li>
                <li>A clear plan for follow-up.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                It is prevention first, not just treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Regular Check-Ups Matter
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Early detection:</strong> cervical, breast and other
                  conditions are far easier to treat when found early.
                </li>
                <li>
                  <strong>Silent problems:</strong> anaemia, thyroid disorders,
                  diabetes and PCOS often cause few obvious signs at first.
                </li>
                <li>
                  <strong>Fertility planning:</strong> knowing your health helps
                  when you want to conceive.
                </li>
                <li>
                  <strong>Peace of mind:</strong> normal reports bring
                  reassurance.
                </li>
                <li>
                  <strong>Hormonal changes:</strong> adolescence, pregnancy and
                  menopause each bring different needs.
                </li>
                <li>
                  <strong>Long-term health:</strong> bone, heart and pelvic
                  floor health can be protected early.
                </li>
                <li>
                  <strong>Saves cost:</strong> preventing a serious illness is
                  cheaper than treating it.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Get a Check-Up?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Teenagers with irregular, painful or heavy periods.
                </li>
                <li>
                  Young women in their 20s and 30s, once a year.
                </li>
                <li>
                  Newly married women planning contraception or pregnancy.
                </li>
                <li>Women planning a baby, before conception.</li>
                <li>Women after delivery, for postnatal follow-up.</li>
                <li>
                  Women in their 40s, as hormonal changes begin.
                </li>
                <li>Women near or after menopause.</li>
                <li>
                  Any woman with a family history of breast, ovarian, cervical
                  or uterine cancer.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms That Should Not Wait for the Annual Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Book a visit sooner if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very heavy, painful or irregular periods.
                </li>
                <li>
                  Bleeding between periods or after intercourse.
                </li>
                <li>Bleeding after menopause.</li>
                <li>
                  Persistent pelvic or lower abdominal pain.
                </li>
                <li>
                  Unusual, itchy or foul-smelling discharge.
                </li>
                <li>A lump or change in the breast.</li>
                <li>Pain during intercourse.</li>
                <li>Unexplained weight gain or loss.</li>
                <li>Constant tiredness or hair fall.</li>
                <li>Difficulty in getting pregnant.</li>
                <li>
                  Leaking urine or a feeling of heaviness in the pelvis.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a Women&apos;s Health Check-Up Include?
              </h2>

              <p className="mb-4 text-gray-700">
                The exact package depends on your age and needs. A thorough
                check-up may include the following.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Medical and Menstrual History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Age when periods began and your cycle pattern.
                </li>
                <li>
                  Pain, flow and any bleeding between periods.
                </li>
                <li>Pregnancies, deliveries and miscarriages.</li>
                <li>Contraception and sexual health.</li>
                <li>Past illnesses, surgeries and medicines.</li>
                <li>
                  Family history of cancer, diabetes and thyroid disease.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. General Physical Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight, height and BMI.</li>
                <li>Blood pressure and pulse.</li>
                <li>Thyroid and skin check.</li>
                <li>
                  Signs of anaemia, excess hair growth or acne.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Breast Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A clinical check for lumps or changes.
                </li>
                <li>
                  Guidance on monthly breast self-examination.
                </li>
                <li>Referral for imaging when needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Pelvic Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A gentle check of the vagina, cervix and uterus when
                  appropriate.
                </li>
                <li>
                  Done privately, with explanation at every step.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Pap Smear / Cervical Screening
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A simple test that looks for early cervical changes.
                </li>
                <li>
                  Often combined with an HPV test as advised.
                </li>
                <li>
                  Can detect problems years before they turn into cancer.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Pelvic Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Checks the uterus, ovaries and lining.
                </li>
                <li>
                  Can pick up fibroids, cysts, polyps and signs of PCOS.
                </li>
                <li>
                  3D/4D ultrasound gives extra detail when needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Blood Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Haemoglobin and blood count for anaemia.
                </li>
                <li>Blood sugar for diabetes.</li>
                <li>Thyroid profile (TSH).</li>
                <li>Vitamin D and vitamin B12.</li>
                <li>Lipid profile for cholesterol.</li>
                <li>
                  Hormone tests such as AMH, FSH, LH or prolactin when relevant.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Urine and Infection Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Routine urine check.</li>
                <li>
                  Screening for urinary and vaginal infections if symptoms
                  exist.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Bone Health Assessment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Especially useful after 40 or around menopause.
                </li>
                <li>Bone density test when advised.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Counselling
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diet and weight.</li>
                <li>Exercise and sleep.</li>
                <li>Contraception and family planning.</li>
                <li>Mental health and stress.</li>
                <li>
                  Vaccination advice, such as HPV and other adult vaccines.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check-Up Guide by Age
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teens (13–19)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Review of period pattern and pain.</li>
                <li>Anaemia and nutrition check.</li>
                <li>Guidance on hygiene and puberty.</li>
                <li>HPV vaccination discussion.</li>
                <li>
                  Support for PCOS symptoms such as acne or irregular cycles.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                20s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Annual gynaecological visit.</li>
                <li>
                  Pap smear as advised, usually from 21 or after sexual activity
                  begins.
                </li>
                <li>Contraception counselling.</li>
                <li>Thyroid and haemoglobin checks.</li>
                <li>
                  Pre-pregnancy advice, including folic acid.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                30s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Annual check-up and Pap smear or HPV test as advised.</li>
                <li>Pelvic ultrasound if symptoms are present.</li>
                <li>Fertility guidance if trying to conceive.</li>
                <li>
                  Blood sugar, thyroid and cholesterol screening.
                </li>
                <li>Breast examination.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                40s
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yearly check-up.</li>
                <li>
                  Breast screening advice, including mammography as your doctor
                  recommends.
                </li>
                <li>Watch for heavy or changing periods.</li>
                <li>
                  Blood pressure, sugar and cholesterol checks.
                </li>
                <li>Discussion of perimenopause symptoms.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                50 and Above
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Menopause counselling and symptom care.</li>
                <li>Bone density testing.</li>
                <li>Heart health review.</li>
                <li>
                  Continued cervical and breast screening as advised.
                </li>
                <li>
                  Prompt review of any postmenopausal bleeding.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Check-Up
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Book a time when you are not on your period, unless you have
                  bleeding-related concerns.
                </li>
                <li>
                  Note the date of your last period and your usual cycle length.
                </li>
                <li>Write down your questions and symptoms.</li>
                <li>Bring old reports, scans and prescriptions.</li>
                <li>List all medicines and supplements you take.</li>
                <li>
                  Avoid intercourse and vaginal medicines for 24–48 hours before
                  a Pap smear, unless your doctor says otherwise.
                </li>
                <li>Wear comfortable clothes.</li>
                <li>
                  Bring your partner or a family member if it helps you feel at
                  ease.
                </li>
                <li>
                  Follow fasting instructions if blood sugar or lipid tests are
                  planned.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the Visit
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: A Comfortable Conversation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Your doctor listens to your concerns and history without
                  hurry.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>General and breast examination.</li>
                <li>
                  Pelvic examination only if needed, with your consent.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Tests and Scans
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood tests, urine tests and ultrasound as suitable.
                </li>
                <li>Pap smear or HPV test if due.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Reports and Explanation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Findings explained in simple words.</li>
                <li>
                  Any abnormal result discussed calmly, with a clear next step.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Personal Health Plan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diet, exercise and lifestyle advice.</li>
                <li>Medicines or supplements if required.</li>
                <li>Date for your next screening.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Women&apos;s Health
                Check-Ups in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad whose
                philosophy is &quot;Her Health First.&quot; The clinic supports
                women through every life stage, from adolescence to pregnancy
                and beyond.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Respectful, private consultations:</strong> you can
                  talk freely.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> 3D and 4D ultrasound for
                  detailed pelvic scans.
                </li>
                <li>
                  <strong>Full spectrum of care:</strong> menstrual health,
                  fertility, pregnancy, laparoscopy and more under one roof.
                </li>
                <li>
                  <strong>Early detection focus:</strong> small problems are
                  caught before they grow.
                </li>
                <li>
                  <strong>Minimally invasive treatment available:</strong> if a
                  problem is found, hysteroscopy and 3D laparoscopy are options
                  at the same clinic.
                </li>
                <li>
                  <strong>Continuity of care:</strong> the team knows your
                  history year after year.
                </li>
                <li>
                  <strong>Family-friendly approach:</strong> partners are
                  welcome.
                </li>
                <li>
                  <strong>Location:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad.
                </li>
                <li>
                  <strong>Easy booking:</strong> call, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Healthy Habits That Support Your Check-Ups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat balanced meals with dal, vegetables, fruit, curd and whole
                  grains.
                </li>
                <li>
                  Get enough iron and calcium: spinach, beetroot, dates, milk
                  and paneer.
                </li>
                <li>
                  Move daily: 30 minutes of walking, yoga or exercise.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>Sleep 7–8 hours.</li>
                <li>
                  Reduce stress: breathing exercises, hobbies and time with
                  loved ones.
                </li>
                <li>Avoid tobacco and limit alcohol.</li>
                <li>
                  Practise safe sex and use protection where needed.
                </li>
                <li>Drink enough water.</li>
                <li>Keep a period diary.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Women&apos;s Health Check-Ups
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> I feel fine, so I do not need a
                  check-up. <strong>Fact:</strong> Many conditions cause no
                  early symptoms.
                </li>
                <li>
                  <strong>Myth:</strong> A Pap smear is only for married women
                  with problems. <strong>Fact:</strong> It is routine screening
                  for women who have become sexually active, as advised by your
                  doctor.
                </li>
                <li>
                  <strong>Myth:</strong> A gynaecologist is only for pregnancy.{" "}
                  <strong>Fact:</strong> Gynaecologists care for women&apos;s
                  health at every age.
                </li>
                <li>
                  <strong>Myth:</strong> Pelvic examinations are always painful.{" "}
                  <strong>Fact:</strong> Done gently, they are usually brief and
                  comfortable.
                </li>
                <li>
                  <strong>Myth:</strong> Menopause means the end of check-ups.{" "}
                  <strong>Fact:</strong> Bone, heart and cancer screening become
                  even more important.
                </li>
                <li>
                  <strong>Myth:</strong> Only older women get cervical or breast
                  cancer screening. <strong>Fact:</strong> Screening starts
                  earlier and is timed by age and risk.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Women&apos;s Health Check-Up with Dr. Priyanka
                Pachauri
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
