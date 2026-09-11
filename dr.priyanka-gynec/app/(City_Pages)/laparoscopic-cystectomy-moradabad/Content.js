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

export default function LaparoscopicCystectomyMoradabad() {
  const faqs = [
    {
      q: "Will removing an ovarian cyst affect my fertility?",
      a: "When performed carefully, laparoscopic cystectomy preserves healthy ovarian tissue and fertility.",
    },
    {
      q: "Is laparoscopic cystectomy performed under general anesthesia?",
      a: "Yes, the procedure is typically performed under general anesthesia for patient comfort.",
    },
    {
      q: "What types of ovarian cysts require laparoscopic removal?",
      a: "Dermoid cysts, endometriomas, cystadenomas, and persistent complex cysts often require surgery.",
    },
    {
      q: "How long does recovery take after ovarian cystectomy?",
      a: "Most women return to normal activity within one to two weeks after surgery.",
    },
    {
      q: "Can ovarian cysts recur after being removed?",
      a: "Recurrence is possible, which is why regular follow up and monitoring is recommended.",
    },
    {
      q: "Will I need to stay overnight in the hospital after cystectomy?",
      a: "Most patients are discharged within twenty four hours, depending on individual recovery.",
    },
    {
      q: "Does Dr. Priyanka Pachauri specialize in laparoscopic ovarian surgery?",
      a: "Yes, her website lists laparoscopic cystectomy among her core gynaecological specialities.",
    },
    {
      q: "What qualifications does Dr. Priyanka Pachauri hold?",
      a: "She holds an MS in Obstetrics and Gynaecology, FMAS, and an advanced infertility fellowship.",
    },
    {
      q: "Where is Dr. Priyanka Pachauri's clinic located in Moradabad?",
      a: "Her clinic is located in Gandhi Nagar, Moradabad, Uttar Pradesh.",
    },
    {
      q: "How can I book a consultation for ovarian cyst evaluation?",
      a: "You can call or message the clinic directly through the contact details on the website.",
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
                Laparoscopic Cystectomy In Moradabad, A Safe Path To Ovarian Cyst Removal
              </h1>

              <p className="text-gray-700 mb-4">
                Ovarian cysts are extremely common among women, and while many resolve on their own without any intervention, some cysts grow large, cause pain, or carry a risk of complications that make surgical removal necessary. For women in Moradabad searching for a safe, minimally invasive way to treat ovarian cysts, laparoscopic cystectomy offers a modern surgical option that removes the cyst while protecting healthy ovarian tissue and long term fertility, giving patients a faster, more comfortable path back to their normal daily routine.
              </p>

              <p className="text-gray-700">
                This guide covers everything you need to know about laparoscopic cystectomy in Moradabad, including how the procedure works, who needs it, what to expect before and after surgery, and what recovery typically looks like for most patients.
              </p>
            </div>

            {/* Section 2 — What Is A Laparoscopic Cystectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is A Laparoscopic Cystectomy
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic cystectomy is a keyhole surgical procedure used to remove ovarian cysts through small incisions instead of a large abdominal cut.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The surgeon uses a thin camera called a laparoscope to view the ovary clearly</li>
                <li>Small instruments are inserted through tiny incisions to remove the cyst</li>
                <li>The cyst wall is carefully separated from surrounding healthy ovarian tissue</li>
                <li>The goal is to remove the cyst completely while preserving ovarian function</li>
                <li>The procedure is typically performed under general anesthesia</li>
                <li>Most patients are able to go home within a day or two of the surgery</li>
              </ul>
            </div>

            {/* Section 3 — Why Choose Laparoscopic Surgery Over Open Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Laparoscopic Surgery Over Open Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Traditional open surgery involves a larger abdominal incision, longer recovery, and a higher chance of visible scarring. Laparoscopic cystectomy addresses these concerns directly.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Incisions are typically under one centimeter and heal with minimal scarring</li>
                <li>Blood loss during the procedure is significantly lower than open surgery</li>
                <li>Post operative pain is generally milder and easier to manage</li>
                <li>Hospital stays are much shorter, often limited to a single day</li>
                <li>Patients usually return to light daily activity much sooner</li>
                <li>The risk of infection is generally lower due to smaller incision sites</li>
                <li>Surgeons get a magnified, high definition view of the ovarian tissue</li>
              </ul>
            </div>

            {/* Section 4 — Types Of Ovarian Cysts That May Require Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types Of Ovarian Cysts That May Require Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Not every ovarian cyst needs surgical removal, but certain types are more likely to require a laparoscopic approach.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Dermoid cysts, which contain tissue such as hair, skin, or fat</li>
                <li>Endometriomas, often called chocolate cysts, linked to endometriosis</li>
                <li>Cystadenomas, which are fluid filled growths on the ovarian surface</li>
                <li>Persistent simple cysts that do not resolve after several menstrual cycles</li>
                <li>Complex cysts that show irregular features on ultrasound imaging</li>
                <li>Cysts associated with sudden pain due to torsion or possible rupture</li>
              </ul>
            </div>

            {/* Section 5 — Signs You May Need To Consult A Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs You May Need To Consult A Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Recognizing the early signs of an ovarian cyst can help you seek timely evaluation and avoid unnecessary complications later.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Persistent dull ache or sharp pain in the lower abdomen or pelvis</li>
                <li>Sudden, severe abdominal pain accompanied by nausea or vomiting</li>
                <li>Irregular menstrual cycles or unusually heavy periods</li>
                <li>Pain or discomfort during intercourse</li>
                <li>A constant feeling of pelvic heaviness or bloating</li>
                <li>An ultrasound report showing a persistent cyst larger than five centimeters</li>
              </ul>

              <p className="text-gray-700">
                If you notice any of these symptoms, scheduling a consultation with a qualified gynaecologist in Moradabad is strongly recommended.
              </p>
            </div>

            {/* Section 6 — How The Laparoscopic Cystectomy Procedure Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How The Laparoscopic Cystectomy Procedure Works
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the general steps of the procedure can help patients feel more prepared and informed before their surgery.
              </p>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Initial Consultation</strong>
                  <br />
                  Symptoms, ultrasound reports, and medical history are reviewed
                </li>
                <li>
                  <strong>Pre Surgical Evaluation</strong>
                  <br />
                  Blood tests and imaging confirm the cyst type and size
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is performed under general anesthesia for patient comfort
                </li>
                <li>
                  <strong>Laparoscopic Access</strong>
                  <br />
                  Small incisions are made to insert the camera and instruments
                </li>
                <li>
                  <strong>Cyst Removal</strong>
                  <br />
                  The cyst wall is carefully separated from healthy ovarian tissue
                </li>
                <li>
                  <strong>Pathology Review</strong>
                  <br />
                  Removed tissue is sent for histopathological examination
                </li>
                <li>
                  <strong>Recovery And Discharge</strong>
                  <br />
                  Most patients are monitored briefly before going home
                </li>
              </ol>
            </div>

            {/* Section 7 — Benefits Of Laparoscopic Cystectomy For Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits Of Laparoscopic Cystectomy For Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                One of the biggest concerns for many women considering ovarian cyst surgery is the impact on future fertility. A carefully performed laparoscopic cystectomy is designed with this concern in mind.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Micro dissection techniques help protect the egg reserve during surgery</li>
                <li>Only the cyst tissue is removed, preserving as much healthy ovary as possible</li>
                <li>Reduced tissue trauma compared to open surgical techniques</li>
                <li>Faster healing allows the ovary to resume normal function sooner</li>
                <li>Lower risk of scar tissue formation around the reproductive organs</li>
                <li>Suitable for women planning pregnancy after cyst removal, when medically appropriate</li>
              </ul>
            </div>

            {/* Section 8 — What To Expect During Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What To Expect During Recovery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery experiences can vary from patient to patient, but laparoscopic cystectomy generally allows for a smoother and faster return to daily life.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Most patients are discharged within twenty four hours of surgery</li>
                <li>Mild discomfort near the incision sites is common in the first few days</li>
                <li>Light walking is usually encouraged soon after surgery to support healing</li>
                <li>Most women can resume normal daily activities within one to two weeks</li>
                <li>Strenuous activity and heavy lifting are typically avoided for a short period</li>
                <li>A follow up visit is usually scheduled to review the pathology results</li>
              </ul>
            </div>

            {/* Section 9 — Why Choose Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Pachauri For Laparoscopic Cystectomy In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing the right surgeon for ovarian cyst removal matters just as much as choosing the right procedure. Dr. Priyanka Pachauri is an experienced obstetrician, gynaecologist, and IVF specialist who co-leads Shree Advanced Urogynae Clinic and serves as a consultant at Ujala Cygnus BrightStar Hospital in Moradabad, bringing advanced 3D laparoscopic surgical skill together with a genuinely compassionate approach to women's reproductive health.
              </p>
            </div>

            {/* Section 10 — What Makes 3D Laparoscopic Technology Different */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes 3D Laparoscopic Technology Different
              </h2>

              <p className="text-gray-700 mb-4">
                Advanced laparoscopic systems use three dimensional visualization to give surgeons a clearer, more precise view of the surgical area, which can make a meaningful difference during delicate ovarian procedures.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Depth perception is significantly improved compared to standard 2D laparoscopy</li>
                <li>Fine structures like ovarian tissue and blood vessels are easier to identify</li>
                <li>Greater precision helps protect healthy tissue during cyst removal</li>
                <li>Reduced surgical time can lower overall anesthesia exposure</li>
                <li>Better visualization supports more accurate handling of complex cysts</li>
              </ul>
            </div>

            {/* Section 11 — Common Concerns Women Have Before Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Women Have Before Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                It is completely normal to have questions and concerns before undergoing any surgical procedure, and addressing them early with your doctor helps reduce anxiety and build confidence.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Whether the surgery will affect the ability to conceive in the future</li>
                <li>How much pain to expect during recovery</li>
                <li>Whether the cyst could be cancerous or require further treatment</li>
                <li>How soon normal activities and work can be resumed</li>
                <li>Whether the cyst is likely to return after removal</li>
                <li>What type of anesthesia will be used during the procedure</li>
              </ul>

              <p className="text-gray-700">
                Discussing these concerns openly during a consultation helps patients feel informed and confident about their treatment plan.
              </p>
            </div>

            {/* Section 12 — Who Should Consider A Laparoscopic Cystectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Consider A Laparoscopic Cystectomy
              </h2>

              <p className="text-gray-700 mb-4">
                This procedure is generally considered for women experiencing specific symptoms or diagnostic findings related to ovarian cysts, and a proper evaluation helps confirm whether it is the right choice.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Women with cysts causing persistent pain or discomfort</li>
                <li>Women with large or complex cysts identified through ultrasound</li>
                <li>Women experiencing symptoms of possible ovarian torsion</li>
                <li>Women planning future pregnancy who want fertility preserving treatment</li>
                <li>Women with a family history of endometriosis or related conditions</li>
                <li>Women advised by their gynaecologist to undergo surgical evaluation</li>
              </ul>
            </div>

            {/* Section 13 — Pre Surgery Preparation Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pre Surgery Preparation Tips
              </h2>

              <p className="text-gray-700 mb-4">
                A little preparation before surgery helps ensure the procedure and recovery go as smoothly as possible.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Complete all recommended blood tests and imaging before the scheduled date</li>
                <li>Inform the doctor about any existing medications or allergies</li>
                <li>Follow fasting instructions given by the clinic before general anesthesia</li>
                <li>Arrange for someone to accompany you home after the procedure</li>
                <li>Wear comfortable, loose fitting clothing on the day of surgery</li>
                <li>Keep a list of questions ready to discuss during the pre surgical visit</li>
                <li>Plan for a few days of rest immediately following the procedure</li>
              </ul>
            </div>

            {/* Section 14 — Post Surgery Care Guidelines */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Post Surgery Care Guidelines
              </h2>

              <p className="text-gray-700 mb-4">
                Following simple care guidelines after surgery supports faster healing and reduces the chance of complications.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keep the incision sites clean and dry as advised by your doctor</li>
                <li>Avoid heavy lifting or strenuous exercise during the initial recovery period</li>
                <li>Take prescribed medication exactly as directed by your gynaecologist</li>
                <li>Watch for signs of fever, unusual swelling, or excessive discharge</li>
                <li>Attend all scheduled follow up appointments for proper monitoring</li>
                <li>Gradually resume normal activity based on how your body responds</li>
                <li>Reach out to your doctor promptly if you notice any unusual symptoms</li>
              </ul>
            </div>

            {/* Section 15 — Why Timely Treatment Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Timely Treatment Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Delaying evaluation or treatment of a persistent ovarian cyst can sometimes lead to complications that are easier to avoid with early intervention and proper medical guidance.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Large cysts carry a higher risk of rupture or ovarian torsion</li>
                <li>Ongoing pain can affect daily activities and overall quality of life</li>
                <li>Early diagnosis allows for less invasive treatment in many cases</li>
                <li>Timely surgery can help preserve ovarian function more effectively</li>
                <li>Regular monitoring helps track cyst behavior before symptoms worsen</li>
              </ul>
            </div>

            {/* Section 16 — Questions To Ask Your Gynaecologist Before Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions To Ask Your Gynaecologist Before Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Asking the right questions during your consultation helps you feel confident and fully informed about your treatment plan.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What type of ovarian cyst do I have based on my imaging results</li>
                <li>Is laparoscopic surgery the most suitable option for my specific case</li>
                <li>How will this procedure affect my future fertility plans</li>
                <li>What does the recovery timeline look like for someone in my situation</li>
                <li>Are there any risks specific to my medical history I should know about</li>
                <li>How soon after surgery can I resume work and daily routines</li>
                <li>What follow up care will be needed after the procedure</li>
              </ul>

              <p className="text-gray-700">
                Having clear answers to these questions before surgery helps set realistic expectations and reduces unnecessary worry.
              </p>
            </div>

            {/* Section 17 — Final Thoughts On Laparoscopic Cystectomy In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Final Thoughts On Laparoscopic Cystectomy In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Ovarian cysts can range from harmless to concerning, and the right treatment approach depends entirely on individual symptoms, cyst type, and overall health. Laparoscopic cystectomy offers a minimally invasive, fertility conscious way to address ovarian cysts safely, and consulting an experienced gynaecologist is always the right first step toward understanding your specific treatment options and making an informed decision about your reproductive health.
              </p>
            </div>

            {/* Section 18 — Contact Details */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact Details
              </h2>

              <p className="text-black mb-6">
                For appointments or queries related to laparoscopic cystectomy in Moradabad, you can reach Dr. Priyanka Pachauri through the following details.
              </p>

              <div className="space-y-4 mb-6">
                {/* Clinic Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad,
                      Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:8979670705" className="hover:underline">
                        +91 8979670705
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
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

            {/* Section 19 — FAQs */}
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