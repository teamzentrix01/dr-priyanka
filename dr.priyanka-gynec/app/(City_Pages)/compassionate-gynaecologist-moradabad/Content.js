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

export default function CompassionateGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Who is a compassionate gynaecologist in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is known for combining medical expertise with genuine warmth and patient-first care.",
    },
    {
      q: "What does &quot;Her Health First&quot; mean at the clinic?",
      a: "It means the doctor listens to each patient's concerns and choices before recommending any test or treatment.",
    },
    {
      q: "Does the clinic support patients through fertility struggles emotionally?",
      a: "Yes, fertility care includes guidance and emotional support throughout the treatment journey.",
    },
    {
      q: "Is the clinic sensitive to cultural hesitations around gynaecological topics?",
      a: "Yes, the clinic aims to create a comfortable, judgment-free space for patients to share concerns at their own pace.",
    },
    {
      q: "Does the clinic offer support during pregnancy loss?",
      a: "Yes, patients are supported with care and understanding during emotionally difficult situations like pregnancy loss.",
    },
    {
      q: "How do I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic explain procedures clearly before surgery?",
      a: "Yes, patients are guided through what to expect before laparoscopic or hysteroscopic procedures.",
    },
    {
      q: "Is the clinic suitable for first-time gynaecological visits?",
      a: "Yes, the patient-first approach makes it comfortable for both first-time and returning patients.",
    },
    {
      q: "Are paediatric consultations also available?",
      a: "Yes, paediatric consultations are offered alongside gynaecological services.",
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
                Compassionate Gynaecologist in Moradabad: Care That Goes Beyond the Prescription
              </h1>

              <p className="text-gray-700 mb-4">
                For many women, a visit to the gynaecologist isn't just a medical appointment — it's a moment that carries worry, vulnerability, and sometimes years of unspoken concerns. A compassionate gynaecologist understands this. She doesn't just diagnose and prescribe; she sits with a patient's fear before a difficult test result, celebrates a hard-won pregnancy after years of trying, and offers a steady hand during a painful procedure. In Moradabad, more women are actively seeking out doctors known not just for their medical skill, but for the warmth and humanity they bring to every consultation.
              </p>

              <p className="text-gray-700">
                This article looks at what compassion in gynaecological care actually looks like in everyday practice, the specific moments where it matters most, and why Dr. Priyanka Pachauri has earned a reputation for exactly this kind of caring approach.
              </p>
            </div>

            {/* Section 2 — What Compassion Looks Like */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Compassion Looks Like in a Gynaecology Clinic
              </h2>

              <p className="text-gray-700">
                Compassion in healthcare isn't an abstract quality — it shows up in small, concrete ways throughout a patient's experience. A compassionate gynaecologist takes a moment to check how a patient is really feeling, not just physically but emotionally, before diving into medical details. She notices when a patient seems nervous and slows down to explain things more gently. She remembers details from previous visits — not just test results, but the personal context behind a patient's concerns. And when news is difficult, she delivers it honestly but with care, making sure the patient never feels alone in processing it.
              </p>
            </div>

            {/* Section 3 — Moments Where Compassion Matters Most */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Moments Where Compassion Matters Most
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Delivering a Difficult Diagnosis
                  </h3>
                  <p className="text-gray-700">
                    Whether it's a diagnosis of infertility, a miscarriage, or a condition requiring surgery, how news is delivered shapes how a patient copes with it. A compassionate doctor takes time to explain what the diagnosis means, answers questions patiently, and offers reassurance about next steps — rather than delivering information quickly and moving on to the next patient.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Supporting Patients Through Pregnancy Loss
                  </h3>
                  <p className="text-gray-700">
                    Pregnancy loss is one of the most emotionally difficult experiences a woman can go through. A compassionate gynaecologist acknowledges the grief involved, rather than treating it purely as a clinical event, and gives patients space to process before discussing medical next steps.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Walking Alongside the Fertility Journey
                  </h3>
                  <p className="text-gray-700">
                    Fertility treatment can involve months or years of hope, disappointment, and emotional exhaustion. A caring doctor stays present through each stage of this journey — celebrating small wins, offering honest guidance when treatment plans need to change, and never making a patient feel reduced to a set of test results.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Easing Anxiety Before Procedures
                  </h3>
                  <p className="text-gray-700">
                    Before surgery or an invasive diagnostic procedure, fear of the unknown is often as distressing as the procedure itself. A compassionate doctor takes time beforehand to explain exactly what will happen, answer last-minute questions, and reassure the patient that she'll be supported throughout.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Respecting Cultural and Personal Sensitivities
                  </h3>
                  <p className="text-gray-700">
                    In a city like Moradabad, many women carry cultural hesitation around discussing certain gynaecological topics openly, even with a doctor. A compassionate gynaecologist recognizes this context without judgment, creating space for patients to share concerns at their own pace rather than pushing them to speak before they're ready.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Being Present During Postpartum Struggles
                  </h3>
                  <p className="text-gray-700">
                    The period after childbirth can bring physical recovery challenges alongside emotional adjustment. A compassionate doctor checks in on both, rather than focusing solely on physical healing, and takes seriously any signs of postpartum emotional difficulty.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Why Compassion and Expertise Need to Go Together */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Compassion and Medical Expertise Need to Go Together
              </h2>

              <p className="text-gray-700">
                Compassion without clinical skill isn't enough to properly treat a patient — but clinical skill without compassion often leaves patients feeling unseen, even when the treatment itself is medically sound. The best gynaecological care combines both: a doctor who is technically excellent and genuinely present with her patients. This combination tends to produce better outcomes in practice, because patients who trust their doctor are more likely to be honest about symptoms, follow through on treatment plans, and return for necessary follow-up care rather than avoiding the clinic out of discomfort or fear.
              </p>
            </div>

            {/* Section 5 — How Compassionate Care Affects the Entire Experience */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Compassionate Care Affects the Entire Patient Experience
              </h2>

              <p className="text-gray-700">
                The impact of compassion extends beyond the consultation room itself. It shapes how a patient feels calling to book an appointment, how comfortable she feels asking a &quot;silly&quot; question, and whether she feels safe bringing up a symptom she's been too embarrassed to mention elsewhere. It also affects how a patient's family experiences the process — a compassionate doctor often takes time to address a worried husband's or mother's questions too, recognizing that pregnancy, fertility struggles, or a difficult diagnosis affects the whole family, not just the patient.
              </p>
            </div>

            {/* Section 6 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – Recognized for Compassionate Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) has built her Moradabad practice around a philosophy she calls &quot;Her Health First&quot; — placing a patient's comfort, choices, and personal story at the center of every consultation. According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, this philosophy shapes how care is delivered across her full range of services, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>Menstrual disorder and PCOS management:</strong> Approached with sensitivity to the emotional impact these conditions often carry</li>
                <li><strong>Fertility and IVF treatment:</strong> Supported with guidance and reassurance throughout what can be a long and emotionally demanding journey</li>
                <li><strong>3D laparoscopic surgery:</strong> For fibroids, cysts, and endometriosis, with careful explanation of procedures to ease patient anxiety beforehand</li>
                <li><strong>Antenatal, postnatal, and high-risk pregnancy care:</strong> Offering continuous support through every stage of the pregnancy journey</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> Performed with attention to patient comfort throughout</li>
                <li><strong>Paediatric consultations:</strong> Extending compassionate care to the whole family</li>
              </ul>

              <p className="text-gray-700">
                The clinic describes its team as one that &quot;listens first, then brings world-class expertise&quot; to support each patient's individual path — a description echoed in patient testimonials, which frequently mention feeling comfortable, understood, and well-guided throughout their consultations. The clinic is located in Gandhi Nagar, Moradabad, making it accessible to patients from across the city.
              </p>
            </div>

            {/* Section 7 — What Patients Notice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Patients Notice About Compassionate Care
              </h2>

              <p className="text-gray-700">
                Patients who've experienced compassionate gynaecological care often describe specific moments that stood out to them — a doctor who paused to ask how they were really coping, someone who remembered a detail from a previous visit, or a consultation where they finally felt comfortable asking a question they'd been embarrassed to raise elsewhere. These small moments, repeated consistently across visits, are often what patients remember and share with others when recommending a doctor to family and friends.
              </p>
            </div>

            {/* Section 8 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Compassionate Gynaecological Care
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;A compassionate doctor takes longer, so appointments will always run late.&quot;</strong> In practice, taking time to properly understand a patient upfront often leads to more efficient, accurate care overall.</li>
                <li><strong>&quot;Compassion is a personality trait some doctors have and others don't.&quot;</strong> While personality plays a role, compassionate care is also a deliberate practice — a clinic culture built around patient-first values and clear communication.</li>
                <li><strong>&quot;You only need a compassionate doctor for emotionally difficult diagnoses.&quot;</strong> Even routine visits benefit from a doctor who listens carefully and treats the patient as a whole person, not just a set of symptoms.</li>
                <li><strong>&quot;Compassionate care means the doctor will avoid giving difficult news directly.&quot;</strong> True compassion means delivering honest information clearly, but with care in how it's communicated — not avoiding difficult conversations altogether.</li>
              </ul>
            </div>

            {/* Section 9 — Compassion Across Different Life Stages */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Compassion Across Different Life Stages
              </h2>

              <p className="text-gray-700">
                A woman's need for compassionate gynaecological care doesn't stay the same throughout her life — it shifts and evolves at every stage. A teenage girl navigating her first gynaecological visit needs a doctor who can ease first-time nervousness and speak to her without making her feel embarrassed about basic questions. A woman in her twenties or thirties dealing with PCOS or fertility concerns needs someone who understands the emotional weight of those diagnoses, not just the clinical management. An expectant mother needs steady reassurance through the uncertainties of pregnancy, while a woman approaching menopause needs a doctor who takes her symptoms seriously rather than dismissing them as &quot;just part of aging.&quot; A truly compassionate gynaecologist adapts her approach to meet patients where they are at each of these stages, rather than applying the same tone and pace to every consultation regardless of the patient's age or circumstances.
              </p>
            </div>

            {/* Section 10 — Long-Term Impact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Long-Term Impact of Compassionate Care on Women's Health
              </h2>

              <p className="text-gray-700">
                When compassion is consistently part of a clinic's culture, its effects extend well beyond a single visit. Patients who feel genuinely cared for are more likely to return for regular check-ups rather than avoiding the clinic out of anxiety or past negative experiences. They're also more likely to disclose sensitive symptoms early, which often makes the difference between catching a condition in its early, manageable stage versus discovering it only after it has progressed. Over years, this kind of ongoing, compassionate relationship with a trusted gynaecologist can meaningfully shape a woman's overall reproductive health journey — not just treating individual problems as they arise, but supporting her wellbeing consistently across every stage of life.
              </p>
            </div>

            {/* Section 11 — How to Recognize a Compassionate Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Recognize a Compassionate Gynaecologist Before Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Read patient testimonials for mentions of feeling &quot;heard,&quot; &quot;supported,&quot; or &quot;comfortable,&quot; not just clinical results</li>
                <li>Notice the tone of communication when you first contact the clinic by phone or WhatsApp</li>
                <li>Pay attention to whether your first consultation feels rushed or unhurried</li>
                <li>Ask how the clinic supports patients through emotionally difficult situations, such as pregnancy loss or infertility</li>
              </ul>
            </div>

            {/* Section 12 — Why It's Worth Taking the Time */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why It's Worth Taking the Time to Find the Right Fit
              </h2>

              <p className="text-gray-700">
                Choosing a compassionate gynaecologist isn't something to rush. It's worth taking the time to read testimonials, notice how a clinic communicates before your first visit, and pay attention to how you feel during that initial consultation. A doctor who combines genuine warmth with strong clinical expertise can make an enormous difference in how comfortable and supported you feel throughout every stage of your reproductive health journey — not just during a single appointment, but for years to come.
              </p>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Information – Book Your Appointment
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

            {/* Section 14 — FAQs */}
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