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

export default function BestLaparoscopicGynaecologistMoradabad() {
  const faqs = [
    {
      q: "What is laparoscopic gynaecological surgery?",
      a: "It is minimally invasive &quot;keyhole&quot; surgery using a camera and small incisions to diagnose and treat conditions like cysts, fibroids, and endometriosis, avoiding large abdominal cuts.",
    },
    {
      q: "How is laparoscopic surgery different from open surgery?",
      a: "Laparoscopy uses tiny incisions and a camera for guidance, resulting in less pain, minimal scarring, and much faster recovery than traditional open surgery.",
    },
    {
      q: "Is 3D laparoscopy better than 2D laparoscopy?",
      a: "Yes, 3D laparoscopy adds depth perception, giving surgeons greater precision and safety around delicate pelvic structures compared to standard 2D imaging.",
    },
    {
      q: "What conditions can be treated with laparoscopic surgery?",
      a: "Ovarian cysts, uterine fibroids, endometriosis, uterine prolapse, tubal blockages, and conditions requiring hysterectomy can all be treated laparoscopically.",
    },
    {
      q: "How long is the hospital stay after laparoscopic surgery?",
      a: "Most laparoscopic gynaecological procedures require only a day-care stay or 24–48 hours in the hospital, depending on the specific surgery performed.",
    },
    {
      q: "When can I return to normal activities after surgery?",
      a: "Most patients resume light daily routines within 5 to 7 days, with full activity typically cleared within 2 to 4 weeks.",
    },
    {
      q: "Will laparoscopic surgery affect my fertility?",
      a: "When performed by an experienced surgeon, laparoscopy is designed to preserve healthy tissue and fertility, often being the preferred option for women planning future pregnancies.",
    },
    {
      q: "Will I have visible scars after laparoscopic surgery?",
      a: "No, incisions are only 5–10mm, so scarring is minimal and usually barely noticeable once healed.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering 3D laparoscopic surgery, fertility treatment, and pregnancy care.",
    },
    {
      q: "What services does Dr. Priyanka Pachauri's clinic offer?",
      a: "Her clinic offers laparoscopic gynaecology, fertility and IVF treatment, antenatal and pregnancy care, normal delivery support, hysteroscopy, and paediatric care.",
    },
    {
      q: "How can I book a consultation with a laparoscopic gynaecologist in Moradabad?",
      a: "You can call, message on WhatsApp, or visit the clinic's official website to schedule a consultation and discuss your specific condition.",
    },
    {
      q: "Is laparoscopic surgery safe for treating fibroids and cysts?",
      a: "Yes, when performed by a trained specialist, laparoscopic myomectomy and cystectomy are safe, effective, and associated with faster recovery than open surgery.",
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
                Best Laparoscopic Gynaecologist in Moradabad: A Complete Guide for Women Seeking Safe, Minimally Invasive Care
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing the right doctor for gynaecological surgery is one of the most important healthcare decisions a woman can make. Whether it is a troublesome ovarian cyst, painful fibroids, stubborn endometriosis, or a uterine condition that needs surgical correction, the method of surgery matters just as much as the surgeon's skill. Over the last decade, laparoscopic (keyhole) surgery has completely changed the way gynaecological problems are treated — replacing large, painful abdominal incisions with tiny cuts, shorter hospital stays, and dramatically faster recovery.
              </p>

              <p className="text-gray-700">
                If you are in Moradabad and searching for the best laparoscopic gynaecologist in Moradabad, this guide will walk you through what laparoscopic gynaecology actually involves, why it is considered the gold standard today, what conditions it treats, and how to choose a surgeon you can trust with confidence.
              </p>
            </div>

            {/* Section 2 — What Is Laparoscopic Gynaecological Surgery? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Laparoscopic Gynaecological Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery, often called &quot;keyhole surgery&quot; or minimally invasive surgery, is a technique where the surgeon operates through very small incisions — typically 5 to 10 millimetres — instead of the long cuts used in traditional open surgery. A thin tube fitted with a high-definition camera, called a laparoscope, is inserted through one of these tiny openings. This camera transmits a magnified, high-resolution image of the pelvic organs onto a monitor, allowing the surgeon to see internal structures with remarkable clarity. Specialised surgical instruments are then passed through the other small incisions to carry out the actual procedure — removing a cyst, correcting a fibroid, treating endometriosis, or performing a hysterectomy — all without opening up the abdomen.
              </p>

              <p className="text-gray-700 mb-4">
                Modern clinics increasingly use 3D laparoscopy, which adds depth perception to the image the surgeon sees. Traditional 2D laparoscopy can make it harder to judge how far or close an instrument is from delicate tissue, whereas 3D visualisation gives the same depth cues a surgeon would get during open surgery, but at a much higher magnification. This translates into greater surgical precision, safer handling of nerves and blood vessels, and better preservation of healthy tissue and fertility potential.
              </p>
            </div>

            {/* Section 3 — Why Laparoscopic Surgery Is Superior */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Laparoscopic Surgery Is Considered Superior to Open Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Patients often ask why doctors recommend laparoscopy over the traditional &quot;open&quot; approach. The answer lies in a combination of clinical outcomes and quality-of-life benefits that are well documented:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Minimal scarring:</strong> Because incisions are only a few millimetres long, scars are barely visible once healed, compared to the long vertical or horizontal scars left by open surgery.</li>
                <li><strong>Significantly less pain:</strong> Smaller incisions mean less tissue trauma, which translates into a marked reduction in post-operative pain and a lower dependency on strong painkillers.</li>
                <li><strong>Shorter hospital stay:</strong> Many laparoscopic gynaecological procedures are performed as day-care surgeries or require only a 24–48 hour hospital stay, compared to 5–7 days for open surgery.</li>
                <li><strong>Faster return to normal life:</strong> Most patients are able to resume their routine activities within 5 to 7 days, instead of the 4–6 weeks typically needed after open surgery.</li>
                <li><strong>Lower risk of infection and adhesions:</strong> Smaller wounds mean a reduced risk of surgical site infections, and the minimally invasive approach lowers the chances of internal scar tissue (adhesions) forming — a major benefit for women who wish to preserve their fertility.</li>
                <li><strong>Better preservation of pelvic anatomy:</strong> High-definition 3D optics allow the surgeon to work with precision around delicate structures like the fallopian tubes, ovaries, and nerves, which is especially important for women planning future pregnancies.</li>
              </ul>
            </div>

            {/* Section 4 — Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Gynaecological Conditions Treated With Laparoscopy
              </h2>

              <p className="text-gray-700 mb-4">
                A skilled laparoscopic gynaecologist can address a wide spectrum of conditions using minimally invasive techniques. Some of the most common include:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Ovarian Cysts (Laparoscopic Cystectomy)
                  </h3>
                  <p className="text-gray-700">
                    Ovarian cysts are fluid-filled sacs that form on or inside the ovary. While many cysts resolve on their own, some cause persistent pain, grow large, or raise concern on ultrasound. Laparoscopic cystectomy allows the surgeon to remove the cyst while carefully preserving healthy ovarian tissue, which is critical for maintaining fertility and hormonal balance.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Uterine Fibroids (Laparoscopic Myomectomy)
                  </h3>
                  <p className="text-gray-700">
                    Fibroids are non-cancerous growths in the uterine wall that can cause heavy periods, pelvic pain, pressure symptoms, and sometimes infertility. A laparoscopic myomectomy removes the fibroids while preserving the uterus, which is particularly important for women who wish to conceive in the future.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus, often causing severe pelvic pain, painful periods, and difficulty conceiving. Laparoscopic excision allows precise removal of endometriotic tissue with far better visualisation than open surgery, offering long-term pain relief and improved fertility outcomes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Uterine Prolapse (Laparoscopic Sacrocolpopexy)
                  </h3>
                  <p className="text-gray-700">
                    When the pelvic floor weakens, the uterus or vaginal vault can descend from its normal position, causing discomfort and urinary symptoms. Laparoscopic sacrocolpopexy is an advanced keyhole technique to correct this prolapse with strong, durable support and minimal downtime.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Hysterectomy
                  </h3>
                  <p className="text-gray-700">
                    When a hysterectomy (removal of the uterus) is medically necessary — for reasons such as large fibroids, adenomyosis, or abnormal bleeding that hasn't responded to other treatments — a Total Laparoscopic Hysterectomy (TLH) avoids the long recovery of open abdominal hysterectomy and gets patients back on their feet far sooner.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Tubal Blockages and Infertility-Related Adhesions
                  </h3>
                  <p className="text-gray-700">
                    For couples struggling to conceive, laparoscopy can both diagnose and treat pelvic adhesions or tubal blockages that may be preventing pregnancy, often combined with a chromopertubation (dye test) to check tubal patency.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Permanent Sterilisation
                  </h3>
                  <p className="text-gray-700">
                    Laparoscopic tubal ligation is a safe, quick day-care procedure for couples who have decided on permanent contraception.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    8. Diagnostic Hysteroscopy and Polyp Removal
                  </h3>
                  <p className="text-gray-700">
                    Hysteroscopy, a related endoscopic technique, allows doctors to examine the inside of the uterine cavity and remove polyps without any external incision at all — useful for investigating abnormal bleeding or unexplained infertility.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — What Makes a Gynaecologist the "Best"? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Gynaecologist the &quot;Best&quot; for Laparoscopic Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Because laparoscopic surgery is technically demanding, the skill and experience of the surgeon make a substantial difference to outcomes. When evaluating a laparoscopic gynaecologist in Moradabad, consider the following factors:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Formal Training and Fellowships
                  </h3>
                  <p className="text-gray-700">
                    Look for qualifications such as FMAS (Fellow of Minimal Access Surgery) or an advanced fellowship in infertility and laparoscopic surgery, in addition to the standard MS/MD in Obstetrics & Gynaecology. These credentials indicate dedicated, hands-on training in minimally invasive techniques beyond the standard gynaecology curriculum.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Access to Modern 3D/4K Technology
                  </h3>
                  <p className="text-gray-700">
                    Ask whether the clinic uses high-definition 3D laparoscopic systems. The quality of the imaging equipment directly affects surgical precision, operative time, and safety.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Range of Procedures Performed
                  </h3>
                  <p className="text-gray-700">
                    A gynaecologist who regularly performs the full spectrum of laparoscopic procedures — cystectomy, myomectomy, hysterectomy, endometriosis excision, and prolapse repair — is likely to have deeper procedural experience than one who only occasionally performs keyhole surgery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. A Fertility-Preserving Philosophy
                  </h3>
                  <p className="text-gray-700">
                    For women of reproductive age, it matters whether the surgeon approaches every procedure with fertility preservation in mind, choosing techniques that protect ovarian reserve and uterine integrity wherever medically possible.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Transparent, Compassionate Communication
                  </h3>
                  <p className="text-gray-700">
                    Beyond technical skill, the best gynaecologists take time to explain the diagnosis, the available options, and what to expect before and after surgery — reducing anxiety and helping patients make informed decisions about their own bodies.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Post-Operative Support
                  </h3>
                  <p className="text-gray-700">
                    Continuity of care — from the first consultation, through surgery, to follow-up visits — helps ensure complications are caught early and recovery stays on track.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — A Leading Laparoscopic Gynaecologist in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Among the gynaecologists practising in Moradabad, Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology, FMAS, with an Advanced Infertility Fellowship) has built a strong reputation for combining advanced laparoscopic expertise with genuinely patient-centred care. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital, offering a full range of laparoscopic gynaecological services under one roof.
              </p>

              <p className="text-gray-700 mb-4">
                Her practice, detailed on her official website <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, is built around what she describes as a &quot;Her Health First&quot; philosophy — placing patient comfort, informed choice, and individualised care at the centre of every treatment plan. The clinic's technology stack includes high-definition 3D laparoscopic surgical systems, a 3D/4D ultrasound machine, GERI time-lapse embryo imaging for IVF, and AI-assisted semen analysis for male fertility assessment — reflecting an investment in the same advanced tools used at leading urban fertility and surgical centres.
              </p>

              <p className="text-gray-700 mb-4">
                On the surgical side, Dr. Priyanka's laparoscopic practice covers diagnostic laparoscopy and chromopertubation for infertility evaluation, laparoscopic excision of endometriosis and ovarian endometriomas, laparoscopic myomectomy for fibroids, laparoscopic ovarian cystectomy and adhesiolysis, total laparoscopic hysterectomy, and laparoscopic sacrocolpopexy for pelvic organ prolapse — essentially the complete range of procedures a woman might need for complex gynaecological conditions, all performed through keyhole incisions.
              </p>

              <p className="text-gray-700 mb-4">
                Beyond laparoscopy, her clinic also provides fertility and IVF treatment, antenatal and postnatal care, high-risk pregnancy management, normal delivery support, hysteroscopic procedures, and paediatric care — making it a comprehensive women's and family health centre rather than a single-procedure practice. The website also maintains a regularly updated blog covering topics such as PCOS and infertility, endometriosis treatment, and trimester-by-trimester pregnancy care, which reflects an ongoing effort toward patient education alongside clinical treatment.
              </p>
            </div>

            {/* Section 7 — What to Expect at First Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect at Your First Laparoscopic Gynaecology Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                If you are considering laparoscopic surgery, your first visit typically involves:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A detailed history and symptom review — understanding your menstrual history, pain patterns, fertility goals, and any previous treatments.</li>
                <li>A pelvic examination and imaging — usually a transvaginal or abdominal ultrasound to visualise the uterus, ovaries, and any cysts or fibroids.</li>
                <li>Discussion of treatment options — your gynaecologist should explain whether laparoscopic surgery is appropriate, what alternatives exist, and what the procedure will involve.</li>
                <li>Pre-operative workup — routine blood tests and fitness clearance before scheduling surgery.</li>
                <li>A clear recovery plan — most patients are told to expect a day-care stay or a 24–48 hour admission, with a return to light activity within about a week.</li>
              </ul>
            </div>

            {/* Section 8 — Recovery After Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Laparoscopic Gynaecological Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                One of the biggest reasons women prefer laparoscopic surgery is the recovery timeline. While every patient's recovery depends on the specific procedure and their overall health, general guidance includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>First 24–48 hours:</strong> Rest is recommended, with mild discomfort at the incision sites managed by oral pain relief.</li>
                <li><strong>First week:</strong> Light walking is encouraged to aid circulation and prevent clot formation, while heavy lifting and strenuous activity should be avoided.</li>
                <li><strong>5–7 days:</strong> Most patients can resume desk-based work and normal daily routines.</li>
                <li><strong>2–4 weeks:</strong> Full physical activity, including exercise and heavy lifting, is usually cleared after review with the surgeon.</li>
                <li><strong>Follow-up visits:</strong> Regular check-ins help confirm healing is progressing normally and address any questions that arise during recovery.</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Patients are generally advised to watch for warning signs such as fever, heavy bleeding, worsening pain, or discharge from the incision sites, and to contact their surgeon promptly if these occur.
              </p>
            </div>

            {/* Section 9 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Before Choosing Your Laparoscopic Gynaecologist
              </h2>

              <p className="text-gray-700 mb-4">
                Before finalising your decision, it can help to ask:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What are your specific qualifications and experience in laparoscopic gynaecological surgery?</li>
                <li>Do you use 3D or standard 2D laparoscopic equipment?</li>
                <li>How many procedures of this specific type have you performed?</li>
                <li>What are the realistic risks and alternatives to laparoscopic surgery in my case?</li>
                <li>What will my recovery timeline look like, and what support is available if complications arise?</li>
                <li>Will this procedure affect my future fertility?</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A gynaecologist who welcomes these questions and answers them clearly is generally a good sign of a transparent, patient-first practice.
              </p>
            </div>

            {/* Section 10 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                If you would like to consult Dr. Priyanka Pachauri for laparoscopic gynaecological surgery, fertility treatment, or pregnancy care, you can reach her clinic through any of the following:
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

            {/* Section 11 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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