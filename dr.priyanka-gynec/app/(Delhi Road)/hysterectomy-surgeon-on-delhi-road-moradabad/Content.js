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


export default function HysterectomySurgeonDelhiRoadMoradabad() {
  const faqs = [
    {
      q: "Will I still have periods after a hysterectomy?",
      a: "No. Periods stop because the uterus is removed.",
    },
    {
      q: "Can I get pregnant after a hysterectomy?",
      a: "No. Pregnancy is not possible after the uterus is removed.",
    },
    {
      q: "Do I still need Pap smear tests after a hysterectomy?",
      a: "It depends on whether the cervix was removed and why the surgery was done. Your doctor will advise.",
    },
    {
      q: "How long will I be off work after a hysterectomy?",
      a: "Usually two to six weeks, depending on the surgical approach and the nature of your job.",
    },
    {
      q: "Is laparoscopic hysterectomy better than abdominal hysterectomy?",
      a: "It often brings less pain and faster recovery, but the best approach depends on your condition and the surgeon’s judgement.",
    },
    {
      q: "Can I drive after hysterectomy surgery?",
      a: "Usually after you stop taking strong painkillers and can move comfortably, which your doctor will confirm.",
    },
    {
      q: "Does hysterectomy always cause menopause?",
      a: "Menopause occurs immediately only if both ovaries are removed. If the ovaries remain, menopause may occur naturally at a later age.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering hysterectomy evaluation, minimally invasive gynaecological surgery, and women’s health care.",
    },
    {
      q: "What facilities are available at Dr. Priyanka Pachauri’s clinic?",
      a: "The clinic provides consultation, ultrasound support, laboratory investigations, pre-operative assessment, and coordination for gynaecological surgery where required.",
    },
    {
      q: "How can I book a hysterectomy consultation near Delhi Road, Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic’s official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Hysterectomy Surgeon on Delhi Road Moradabad: Informed Decisions for Women’s Surgical Care
              </h1>


              <p className="text-gray-700 mb-4">
                Being told that you may need a hysterectomy can raise many emotions at once: worry, relief from long-standing pain, and uncertainty about what comes next. It is a major decision, and it deserves clear information and a surgeon you trust.
              </p>


              <p className="text-gray-700">
                If you are looking for a hysterectomy surgeon on Delhi Road Moradabad, this guide explains what the surgery involves, when it is recommended, what recovery looks like, and how to choose the right doctor.
              </p>
            </div>


            {/* Section 2 — What Is a Hysterectomy? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a Hysterectomy?
              </h2>


              <p className="text-gray-700 mb-4">
                A hysterectomy is a surgical procedure to remove the uterus, also called the womb. Depending on the condition, the surgeon may also remove the cervix, the fallopian tubes, or the ovaries. After a hysterectomy, a woman no longer has periods and cannot become pregnant.
              </p>


              <p className="text-gray-700">
                It is one of the most common gynaecological surgeries worldwide. It is usually advised only after other options have been considered, unless the situation is urgent.
              </p>
            </div>


            {/* Section 3 — Types of Hysterectomy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types of Hysterectomy
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Partial or Subtotal Hysterectomy
                  </h3>
                  <p className="text-gray-700">
                    Only the upper part of the uterus is removed, and the cervix is left in place.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Total Hysterectomy
                  </h3>
                  <p className="text-gray-700">
                    The entire uterus and cervix are removed. This is the most common type.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hysterectomy With Salpingo-Oophorectomy
                  </h3>
                  <p className="text-gray-700">
                    The uterus is removed along with one or both ovaries and tubes. Removal of both ovaries causes surgical menopause.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Radical Hysterectomy
                  </h3>
                  <p className="text-gray-700">
                    The uterus, cervix, surrounding tissue, and sometimes part of the vagina are removed. It is generally used for certain cancers.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 4 — Surgical Approaches */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Surgical Approaches
              </h2>


              <p className="text-gray-700 mb-4">
                The method depends on your condition, uterine size, previous surgeries, and the surgeon’s expertise.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Abdominal hysterectomy:</strong> Done through a larger cut in the lower abdomen. Often used for a very large uterus or complex cases.</li>
                <li><strong>Vaginal hysterectomy:</strong> The uterus is removed through the vagina, leaving no visible abdominal scar. Commonly used for prolapse.</li>
                <li><strong>Laparoscopic hysterectomy:</strong> Performed through small abdominal cuts using a camera, with less pain and quicker recovery.</li>
                <li><strong>Robotic-assisted hysterectomy:</strong> Uses robotic instruments controlled by the surgeon, available only in select centres.</li>
              </ul>
            </div>


            {/* Section 5 — Why Delhi Road Is Convenient */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Delhi Road Is a Convenient Choice
              </h2>


              <p className="text-gray-700">
                Surgery involves consultations, tests, hospital admission, and multiple follow-ups. Delhi Road is well connected within Moradabad, with hospitals, diagnostic labs, pharmacies, and blood banks close by. This makes it easier to complete pre-operative evaluation, arrange admission without stress, and manage follow-up visits during recovery, when long travel can be tiring.
              </p>
            </div>


            {/* Section 6 — When Is Hysterectomy Recommended? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is Hysterectomy Recommended?
              </h2>


              <p className="text-gray-700 mb-4">
                A doctor may advise a hysterectomy when other treatments have not worked or are not suitable. Common reasons include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Uterine fibroids causing heavy bleeding, pain, or pressure</li>
                <li>Abnormal uterine bleeding that does not respond to medicines</li>
                <li>Adenomyosis, where uterine lining grows into the muscle wall</li>
                <li>Endometriosis with severe, persistent pain</li>
                <li>Uterine prolapse, where the uterus slips into the vagina</li>
                <li>Chronic pelvic pain linked to uterine causes</li>
                <li>Pre-cancerous changes or cancer of the uterus, cervix, or ovaries</li>
                <li>Serious complications after childbirth, such as uncontrolled bleeding</li>
              </ul>


              <p className="text-gray-700 mt-4">
                It is not the first choice for most benign conditions, and a good doctor will discuss alternatives before recommending surgery.
              </p>
            </div>


            {/* Section 7 — Alternatives to Consider */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Alternatives to Consider
              </h2>


              <p className="text-gray-700 mb-4">
                Before deciding, ask whether any of these could suit your condition:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hormonal medicines or a hormone-releasing intrauterine device</li>
                <li>Tranexamic acid and other medicines to reduce bleeding</li>
                <li>Endometrial ablation for heavy periods in selected women</li>
                <li>Myomectomy, which removes fibroids while keeping the uterus</li>
                <li>Uterine artery embolisation for fibroids</li>
                <li>Pelvic floor exercises or pessary support for mild prolapse</li>
                <li>Observation and monitoring when symptoms are mild</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Alternatives are not always possible, but understanding your options lets you make a confident, informed decision.
              </p>
            </div>


            {/* Section 8 — Questions Before Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Consider Before Surgery
              </h2>


              <p className="text-gray-700 mb-4">
                Take time to think about these points with your doctor:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Have I completed my family?</li>
                <li>Are my symptoms affecting my quality of life?</li>
                <li>Have medicines or less invasive options been tried?</li>
                <li>Do I need ovary removal, and what are the implications?</li>
                <li>Which surgical approach is safest for me?</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Taking a second opinion is perfectly reasonable for an elective procedure.
              </p>
            </div>


            {/* Section 9 — Preparing for Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a Hysterectomy
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Tests:</strong> Blood tests, urine tests, ultrasound, a Pap smear, and sometimes an endometrial biopsy or MRI may be advised.</li>
                <li><strong>Medical fitness:</strong> The doctor and anaesthetist review conditions such as diabetes, blood pressure, thyroid disease, and anaemia. Anaemia is often corrected before surgery.</li>
                <li><strong>Medicines:</strong> Inform the team about blood thinners, supplements, and herbal products.</li>
                <li><strong>Fasting:</strong> You will be told when to stop eating and drinking before surgery.</li>
                <li><strong>Counselling:</strong> Discuss the procedure, expected recovery, hormonal effects, and emotional aspects openly.</li>
                <li><strong>Home planning:</strong> Arrange help for household tasks and childcare during recovery.</li>
              </ul>
            </div>


            {/* Section 10 — Day of Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens on the Day of Surgery?
              </h2>


              <p className="text-gray-700">
                You are admitted, and the anaesthetist administers general or spinal anaesthesia. The surgeon performs the procedure by the planned method, which typically takes one to three hours. After surgery, you are monitored in the recovery area before being shifted to your room. Pain relief, fluids, and early mobilisation are part of routine care.
              </p>
            </div>


            {/* Section 11 — Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Hysterectomy
              </h2>


              <p className="text-gray-700 mb-4">
                Recovery depends on the surgical approach and your overall health.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Hospital stay:</strong> Usually one to two days for laparoscopic or vaginal surgery, and three to five days for abdominal surgery.</li>
                <li><strong>Pain and discomfort:</strong> Expect soreness, mild bleeding or discharge, and tiredness. Medicines keep pain under control.</li>
                <li><strong>Movement:</strong> Short, gentle walks help circulation and healing. Avoid lifting heavy objects.</li>
                <li><strong>Return to routine:</strong> Light activity often resumes within two to four weeks, while full recovery may take six to eight weeks.</li>
                <li><strong>Intimacy:</strong> Wait until your doctor clears you, usually after about six weeks.</li>
                <li><strong>Diet:</strong> Eat protein-rich foods, fibre, fruits, and vegetables, and drink plenty of water to prevent constipation.</li>
                <li><strong>Follow-up:</strong> Attend scheduled visits so the surgeon can check healing and review any pathology reports.</li>
              </ul>
            </div>


            {/* Section 12 — Emotional and Hormonal Changes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional and Hormonal Changes
              </h2>


              <p className="text-gray-700">
                Some women feel relief from pain and bleeding, while others feel sadness or a sense of loss, especially if they had hoped for more children. Both reactions are normal. If the ovaries are removed, menopausal symptoms such as hot flashes, mood swings, vaginal dryness, and sleep problems may begin suddenly. Your doctor can discuss treatment options, including hormone therapy when appropriate. Emotional support from family and, if needed, a counsellor can help during adjustment.
              </p>
            </div>


            {/* Section 13 — Possible Risks */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Possible Risks
              </h2>


              <p className="text-gray-700 mb-4">
                As with any major surgery, hysterectomy carries risks, such as:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Bleeding</li>
                <li>Infection</li>
                <li>Injury to the bladder, bowel, or ureters, which is uncommon</li>
                <li>Blood clots</li>
                <li>Reaction to anaesthesia</li>
                <li>Early menopause when ovaries are removed</li>
                <li>Changes in pelvic floor support over time</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Choosing an experienced surgeon and a well-equipped hospital helps lower these risks.
              </p>
            </div>


            {/* Section 14 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs After Surgery
              </h2>


              <p className="text-gray-700 mb-4">
                Contact your doctor promptly if you notice:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fever or chills</li>
                <li>Heavy vaginal bleeding or foul-smelling discharge</li>
                <li>Severe or worsening abdominal pain</li>
                <li>Redness, swelling, or discharge from the wound</li>
                <li>Burning urination or difficulty passing urine</li>
                <li>Pain, swelling, or warmth in a leg</li>
                <li>Chest pain or breathlessness</li>
                <li>Persistent vomiting</li>
              </ul>
            </div>


            {/* Section 15 — How to Choose a Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose a Hysterectomy Surgeon
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualifications and Registration
                  </h3>
                  <p className="text-gray-700">
                    Choose a gynaecologist or gynaecological surgeon with MD, MS, or DNB in Obstetrics and Gynaecology, plus laparoscopic training if you want a minimally invasive approach. A valid medical council registration is essential.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience With Your Condition
                  </h3>
                  <p className="text-gray-700">
                    Ask how often the surgeon performs hysterectomy using the approach recommended for you, and how complications are handled.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Willingness to Discuss Alternatives
                  </h3>
                  <p className="text-gray-700">
                    A responsible surgeon explains all options and recommends surgery only when it is truly in your interest.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hospital Infrastructure
                  </h3>
                  <p className="text-gray-700">
                    Look for a clean operation theatre, anaesthesia support, intensive care access, a laboratory, and a blood bank link.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-gray-700">
                    The doctor should explain the procedure, risks, and recovery in simple language and respect your questions.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparent Costs
                  </h3>
                  <p className="text-gray-700">
                    Request an estimate that covers surgeon fees, hospital stay, anaesthesia, tests, and medicines.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reputation
                  </h3>
                  <p className="text-gray-700">
                    Speak with women who have had similar surgery. Their experience regarding honesty, comfort, and aftercare is valuable.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 16 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Myths About Hysterectomy
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “It makes you less of a woman.”
                  </h3>
                  <p className="text-gray-700">
                    Womanhood is not defined by the uterus. Many women feel better after treatment.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “It always causes weight gain and loss of desire.”
                  </h3>
                  <p className="text-gray-700">
                    Many women have no major change, and others improve once pain and bleeding resolve. Individual experiences vary.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Removing the uterus always means menopause.”
                  </h3>
                  <p className="text-gray-700">
                    Menopause occurs immediately only if both ovaries are removed.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “It is the only solution for fibroids.”
                  </h3>
                  <p className="text-gray-700">
                    Several options exist, depending on size, symptoms, and age.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Recovery needs months of bed rest.”
                  </h3>
                  <p className="text-gray-700">
                    Gentle movement is encouraged, though heavy activity must wait.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 17 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Hysterectomy Surgeon in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For women in Moradabad seeking careful evaluation and surgical guidance for hysterectomy, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers comprehensive gynaecological care. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first philosophy, &quot;Her Health First&quot;.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic provides evaluation for fibroids, abnormal bleeding, adenomyosis, endometriosis, prolapse, and other uterine conditions. Where surgery is needed, treatment options may include laparoscopic hysterectomy and other suitable approaches, depending on the diagnosis and patient’s goals.
              </p>


              <p className="text-gray-700 mb-4">
                The focus is on clear counselling, consideration of alternatives, fertility-related discussion where relevant, and safe surgical planning with appropriate follow-up care.
              </p>
            </div>


            {/* Section 18 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
                          href="mailto:drpriyankagynaec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynaec@gmail.com
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
              </div>
            </div>


            {/* Section 19 — FAQs */}
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