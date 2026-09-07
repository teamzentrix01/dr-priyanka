import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function DrPriyankaGynaecMoradabad() {
  const faqs = [
    {
      q: "What services are available at Dr. Priyanka Gynaec Moradabad?",
      a: "Pregnancy care, normal delivery, laparoscopic surgery, IVF and fertility treatment, PCOS treatment, and paediatric care, all under one roof.",
    },
    {
      q: "Is IVF treatment available at Dr. Priyanka Gynaec Moradabad?",
      a: "Yes, advanced IVF technology such as GERI time-lapse imaging and AI-based semen analysis is available here.",
    },
    {
      q: "Is Dr. Priyanka Gynaec Moradabad safe for high-risk pregnancy?",
      a: "Yes, Dr. Priyanka Pachauri is experienced in managing high-risk pregnancies and ensures safe delivery through regular monitoring.",
    },
    {
      q: "Is normal delivery prioritized, or only C-section offered?",
      a: "Normal delivery is always prioritized as long as it remains medically safe.",
    },
    {
      q: "How long is the recovery time after laparoscopic surgery?",
      a: "Because of the 3D laparoscopic technique, recovery is quite fast and scarring is minimal.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment directly by calling or messaging on WhatsApp at 8979670705.",
    },
    {
      q: "Where is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Can infertility caused by PCOS be treated?",
      a: "Yes, PCOS-related infertility is treated through lifestyle guidance, ovulation induction, and a personalized fertility plan.",
    },
    {
      q: "Is there a permanent solution for endometriosis?",
      a: "Effective and long-term relief is possible through 3D laparoscopic excision surgery.",
    },
    {
      q: "Is paediatric consultation also available?",
      a: "Yes, vaccination and regular checkup facilities are available for newborns and children.",
    },
    {
      q: "What should I carry for the first visit?",
      a: "It is helpful to bring previous reports, any ultrasounds you have, and a list of current medicines.",
    },
    {
      q: "Can I consult for a second opinion?",
      a: "Yes, you can consult for a second opinion before any surgery or major treatment.",
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
                Dr. Priyanka Gynaec Moradabad: Best Gynaecologist, IVF and Women&apos;s Health Specialist
              </h1>


              <p className="text-gray-700 mb-4">
                If you are looking for an experienced and trusted lady gynaecologist
                in Moradabad or nearby areas, Dr. Priyanka Gynaec Moradabad is a
                complete solution for you. From pregnancy care to laparoscopic
                surgery, IVF, PCOS treatment and normal delivery,
                Dr. Priyanka Pachauri provides expert, empathetic and advanced
                medical care at every stage of a woman&apos;s life.
              </p>


              <p className="text-gray-700">
                Below, this article explains in detail why Dr. Priyanka Gynaec
                Moradabad is the best choice, what services are available, which
                technology is used, and how to reach the clinic.
              </p>
            </div>


            {/* Section 2 — Why Choose */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec Moradabad?
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaecologist</li>
                <li>Advanced technology available, including 3D laparoscopy and AI-based imaging</li>
                <li>Personalized and empathetic care for every patient</li>
                <li>Continuity of the same doctor and team from the first visit through every follow-up</li>
                <li>Experienced in handling high-risk pregnancies</li>
                <li>Proven track record of successful IVF and fertility treatments</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for emergency delivery and surgery</li>
                <li>A reputation built on word of mouth, patients refer their own family and friends</li>
              </ul>
            </div>


            {/* Section 3 — About */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist in Moradabad,
                recognized for her Her Health First philosophy. Her approach is
                simple, listen to the patient first, prioritize their comfort and
                choices, and then deliver the best possible treatment using
                modern technology.
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Specialization in gynaecology and laparoscopic surgery</li>
                <li>Extensive experience in fertility and IVF treatment</li>
                <li>Expertise in pregnancy, antenatal and postnatal care</li>
                <li>Safe treatment of complex gynae conditions such as endometriosis, fibroids and ovarian cysts</li>
                <li>Paediatric consultation also available, so mother and baby can receive care at the same place</li>
              </ul>
            </div>


            {/* Section 4 — Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Services Available at Dr. Priyanka Gynaec Moradabad
              </h2>


              <p className="text-gray-700 mb-6">
                Below are all the major services offered at Dr. Priyanka Gynaec,
                Moradabad:
              </p>


              <div className="space-y-6">


                {/* 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    1. Pregnancy and Birthing Care
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Complete antenatal checkups and regular monitoring</li>
                    <li>Trimester-wise personalized care plan</li>
                    <li>High-risk pregnancy management</li>
                    <li>Priority given to normal delivery whenever medically safe</li>
                    <li>Guidance for painless labor and delivery</li>
                    <li>Postnatal care and newborn support</li>
                  </ul>
                </div>


                {/* 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    2. Antenatal Services
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Structured prenatal screening and tests</li>
                    <li>Accurate fetal monitoring with 3D and 4D ultrasound</li>
                    <li>Nutrition and lifestyle guidance during pregnancy</li>
                    <li>Risk assessment and timely intervention</li>
                  </ul>
                </div>


                {/* 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    3. Normal Delivery
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Encouraging natural and vaginal delivery</li>
                    <li>Modern methods of labor pain management</li>
                    <li>Safe delivery environment</li>
                    <li>Priority given to the safety of both mother and baby</li>
                  </ul>
                </div>


                {/* 4 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    4. Gynaecology and Laparoscopy
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D laparoscopic surgery for minimal scarring and fast recovery</li>
                    <li>Advanced tools for both diagnosis and treatment</li>
                    <li>Day-care procedures that reduce hospital stay</li>
                  </ul>
                </div>


                {/* 5 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    5. Fertility and IVF Treatment
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Personalized fertility plans for every couple</li>
                    <li>Treatments such as ovulation induction and IUI</li>
                    <li>IVF with GERI time-lapse embryo monitoring</li>
                    <li>AI-powered semen analysis and DNA integrity testing</li>
                    <li>Structured treatment for PCOS-related infertility</li>
                  </ul>
                </div>


                {/* 6 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    6. Laparoscopic Cystectomy
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Precise removal of ovarian cysts</li>
                    <li>Fertility-preserving treatment approach</li>
                    <li>Minimally invasive keyhole technique</li>
                  </ul>
                </div>


                {/* 7 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    7. Laparoscopic Myomectomy
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Uterus-preserving treatment for uterine fibroids</li>
                    <li>3D laparoscopic precision</li>
                    <li>Shorter recovery time</li>
                  </ul>
                </div>


                {/* 8 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    8. Laparoscopic Hysterectomy
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Advanced minimally invasive hysterectomy</li>
                    <li>Less pain and faster recovery</li>
                    <li>Recommended only when medically necessary</li>
                  </ul>
                </div>


                {/* 9 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    9. Sacrocolpopexy
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Keyhole repair for uterine and vaginal vault prolapse</li>
                    <li>Advanced technique for long-term relief</li>
                  </ul>
                </div>


                {/* 10 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    10. Laparoscopic Sterilization
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Safe and permanent tubal ligation</li>
                    <li>Day-care procedure with quick discharge</li>
                  </ul>
                </div>


                {/* 11 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    11. Diagnostic Hysteroscopy
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gentle endoscopic evaluation of the uterine cavity</li>
                    <li>Identifying the root cause of issues like abnormal bleeding</li>
                  </ul>
                </div>


                {/* 12 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    12. Hysteroscopic Polypectomy
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Removal of uterine polyps without any cuts</li>
                    <li>Precision along with safety</li>
                  </ul>
                </div>


                {/* 13 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    13. Endometriosis Surgery
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Advanced 3D laparoscopic treatment for pelvic pain and endometriosis</li>
                    <li>Long-term relief through complete excision</li>
                  </ul>
                </div>


                {/* 14 */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    14. Paediatric Care
                  </h3>


                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Compassionate consultation for newborns to children</li>
                    <li>Vaccination and regular health checkups</li>
                  </ul>
                </div>


              </div>
            </div>


            {/* Section 5 — Technology */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology Used at Dr. Priyanka Gynaec Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>High-Definition 3D laparoscopic surgery system</li>
                <li>Voluson E22 BT2024, a 3D and 4D ultrasound machine</li>
                <li>GERI time-lapse imaging incubator (for IVF)</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
                <li>Modern diagnostic and monitoring equipment</li>
              </ul>


              <p className="text-gray-700 mt-4">
                This combination of technology is rarely found together at other
                clinics in Moradabad, which is why Dr. Priyanka Gynaec is
                trusted even for complex cases.
              </p>
            </div>


            {/* Section 6 — Why Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Trust Dr. Priyanka Gynaec Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Expertise with Heart, international fellowship and gold medal credentials</li>
                <li>Continuity of Care, the same team handles the entire journey</li>
                <li>Proven Outcomes, successful pregnancies, pain-free recovery, fertility-preserving surgeries</li>
                <li>Earned Trust, patients themselves refer their family members</li>
              </ul>
            </div>


            {/* Section 7 — Who Should Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Visit Dr. Priyanka Gynaec Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Women planning pregnancy who want a first consultation</li>
                <li>Women who are already pregnant and looking for regular antenatal checkups</li>
                <li>Anyone facing irregular periods, heavy bleeding or PCOS-related issues</li>
                <li>Couples struggling to conceive due to fertility issues</li>
                <li>Patients with complaints of pelvic pain, ovarian cysts or fibroids</li>
                <li>Anyone looking for an experienced surgeon for laparoscopic surgery</li>
                <li>Patients who want a second opinion before any gynae surgery</li>
                <li>New mothers who want postnatal care and baby checkups at one place</li>
              </ul>
            </div>


            {/* Section 8 — Patient Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How the Patient Journey Works at Dr. Priyanka Gynaec Moradabad
              </h2>


              <ul className="text-gray-700 space-y-3 list-decimal pl-5">
                <li>Consultation: A detailed history is taken first, and the patient&apos;s concerns are listened to carefully.</li>
                <li>Diagnosis: Ultrasound, blood tests or other diagnostics are done as needed.</li>
                <li>Treatment Plan: A separate, personalized treatment plan is created for every patient.</li>
                <li>Treatment or Surgery: If surgery is required, advanced 3D laparoscopic technique is used.</li>
                <li>Follow-up Care: Regular follow-up and guidance are provided during recovery.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                This structured approach gives patients clarity at every step
                and avoids unnecessary confusion.
              </p>
            </div>


            {/* Section 9 — vs Other Clinics */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec Moradabad vs Other Clinics: What&apos;s the Difference
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Most clinics only have basic ultrasound, while a 3D and 4D Voluson E22 machine is available here.</li>
                <li>For IVF, facilities like a GERI time-lapse incubator and AI-based semen analysis are rarely found elsewhere in Moradabad.</li>
                <li>3D laparoscopy is used in surgery, resulting in smaller cuts, less pain and faster recovery.</li>
                <li>The doctor personally follows up, so patients do not need to see a new doctor every time.</li>
                <li>From fertility to paediatric care, a complete family healthcare solution is available at one center.</li>
              </ul>
            </div>


            {/* Section 10 — Safety */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Hygiene Standards at Dr. Priyanka Gynaec Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Sterilized OT and modern surgical equipment</li>
                <li>Proper infection-control protocols are followed</li>
                <li>Female-friendly and private consultation rooms</li>
                <li>Trained staff always available for emergencies</li>
                <li>Every procedure is clearly explained to the patient beforehand so they can make an informed decision</li>
              </ul>
            </div>


            {/* Section 11 — Location */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec Moradabad: Location and Timing
              </h2>


              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-black mt-1 shrink-0"
                    />


                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Phone
                      size={20}
                      className="text-black mt-1 shrink-0"
                    />


                    <div>
                      <p className="font-semibold">Phone and WhatsApp</p>


                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>


                        <span className="text-gray-400">|</span>


                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Mail
                      size={20}
                      className="text-black mt-1 shrink-0"
                    />


                    <div>
                      <p className="font-semibold">Email</p>


                      <a
                        href="mailto:drpriyanka@gynaecologistmoradabad.com"
                        className="hover:underline"
                      >
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>


                <p className="text-black">
                  Booking an appointment is recommended, especially if you are
                  visiting for the first time or it is an emergency case.
                </p>


                <div className="flex gap-4 flex-wrap mt-6">
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


            {/* Section 12 — FAQs */}
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


                    <p className="text-gray-700">
                      {faq.a}
                    </p>
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