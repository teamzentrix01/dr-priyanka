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

export default function ExperiencedLadyGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Who is an experienced lady gynaecologist in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is a well-established, experienced lady gynaecologist in Moradabad.",
    },
    {
      q: "What conditions does Dr. Priyanka Pachauri treat?",
      a: "Menstrual disorders, PCOS, fibroids, endometriosis, infertility, and both routine and high-risk pregnancy care.",
    },
    {
      q: "Does the clinic offer laparoscopic surgery?",
      a: "Yes, 3D laparoscopic surgery is available for fibroids, cysts, endometriosis, and hysterectomy.",
    },
    {
      q: "Is fertility and IVF treatment available at the clinic?",
      a: "Yes, including advanced technology like a GERI time-lapse embryo incubator.",
    },
    {
      q: "Does the clinic provide high-risk pregnancy care?",
      a: "Yes, antenatal, postnatal, and high-risk pregnancy care are all offered.",
    },
    {
      q: "How do I book an appointment with Dr. Priyanka Pachauri?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Does the clinic use modern diagnostic technology?",
      a: "Yes, including 3D/4D ultrasound and AI-assisted imaging.",
    },
    {
      q: "Is the clinic suitable for adolescent or first-time patients?",
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
                Experienced Lady Gynaecologist in Moradabad: Why Experience and Gender Both Matter
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing a gynaecologist involves more than just proximity or convenience — for many women, it comes down to two key factors: how experienced the doctor is, and whether they feel more comfortable being examined and treated by a woman. In Moradabad, &quot;experienced lady gynaecologist&quot; is one of the most common searches among women looking for reproductive healthcare, reflecting a clear preference that combines clinical trust with personal comfort.
              </p>

              <p className="text-gray-700">
                This article breaks down why experience matters so much in gynaecological care, why many women specifically prefer a female doctor, and why Dr. Priyanka Pachauri has become a trusted, experienced choice for women across Moradabad.
              </p>
            </div>

            {/* Section 2 — Why Experience Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Experience Matters in Gynaecological Care
              </h2>

              <p className="text-gray-700 mb-4">
                Experience shapes nearly every part of the quality of care a patient receives. Here's what a more experienced gynaecologist typically brings to a consultation:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Faster, more accurate diagnosis:</strong> Years of practice help a doctor recognize patterns across a wide range of symptoms, rather than relying solely on textbook checklists</li>
                <li><strong>Better handling of complex or unusual cases:</strong> Conditions like endometriosis, complicated PCOS, or high-risk pregnancies often require judgment built through years of hands-on experience</li>
                <li><strong>Greater surgical skill and confidence:</strong> For procedures like laparoscopy or hysteroscopy, an experienced surgeon typically means shorter operating time, fewer complications, and faster recovery</li>
                <li><strong>Calmer handling of emergencies:</strong> Experienced doctors are generally more composed and decisive when a situation changes quickly during labor or surgery</li>
                <li><strong>A wider frame of reference for treatment options:</strong> Having managed many similar cases allows an experienced doctor to weigh multiple treatment paths and recommend the one best suited to each individual patient</li>
                <li><strong>Established relationships with labs, hospitals, and specialists:</strong> Useful when a patient needs referrals or coordinated care for complex conditions</li>
              </ul>
            </div>

            {/* Section 3 — Why Many Women Prefer a Lady Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Many Women Prefer a Lady Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Preference for a female doctor is common and completely valid. Some of the most frequently cited reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Greater physical comfort during examinations:</strong> Many women feel more at ease during pelvic exams or intimate discussions with a female doctor</li>
                <li><strong>Easier to discuss sensitive topics openly:</strong> Concerns about periods, sexual health, or fertility can feel easier to share with someone who may have a shared understanding of these experiences</li>
                <li><strong>Cultural and family comfort:</strong> In many Indian households, particularly in smaller cities like Moradabad, families are more comfortable with a female doctor examining daughters, wives, or mothers</li>
                <li><strong>Reduced anxiety for first-time visits:</strong> Young women and teenagers, especially, often feel less nervous about their first gynaecological consultation with a female doctor</li>
                <li><strong>A sense of shared perspective during pregnancy and motherhood:</strong> Many patients feel that a female doctor who has often supported hundreds of pregnancies brings additional empathy and understanding to the experience</li>
              </ul>
            </div>

            {/* Section 4 — What to Look for */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Look for in an Experienced Lady Gynaecologist
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Years of active clinical practice, including both routine gynaecology and more complex cases</li>
                <li>Range of specializations — menstrual disorders, PCOS, fertility, high-risk pregnancy, and gynaecological surgery</li>
                <li>Access to modern diagnostic tools, such as 3D/4D ultrasound and hormonal testing</li>
                <li>Availability of minimally invasive surgical options, like laparoscopy and hysteroscopy</li>
                <li>Patient testimonials and word-of-mouth reputation, especially from women with similar conditions or concerns</li>
                <li>Clarity of communication — an experienced doctor should be able to explain complex medical information in a way that's easy to understand</li>
                <li>Consistency and continuity of care across visits, rather than treating each appointment as an isolated event</li>
              </ul>
            </div>

            {/* Section 5 — Common Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Conditions Treated by an Experienced Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                An experienced lady gynaecologist should be equipped to manage a wide spectrum of women's health needs, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Menstrual disorders:</strong> Irregular periods, heavy bleeding, painful periods</li>
                <li><strong>PCOS and hormonal imbalances:</strong> Long-term management through medication, lifestyle guidance, and monitoring</li>
                <li><strong>Uterine fibroids and ovarian cysts:</strong> Evaluation and, when needed, minimally invasive surgical removal</li>
                <li><strong>Endometriosis:</strong> Diagnosis and treatment for pelvic pain and related fertility concerns</li>
                <li><strong>Infertility:</strong> Evaluation, ovulation induction, and advanced fertility treatments including IVF</li>
                <li><strong>Pregnancy care:</strong> Routine antenatal visits as well as high-risk pregnancy monitoring</li>
                <li><strong>Menopause management:</strong> Support through hormonal changes and related symptoms</li>
                <li><strong>Adolescent gynaecological concerns:</strong> Guidance for teenagers navigating early menstrual health issues</li>
                <li><strong>Paediatric consultations:</strong> Some clinics extend care to children as well, offering continuity for the whole family</li>
              </ul>
            </div>

            {/* Section 6 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – An Experienced Lady Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is a well-established gynaecologist practicing in Moradabad, known for combining strong clinical experience with a patient-first approach. According to her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, her credentials and practice reflect exactly the kind of experience patients look for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>Gold medal academic credentials and international fellowship training:</strong> As highlighted on her clinic's website</li>
                <li><strong>Expertise across laparoscopy, fertility treatment, and endometriosis care:</strong> Recognized as an area of specialization</li>
                <li><strong>3D laparoscopic surgery:</strong> For fibroids, cysts, endometriosis, and hysterectomy, performed with a focus on preserving fertility</li>
                <li><strong>Diagnostic and therapeutic hysteroscopy:</strong> For uterine conditions, using incision-free procedures</li>
                <li><strong>Fertility and IVF services:</strong> Supported by a GERI time-lapse embryo incubator and AI-powered semen analysis</li>
                <li><strong>Antenatal, postnatal, and high-risk pregnancy care:</strong> Offering continuous support through every stage</li>
                <li><strong>Paediatric consultations:</strong> Extending care to the whole family</li>
                <li><strong>A &quot;Her Health First&quot; philosophy:</strong> Ensuring every consultation begins with listening to the patient before recommending treatment</li>
              </ul>

              <p className="text-gray-700">
                Patient testimonials on the website consistently describe feeling comfortable, understood, and well-guided throughout their consultations — reflecting both the clinical experience and the personal comfort many patients look for in a lady gynaecologist. The clinic is located in Gandhi Nagar, Moradabad, making it easily accessible from most parts of the city.
              </p>
            </div>

            {/* Section 7 — Signs You've Found the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs You've Found the Right Experienced Lady Gynaecologist
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>You leave each visit with clear answers, not more confusion about your condition or next steps</li>
                <li>The doctor remembers your history from previous visits without needing everything repeated</li>
                <li>You feel comfortable asking follow-up questions, even ones that feel minor or embarrassing</li>
                <li>Recommended tests and treatments are explained, including why they're needed and what the results might mean</li>
                <li>The clinic staff are respectful and responsive when you call or message with a query</li>
                <li>You don't feel rushed, even during a busy clinic day</li>
                <li>Your concerns are taken seriously, rather than being dismissed as &quot;normal&quot; without proper evaluation</li>
                <li>Follow-up care is clearly planned, so you know what to expect after treatment begins</li>
              </ul>
            </div>

            {/* Section 8 — What Moradabad Patients Typically Value */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Moradabad Patients Typically Value in a Lady Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Local accessibility:</strong> A clinic that's easy to reach without long travel across the city</li>
                <li><strong>Family-friendly consultations:</strong> A doctor who's comfortable addressing questions from accompanying family members while still centering the patient's own voice</li>
                <li><strong>Privacy and discretion:</strong> Especially important for unmarried women or sensitive fertility and sexual health concerns</li>
                <li><strong>Affordability and transparency:</strong> Clear information about costs before committing to tests or procedures</li>
                <li><strong>A doctor who treats every life stage:</strong> From a teenager's first period concerns to a mother's menopause symptoms, without needing to switch clinics repeatedly</li>
                <li><strong>Strong community reputation:</strong> Many patients rely heavily on recommendations from relatives, neighbors, or friends who've had a positive experience</li>
                <li><strong>A blend of modern technology and traditional respect for patient comfort:</strong> Advanced diagnostic tools paired with a warm, unhurried consultation style</li>
              </ul>
            </div>

            {/* Section 9 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask an Experienced Lady Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Before or during your first consultation, consider asking:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>How many years have you been practicing gynaecology, and what areas do you specialize in?</li>
                <li>What diagnostic tools does your clinic use for conditions like PCOS or fibroids?</li>
                <li>Do you offer minimally invasive treatment options for surgical conditions?</li>
                <li>What is your approach to managing high-risk pregnancies?</li>
                <li>Can I speak with you directly about ongoing concerns, or will follow-ups mostly be with clinic staff?</li>
                <li>What support do you offer patients going through fertility treatment or difficult diagnoses?</li>
              </ul>
            </div>

            {/* Section 10 — Benefits of Long-Term Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing an Experienced, Trusted Lady Doctor Long-Term
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Consistent, personalized care across different life stages, from adolescence through menopause</li>
                <li>Better continuity since the doctor already understands your medical history in detail</li>
                <li>Faster diagnosis in future visits, since patterns and history are already familiar to the doctor</li>
                <li>Greater comfort discussing sensitive symptoms, leading to earlier detection of potential issues</li>
                <li>Stronger trust during major life events like pregnancy, fertility treatment, or surgery</li>
                <li>A doctor families often continue seeing across generations, from mothers to daughters</li>
                <li>Reduced need to repeat your medical history every time you switch providers, which can otherwise lead to gaps in care</li>
                <li>A single point of contact for coordinating referrals or specialist opinions if a more complex condition arises</li>
              </ul>
            </div>

            {/* Section 11 — Common Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Choosing a Lady Gynaecologist
              </h2>

              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li><strong>&quot;Any female doctor is automatically the right fit.&quot;</strong> Comfort with gender is important, but experience, specialization, and communication style still matter significantly.</li>
                <li><strong>&quot;More years of practice always means better care.&quot;</strong> Experience matters, but it should be paired with continued learning, modern technology, and genuine patient-centered communication.</li>
                <li><strong>&quot;You only need a gynaecologist during pregnancy.&quot;</strong> Women's health needs span menstrual health, PCOS, fertility, and menopause — far beyond pregnancy alone.</li>
                <li><strong>&quot;A busy, experienced doctor won't have time for your questions.&quot;</strong> A well-organized clinic ensures adequate consultation time even for high-demand doctors.</li>
                <li><strong>&quot;Switching doctors frequently has no real downside.&quot;</strong> Staying with one experienced doctor over time generally leads to more accurate, personalized care than starting over repeatedly with new providers.</li>
              </ul>
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