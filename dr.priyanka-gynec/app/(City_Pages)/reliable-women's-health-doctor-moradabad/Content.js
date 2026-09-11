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

export default function ReliableWomensHealthDoctorMoradabad() {
  const faqs = [
    {
      q: "Who is a reliable women's health doctor in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec is a well-known and trusted choice, offering gynaecology, fertility, and pregnancy care.",
    },
    {
      q: "What services does Dr. Priyanka Gynaec offer?",
      a: "Gynaecology, laparoscopy, IVF/fertility treatment, pregnancy and birthing care, and paediatric consultations.",
    },
    {
      q: "Does the clinic handle high-risk pregnancies?",
      a: "Yes, antenatal services and pregnancy care are offered with structured screenings throughout pregnancy.",
    },
    {
      q: "Is laparoscopic (keyhole) surgery available?",
      a: "Yes, including cystectomy, myomectomy, hysterectomy, and endometriosis surgery with 3D laparoscopy.",
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
      q: "Does the clinic offer IVF and fertility treatment?",
      a: "Yes, personalised fertility and IVF treatments are offered, supported by advanced lab technology.",
    },
    {
      q: "Is the website gynaecologistmoradabad.com genuine and informative?",
      a: "Yes, it clearly lists services, technology used, patient testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic instead of calling?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com for queries.",
    },
    {
      q: "Does the clinic treat PCOS and infertility?",
      a: "Yes, the clinic's blog and services confirm PCOS evaluation and fertility treatment support.",
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
                Reliable Women's Health Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Finding a reliable women's health doctor in Moradabad is one of the most important decisions a woman can make for herself and her family. Whether it is a routine check-up, a complicated pregnancy, a fertility struggle, or a gynaecological surgery, the right doctor doesn't just treat symptoms — she builds trust, listens patiently, and guides every patient with honesty and skill.
              </p>

              <p className="text-gray-700">
                This guide explains what makes a women's health doctor truly reliable, what services you should expect, and why Dr. Priyanka Pachauri of Moradabad has become one of the most searched and recommended names in this field.
              </p>
            </div>

            {/* Section 2 — Why Choosing the Right Doctor Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choosing the Right Women's Health Doctor Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Women's health is not a single specialty — it covers everything from adolescence to menopause. A reliable doctor understands this full journey and doesn't treat every visit as a one-time transaction. Choosing the right specialist matters because:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Wrong or delayed diagnosis in gynaecological conditions can lead to long-term complications, including infertility.</li>
                <li>Pregnancy-related risks can turn serious within hours if the doctor is not experienced or not easily reachable.</li>
                <li>Many women feel hesitant to discuss personal health issues, so comfort and empathy are just as important as medical skill.</li>
                <li>Conditions like PCOS, fibroids, endometriosis, and infertility require continuous, long-term monitoring — not a single consultation.</li>
                <li>Surgical decisions (like hysterectomy or cystectomy) are irreversible, so trusting an experienced hand is critical.</li>
                <li>A good doctor saves patients from unnecessary tests, unnecessary surgeries, and unnecessary financial burden.</li>
              </ul>
            </div>

            {/* Section 3 — What Makes a Doctor Reliable */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Women's Health Doctor &quot;Reliable&quot;?
              </h2>

              <p className="text-gray-700 mb-4">
                Not every doctor with a clinic is automatically dependable. Here are the real markers of reliability that patients in Moradabad should look for:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Qualification and specialisation:</strong> A recognised degree in Obstetrics & Gynaecology (MS/DGO), along with additional fellowships in laparoscopy or infertility, shows deeper expertise.</li>
                <li><strong>Years of clinical experience:</strong> Handling thousands of deliveries, surgeries, and fertility cases builds the judgment that textbooks cannot teach.</li>
                <li><strong>Availability during emergencies:</strong> A reliable doctor or her team can be reached quickly, especially during late-pregnancy emergencies.</li>
                <li><strong>Modern technology and equipment:</strong> 3D/4D ultrasound, 3D laparoscopy, and advanced fertility labs improve accuracy and reduce risk.</li>
                <li><strong>Transparent communication:</strong> Explaining reports, treatment options, and costs clearly, without pressure or confusion.</li>
                <li><strong>Positive patient history:</strong> Real testimonials, repeat patients, and referrals from other women are stronger proof than advertising.</li>
                <li><strong>Focus on minimally invasive options:</strong> Preferring laparoscopic (keyhole) surgery over open surgery whenever medically possible, for faster recovery.</li>
                <li><strong>Continuity of care:</strong> Following up with the same patient across pregnancy, delivery, and postnatal stages instead of passing her around.</li>
                <li><strong>Respect for patient choice:</strong> Involving the woman in every decision about her own body and treatment plan.</li>
              </ul>
            </div>

            {/* Section 4 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Name in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Among the doctors practising in the city, Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is widely recognised as a dependable choice for women's health in Moradabad. Her clinic positions itself around the philosophy of &quot;Her Health First&quot; — placing patient comfort, choice, and individual story at the centre of treatment.
              </p>
            </div>

            {/* Section 5 — Core Areas of Expertise */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Core Areas of Expertise
              </h2>

              <p className="text-gray-700 mb-4">
                Her practice covers a wide spectrum of women's health needs, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gynaecology and general women's health consultations</li>
                <li>3D laparoscopic gynaecological surgery</li>
                <li>Fertility evaluation and IVF treatment</li>
                <li>Pregnancy, antenatal, and postnatal (birthing) care</li>
                <li>Normal (natural) delivery with a focus on minimal intervention</li>
                <li>Laparoscopic cystectomy for ovarian cysts, preserving fertility</li>
                <li>Laparoscopic myomectomy for uterine fibroids</li>
                <li>Laparoscopic hysterectomy with faster recovery time</li>
                <li>Sacrocolpopexy for uterine and vaginal vault prolapse</li>
                <li>Laparoscopic sterilisation (tubal ligation) as a day-care procedure</li>
                <li>Diagnostic hysteroscopy for uterine cavity evaluation</li>
                <li>Hysteroscopic polypectomy for uterine polyps</li>
                <li>Endometriosis surgery and pelvic pain management</li>
                <li>Paediatric consultations, vaccinations, and newborn care</li>
              </ul>
            </div>

            {/* Section 6 — Technology Used */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology Used at the Clinic
              </h2>

              <p className="text-gray-700 mb-4">
                Reliable care today also depends on the equipment a clinic invests in. Some notable technology mentioned by the practice includes:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>High-definition 3D laparoscopic surgical systems:</strong> For precision and safety</li>
                <li><strong>3D & 4D ultrasound machines:</strong> For detailed pregnancy and pelvic scanning</li>
                <li><strong>GERI time-lapse imaging incubator:</strong> Used in advanced IVF monitoring</li>
                <li><strong>AI-powered semen analysis and DNA integrity testing:</strong> For male-factor fertility evaluation</li>
              </ul>
            </div>

            {/* Section 7 — Why Patients Trust This Practice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Trust This Practice
              </h2>

              <p className="text-gray-700 mb-4">
                According to the clinic's own patient-facing communication, trust is built on four pillars:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Expertise with heart:</strong> Gold medal academic credentials and international fellowship training in laparoscopy, fertility, and endometriosis care.</li>
                <li><strong>Continuity you can count on:</strong> The same integrated team follows a patient's history from the first visit through every follow-up.</li>
                <li><strong>Outcomes patients hope for:</strong> Successful pregnancies after long fertility struggles, pain-free life after endometriosis treatment, and fertility-preserving minimally invasive surgery.</li>
                <li><strong>Trust earned daily:</strong> Reputation built through word-of-mouth referrals from mothers, daughters, and friends rather than paid promotion alone.</li>
              </ul>
            </div>

            {/* Section 8 — Common Women's Health Concerns */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Women's Health Concerns Treated in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                A dependable women's health doctor should be equipped to manage the full range of issues women commonly face at different life stages:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Irregular periods and menstrual disorders</li>
                <li>PCOS (Polycystic Ovary Syndrome) and related infertility</li>
                <li>Difficulty conceiving and need for fertility workup or IVF</li>
                <li>High-risk pregnancy monitoring, including diabetes or hypertension in pregnancy</li>
                <li>Normal delivery guidance and birth planning</li>
                <li>Ovarian cysts and fibroids</li>
                <li>Endometriosis and chronic pelvic pain</li>
                <li>Uterine or vaginal prolapse in older women</li>
                <li>Family planning and permanent sterilisation</li>
                <li>Abnormal uterine bleeding and uterine polyps</li>
                <li>Postnatal recovery and newborn/paediatric care</li>
              </ul>
            </div>

            {/* Section 9 — Step-by-Step Guide */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Choose Your Women's Health Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you are searching for the right specialist, follow this simple checklist before booking your first appointment:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Step 1: Check qualifications:</strong> Verify MBBS, MS/DGO in Obstetrics & Gynaecology, and any additional fellowship certifications.</li>
                <li><strong>Step 2: Review the services list:</strong> Confirm the doctor treats your specific concern (fertility, pregnancy, surgery, or general gynaecology).</li>
                <li><strong>Step 3: Look at technology available:</strong> Ultrasound quality and laparoscopic setup directly affect diagnostic accuracy and surgical safety.</li>
                <li><strong>Step 4: Read real patient experiences:</strong> Testimonials and reviews reveal how the doctor communicates and how staff treat patients.</li>
                <li><strong>Step 5: Note the location and accessibility:</strong> A clinic that is easy to reach matters, especially during late pregnancy or emergencies.</li>
                <li><strong>Step 6: Confirm contact options:</strong> Phone, WhatsApp, and email availability show how easy it is to get quick answers.</li>
                <li><strong>Step 7: Ask about costs upfront:</strong> A transparent doctor will always explain expected costs before starting treatment.</li>
                <li><strong>Step 8: Trust your comfort level:</strong> If you don't feel heard or respected in the first consultation, it's okay to seek a second opinion.</li>
              </ul>
            </div>

            {/* Section 10 — Benefits of Choosing a Local Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Local, Reliable Doctor in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a women's health doctor within your own city, rather than travelling to Delhi or another metro, has real advantages:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster access during emergencies, especially in the last trimester of pregnancy</li>
                <li>Easier and more frequent follow-up visits without travel fatigue</li>
                <li>Lower overall treatment cost compared to metro-city hospitals</li>
                <li>Continuity of care with the same doctor and same medical records</li>
                <li>Familiarity with local health patterns and community health needs</li>
                <li>Family and support system nearby during recovery after surgery or delivery</li>
              </ul>
            </div>

            {/* Section 11 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
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
                        https://www.gynaecologistmoradabad.com/
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

                <p className="text-gray-700 mt-4 text-sm">
                  It is always recommended to call or send a WhatsApp message before visiting, to confirm appointment timing and avoid unnecessary waiting.
                </p>
              </div>
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