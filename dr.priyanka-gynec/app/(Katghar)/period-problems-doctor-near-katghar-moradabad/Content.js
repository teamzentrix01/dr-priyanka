
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PeriodProblemsDoctorKatgharMoradabad() {
  const faqs = [
    {
      q: "Who is a period problems doctor near Katghar, Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec treats menstrual disorders for patients from Katghar and across Moradabad.",
    },
    {
      q: "When should I worry about irregular periods?",
      a: "If your cycles are consistently irregular, absent for three months or more, or accompanied by other symptoms such as acne, weight changes or difficulty conceiving, see a gynaecologist.",
    },
    {
      q: "Are painful periods normal?",
      a: "Mild cramps are common, but severe pain that disrupts daily life is not something to ignore. It may signal a condition such as endometriosis or adenomyosis.",
    },
    {
      q: "What counts as a heavy period?",
      a: "Bleeding that soaks through a pad or tampon every hour or two, lasts over seven days, or includes large clots, and any bleeding that leaves you tired or dizzy.",
    },
    {
      q: "Can PCOS cause missed periods?",
      a: "Yes. PCOS is a common cause of irregular or missed periods due to irregular ovulation.",
    },
    {
      q: "Can stress delay my period?",
      a: "Yes. Stress, sudden weight changes and intense exercise can disturb hormones and delay periods, though other causes should be ruled out.",
    },
    {
      q: "Which tests are done for period problems?",
      a: "Commonly an ultrasound and blood tests such as haemoglobin, thyroid and hormone levels. Your doctor chooses tests according to your symptoms.",
    },
    {
      q: "Will I need surgery for heavy periods?",
      a: "Not usually. Many women improve with medicines and lifestyle changes. Surgery is considered when a structural cause such as a fibroid or polyp needs treatment.",
    },
    {
      q: "Is it safe to take hormonal pills on my own to regulate periods?",
      a: "It is best to consult a doctor first. Hormonal medicines need proper evaluation, and self-medication may hide the real cause.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
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
                Period Problems Doctor near Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="text-gray-700 mb-4">
                Periods are a regular sign of a woman&apos;s health, but for many they bring pain, worry or disruption. Cycles that come too early, too late or not at all, bleeding that soaks through pads within an hour, or cramps that keep you from work and school are often brushed aside as &quot;normal.&quot; They are not something you simply have to endure. In most cases, a cause can be found and treated.
              </p>

              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby areas of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers evaluation and treatment of menstrual disorders with a patient-first approach. The clinic follows the philosophy &quot;Her Health First,&quot; so you are listened to without judgement and every option is explained clearly.
              </p>
            </div>

            {/* Section 2 — Normal Menstrual Cycle */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Normal Menstrual Cycle?
              </h2>

              <p className="text-gray-700 mb-4">
                Cycles vary between women, but a typical pattern includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A cycle length of about 21 to 35 days, counted from the first day of one period to the first day of the next</li>
                <li>Bleeding that lasts around 3 to 7 days</li>
                <li>Flow that is manageable, without frequent large clots</li>
                <li>Cramps that are tolerable with simple measures</li>
              </ul>

              <p className="text-gray-700">
                In the first couple of years after a girl&apos;s first period, and in the years approaching menopause, cycles can be less predictable. Changes that persist or disturb your daily life deserve a medical check.
              </p>
            </div>

            {/* Section 3 — Common Period Problems */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Period Problems
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Irregular periods:</strong> Cycles that vary widely, come too often or are far apart.
                </p>

                <p>
                  <strong>Missed or absent periods:</strong> Not having a period for several months when not pregnant.
                </p>

                <p>
                  <strong>Heavy periods:</strong> Bleeding that soaks a pad or tampon every hour or two, lasts longer than a week or includes large clots.
                </p>

                <p>
                  <strong>Painful periods:</strong> Cramps severe enough to disrupt daily life.
                </p>

                <p>
                  <strong>Scanty periods:</strong> Very light flow or very short duration.
                </p>

                <p>
                  <strong>Bleeding between periods:</strong> Spotting or bleeding at unexpected times, or after intercourse.
                </p>

                <p>
                  <strong>Premenstrual symptoms:</strong> Mood changes, breast tenderness, bloating and fatigue that are marked enough to affect life.
                </p>
              </div>
            </div>

            {/* Section 4 — Possible Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Possible Causes of Period Problems
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual changes can come from many sources:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  <strong>PCOS or PCOD:</strong> Irregular ovulation, acne, excess hair and weight changes
                </li>
                <li>
                  <strong>Thyroid disorders:</strong> Both underactive and overactive thyroid can disturb cycles
                </li>
                <li>
                  <strong>Uterine fibroids and polyps:</strong> Often linked with heavy bleeding
                </li>
                <li>
                  <strong>Endometriosis:</strong> A common cause of severe period pain and pelvic pain
                </li>
                <li>
                  <strong>Adenomyosis:</strong> Heavy, painful periods due to tissue growing within the uterine wall
                </li>
                <li>
                  <strong>Hormonal imbalance:</strong> Including raised prolactin or perimenopausal changes
                </li>
                <li>Stress, sudden weight change or intense exercise</li>
                <li>Pregnancy or miscarriage</li>
                <li>Infections of the reproductive tract</li>
                <li>Certain medicines and contraceptives</li>
                <li>Bleeding disorders, in some women</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Finding the real cause is the key to the right treatment.
              </p>
            </div>

            {/* Section 5 — When to See a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When to See a Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Book a consultation if you notice:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods that are consistently irregular or absent for 3 months or more</li>
                <li>Cycles shorter than 21 days or longer than 35 days</li>
                <li>Bleeding that lasts more than 7 days or soaks pads very quickly</li>
                <li>Cramps that do not improve with simple pain relief</li>
                <li>Bleeding between periods, after intercourse or after menopause</li>
                <li>Dizziness, tiredness or breathlessness from heavy blood loss</li>
                <li>Pain with intercourse or chronic pelvic pain</li>
                <li>Trouble conceiving along with irregular cycles</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Seek urgent care for very heavy bleeding with dizziness or fainting, or severe sudden abdominal pain.
              </p>
            </div>

            {/* Section 6 — Diagnosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Period Problems Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                Your first visit at Dr. Priyanka Gynaec begins with a conversation. Your doctor will ask about your cycle pattern, flow, pain, family history, medicines and general health. Depending on your symptoms, evaluation may include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A gentle clinical examination, if appropriate</li>
                <li>Ultrasound of the uterus and ovaries, using a Voluson E22 3D/4D ultrasound machine for detailed images</li>
                <li>Blood tests, such as haemoglobin, thyroid function, hormones and blood sugar</li>
                <li>A pregnancy test when relevant</li>
                <li>Hysteroscopy, when a closer look inside the uterine cavity is needed</li>
                <li>Laparoscopy in selected cases, particularly when endometriosis is suspected</li>
              </ul>

              <p className="text-gray-700 mt-4">
                You will be told why each test is advised, so there are no surprises.
              </p>
            </div>

            {/* Section 7 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Menstrual Disorders
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends on the cause, your age, your health and whether you want to conceive.
              </p>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Lifestyle and Supportive Measures
                  </h3>

                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Balanced nutrition and adequate iron intake</li>
                    <li>Regular physical activity and healthy weight management</li>
                    <li>Stress reduction and good sleep</li>
                    <li>Heat packs and gentle exercise for cramps, with doctor-approved pain relief</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medical Treatment
                  </h3>

                  <p className="text-gray-700 mb-3">
                    Depending on the diagnosis, your doctor may recommend:
                  </p>

                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Medicines to reduce heavy bleeding or regulate cycles</li>
                    <li>Hormonal treatment where appropriate</li>
                    <li>Treatment for thyroid or other hormonal imbalance</li>
                    <li>Iron and supplements to correct anaemia</li>
                    <li>Ovulation induction for women with PCOS who wish to conceive</li>
                  </ul>

                  <p className="text-gray-700 mt-4">
                    Please avoid self-medicating with hormonal pills or herbal remedies, as they may hide the real problem or cause side effects.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Procedures and Surgery
                  </h3>

                  <p className="text-gray-700 mb-3">
                    When medicines are not enough, or a structural cause is found, options include:
                  </p>

                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Hysteroscopic polypectomy to remove uterine polyps without cuts</li>
                    <li>Laparoscopic myomectomy to remove fibroids while preserving the uterus</li>
                    <li>Endometriosis surgery through 3D laparoscopy to relieve pelvic pain</li>
                    <li>Laparoscopic hysterectomy in selected cases where it is medically needed and other options are unsuitable</li>
                  </ul>

                  <p className="text-gray-700 mt-4">
                    Surgery is recommended only when it is truly the best option, and alternatives are always discussed first.
                  </p>
                </div>

              </div>
            </div>

            {/* Section 8 — Periods and PCOS */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Periods and PCOS
              </h2>

              <p className="text-gray-700">
                PCOS is one of the most common reasons for irregular periods. Along with missed cycles, women may notice acne, excess hair growth and weight gain. It is treatable, and early care protects long-term health and fertility. Lifestyle changes, medicines and ovulation induction can restore regular cycles or help you conceive.
              </p>
            </div>

            {/* Section 9 — Period Pain and Endometriosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Period Pain and Endometriosis
              </h2>

              <p className="text-gray-700">
                Mild cramps are common, but severe pain that keeps you in bed, causes vomiting or does not respond to usual pain relief may point to endometriosis. It can also cause pain during intercourse, chronic pelvic pain and difficulty conceiving. It is often diagnosed late because women are told the pain is normal. Advanced 3D laparoscopic excision can help relieve symptoms.
              </p>
            </div>

            {/* Section 10 — Heavy Periods and Anaemia */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Heavy Periods and Anaemia
              </h2>

              <p className="text-gray-700">
                Long-term heavy bleeding can quietly drain iron stores. Signs of anaemia include tiredness, pale skin, dizziness, hair fall, breathlessness and palpitations. A blood test can confirm it. Treating both the bleeding and the anaemia improves energy and wellbeing.
              </p>
            </div>

            {/* Section 11 — Teenagers and Adolescents */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Periods in Teenagers and Adolescents
              </h2>

              <p className="text-gray-700">
                It is common for teenage cycles to be irregular at first. However, very heavy bleeding, extreme pain, no periods by the age of 15 or persistent irregularity deserve evaluation. A gentle, respectful consultation, with a parent present if the girl wishes, helps young patients feel comfortable.
              </p>
            </div>

            {/* Section 12 — Periods Near Menopause */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Periods Near Menopause
              </h2>

              <p className="text-gray-700">
                In the years before menopause, cycles may become irregular, heavier or lighter. These changes are often normal, but heavy bleeding, bleeding between periods or any bleeding after menopause should always be examined.
              </p>
            </div>

            {/* Section 13 — Why Women Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A listening-first, judgement-free consultation</li>
                <li>Clear explanations in simple language</li>
                <li>Modern diagnostic imaging and 3D laparoscopy when needed</li>
                <li>Honest advice, with surgery suggested only when necessary</li>
                <li>Continuity of care, from first visit to follow-up</li>
                <li>Fertility, pregnancy and paediatric care available in the same place</li>
              </ul>
            </div>

            {/* Section 14 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Address and Appointments
              </h2>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-6">

                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">
                        Dr. Priyanka Gynaec Clinic
                      </p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  {/* Phone and WhatsApp */}
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black flex-wrap">
                        <a
                          href="tel:+919079765578"
                          className="hover:underline"
                        >
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a
                          href="https://wa.me/918979670705"
                          className="hover:underline"
                        >
                          +91 89796 70705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynaec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynaec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.gynaecologistmoradabad.com
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

            {/* Section 15 — FAQs */}
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
