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

export default function WhiteDischargeTreatmentMoradabad() {
  const faqs = [
    {
      q: "Which doctor treats white discharge issues in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec is a trusted choice for diagnosing and treating abnormal discharge.",
    },
    {
      q: "Is white discharge always a sign of infection?",
      a: "No, mild discharge is often normal; only certain changes in colour, smell, or texture need medical attention.",
    },
    {
      q: "What tests are done to diagnose the cause?",
      a: "Vaginal swab tests, urine tests, or blood sugar checks may be done depending on symptoms.",
    },
    {
      q: "Can PCOS cause abnormal discharge?",
      a: "Yes, hormonal imbalance from PCOS can sometimes affect discharge patterns.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Is the consultation private and comfortable?",
      a: "Yes, the clinic follows a 'Her Health First' approach focused on patient comfort.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Does the clinic offer follow-up visits after treatment?",
      a: "Yes, follow-up care is part of the clinic's continuity-of-care approach.",
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
                White Discharge Treatment Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                White discharge, medically known as leucorrhoea, is one of the most common concerns women bring to a gynaecologist, yet many hesitate to talk about it openly. While mild discharge is often completely normal, certain changes in colour, smell, texture, or accompanying symptoms can signal an underlying issue that needs proper medical attention.
              </p>

              <p className="text-gray-700">
                This guide explains what causes white discharge, when it needs treatment, and how to find a reliable white discharge treatment doctor in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — Understanding White Discharge */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding White Discharge: Normal vs Abnormal
              </h2>

              <p className="text-gray-700 mb-4">
                Not all white discharge is a cause for worry. A good gynaecologist will first help distinguish between what's normal and what needs treatment.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    When White Discharge Is Usually Normal
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>It is thin, milky-white or clear, and odourless or has a very mild smell</li>
                    <li>The amount changes slightly with the menstrual cycle, increasing around ovulation</li>
                    <li>It appears during pregnancy due to hormonal changes</li>
                    <li>It occurs with sexual arousal as a natural lubrication response</li>
                    <li>There is no itching, burning, or irritation alongside it</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    When White Discharge May Need Medical Attention
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>The discharge becomes thick, cottage-cheese-like, or clumpy</li>
                    <li>There is a strong, foul, or fishy odour</li>
                    <li>The colour changes to yellow, green, or grey</li>
                    <li>It is accompanied by itching, burning, or redness in the genital area</li>
                    <li>There is pain during urination or intercourse</li>
                    <li>The discharge is unusually heavy and affects daily comfort</li>
                    <li>Lower abdominal pain or fever accompanies the discharge</li>
                    <li>Discharge appears with unexplained fatigue or weight changes, sometimes linked to hormonal disorders</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 — Common Causes of Abnormal White Discharge */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Abnormal White Discharge
              </h2>

              <p className="text-gray-700 mb-4">
                A reliable doctor investigates the underlying cause rather than simply prescribing medication. Common causes include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Vaginal yeast infections (Candidiasis)</strong> – thick, white, itchy discharge, often linked to hormonal changes or antibiotic use</li>
                <li><strong>Bacterial vaginosis</strong> – thin, grey-white discharge with a strong fishy odour</li>
                <li><strong>Sexually transmitted infections (STIs)</strong> – discharge with unusual colour, odour, or accompanying pain</li>
                <li><strong>PCOS (Polycystic Ovary Syndrome)</strong> – hormonal imbalance that can affect discharge patterns along with irregular periods</li>
                <li><strong>Poor hygiene practices</strong> – improper genital hygiene increasing infection risk</li>
                <li><strong>Diabetes</strong> – uncontrolled blood sugar levels increasing susceptibility to yeast infections</li>
                <li><strong>Cervical or uterine infections</strong> – requiring specific gynaecological evaluation</li>
                <li><strong>Stress and hormonal fluctuations</strong> – affecting the natural vaginal flora balance</li>
                <li><strong>Use of scented products or douching</strong> – disrupting natural pH balance and triggering irritation</li>
              </ul>
            </div>

            {/* Section 4 — Why See a Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why You Should See a Gynaecologist Instead of Self-Treating
              </h2>

              <p className="text-gray-700 mb-4">
                Many women try home remedies or over-the-counter creams before consulting a doctor, which can sometimes delay proper diagnosis. Here's why professional evaluation matters:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Self-medication can mask symptoms without treating the actual underlying cause</li>
                <li>Wrong or incomplete treatment can lead to recurring infections</li>
                <li>Untreated infections can sometimes spread and affect fertility over time</li>
                <li>A doctor can run proper lab tests to identify the exact cause (fungal, bacterial, or hormonal)</li>
                <li>Conditions like PCOS or diabetes need long-term management, not just symptom relief</li>
                <li>A gynaecologist can rule out more serious conditions during the same consultation</li>
                <li>Correct treatment reduces the chances of the infection returning repeatedly</li>
              </ul>
            </div>

            {/* Section 5 — What to Expect During a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                A proper white discharge consultation with an experienced gynaecologist typically includes:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed history taking</strong> – understanding your menstrual cycle, sexual activity, hygiene habits, and symptom duration</li>
                <li><strong>Physical examination</strong> – a gentle pelvic examination to check for visible signs of infection or irritation</li>
                <li><strong>Lab tests if needed</strong> – vaginal swab tests, urine tests, or blood sugar checks to identify the exact cause</li>
                <li><strong>Ultrasound scan if required</strong> – to rule out any underlying uterine or ovarian condition</li>
                <li><strong>Personalised treatment plan</strong> – medication (oral or topical) based on the specific cause identified</li>
                <li><strong>Hygiene and lifestyle guidance</strong> – practical advice to prevent recurrence</li>
                <li><strong>Follow-up visit</strong> – to confirm the infection has cleared and symptoms have resolved</li>
              </ul>
            </div>

            {/* Section 6 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Gynaecologist for White Discharge Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad for treating common and complex women's health issues, including abnormal white discharge. Her clinic follows the guiding principle of "Her Health First," ensuring every patient receives a thorough, judgment-free consultation.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Diagnosis and treatment of vaginal infections and abnormal discharge</li>
                    <li>PCOS evaluation and hormonal imbalance management</li>
                    <li>Diagnostic hysteroscopy for uterine cavity evaluation when needed</li>
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>3D laparoscopic gynaecological surgery for more complex conditions</li>
                    <li>Fertility evaluation and IVF treatment</li>
                    <li>Endometriosis and chronic pelvic pain management</li>
                    <li>Paediatric consultations for younger patients</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Used for Accurate Diagnosis
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines for detailed pelvic and uterine imaging</li>
                    <li>High-definition 3D laparoscopic systems for further evaluation or treatment if required</li>
                    <li>Advanced lab-supported diagnostics as part of the clinic's fertility and gynaecology services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology and related fields</li>
                    <li><strong>Continuity of care</strong> – the same team tracking a patient's history across every visit and follow-up</li>
                    <li><strong>Outcomes patients hope for</strong> – accurate diagnosis, effective treatment, and long-term relief from recurring issues</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 — Prevention Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Prevention Tips for Healthy Vaginal Hygiene
              </h2>

              <p className="text-gray-700 mb-4">
                Along with treatment, a good doctor will always guide patients on prevention. General hygiene tips include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Wear breathable, cotton underwear and avoid tight synthetic fabrics</li>
                <li>Avoid scented soaps, sprays, or douches in the genital area</li>
                <li>Change out of wet clothes (like swimwear) promptly</li>
                <li>Wipe front to back after using the washroom to prevent infection spread</li>
                <li>Maintain good blood sugar control if diabetic</li>
                <li>Avoid unnecessary or prolonged use of antibiotics without medical advice</li>
                <li>Stay well-hydrated and maintain a balanced diet</li>
                <li>Change sanitary pads or tampons regularly during periods</li>
                <li>Avoid self-medicating with random over-the-counter creams for recurring symptoms</li>
              </ul>
            </div>

            {/* Section 8 — How to Choose the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Choose the Right Doctor for White Discharge Treatment
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Look for a qualified gynaecologist – MS/DGO qualification with relevant clinical experience.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Check if lab testing facilities are available – accurate diagnosis needs proper swab or lab tests, not guesswork.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Confirm a comfortable, private consultation environment – this is a sensitive topic that needs a judgment-free space.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Read patient reviews – look for mentions of accurate diagnosis and effective treatment outcomes.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Check contact accessibility – phone and WhatsApp availability make it easier to ask follow-up questions.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Ask about follow-up care – a good doctor will schedule a follow-up to confirm the treatment worked.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Evaluate communication style – the doctor should explain the cause and treatment clearly, without rushing.
                </p>
              </div>
            </div>

            {/* Section 9 — Benefits of Consulting a Local Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster appointment availability without long-distance travel</li>
                <li>Easier follow-up visits to confirm the infection has fully cleared</li>
                <li>Lower overall treatment cost compared to travelling to another city</li>
                <li>More comfortable, familiar environment for discussing a sensitive health concern</li>
                <li>Continuity of care if the condition is linked to a broader issue like PCOS or diabetes</li>
                <li>Quick access to lab testing and ultrasound facilities when needed</li>
              </ul>
            </div>

            {/* Section 10 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable white discharge treatment doctor in Moradabad, here are the verified contact details from the official website:
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p className="text-black">Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p className="text-black">Dr. Priyanka Gynaec – Fertility • Maternity • 3D Laparoscopy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone / Call for Appointment</p>
                      <a href="tel:9079765578" className="text-black hover:underline">
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="tel:8979670705" className="text-black hover:underline">
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:drpriyanka@gynaecologistmoradabad.com" className="text-black hover:underline">
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a href="https://www.gynaecologistmoradabad.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
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

            {/* Section 11 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Comfort-focused messaging</strong> – The homepage tagline "Her Health First" helps set a reassuring, judgment-free tone, which matters for sensitive topics like discharge or infections.</li>
                <li><strong>Broad services coverage</strong> – Gynaecology, hormonal issues, and diagnostic services are listed clearly, showing the clinic handles more than just pregnancy care.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D/4D ultrasound and diagnostic tools builds confidence that the clinic can properly investigate underlying causes.</li>
                <li><strong>Active blog with relevant health topics</strong> – Articles on PCOS and related hormonal health topics indicate the clinic addresses issues connected to abnormal discharge.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are visible in the header and footer for quick, private communication.</li>
                <li><strong>Genuine patient testimonials</strong> – Real reviews (such as from patient "Rudri J") add authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated page specifically addressing common infections and discharge-related concerns, along with more detailed FAQs, could help patients find relevant information faster and improve search visibility for this topic.</li>
              </ul>
            </div>

            {/* Section 12 — FAQs */}
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