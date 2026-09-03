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

export default function MenstrualDisorderMoradabad() {
  const faqs = [
    {
      q: "What is considered an irregular period?",
      a: "A cycle shorter than 21 days or longer than 35 days, or one with unpredictable timing, is generally considered irregular.",
    },
    {
      q: "Is PCOS the main cause of irregular periods?",
      a: "PCOS is one of the most common causes of irregular periods, though thyroid disorders and stress can also be contributing factors.",
    },
    {
      q: "When is heavy bleeding considered abnormal?",
      a: "Bleeding that requires changing sanitary products every hour, or periods lasting more than 7 days, is considered abnormal and should be evaluated.",
    },
    {
      q: "Can menstrual disorders affect fertility?",
      a: "Yes, conditions like PCOS and endometriosis that cause menstrual irregularities can also impact fertility if left untreated.",
    },
    {
      q: "Are painful periods always a sign of a serious condition?",
      a: "Not always, but severe pain that disrupts daily life should be evaluated to rule out conditions like endometriosis or fibroids.",
    },
    {
      q: "What tests are done to diagnose menstrual disorders?",
      a: "Common tests include blood hormone tests, pelvic ultrasound, and in some cases, hysteroscopy or endometrial biopsy.",
    },
    {
      q: "Can lifestyle changes help regulate periods?",
      a: "Yes, maintaining a healthy weight, managing stress, and regular exercise can significantly help regulate mild menstrual irregularities.",
    },
    {
      q: "How can I book a consultation for menstrual disorder treatment in Moradabad?",
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
                Menstrual Disorder Treatment in Moradabad – Expert Care by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Menstrual irregularities are among the most common reasons women visit a Gynaecologist, yet many continue to suffer in silence, assuming these issues are simply &quot;normal&quot; or something to be tolerated. Whether it is irregular cycles, unusually heavy bleeding, painful periods, or missed periods altogether, these symptoms often indicate an underlying condition that deserves proper evaluation and treatment. Dr. Priyanka Gynaec offers expert menstrual disorder treatment in Moradabad, helping women of all ages understand the root cause of their symptoms and find lasting relief through personalized, evidence-based care.
              </p>

              <p className="text-gray-700">
                This comprehensive guide covers the types of menstrual disorders, their causes, diagnosis, and the treatment options available in Moradabad to help you regain control of your reproductive health.
              </p>
            </div>

            {/* Section 2 — What Are Menstrual Disorders? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Are Menstrual Disorders?
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual disorders refer to any irregularities in the menstrual cycle that fall outside the range of what is considered normal, whether in terms of frequency, duration, flow, or associated pain. A typical menstrual cycle ranges from 21 to 35 days, with bleeding lasting 3 to 7 days. When a woman&apos;s cycle consistently falls outside this pattern, or is accompanied by severe pain or other symptoms, it may indicate a menstrual disorder that requires medical attention.
              </p>
            </div>

            {/* Section 3 — Common Types of Menstrual Disorders */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Types of Menstrual Disorders
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Irregular Periods (Oligomenorrhea)
                  </h3>
                  <p className="text-gray-700">
                    This refers to menstrual cycles that occur less frequently than normal, with longer gaps between periods. It is often linked to hormonal imbalances, PCOS, thyroid disorders, or significant weight changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Heavy Menstrual Bleeding (Menorrhagia)
                  </h3>
                  <p className="text-gray-700">
                    Menorrhagia involves unusually heavy or prolonged menstrual bleeding that can interfere with daily activities, sometimes requiring frequent changes of sanitary products and leading to fatigue or anemia over time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. Painful Periods (Dysmenorrhea)
                  </h3>
                  <p className="text-gray-700">
                    While mild menstrual discomfort is common, severe pain that disrupts daily life is not something women should have to accept as normal. Dysmenorrhea can be primary (without an underlying condition) or secondary (caused by conditions like endometriosis or fibroids).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    4. Absent Periods (Amenorrhea)
                  </h3>
                  <p className="text-gray-700">
                    Amenorrhea refers to the absence of menstruation, either primary (never having started menstruating by age 15–16) or secondary (missing periods for three or more consecutive months in a woman who previously had regular cycles).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    5. Premenstrual Syndrome (PMS) and PMDD
                  </h3>
                  <p className="text-gray-700">
                    Many women experience physical and emotional symptoms in the days leading up to their period, such as mood swings, bloating, and irritability. When these symptoms are severe enough to significantly affect daily functioning, it may be classified as Premenstrual Dysphoric Disorder (PMDD), which requires targeted treatment.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    6. Intermenstrual Bleeding
                  </h3>
                  <p className="text-gray-700">
                    This refers to bleeding or spotting that occurs between periods, which should always be evaluated, as it can sometimes indicate an underlying condition requiring attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Common Causes of Menstrual Disorders */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Menstrual Disorders
              </h2>

              <p className="text-gray-700 mb-4">
                Menstrual disorders can arise from a wide range of causes, and identifying the specific one is key to effective treatment:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Hormonal Imbalances:</strong> Fluctuations in estrogen and progesterone are among the most common causes of irregular or abnormal cycles.</li>
                <li><strong>PCOS (Polycystic Ovary Syndrome):</strong> A leading cause of irregular periods, PCOS affects ovulation and hormone levels in a significant number of women of reproductive age.</li>
                <li><strong>Thyroid Disorders:</strong> Both an overactive and underactive thyroid can disrupt the menstrual cycle.</li>
                <li><strong>Uterine Fibroids or Polyps:</strong> Non-cancerous growths in the uterus that can cause heavy or prolonged bleeding.</li>
                <li><strong>Endometriosis:</strong> A condition where tissue similar to the uterine lining grows outside the uterus, often causing severe pain and irregular bleeding.</li>
                <li><strong>Stress and Lifestyle Factors:</strong> High stress levels, excessive exercise, or significant weight loss or gain can disrupt normal hormonal balance.</li>
                <li><strong>Perimenopause:</strong> As women approach menopause, hormonal shifts often lead to irregular cycles.</li>
                <li><strong>Pelvic Infections:</strong> Infections of the reproductive organs can sometimes cause abnormal bleeding patterns.</li>
                <li><strong>Bleeding Disorders:</strong> In rare cases, underlying blood clotting disorders can contribute to heavy menstrual bleeding.</li>
                <li><strong>Certain Medications:</strong> Some medications, including blood thinners or hormonal contraceptives, can affect menstrual patterns.</li>
              </ul>
            </div>

            {/* Section 5 — When Should You See a Gynaecologist? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Gynaecologist?
              </h2>

              <p className="text-gray-700 mb-4">
                While some variation in menstrual cycles is normal, certain symptoms warrant a prompt visit to a Gynaecologist:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Periods that are consistently irregular or unpredictable</li>
                <li>Bleeding so heavy that it requires changing sanitary products every hour</li>
                <li>Periods lasting longer than 7 days</li>
                <li>Severe pelvic pain that interferes with daily activities</li>
                <li>Missing periods for three or more consecutive months (if not pregnant)</li>
                <li>Bleeding or spotting between periods</li>
                <li>Periods accompanied by severe fatigue, dizziness, or signs of anemia</li>
                <li>Any menstrual changes accompanied by unexplained weight changes or excessive hair growth</li>
              </ul>

              <p className="text-gray-700">
                Ignoring these symptoms for too long can allow underlying conditions to progress, making early evaluation an important step toward effective treatment.
              </p>
            </div>

            {/* Section 6 — How Are Menstrual Disorders Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Are Menstrual Disorders Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                At Dr. Priyanka Gynaec, diagnosis begins with a detailed discussion of the patient&apos;s menstrual history, symptoms, and overall health, followed by a thorough clinical examination. Depending on the suspected cause, further evaluation may include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Blood Tests:</strong> To assess hormone levels, thyroid function, and check for anemia</li>
                <li><strong>Pelvic Ultrasound:</strong> To examine the uterus and ovaries for fibroids, cysts, or structural abnormalities</li>
                <li><strong>Hysteroscopy:</strong> A procedure to directly visualize the inside of the uterus in cases of abnormal bleeding</li>
                <li><strong>Pap Smear:</strong> To rule out cervical abnormalities as a cause of irregular bleeding</li>
                <li><strong>Endometrial Biopsy:</strong> In select cases, to examine the uterine lining, especially in women with prolonged abnormal bleeding</li>
              </ul>

              <p className="text-gray-700">
                This thorough diagnostic approach ensures that treatment addresses the actual underlying cause rather than just masking the symptoms.
              </p>
            </div>

            {/* Section 7 — Treatment Options for Menstrual Disorders in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Menstrual Disorders in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment for menstrual disorders is highly individualized based on the specific diagnosis, the woman&apos;s age, symptom severity, and whether she wishes to conceive in the future.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Lifestyle and Dietary Modifications
              </h3>

              <p className="text-gray-700 mb-3">
                For mild menstrual irregularities linked to stress, weight fluctuations, or lifestyle factors, guidance on diet, exercise, and stress management can often help restore regular cycles.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Hormonal Therapy
              </h3>

              <p className="text-gray-700 mb-3">
                Hormonal treatments, including combined oral contraceptives or progesterone therapy, are commonly used to regulate irregular cycles, reduce heavy bleeding, and manage conditions like PCOS.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Treatment for PCOS-Related Irregularities
              </h3>

              <p className="text-gray-700 mb-3">
                For women with PCOS, treatment focuses on regulating the menstrual cycle, managing symptoms like excess hair growth, and supporting fertility goals when relevant, often through a combination of lifestyle changes and medication.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Pain Management for Dysmenorrhea
              </h3>

              <p className="text-gray-700 mb-3">
                Painful periods are managed through a combination of pain-relief medication, hormonal treatment where appropriate, and identification of underlying causes like endometriosis, which may require more targeted treatment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Treatment for Heavy Menstrual Bleeding
              </h3>

              <p className="text-gray-700 mb-3">
                Depending on the cause, treatment options for menorrhagia may include hormonal medication, tranexamic acid to reduce bleeding, or, in cases involving fibroids or polyps, minimally invasive procedures like hysteroscopic removal.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Laparoscopic Treatment for Structural Causes
              </h3>

              <p className="text-gray-700 mb-3">
                For conditions like fibroids, ovarian cysts, or endometriosis that contribute to menstrual disorders, advanced 3D laparoscopic surgery offers a minimally invasive option to correct the underlying structural issue while preserving fertility whenever possible.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Management of Thyroid-Related Menstrual Issues
              </h3>

              <p className="text-gray-700 mb-3">
                When thyroid dysfunction is identified as the cause, appropriate thyroid medication often helps restore normal menstrual patterns over time.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Treatment for Amenorrhea
              </h3>

              <p className="text-gray-700">
                Treatment for absent periods depends on the underlying cause and may involve hormonal therapy, addressing significant weight changes, or managing conditions like PCOS or thyroid disorders.
              </p>
            </div>

            {/* Section 8 — Why Early Treatment of Menstrual Disorders Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Early Treatment of Menstrual Disorders Matters
              </h2>

              <p className="text-gray-700">
                Untreated menstrual disorders can lead to complications beyond the immediate symptoms, including anemia from chronic heavy bleeding, fertility challenges from untreated conditions like PCOS or endometriosis, and a significant impact on quality of life due to chronic pain or unpredictable cycles. Early evaluation and treatment not only relieve current symptoms but also help prevent these longer-term complications.
              </p>
            </div>

            {/* Section 9 — Why Choose Dr. Priyanka Gynaec for Menstrual Disorder Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Menstrual Disorder Treatment in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Women across Moradabad trust Dr. Priyanka Gynaec for menstrual health concerns because of a thorough, compassionate, and personalized approach to care. Key reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed diagnostic evaluation to identify the true underlying cause of menstrual symptoms</li>
                <li>Personalized treatment plans ranging from lifestyle guidance to advanced laparoscopic surgery</li>
                <li>Expertise in managing complex conditions like PCOS and endometriosis</li>
                <li>A comfortable, judgment-free environment where women feel heard and understood</li>
                <li>Access to advanced diagnostic tools including ultrasound and hysteroscopy</li>
                <li>Continuity of care with clear follow-up to track improvement over time</li>
              </ul>
            </div>

            {/* Section 10 — Tips for Maintaining Menstrual Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips for Maintaining Menstrual Health
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Track your menstrual cycle regularly to identify patterns or irregularities early</li>
                <li>Maintain a healthy, balanced diet and stable body weight</li>
                <li>Manage stress through regular relaxation practices or exercise</li>
                <li>Avoid excessive or crash dieting, which can disrupt hormonal balance</li>
                <li>Do not ignore persistent pain, heavy bleeding, or missed periods</li>
                <li>Schedule regular Gynaecological check-ups, even in the absence of symptoms</li>
              </ul>
            </div>

            {/* Section 11 — Speciality & Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Speciality &amp; Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Speciality:</strong> Gynaecology, Menstrual Disorders &amp; PCOS Management, Advanced 3D Laparoscopy, Fertility &amp; IVF, Pregnancy &amp; Maternity Care, Paediatrics
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

              <p className="text-gray-700 mt-6">
                If you are experiencing irregular, heavy, or painful periods, do not wait for the problem to worsen. Book a consultation with Dr. Priyanka Gynaec in Moradabad today for a thorough evaluation and personalized treatment plan.
              </p>
            </div>

            {/* Section 12 — FAQs */}
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