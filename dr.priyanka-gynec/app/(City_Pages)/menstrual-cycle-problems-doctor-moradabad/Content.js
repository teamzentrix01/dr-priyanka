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

export default function MenstrualCycleProblemsMoradabad() {
  const faqs = [
    {
      q: "How many days between periods is considered normal?",
      a: "A cycle of 21 to 35 days is generally considered normal.",
    },
    {
      q: "Who is the best doctor for menstrual problems in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is an experienced and trusted gynaecologist in Moradabad.",
    },
    {
      q: "Can PCOS be completely cured?",
      a: "PCOS cannot always be fully cured, but it can be effectively managed with proper treatment and lifestyle changes.",
    },
    {
      q: "What is the treatment for heavy menstrual bleeding?",
      a: "Treatment depends on the cause — options range from medication and hormonal therapy to laparoscopic surgery when necessary.",
    },
    {
      q: "When is period pain a cause for concern?",
      a: "When the pain disrupts daily activities or doesn't improve with regular painkillers, it's time to see a doctor.",
    },
    {
      q: "Is laparoscopic surgery safe?",
      a: "Yes, modern 3D laparoscopic surgery is safe and typically allows for a much faster recovery than traditional surgery.",
    },
    {
      q: "How can I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can book by calling +91 90797 65578, messaging on WhatsApp at +91 89796 70705, or through the clinic website.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Can irregular periods affect fertility?",
      a: "Yes, if the underlying cause isn't treated in time, it can affect fertility.",
    },
    {
      q: "What tests are done to diagnose menstrual problems?",
      a: "Common tests include hormonal blood tests, pelvic ultrasound, and, when needed, hysteroscopy or laparoscopy.",
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
                Menstrual Cycle Problems and Choosing the Right Doctor in Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                The menstrual cycle is a natural and essential part of a woman's reproductive health, but when it becomes irregular, unusually painful, or accompanied by heavy bleeding, it often signals a deeper hormonal or physical imbalance. In Moradabad and nearby areas, many women delay seeking help for menstrual issues due to hesitation, lack of awareness, or simply not knowing where to find a trustworthy specialist. Left untreated, these problems can escalate into more serious health concerns, including fertility issues.
              </p>

              <p className="text-gray-700">
                This article covers the most common menstrual cycle problems, their causes, warning signs, diagnostic methods, treatment options, and how to choose the right gynaecologist in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Is the Menstrual Cycle */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is the Menstrual Cycle and Why Does It Matter
              </h2>

              <p className="text-gray-700 mb-4">
                A typical menstrual cycle lasts between 21 and 35 days and is regulated by hormones — primarily estrogen and progesterone. It's not just about reproduction; the regularity of your cycle reflects your overall hormonal and physical health. When the cycle is repeatedly disrupted, it can point to thyroid dysfunction, PCOS, chronic stress, sudden weight changes, or an underlying medical condition. That's why regularly monitoring your menstrual cycle and consulting a specialist when something feels off is so important.
              </p>
            </div>

            {/* Section 3 — Common Menstrual Cycle Problems */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Menstrual Cycle Problems
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Irregular Periods
                  </h3>
                  <p className="text-gray-700">
                    When periods arrive at unpredictable intervals, or don't come for several months at a stretch, this is classified as irregular menstruation. Common causes include PCOS, thyroid imbalance, chronic stress, rapid weight loss or gain, and general hormonal disruption. This issue is becoming increasingly common among younger women, largely due to modern lifestyle habits and poor dietary patterns.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Heavy Bleeding (Menorrhagia)
                  </h3>
                  <p className="text-gray-700">
                    If you're soaking through a pad or tampon every 1–2 hours, need to change protection during the night, or pass large clots, you may be dealing with menorrhagia. Underlying causes can include uterine fibroids, polyps, hormonal imbalance, or endometriosis. Prolonged heavy bleeding can also lead to anemia if left unaddressed.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Painful Periods (Dysmenorrhea)
                  </h3>
                  <p className="text-gray-700">
                    Mild cramping is normal, but when the pain is severe enough to disrupt daily activities — missing school, college, or work — it falls into the category of dysmenorrhea. In some cases, this level of pain can be a sign of conditions like endometriosis or adenomyosis, both of which require timely diagnosis and specialized care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. PCOS (Polycystic Ovary Syndrome)
                  </h3>
                  <p className="text-gray-700">
                    PCOS is one of the most common hormonal disorders affecting young women today. It can cause irregular periods, weight gain, excess facial or body hair, acne, and difficulty conceiving in the future. With the right combination of lifestyle changes, medication, and expert guidance, PCOS can be effectively managed over the long term.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Amenorrhea (Absence of Periods)
                  </h3>
                  <p className="text-gray-700">
                    When a woman misses her period for three consecutive months or more (excluding pregnancy), this is known as amenorrhea. It can result from extreme stress, excessive exercise, very low body weight, hormonal imbalance, or thyroid dysfunction.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    In this condition, tissue similar to the uterine lining grows outside the uterus, causing intense pain, heavy bleeding, and sometimes fertility complications. Endometriosis requires timely specialist evaluation, and in many cases, laparoscopic surgery is recommended for effective and lasting relief.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Premenstrual Syndrome (PMS)
                  </h3>
                  <p className="text-gray-700">
                    Mood swings, irritability, breast tenderness, bloating, and fatigue before periods are common symptoms of PMS. While generally considered normal, if symptoms are severe enough to interfere with daily life, it's worth discussing with a doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes Behind Menstrual Problems
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Hormonal imbalance (estrogen-progesterone)</li>
                <li>Thyroid dysfunction</li>
                <li>PCOS/PCOD</li>
                <li>Chronic mental stress</li>
                <li>Poor diet and nutritional deficiencies</li>
                <li>Excessive or insufficient physical activity</li>
                <li>Uterine fibroids or polyps</li>
                <li>Endometriosis</li>
                <li>Side effects of certain medications</li>
                <li>Rapid fluctuations in body weight</li>
              </ul>
            </div>

            {/* Section 5 — Symptoms to Never Ignore */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Symptoms You Should Never Ignore
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>No periods for 2–3 consecutive months</li>
                <li>Unbearable pain that doesn't respond to regular painkillers</li>
                <li>Excessive bleeding or large blood clots</li>
                <li>Spotting or bleeding between periods</li>
                <li>Extreme fatigue or dizziness (possible signs of anemia)</li>
                <li>Sudden weight gain or excessive facial/body hair</li>
                <li>Pain during or after intercourse</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If you're experiencing any of these symptoms repeatedly, don't delay — get evaluated by an experienced gynaecologist as soon as possible.
              </p>
            </div>

            {/* Section 6 — Modern Diagnostic Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Modern Diagnostic Methods
              </h2>

              <p className="text-gray-700 mb-4">
                Today, several advanced diagnostic tools help pinpoint the exact cause of menstrual problems:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Hormonal blood tests:</strong> To check thyroid, estrogen, progesterone, and other hormone levels</li>
                <li><strong>Pelvic ultrasound (3D/4D):</strong> To examine the structure of the uterus and ovaries</li>
                <li><strong>Hysteroscopy:</strong> A minimally invasive, incision-free procedure to examine inside the uterus</li>
                <li><strong>Diagnostic laparoscopy:</strong> For accurate diagnosis of conditions like endometriosis</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Accurate diagnosis is the foundation of effective treatment, which is why choosing an experienced, technologically equipped doctor makes a real difference.
              </p>
            </div>

            {/* Section 7 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment for menstrual problems depends entirely on the underlying cause:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Lifestyle changes:</strong> Balanced diet, regular exercise, and stress management</li>
                <li><strong>Hormonal therapy/medication:</strong> To regulate irregular cycles and manage PCOS</li>
                <li><strong>Pain-relief and anti-inflammatory medication:</strong> For managing severe cramps</li>
                <li><strong>Laparoscopic surgery:</strong> For fibroids, endometriosis, or cysts, performed in a way that preserves the uterus and fertility wherever possible</li>
                <li><strong>Hysteroscopic polypectomy:</strong> For removing polyps without any incisions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                With modern 3D laparoscopy and minimally invasive techniques, most cases no longer require major surgery or extended recovery time — many patients return to normal activity within 24 hours.
              </p>
            </div>

            {/* Section 8 — Why Choosing the Right Gynaecologist Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing the Right Gynaecologist in Moradabad Matters
              </h2>

              <p className="text-gray-700">
                Menstrual health issues are deeply personal, and treating them properly requires a combination of experience, modern technology, and genuine empathy. Many women in Moradabad delay treatment simply because they aren't sure where to find a doctor they can trust. A good gynaecologist doesn't just diagnose correctly — she listens patiently, explains every option clearly, and makes patients feel comfortable discussing sensitive concerns.
              </p>
            </div>

            {/* Section 9 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Trusted Menstrual Health Specialist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is a well-known gynaecologist in Moradabad, specializing in menstrual disorders, endometriosis, PCOS, fibroids, fertility care, and pregnancy management. According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, the clinic offers the following facilities:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>3D laparoscopic surgery:</strong> Minimally invasive treatment for fibroids, cysts, endometriosis, and hysterectomy</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> Incision-free procedures for polyps and uterine evaluation</li>
                <li><strong>3D/4D ultrasound and AI-based imaging:</strong> For precise diagnosis</li>
                <li><strong>Fertility and IVF services:</strong> Including a GERI time-lapse embryo incubator</li>
                <li><strong>Antenatal, postnatal, and high-risk pregnancy care</strong></li>
                <li><strong>Paediatric consultations are also available</strong></li>
              </ul>

              <p className="text-gray-700 mb-4">
                The clinic operates on a &quot;Her Health First&quot; philosophy — patients are heard first, and treatment plans are built around their individual needs and comfort. Patient testimonials on the website highlight a consistently supportive, understanding experience. The clinic is conveniently located in Gandhi Nagar, Moradabad, making it easily accessible from most parts of the city.
              </p>
            </div>

            {/* Section 10 — Adolescent Menstrual Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Adolescent Menstrual Health Concerns
              </h2>

              <p className="text-gray-700 mb-4">
                During adolescence, it's common for the menstrual cycle to remain irregular for the first 1–2 years after periods begin, as the body's hormonal system is still maturing. However, if a teenager experiences severe pain, unusually heavy bleeding, or hasn't started menstruating by age 16, parents shouldn't dismiss it as &quot;just a phase.&quot; In many families, hesitation or embarrassment prevents timely consultation, allowing conditions like PCOS to worsen over time. Having access to an experienced, approachable female gynaecologist in a city like Moradabad makes it easier for young girls and women to speak openly about their concerns without discomfort.
              </p>
            </div>

            {/* Section 11 — Emotional Impact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Emotional Impact of Menstrual Problems
              </h2>

              <p className="text-gray-700">
                Persistent pain, irregular cycles, or heavy bleeding don't just affect the body — they take a toll on mental wellbeing too. Many women experience anxiety, irritability, and reduced confidence, especially when symptoms start interfering with daily life, work, or relationships. Proper medical treatment combined with emotional support can significantly ease this burden. That's why it's worth choosing a clinic where the doctor addresses not only the physical symptoms but also takes the patient's emotional wellbeing seriously.
              </p>
            </div>

            {/* Section 12 — Home Remedies and Lifestyle Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Home Remedies and Lifestyle Tips
              </h2>

              <p className="text-gray-700 mb-4">
                While serious conditions always require medical attention, certain lifestyle habits can support a healthier, more regular menstrual cycle:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Get 7–8 hours of adequate sleep every night</li>
                <li>Include iron, calcium, and essential vitamins in your diet</li>
                <li>Practice light regular exercise or yoga</li>
                <li>Manage stress through meditation or relaxation techniques</li>
                <li>Limit caffeine and processed/junk food intake</li>
                <li>Stay well-hydrated throughout the day</li>
              </ul>

              <p className="text-gray-700 mt-4">
                These habits can help, but they should never replace proper medical treatment when a persistent problem exists.
              </p>
            </div>

            {/* Section 13 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Menstrual Health
              </h2>

              <p className="text-gray-700 mb-4">
                Misinformation around periods is still widespread, and it often stops women from seeking timely care. Here are a few myths worth clearing up:
              </p>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;Irregular periods are always normal and nothing to worry about.&quot;</strong> While occasional irregularity happens, a pattern that repeats for months usually has an underlying cause that deserves evaluation.</li>
                <li><strong>&quot;Period pain is just something you have to live with.&quot;</strong> Severe pain is not something to simply tolerate — it can be a treatable symptom of an underlying condition like endometriosis.</li>
                <li><strong>&quot;PCOS only affects overweight women.&quot;</strong> PCOS can affect women of any body type, including those who are underweight or have a normal BMI.</li>
                <li><strong>&quot;You shouldn't see a gynaecologist unless you're married or planning a pregnancy.&quot;</strong> Menstrual and reproductive health concerns can affect women at any age or life stage, and early consultation often leads to better long-term outcomes.</li>
                <li><strong>&quot;Heavy bleeding is just a 'heavy flow' and not a medical issue.&quot;</strong> If bleeding regularly disrupts daily activities or requires frequent pad changes, it's worth having it properly evaluated rather than dismissed.</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Clearing up these misconceptions is an important step toward encouraging women in Moradabad to seek care earlier rather than later.
              </p>
            </div>

            {/* Section 14 — When to See a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When You Should See a Doctor
              </h2>

              <p className="text-gray-700">
                If you're regularly experiencing any of the symptoms mentioned above, or if your menstrual cycle is affecting your studies, work, or relationships, don't wait it out. Timely evaluation and treatment not only relieve discomfort but also help prevent long-term complications, including fertility problems.
              </p>
            </div>

            {/* Section 15 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Get in Touch – Book Your Appointment
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
                        Uttar Pradesh – 244001
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
                          href="mailto:drpriyanka@gynaecologistmoradabad.com"
                          className="hover:underline"
                        >
                          drpriyanka@gynaecologistmoradabad.com
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
                        www.gynaecologistmoradabad.com
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

            {/* Section 16 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQ)
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