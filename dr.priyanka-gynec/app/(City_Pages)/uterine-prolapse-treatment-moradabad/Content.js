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

export default function UterineProlapseMoradabad() {
  const faqs = [
    {
      q: "What is the main cause of uterine prolapse?",
      a: "The most common causes are multiple vaginal deliveries, aging, and reduced estrogen levels after menopause, all of which weaken pelvic floor support.",
    },
    {
      q: "Is surgery always required for uterine prolapse?",
      a: "No. Mild cases can often be managed with pelvic floor exercises or a vaginal pessary. Surgery is recommended for moderate to severe cases.",
    },
    {
      q: "What is laparoscopic sacrocolpopexy?",
      a: "It is a keyhole surgical procedure that uses mesh support to restore the uterus or vaginal vault to its normal position, offering strong, long-lasting results.",
    },
    {
      q: "Can I preserve my uterus while treating prolapse?",
      a: "Yes, uterus-preserving procedures like laparoscopic hysteropexy are available for women who wish to retain their uterus.",
    },
    {
      q: "How long does recovery take after laparoscopic prolapse surgery?",
      a: "Most patients resume light activity within 1–2 weeks and achieve full recovery within 4–6 weeks.",
    },
    {
      q: "Does uterine prolapse affect future pregnancy?",
      a: "Mild prolapse may not prevent pregnancy, but it should be evaluated by a Gynaecologist, as treatment approach may differ if future pregnancy is planned.",
    },
    {
      q: "Can uterine prolapse come back after treatment?",
      a: "Recurrence is uncommon after laparoscopic sacrocolpopexy due to its strong anatomical support, but regular follow-up is recommended.",
    },
    {
      q: "How can I book a consultation for uterine prolapse treatment in Moradabad?",
      a: "You can call or WhatsApp the clinic directly using the contact details above to schedule a consultation and evaluation.",
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
                Uterine Prolapse Treatment in Moradabad – Expert Care by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Uterine prolapse is a condition that affects thousands of women across India, especially after childbearing years, multiple deliveries, or as they approach menopause. Many women silently suffer from the discomfort, embarrassment, and daily disruption caused by this condition simply because they are unaware that safe, effective, and minimally invasive treatments are available close to home. If you are searching for reliable uterine prolapse treatment in Moradabad, Dr. Priyanka Gynaec offers advanced diagnosis and treatment options, including modern laparoscopic techniques, so that every woman can regain her comfort, confidence, and quality of life.
              </p>

              <p className="text-gray-700">
                This article explains what uterine prolapse is, why it happens, how it is diagnosed, and what treatment options are available in Moradabad, so that you can make an informed decision about your health.
              </p>
            </div>

            {/* Section 2 — What Is Uterine Prolapse? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Uterine Prolapse?
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine prolapse occurs when the muscles and ligaments that support the uterus become weak or stretched, causing the uterus to slip down from its normal position into or through the vaginal canal. In simple terms, the &quot;support system&quot; that holds the uterus in place inside the pelvis loses its strength, and the uterus descends downward.
              </p>

              <p className="text-gray-700">
                This condition falls under a broader category called pelvic organ prolapse (POP), which can also involve the bladder (cystocele), rectum (rectocele), or the top of the vagina after a hysterectomy (vaginal vault prolapse). Uterine prolapse can range from mild, where the uterus dips only slightly, to severe, where it protrudes completely outside the vaginal opening.
              </p>
            </div>

            {/* Section 3 — Why Does Uterine Prolapse Happen? Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Does Uterine Prolapse Happen? Common Causes
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the causes helps women recognize their risk factors early. The most common causes and contributing factors include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Multiple vaginal deliveries</strong> – Repeated childbirth, especially difficult or prolonged labor, weakens pelvic floor muscles.</li>
                <li><strong>Menopause</strong> – Falling estrogen levels after menopause reduce the elasticity and strength of pelvic tissues.</li>
                <li><strong>Aging</strong> – Natural weakening of muscles and connective tissue over time.</li>
                <li><strong>Chronic straining</strong> – Long-term constipation, chronic cough, or heavy lifting increases pressure on the pelvic floor.</li>
                <li><strong>Obesity</strong> – Excess body weight adds continuous pressure on pelvic support structures.</li>
                <li><strong>Genetic factors</strong> – Some women naturally have weaker connective tissue, making them more prone to prolapse.</li>
                <li><strong>Previous pelvic surgery</strong> – Surgeries such as hysterectomy can sometimes affect the remaining vaginal support structures.</li>
              </ul>
            </div>

            {/* Section 4 — Common Symptoms of Uterine Prolapse */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms of Uterine Prolapse
              </h2>

              <p className="text-gray-700 mb-4">
                Many women in Moradabad and nearby areas delay treatment because they mistake the symptoms for normal aging or hesitate to discuss them openly. Recognizing the symptoms early can prevent the condition from worsening. Common symptoms include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A sensation of heaviness or pressure in the pelvis or vagina</li>
                <li>A feeling that &quot;something is coming out&quot; of the vagina</li>
                <li>A visible or palpable bulge at the vaginal opening</li>
                <li>Lower back pain that worsens with standing or activity</li>
                <li>Difficulty in urination, or a feeling of incomplete bladder emptying</li>
                <li>Urinary leakage or frequent urinary tract infections</li>
                <li>Constipation or difficulty passing stool</li>
                <li>Discomfort or pain during sexual intercourse</li>
                <li>Symptoms that improve while lying down and worsen while standing or by evening</li>
              </ul>

              <p className="text-gray-700">
                If you experience any of these signs, it is important not to ignore them. Early consultation with a Gynaecologist can help manage the condition before it progresses.
              </p>
            </div>

            {/* Section 5 — Stages (Grades) of Uterine Prolapse */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Stages (Grades) of Uterine Prolapse
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine prolapse is generally classified into four stages based on severity:
              </p>

              <ol className="text-gray-700 space-y-3 mb-4 list-decimal pl-5">
                <li><strong>Stage I (Mild):</strong> The uterus descends slightly into the upper vagina.</li>
                <li><strong>Stage II (Moderate):</strong> The uterus descends further, reaching close to the vaginal opening.</li>
                <li><strong>Stage III (Severe):</strong> The uterus protrudes outside the vaginal opening.</li>
                <li><strong>Stage IV (Complete Prolapse / Procidentia):</strong> The uterus is completely outside the vaginal canal.</li>
              </ol>

              <p className="text-gray-700">
                The stage of prolapse determines the most appropriate treatment approach, which is why an accurate diagnosis by an experienced Gynaecologist is essential.
              </p>
            </div>

            {/* Section 6 — How Is Uterine Prolapse Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Uterine Prolapse Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                At Dr. Priyanka Gynaec in Moradabad, diagnosis begins with a detailed medical history and a thorough pelvic examination. The doctor may ask the patient to strain or cough during the examination to assess the degree of prolapse. Additional evaluations may include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Pelvic floor muscle strength assessment</li>
                <li>Ultrasound imaging to check the uterus, bladder, and surrounding structures</li>
                <li>Urodynamic tests, if urinary symptoms are present</li>
                <li>Assessment of associated conditions like cystocele or rectocele</li>
              </ul>

              <p className="text-gray-700">
                A precise diagnosis allows the doctor to recommend the most suitable and least invasive treatment option tailored to the patient&apos;s stage, age, symptoms, and future fertility plans.
              </p>
            </div>

            {/* Section 7 — Uterine Prolapse Treatment Options in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Uterine Prolapse Treatment Options in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment for uterine prolapse depends on the severity of the condition, the patient&apos;s age, general health, and whether she wishes to preserve fertility. Dr. Priyanka Gynaec offers a full range of treatment options, from conservative management to advanced laparoscopic surgery.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Non-Surgical Treatment Options
              </h3>

              <p className="text-gray-700 mb-3">
                For mild to moderate prolapse, or for women who are not fit for surgery, non-surgical options are often recommended first:
              </p>

              <ul className="text-gray-700 space-y-3 mb-6 list-disc pl-5">
                <li><strong>Pelvic Floor Exercises (Kegel Exercises):</strong> Regular pelvic floor strengthening exercises can improve muscle tone and reduce mild symptoms, especially when started early.</li>
                <li><strong>Vaginal Pessary:</strong> A pessary is a removable silicone device inserted into the vagina to provide internal support to the uterus. It is a good option for women who wish to avoid surgery or are not surgical candidates.</li>
                <li><strong>Lifestyle Modifications:</strong> Weight management, treating chronic cough or constipation, and avoiding heavy lifting can reduce strain on the pelvic floor and slow progression.</li>
                <li><strong>Hormonal Therapy:</strong> For postmenopausal women, local estrogen therapy may help improve tissue strength and reduce symptoms in mild cases.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Surgical Treatment Options
              </h3>

              <p className="text-gray-700 mb-3">
                For moderate to severe prolapse, or when conservative methods fail to relieve symptoms, surgery provides a long-term and effective solution.
              </p>

              <ul className="text-gray-700 space-y-3 mb-4 list-disc pl-5">
                <li><strong>Vaginal Hysterectomy with Pelvic Floor Repair:</strong> This traditional approach removes the uterus through the vaginal route along with repair of weakened support structures. It is suitable for women who have completed their family and have significant prolapse.</li>
                <li><strong>Laparoscopic Sacrocolpopexy:</strong> This is one of the most advanced and effective surgical techniques for treating uterine and vaginal vault prolapse. Using keyhole (laparoscopic) technique, the surgeon uses a synthetic mesh to anchor the uterus or vaginal vault to a strong ligament near the sacrum (tailbone), restoring proper anatomical support. This procedure offers excellent long-term results, minimal scarring, reduced blood loss, and a significantly faster recovery compared to open surgery.</li>
                <li><strong>Uterus-Preserving Surgery (Laparoscopic Hysteropexy):</strong> For women who wish to retain their uterus, especially younger patients, a uterus-sparing laparoscopic procedure can correct the prolapse while preserving the uterus.</li>
                <li><strong>Laparoscopic Hysterectomy with Prolapse Repair:</strong> In select cases, a minimally invasive hysterectomy combined with pelvic support repair is performed, offering faster healing than traditional open surgery.</li>
              </ul>
            </div>

            {/* Section 8 — Why Laparoscopic (Keyhole) Surgery Is Preferred */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Laparoscopic (Keyhole) Surgery Is Preferred
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec specializes in advanced 3D laparoscopic surgery, which offers several advantages over traditional open surgery for uterine prolapse:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Smaller incisions and minimal scarring</li>
                <li>Reduced blood loss during surgery</li>
                <li>Less post-operative pain</li>
                <li>Shorter hospital stay</li>
                <li>Faster return to daily activities</li>
                <li>Better long-term anatomical support, especially with sacrocolpopexy</li>
              </ul>
            </div>

            {/* Section 9 — What to Expect During Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Recovery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery time depends on the type of procedure performed. Non-surgical treatments like pessary use require no downtime, while surgical procedures vary:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic procedures typically allow patients to return home within 1–2 days and resume light activities within 1–2 weeks.</li>
                <li>Full recovery, including resuming normal physical activity, generally takes 4–6 weeks, depending on the individual and the extent of surgery.</li>
                <li>Follow-up visits are scheduled to monitor healing and ensure the prolapse does not recur.</li>
              </ul>

              <p className="text-gray-700">
                Patients are also guided on pelvic floor exercises, dietary advice to prevent constipation, and activity restrictions during the healing period to support long-term success.
              </p>
            </div>

            {/* Section 10 — Can Uterine Prolapse Be Prevented? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Uterine Prolapse Be Prevented?
              </h2>

              <p className="text-gray-700 mb-4">
                While not all cases can be prevented, especially those related to genetics or menopause, the risk can be reduced by:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Practicing regular pelvic floor (Kegel) exercises, particularly after childbirth</li>
                <li>Maintaining a healthy body weight</li>
                <li>Avoiding heavy lifting or straining</li>
                <li>Managing chronic cough and constipation promptly</li>
                <li>Attending regular Gynaecological check-ups, especially after delivery or during perimenopause</li>
              </ul>
            </div>

            {/* Section 11 — Why Choose Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Uterine Prolapse Treatment in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Women across Moradabad and nearby regions trust Dr. Priyanka Gynaec for pelvic floor and prolapse care because of a genuine, patient-first approach combined with advanced medical technology. Key reasons patients choose this clinic include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Expertise in advanced 3D laparoscopic surgery, including sacrocolpopexy for prolapse repair</li>
                <li>Personalized treatment plans based on age, severity, and fertility goals</li>
                <li>Access to modern diagnostic tools including 3D/4D ultrasound</li>
                <li>A caring, experienced team that listens first and explains every option clearly</li>
                <li>Continuity of care from the first consultation through recovery and follow-up</li>
                <li>A reputation built on patient trust, word-of-mouth referrals, and consistently positive outcomes</li>
              </ul>
            </div>

            {/* Section 12 — Speciality & Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Speciality &amp; Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Speciality:</strong> Gynaecology, Advanced 3D Laparoscopy, Sacrocolpopexy &amp; Pelvic Organ Prolapse Repair, Fertility &amp; IVF, Pregnancy &amp; Maternity Care, Paediatrics
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact &amp; Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
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
                          href="mailto:contact@drpriyankaGynaec.com"
                          className="hover:underline"
                        >
                          contact@drpriyankaGynaec.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
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

            {/* Section 13 — FAQs */}
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