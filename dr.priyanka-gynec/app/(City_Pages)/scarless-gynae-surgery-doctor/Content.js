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

export default function ScarlessGynaeSurgeryMoradabad() {
  const faqs = [
    {
      q: "What is a Scarless Gynae Surgery Doctor?",
      a: "A gynaecologist with appropriate training and experience in minimally invasive procedures such as laparoscopic and hysteroscopic surgery may provide treatment options that result in little or no external scarring, depending on the procedure.",
    },
    {
      q: "Is scarless gynae surgery completely scar-free?",
      a: "Not always. Laparoscopic surgery uses small abdominal incisions that can leave small marks. Hysteroscopic procedures are performed through the natural vaginal passage and do not create an external abdominal scar.",
    },
    {
      q: "Which gynaecological conditions can be treated with laparoscopic surgery?",
      a: "Selected cases of fibroids, ovarian cysts, endometriosis, hysterectomy and other gynaecological conditions may be treated laparoscopically.",
    },
    {
      q: "Can fibroids be removed through minimally invasive surgery?",
      a: "Some fibroids can be removed using laparoscopic myomectomy. Suitability depends on factors such as the size, number and location of the fibroids.",
    },
    {
      q: "Can ovarian cysts be removed without a large abdominal cut?",
      a: "Selected ovarian cysts can be treated using laparoscopic surgery. The recommended approach depends on the type, size and characteristics of the cyst.",
    },
    {
      q: "Does hysteroscopy leave an external scar?",
      a: "Hysteroscopy is performed through the vagina and cervix, so it does not require an external abdominal incision.",
    },
    {
      q: "Is laparoscopic surgery better than open surgery?",
      a: "Neither approach is automatically better for every patient. The appropriate technique depends on the condition, complexity of surgery and the patient's medical circumstances.",
    },
    {
      q: "How long does recovery take after minimally invasive gynae surgery?",
      a: "Recovery varies according to the specific procedure, individual health and whether complications occur. Your surgeon will provide procedure-specific recovery instructions.",
    },
    {
      q: "Can scarless surgery treat endometriosis?",
      a: "Laparoscopic surgery may be used to diagnose and treat endometriosis in selected patients. Treatment should be planned according to the extent of disease and the patient's symptoms and fertility goals.",
    },
    {
      q: "How can I consult a Scarless Gynae Surgery Doctor In Moradabad?",
      a: "You can contact Dr. Priyanka at the clinic address or phone number provided above to discuss your symptoms and determine whether a minimally invasive surgical approach may be suitable.",
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
                Scarless Gynae Surgery Doctor In Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                If you need gynaecological surgery but are concerned about large abdominal scars, you may want to ask your doctor whether a minimally invasive or scarless surgical approach is suitable for your condition. Depending on the procedure, gynaecological surgery can sometimes be performed through small laparoscopic incisions or through the natural vaginal passage using hysteroscopy.
              </p>

              <p className="text-gray-700 mb-4">
                If you are searching for a Scarless Gynae Surgery Doctor In Moradabad, Dr. Priyanka provides consultation for women who may require laparoscopic or hysteroscopic treatment for conditions such as fibroids, ovarian cysts, endometriosis, uterine polyps and other gynaecological problems.
              </p>

              <p className="text-gray-700">
                The appropriate surgical technique depends on your diagnosis, medical history, the size and location of the problem and your overall health.
              </p>
            </div>

            {/* Section 2 — What Does Scarless Gynae Surgery Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does Scarless Gynae Surgery Mean?
              </h2>

              <p className="text-gray-700 mb-4">
                The term scarless gynae surgery is commonly used to describe procedures that result in little or no visible external scarring.
              </p>

              <p className="text-gray-700 mb-4">
                However, it is important to understand that not every minimally invasive procedure is completely scar-free.
              </p>

              <p className="text-gray-700 mb-4">
                There are two commonly used approaches:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Laparoscopic Gynaecological Surgery
                  </h3>
                  <p className="text-gray-700">
                    Laparoscopic surgery uses small incisions in the abdomen through which surgical instruments and a camera are inserted. Compared with traditional open abdominal surgery, laparoscopic procedures generally involve smaller incisions. Depending on the procedure, the small incision marks may become less noticeable as they heal.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hysteroscopic Gynaecological Surgery
                  </h3>
                  <p className="text-gray-700">
                    Hysteroscopy involves passing a thin camera through the vagina and cervix into the uterus. Because there is no abdominal incision, hysteroscopic procedures do not leave an external abdominal scar. Hysteroscopy may be used for selected conditions affecting the inside of the uterus.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 — Why Consider Minimally Invasive Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Do Women Consider Minimally Invasive Gynae Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                When medically appropriate, minimally invasive surgery may offer several potential advantages compared with open surgery.
              </p>

              <p className="text-gray-700 mb-4">
                These can include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Smaller surgical incisions</li>
                <li>Less disruption to surrounding tissues</li>
                <li>Smaller external scars</li>
                <li>Potentially less postoperative discomfort</li>
                <li>Earlier return to routine activities in suitable cases</li>
                <li>Shorter hospital stay for some procedures</li>
                <li>Reduced wound size</li>
                <li>Better cosmetic appearance of the abdominal incision</li>
              </ul>

              <p className="text-gray-700 mt-4">
                However, the benefits and recovery period vary depending on the procedure and the individual patient. The priority should always be safe and appropriate treatment, rather than choosing a surgical technique only because it produces a smaller scar.
              </p>
            </div>

            {/* Section 4 — Conditions Treated With Minimally Invasive Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions That May Be Treated With Minimally Invasive Gynae Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                A Scarless Gynae Surgery Doctor In Moradabad may evaluate whether minimally invasive surgery is appropriate for conditions such as:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Uterine Fibroids
                  </h3>
                  <p className="text-gray-700">
                    Fibroids are non-cancerous growths that develop in or around the uterus. Depending on their size, number and location, some fibroids may be treated with laparoscopic myomectomy. The aim of myomectomy is to remove the fibroid while preserving the uterus when appropriate.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ovarian Cysts
                  </h3>
                  <p className="text-gray-700">
                    Many ovarian cysts do not require surgery and may resolve without treatment. When surgery is recommended, laparoscopic ovarian cystectomy may be considered for selected patients. The surgical approach depends on the size and type of cyst and the patient's symptoms and reproductive plans.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    Endometriosis occurs when tissue similar to the lining of the uterus grows outside the uterus. Laparoscopic surgery may be used in selected patients to identify and treat endometriosis. The appropriate treatment depends on the location and extent of disease, symptoms and fertility considerations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hysterectomy
                  </h3>
                  <p className="text-gray-700">
                    A hysterectomy is surgery to remove the uterus. Depending on the patient's condition and suitability, hysterectomy may sometimes be performed using a minimally invasive approach. The choice between laparoscopic, vaginal or open surgery depends on individual clinical factors.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Uterine Polyps
                  </h3>
                  <p className="text-gray-700">
                    Endometrial polyps are growths that develop inside the uterus. Some polyps can be removed through hysteroscopy, meaning that an external abdominal incision may not be necessary.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Diagnostic Hysteroscopy
                  </h3>
                  <p className="text-gray-700">
                    Diagnostic hysteroscopy allows the doctor to examine the inside of the uterus using a small camera. It may be recommended when evaluating abnormal uterine bleeding, infertility or suspected abnormalities inside the uterine cavity.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — Laparoscopic Surgery vs Open Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Surgery vs Open Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                The choice between laparoscopic and open surgery is not the same for every patient.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Laparoscopic Surgery
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                        Open Surgery
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Uses smaller abdominal incisions
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Uses a larger abdominal incision
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Usually results in smaller external scars
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Usually produces a larger visible scar
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        May allow earlier recovery in suitable cases
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Recovery can be longer depending on the operation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Commonly used for selected gynaecological procedures
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        May be required for certain large or complex conditions
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        Requires specialised surgical skills
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-700">
                        May be preferred when minimally invasive surgery is not suitable
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700">
                Your doctor should recommend the surgical approach based on medical necessity rather than cosmetic preference alone.
              </p>
            </div>

            {/* Section 6 — Is Scarless Surgery Suitable for Everyone */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Is Scarless Gynae Surgery Suitable for Everyone?
              </h2>

              <p className="text-gray-700 mb-4">
                No. Although minimally invasive techniques are useful for many gynaecological conditions, they are not appropriate for every patient or every operation.
              </p>

              <p className="text-gray-700 mb-4">
                Your doctor may consider:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Type of gynaecological condition</li>
                <li>Size and location of the problem</li>
                <li>Previous abdominal or pelvic surgery</li>
                <li>Medical history</li>
                <li>Overall health</li>
                <li>Body anatomy</li>
                <li>Pregnancy and fertility plans</li>
                <li>Results of ultrasound or other investigations</li>
                <li>Complexity of the planned procedure</li>
              </ul>

              <p className="text-gray-700 mt-4">
                For some patients, open surgery may be medically safer or more appropriate. A responsible surgeon should explain both minimally invasive and open surgical options when relevant.
              </p>
            </div>

            {/* Section 7 — What Happens During Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During a Scarless Gynae Surgery Consultation?
              </h2>

              <p className="text-gray-700 mb-4">
                Your consultation generally begins with understanding your symptoms and medical history.
              </p>

              <p className="text-gray-700 mb-4">
                The doctor may discuss:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Your Symptoms
                  </h3>
                  <p className="text-gray-700 mb-2">You may be asked about:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Heavy menstrual bleeding</li>
                    <li>Irregular periods</li>
                    <li>Pelvic pain</li>
                    <li>Pain during intercourse</li>
                    <li>Abdominal discomfort</li>
                    <li>Infertility</li>
                    <li>Abnormal vaginal bleeding</li>
                    <li>Urinary or bowel symptoms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Previous Medical History
                  </h3>
                  <p className="text-gray-700">
                    Your doctor may review previous surgeries, pregnancies, medical conditions and medications.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Investigations
                  </h3>
                  <p className="text-gray-700">
                    Depending on your symptoms, investigations such as ultrasound, blood tests, MRI or hysteroscopy may be recommended.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Treatment Options
                  </h3>
                  <p className="text-gray-700">
                    The doctor can explain whether medication, observation, minimally invasive surgery or another treatment is appropriate.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Surgical Planning
                  </h3>
                  <p className="text-gray-700">
                    If surgery is recommended, you can discuss the expected procedure, possible risks, recovery and follow-up.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 — Recovery After Minimally Invasive Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Minimally Invasive Gynae Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery depends on the exact procedure.
              </p>

              <p className="text-gray-700 mb-4">
                After surgery, your doctor will provide instructions regarding:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Wound care</li>
                <li>Medicines</li>
                <li>Physical activity</li>
                <li>Diet</li>
                <li>Bathing</li>
                <li>Sexual activity</li>
                <li>Driving</li>
                <li>Returning to work</li>
                <li>Follow-up appointments</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Do not compare your recovery with another patient's experience because recovery can vary considerably between procedures and individuals.
              </p>

              <p className="text-gray-700 mt-4">
                Contact your healthcare provider if you develop increasing pain, fever, heavy bleeding, wound redness, discharge or other concerning symptoms after surgery.
              </p>
            </div>

            {/* Section 9 — Does Scarless Surgery Mean No Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Does Scarless Surgery Mean No Pain?
              </h2>

              <p className="text-gray-700 mb-4">
                No surgical procedure should automatically be described as completely painless.
              </p>

              <p className="text-gray-700">
                Minimally invasive surgery generally uses smaller incisions than open abdominal surgery, which may reduce postoperative discomfort for some patients. Your doctor and anaesthesia team can discuss pain management before and after the procedure.
              </p>
            </div>

            {/* Section 10 — Does Scarless Surgery Improve Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Does Scarless Surgery Improve Fertility?
              </h2>

              <p className="text-gray-700">
                The effect on fertility depends on the underlying condition and the procedure performed. For example, treating certain fibroids, endometriosis or other pelvic conditions may be relevant to fertility in selected patients. However, surgery is not automatically a fertility treatment, and the potential benefits and risks should be discussed based on your individual diagnosis.
              </p>
            </div>

            {/* Section 11 — Choosing a Scarless Gynae Surgery Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing a Scarless Gynae Surgery Doctor In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                When selecting a doctor for minimally invasive gynaecological surgery, consider:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Training in laparoscopic gynaecological surgery</li>
                <li>Experience with the specific procedure you may need</li>
                <li>Experience in hysteroscopic procedures where appropriate</li>
                <li>Clear explanation of treatment alternatives</li>
                <li>Discussion of potential risks and complications</li>
                <li>Appropriate preoperative investigations</li>
                <li>Proper hospital and anaesthesia arrangements</li>
                <li>Follow-up after surgery</li>
                <li>Willingness to explain when minimally invasive surgery may not be suitable</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Be cautious of claims that promise a completely scar-free result or guaranteed outcomes for every patient.
              </p>
            </div>

            {/* Section 12 — Minimally Invasive Surgery at Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Minimally Invasive Gynae Surgery at Dr. Priyanka Gynaec
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka provides gynaecological consultation and surgical care in Moradabad.
              </p>

              <p className="text-gray-700 mb-4">
                Women considering minimally invasive surgery can discuss conditions such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Uterine fibroids</li>
                <li>Ovarian cysts</li>
                <li>Endometriosis</li>
                <li>Uterine polyps</li>
                <li>Hysterectomy</li>
                <li>Other selected gynaecological conditions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                During consultation, the appropriate treatment approach can be discussed according to the patient's symptoms, diagnosis, medical history and treatment goals.
              </p>
            </div>

            {/* Section 13 — When Should You Consult a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Consult a Gynae Surgery Doctor?
              </h2>

              <p className="text-gray-700 mb-4">
                Consider a gynaecological consultation if you experience:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Very heavy menstrual bleeding</li>
                <li>Periods lasting unusually long</li>
                <li>Persistent pelvic pain</li>
                <li>Pain during intercourse</li>
                <li>Recurrent ovarian cysts</li>
                <li>Abnormal uterine bleeding</li>
                <li>Symptoms associated with fibroids</li>
                <li>Difficulty conceiving</li>
                <li>Suspected endometriosis</li>
                <li>A uterine polyp or other abnormality found on imaging</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early evaluation can help identify the cause of your symptoms and determine whether treatment is required.
              </p>
            </div>

            {/* Section 14 — Contact Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka – Scarless Gynae Surgery Doctor In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you are searching for a Scarless Gynae Surgery Doctor In Moradabad, you can contact Dr. Priyanka for consultation regarding minimally invasive gynaecological surgery.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
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
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
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

            {/* Section 15 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
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