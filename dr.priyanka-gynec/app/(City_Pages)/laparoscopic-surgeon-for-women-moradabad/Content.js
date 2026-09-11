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

export default function LaparoscopicSurgeonForWomenMoradabad() {
  const faqs = [
    {
      q: "What is a laparoscopic surgeon for women?",
      a: "A gynaecologist with specialised fellowship training in minimally invasive keyhole surgery for female reproductive conditions.",
    },
    {
      q: "What surgeries does a laparoscopic surgeon for women perform?",
      a: "Cystectomy, myomectomy, hysterectomy, endometriosis excision, sterilisation, hysteroscopy, and prolapse repair.",
    },
    {
      q: "Is laparoscopic surgery safer than open surgery for women?",
      a: "Yes, it generally causes less blood loss, lower infection risk, and a much faster recovery.",
    },
    {
      q: "Will laparoscopic surgery affect my ability to have children?",
      a: "No, it is often preferred specifically because it helps preserve fertility and healthy reproductive tissue.",
    },
    {
      q: "How long is the hospital stay after laparoscopic surgery?",
      a: "Most patients are discharged within 24 hours of the procedure.",
    },
    {
      q: "Does Dr. Priyanka Pachauri perform laparoscopic hysterectomy in Moradabad?",
      a: "Yes, along with cystectomy, myomectomy, endometriosis surgery, and sacrocolpopexy.",
    },
    {
      q: "How soon can I return to work after surgery?",
      a: "Most women resume light routine activity within 5–7 days after laparoscopic surgery.",
    },
    {
      q: "What technology does the clinic use for surgery?",
      a: "High-Definition 3D laparoscopic systems along with 3D/4D ultrasound imaging.",
    },
    {
      q: "How can I book a consultation?",
      a: "You can call or message on WhatsApp at 8979670705 to schedule your appointment.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "At A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
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
                Laparoscopic Surgeon for Women in Moradabad: Safe, Skilled & Compassionate Surgical Care
              </h1>

              <p className="text-gray-700 mb-4">
                When a woman is told she needs surgery — for a fibroid, a cyst, endometriosis, or any other gynaecological condition — the very first question on her mind is usually about pain, scarring, and how long she will be away from her family and work. This is exactly where a specialised laparoscopic surgeon for women in Moradabad makes all the difference. Unlike traditional open surgery, laparoscopic (keyhole) surgery is designed specifically to reduce trauma to the body, speed up healing, and protect a woman's long-term reproductive health.
              </p>

              <p className="text-gray-700">
                This article explains who a laparoscopic surgeon for women really is, what surgeries they perform, why the right surgeon matters so much, and how to find trusted, advanced surgical care right here in Moradabad.
              </p>
            </div>

            {/* Section 2 — Who Is a Laparoscopic Surgeon for Women? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Is a Laparoscopic Surgeon for Women?
              </h2>

              <p className="text-gray-700 mb-4">
                A laparoscopic surgeon for women is a gynaecologist who has undergone additional, focused training in minimally invasive surgical techniques specific to female reproductive health. This is different from a general surgeon or even a standard gynaecologist without laparoscopic fellowship training.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Completes structured fellowship training exclusively in gynaecological laparoscopy, beyond a basic MBBS/MD or DGO</li>
                <li>Specialises in operating through small incisions using a camera and long, thin surgical instruments</li>
                <li>Understands the unique anatomy of the female reproductive system in far greater surgical depth</li>
                <li>Is trained to handle both simple procedures (like sterilisation) and complex ones (like deep endometriosis excision)</li>
                <li>Works closely with fertility specialists when surgery may affect a woman's ability to conceive</li>
                <li>Continuously updates skills through hands-on surgical practice and international training programmes</li>
                <li>Focuses not just on removing the problem, but on preserving healthy tissue, organs, and fertility wherever possible</li>
              </ul>
            </div>

            {/* Section 3 — Why Women Need a Specialised Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Specifically Need a Specialised Laparoscopic Surgeon
              </h2>

              <p className="text-gray-700 mb-4">
                Gynaecological surgery is not the same as general abdominal surgery. The female pelvis contains delicate, closely packed organs — the uterus, ovaries, fallopian tubes, bladder, and bowel — and even a small surgical error can affect fertility or long-term health. This is why choosing a dedicated laparoscopic surgeon for women matters so much:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Reduces the risk of accidental damage to nearby reproductive organs during surgery</li>
                <li>Improves the chances of preserving fertility, especially important for younger patients</li>
                <li>Offers a more accurate diagnosis during surgery itself, since the surgeon understands subtle signs of conditions like endometriosis</li>
                <li>Allows for same-sitting treatment — diagnosis and correction often happen in a single procedure</li>
                <li>Provides better management of complications specific to gynaecological anatomy</li>
                <li>Ensures post-surgical hormonal and reproductive health is factored into every surgical decision</li>
                <li>Builds patient trust through a surgeon who regularly performs these exact procedures, not occasional ones</li>
              </ul>
            </div>

            {/* Section 4 — Surgical Procedures Performed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Surgical Procedures Performed by a Laparoscopic Surgeon for Women
              </h2>

              <p className="text-gray-700 mb-4">
                A skilled laparoscopic surgeon for women in Moradabad is equipped to perform a wide range of gynaecological surgeries through keyhole methods, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Laparoscopic Cystectomy:</strong> Removal of ovarian cysts while carefully preserving healthy ovarian tissue</li>
                <li><strong>Laparoscopic Myomectomy:</strong> Removal of uterine fibroids without removing the uterus, ideal for women who wish to conceive later</li>
                <li><strong>Laparoscopic Hysterectomy:</strong> Complete or partial removal of the uterus for conditions like severe fibroids, adenomyosis, or abnormal bleeding</li>
                <li><strong>Endometriosis Excision Surgery:</strong> Precise removal of endometrial tissue growing outside the uterus to relieve chronic pain</li>
                <li><strong>Sacrocolpopexy:</strong> Advanced repair of uterine or vaginal vault prolapse through keyhole surgery</li>
                <li><strong>Laparoscopic Sterilisation (Tubal Ligation):</strong> A safe, quick, permanent contraception procedure done as day care</li>
                <li><strong>Diagnostic and Operative Hysteroscopy:</strong> Investigation and treatment of uterine polyps, fibroids, or unexplained bleeding</li>
                <li><strong>Ectopic Pregnancy Management:</strong> Emergency laparoscopic surgery to safely manage pregnancies outside the uterus</li>
              </ul>
            </div>

            {/* Section 5 — Advantage of Keyhole Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Advantage of Keyhole Surgery Over Traditional Open Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                For women weighing their surgical options, the difference between laparoscopic and open surgery is significant and directly affects daily life after treatment:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Incisions of just 5–10 mm compared to one large 10–15 cm cut in open surgery</li>
                <li>Noticeably lower blood loss during the operation</li>
                <li>Reduced risk of surgical site infection due to the small wound area</li>
                <li>Hospital discharge typically within 24 hours instead of 4–5 days</li>
                <li>Return to light routine activity within about a week instead of 4–6 weeks</li>
                <li>Far less visible scarring, which matters greatly to most women emotionally and physically</li>
                <li>Lower dependency on strong painkillers after surgery</li>
                <li>Better cosmetic outcome alongside equally effective, and often more precise, treatment</li>
              </ul>
            </div>

            {/* Section 6 — What Happens Before, During and After Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens Before, During and After Your Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding the full surgical process can ease a lot of anxiety before your procedure:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Pre-Surgery Evaluation:</strong> Blood tests, ultrasound, and a fitness assessment to confirm you are ready for anaesthesia</li>
                <li><strong>Detailed Counselling:</strong> Your surgeon explains the exact procedure, risks, benefits, and expected recovery timeline</li>
                <li><strong>Day of Surgery:</strong> Performed under general anaesthesia, usually lasting between 30 minutes and a couple of hours</li>
                <li><strong>Immediate Recovery:</strong> Most women are able to sit up and walk within a few hours after the procedure</li>
                <li><strong>Discharge:</strong> Typically same-day or next-day, with clear home-care instructions provided</li>
                <li><strong>Follow-Up Visits:</strong> Scheduled check-ups to monitor healing, review any biopsy or lab reports, and plan further care</li>
                <li><strong>Long-Term Follow-Up:</strong> Especially important for fertility-related surgeries, to track recovery and future family planning</li>
              </ul>
            </div>

            {/* Section 7 — How to Choose the Right Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Laparoscopic Surgeon for Women in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                With several clinics now offering laparoscopic services, it is worth being a little selective before committing to surgery. Consider the following:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Verify the surgeon's specific fellowship and hands-on experience in gynaecological laparoscopy</li>
                <li>Ask how many similar procedures the surgeon has personally performed</li>
                <li>Check whether the clinic uses updated 3D/4K laparoscopic technology rather than older systems</li>
                <li>Look for honest, unhurried communication about your diagnosis and all available treatment options</li>
                <li>Read genuine patient reviews and testimonials about comfort, communication, and surgical outcomes</li>
                <li>Prefer a surgeon who also manages your pre- and post-operative care personally, not just the operation itself</li>
                <li>Notice whether your questions and concerns are answered patiently, without being rushed</li>
              </ul>
            </div>

            {/* Section 8 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri – A Dedicated Laparoscopic Surgeon for Women in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, through her clinic Dr. Priyanka Gynaec, is widely recognised as a dedicated laparoscopic surgeon for women in Moradabad. Her official website, gynaecologistmoradabad.com, gives a clear picture of her surgical focus and patient-centred philosophy:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Performs a comprehensive range of laparoscopic surgeries — cystectomy, myomectomy, hysterectomy, sacrocolpopexy, sterilisation, and endometriosis excision</li>
                <li>Uses High-Definition 3D laparoscopic surgery equipment along with 3D/4D ultrasound machines for accurate pre-surgical planning</li>
                <li>Also offers GERI time-lapse imaging and AI-powered semen analysis for couples facing fertility challenges</li>
                <li>Extends care beyond surgery, covering antenatal, postnatal, normal delivery, high-risk pregnancy, and paediatric services</li>
                <li>Patient testimonials consistently mention feeling comfortable and clearly informed from the very first consultation</li>
                <li>Runs an active, educational blog covering topics like endometriosis surgery recovery and PCOS-related infertility</li>
                <li>Practises under the philosophy &quot;Her Health First,&quot; placing patient comfort and long-term outcomes above everything else</li>
                <li>Based centrally in Moradabad, making advanced surgical care easily accessible without needing to travel to bigger cities</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This combination of specialised surgical training, modern 3D technology, and a genuinely patient-first approach is exactly what women should look for in a laparoscopic surgeon.
              </p>
            </div>

            {/* Section 9 — Symptoms Requiring Evaluation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Symptoms That May Require a Laparoscopic Surgeon's Evaluation
              </h2>

              <p className="text-gray-700 mb-4">
                Many women delay surgical consultation simply because they are unsure whether their symptoms are serious. Do not ignore the following signs:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Heavy, prolonged, or irregular menstrual bleeding that disrupts daily life</li>
                <li>Chronic pelvic pain, particularly during periods, intercourse, or bowel movements</li>
                <li>A palpable lump or persistent bloating in the lower abdomen</li>
                <li>Difficulty conceiving despite a year of regular, unprotected attempts</li>
                <li>Sudden, severe abdominal pain, which may indicate an emergency like a ruptured cyst or ectopic pregnancy</li>
                <li>Recurrent miscarriages, which may point to a structural uterine issue requiring surgical correction</li>
              </ul>
            </div>

            {/* Section 10 — Recovery Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery Tips After Laparoscopic Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Following your surgeon's post-operative advice closely supports faster, smoother healing:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Take prescribed medications exactly as directed, including antibiotics and pain relief</li>
                <li>Avoid lifting heavy objects or doing strenuous exercise for at least 2–3 weeks</li>
                <li>Keep incision sites clean and dry to prevent infection</li>
                <li>Eat a balanced, fibre-rich diet and stay well hydrated to avoid constipation</li>
                <li>Rest adequately but try to move around gently to support circulation and healing</li>
                <li>Attend every scheduled follow-up, even if you feel completely fine</li>
                <li>Contact your surgeon immediately if you notice fever, heavy bleeding, or worsening pain</li>
              </ul>
            </div>

            {/* Section 11 — Common Questions Women Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Questions Women Ask Before Choosing Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Before agreeing to any surgical procedure, most women naturally have a few underlying concerns. A trustworthy laparoscopic surgeon will always address these openly:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Whether medication or a non-surgical option could resolve the issue first</li>
                <li>What the realistic success rate is for their specific condition</li>
                <li>How the surgery could affect future pregnancies or hormonal balance</li>
                <li>What the total cost involves, including hospital stay, anaesthesia, and follow-up visits</li>
                <li>What signs of complication to watch for once they return home</li>
                <li>Whether a second opinion is welcome before finalising the decision</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A good laparoscopic surgeon for women never rushes a patient into surgery and always welcomes these questions as part of informed, respectful care.
              </p>
            </div>

            {/* Section 12 — Why Local Access Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Local Access to a Skilled Laparoscopic Surgeon Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Travelling long distances for surgery, especially for something as personal as gynaecological treatment, adds unnecessary stress at an already anxious time. Having a qualified laparoscopic surgeon for women available locally in Moradabad offers real advantages:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Saves significant travel time, cost, and logistical stress for the patient and family</li>
                <li>Makes it easier to attend pre-surgery tests and post-surgery follow-ups without long journeys</li>
                <li>Allows family members to stay close and involved throughout the treatment process</li>
                <li>Builds a long-term relationship with a surgeon who understands your complete medical history</li>
                <li>Reduces delays in starting treatment, which matters greatly for time-sensitive conditions</li>
              </ul>
            </div>

            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact and Appointment Details
              </h2>

              <p className="text-gray-700 mb-4">
                For appointments, treatment queries, or to discuss your symptoms confidentially, reach out through any of the following:
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
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