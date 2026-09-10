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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function ExpertLaparoscopicGynaecologistMoradabad() {
  const faqs = [
    {
      q: "What is laparoscopic gynaecology surgery?",
      a: "A minimally invasive &quot;keyhole&quot; surgery using small incisions and a camera to treat gynaecological conditions with less pain and faster recovery.",
    },
    {
      q: "Who is considered an expert laparoscopic gynaecologist?",
      a: "A gynaecologist with specialised fellowship training and hands-on experience in advanced 3D laparoscopic procedures.",
    },
    {
      q: "Is laparoscopic surgery painful?",
      a: "It causes much less pain than open surgery, usually managed with mild medication for a few days.",
    },
    {
      q: "How long is the hospital stay after laparoscopic surgery?",
      a: "Most patients are discharged within 24 hours of the procedure.",
    },
    {
      q: "Can fibroids be removed without removing the uterus?",
      a: "Yes, through Laparoscopic Myomectomy, which removes fibroids while preserving the uterus.",
    },
    {
      q: "Does laparoscopic surgery affect future fertility?",
      a: "No, it is actually preferred for fertility preservation due to its precision and minimal tissue damage.",
    },
    {
      q: "What conditions does Dr. Priyanka Pachauri treat in Moradabad?",
      a: "Ovarian cysts, fibroids, endometriosis, prolapse, infertility, high-risk pregnancy, and more, as listed on gynaecologistmoradabad.com.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can call or message on WhatsApp at 8979670705 to book a consultation.",
    },
    {
      q: "Is laparoscopic treatment available for endometriosis?",
      a: "Yes, advanced 3D laparoscopic excision is used to remove endometriosis and relieve pelvic pain.",
    },
    {
      q: "How soon can I resume normal activities after surgery?",
      a: "Most women resume light daily activities within 5–7 days after laparoscopic surgery.",
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
                Expert Laparoscopic Gynaecologist in Moradabad: Advanced, Painless & Trusted Women's Care
              </h1>

              <p className="text-gray-700 mb-4">
                Finding an expert laparoscopic gynaecologist in Moradabad is one of the most important decisions a woman can make for her reproductive and overall health. Whether it is a routine gynaec check-up, a complicated fibroid, an ovarian cyst, endometriosis, or the need for a hysterectomy, choosing a doctor who is genuinely skilled in 3D laparoscopic (keyhole) surgery can completely change your recovery experience — from weeks of pain and a big scar to a same-day discharge with a tiny, almost invisible cut. In Moradabad, more and more women are moving away from traditional open surgeries and choosing laparoscopic treatment because it is safer, faster, and far less painful.
              </p>

              <p className="text-gray-700">
                This detailed guide explains everything you need to know about laparoscopic gynaecology, why an expert gynaecologist matters, what conditions are treated, and how to choose the right specialist in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Is Laparoscopic Gynaecology? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Laparoscopic Gynaecology and Why Does It Matter?
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic gynaecology (also called keyhole or minimally invasive gynaec surgery) is a modern surgical technique where the gynaecologist operates through very small incisions instead of one large cut. A thin camera (laparoscope) and specialised instruments are inserted through these tiny openings, allowing the surgeon to see the internal organs on a high-definition screen and perform the surgery with extreme precision.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Uses 3D/4K high-definition cameras for a magnified, accurate view of the uterus, ovaries and pelvic organs</li>
                <li>Requires only 3–4 small incisions (usually 5–10 mm) instead of one long cut</li>
                <li>Significantly reduces blood loss during surgery compared to open surgery</li>
                <li>Preserves fertility better because the surgeon can work with more precision around delicate reproductive tissue</li>
                <li>Lowers the risk of post-operative infection since the wound area is much smaller</li>
                <li>Allows most patients to be discharged within 24 hours of surgery</li>
                <li>Leaves minimal to no visible scarring, which matters a lot to most women</li>
                <li>Reduces overall hospital stay and recovery time by almost 60–70% compared to open surgery</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This is exactly why choosing an expert laparoscopic gynaecologist in Moradabad — rather than a general surgeon or a doctor without advanced laparoscopic training — makes such a big difference to the outcome of your treatment.
              </p>
            </div>

            {/* Section 3 — Why Choose an Expert */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why You Should Choose an Expert Laparoscopic Gynaecologist Over a General Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Not every gynaecologist is trained or equipped to perform advanced 3D laparoscopic procedures. Laparoscopic surgery demands years of specialised fellowship training, hands-on surgical practice, and access to advanced imaging technology. Here is why the &quot;expert&quot; tag genuinely matters:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>An expert laparoscopic gynaecologist has completed advanced fellowships specifically in minimally invasive gynaec surgery</li>
                <li>They are trained to handle complex cases like deep endometriosis, large fibroids, and complicated ovarian cysts through keyhole methods only</li>
                <li>They know how to convert a high-risk case into a safe, minimally invasive procedure instead of jumping straight to open surgery</li>
                <li>They work with modern 3D/4D imaging and time-lapse monitoring tools for far more accurate diagnosis</li>
                <li>They understand fertility preservation techniques, which is critical for younger women who still want to conceive</li>
                <li>They can manage complications faster and more safely because of their surgical experience</li>
                <li>Their patients typically report shorter hospital stays, less post-operative pain, and quicker return to daily life</li>
              </ul>
            </div>

            {/* Section 4 — Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Gynaecological Conditions Treated Through Laparoscopy
              </h2>

              <p className="text-gray-700 mb-4">
                An expert laparoscopic gynaecologist in Moradabad can diagnose and treat a wide range of women's health conditions using minimally invasive methods. Some of the most common conditions include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Ovarian cysts (Laparoscopic Cystectomy):</strong> Precision removal of cysts while protecting healthy ovarian tissue and future fertility</li>
                <li><strong>Uterine fibroids (Laparoscopic Myomectomy):</strong> Removing fibroids while preserving the uterus, ideal for women planning pregnancy</li>
                <li><strong>Heavy or abnormal uterine conditions requiring Laparoscopic Hysterectomy:</strong> Minimally invasive removal of the uterus with a much faster recovery than open surgery</li>
                <li><strong>Endometriosis:</strong> Advanced laparoscopic excision to relieve chronic pelvic pain and improve fertility outcomes</li>
                <li><strong>Uterine or vaginal vault prolapse (Sacrocolpopexy):</strong> Keyhole repair for pelvic organ prolapse</li>
                <li><strong>Permanent contraception (Laparoscopic Sterilisation):</strong> A safe, quick day-care tubal ligation procedure</li>
                <li><strong>Uterine polyps (Hysteroscopic Polypectomy):</strong> Removal of polyps without any external cuts</li>
                <li><strong>Diagnostic Hysteroscopy:</strong> Gentle internal evaluation of the uterine cavity to identify the cause of infertility, bleeding, or repeated miscarriage</li>
                <li><strong>PCOS-related infertility:</strong> Laparoscopic ovarian drilling and personalised fertility plans for women struggling to conceive</li>
              </ul>
            </div>

            {/* Section 5 — Benefits of Choosing Laparoscopic Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing Laparoscopic Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Women in Moradabad no longer need to travel to Delhi, Lucknow, or other big cities for advanced gynaec surgery. Local access to an expert laparoscopic gynaecologist offers real, practical advantages:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Saves the cost, time and stress of travelling to a bigger city for treatment</li>
                <li>Allows continuity of care — the same doctor manages you from consultation to surgery to follow-up</li>
                <li>Reduces the emotional burden of being away from family during recovery</li>
                <li>Gives access to advanced technology like 3D laparoscopy, 3D/4D ultrasound, and AI-based imaging locally</li>
                <li>Makes follow-up visits and post-surgery check-ups far more convenient</li>
                <li>Builds a long-term doctor-patient relationship, which is especially valuable in gynaecology and fertility care</li>
              </ul>
            </div>

            {/* Section 6 — What to Expect During Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                A first visit to an expert laparoscopic gynaecologist usually follows a structured, reassuring process:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed discussion of your symptoms, medical history and any previous treatments</li>
                <li>A thorough physical examination and, if required, an ultrasound scan</li>
                <li>Clear, simple explanation of your diagnosis without confusing medical jargon</li>
                <li>Honest discussion of all treatment options — medical management, minor procedures, or laparoscopic surgery</li>
                <li>A personalised treatment plan based on your age, fertility goals, and overall health</li>
                <li>Transparent information about the surgery, recovery timeline, and expected costs</li>
                <li>An opportunity to ask questions and clear all doubts before deciding on any procedure</li>
              </ul>
            </div>

            {/* Section 7 — Recovery After Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Laparoscopic Surgery: What Really Happens
              </h2>

              <p className="text-gray-700 mb-4">
                One of the biggest reasons women prefer laparoscopic surgery is the recovery experience. Here is what a typical recovery journey looks like:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Most patients are able to walk within a few hours after surgery</li>
                <li>Hospital discharge usually happens within 24 hours for most laparoscopic procedures</li>
                <li>Pain is significantly lower than open surgery and is managed with mild medication</li>
                <li>Normal daily activities can often resume within 5–7 days</li>
                <li>Full recovery, including light work, typically takes 1–2 weeks compared to 4–6 weeks for open surgery</li>
                <li>Scarring is minimal, usually fading into barely visible marks within a few months</li>
                <li>Regular follow-up visits ensure healing is progressing well and any concerns are addressed early</li>
              </ul>
            </div>

            {/* Section 8 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Expert Laparoscopic Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing the right specialist can feel overwhelming, especially when your health and comfort are involved. Keep these points in mind:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Check the doctor's qualifications, fellowships and specialised training in laparoscopic gynaecology</li>
                <li>Look for hospitals or clinics equipped with 3D/4K laparoscopic systems, not outdated equipment</li>
                <li>Read genuine patient testimonials and reviews about the doctor's approach and outcomes</li>
                <li>Prefer a doctor who explains things clearly and involves you in decision-making rather than rushing you into surgery</li>
                <li>Ask about the doctor's experience with your specific condition, whether it is fibroids, cysts, endometriosis or infertility</li>
                <li>Consider whether the clinic offers complete continuity of care — consultation, surgery, and follow-up under one roof</li>
                <li>Notice whether the environment feels warm, respectful and women-centred, not purely transactional</li>
              </ul>
            </div>

            {/* Section 9 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Trusted Name for Laparoscopic Gynaecology in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Among the well-known names for advanced women's health care in the region, Dr. Priyanka Pachauri, through her clinic Dr. Priyanka Gynaec, has built a strong reputation as an expert laparoscopic gynaecologist in Moradabad. Her website, gynaecologistmoradabad.com, highlights a comprehensive range of services designed around the philosophy of &quot;Her Health First.&quot;
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>She offers a wide spectrum of laparoscopic procedures including cystectomy, myomectomy, hysterectomy, sacrocolpopexy, sterilisation and endometriosis surgery</li>
                <li>Her clinic is equipped with High-Definition 3D laparoscopic surgery systems, 3D/4D ultrasound machines, GERI time-lapse imaging incubators, and AI-powered semen analysis for fertility cases</li>
                <li>She also provides antenatal, postnatal, normal delivery, high-risk pregnancy care, and paediatric consultations, making her clinic a complete women-and-family health destination</li>
                <li>Patient testimonials on her website consistently highlight clear communication, comfort from the very first visit, and being guided step-by-step through treatment</li>
                <li>Her blog section actively educates patients on topics like PCOS and infertility, endometriosis recovery, and trimester-by-trimester pregnancy care, reflecting a strong patient-education approach</li>
                <li>The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, making it easily accessible within the city</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This combination of advanced technology, specialised laparoscopic expertise, and an empathetic, patient-first approach is exactly what women should look for when searching for an expert laparoscopic gynaecologist in Moradabad.
              </p>
            </div>

            {/* Section 10 — Why Early Consultation Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Early Consultation Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Many gynaecological conditions like fibroids, cysts and endometriosis develop silently and are only detected during a routine check-up or when symptoms become severe. Delaying consultation can lead to complications, reduced fertility, or the need for more invasive treatment later.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular or heavy periods should never be ignored, even if they seem &quot;normal&quot; for you</li>
                <li>Persistent pelvic pain, especially during periods or intercourse, needs proper evaluation</li>
                <li>Difficulty conceiving after a year of trying warrants a fertility-focused consultation</li>
                <li>Unexplained bloating or a feeling of pressure in the lower abdomen should be checked promptly</li>
                <li>Annual gynaec check-ups help catch issues early, when they are far easier and safer to treat with laparoscopy</li>
              </ul>
            </div>

            {/* Section 11 — Advanced Technology */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Advanced Technology That Sets Expert Laparoscopic Gynaecologists Apart
              </h2>

              <p className="text-gray-700 mb-4">
                Technology plays a huge role in the safety and success of laparoscopic gynaec surgery. When comparing clinics in Moradabad, it helps to know what advanced tools an expert setup should ideally offer:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>3D/4K Laparoscopic Systems:</strong> Give the surgeon a magnified, life-like view of the pelvic organs for far greater precision during surgery</li>
                <li><strong>3D/4D Ultrasound Machines:</strong> Allow highly detailed imaging of the uterus, ovaries, and, during pregnancy, the developing baby</li>
                <li><strong>Time-Lapse Embryo Monitoring (for fertility cases):</strong> Continuously tracks embryo development for better selection during IVF</li>
                <li><strong>AI-Based Imaging and Semen Analysis:</strong> Improves diagnostic accuracy for both female and male fertility factors</li>
                <li><strong>Integrated Electronic Records:</strong> Ensure your history, scans, and treatment plan are always accessible for continuity of care</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A clinic that combines this technology with genuine surgical expertise offers the safest and most comfortable experience for patients, whether the need is a simple diagnostic hysteroscopy or a complex laparoscopic hysterectomy.
              </p>
            </div>

            {/* Section 12 — Cost of Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Laparoscopic Gynaec Surgery in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Cost is a genuine concern for most families, and an honest, expert gynaecologist will always be transparent about it upfront. A few important points to understand:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic surgery costs vary depending on the specific procedure, complexity, and hospital stay required</li>
                <li>Though the initial cost may seem similar to or slightly higher than open surgery, the shorter recovery time often reduces overall indirect costs like lost workdays</li>
                <li>Many clinics offer package-based pricing that includes pre-surgery tests, the procedure itself, and follow-up visits</li>
                <li>Always ask for a clear cost breakdown during your consultation, before any procedure is finalised</li>
                <li>Insurance coverage may apply depending on your policy, so it is worth checking with the clinic's front desk in advance</li>
              </ul>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Get in Touch
              </h2>

              <p className="text-gray-700 mb-4">
                For appointments, treatment queries or urgent guidance, reach out through any of the following:
              </p>

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
                    <Shield size={20} className="text-black mt-1 shrink-0" />
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

                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: faq.a }} />
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