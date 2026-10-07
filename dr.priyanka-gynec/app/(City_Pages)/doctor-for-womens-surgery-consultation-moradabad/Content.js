
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function DoctorForWomensSurgeryMoradabad() {
  const faqs = [
    {
      q: "Who is the best doctor for women's surgery consultation in Moradabad?",
      a: "Dr. Priyanka Pachauri at Dr. Priyanka Gynaec is a trusted gynaecologist and laparoscopic surgery specialist in Moradabad.",
    },
    {
      q: "Does every gynaecological problem need surgery?",
      a: "No. Many conditions are treated with medicines or lifestyle changes. Surgery is advised only when necessary.",
    },
    {
      q: "Which surgeries are available at the clinic?",
      a: "Laparoscopic cystectomy, myomectomy, hysterectomy, endometriosis surgery, sacrocolpopexy, sterilization, hysteroscopy and polypectomy.",
    },
    {
      q: "Is laparoscopic surgery safe?",
      a: "Yes, when done by an experienced surgeon in suitable cases. It usually means smaller cuts and faster recovery.",
    },
    {
      q: "Can fibroids be removed without removing the uterus?",
      a: "Yes. Laparoscopic myomectomy removes fibroids while preserving the uterus.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Is my consultation confidential?",
      a: "Yes. Your medical details are treated with privacy and respect.",
    },
    {
      q: "Will I have visible scars after laparoscopic surgery?",
      a: "Scars are usually very small because the incisions are tiny, and they fade over time.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Doctor for Women&apos;s Surgery Consultation in Moradabad
              </h1>

              <p className="mb-4 text-gray-700">
                Pelvic pain, heavy periods, fibroids, ovarian cysts or prolapse
                can make daily life hard. Many women delay seeing a doctor
                because they fear surgery, feel shy, or hope the problem will
                settle by itself. A timely consultation is often the most
                important step toward recovery.
              </p>

              <p className="mb-4 text-gray-700">
                If you are looking for a trusted doctor for women&apos;s surgery
                consultation in Moradabad, this guide explains when to consult,
                which surgeries are available, what to expect, and how to book
                with Dr. Priyanka Pachauri at Dr. Priyanka Gynaec.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Women&apos;s Surgery Consultation Matters
              </h2>

              <p className="mb-4 text-gray-700">
                A consultation is not a decision to operate. It is a
                conversation, an examination and a plan. Many conditions are
                managed with medicines or lifestyle changes. Surgery is advised
                only when it is truly needed.
              </p>

              <p className="mb-4 text-gray-700">
                A specialist consultation helps you to:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Find the real cause of symptoms instead of guessing.
                </li>
                <li>
                  Learn whether medicines, observation or surgery suits your
                  case.
                </li>
                <li>
                  Understand risks, benefits and recovery time in simple
                  language.
                </li>
                <li>Protect your fertility and long-term health.</li>
                <li>Avoid complications from delayed treatment.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs You Should See a Women&apos;s Surgery Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                Do not ignore these symptoms:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy, prolonged or very painful periods.</li>
                <li>Bleeding between periods or after menopause.</li>
                <li>Constant lower abdominal or pelvic pain.</li>
                <li>Pain during intercourse.</li>
                <li>A lump or heaviness in the lower abdomen.</li>
                <li>Difficulty conceiving despite trying for a year.</li>
                <li>Repeated miscarriages.</li>
                <li>
                  A feeling of &quot;something coming down&quot; in the vagina.
                </li>
                <li>Urine leakage when coughing or sneezing.</li>
                <li>Abnormal findings on an ultrasound scan.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Women&apos;s Surgeries Explained
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers a wide range of gynaecological
                procedures. Most are done by minimally invasive keyhole
                techniques.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Cystectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes ovarian cysts through tiny cuts.
                </li>
                <li>
                  Aims to preserve healthy ovarian tissue and fertility.
                </li>
                <li>
                  Suitable for endometriotic, dermoid and other benign cysts.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Myomectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes uterine fibroids while keeping the uterus.
                </li>
                <li>Good for women who want to conceive later.</li>
                <li>Helps reduce heavy bleeding and pressure symptoms.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes the uterus through keyhole incisions.
                </li>
                <li>
                  Less pain, smaller scars and faster recovery than open
                  surgery.
                </li>
                <li>
                  Advised when other treatments have not worked.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Excises endometriosis tissue under 3D magnified vision.
                </li>
                <li>Reduces chronic pelvic pain.</li>
                <li>Can improve fertility chances in suitable women.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Sacrocolpopexy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Repairs uterine and vaginal vault prolapse.
                </li>
                <li>Restores pelvic support using a keyhole approach.</li>
                <li>Improves comfort and bladder control.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Sterilization
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Permanent tubal ligation as a day-care procedure.
                </li>
                <li>Quick discharge and early return to routine.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Diagnostic Hysteroscopy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A thin camera examines the inside of the uterus.
                </li>
                <li>
                  Finds causes of bleeding, infertility and repeated pregnancy
                  loss.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hysteroscopic Polypectomy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes uterine polyps without any abdominal cut.
                </li>
                <li>Usually quick, with minimal discomfort.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Keyhole (Laparoscopic) Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                Traditional open surgery needs a large abdominal incision.
                Laparoscopy uses a few small cuts, a camera and fine
                instruments. With high-definition 3D vision, the surgeon sees
                the pelvic organs in great detail, which supports careful and
                precise surgery.
              </p>

              <p className="mb-4 text-gray-700">
                Benefits commonly seen with laparoscopic surgery:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller incisions and minimal scarring.</li>
                <li>Less pain after the operation.</li>
                <li>Lower risk of wound infection.</li>
                <li>Shorter hospital stay.</li>
                <li>Quicker return to normal activities.</li>
                <li>
                  Better visualisation of deep pelvic structures.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor will tell you honestly whether laparoscopy suits
                your condition. Some cases need a different approach, and a good
                surgeon explains why.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies, laparoscopic
                gynaecological surgery and menstrual disorder treatment. The
                clinic&apos;s philosophy is &quot;Her Health First&quot;: listen
                first, then use expertise and technology with patience and care.
              </p>

              <p className="mb-4 text-gray-700">What patients can expect:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A calm, respectful and unhurried consultation.</li>
                <li>
                  Clear explanation of the diagnosis and every treatment option.
                </li>
                <li>Honest advice on whether surgery is necessary.</li>
                <li>
                  Continuity of care from the first visit to follow-ups.
                </li>
                <li>
                  Support across life stages, from adolescence and pregnancy to
                  menopause.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The clinic&apos;s work spans gynaecology and laparoscopy,
                fertility and IVF, pregnancy and birthing care, antenatal
                services and normal delivery. It also offers paediatric care for
                newborns and children.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Advanced Technology at the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Accurate diagnosis is the foundation of safe treatment. The
                centre uses:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery system.</li>
                <li>3D and 4D ultrasound for detailed imaging.</li>
                <li>Time-lapse imaging incubator for embryo monitoring.</li>
                <li>AI-powered semen analysis and DNA integrity testing.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing the process reduces anxiety. A typical visit includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>History taking:</strong> your symptoms, periods,
                  pregnancies, past surgeries and medicines.
                </li>
                <li>
                  <strong>Physical and pelvic examination:</strong> done gently
                  and with your consent.
                </li>
                <li>
                  <strong>Investigations:</strong> ultrasound, blood tests or
                  other scans if needed.
                </li>
                <li>
                  <strong>Diagnosis discussion:</strong> the cause explained in
                  simple words.
                </li>
                <li>
                  <strong>Treatment options:</strong> medicines, minor
                  procedures or surgery, with pros and cons.
                </li>
                <li>
                  <strong>Planning:</strong> timing, hospital stay, costs and
                  recovery expectations.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                You are free to ask questions and take time to decide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Visit
              </h2>

              <p className="mb-4 text-gray-700">
                A little preparation makes the consultation more useful:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the date of your last menstrual period.</li>
                <li>Write down your symptoms and how long you have had them.</li>
                <li>
                  Carry previous ultrasound, blood test and prescription
                  records.
                </li>
                <li>List any medicines or supplements you take.</li>
                <li>Mention allergies and past surgeries.</li>
                <li>Bring a family member if it makes you comfortable.</li>
                <li>Prepare your questions in advance.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Women&apos;s Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Fear often comes from misinformation. Here are some facts:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Surgery always means a long hospital
                  stay. <strong>Fact:</strong> Many keyhole procedures need a
                  short stay, and some are day-care.
                </li>
                <li>
                  <strong>Myth:</strong> Hysterectomy changes a woman&apos;s
                  hormones automatically. <strong>Fact:</strong> If the ovaries
                  are preserved, hormone production usually continues.
                </li>
                <li>
                  <strong>Myth:</strong> All fibroids need surgery.{" "}
                  <strong>Fact:</strong> Small fibroids without symptoms may
                  only need regular monitoring.
                </li>
                <li>
                  <strong>Myth:</strong> Every ovarian cyst is dangerous.{" "}
                  <strong>Fact:</strong> Most cysts are benign, but they should
                  still be evaluated.
                </li>
                <li>
                  <strong>Myth:</strong> Severe period pain is normal.{" "}
                  <strong>Fact:</strong> Intense pain can signal endometriosis
                  or another treatable condition.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Surgeon
              </h2>

              <p className="mb-4 text-gray-700">
                Going in prepared helps you feel confident. Consider asking:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do I really need surgery, or are there other options?</li>
                <li>Which technique do you recommend, and why?</li>
                <li>What are the risks and possible complications?</li>
                <li>How long will recovery take?</li>
                <li>Will the surgery affect my fertility?</li>
                <li>When can I resume work and daily routine?</li>
                <li>What follow-up care will I need?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Women&apos;s Surgery and Fertility
              </h2>

              <p className="mb-4 text-gray-700">
                Many women worry that surgery will reduce their chances of
                becoming a mother. In many cases, the right surgery actually
                supports fertility by removing the cause of the problem.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fibroid removal (myomectomy):</strong> preserves the
                  uterus.
                </li>
                <li>
                  <strong>Cyst surgery:</strong> aims to protect healthy ovarian
                  tissue.
                </li>
                <li>
                  <strong>Hysteroscopic polyp removal:</strong> can improve the
                  uterine environment.
                </li>
                <li>
                  <strong>Endometriosis excision:</strong> may reduce pain and
                  help conception.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Be sure to discuss your family planning goals during
                consultation. This allows the surgeon to choose the safest and
                most suitable approach.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Women&apos;s Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery depends on the procedure and your overall health.
                Keyhole surgeries often allow quicker healing than open surgery,
                but every woman is different.
              </p>

              <p className="mb-4 text-gray-700">Common recovery guidance:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Walk gently as advised to improve circulation.</li>
                <li>Eat light, protein-rich and fibre-rich food.</li>
                <li>Drink plenty of water.</li>
                <li>Avoid heavy lifting until your doctor permits.</li>
                <li>Take medicines exactly as prescribed.</li>
                <li>Keep wounds clean and dry.</li>
                <li>Attend all follow-up visits.</li>
                <li>
                  Report fever, severe pain, heavy bleeding or wound discharge
                  immediately.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Affect Surgery Cost
              </h2>

              <p className="mb-4 text-gray-700">
                Costs vary from patient to patient. Common factors include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Type and complexity of the procedure.</li>
                <li>Investigations and scans required.</li>
                <li>Length of hospital stay.</li>
                <li>Anaesthesia and medicines.</li>
                <li>Follow-up visits.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ask for a clear estimate during your consultation so there are
                no surprises.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Choosing a surgeon is a personal decision. Look for:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Proper medical qualifications and relevant surgical training.
                </li>
                <li>
                  Experience in the specific procedure you may need.
                </li>
                <li>
                  Availability of modern laparoscopic and imaging facilities.
                </li>
                <li>
                  A doctor who listens and answers every question patiently.
                </li>
                <li>Transparent advice without pressure to operate.</li>
                <li>Good patient feedback and word-of-mouth trust.</li>
                <li>A convenient, accessible clinic location.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Many patients say they felt comfortable and understood from
                their first visit. That sense of trust matters as much as
                technical skill.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Women&apos;s Surgery Consultation Today
              </h2>

              <p className="mb-4 text-gray-700">
                Do not let fear or embarrassment delay care. Most gynaecological
                problems are treatable, and early consultation often means
                simpler treatment and better results. Whether you need a second
                opinion on surgery advice or a first evaluation of troubling
                symptoms, a confidential, caring consultation is one call away.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
