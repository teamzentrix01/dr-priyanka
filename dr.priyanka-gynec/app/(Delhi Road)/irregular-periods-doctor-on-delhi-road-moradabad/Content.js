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
  MessageCircle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function IrregularPeriodsDoctorDelhiRoadMoradabad() {
  const faqs = [
    {
      q: "Can stress cause irregular periods?",
      a: "Yes. Stress can delay ovulation and disturb the cycle.",
    },
    {
      q: "How many days late is a period considered missed?",
      a: "Many doctors consider a period missed when it is more than a week late, but take a pregnancy test earlier if you are sexually active.",
    },
    {
      q: "Is it safe to take tablets to delay or bring on periods?",
      a: "Only with medical advice. Frequent use can disturb your hormonal balance.",
    },
    {
      q: "Do irregular periods affect fertility?",
      a: "They can, because ovulation may be irregular, but many women conceive after treatment.",
    },
    {
      q: "Can irregular periods be cured?",
      a: "Many causes can be treated or well controlled, depending on the underlying condition.",
    },
    {
      q: "Should unmarried women see a gynaecologist for irregular periods?",
      a: "Yes. Menstrual health concerns are valid at any age or marital status.",
    },
    {
      q: "What are the common causes of irregular periods?",
      a: "Common causes include PCOS, thyroid disorders, high prolactin levels, stress, weight changes, pregnancy, breastfeeding, fibroids, polyps, and perimenopause.",
    },
    {
      q: "When should I see a doctor for irregular periods?",
      a: "See a doctor if periods have been irregular for more than three months, you miss periods with a negative pregnancy test, bleeding is very heavy, or you have severe pain or signs of anaemia.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering diagnosis and treatment for irregular periods, PCOS, hormonal disorders, and fertility concerns.",
    },
    {
      q: "What facilities are available at Dr. Priyanka Pachauri’s clinic?",
      a: "The clinic provides consultation, ultrasound support, laboratory investigations, hormonal evaluation, and personalised treatment planning for menstrual and fertility-related concerns.",
    },
    {
      q: "How can I book an irregular periods consultation near Delhi Road, Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic’s official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Irregular Periods Doctor on Delhi Road Moradabad: Finding the Cause and the Right Treatment
              </h1>


              <p className="text-gray-700 mb-4">
                A menstrual cycle that comes early one month, late the next, or skips altogether can be confusing and stressful. Many women wait for months, hoping it will settle by itself. Sometimes it does, but irregular periods can also be an early signal of hormonal, thyroid, or reproductive health issues that deserve attention.
              </p>


              <p className="text-gray-700">
                If you are looking for an irregular periods doctor on Delhi Road Moradabad, this guide explains what counts as irregular, what causes it, how it is evaluated, and how to choose the right specialist.
              </p>
            </div>


            {/* Section 2 — What Is a Normal Menstrual Cycle? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Normal Menstrual Cycle?
              </h2>


              <p className="text-gray-700 mb-4">
                A cycle is counted from the first day of one period to the first day of the next. In most adult women, it lasts between 21 and 35 days, with bleeding for two to seven days. In the first few years after periods begin, cycles may be less predictable, and they can also change as menopause approaches.
              </p>


              <p className="text-gray-700">
                Small variations of a few days are common. A pattern is considered irregular when cycles repeatedly fall outside this range, vary widely from month to month, or when bleeding is unusually heavy, light, or prolonged.
              </p>
            </div>


            {/* Section 3 — What Counts as Irregular Periods? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as Irregular Periods?
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Cycles shorter than 21 days or longer than 35 days</li>
                <li>Missing three or more periods in a row, not due to pregnancy</li>
                <li>Large differences in cycle length from one month to the next</li>
                <li>Very heavy bleeding, with clots or soaking a pad within an hour or two</li>
                <li>Very light bleeding or only spotting</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Periods lasting longer than seven days</li>
                <li>Severe pain that interferes with daily life</li>
              </ul>
            </div>


            {/* Section 4 — Why Delhi Road Is Practical */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Delhi Road Is a Practical Location
              </h2>


              <p className="text-gray-700">
                Finding the cause of irregular periods often takes more than one visit. You may need blood tests, an ultrasound, and a follow-up to review results and monitor treatment. Delhi Road is well connected within Moradabad, and diagnostic labs, clinics, and pharmacies are located nearby, which makes it simpler to complete the process and stay consistent with treatment.
              </p>
            </div>


            {/* Section 5 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Irregular Periods
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Hormonal Conditions
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>PCOS:</strong> One of the most common causes, linked with irregular ovulation, acne, and weight changes</li>
                    <li><strong>Thyroid disorders:</strong> Both underactive and overactive thyroid can disturb cycles</li>
                    <li><strong>High prolactin levels:</strong> May stop ovulation and sometimes cause breast discharge</li>
                    <li><strong>Premature ovarian insufficiency:</strong> Reduced ovarian function before the age of forty</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Lifestyle Factors
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Sudden weight gain or weight loss</li>
                    <li>Excessive exercise</li>
                    <li>Chronic stress or poor sleep</li>
                    <li>Crash diets or nutritional deficiencies</li>
                    <li>Travel and shift work in some women</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Reproductive Causes
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Pregnancy or breastfeeding</li>
                    <li>Fibroids or polyps</li>
                    <li>Endometriosis or adenomyosis</li>
                    <li>Pelvic infections</li>
                    <li>Perimenopause, the transition before menopause</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medicines and Contraception
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Hormonal pills, injections, or intrauterine devices</li>
                    <li>Emergency contraceptive pills, particularly when used repeatedly</li>
                    <li>Some medicines for mental health, epilepsy, or blood thinning</li>
                  </ul>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                Often more than one factor is involved, which is why a proper evaluation matters.
              </p>
            </div>


            {/* Section 6 — When Should You See a Doctor? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Doctor?
              </h2>


              <p className="text-gray-700 mb-4">
                Do not wait too long. Book a consultation if:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your periods have been irregular for more than three months</li>
                <li>You have missed periods and a pregnancy test is negative</li>
                <li>Bleeding is very heavy or lasts more than a week</li>
                <li>You bleed between periods or after intercourse</li>
                <li>Your periods are accompanied by severe pain</li>
                <li>You have signs of anaemia such as tiredness, dizziness, or breathlessness</li>
                <li>You are planning pregnancy and your cycles are unpredictable</li>
                <li>You have never had a period by the age of fifteen</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Seek urgent care for sudden, very heavy bleeding, severe pelvic pain, fainting, or fever with bleeding.
              </p>
            </div>


            {/* Section 7 — Evaluation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Irregular Periods Are Evaluated
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Detailed history:</strong> The doctor asks about your cycle pattern, flow, pain, weight changes, stress, medicines, diet, and family history.</li>
                <li><strong>Physical examination:</strong> Weight, blood pressure, skin, hair growth, and sometimes a pelvic examination may be done.</li>
                <li><strong>Pregnancy test:</strong> This is usually the first step if a period is missed.</li>
                <li><strong>Blood tests:</strong> Hormones such as thyroid, prolactin, and reproductive hormones are checked. Haemoglobin, blood sugar, and other tests may be added.</li>
                <li><strong>Ultrasound:</strong> A pelvic or transvaginal scan examines the uterus, lining, and ovaries.</li>
                <li><strong>Further tests:</strong> An endometrial biopsy, hysteroscopy, or MRI may be advised in selected cases, particularly with heavy bleeding or in older women.</li>
              </ul>
            </div>


            {/* Section 8 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options
              </h2>


              <p className="text-gray-700 mb-4">
                Treatment depends on the cause, your age, and whether you plan pregnancy.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Lifestyle Management
                  </h3>
                  <p className="text-gray-700">
                    For many women, steady weight, balanced meals, regular exercise, enough sleep, and stress control can help cycles settle. This is the first step for PCOS and stress-related irregularity.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Hormonal Treatment
                  </h3>
                  <p className="text-gray-700">
                    Hormonal pills may regulate cycles, reduce heavy bleeding, and protect the uterine lining. Progesterone tablets are sometimes used to bring on a period. These should only be taken under medical advice.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Treating the Underlying Condition
                  </h3>
                  <p className="text-gray-700">
                    Thyroid medicines, prolactin-lowering treatment, insulin-sensitising medicines, or treatment for infection address the root cause.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medicines for Heavy Bleeding
                  </h3>
                  <p className="text-gray-700">
                    Tranexamic acid and other medicines can reduce flow. Iron supplements correct anaemia.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Procedures
                  </h3>
                  <p className="text-gray-700">
                    Polyps, fibroids, or other structural causes may need hysteroscopy or surgery in some cases.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Fertility Support
                  </h3>
                  <p className="text-gray-700">
                    If you are trying to conceive, your doctor may use ovulation-inducing medicines and monitor your cycles.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 9 — Diet and Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Tips
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eat regular, balanced meals with protein, vegetables, fruits, and whole grains</li>
                <li>Include iron-rich foods such as spinach, lentils, dates, and jaggery</li>
                <li>Avoid crash diets and extreme calorie cutting</li>
                <li>Maintain a healthy weight</li>
                <li>Exercise regularly, but avoid overtraining</li>
                <li>Sleep seven to eight hours</li>
                <li>Practise relaxation, such as yoga, breathing exercises, or hobbies</li>
                <li>Keep a period diary or use a tracking app</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A cycle diary showing start dates, flow, pain, and symptoms helps your doctor make a quicker diagnosis.
              </p>
            </div>


            {/* Section 10 — Teenagers */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Irregular Periods in Teenagers
              </h2>


              <p className="text-gray-700">
                Cycles in teenagers are often irregular for the first two years after menarche because hormonal signals are still settling. However, very heavy bleeding, severe pain, absent periods by age fifteen, or signs of PCOS should be evaluated. A gentle, supportive doctor can help young girls understand their bodies without fear or embarrassment.
              </p>
            </div>


            {/* Section 11 — Near Menopause */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Irregular Periods Near Menopause
              </h2>


              <p className="text-gray-700">
                In the years before menopause, called perimenopause, cycles may become shorter, longer, heavier, or skipped. This is usually normal, but heavy bleeding, bleeding after sex, or bleeding after twelve months without periods should always be checked.
              </p>
            </div>


            {/* Section 12 — Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Irregular Periods and Fertility
              </h2>


              <p className="text-gray-700">
                Irregular cycles often mean irregular ovulation, which can make conception harder. The good news is that most causes are treatable. If you are planning pregnancy, tell your doctor early so that tests and treatment can be tailored to your plans.
              </p>
            </div>


            {/* Section 13 — How to Choose a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose an Irregular Periods Doctor
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualifications and Registration
                  </h3>
                  <p className="text-gray-700">
                    Look for MD, MS, DGO, or DNB in Obstetrics and Gynaecology, and a valid medical council registration. An endocrinologist may be involved for complex hormonal issues.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience With Menstrual Disorders
                  </h3>
                  <p className="text-gray-700">
                    Ask how often the doctor treats PCOS, thyroid-related cycle problems, heavy bleeding, and fertility concerns.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Thorough Evaluation
                  </h3>
                  <p className="text-gray-700">
                    A good doctor looks for the cause instead of only prescribing tablets to bring on a period.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-gray-700">
                    You should understand the likely cause, the tests required, and the treatment plan.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Respectful Approach
                  </h3>
                  <p className="text-gray-700">
                    Choose a doctor who listens without judgement, particularly on sensitive topics.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Facilities
                  </h3>
                  <p className="text-gray-700">
                    A reliable ultrasound unit and laboratory support make evaluation faster.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparent Costs
                  </h3>
                  <p className="text-gray-700">
                    Ask about consultation fees and the expected cost of tests and medicines.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reputation
                  </h3>
                  <p className="text-gray-700">
                    Speak with women who have received care there. Their experiences with patience and accuracy are very useful.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 14 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Doctor
              </h2>


              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>What is causing my irregular periods?</li>
                <li>Which tests do I need?</li>
                <li>Is this temporary or long term?</li>
                <li>Which treatment is safest for me?</li>
                <li>Will it affect my chances of pregnancy?</li>
                <li>When should I come back for follow-up?</li>
              </ol>
            </div>


            {/* Section 15 — Mistakes to Avoid */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Taking period-delaying or period-inducing tablets repeatedly without advice</li>
                <li>Using emergency contraceptive pills as a regular method</li>
                <li>Ignoring months of missed periods</li>
                <li>Trying crash diets or extreme exercise to fix cycles</li>
                <li>Relying on unproven herbal remedies</li>
                <li>Skipping follow-up once periods improve</li>
              </ul>
            </div>


            {/* Section 16 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Myths About Irregular Periods
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Irregular periods are normal for every woman.”
                  </h3>
                  <p className="text-gray-700">
                    Occasional variation is normal, but persistent irregularity needs evaluation.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Only overweight women get irregular periods.”
                  </h3>
                  <p className="text-gray-700">
                    Underweight women and women with normal weight can also be affected.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Missing periods is harmless.”
                  </h3>
                  <p className="text-gray-700">
                    Long gaps may signal hormonal problems or thicken the uterine lining.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Painful periods always mean irregular periods.”
                  </h3>
                  <p className="text-gray-700">
                    Pain and irregularity are separate issues, though they may occur together.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Periods will become regular after marriage or pregnancy.”
                  </h3>
                  <p className="text-gray-700">
                    This is not guaranteed, and the cause should be treated.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 17 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Irregular Periods Doctor in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For women in Moradabad seeking a clear explanation and effective treatment for irregular periods, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers comprehensive menstrual and hormonal care. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first philosophy, &quot;Her Health First&quot;.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic provides evaluation for PCOS, thyroid-related cycle problems, hormonal imbalance, heavy bleeding, fertility concerns, and perimenopausal changes. With ultrasound support, laboratory investigations, and personalised treatment planning, patients receive organised care close to Delhi Road, Moradabad.
              </p>


              <p className="text-gray-700 mb-4">
                Whether your cycles are irregular due to stress, weight changes, PCOS, or another underlying condition, Dr. Priyanka Pachauri focuses on identifying the cause and creating a treatment plan suited to your health and future goals.
              </p>
            </div>


            {/* Section 18 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
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
                          href="mailto:drpriyankagynaec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynaec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
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


                  <div className="flex items-start gap-3">
                    <MessageCircle size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Social Media</p>
                      <div className="space-y-1">
                        <a
                          href="https://www.instagram.com/dr.priyanka.gynae/"
                          className="block hover:underline text-black"
                        >
                          Instagram: @dr.priyanka.gynae
                        </a>
                        <a
                          href="https://www.facebook.com/priyanka.pachauri.790080"
                          className="block hover:underline text-black"
                        >
                          Facebook: priyanka.pachauri.790080
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


            {/* Section 19 — FAQs */}
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