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

export default function PreferredWomensDoctorMoradabad() {
  const faqs = [
    {
      q: "Who is the preferred women's doctor in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is widely regarded as a preferred, trusted women's doctor in Moradabad.",
    },
    {
      q: "What services does Dr. Priyanka Pachauri offer?",
      a: "She offers menstrual disorder treatment, PCOS management, pregnancy care, fertility treatment, and gynaecological surgery.",
    },
    {
      q: "Does the clinic offer laparoscopic surgery?",
      a: "Yes, 3D laparoscopic surgery is available for fibroids, cysts, endometriosis, and hysterectomy.",
    },
    {
      q: "Is fertility and IVF treatment available?",
      a: "Yes, the clinic provides fertility evaluation and IVF services, including advanced embryo monitoring technology.",
    },
    {
      q: "Does the clinic offer pregnancy care for high-risk cases?",
      a: "Yes, antenatal, postnatal, and high-risk pregnancy care are all available.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic use modern diagnostic technology?",
      a: "Yes, including 3D/4D ultrasound, AI-assisted imaging, and hysteroscopy.",
    },
    {
      q: "Is the clinic suitable for young women and adolescents?",
      a: "Yes, the clinic supports women's health needs across all life stages, including adolescence.",
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
                Preferred Women's Doctor in Moradabad: What to Look For and Who Women Trust Most
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing a women's doctor is a decision that affects far more than a single appointment — it shapes how comfortable, informed, and supported a woman feels throughout every stage of her reproductive life. In Moradabad, &quot;preferred women's doctor&quot; isn't just a search term; it reflects what most women are actually looking for — a gynaecologist who combines strong medical expertise with genuine care, someone patients return to again and again and recommend to their friends and family.
              </p>

              <p className="text-gray-700">
                This article breaks down what qualities make a doctor the &quot;preferred&quot; choice for women's healthcare, the range of services a complete women's health specialist should offer, and why Dr. Priyanka Pachauri has become a preferred name for women's healthcare across Moradabad.
              </p>
            </div>

            {/* Section 2 — What Does Preferred Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Does &quot;Preferred Women's Doctor&quot; Really Mean
              </h2>

              <p className="text-gray-700">
                A preferred women's doctor is one that patients actively choose to return to and recommend, rather than simply visiting once out of convenience. This kind of preference is earned over time through consistent, positive experiences — accurate diagnoses, respectful communication, minimal wait times, transparent costs, and a consultation style that makes patients feel genuinely cared for rather than rushed through a checklist. In smaller cities like Moradabad, word-of-mouth reputation plays an especially strong role, since many women choose their doctor based on recommendations from family, friends, or neighbors rather than online searches alone.
              </p>
            </div>

            {/* Section 3 — Qualities That Make a Doctor Preferred */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Qualities That Make a Women's Doctor the Preferred Choice
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Comprehensive Expertise Across Women's Health
                  </h3>
                  <p className="text-gray-700">
                    A preferred women's doctor isn't limited to just prenatal care or just menstrual disorders — she's equipped to manage the full spectrum of women's health needs, from adolescence through menopause, including PCOS, fibroids, infertility, and complex gynaecological surgery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Consistent, Reliable Availability
                  </h3>
                  <p className="text-gray-700">
                    Women often need to reach their doctor quickly, whether it's a pregnancy-related concern or an urgent gynaecological symptom. A preferred doctor's clinic typically offers accessible appointment scheduling and responsive communication, including options like phone or WhatsApp for quicker queries.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Modern Diagnostic and Treatment Capabilities
                  </h3>
                  <p className="text-gray-700">
                    Clinics equipped with 3D/4D ultrasound, hormonal testing, laparoscopy, and hysteroscopy can diagnose and treat more accurately and with less invasive procedures — something increasingly important to patients who value both effectiveness and comfort.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. A Genuinely Patient-First Approach
                  </h3>
                  <p className="text-gray-700">
                    The most preferred doctors are known for listening carefully, explaining conditions and options clearly, and never making patients feel rushed or judged — particularly important in gynaecological care, where many concerns are sensitive in nature.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Strong Track Record With Pregnancy and Fertility Care
                  </h3>
                  <p className="text-gray-700">
                    For many women, pregnancy is one of the most significant reasons to seek a preferred doctor — someone they trust to manage both routine and high-risk pregnancies with skill and reassurance from the first trimester through delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Positive, Consistent Patient Feedback
                  </h3>
                  <p className="text-gray-700">
                    A doctor's reputation as &quot;preferred&quot; is ultimately built on repeated positive experiences shared across many patients — something reflected in testimonials, word of mouth, and returning patients who bring their daughters or family members for care as well.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Services a Complete Women's Doctor Should Offer */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Services a Complete Women's Doctor Should Offer
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menstrual Health and Hormonal Disorders
                  </h3>
                  <p className="text-gray-700">
                    Diagnosis and treatment of irregular periods, heavy bleeding, painful periods, and PCOS — conditions that affect a large percentage of women at some point in their reproductive years.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy Care
                  </h3>
                  <p className="text-gray-700">
                    From confirming pregnancy and routine antenatal visits to managing complications and high-risk pregnancies, a preferred women's doctor provides continuous, attentive support through every trimester.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Fertility Evaluation and Treatment
                  </h3>
                  <p className="text-gray-700">
                    For couples facing difficulty conceiving, access to fertility evaluation, ovulation tracking, and advanced treatments like IVF makes a significant difference in the journey toward parenthood.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Gynaecological Surgery
                  </h3>
                  <p className="text-gray-700">
                    Conditions like fibroids, ovarian cysts, and endometriosis sometimes require surgical treatment. A preferred doctor typically offers minimally invasive laparoscopic and hysteroscopic options, which mean smaller incisions and faster recovery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Adolescent and Young Women's Health
                  </h3>
                  <p className="text-gray-700">
                    Guidance on menstrual health, PCOS, and general reproductive wellness for teenagers and young women, delivered in a way that feels approachable rather than intimidating.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Menopause Care
                  </h3>
                  <p className="text-gray-700">
                    Support for managing hormonal changes, symptoms, and long-term health considerations as women transition through menopause.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    General Gynaecological Check-ups
                  </h3>
                  <p className="text-gray-700">
                    Routine screenings and consultations that help catch potential issues early, even when no symptoms are currently present.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — How Women in Moradabad Choose */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Women in Moradabad Typically Choose Their Preferred Doctor
              </h2>

              <p className="text-gray-700">
                Unlike larger metro cities where patients might rely heavily on online reviews and hospital rankings, women in Moradabad often make their choice of doctor based on a combination of factors: recommendations from trusted family members or friends, a doctor's reputation within the local community, accessibility of the clinic, and — increasingly — a doctor's online presence and patient testimonials. Once a woman finds a doctor she trusts, she's likely to stay with that doctor for years, bringing her daughters, sisters, or friends along as well. This makes the initial experience with a new patient especially important in shaping long-term loyalty.
              </p>
            </div>

            {/* Section 6 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Dr. Priyanka Pachauri Is a Preferred Women's Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) has become one of the most preferred names for women's healthcare in Moradabad, known for combining strong clinical expertise with a patient-first philosophy she calls &quot;Her Health First.&quot; According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, her clinic offers a wide-ranging set of services that make it a preferred destination for women across different life stages, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>Menstrual disorder and PCOS management:</strong> Addressing both diagnosis and long-term hormonal health</li>
                <li><strong>3D laparoscopic surgery:</strong> For fibroids, ovarian cysts, endometriosis, and hysterectomy, performed with minimally invasive techniques for faster recovery</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> For uterine conditions and abnormal bleeding</li>
                <li><strong>3D/4D ultrasound with AI-assisted imaging:</strong> Allowing for detailed and accurate diagnosis</li>
                <li><strong>Fertility evaluation and IVF services:</strong> Including a GERI time-lapse embryo incubator for advanced embryo monitoring</li>
                <li><strong>Antenatal, postnatal, and high-risk pregnancy care:</strong> Supporting women through every stage of pregnancy</li>
                <li><strong>Paediatric consultations:</strong> Offering added convenience for families with young children</li>
              </ul>

              <p className="text-gray-700">
                The clinic's patient testimonials frequently mention feeling comfortable, respected, and well-informed throughout their consultations — the exact qualities that build the kind of long-term trust that earns a doctor &quot;preferred&quot; status among patients. The clinic is located in Gandhi Nagar, Moradabad, making it conveniently accessible from most parts of the city.
              </p>
            </div>

            {/* Section 7 — What Sets a Preferred Doctor Apart */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Sets a Preferred Women's Doctor Apart From an Average One
              </h2>

              <p className="text-gray-700">
                An average doctor treats the symptom in front of them. A preferred doctor takes the time to understand the full context — a patient's history, lifestyle, concerns, and even unspoken worries — before recommending a course of action. This distinction matters especially in women's healthcare, where conditions like PCOS, endometriosis, or fertility issues often require an ongoing relationship rather than a single transactional visit. Preferred doctors also tend to invest in clearer communication, more accessible scheduling, and a genuinely welcoming clinic environment — small details that, together, create a significantly better overall healthcare experience.
              </p>
            </div>

            {/* Section 8 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Finding the Right Women's Doctor
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;The most popular doctor in town is automatically the best fit for me.&quot;</strong> Popularity often reflects overall trust, but the best fit still depends on your specific health needs and communication preferences.</li>
                <li><strong>&quot;A preferred doctor will always have long wait times.&quot;</strong> While demand can affect scheduling, a well-organized clinic manages appointments efficiently without compromising quality of care.</li>
                <li><strong>&quot;You should only look for a women's doctor when you're pregnant.&quot;</strong> Women's healthcare spans far more than pregnancy — menstrual health, PCOS, and general check-ups matter at every life stage.</li>
                <li><strong>&quot;Online reviews alone are enough to judge a doctor.&quot;</strong> Reviews are useful, but the real test is how comfortable and heard you feel during your own consultation.</li>
                <li><strong>&quot;Switching doctors frequently doesn't affect your care.&quot;</strong> Continuity of care with one trusted doctor often leads to more accurate, personalized treatment over time compared to frequently switching providers.</li>
              </ul>
            </div>

            {/* Section 9 — Value of Continuity of Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Value of Continuity of Care With One Preferred Doctor
              </h2>

              <p className="text-gray-700">
                One of the biggest advantages of having a preferred women's doctor is continuity — a single physician who knows a patient's full medical history, from her menstrual patterns as a teenager to her pregnancies and eventually her menopause journey. This continuity allows for far more personalized care than starting fresh with a new doctor each time a concern arises. A doctor who has followed a patient's health over years is better positioned to notice subtle changes, understand what's &quot;normal&quot; for that individual, and make more informed recommendations. This is one of the key reasons many families in Moradabad stick with the same women's doctor across generations, bringing daughters and even granddaughters to the same trusted clinic.
              </p>
            </div>

            {/* Section 10 — How Reputation Builds */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Reputation Builds Over Time
              </h2>

              <p className="text-gray-700">
                A doctor doesn't become the &quot;preferred&quot; choice overnight — that reputation is built consultation by consultation, through consistent quality of care and word-of-mouth recommendations that accumulate over years. In a close-knit city like Moradabad, a single positive experience often leads a patient to recommend the doctor to multiple family members and friends, while a negative one can just as quickly discourage others from visiting. This makes every consultation an opportunity for a doctor to reinforce or build trust, which is why the most preferred women's doctors tend to maintain consistently high standards of care rather than treating each visit as an isolated transaction. For patients, this track record — visible through testimonials, community reputation, and returning patients — remains one of the most reliable indicators of which doctor is genuinely worth choosing.
              </p>
            </div>

            {/* Section 11 — How to Make the Most of Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Make the Most of Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Write down your medical and menstrual history in advance, including any irregularities or ongoing symptoms</li>
                <li>List current medications, supplements, or previous treatments</li>
                <li>Prepare specific questions about your condition or concerns</li>
                <li>Bring any earlier test reports, prescriptions, or ultrasound results</li>
                <li>Be open and specific about your symptoms, even ones that feel uncomfortable to mention — clear information leads to more accurate diagnosis and treatment</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A well-prepared first visit helps the doctor understand your situation faster and sets the foundation for a more productive, long-term healthcare relationship.
              </p>
            </div>

            {/* Section 12 — Contact Information */}
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
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

            {/* Section 13 — FAQs */}
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