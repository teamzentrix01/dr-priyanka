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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PelvicPainMoradabad() {
  const faqs = [
    {
      q: "What is the most common cause of pelvic pain in women?",
      a: "Pelvic pain can have many causes. Common gynaecological causes include endometriosis, ovarian cysts, fibroids, adenomyosis, and pelvic inflammatory disease. Urinary, gastrointestinal, and pelvic floor conditions can also cause pelvic pain.",
    },
    {
      q: "Is pelvic pain normal during periods?",
      a: "Mild menstrual cramps can be common, but severe, worsening, or persistent pelvic pain should not automatically be considered normal. It may require evaluation for conditions such as endometriosis or adenomyosis.",
    },
    {
      q: "Can ovarian cysts cause pelvic pain?",
      a: "Yes. Some ovarian cysts can cause pelvic discomfort or pain. The appropriate treatment depends on the type, size, appearance, and symptoms associated with the cyst.",
    },
    {
      q: "Can endometriosis cause chronic pelvic pain?",
      a: "Yes. Endometriosis is a recognized cause of recurring or chronic pelvic pain, particularly around menstruation. Treatment depends on individual symptoms and disease characteristics.",
    },
    {
      q: "Does pelvic pain always require surgery?",
      a: "No. Many causes of pelvic pain can be managed without surgery. Surgery is considered when it is appropriate for the underlying condition.",
    },
    {
      q: "When is pelvic pain an emergency?",
      a: "Sudden severe pain, heavy bleeding, fainting, severe dizziness, fever, or pelvic pain during pregnancy can require urgent medical assessment.",
    },
    {
      q: "Can pelvic pain affect pregnancy?",
      a: "Some conditions that cause pelvic pain can also affect fertility, but pelvic pain itself does not necessarily mean that pregnancy will be difficult. The underlying cause should be evaluated.",
    },
    {
      q: "How can I get pelvic pain treatment in Moradabad?",
      a: "You can contact Dr. Priyanka Gynaec in Moradabad to discuss your symptoms and schedule a gynaecological consultation. The appropriate treatment can be planned after evaluation.",
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
                Pelvic Pain Treatment in Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                Pelvic pain can affect women at different stages of life and may range from mild discomfort to persistent or severe pain. It can be related to the uterus, ovaries, fallopian tubes, urinary system, bowel, or pelvic floor muscles. Because several conditions can cause similar symptoms, identifying the underlying cause is an important part of effective treatment.
              </p>

              <p className="text-gray-700">
                If you are looking for pelvic pain treatment in Moradabad, Dr. Priyanka Gynaec provides gynaecological evaluation and treatment based on the cause, severity of symptoms, medical history, and individual health needs.
              </p>
            </div>

            {/* Section 2 — What Is Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Pelvic Pain?
              </h2>

              <p className="text-gray-700 mb-4">
                Pelvic pain is discomfort felt in the lower abdomen or pelvic region, usually below the belly button and between the hip bones. The pain may be:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Sharp or stabbing</li>
                <li>Dull or aching</li>
                <li>Constant or intermittent</li>
                <li>Felt on one side or both sides</li>
                <li>Related to periods or ovulation</li>
                <li>Associated with intercourse, urination, or bowel movements</li>
              </ul>

              <p className="text-gray-700">
                Pelvic pain may be acute, meaning it develops suddenly, or chronic, meaning it continues or repeatedly occurs over a longer period. Since pelvic pain can have different causes, treatment should focus on finding the reason behind the pain rather than treating the symptom alone.
              </p>
            </div>

            {/* Section 3 — Common Causes of Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Pelvic Pain in Women
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    Endometriosis occurs when tissue similar to the lining of the uterus grows outside the uterus. It can cause pelvic pain, particularly around menstruation, and may also be associated with painful intercourse or fertility problems. Treatment depends on symptoms, disease severity, age, and pregnancy plans.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ovarian Cysts
                  </h3>
                  <p className="text-gray-700">
                    Ovarian cysts are fluid-filled or other types of sacs that develop on or inside an ovary. Many cysts resolve without treatment, while some may cause pelvic pain or require further evaluation. Treatment may include observation, medication in selected situations, or surgery when clinically indicated.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Uterine Fibroids
                  </h3>
                  <p className="text-gray-700">
                    Fibroids are non-cancerous growths of the uterus. Depending on their size and location, they may cause pelvic pressure, pain, heavy menstrual bleeding, or other symptoms. Treatment depends on the symptoms and characteristics of the fibroids.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Adenomyosis
                  </h3>
                  <p className="text-gray-700">
                    Adenomyosis occurs when tissue similar to the uterine lining grows within the muscular wall of the uterus. It can cause painful periods, heavy menstrual bleeding, and pelvic discomfort. Treatment may involve medicines or other interventions depending on the severity of symptoms.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pelvic Inflammatory Disease
                  </h3>
                  <p className="text-gray-700">
                    Pelvic inflammatory disease (PID) is an infection involving the female reproductive organs. It may cause lower abdominal or pelvic pain, abnormal vaginal discharge, fever, or pain during intercourse. Prompt medical evaluation and appropriate antibiotic treatment are important when PID is suspected.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Urinary Tract Problems
                  </h3>
                  <p className="text-gray-700">
                    Urinary tract infections and other bladder-related conditions can sometimes cause pain or pressure in the lower abdomen and pelvis. Urinary symptoms such as burning while urinating, frequent urination, or urgency may provide additional clues.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pelvic Floor Muscle Problems
                  </h3>
                  <p className="text-gray-700">
                    Tightness, weakness, or dysfunction of the pelvic floor muscles may contribute to persistent pelvic discomfort. In selected cases, pelvic floor exercises or physiotherapy may form part of treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gastrointestinal Causes
                  </h3>
                  <p className="text-gray-700">
                    Conditions affecting the digestive system, including irritable bowel syndrome and other bowel problems, can cause lower abdominal or pelvic pain. A gynaecological cause should not be assumed without proper evaluation.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Symptoms Associated With Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Symptoms Associated With Pelvic Pain
              </h2>

              <p className="text-gray-700 mb-4">
                Pelvic pain may occur alone or together with other symptoms, such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Painful periods</li>
                <li>Heavy or irregular menstrual bleeding</li>
                <li>Pain during sexual intercourse</li>
                <li>Lower abdominal pressure</li>
                <li>Pain during urination</li>
                <li>Changes in bowel movements</li>
                <li>Abnormal vaginal discharge</li>
                <li>Fever or chills</li>
                <li>Difficulty becoming pregnant</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The combination of symptoms can help a doctor determine which investigations may be appropriate.
              </p>
            </div>

            {/* Section 5 — When Should You See a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Gynaecologist for Pelvic Pain?
              </h2>

              <p className="text-gray-700 mb-4">
                You should consider a medical evaluation if pelvic pain:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Keeps coming back</li>
                <li>Lasts for several weeks</li>
                <li>Becomes more severe over time</li>
                <li>Interferes with work, sleep, exercise, or daily activities</li>
                <li>Occurs with abnormal bleeding</li>
                <li>Is associated with painful periods or intercourse</li>
                <li>Occurs along with fertility difficulties</li>
                <li>Is accompanied by unusual vaginal discharge or urinary symptoms</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Persistent pelvic pain should not simply be assumed to be a normal part of menstruation.
              </p>
            </div>

            {/* Section 6 — Warning Signs That Need Urgent Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pelvic Pain Warning Signs That Need Urgent Medical Attention
              </h2>

              <p className="text-gray-700 mb-4">
                Some pelvic pain symptoms can indicate a condition requiring urgent evaluation.
              </p>

              <p className="text-gray-700 mb-4">
                Seek immediate medical care for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Sudden and severe pelvic or abdominal pain</li>
                <li>Severe pain mainly on one side</li>
                <li>Pelvic pain with fainting or significant dizziness</li>
                <li>Heavy vaginal bleeding</li>
                <li>Severe pain with fever or chills</li>
                <li>Pelvic pain during pregnancy</li>
                <li>Severe pain accompanied by vomiting or significant weakness</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Conditions such as ectopic pregnancy or ovarian torsion can require urgent medical assessment and treatment.
              </p>
            </div>

            {/* Section 7 — How Is Pelvic Pain Diagnosed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Pelvic Pain Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                The first step in pelvic pain treatment in Moradabad is understanding what is causing the symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                During a consultation, the doctor may ask about:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Location of the pain</li>
                <li>When the pain started</li>
                <li>Pain severity and frequency</li>
                <li>Relationship with menstrual periods</li>
                <li>Previous pregnancies or surgeries</li>
                <li>Pain during intercourse</li>
                <li>Urinary or bowel symptoms</li>
                <li>Previous gynaecological conditions</li>
                <li>Current medicines and medical history</li>
              </ul>

              <p className="text-gray-700 mb-4">
                Depending on the symptoms, investigations may include:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pelvic Ultrasound
                  </h3>
                  <p className="text-gray-700">
                    Ultrasound can help evaluate the uterus and ovaries and may identify conditions such as ovarian cysts, fibroids, or other structural abnormalities.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Blood Tests
                  </h3>
                  <p className="text-gray-700">
                    Blood tests may be recommended when infection, inflammation, pregnancy-related conditions, or other causes need to be evaluated.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Urine Tests
                  </h3>
                  <p className="text-gray-700">
                    Urine testing can help identify urinary tract infections or other urinary causes of pelvic discomfort.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    MRI
                  </h3>
                  <p className="text-gray-700">
                    MRI may be recommended in selected cases when more detailed imaging of the pelvic organs is required.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diagnostic Laparoscopy
                  </h3>
                  <p className="text-gray-700">
                    Laparoscopy is a minimally invasive surgical procedure that allows the pelvic organs to be examined directly. It may be considered in selected patients, including those with suspected endometriosis or other pelvic conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hysteroscopy
                  </h3>
                  <p className="text-gray-700">
                    Hysteroscopy examines the inside of the uterus and may be recommended when an intrauterine problem is suspected.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                Not every patient requires all of these tests. Investigations are selected according to the individual's symptoms and clinical findings.
              </p>
            </div>

            {/* Section 8 — Pelvic Pain Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pelvic Pain Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends on the underlying cause. There is no single treatment that is appropriate for every type of pelvic pain.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Medicines
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Depending on the diagnosis, treatment may include medicines for:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Pain management</li>
                    <li>Hormonal conditions</li>
                    <li>Endometriosis or adenomyosis</li>
                    <li>Infections</li>
                    <li>Other underlying conditions contributing to symptoms</li>
                  </ul>
                  <p className="text-gray-700">
                    Medicines should be taken according to medical advice.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Treatment for Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    Endometriosis may be managed with medication, hormonal treatment, surgery, or a combination of approaches. The treatment plan may depend on the severity of symptoms, previous treatment, fertility plans, and the extent of disease.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Treatment for Ovarian Cysts
                  </h3>
                  <p className="text-gray-700">
                    Some ovarian cysts may only require monitoring. If a cyst is persistent, large, symptomatic, or has other concerning features, further treatment may be considered. In selected cases, laparoscopic surgery may be used to remove an ovarian cyst.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Treatment for Fibroids
                  </h3>
                  <p className="text-gray-700">
                    Fibroid treatment depends on symptoms, size, location, number of fibroids, age, and reproductive plans. Options may include observation, medicines, or surgical treatment when required.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Treatment for Pelvic Inflammatory Disease
                  </h3>
                  <p className="text-gray-700">
                    PID generally requires appropriate antibiotic treatment. Early treatment is important because untreated or inadequately treated infection can result in complications.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Laparoscopic Treatment
                  </h3>
                  <p className="text-gray-700">
                    Laparoscopic surgery may be considered for selected causes of pelvic pain, including certain cases of endometriosis, ovarian cysts, fibroids, and pelvic adhesions. Compared with traditional open surgery, laparoscopy generally involves smaller incisions, although suitability depends on the individual case.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Pelvic Floor Management
                  </h3>
                  <p className="text-gray-700">
                    When pelvic pain is related to pelvic floor muscle dysfunction, treatment may include pelvic floor exercises or physiotherapy as recommended by a healthcare professional.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 — Can Pelvic Pain Affect Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Pelvic Pain Affect Fertility?
              </h2>

              <p className="text-gray-700">
                Some conditions associated with pelvic pain can also affect fertility. For example, endometriosis, pelvic inflammatory disease, blocked fallopian tubes, and certain ovarian or uterine conditions may be associated with difficulty conceiving. However, pelvic pain does not automatically mean that a woman will have fertility problems. The underlying diagnosis is important. Women experiencing pelvic pain together with difficulty conceiving may benefit from a gynaecological and fertility evaluation.
              </p>
            </div>

            {/* Section 10 — Pelvic Pain and Endometriosis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pelvic Pain and Endometriosis
              </h2>

              <p className="text-gray-700 mb-4">
                Endometriosis is an important cause of recurring pelvic pain in women.
              </p>

              <p className="text-gray-700 mb-4">
                Symptoms may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Painful periods</li>
                <li>Chronic pelvic pain</li>
                <li>Pain during intercourse</li>
                <li>Pain during bowel movements or urination around periods</li>
                <li>Difficulty conceiving</li>
              </ul>

              <p className="text-gray-700">
                Treatment is individualized. Some women may be managed with medication, while others may require surgical evaluation or treatment. If pelvic pain repeatedly occurs around menstruation, discussing the symptoms with a gynaecologist can help determine whether further evaluation is needed.
              </p>
            </div>

            {/* Section 11 — Can Pelvic Pain Be Treated Without Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Pelvic Pain Be Treated Without Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Yes. Surgery is not required for every cause of pelvic pain.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the diagnosis, treatment may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Medicines</li>
                <li>Hormonal therapy</li>
                <li>Antibiotics for infections</li>
                <li>Observation and follow-up</li>
                <li>Pelvic floor physiotherapy</li>
                <li>Lifestyle and symptom-management strategies</li>
              </ul>

              <p className="text-gray-700">
                Surgery may be considered when a structural condition requires surgical treatment or when symptoms continue despite appropriate non-surgical management.
              </p>
            </div>

            {/* Section 12 — Lifestyle Measures That May Help */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Lifestyle Measures That May Help
              </h2>

              <p className="text-gray-700 mb-4">
                Lifestyle measures do not replace medical treatment when an underlying condition is present, but some women may find them useful for managing symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                These may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Maintaining a regular sleep routine</li>
                <li>Staying physically active according to comfort</li>
                <li>Using heat for temporary relief from menstrual-related discomfort</li>
                <li>Tracking periods and pain symptoms</li>
                <li>Staying hydrated</li>
                <li>Following medical advice for diagnosed conditions</li>
                <li>Discussing persistent or worsening symptoms with your doctor</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Keeping a pelvic pain and menstrual symptom diary can also help during a medical consultation.
              </p>
            </div>

            {/* Section 13 — Why Choose Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka for Pelvic Pain Treatment in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec focuses on identifying the possible cause of pelvic pain before deciding on treatment.
              </p>

              <p className="text-gray-700 mb-4">
                The consultation may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Detailed discussion of symptoms and medical history</li>
                <li>Appropriate gynaecological examination</li>
                <li>Selection of relevant diagnostic tests</li>
                <li>Individualized treatment planning</li>
                <li>Medical or surgical management when clinically appropriate</li>
                <li>Follow-up based on the patient's condition and response to treatment</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The goal is to address the underlying condition while considering the patient's symptoms, overall health, and reproductive goals.
              </p>
            </div>

            {/* Section 14 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions About Pelvic Pain
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

            {/* Section 15 — Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Gynaec in Moradabad
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
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
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
                        <Globe size={18} className="inline mr-2 text-black" />
                        <a
                          href="https://www.gynaecologistmoradabad.com/"
                          className="hover:underline"
                        >
                          www.gynaecologistmoradabad.com
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