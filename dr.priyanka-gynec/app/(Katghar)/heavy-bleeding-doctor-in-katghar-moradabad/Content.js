import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function HeavyBleedingDoctorKatgharMoradabad() {
  const faqs = [
    {
      q: "Who is a heavy bleeding doctor near Katghar, Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec evaluates and treats heavy and abnormal bleeding for patients from Katghar and across Moradabad.",
    },
    {
      q: "How do I know if my periods are too heavy?",
      a: "If you soak a pad or tampon every hour or two, bleed for more than seven days, pass large clots or feel tired and dizzy, your bleeding may be heavier than normal.",
    },
    {
      q: "What causes heavy periods?",
      a: "Common causes include fibroids, polyps, adenomyosis, endometriosis, hormonal imbalance, PCOS, thyroid problems and some medicines. A proper evaluation finds the cause.",
    },
    {
      q: "Can heavy bleeding cause anaemia?",
      a: "Yes. Ongoing heavy bleeding can reduce iron stores and cause anaemia, with symptoms like tiredness, pale skin, hair fall and breathlessness.",
    },
    {
      q: "Do I need surgery for heavy bleeding?",
      a: "Not always. Many women improve with medicines. Surgery is considered when a structural problem such as a fibroid or polyp needs treatment.",
    },
    {
      q: "What is hysteroscopy and how does it help?",
      a: "Hysteroscopy is a gentle endoscopic procedure that lets the doctor see inside the uterus and treat problems like polyps without any external cuts.",
    },
    {
      q: "Is bleeding after menopause normal?",
      a: "No. Any bleeding after menopause should be examined promptly by a gynaecologist.",
    },
    {
      q: "Can I get pregnant if I have fibroids or polyps causing heavy bleeding?",
      a: "Many women can, but some of these growths may affect fertility. Treatment can sometimes improve the chances of conception, and your doctor will advise based on your situation.",
    },
    {
      q: "Should I take hormonal pills on my own to stop bleeding?",
      a: "It is best to consult a doctor first. Hormonal medicines need proper evaluation, and self-medication can hide the real cause.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the &quot;Book Appointment&quot; option on www.gynaecologistmoradabad.com.",
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
                Heavy Bleeding Doctor near Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>

              <p className="text-gray-700 mb-4">
                Heavy bleeding during periods is more than an inconvenience. Changing pads every hour, planning your day around the bathroom, passing large clots, feeling exhausted and dizzy: many women live this way for years, believing it is simply how their body works. It is not something you have to accept. In most cases, the cause can be identified and treated.
              </p>

              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby areas of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers careful evaluation and treatment of heavy and abnormal bleeding. The clinic follows the philosophy &quot;Her Health First,&quot; so you are listened to without judgement and every treatment option is explained clearly.
              </p>
            </div>

            {/* Section 2 — What Counts as Heavy Bleeding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Counts as Heavy Bleeding?
              </h2>

              <p className="text-gray-700 mb-4">
                Doctors call heavy menstrual bleeding menorrhagia. You may have it if you:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Soak through a pad or tampon every hour or two for several hours</li>
                <li>Need to double up on sanitary protection</li>
                <li>Wake at night to change protection</li>
                <li>Bleed for more than seven days</li>
                <li>Pass clots larger than a coin</li>
                <li>Avoid activities because of the flow</li>
                <li>Feel tired, dizzy or breathless during or after periods</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Abnormal uterine bleeding also includes bleeding between periods, after intercourse, or after menopause, even if the flow is light.
              </p>
            </div>

            {/* Section 3 — Why Not Ignore */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Heavy Bleeding Should Not Be Ignored
              </h2>

              <p className="text-gray-700 mb-4">
                Long-term heavy bleeding can lead to:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Iron-deficiency anaemia, causing fatigue, pale skin, hair fall, palpitations and poor concentration</li>
                <li>Disruption of work, study and social life</li>
                <li>Emotional strain and anxiety</li>
                <li>Missed signs of an underlying condition that needs treatment</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Early evaluation helps you get relief and prevents complications.
              </p>
            </div>

            {/* Section 4 — Common Causes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Heavy Bleeding
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Uterine fibroids:</strong> Non-cancerous growths that can enlarge the uterus and increase bleeding, especially if they push into the cavity.</li>
                <li><strong>Uterine polyps:</strong> Soft growths on the lining that can cause heavy or irregular bleeding.</li>
                <li><strong>Adenomyosis:</strong> A condition where lining tissue grows within the uterine wall, causing heavy, painful periods.</li>
                <li><strong>Endometriosis:</strong> Often linked with severe pain, and in some women heavy bleeding.</li>
                <li><strong>Hormonal imbalance:</strong> Including PCOS, thyroid disorders and perimenopausal changes.</li>
                <li><strong>Ovulation problems:</strong> When ovulation is irregular, the lining may build up and shed heavily.</li>
                <li><strong>Pregnancy-related causes:</strong> Such as miscarriage or ectopic pregnancy, which can be an emergency.</li>
                <li><strong>Intrauterine devices (IUDs):</strong> Some types may increase bleeding, especially in the first months.</li>
                <li><strong>Bleeding disorders and certain medicines:</strong> Including blood thinners.</li>
                <li><strong>Infections or, rarely, cancers of the uterus or cervix:</strong> Which is why persistent or unusual bleeding must be examined properly.</li>
              </ul>
            </div>

            {/* Section 5 — When Urgent */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When to See a Doctor Urgently
              </h2>

              <p className="text-gray-700 mb-4">
                Seek immediate medical care if you have:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bleeding that soaks through a pad every hour for two or more hours</li>
                <li>Dizziness, fainting or a racing heartbeat</li>
                <li>Severe abdominal pain with bleeding</li>
                <li>Bleeding during pregnancy</li>
                <li>Fever with foul-smelling discharge</li>
                <li>Heavy bleeding after delivery or miscarriage</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Book a prompt consultation if you have bleeding after menopause, bleeding between periods or after intercourse, or heavy periods that have lasted for several cycles.
              </p>
            </div>

            {/* Section 6 — How Cause Found */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is the Cause Found?
              </h2>

              <p className="text-gray-700 mb-4">
                At Dr. Priyanka Gynaec, evaluation starts with a conversation about your cycle, flow, pain, family history and medicines. Depending on your situation, tests may include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A gentle clinical examination, if appropriate</li>
                <li>Blood tests, such as haemoglobin, iron levels, thyroid function and hormones</li>
                <li>A pregnancy test when relevant</li>
                <li>Ultrasound of the uterus and ovaries. The clinic uses a Voluson E22 3D/4D ultrasound machine for detailed imaging</li>
                <li>Diagnostic hysteroscopy, a gentle endoscopic look inside the uterine cavity, to find polyps, fibroids or other abnormalities and to take a biopsy if needed</li>
                <li>Laparoscopy in selected cases, for example when endometriosis or other pelvic causes are suspected</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Each test is explained in advance so that you know why it is needed.
              </p>
            </div>

            {/* Section 7 — Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Heavy Bleeding
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment depends on the cause, your age, your general health and whether you wish to have children.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Correcting Anaemia
                  </h3>
                  <p className="text-gray-700">
                    Iron supplements and diet changes, and sometimes further treatment, help restore haemoglobin and energy. Treating anaemia is an essential part of care, whatever else is done.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Medical Treatment
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Your doctor may suggest, depending on the cause:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Medicines that reduce bleeding during periods</li>
                    <li>Hormonal treatment to regulate cycles and thin the lining</li>
                    <li>Treatment of thyroid or other hormonal problems</li>
                    <li>Pain relief for associated cramps</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Please do not start hormonal pills or herbal remedies on your own. They can mask the cause or interact with other medicines.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Hysteroscopic Treatment
                  </h3>
                  <p className="text-gray-700">
                    For problems inside the uterine cavity, hysteroscopy offers treatment without any cuts. Hysteroscopic polypectomy removes uterine polyps under direct vision, often resolving the source of bleeding in the same procedure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Laparoscopic Surgery
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When fibroids, endometriosis or other conditions are responsible, 3D keyhole surgery may be recommended:
                  </p>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Laparoscopic myomectomy:</strong> Removes fibroids while preserving the uterus</li>
                    <li><strong>Endometriosis surgery:</strong> Excises endometriosis and relieves pelvic pain</li>
                    <li><strong>Laparoscopic hysterectomy:</strong> Removal of the uterus when it is medically necessary and other options are not suitable or have not worked</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Surgery is recommended only when it is truly the best choice, and alternatives are discussed first.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 — Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Heavy Bleeding and Fertility
              </h2>

              <p className="text-gray-700">
                If you hope to conceive, treatment choices matter. Procedures such as hysteroscopic polypectomy and laparoscopic myomectomy aim to treat the cause while preserving the uterus. The clinic also offers fertility and IVF services, so bleeding evaluation and fertility planning can be coordinated together.
              </p>
            </div>

            {/* Section 9 — Teenagers */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Heavy Bleeding in Teenagers
              </h2>

              <p className="text-gray-700">
                Heavy or prolonged bleeding in a young girl, especially if it leads to tiredness or paleness, should be assessed. Possible causes include hormonal immaturity of the cycle and, sometimes, bleeding disorders. A gentle, respectful consultation, with a parent present if she prefers, helps adolescents feel at ease.
              </p>
            </div>

            {/* Section 10 — Menopause */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Heavy Bleeding Near Menopause
              </h2>

              <p className="text-gray-700">
                During perimenopause, periods can become heavier and unpredictable. Many cases are hormonal, but evaluation is important to rule out polyps, fibroids and, occasionally, more serious conditions. Any bleeding after menopause should always be checked promptly.
              </p>
            </div>

            {/* Section 11 — Everyday Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Everyday Tips While You Seek Treatment
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Track your periods, noting dates, number of pads used and clots</li>
                <li>Eat iron-rich foods such as leafy greens, pulses, dates, jaggery and, if you eat them, eggs and meat, along with vitamin C sources to help absorption</li>
                <li>Stay well hydrated and rest when needed</li>
                <li>Avoid taking aspirin-type pain relievers unless your doctor advises, as some can increase bleeding</li>
                <li>Bring your diary and previous reports to the appointment</li>
              </ul>

              <p className="text-gray-700 mt-4">
                These steps support you but do not replace medical evaluation.
              </p>
            </div>

            {/* Section 12 — Why Women Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A listening-first, judgement-free consultation</li>
                <li>Detailed assessment with 3D/4D ultrasound and hysteroscopy</li>
                <li>Uterus-preserving options wherever appropriate</li>
                <li>Advanced 3D laparoscopic surgery when needed</li>
                <li>Honest advice, with surgery recommended only when necessary</li>
                <li>Continuity of care from diagnosis to follow-up</li>
              </ul>
            </div>

            {/* Section 13 — Contact Information */}
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
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:+919079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="https://wa.me/918979670705" className="hover:underline">
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

            {/* Section 14 — FAQs */}
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