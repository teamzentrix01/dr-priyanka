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

export default function MyomectomyForFuturePregnancy() {
  const faqs = [
    {
      q: "Can I get pregnant after a laparoscopic myomectomy?",
      a: "Yes, most women can conceive naturally after healing; doctors usually advise waiting around 3 months before trying.",
    },
    {
      q: "Does myomectomy guarantee I will get pregnant afterward?",
      a: "No, it improves your chances by removing obstruction, but conception also depends on other fertility factors like age and ovarian reserve.",
    },
    {
      q: "How long should I wait after fibroid removal before attempting pregnancy?",
      a: "Doctors generally recommend waiting about 3 months, sometimes up to 6 months for large or deep fibroids, to allow full uterine healing.",
    },
    {
      q: "Can fibroids grow back after being removed surgically?",
      a: "New fibroids can occasionally develop later, but the treated fibroids themselves do not regrow after complete removal.",
    },
    {
      q: "How does laparoscopic myomectomy differ from hysterectomy?",
      a: "Myomectomy removes only the fibroids and preserves the uterus for future pregnancy, while hysterectomy removes the entire uterus permanently.",
    },
    {
      q: "What is the hospital stay and recovery timeline after myomectomy?",
      a: "Laparoscopic myomectomy typically needs a 24–48 hour hospital stay, with full recovery in about 4–6 weeks.",
    },
    {
      q: "Will I need a caesarean delivery after myomectomy?",
      a: "Many women do have a planned caesarean if the uterine wall was significantly opened during surgery, but this depends on individual healing.",
    },
    {
      q: "How do doctors control blood loss during laparoscopic fibroid excision?",
      a: "Advanced vessel-sealing instruments and precise laparoscopic technique are used to minimise blood loss during surgery.",
    },
    {
      q: "Can myomectomy help if I am struggling with infertility due to fibroids?",
      a: "Yes, removing fibroids that distort the uterine cavity often improves natural conception chances and IVF success rates.",
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
                Myomectomy for Future Pregnancy in Moradabad: Complete
                Fertility-Focused Guide
              </h1>

              <p className="mb-4 text-gray-700">
                For women who dream of conceiving in the future but are dealing
                with uterine fibroids, the biggest fear is often: &quot;Will
                surgery affect my ability to have children?&quot; The good news
                is that myomectomy is specifically designed to remove fibroids
                while preserving the uterus, making it the preferred
                fertility-focused surgical option.
              </p>

              <p className="text-gray-700">
                This guide explains everything about myomectomy for future
                pregnancy in Moradabad — how it works, who needs it, how it
                protects fertility, and what the road to pregnancy looks like
                afterward — based on the clinical expertise of Dr. Priyanka
                Pachauri, a leading laparoscopic gynaecologist and fertility
                specialist in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Fibroids Matter When You Are Planning Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Uterine fibroids can silently interfere with fertility, even
                when a woman feels otherwise healthy. Fibroids may affect
                pregnancy in several ways:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Distorting the shape of the uterine cavity, making
                  implantation difficult
                </li>
                <li>
                  Blocking the fallopian tube openings, reducing chances of
                  natural conception
                </li>
                <li>
                  Interfering with blood supply to the growing embryo
                </li>
                <li>
                  Increasing risk of miscarriage in early pregnancy
                </li>
                <li>
                  Causing preterm labour or abnormal fetal positioning in later
                  pregnancy
                </li>
                <li>
                  Leading to heavy bleeding during and after delivery
                </li>
                <li>
                  Contributing to unexplained infertility in some women trying
                  to conceive
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Not all fibroids affect fertility — location matters more than
                size. Fibroids inside the uterine cavity (submucosal) or
                distorting it are far more likely to cause problems than those
                on the outer uterine wall.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Myomectomy and Why Is It Fertility-Preserving?
              </h2>

              <p className="mb-4 text-gray-700">
                Myomectomy is a surgical procedure that removes fibroids while
                keeping the uterus completely intact — unlike hysterectomy,
                which removes the uterus entirely.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Only the fibroid tissue is removed, not the uterus itself
                </li>
                <li>
                  Multi-layer uterine wall suturing restores normal uterine
                  architecture
                </li>
                <li>
                  Preserves the endometrial lining needed for embryo
                  implantation
                </li>
                <li>
                  Maintains normal menstrual cycles after recovery
                </li>
                <li>
                  Keeps the uterine cavity shape suitable for future pregnancy
                </li>
                <li>
                  Allows natural conception in most cases once fully healed
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is why myomectomy — especially the laparoscopic (keyhole)
                approach — is the go-to recommendation for women who want to
                conceive after fibroid treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Myomectomy Used for Fertility Preservation
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri selects the surgical approach based on
                fibroid size, number, and exact location:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Laparoscopic Myomectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed through 3–4 small keyhole incisions
                </li>
                <li>
                  Best for intramural and subserosal fibroids
                </li>
                <li>
                  Minimal blood loss using advanced vessel-sealing instruments
                </li>
                <li>
                  Precise multi-layer suturing for strong uterine wall healing
                </li>
                <li>
                  Short hospital stay of 24–48 hours
                </li>
                <li>
                  Faster recovery, allowing earlier trying-to-conceive timelines
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hysteroscopic Myomectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Used specifically for submucosal fibroids growing inside the
                  uterine cavity
                </li>
                <li>
                  No external incisions — performed through the vaginal route
                </li>
                <li>
                  Directly improves implantation chances by restoring normal
                  cavity shape
                </li>
                <li>
                  Often a same-day or overnight day-care procedure
                </li>
                <li>
                  Considered one of the most fertility-friendly procedures
                  available
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Open (Abdominal) Myomectomy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reserved for very large or multiple deep-seated fibroids
                </li>
                <li>
                  Allows careful, layered closure important for future pregnancy
                  safety
                </li>
                <li>
                  Longer recovery but sometimes medically necessary for complex
                  cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Myomectomy Protects Your Chances of Future Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes the physical obstruction that fibroids create in or
                  around the uterine cavity
                </li>
                <li>
                  Restores normal blood flow to the uterine lining, supporting
                  embryo implantation
                </li>
                <li>
                  Reduces abnormal or heavy bleeding that can interfere with
                  conception
                </li>
                <li>
                  Multi-layer suturing technique strengthens the uterine wall to
                  safely carry a future pregnancy
                </li>
                <li>
                  Lowers the risk of miscarriage linked to cavity-distorting
                  fibroids
                </li>
                <li>
                  Improves outcomes for women undergoing natural conception or
                  fertility treatments like IUI/IVF
                </li>
                <li>
                  Uterus-preserving approach means no compromise on future
                  reproductive potential
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Consider Myomectomy Before Planning Pregnancy?
              </h2>

              <p className="mb-4 text-gray-700">
                Consult a gynaecologist in Moradabad for a fertility-focused
                evaluation if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy menstrual bleeding with clots along with fibroids seen
                  on ultrasound
                </li>
                <li>
                  Difficulty conceiving despite trying for 6–12 months
                </li>
                <li>
                  History of recurrent miscarriage with fibroids identified on
                  scans
                </li>
                <li>
                  Pelvic pain, pressure, or bloating alongside fertility
                  concerns
                </li>
                <li>
                  Fibroids confirmed to be distorting the uterine cavity on
                  ultrasound or MRI
                </li>
                <li>
                  Plans for IVF or fertility treatment where fibroids may reduce
                  success rates
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fibroid Surgery Recovery Time Before Trying to Conceive
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery timing is critical for safe future pregnancy planning:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Day 1–2:</strong> Hospital discharge for most
                  laparoscopic myomectomy cases
                </li>
                <li>
                  <strong>Week 1:</strong> Mild soreness; light rest and gentle
                  walking recommended
                </li>
                <li>
                  <strong>Week 2:</strong> Noticeable improvement in energy;
                  light daily activity resumes
                </li>
                <li>
                  <strong>Week 4–6:</strong> Return to normal routine and light
                  exercise
                </li>
                <li>
                  <strong>Week 6–8:</strong> Uterine wall healing largely
                  complete in most cases
                </li>
                <li>
                  <strong>3 Months:</strong> Commonly advised minimum wait
                  before attempting pregnancy
                </li>
                <li>
                  In some cases (large or deep fibroids): Doctors may recommend
                  waiting 6 months for complete scar strength before conception
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Dr. Priyanka Pachauri personalises this waiting period based on
                the depth, size, and location of the fibroids removed and how
                the uterine wall has healed on follow-up ultrasound.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Waiting Period Before Pregnancy Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Allows the uterine scar from suturing to gain full strength
                </li>
                <li>
                  Reduces the risk of uterine rupture during a future pregnancy
                  or labour
                </li>
                <li>
                  Gives the uterine lining time to heal and become receptive for
                  implantation
                </li>
                <li>
                  Lowers the chances of complications like placenta-related
                  issues
                </li>
                <li>
                  Supports a safer vaginal delivery or planned caesarean,
                  depending on fibroid depth
                </li>
                <li>
                  Allows your doctor to confirm complete healing via follow-up
                  ultrasound before you start trying
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Pregnancy After Myomectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy after myomectomy is usually closely monitored by
                  your obstetrician
                </li>
                <li>
                  Regular ultrasound scans track the healed uterine scar and
                  baby&apos;s growth
                </li>
                <li>
                  Many women deliver normally, though a planned caesarean is
                  often advised if the uterine wall was significantly opened
                  during surgery
                </li>
                <li>
                  Close monitoring in the third trimester helps prevent
                  complications
                </li>
                <li>
                  Most women with a well-healed myomectomy scar go on to have
                  safe, successful pregnancies
                </li>
                <li>
                  Open communication with your gynaecologist throughout pregnancy
                  is essential for safety
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing Laparoscopic Myomectomy for Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterus fully preserved for future pregnancy and reproductive
                  health
                </li>
                <li>
                  Minimal blood loss with precision vessel-sealing instruments
                </li>
                <li>
                  Smaller incisions and significantly less visible scarring
                </li>
                <li>
                  Shorter hospital stay compared to open surgery
                </li>
                <li>
                  Lower infection risk than traditional open procedures
                </li>
                <li>
                  Faster return to daily life and earlier path toward trying for
                  pregnancy
                </li>
                <li>
                  High-definition 3D laparoscopic visualisation for greater
                  surgical accuracy
                </li>
                <li>
                  Reduced formation of internal scar tissue (adhesions) that
                  could otherwise affect fertility
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Support Fertility After Myomectomy Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow your doctor&apos;s advised waiting period strictly
                  before attempting pregnancy
                </li>
                <li>
                  Eat an iron-rich, protein-rich, nutrient-dense diet to support
                  tissue healing
                </li>
                <li>
                  Take prescribed supplements like folic acid once cleared for
                  pregnancy planning
                </li>
                <li>
                  Maintain a healthy weight through balanced diet and gentle
                  exercise
                </li>
                <li>
                  Avoid smoking, alcohol, and excessive caffeine while trying to
                  conceive
                </li>
                <li>
                  Manage stress through rest, light yoga, or relaxation
                  techniques
                </li>
                <li>
                  Attend all follow-up ultrasound appointments to confirm
                  complete uterine healing
                </li>
                <li>
                  Track ovulation and menstrual cycle regularity once fully
                  recovered
                </li>
                <li>
                  Discuss fertility treatment options like IUI or IVF with your
                  doctor if needed alongside surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Precautions to Be Aware Of
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small risk of new fibroid development over time after
                  myomectomy
                </li>
                <li>
                  Rare risk of uterine scar-related complications in a future
                  pregnancy if the waiting period is not followed
                </li>
                <li>
                  Possible need for planned caesarean delivery depending on how
                  deep the fibroid removal was
                </li>
                <li>
                  Importance of choosing an experienced laparoscopic surgeon to
                  ensure proper multi-layer suturing
                </li>
                <li>
                  Temporary bloating or mild discomfort during early recovery,
                  which resolves within days
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Choosing a skilled, fertility-focused surgeon significantly
                reduces these risks and supports the best possible outcome for
                future pregnancy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing Emotionally and Physically Before Fibroid Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Getting ready for myomectomy involves more than just the medical
                checklist — a little preparation goes a long way toward smoother
                surgery and recovery:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discuss all fertility goals openly with your doctor before
                  finalising the surgical plan
                </li>
                <li>
                  Correct anaemia with iron supplementation if heavy bleeding has
                  lowered your haemoglobin
                </li>
                <li>
                  Get pre-surgical blood tests, ECG, and anaesthesia fitness
                  checks completed in advance
                </li>
                <li>
                  Arrange help at home for the first week after surgery,
                  especially for household chores
                </li>
                <li>
                  Pack comfortable, loose-fitting clothing for the hospital stay
                </li>
                <li>
                  Plan time off work in advance so you are not rushed back
                  before full healing
                </li>
                <li>
                  Ask your doctor every question you have — no concern about
                  fertility is too small to raise
                </li>
                <li>
                  Keep a simple recovery diary to track symptoms and follow-up
                  appointment dates
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Fertility-Preserving
                Fibroid Surgery in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced Obstetrician,
                Gynaecologist & IVF Specialist in Moradabad, known for her
                fertility-first approach to fibroid treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MS (O&G), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  Co-leads Shree Advanced Urogynae Clinic, Moradabad
                </li>
                <li>
                  Consultant at Ujala Cygnus BrightStar Hospital
                </li>
                <li>
                  Specialist in uterus-preserving laparoscopic and hysteroscopic
                  myomectomy
                </li>
                <li>
                  Skilled in multi-layer uterine suturing technique designed for
                  safe future pregnancy
                </li>
                <li>
                  Uses high-definition 3D laparoscopic technology and advanced
                  ultrasound imaging for precise fibroid mapping
                </li>
                <li>
                  Deep experience guiding patients through fertility treatment
                  alongside fibroid surgery, including IVF support
                </li>
                <li>
                  Known for combining technical precision with genuine empathy
                  for patients trying to conceive
                </li>
                <li>
                  Trusted by women across Moradabad and nearby Uttar Pradesh for
                  safe, fertility-focused surgical care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri for Myomectomy & Fertility
                Consultation in Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
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
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
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