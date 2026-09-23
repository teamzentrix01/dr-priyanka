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

export default function HysterectomyForFibroidsDoctorInMoradabad() {
  const faqs = [
    {
      q: "When is a hysterectomy needed for fibroids?",
      a: "It's usually recommended when fibroids are large, symptoms are severe, other treatments have failed, and childbearing is complete.",
    },
    {
      q: "Is hysterectomy the only treatment for fibroids?",
      a: "No, alternatives like myomectomy, hormonal therapy, and uterine artery embolization are usually tried first when appropriate.",
    },
    {
      q: "What is the difference between myomectomy and hysterectomy?",
      a: "Myomectomy removes only the fibroids and preserves the uterus, while hysterectomy removes the entire uterus permanently.",
    },
    {
      q: "What is a laparoscopic hysterectomy for fibroids?",
      a: "It's a minimally invasive procedure removing the uterus and fibroids through small keyhole incisions, with faster recovery than open surgery.",
    },
    {
      q: "How long is the hospital stay for laparoscopic hysterectomy?",
      a: "Typically 1–2 days, compared to 5–7 days for traditional open hysterectomy.",
    },
    {
      q: "How long does recovery take after fibroid hysterectomy?",
      a: "Most women return to normal activity within 2–3 weeks with laparoscopic surgery, versus 4–6 weeks for open surgery.",
    },
    {
      q: "Can very large fibroids be removed laparoscopically?",
      a: "Yes, in most cases, though very large or extensively enlarged uteri may sometimes require an open surgical approach.",
    },
    {
      q: "Will my ovaries be removed during fibroid hysterectomy?",
      a: "Not necessarily — this depends on individual factors and is discussed with your surgeon beforehand.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist and laparoscopic surgeon (MS, FMAS) offering both laparoscopic myomectomy and Total Laparoscopic Hysterectomy for fibroids.",
    },
    {
      q: "Does Dr. Priyanka Pachauri offer fertility-preserving fibroid treatment?",
      a: "Yes, her clinic offers laparoscopic myomectomy for women who wish to preserve their uterus and fertility.",
    },
    {
      q: "Is laparoscopic hysterectomy for fibroids safe?",
      a: "Yes, it's generally safe when performed by an experienced surgeon using advanced laparoscopic technology.",
    },
    {
      q: "How can I book a consultation for fibroid treatment in Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Hysterectomy for Fibroids Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Uterine fibroids are one of the most common gynaecological
                conditions, affecting a large proportion of women at some point
                during their reproductive years. While many fibroids cause no
                symptoms at all, others lead to heavy bleeding, pelvic pain,
                pressure symptoms, and fertility difficulties severe enough to
                require surgical treatment. For some women, especially those who
                have completed their family, a hysterectomy becomes the most
                effective, definitive solution. This guide covers everything you
                need to know about hysterectomy for fibroids in Moradabad —
                when it&apos;s necessary, the alternatives, the laparoscopic
                approach, recovery, and how to choose the right doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Uterine Fibroids?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fibroids</strong>, medically known as leiomyomas, are
                  non-cancerous growths that develop in or around the uterus.
                </li>
                <li>
                  They are made of muscle and fibrous tissue and can vary
                  widely in size — from as small as a pea to as large as a
                  melon.
                </li>
                <li>
                  Fibroids can be located in different parts of the uterus:{" "}
                  <strong>submucosal</strong> (inside the uterine cavity),{" "}
                  <strong>intramural</strong> (within the uterine wall), or{" "}
                  <strong>subserosal</strong> (on the outer surface).
                </li>
                <li>
                  A woman can have a single fibroid or multiple fibroids at
                  once.
                </li>
                <li>
                  Fibroids are generally hormone-sensitive, often growing during
                  reproductive years and shrinking after menopause.
                </li>
                <li>
                  Many fibroids are asymptomatic and discovered incidentally
                  during a routine ultrasound.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms Caused by Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy or prolonged menstrual bleeding.</li>
                <li>Severe menstrual cramping or pelvic pain.</li>
                <li>Pressure or a feeling of fullness in the lower abdomen.</li>
                <li>Frequent urination, due to pressure on the bladder.</li>
                <li>
                  Constipation or bowel pressure, depending on fibroid location.
                </li>
                <li>Pain during intercourse.</li>
                <li>Enlarged abdomen, in cases of large fibroids.</li>
                <li>
                  Fertility difficulties or pregnancy complications, particularly
                  with submucosal fibroids.
                </li>
                <li>
                  Fatigue and anaemia, resulting from chronic heavy bleeding.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Hysterectomy Recommended for Fibroids?
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist typically considers hysterectomy for fibroids
                when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fibroids are large, multiple, or rapidly growing, making
                  fibroid-preserving surgery more complex.
                </li>
                <li>
                  Symptoms like heavy bleeding or pain are severe and
                  significantly affect quality of life.
                </li>
                <li>
                  The woman has completed her family and does not wish to
                  conceive in the future.
                </li>
                <li>
                  Myomectomy (fibroid removal alone) has already failed or
                  fibroids have recurred after previous treatment.
                </li>
                <li>
                  Fibroids are causing significant anaemia unresponsive to
                  medical treatment.
                </li>
                <li>
                  There is uncertainty about the nature of a rapidly growing
                  mass, requiring definitive tissue diagnosis.
                </li>
                <li>
                  Other treatments — hormonal therapy, uterine artery
                  embolization, or myomectomy — are unsuitable or have not
                  worked.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Hysterectomy is generally considered a definitive, last-resort
                treatment for fibroids — recommended only after less invasive
                options have been carefully evaluated.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Alternatives to Hysterectomy for Fibroids
              </h2>

              <p className="mb-4 text-gray-700">
                Before hysterectomy is recommended, doctors typically consider:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Watchful waiting</strong> — for small, asymptomatic
                  fibroids that don&apos;t require immediate treatment.
                </li>
                <li>
                  <strong>Hormonal therapy</strong> — to help manage bleeding
                  and shrink fibroids temporarily.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy</strong> — surgical removal of
                  fibroids while preserving the uterus, ideal for women wanting
                  future pregnancy.
                </li>
                <li>
                  <strong>Hysteroscopic myomectomy</strong> — removal of
                  submucosal fibroids through the vagina and cervix, without any
                  external incision.
                </li>
                <li>
                  <strong>Uterine artery embolization</strong> — a non-surgical
                  procedure to cut off blood supply to fibroids, causing them to
                  shrink.
                </li>
                <li>
                  <strong>Tranexamic acid or anti-inflammatory medication</strong>{" "}
                  — for managing associated heavy bleeding symptomatically.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If these approaches are not suitable, or have already been tried
                without success, hysterectomy becomes the appropriate next
                consideration.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Hysterectomy for Fibroids
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Total Laparoscopic Hysterectomy (TLH)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed through small keyhole incisions, guided by a
                  high-definition camera.
                </li>
                <li>
                  Removes the entire uterus and cervix, including the fibroids
                  within it.
                </li>
                <li>
                  Offers the fastest recovery among all approaches.
                </li>
                <li>
                  Minimal scarring and significantly reduced post-operative
                  pain.
                </li>
                <li>
                  Suitable for most fibroid cases, even moderately enlarged
                  uteri, in experienced hands.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Vaginal Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterus removed through the vaginal canal, without external
                  incisions.
                </li>
                <li>
                  Generally suitable for smaller fibroid-related uterine
                  enlargement.
                </li>
                <li>
                  Offers a relatively fast recovery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Abdominal (Open) Hysterectomy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reserved for very large fibroids or an extensively enlarged
                  uterus where laparoscopic access is not feasible.
                </li>
                <li>
                  Involves a larger incision and longer hospital stay.
                </li>
                <li>
                  Recovery typically takes 4–6 weeks, compared to 2–3 weeks for
                  laparoscopic surgery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Laparoscopic Hysterectomy Is Preferred for Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimal scarring</strong> — incisions are only 5–10mm.
                </li>
                <li>
                  <strong>Significantly less post-operative pain</strong>.
                </li>
                <li>
                  <strong>Shorter hospital stay</strong> — typically 1–2 days
                  versus 5–7 days for open surgery.
                </li>
                <li>
                  <strong>Faster return to daily activities</strong> — usually
                  within 2–3 weeks.
                </li>
                <li>
                  <strong>Lower risk of infection</strong>, due to smaller
                  surgical wounds.
                </li>
                <li>
                  <strong>Reduced intraoperative blood loss</strong>, important
                  given fibroids can sometimes cause increased bleeding during
                  surgery.
                </li>
                <li>
                  <strong>High-definition 3D visualisation</strong> allows
                  precise handling of large or multiple fibroids with greater
                  safety.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens Before Surgery?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed history and pelvic examination to assess fibroid
                  size, number, and location.
                </li>
                <li>
                  Pelvic ultrasound, and sometimes MRI for complex or very large
                  fibroids.
                </li>
                <li>
                  Blood tests to check for anaemia and overall surgical fitness.
                </li>
                <li>
                  Discussion of ovary preservation versus removal, based on age
                  and individual factors.
                </li>
                <li>
                  Anaesthesia fitness assessment.
                </li>
                <li>
                  Clear discussion of alternatives, risks, and expected
                  outcomes.
                </li>
                <li>
                  Informed consent, ensuring all questions are answered before
                  proceeding.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Hysterectomy for Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First 24–48 hours:</strong> Hospital stay with pain
                  managed through medication.
                </li>
                <li>
                  <strong>First week:</strong> Rest at home, light walking
                  encouraged, no heavy lifting.
                </li>
                <li>
                  <strong>1–2 weeks:</strong> Gradual return to light daily
                  activities and desk-based work.
                </li>
                <li>
                  <strong>2–4 weeks:</strong> Return to more physical activity,
                  based on surgeon&apos;s clearance.
                </li>
                <li>
                  <strong>4–6 weeks:</strong> Full recovery and clearance for
                  exercise and heavier activity.
                </li>
                <li>
                  <strong>Follow-up visits:</strong> Regular check-ins to
                  monitor healing and address concerns.
                </li>
              </ul>

              <p className="mt-4 font-semibold text-gray-900">
                Warning signs requiring prompt medical attention:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever or chills.</li>
                <li>Heavy vaginal bleeding.</li>
                <li>Severe or worsening abdominal pain.</li>
                <li>Unusual discharge or foul odour.</li>
                <li>Redness or discharge from incision sites.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Complications to Be Aware Of
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Bleeding during or after surgery</strong>,
                  particularly relevant with large or numerous fibroids.
                </li>
                <li>
                  <strong>Infection</strong>, significantly reduced with
                  laparoscopic technique.
                </li>
                <li>
                  <strong>Injury to nearby organs</strong>, rare with
                  experienced, high-definition laparoscopic surgery.
                </li>
                <li>
                  <strong>Blood clots</strong>, minimised through early
                  mobilisation post-surgery.
                </li>
                <li>
                  <strong>Anaesthesia-related risks</strong>, assessed through
                  pre-operative evaluation.
                </li>
                <li>
                  <strong>Emotional adjustment</strong> after losing the ability
                  to menstruate or conceive, which some women may need time to
                  process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Life After Hysterectomy for Fibroids
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods stop permanently, and fibroid-related bleeding and
                  pain are resolved completely.
                </li>
                <li>
                  If ovaries are preserved, natural hormone production continues
                  until natural menopause.
                </li>
                <li>
                  If ovaries are removed, menopausal symptoms may begin
                  immediately, and hormone therapy can be discussed.
                </li>
                <li>
                  Sexual function is generally preserved.
                </li>
                <li>
                  Many women report significant improvement in quality of life
                  after relief from chronic fibroid symptoms.
                </li>
                <li>
                  Regular gynaecological follow-up should continue as advised.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Doctor for Fibroid Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Qualifications</strong> — MS/MD in Obstetrics &
                  Gynaecology with FMAS or equivalent advanced surgical training.
                </li>
                <li>
                  <strong>Experience with large or multiple fibroids
                  specifically</strong>, not just general gynaecological
                  surgery.
                </li>
                <li>
                  <strong>Technology used</strong> — 3D laparoscopic systems
                  offer superior precision for complex fibroid cases.
                </li>
                <li>
                  <strong>Willingness to discuss alternatives</strong> before
                  recommending hysterectomy.
                </li>
                <li>
                  <strong>Hospital facilities</strong> for proper post-operative
                  and emergency care.
                </li>
                <li>
                  <strong>Clear, transparent communication</strong> about risks,
                  benefits, and expected outcomes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cost Considerations for Fibroid Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic hysterectomy</strong> generally costs
                  more upfront than open surgery, due to specialised equipment
                  and technique.
                </li>
                <li>
                  It is often more cost-effective overall, given the shorter
                  hospital stay and faster return to work.
                </li>
                <li>
                  <strong>Insurance coverage</strong> for fibroid-related
                  hysterectomy varies by policy, so check your terms in advance.
                </li>
                <li>
                  A clear cost estimate should be discussed with the clinic
                  beforehand, covering surgery, hospital stay, anaesthesia, and
                  pre-operative tests.
                </li>
                <li>
                  Fibroid size and number can influence surgical complexity and,
                  in turn, overall cost.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Frequently Asked Concerns Before Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Will I go into early menopause?&quot;</strong>{" "}
                  — Only if the ovaries are removed along with the uterus;
                  otherwise, natural hormone production continues.
                </li>
                <li>
                  <strong>&quot;Will my body feel different afterward?&quot;</strong>{" "}
                  — Most women report relief from fibroid symptoms with no major
                  change to overall physical function.
                </li>
                <li>
                  <strong>&quot;Is the surgery painful?&quot;</strong> —
                  Laparoscopic technique significantly reduces post-operative
                  pain compared to open surgery.
                </li>
                <li>
                  <strong>&quot;How soon can I resume work?&quot;</strong> —
                  Most women return to desk-based work within 2 weeks after
                  laparoscopic surgery.
                </li>
                <li>
                  <strong>&quot;Can complications be predicted in
                  advance?&quot;</strong> — A thorough pre-operative evaluation
                  helps identify and minimise individual risk factors.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Hysterectomy for Fibroids Doctor in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women in Moradabad requiring a hysterectomy for fibroids,
                Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology, FMAS,
                Advanced Infertility Fellowship) offers a comprehensive,
                technology-driven approach. Based on her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her practice includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Co-lead at Shree Advanced Urogynae Clinic and Consultant at
                  Ujala Cygnus BrightStar Hospital.
                </li>
                <li>
                  A &quot;Her Health First&quot; philosophy focused on informed,
                  individualised patient care.
                </li>
                <li>
                  High-definition 3D laparoscopic technology, well-suited to
                  precisely managing large or multiple fibroids.
                </li>
                <li>
                  <strong>Total Laparoscopic Hysterectomy (TLH)</strong> offered
                  as a minimally invasive definitive treatment for
                  fibroid-related symptoms.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy</strong> available as a
                  fertility-preserving alternative for women who wish to
                  conceive in the future.
                </li>
                <li>
                  3D/4D ultrasound imaging for accurate pre-operative fibroid
                  assessment.
                </li>
                <li>
                  A full spectrum of women&apos;s health services, including
                  fertility and IVF treatment, antenatal care, and postnatal
                  support, under one roof.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This combination of accurate diagnostic imaging, a full range of
                treatment alternatives, and advanced laparoscopic surgical
                expertise allows fibroid patients to be guided through their
                entire treatment journey — from initial diagnosis to surgery, if
                required — within a single, consistent practice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysterectomy for fibroids is a definitive treatment, generally
                  recommended after other options are evaluated.
                </li>
                <li>
                  Laparoscopic hysterectomy (TLH) offers faster recovery, less
                  pain, and minimal scarring than open surgery.
                </li>
                <li>
                  Laparoscopic myomectomy remains the preferred choice for women
                  wishing to preserve fertility.
                </li>
                <li>
                  Recovery from laparoscopic hysterectomy typically takes 2–3
                  weeks, versus 4–6 weeks for open surgery.
                </li>
                <li>
                  Ovary preservation is decided individually based on age and
                  health factors.
                </li>
                <li>
                  Choosing an experienced surgeon with advanced technology
                  significantly improves surgical safety and outcomes.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Fibroids are extremely common, and while many women manage them
                with medication or fertility-preserving procedures, some require
                a hysterectomy for lasting relief from severe symptoms. Modern
                laparoscopic techniques have made hysterectomy for fibroids far
                less invasive than in the past, offering faster recovery, less
                pain, and minimal scarring compared to traditional open surgery.
                The right treatment path depends on an accurate diagnosis, a
                clear understanding of all available alternatives, and a surgeon
                experienced in advanced minimally invasive fibroid surgery. If
                fibroid symptoms are affecting your quality of life, a proper
                consultation is the best next step toward a treatment plan
                suited to your needs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQs)
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
