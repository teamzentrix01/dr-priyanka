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

export default function HeavyMenstrualBleedingDoctorMoradabad() {
  const faqs = [
    {
      q: "What is heavy menstrual bleeding?",
      a: "It is excessive period bleeding, usually lasting over 7 days or needing frequent pad changes.",
    },
    {
      q: "When should I consult a heavy menstrual bleeding doctor?",
      a: "See a doctor if heavy bleeding continues for 2–3 cycles or causes weakness or pain.",
    },
    {
      q: "What are the common causes?",
      a: "Fibroids, polyps, adenomyosis, endometriosis, PCOS, thyroid problems and bleeding disorders.",
    },
    {
      q: "How is it diagnosed?",
      a: "Through history, blood tests, ultrasound and sometimes hysteroscopy or biopsy.",
    },
    {
      q: "Can heavy bleeding be treated without surgery?",
      a: "Yes. Many women improve with medicines or a hormonal IUD.",
    },
    {
      q: "Does heavy bleeding cause anaemia?",
      a: "Yes. Ongoing blood loss lowers iron and haemoglobin levels.",
    },
    {
      q: "Will treatment affect my fertility?",
      a: "Most treatments do not. Tell your doctor about your pregnancy plans.",
    },
    {
      q: "Does Dr. Priyanka treat heavy menstrual bleeding in Moradabad?",
      a: "Yes. She offers diagnosis, medical treatment and advanced laparoscopic procedures.",
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
                Heavy Menstrual Bleeding Doctor: Expert Diagnosis and Treatment in Moradabad
              </h1>

              <p className="text-gray-700">
                If your periods are so heavy that they disrupt your work, sleep,
                travel and confidence, you are not alone. Heavy menstrual
                bleeding affects a large number of women, and many suffer
                silently for years before seeing a doctor. The good news is that
                a heavy menstrual bleeding doctor can find the cause and offer
                treatment that genuinely works.
              </p>
            </div>

            {/* Section 2 — What Is HMB */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Heavy Menstrual Bleeding?
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy menstrual bleeding (HMB), also called menorrhagia, is
                excessive blood loss during periods that affects a woman&apos;s
                physical, emotional or social well-being. Modern medical
                definitions focus on how it affects your life, not only on the
                amount of blood.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Typical Features of HMB
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods lasting longer than 7 days</li>
                <li>Needing to change pads or tampons every 1–2 hours</li>
                <li>Using double protection to prevent leaks</li>
                <li>Passing clots bigger than a coin</li>
                <li>Bleeding through clothes or bedsheets</li>
                <li>Waking at night to change protection</li>
                <li>Fatigue, dizziness or breathlessness during or after periods</li>
                <li>Avoiding social events, exercise or work during periods</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How It Affects Daily Life
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Missed workdays and reduced productivity</li>
                <li>Anxiety about leaks and stains</li>
                <li>Disturbed sleep</li>
                <li>Strain on relationships</li>
                <li>Reduced participation in prayers, travel or outings</li>
                <li>Low mood and irritability</li>
              </ul>

              <p className="text-gray-700">
                HMB is a medical condition, not a personal weakness, and it
                deserves proper care.
              </p>
            </div>

            {/* Section 3 — When to See Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Heavy Menstrual Bleeding Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                Consult a specialist if you notice any of these signs:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy flow for three or more consecutive cycles</li>
                <li>Sudden increase in flow compared with your usual pattern</li>
                <li>Periods that are also very painful</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Bleeding after menopause</li>
                <li>Signs of anaemia such as pallor, hair fall, weakness or palpitations</li>
                <li>Difficulty becoming pregnant</li>
                <li>A lump, heaviness or pressure in the lower abdomen</li>
                <li>Home remedies and over-the-counter medicines are not helping</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emergency Warning Signs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaking more than one pad per hour for two hours or more</li>
                <li>Feeling faint, confused or very weak</li>
                <li>Heavy bleeding during pregnancy</li>
                <li>Severe one-sided pelvic pain with bleeding</li>
                <li>Fever with foul-smelling discharge and bleeding</li>
              </ul>

              <p className="text-gray-700">
                In these situations, go to the nearest hospital without delay.
              </p>
            </div>

            {/* Section 4 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Heavy Menstrual Bleeding Happen?
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors often group causes into two broad categories: structural
                (something physically present in the uterus) and non-structural
                (hormonal, clotting or other medical issues).
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uterine fibroids: Non-cancerous muscle growths that increase the bleeding surface and flow</li>
                <li>Endometrial polyps: Soft growths in the uterine lining that cause heavy or irregular bleeding</li>
                <li>Adenomyosis: Uterine lining tissue embedded in the muscle wall, leading to heavy, painful periods</li>
                <li>Endometriosis: Lining-like tissue outside the uterus, often causing pain and heavy flow</li>
                <li>Precancerous or cancerous changes: Uncommon, but important to exclude, especially after age 40</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Non-Structural Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation problems: PCOS and other conditions cause irregular ovulation and a thickened lining</li>
                <li>Thyroid disorders: Both low and high thyroid levels affect cycles</li>
                <li>Bleeding disorders: Conditions like von Willebrand disease may cause heavy periods from the first cycle</li>
                <li>Medicines: Blood thinners and some hormonal drugs can increase flow</li>
                <li>Intrauterine copper devices: May cause heavier periods in some women</li>
                <li>Liver, kidney or other systemic conditions: Less common but possible</li>
                <li>Unexplained causes: Sometimes no clear cause is found, yet treatment still works well</li>
              </ul>
            </div>

            {/* Section 5 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Heavy Menstrual Bleeding Doctor Diagnoses the Problem
              </h2>

              <p className="mb-4 text-gray-700">
                An accurate diagnosis prevents unnecessary treatment and avoids
                missing serious conditions.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Careful History
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cycle length, duration, number of pads and clots</li>
                <li>Pain, bloating and any bleeding between periods</li>
                <li>Medicines, previous surgeries and family history of bleeding problems</li>
                <li>Pregnancy plans and contraception</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General assessment for pallor and weight changes</li>
                <li>Abdominal and pelvic examination, when appropriate</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Laboratory Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Complete blood count: Checks haemoglobin and detects anaemia</li>
                <li>Serum ferritin: Shows iron stores, even before anaemia appears</li>
                <li>Thyroid profile: Rules out thyroid imbalance</li>
                <li>Clotting profile: If a bleeding disorder is suspected</li>
                <li>Hormone tests: When PCOS or other hormonal issues are likely</li>
                <li>Urine pregnancy test: To exclude pregnancy-related bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Imaging and Procedures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pelvic ultrasound (including 3D/4D): Detects fibroids, polyps, adenomyosis and ovarian cysts</li>
                <li>Hysteroscopy: A thin camera examines the uterine cavity directly</li>
                <li>Endometrial biopsy: Tissue sampling when the lining needs evaluation</li>
                <li>MRI: In selected complex cases</li>
              </ul>

              <p className="text-gray-700">
                Not every woman needs every test. Your doctor will select the
                ones that fit your symptoms and age.
              </p>
            </div>

            {/* Section 6 — Treatment Ladder */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Treatment Ladder: From Simple to Advanced
              </h2>

              <p className="mb-4 text-gray-700">
                Most women do not need surgery. A good doctor starts with the
                least invasive option that suits your needs and moves forward
                only if required.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Level 1: Medicines Taken During Periods
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid: Reduces bleeding by supporting blood clot stability</li>
                <li>NSAIDs (such as mefenamic acid): Help with pain and can reduce flow</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Level 2: Hormonal Treatments
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Combined oral contraceptive pills: Regulate cycles and lighten flow</li>
                <li>Progesterone tablets: Used to control or stop bleeding and balance the lining</li>
                <li>Hormonal IUD (LNG-IUS): A small device that significantly reduces bleeding over months and lasts for years</li>
                <li>Other hormonal options: Chosen according to age, health and preferences</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Level 3: Treating the Underlying Cause
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS management: Lifestyle, medicines and cycle regulation</li>
                <li>Thyroid correction: Medication to restore normal levels</li>
                <li>Iron and vitamin therapy: Oral or intravenous iron to correct anaemia</li>
                <li>Stopping or changing medicines that contribute to bleeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Level 4: Minimally Invasive Procedures
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnostic hysteroscopy: To see and assess the cavity</li>
                <li>Hysteroscopic polypectomy: Polyps removed through the cervix, with no cuts</li>
                <li>Endometrial ablation: Reduces the lining in selected women who have completed their families</li>
                <li>Uterine artery embolisation: An option for some fibroid cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Level 5: Laparoscopic (Keyhole) Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Laparoscopic myomectomy: Removes fibroids while keeping the uterus</li>
                <li>Laparoscopic cystectomy: Removes ovarian cysts and protects fertility</li>
                <li>Endometriosis excision: Removes disease to relieve pain and bleeding</li>
                <li>Laparoscopic hysterectomy: Removal of the uterus when other treatments have not worked or are unsuitable, and childbearing is complete</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of Laparoscopic Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small incisions and less visible scarring</li>
                <li>Lower post-operative pain</li>
                <li>Shorter hospital stay</li>
                <li>Faster recovery and earlier return to work</li>
                <li>Lower risk of wound complications</li>
              </ul>

              <p className="text-gray-700">
                Your doctor should explain the benefits, risks and alternatives
                of every option so you can decide with confidence.
              </p>
            </div>

            {/* Section 7 — Choosing Between Medicines and Surgery */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing Between Medicines and Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                The right choice depends on your priorities.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medicines May Suit You If:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You want to preserve your fertility</li>
                <li>Your bleeding is moderate and the cause is hormonal</li>
                <li>You prefer to avoid surgery</li>
                <li>You are in the early stages of treatment</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Procedures or Surgery May Suit You If:
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Imaging shows fibroids, polyps or adenomyosis causing symptoms</li>
                <li>Medicines have not worked after a fair trial</li>
                <li>Bleeding is severe or causing recurrent anaemia</li>
                <li>You have completed your family and want a lasting solution</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Questions Worth Asking Your Doctor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the most likely cause of my bleeding?</li>
                <li>What are all my treatment options?</li>
                <li>How long before I see improvement?</li>
                <li>What are the side effects and risks?</li>
                <li>Will this affect my chances of pregnancy?</li>
                <li>What happens if the treatment does not work?</li>
              </ul>
            </div>

            {/* Section 8 — Anaemia */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Heavy Menstrual Bleeding and Anaemia
              </h2>

              <p className="mb-4 text-gray-700">
                Chronic blood loss slowly drains the body&apos;s iron stores. Many
                women adapt to the tiredness and do not realise they are anaemic.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Symptoms of Iron-Deficiency Anaemia
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Persistent tiredness and low energy</li>
                <li>Pale skin, lips and inner eyelids</li>
                <li>Hair fall and brittle nails</li>
                <li>Headaches and dizziness</li>
                <li>Rapid heartbeat or breathlessness on mild activity</li>
                <li>Cold hands and feet</li>
                <li>Cravings for ice or non-food items (pica)</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ways to Rebuild Iron
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Take iron supplements as prescribed</li>
                <li>Eat leafy greens, lentils, chickpeas, dates, jaggery and pomegranate</li>
                <li>Combine iron-rich meals with vitamin C</li>
                <li>Avoid tea or coffee right after meals</li>
                <li>Recheck blood levels after treatment, as advised</li>
              </ul>
            </div>

            {/* Section 9 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                When you are looking for a heavy menstrual bleeding doctor, you
                need someone who combines clinical skill with genuine care. Here
                is what patients can expect:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Woman-centred philosophy: &quot;Her Health First&quot; guides every consultation</li>
                <li>Experienced specialist: Dr. Priyanka Pachauri is known for menstrual disorder care, high-risk pregnancy management and laparoscopic surgery</li>
                <li>Advanced diagnostics: 3D/4D ultrasound and hysteroscopy help pinpoint the exact cause</li>
                <li>Modern surgical options: High-definition 3D laparoscopy for fibroids, cysts, endometriosis and hysterectomy</li>
                <li>Uterus- and fertility-friendly thinking: Options are discussed with your family plans in mind</li>
                <li>Integrated care: Menstrual, fertility, pregnancy and surgical care under one roof</li>
                <li>Clear, kind communication: Every step is explained in simple language</li>
                <li>Easy appointments: Call or WhatsApp to book</li>
              </ul>
            </div>

            {/* Section 10 — Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                Lifestyle changes work alongside medical care.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy weight, since excess weight can worsen hormonal imbalance</li>
                <li>Walk, stretch or practise yoga regularly</li>
                <li>Sleep 7–8 hours and manage stress</li>
                <li>Eat balanced, iron- and protein-rich meals</li>
                <li>Stay well hydrated</li>
                <li>Keep a period diary noting dates, flow and symptoms</li>
                <li>Avoid taking aspirin unless advised by your doctor</li>
                <li>Do not self-medicate with hormonal pills</li>
              </ul>
            </div>

            {/* Section 11 — Age Groups */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Heavy Periods in Different Age Groups
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teenagers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular and heavy cycles are common in the first few years</li>
                <li>Heavy flow from the very first period needs a bleeding disorder check</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ages 20–35
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS, fibroids, polyps and thyroid disease are frequent causes</li>
                <li>Fertility planning is often a key concern</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ages 36–50
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Perimenopause, fibroids and adenomyosis become more common</li>
                <li>Evaluating the uterine lining is especially important</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Childbirth
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Persistent heavy bleeding beyond the normal post-delivery period needs a prompt review</li>
              </ul>
            </div>

            {/* Section 12 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Heavy Menstrual Bleeding
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Myth:</strong> Heavy periods run in families, so nothing can be done.
                  <br />
                  <strong>Fact:</strong> Even when it is familial, treatment is available.
                </p>

                <p>
                  <strong>Myth:</strong> Medicines for heavy bleeding harm fertility.
                  <br />
                  <strong>Fact:</strong> Most commonly used treatments do not permanently affect fertility.
                </p>

                <p>
                  <strong>Myth:</strong> Hysterectomy is the only permanent solution.
                  <br />
                  <strong>Fact:</strong> Many women are treated without removing the uterus.
                </p>

                <p>
                  <strong>Myth:</strong> Heavy bleeding always means cancer.
                  <br />
                  <strong>Fact:</strong> Cancer is uncommon, but persistent abnormal bleeding should still be investigated.
                </p>

                <p>
                  <strong>Myth:</strong> You should wait until it gets worse.
                  <br />
                  <strong>Fact:</strong> Early treatment prevents anaemia and complications.
                </p>
              </div>
            </div>

            {/* Section 13 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <p className="mb-6 text-black">
                You do not have to plan your life around your period. A single
                consultation can start you on the road to relief.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Contact Dr. Priyanka Gynaec</p>
                    <p className="text-black">Doctor: Dr. Priyanka Pachauri</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone (Appointments)</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
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
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
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

            {/* Section 14 — FAQs */}
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
