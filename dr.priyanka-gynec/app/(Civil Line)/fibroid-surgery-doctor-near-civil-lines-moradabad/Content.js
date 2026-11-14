
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function FibroidSurgeryDoctor() {
  const faqs = [
    {
      q: "Are fibroids cancerous?",
      a: "Fibroids are almost always non-cancerous growths. Cancer developing in a fibroid is very rare.",
    },
    {
      q: "Do all fibroids need surgery?",
      a: "No. Small fibroids without symptoms may only need regular monitoring. Surgery is considered when fibroids cause troublesome symptoms, grow rapidly or affect fertility.",
    },
    {
      q: "Can fibroids be removed without removing the uterus?",
      a: "Yes. Myomectomy removes fibroids while preserving the uterus, when suitable. Your doctor will assess the size, number and location of the fibroids before recommending treatment.",
    },
    {
      q: "What is laparoscopic myomectomy?",
      a: "It is the removal of fibroids through small abdominal cuts using a camera and fine instruments. It often involves less pain and faster recovery than open surgery.",
    },
    {
      q: "Can fibroids come back after surgery?",
      a: "They can return in some women after myomectomy, so regular follow-up appointments and scans may be advised.",
    },
    {
      q: "Do fibroids affect pregnancy?",
      a: "Some fibroids can affect pregnancy depending on their size and position. Many women with fibroids have healthy pregnancies with appropriate monitoring and antenatal care.",
    },
    {
      q: "How long is recovery after fibroid surgery?",
      a: "Recovery varies depending on the procedure and your health. Recovery after laparoscopic surgery is generally quicker than after open surgery. Follow your doctor's advice on rest and activity.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705 or email drpriyankagynaec@gmail.com to enquire about a consultation.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">

          {/* Main Content */}
          <div className="order-1 min-w-0 space-y-10">

            {/* Introduction */}
            <section>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-[#74122E] sm:text-4xl">
                Fibroid Surgery Doctor Near Civil Lines, Moradabad: Uterus-Preserving Care for Fibroids
              </h1>

              <p className="mb-4 leading-8 text-gray-700">
                Uterine fibroids are very common. Many women live with them
                for years without symptoms, while others struggle with heavy
                periods, pelvic pain, pressure on the bladder and difficulty
                in conceiving. If you have been told that you have fibroids,
                it is natural to ask whether you need surgery, and whether
                your uterus can be saved.
              </p>

              <p className="leading-8 text-gray-700">
                If you are looking for a{" "}
                <strong>
                  fibroid surgery doctor near Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers 3D
                laparoscopic care, including uterus-preserving surgery.
              </p>
            </section>

            {/* Website Overview */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Website Overview: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                The clinic's website describes a women's health and fertility
                centre guided by the philosophy "Her Health First." Dr.
                Priyanka Pachauri is presented as a gynaecologist in Moradabad
                focused on laparoscopic gynaecological surgery, antenatal and
                postnatal care, high-risk pregnancies and menstrual disorder
                treatment.
              </p>

              <p className="mb-4 leading-8 text-gray-700">
                Laparoscopic myomectomy is listed as uterus-preserving 3D
                laparoscopic surgery for uterine fibroids. Related services
                include laparoscopic hysterectomy, diagnostic hysteroscopy,
                hysteroscopic polypectomy, cystectomy, endometriosis surgery
                and fertility and IVF care.
              </p>

              <p className="leading-8 text-gray-700">
                High-definition 3D laparoscopic surgery is highlighted as a
                core facility.
              </p>
            </section>

            {/* What Are Fibroids */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                What Are Uterine Fibroids?
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Fibroids, also called myomas or leiomyomas, are non-cancerous
                growths that develop in or on the wall of the uterus. They
                vary in size from a small seed to a large mass, and a woman
                may have one or many. They are very rarely cancerous.
              </p>

              <h3 className="mb-3 text-lg font-semibold text-[#74122E]">
                Types of Fibroids by Location
              </h3>

              <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-700">
                <li>
                  <strong>Intramural:</strong> Within the muscle wall of the
                  uterus.
                </li>
                <li>
                  <strong>Subserosal:</strong> On the outer surface of the
                  uterus.
                </li>
                <li>
                  <strong>Submucosal:</strong> Just under the inner lining,
                  projecting into the uterine cavity.
                </li>
                <li>
                  <strong>Pedunculated:</strong> Attached by a stalk, either
                  inside or outside the uterus.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                The location matters because it affects symptoms and the best
                treatment.
              </p>
            </section>

            {/* Symptoms */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Symptoms of Fibroids
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Many fibroids cause no symptoms. When they do, women may
                notice:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Heavy or prolonged periods.</li>
                <li>Bleeding between periods.</li>
                <li>
                  Anaemia, with tiredness, weakness and breathlessness.
                </li>
                <li>Pelvic pain or a feeling of pressure.</li>
                <li>Painful periods.</li>
                <li>
                  Frequent urination or difficulty emptying the bladder.
                </li>
                <li>Constipation or bloating.</li>
                <li>
                  A feeling of fullness or a lump in the lower abdomen.
                </li>
                <li>Pain during intercourse.</li>
                <li>
                  Difficulty in conceiving or repeated miscarriages in some
                  cases.
                </li>
              </ul>
            </section>

            {/* Causes */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                What Causes Fibroids?
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                The exact cause of uterine fibroids is unknown. However,
                several factors may play a role in their development:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>
                  <strong>Hormones:</strong> Especially oestrogen and
                  progesterone.
                </li>
                <li>
                  <strong>Family history:</strong> Fibroids may be more common
                  in women with affected family members.
                </li>
                <li>
                  <strong>Age:</strong> They are common in the thirties and
                  forties.
                </li>
                <li>
                  <strong>Obesity:</strong> Body weight may influence risk.
                </li>
                <li>
                  <strong>Genetic factors:</strong> Certain genetic changes
                  may contribute to fibroid development.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Fibroids usually shrink after menopause, when hormone levels
                fall.
              </p>
            </section>

            {/* Diagnosis */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                How Fibroids Are Diagnosed
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Diagnosis begins with a discussion of your symptoms and a
                pelvic examination. Your doctor may recommend tests to
                understand the size, number and position of the fibroids.
                These may include:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-700">
                <li>
                  <strong>Pelvic ultrasound:</strong> Shows the size, number
                  and position of fibroids.
                </li>
                <li>
                  <strong>Blood tests:</strong> Haemoglobin and iron levels to
                  check for anaemia.
                </li>
                <li>
                  <strong>Hysteroscopy:</strong> To examine the inside of the
                  uterus when submucosal fibroids are suspected.
                </li>
                <li>
                  <strong>MRI:</strong> In selected cases when more detail is
                  needed.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                A clear map of your fibroids helps your doctor choose the
                right treatment.
              </p>
            </section>

            {/* Do All Fibroids Need Surgery */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Do All Fibroids Need Surgery?
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                No. Treatment depends on your symptoms, the size and position
                of fibroids, your age and your wish for pregnancy. Small
                fibroids without symptoms may only need regular monitoring.
              </p>

              <h3 className="mb-3 text-lg font-semibold text-[#74122E]">
                Non-Surgical Treatment Options
              </h3>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Medicines to reduce heavy bleeding and pain.</li>
                <li>
                  Hormonal treatment, including a hormone-releasing
                  intrauterine system in suitable cases.
                </li>
                <li>Iron treatment for anaemia.</li>
                <li>Regular follow-up scans.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Surgery is considered when fibroids cause troublesome
                symptoms, grow rapidly, affect fertility or do not respond to
                medicines.
              </p>
            </section>

            {/* Surgical Options */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#74122E]">
                Surgical Options for Fibroids
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Laparoscopic Myomectomy
                  </h3>
                  <p className="leading-7 text-gray-700">
                    The fibroids are removed through small abdominal cuts
                    using a camera and fine instruments, while the uterus is
                    repaired and preserved. The clinic's website lists this
                    as uterus-preserving 3D laparoscopic surgery.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Hysteroscopic Removal
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Submucosal fibroids and polyps that project into the
                    uterine cavity can be removed through the vagina and
                    cervix, without abdominal cuts, in suitable cases.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Open Myomectomy
                  </h3>
                  <p className="leading-7 text-gray-700">
                    This approach may be used when fibroids are very large or
                    numerous, or when keyhole surgery is not safe.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Hysterectomy
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Removal of the uterus may be considered for women who
                    have completed their families and have severe symptoms
                    or when other treatments are unsuitable. The clinic also
                    lists laparoscopic hysterectomy.
                  </p>
                </div>
              </div>

              <p className="mt-4 leading-8 text-gray-700">
                Your doctor will explain which procedure is best for you
                based on your symptoms, medical history and future pregnancy
                plans.
              </p>
            </section>

            {/* Why Myomectomy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Why Choose Myomectomy?
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Myomectomy is often chosen by women who want to remove
                fibroids while keeping their uterus. It may be suitable for
                women who:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Wish to keep their uterus.</li>
                <li>Hope to conceive in the future.</li>
                <li>
                  Want relief from heavy bleeding or pressure symptoms.
                </li>
                <li>
                  Prefer to avoid hormonal changes linked to hysterectomy.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Fibroids can sometimes return after myomectomy, so follow-up
                is important.
              </p>
            </section>

            {/* Benefits of Laparoscopy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Benefits of Laparoscopic Fibroid Surgery
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Compared with open surgery, the keyhole approach often
                offers:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Smaller cuts and less scarring.</li>
                <li>Less pain after the operation.</li>
                <li>Shorter hospital stay.</li>
                <li>Quicker recovery and return to routine.</li>
                <li>Lower risk of wound infection and hernia.</li>
                <li>Often less blood loss.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Suitability depends on the size, number and location of
                fibroids, and your surgeon will advise accordingly.
              </p>
            </section>

            {/* Preparing for Surgery */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Preparing for Fibroid Surgery
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                If surgery is recommended, your doctor will give you personal
                instructions to prepare. These commonly include:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Blood tests, ultrasound and a general health check.</li>
                <li>Treatment of anaemia before surgery.</li>
                <li>
                  Informing your doctor about medicines, allergies and past
                  surgeries.
                </li>
                <li>Fasting before anaesthesia.</li>
                <li>Arranging help at home during recovery.</li>
                <li>Packing comfortable clothes for the hospital.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Ask about the type of surgery, expected hospital stay, risks
                and recovery timeline before the procedure.
              </p>
            </section>

            {/* Recovery */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Recovery After Fibroid Surgery
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Recovery varies with the procedure and your health. After
                laparoscopic myomectomy, women commonly notice:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>
                  Mild pain or shoulder discomfort from the gas for a day or
                  two.
                </li>
                <li>Early walking, which helps recovery.</li>
                <li>Light vaginal spotting for a while.</li>
                <li>
                  A quicker return to routine than after open surgery.
                </li>
              </ul>

              <h3 className="mb-3 mt-6 text-lg font-semibold text-[#74122E]">
                Helpful Tips for Recovery
              </h3>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Walk gently and rest when tired.</li>
                <li>
                  Eat nutritious, high-fibre meals and drink fluids.
                </li>
                <li>Keep wounds clean and dry.</li>
                <li>
                  Avoid heavy lifting and strenuous exercise until allowed.
                </li>
                <li>
                  Avoid intercourse until your doctor confirms healing.
                </li>
                <li>Take medicines on time and attend follow-ups.</li>
              </ul>

              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-red-800">
                  When to Contact Your Doctor
                </h3>
                <p className="leading-7 text-gray-700">
                  Contact your doctor if you have fever, worsening pain,
                  heavy bleeding, foul discharge, wound redness or difficulty
                  passing urine. Seek urgent medical attention for severe or
                  sudden symptoms.
                </p>
              </div>
            </section>

            {/* Risks */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Risks to Understand
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Fibroid surgery is generally safe when performed by a
                qualified surgical team, but all surgery carries risks.
                Possible complications include:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Bleeding.</li>
                <li>Infection.</li>
                <li>Injury to nearby organs.</li>
                <li>Scar tissue formation.</li>
                <li>Reactions to anaesthesia.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Occasionally, a keyhole operation needs to be converted to
                open surgery for safety, and in rare cases bleeding may
                require further treatment. Your surgeon should explain these
                risks openly.
              </p>
            </section>

            {/* Fertility */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Fibroids and Fertility
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Fibroids do not always affect fertility, but some can,
                particularly those that distort the uterine cavity. If you
                are trying to conceive, tell your doctor early.
              </p>

              <p className="mb-4 leading-8 text-gray-700">
                Treatment is planned to protect your fertility, and the
                clinic's fertility and IVF services allow surgical and
                fertility care to be coordinated.
              </p>

              <p className="leading-8 text-gray-700">
                After myomectomy, your doctor will advise when it is safe to
                try for pregnancy and how to plan the delivery.
              </p>
            </section>

            {/* Pregnancy */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Fibroids in Pregnancy
              </h2>

              <p className="leading-8 text-gray-700">
                Many women with fibroids have healthy pregnancies, though
                some need closer monitoring. Fibroids may occasionally cause
                pain, affect the baby's position or influence the mode of
                delivery. Regular antenatal care and scans help manage these
                issues.
              </p>
            </section>

            {/* Why Choose Doctor */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Choosing the right doctor for fibroid treatment is important,
                particularly when you want to preserve your uterus and
                consider future pregnancy. The clinic highlights:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-700">
                <li>
                  A doctor who listens and explains all options clearly.
                </li>
                <li>High-definition 3D laparoscopic facilities.</li>
                <li>
                  Uterus-preserving surgery listed among the services.
                </li>
                <li>
                  Hysteroscopy for polyps and uterine cavity problems.
                </li>
                <li>Hysterectomy offered when truly needed.</li>
                <li>
                  Fertility, pregnancy and paediatric services under one roof.
                </li>
                <li>Continuity of care before and after surgery.</li>
                <li>A private, respectful setting.</li>
              </ul>
            </section>

            {/* Location */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Location and Contact
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                The clinic is at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001, and is accessible to women
                from Civil Lines and nearby areas.
              </p>

              <p className="leading-8 text-gray-700">
                Call +91 90797 65578, message on WhatsApp at +91 89796 70705,
                or email drpriyankagynaec@gmail.com. If you are looking for a
                fibroid surgery doctor near Civil Lines, Moradabad, book a
                consultation to learn which option suits you.
              </p>
            </section>

            {/* Appointment CTA */}
            <section className="rounded-2xl bg-[#F8F4EA] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Book a Consultation with Dr. Priyanka Pachauri
              </h2>

              <p className="mb-6 leading-8 text-gray-700">
                Fibroid treatment depends on your symptoms, medical history
                and future pregnancy plans. Schedule a consultation to
                understand your treatment options, including uterus-preserving
                surgery where suitable.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919079765578"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  WhatsApp
                </a>
              </div>
            </section>

            {/* Contact Card */}
            <section className="rounded-2xl bg-[#F8F4EA] p-6 sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-[#74122E]">
                Contact Dr. Priyanka Gynaec
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Award className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Doctor</h3>
                    <p className="text-gray-700">
                      Dr. Priyanka Pachauri
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+919079765578"
                      className="text-gray-700 hover:text-[#8F1738]"
                    >
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#8F1738]"
                    >
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="break-all text-gray-700 hover:text-[#8F1738]"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                      Pradesh – 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="mt-1 shrink-0 text-[#8F1738]" size={21} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Website</h3>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-gray-700 hover:text-[#8F1738]"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Contact Us
                </Link>

                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  Our Services
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-[#74122E]">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                      {faq.q}
                    </h3>
                    <p className="leading-7 text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Enquiry Form */}
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
