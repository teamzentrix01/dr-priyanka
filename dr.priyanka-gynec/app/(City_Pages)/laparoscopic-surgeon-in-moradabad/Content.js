import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function LaparoscopicSurgeonMoradabad() {
  const faqs = [
    {
      q: "How do I choose a laparoscopic surgeon in Moradabad?",
      a: "Check the surgeon's qualifications, experience, technology, and patient reviews before deciding.",
    },
    {
      q: "How long does recovery take after laparoscopic surgery?",
      a: "Most patients resume normal activities within 1 to 2 weeks.",
    },
    {
      q: "Does laparoscopic surgery affect fertility?",
      a: "No, this approach is actually fertility-preserving, especially in procedures like cystectomy and myomectomy.",
    },
    {
      q: "What conditions are treated with laparoscopic surgery?",
      a: "Ovarian cysts, uterine fibroids, endometriosis, uterine prolapse, and heavy bleeding, among others.",
    },
    {
      q: "Is laparoscopic surgery safer than open surgery?",
      a: "Yes, generally it means less blood loss, lower infection risk, and faster recovery.",
    },
    {
      q: "How many days is the hospital stay after laparoscopic surgery?",
      a: "Typically 1 to 2 days.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book via call or WhatsApp. The WhatsApp number is 8979670705.",
    },
    {
      q: "Does laparoscopic hysterectomy also offer faster recovery?",
      a: "Yes, recovery is significantly faster compared to open hysterectomy.",
    },
    {
      q: "Is any special preparation needed before laparoscopic surgery?",
      a: "Yes, blood tests, fitness assessment, and fasting instructions will be provided by the doctor.",
    },
    {
      q: "Does laparoscopic surgery leave scars?",
      a: "Scarring is minimal, since only small incisions (0.5 to 1 cm) are made.",
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
                Laparoscopic Surgeon in Moradabad: A Trusted Address for Advanced, Minimally Invasive Care
              </h1>


              <p className="text-gray-700">
                Gynaecological problems like fibroids, ovarian cysts,
                endometriosis, or uterine issues no longer require large open
                surgeries. Modern laparoscopic techniques offer a safe and
                precise solution to these problems, with minimal scarring and
                faster recovery. If you are searching for a laparoscopic surgeon
                in Moradabad, this guide will help you make an informed
                decision.
              </p>
            </div>


            {/* Section 2 — What Is Laparoscopy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Laparoscopic Surgery and Why Is It Preferred
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Performed through small incisions instead of large cuts</li>
                <li>Uses a camera and specialized instruments for precise treatment</li>
                <li>Less blood loss compared to traditional open surgery</li>
                <li>Hospital stay is generally just 1 to 2 days</li>
                <li>Recovery time is significantly shorter</li>
                <li>Minimal scarring</li>
                <li>Lower risk of infection</li>
                <li>A fertility-preserving approach is possible in many procedures</li>
              </ul>
            </div>


            {/* Section 3 — Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Conditions Treated Through Laparoscopic Surgery
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Ovarian cysts: Laparoscopic cystectomy for fertility-preserving removal</li>
                <li>Uterine fibroids: Laparoscopic myomectomy that removes fibroids while preserving the uterus</li>
                <li>Endometriosis: Advanced excision surgery for pelvic pain relief</li>
                <li>Uterine prolapse: Keyhole repair procedures like sacrocolpopexy</li>
                <li>Heavy bleeding or complex conditions: Laparoscopic hysterectomy</li>
                <li>Family planning: Laparoscopic sterilization (tubal ligation)</li>
                <li>Uterine polyps: Hysteroscopic polypectomy</li>
                <li>Diagnostic evaluation: Diagnostic hysteroscopy of the uterine cavity</li>
              </ul>
            </div>


            {/* Section 4 — Choosing Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                What to Look for While Choosing a Laparoscopic Surgeon
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Surgeon's Qualification and Experience
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Relevant degrees and specialized fellowships</li>
                    <li>Hands-on years of experience in laparoscopic procedures</li>
                    <li>A proven track record of handling complex cases</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Technology and Equipment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>3D laparoscopic surgery setup (offers better depth perception than 2D)</li>
                    <li>High-definition imaging systems</li>
                    <li>Modern OT infrastructure</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Fertility-Preserving Approach
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>The surgeon should focus on preserving fertility wherever possible</li>
                    <li>Case-by-case evaluation, not a one-size-fits-all approach</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Recovery and Post-Op Support
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Clear post-surgery care instructions</li>
                    <li>Properly scheduled follow-up visits</li>
                    <li>Pain management and recovery guidance</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Patient Reviews and Trust
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Check real patient testimonials</li>
                    <li>Ask about success rates and outcomes</li>
                    <li>Give weight to word-of-mouth recommendations</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 5 — Before Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect Before Laparoscopic Surgery
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A detailed consultation and diagnosis (ultrasound, MRI, or other scans)</li>
                <li>Pre-surgery blood tests and fitness assessment</li>
                <li>A clear explanation of the procedure and its risks</li>
                <li>A discussion about anesthesia</li>
                <li>Fasting instructions before surgery</li>
                <li>Guidance on the post-surgery recovery timeline</li>
              </ul>
            </div>


            {/* Section 6 — Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Recovery Looks Like After Laparoscopic Surgery
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Most patients are discharged within 24 to 48 hours</li>
                <li>Mild discomfort is normal and manageable with pain medication</li>
                <li>Normal activities can usually resume within 1 to 2 weeks</li>
                <li>Heavy lifting and strenuous activity should be avoided for a few weeks</li>
                <li>A follow-up checkup is essential</li>
                <li>Incision sites should be kept clean and dry</li>
              </ul>
            </div>


            {/* Section 7 — Open vs Laparoscopic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Open Surgery vs Laparoscopic Surgery: What is the Difference
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Open Surgery
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>A large incision</li>
                    <li>More blood loss</li>
                    <li>Longer hospital stay (typically 4 to 7 days)</li>
                    <li>Longer recovery time (4 to 6 weeks)</li>
                    <li>More visible scarring</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Laparoscopic Surgery
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Small incisions (usually multiple 0.5 to 1 cm cuts)</li>
                    <li>Less blood loss</li>
                    <li>Short hospital stay (1 to 2 days)</li>
                    <li>Faster recovery (1 to 2 weeks)</li>
                    <li>Minimal scarring</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 8 — Dr Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: A Trusted Center for Laparoscopic Surgery in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                When it comes to laparoscopic surgery in Moradabad, Dr. Priyanka
                Gynaec is a name that comes up often. Led by Dr. Priyanka
                Pachauri, this centre provides precise and safe treatment for
                gynaecological problems through advanced 3D laparoscopic
                techniques. A review of the official website,
                gynaecologistmoradabad.com, shows that laparoscopy is one of the
                centre's core specialties.
              </p>


              <h3 className="font-semibold text-gray-900 mb-3">
                Laparoscopic Services Available Here
              </h3>


              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Gynaecology and 3D Laparoscopy: Expert care for women's reproductive health</li>
                <li>Laparoscopic Cystectomy: Precision surgery to remove ovarian cysts while preserving fertility</li>
                <li>Laparoscopic Myomectomy: Uterus-preserving surgery for uterine fibroids</li>
                <li>Laparoscopic Hysterectomy: Advanced minimally invasive hysterectomy with fast recovery</li>
                <li>Sacrocolpopexy: Keyhole repair for uterine and vaginal vault prolapse</li>
                <li>Laparoscopic Sterilization: Safe, permanent tubal ligation day-care procedure</li>
                <li>Diagnostic Hysteroscopy: Gentle endoscopic evaluation of the uterine cavity</li>
                <li>Hysteroscopic Polypectomy: Precise removal of uterine polyps without cuts</li>
                <li>Endometriosis Surgery: Advanced 3D laparoscopic excision for pelvic pain relief</li>
              </ul>


              <h3 className="font-semibold text-gray-900 mb-3">
                Advanced Technology
              </h3>


              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>High-Definition 3D laparoscopic surgery setup for better depth perception and precision</li>
                <li>3D and 4D ultrasound machine for accurate diagnosis and pre-surgery planning</li>
                <li>Modern OT infrastructure with emergency backup</li>
              </ul>


              <h3 className="font-semibold text-gray-900 mb-3">
                What Builds Patient Trust
              </h3>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gold medal credentials and international fellowships</li>
                <li>Recognition in laparoscopy, fertility treatment, and endometriosis care</li>
                <li>Continuity of care with the same team from first visit through follow-up</li>
                <li>Patient testimonials mention clear communication and genuine care</li>
              </ul>
            </div>


            {/* Section 9 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Mistakes to Avoid While Choosing a Laparoscopic Surgeon
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Deciding based on cost alone</li>
                <li>Not verifying the surgeon's laparoscopic experience</li>
                <li>Skipping a second opinion in complex cases</li>
                <li>Ignoring post-surgery care instructions</li>
                <li>Not checking the technology and infrastructure</li>
                <li>Overlooking reviews and testimonials</li>
              </ul>
            </div>


            {/* Section 10 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Laparoscopic Surgery
              </h2>


              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>Myth: Laparoscopic surgery is always more expensive. Reality: Due to a shorter hospital stay and faster recovery, overall costs are often comparable or even lower.</li>
                <li>Myth: Laparoscopy is only needed for severe cases. Reality: Many routine conditions can also be treated laparoscopically.</li>
                <li>Myth: Laparoscopic surgery affects fertility. Reality: This approach is actually fertility-preserving, especially in cystectomy and myomectomy.</li>
                <li>Myth: Recovery takes as long as with open surgery. Reality: Recovery time is significantly shorter.</li>
                <li>Myth: All laparoscopic surgeons have the same level of experience. Reality: Experience and technology vary by surgeon, so research matters.</li>
              </ul>
            </div>


            {/* Section 11 — Local Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Local Laparoscopic Surgeon in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>No need to travel to another city</li>
                <li>Less travel stress for pre-surgery and post-surgery visits</li>
                <li>Quick access during emergency situations</li>
                <li>Family support during surgery and recovery</li>
                <li>Comfort of a familiar environment</li>
                <li>Cost-effective with no added travel or accommodation expenses</li>
              </ul>
            </div>


            {/* Section 12 — Follow-Up */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Post-Surgery Follow-Up Matters
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Healing progress is properly monitored</li>
                <li>Any complications are identified at an early stage</li>
                <li>You can clarify your doubts with the doctor</li>
                <li>Guidance is provided for future health planning</li>
                <li>Overall recovery timeline is tracked</li>
              </ul>
            </div>


            {/* Section 13 — Anesthesia */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Anesthesia in Laparoscopic Surgery
              </h2>


              <p className="text-gray-700 mb-4">
                One question many patients have before laparoscopic surgery is
                about anesthesia, how it is administered and how safe it is.
                Understanding this in advance can ease a lot of pre-surgery
                anxiety.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic gynaecological procedures are usually performed under general anesthesia, meaning the patient is fully asleep and pain-free throughout</li>
                <li>A qualified anesthesiologist monitors vital signs continuously during the procedure</li>
                <li>Pre-surgery fitness assessments help determine the safest anesthesia approach for each patient</li>
                <li>Patients with existing health conditions (like diabetes or heart issues) may need additional pre-surgery evaluation</li>
                <li>Anesthesia-related side effects are generally mild and temporary, such as slight grogginess or nausea after waking up</li>
                <li>Fasting for a few hours before surgery, as instructed by the doctor, helps reduce anesthesia-related risks</li>
              </ul>
            </div>


            {/* Section 14 — Preparation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare Mentally and Physically Before Surgery
              </h2>


              <p className="text-gray-700 mb-4">
                Preparing well ahead of your surgery date can make the entire
                experience feel far less overwhelming.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Discuss all your questions and concerns openly with your surgeon during pre-surgery consultations</li>
                <li>Arrange for a family member or friend to accompany you on the day of surgery</li>
                <li>Follow all pre-surgery instructions carefully, including fasting and medication adjustments</li>
                <li>Keep your medical reports, previous scans, and ID documents organized and ready</li>
                <li>Plan for adequate rest and reduced workload for at least a week after surgery</li>
                <li>Pack comfortable, loose clothing for your hospital stay</li>
                <li>Arrange help at home for the first few days after discharge, especially for household chores</li>
              </ul>
            </div>


            {/* Section 15 — Long-Term Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Long-Term Benefits of Choosing Laparoscopic Treatment Early
              </h2>


              <p className="text-gray-700 mb-4">
                Delaying treatment for gynaecological conditions can sometimes
                make procedures more complex later. Choosing laparoscopic
                treatment at the right time offers several long-term advantages:
              </p>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Smaller, more manageable procedures when conditions are caught early</li>
                <li>Better preservation of reproductive organs and fertility</li>
                <li>Reduced risk of the condition progressing into something more serious</li>
                <li>Shorter overall treatment and recovery timelines</li>
                <li>Lower long-term healthcare costs due to fewer complications</li>
              </ul>
            </div>


            {/* Section 16 — Closing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safe, Minimally Invasive Treatment in Moradabad
              </h2>


              <p className="text-gray-700">
                Choosing the right laparoscopic surgeon in Moradabad has a
                direct impact on your safety, recovery speed, and long-term
                reproductive health. An experienced surgeon, advanced 3D
                technology, and a genuinely caring team come together to make
                safe, minimally invasive treatment possible. If you are looking
                for trusted laparoscopic surgery care in Moradabad, use the
                contact details below for appointments and queries.
              </p>
            </div>


            {/* Section 17 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact Details
              </h2>


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
                      href="mailto:drpriyankagynec@gmail.com"
                      className="hover:underline"
                    >
                      drpriyankagynec@gmail.com
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


            {/* Section 18 — FAQs */}
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