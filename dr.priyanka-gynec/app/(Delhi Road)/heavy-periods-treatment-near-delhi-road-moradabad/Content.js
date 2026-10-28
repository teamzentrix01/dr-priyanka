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


export default function HeavyPeriodsTreatmentDelhiRoadMoradabad() {
  const faqs = [
    {
      q: "How much bleeding is too much?",
      a: "Soaking a pad every hour or two, passing large clots, or bleeding beyond seven days suggests heavy bleeding.",
    },
    {
      q: "Can heavy periods cause hair loss?",
      a: "Yes, anaemia from repeated blood loss can lead to hair fall.",
    },
    {
      q: "Is tranexamic acid safe?",
      a: "It is widely used and effective, but should only be taken after medical advice, especially if you have a history of clots.",
    },
    {
      q: "Will a hormonal intrauterine device stop my periods?",
      a: "It often reduces bleeding greatly, and some women have very light or no periods.",
    },
    {
      q: "Can stress cause heavy periods?",
      a: "Stress can disturb hormones and affect your cycle, though other causes should also be checked.",
    },
    {
      q: "Do I need surgery for heavy periods?",
      a: "Not always. Many women improve with medicines or minor procedures.",
    },
    {
      q: "What are the common causes of heavy periods?",
      a: "Common causes include hormonal imbalance, PCOS, thyroid disorders, fibroids, polyps, adenomyosis, infections, and certain medicines or medical conditions.",
    },
    {
      q: "Can heavy periods affect fertility?",
      a: "Some causes, such as fibroids, polyps, and hormonal imbalance, can affect the chance of conceiving. Fertility-sparing treatment options are available where appropriate.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering diagnosis and treatment for heavy menstrual bleeding and related conditions.",
    },
    {
      q: "What facilities are available at Dr. Priyanka Pachauri’s clinic?",
      a: "The clinic provides consultation, ultrasound support, laboratory investigations, medical management, and guidance for minimally invasive gynaecological treatment where required.",
    },
    {
      q: "How can I book a heavy periods consultation near Delhi Road, Moradabad?",
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
                Heavy Periods Treatment Near Delhi Road Moradabad: Relief from Excessive Bleeding
              </h1>


              <p className="text-gray-700 mb-4">
                Planning your day around your period, carrying extra clothes, missing work, or feeling exhausted for days afterwards: this is the reality for many women with heavy periods. Because periods are so often considered &quot;just something women endure,&quot; many suffer silently for years. Heavy menstrual bleeding, known medically as menorrhagia, is a common and treatable condition.
              </p>


              <p className="text-gray-700">
                If you are looking for heavy periods treatment near Delhi Road Moradabad, this guide explains what counts as heavy bleeding, what causes it, which treatments are available, and how to choose the right doctor.
              </p>
            </div>


            {/* Section 2 — What Are Heavy Periods? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Are Heavy Periods?
              </h2>


              <p className="text-gray-700 mb-4">
                Heavy periods involve bleeding that is more than normal in amount, length, or both. The average woman loses about 30 to 40 millilitres of blood in a cycle, while heavy periods may involve 80 millilitres or more. Since measuring blood at home is not practical, doctors rely on how bleeding affects your daily life.
              </p>


              <p className="text-gray-700 mb-4">
                You may have heavy periods if:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You soak through a pad or tampon every one to two hours</li>
                <li>You need to change protection at night</li>
                <li>You pass clots larger than a coin</li>
                <li>Your periods last longer than seven days</li>
                <li>You avoid activities or social events because of bleeding</li>
                <li>You feel tired, dizzy, or breathless during or after your period</li>
              </ul>
            </div>


            {/* Section 3 — Why Delhi Road Is Practical */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Delhi Road Is a Practical Location
              </h2>


              <p className="text-gray-700">
                Heavy bleeding can leave you weak, and sometimes it requires urgent attention. Delhi Road is well connected within Moradabad, with clinics, hospitals, diagnostic labs, pharmacies, and blood banks nearby. This helps women complete tests, start treatment quickly, and reach care in an emergency without difficult travel.
              </p>
            </div>


            {/* Section 4 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Heavy Periods
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Hormonal Causes
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Hormonal imbalance:</strong> Irregular ovulation can cause the uterine lining to build up and shed heavily</li>
                    <li><strong>PCOS:</strong> Often linked with irregular and sometimes heavy bleeding</li>
                    <li><strong>Thyroid disorders:</strong> Particularly an underactive thyroid</li>
                    <li><strong>Perimenopause:</strong> Hormonal shifts in the years before menopause</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Uterine and Pelvic Causes
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Fibroids:</strong> Non-cancerous growths in the uterine wall</li>
                    <li><strong>Polyps:</strong> Small growths on the uterine lining</li>
                    <li><strong>Adenomyosis:</strong> Uterine lining growing into the muscle wall</li>
                    <li><strong>Endometriosis:</strong> Tissue similar to the lining growing outside the uterus</li>
                    <li><strong>Pelvic infection:</strong> Inflammation of the reproductive organs</li>
                    <li>Rarely, pre-cancerous or cancerous changes in the uterine lining</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Other Causes
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Copper intrauterine devices</li>
                    <li>Blood clotting disorders</li>
                    <li>Certain medicines, including blood thinners</li>
                    <li>Complications of pregnancy, such as miscarriage or ectopic pregnancy</li>
                    <li>Liver, kidney, or other medical conditions</li>
                  </ul>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                In many women, no clear cause is found, and treatment focuses on controlling the bleeding.
              </p>
            </div>


            {/* Section 5 — How Heavy Bleeding Affects Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Heavy Bleeding Affects Health
              </h2>


              <p className="text-gray-700 mb-4">
                Beyond inconvenience, heavy periods can lead to iron-deficiency anaemia, which causes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Constant tiredness and weakness</li>
                <li>Pale skin</li>
                <li>Dizziness or fainting</li>
                <li>Shortness of breath</li>
                <li>Headaches</li>
                <li>Hair loss and brittle nails</li>
                <li>Poor concentration</li>
                <li>Fast heartbeat</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Heavy bleeding can also affect work, studies, relationships, and emotional wellbeing. Treating it early protects both physical and mental health.
              </p>
            </div>


            {/* Section 6 — When to Seek Urgent Help */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When to Seek Urgent Medical Help
              </h2>


              <p className="text-gray-700 mb-4">
                Go to a hospital immediately if you have:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bleeding that soaks through a pad every hour for several hours</li>
                <li>Dizziness, fainting, or rapid heartbeat</li>
                <li>Severe abdominal pain with heavy bleeding</li>
                <li>Fever with bleeding</li>
                <li>Heavy bleeding during pregnancy or after delivery</li>
                <li>Heavy bleeding after menopause</li>
              </ul>
            </div>


            {/* Section 7 — Diagnosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Heavy Periods Are Diagnosed
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>History:</strong> The doctor asks about your cycle, flow, clots, pain, medicines, family history, and any previous bleeding problems.</li>
                <li><strong>Examination:</strong> Includes blood pressure, general check, and often a pelvic examination.</li>
                <li><strong>Blood tests:</strong> A complete blood count checks for anaemia. Thyroid, hormone levels, and clotting tests may be added.</li>
                <li><strong>Ultrasound:</strong> Shows fibroids, polyps, cysts, and lining thickness.</li>
                <li><strong>Hysteroscopy:</strong> A thin camera examines the uterine cavity directly and allows biopsy or removal of polyps.</li>
                <li><strong>Endometrial biopsy:</strong> A small sample of the lining is taken in selected cases, particularly in women over forty-five or with risk factors.</li>
                <li><strong>MRI:</strong> Occasionally used to evaluate adenomyosis or complex fibroids.</li>
              </ul>
            </div>


            {/* Section 8 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options
              </h2>


              <p className="text-gray-700 mb-4">
                The best treatment depends on the cause, your age, the severity of bleeding, and your plans for pregnancy.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Iron and Supportive Care
                  </h3>
                  <p className="text-gray-700">
                    Treating anaemia comes first. Iron tablets, iron-rich foods, or, in some cases, iron infusions restore energy and strength.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Non-Hormonal Medicines
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Tranexamic acid reduces bleeding when taken during periods</li>
                    <li>Anti-inflammatory painkillers can ease pain and reduce flow for some women</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Hormonal Treatment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Combined hormonal pills regulate cycles and reduce bleeding</li>
                    <li>Progesterone tablets help stabilise the uterine lining</li>
                    <li>Hormone-releasing intrauterine device significantly reduces bleeding in many women and also provides contraception</li>
                    <li>Other hormonal medicines may be used for fibroids or endometriosis</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Procedures
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Hysteroscopic removal of polyps or small fibroids</li>
                    <li>Endometrial ablation, which destroys or thins the uterine lining for women who have completed their family</li>
                    <li>Uterine artery embolisation for some fibroids in specialised centres</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Surgery
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Myomectomy removes fibroids while preserving the uterus</li>
                    <li>Hysterectomy removes the uterus and is considered when other treatments have failed or are unsuitable and the woman has completed her family</li>
                  </ul>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                Your doctor should explain the benefits, risks, and effect on fertility of each option.
              </p>
            </div>


            {/* Section 9 — Heavy Periods and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Heavy Periods and Fertility
              </h2>


              <p className="text-gray-700">
                Some causes of heavy bleeding, such as fibroids, polyps, and hormonal imbalance, can affect the chance of conceiving. If you plan pregnancy, tell your doctor so treatments that preserve fertility can be chosen. Endometrial ablation and hysterectomy are not suitable for women who wish to have children.
              </p>
            </div>


            {/* Section 10 — Teenagers and Menopause */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Heavy Periods in Teenagers and Near Menopause
              </h2>


              <p className="text-gray-700">
                Teenagers may have heavy periods in the first years because ovulation is still settling. Very heavy bleeding, however, should be checked, since bleeding disorders and anaemia can be present. Women approaching menopause may also experience heavier or irregular bleeding due to hormonal shifts, but persistent heavy bleeding in this age group deserves careful evaluation.
              </p>
            </div>


            {/* Section 11 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Diet and Lifestyle Support
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eat iron-rich foods such as spinach, lentils, beetroot, dates, and jaggery</li>
                <li>Combine iron with vitamin C sources like lemon, oranges, and amla to improve absorption</li>
                <li>Include protein and vitamin B12 sources</li>
                <li>Drink plenty of water</li>
                <li>Maintain a healthy weight</li>
                <li>Exercise gently, as your energy allows</li>
                <li>Rest during heavy days</li>
                <li>Keep a period diary noting dates, flow, clots, and symptoms</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Diet helps recovery from anaemia, but it cannot replace medical evaluation for heavy bleeding.
              </p>
            </div>


            {/* Section 12 — How to Choose a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose a Doctor for Heavy Periods
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualifications and Registration
                  </h3>
                  <p className="text-gray-700">
                    Choose a gynaecologist with MD, MS, DGO, or DNB in Obstetrics and Gynaecology and valid medical council registration.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience With Bleeding Disorders
                  </h3>
                  <p className="text-gray-700">
                    Ask how often the doctor treats fibroids, polyps, adenomyosis, and hormonal causes of heavy bleeding.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Thorough Investigation
                  </h3>
                  <p className="text-gray-700">
                    A good doctor looks for the cause rather than prescribing medicines blindly.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Range of Treatment Options
                  </h3>
                  <p className="text-gray-700">
                    Look for a specialist who offers medicines, hysteroscopy, minimally invasive surgery, and fertility-sparing options.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Honest Counselling
                  </h3>
                  <p className="text-gray-700">
                    She should discuss alternatives to hysterectomy and recommend surgery only when necessary.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Facilities
                  </h3>
                  <p className="text-gray-700">
                    A reliable ultrasound unit, laboratory, operation theatre, and emergency support make care safer.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparent Costs
                  </h3>
                  <p className="text-gray-700">
                    Request clear estimates for consultations, tests, medicines, and procedures.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reputation
                  </h3>
                  <p className="text-gray-700">
                    Speak with women who have received similar treatment. Their experience of comfort, honesty, and results is valuable.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 13 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is causing my heavy bleeding?</li>
                <li>Am I anaemic, and how will it be treated?</li>
                <li>Which tests do I need?</li>
                <li>What are my treatment options, including non-surgical ones?</li>
                <li>Will treatment affect my fertility?</li>
                <li>How soon will I see improvement?</li>
              </ul>
            </div>


            {/* Section 14 — Mistakes to Avoid */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ignoring heavy periods as &quot;normal&quot;</li>
                <li>Taking painkillers or hormonal tablets repeatedly without advice</li>
                <li>Delaying care until severe anaemia develops</li>
                <li>Using unproven herbal or home remedies</li>
                <li>Stopping medicines early because bleeding has reduced</li>
                <li>Skipping follow-up scans and blood tests</li>
              </ul>
            </div>


            {/* Section 15 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Myths About Heavy Periods
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Heavy periods are part of being a woman.”
                  </h3>
                  <p className="text-gray-700">
                    Heavy bleeding that disrupts life is a medical issue and can be treated.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Heavy bleeding always means cancer.”
                  </h3>
                  <p className="text-gray-700">
                    Most causes are benign, though evaluation is needed to be sure.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Hysterectomy is the only cure.”
                  </h3>
                  <p className="text-gray-700">
                    Many effective medicines and procedures exist.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Eating more iron stops the bleeding.”
                  </h3>
                  <p className="text-gray-700">
                    Iron treats anaemia, but the cause of bleeding still needs treatment.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Heavy periods will stop after having children.”
                  </h3>
                  <p className="text-gray-700">
                    This is not reliable, and the underlying cause must be checked.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 16 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Heavy Periods Treatment in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For women in Moradabad seeking relief from heavy menstrual bleeding, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers a structured, cause-based approach. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first philosophy, &quot;Her Health First&quot;.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic provides evaluation for menstrual disorders, PCOS, fibroids, polyps, adenomyosis, and hormonal causes of heavy bleeding. With ultrasound support, laboratory investigations, medical treatment, and minimally invasive options where appropriate, patients receive organised and timely care.
              </p>


              <p className="text-gray-700 mb-4">
                The focus is on identifying the cause, correcting anaemia, controlling bleeding, preserving fertility where possible, and helping women return to their daily life with confidence.
              </p>
            </div>


            {/* Section 17 — Contact Information */}
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


            {/* Section 18 — FAQs */}
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