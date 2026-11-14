
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

export default function FemaleGynaecologist() {
  const faqs = [
    {
      q: "Why do many women prefer a female gynaecologist?",
      a: "Women often feel more comfortable discussing intimate symptoms and undergoing examinations with a female doctor, which helps them speak openly and share their concerns without hesitation.",
    },
    {
      q: "What problems does a gynaecologist treat?",
      a: "A gynaecologist treats period problems, PCOS, pregnancy-related concerns, infertility, infections, ovarian cysts, fibroids, endometriosis, prolapse, contraception needs and menopause symptoms.",
    },
    {
      q: "When should a girl first see a gynaecologist?",
      a: "A first visit may be helpful between 13 and 15 years of age, or earlier if she experiences very painful, heavy or missed periods or other concerns.",
    },
    {
      q: "Does Dr. Priyanka Gynaec offer pregnancy and delivery care?",
      a: "Yes. The clinic offers antenatal services, high-risk pregnancy care, normal delivery support and postnatal follow-up.",
    },
    {
      q: "Will I always need an internal examination?",
      a: "No. The doctor decides after listening to your medical history and understanding your symptoms. Any examination is performed only when needed, with your consent and privacy.",
    },
    {
      q: "Is laparoscopic surgery safe?",
      a: "Laparoscopic surgery is widely used and generally safe when performed by trained specialists. It often involves smaller incisions and faster recovery, but suitability depends on your medical condition.",
    },
    {
      q: "Does the clinic provide fertility treatment?",
      a: "Yes. Fertility evaluation and IVF are among the services listed by the clinic. Contact the clinic to discuss your individual requirements.",
    },
    {
      q: "How do I book an appointment?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705 or email drpriyankagynaec@gmail.com to enquire about an appointment.",
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
                Female Gynaecologist in Civil Lines, Moradabad: Comfortable,
                Complete Women's Care
              </h1>

              <p className="mb-4 leading-8 text-gray-700">
                Talking about periods, pregnancy, infections or sexual health
                is not easy for everyone. Many women delay a visit because
                they feel shy or fear being judged. A female gynaecologist can
                make these conversations easier, and a good one makes you feel
                heard from the first minute.
              </p>

              <p className="leading-8 text-gray-700">
                If you are looking for a{" "}
                <strong>
                  female gynaecologist in Civil Lines, Moradabad
                </strong>
                , Dr. Priyanka Pachauri at Dr. Priyanka Gynaec provides care
                for women at every stage of life.
              </p>
            </section>

            {/* Why Women Choose Female Gynaecologist */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Why Women Choose a Female Gynaecologist
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                A gynaecologist's work involves private, physical and emotional
                topics. Many women prefer a female doctor because:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7 text-gray-700">
                <li>They feel more relaxed describing symptoms.</li>
                <li>Pelvic examinations feel more comfortable.</li>
                <li>
                  Family or cultural preferences make it easier to seek care.
                </li>
                <li>
                  They feel understood on issues such as painful periods,
                  pregnancy fears and menopause.
                </li>
                <li>
                  Teenagers and unmarried women may find it easier to ask
                  questions.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                The doctor's gender is only part of the picture. Skill,
                experience, ethics and a respectful attitude matter just as
                much.
              </p>
            </section>

            {/* Website Overview */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Website Overview: What Dr. Priyanka Gynaec Offers
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                The clinic's website describes a women's health and fertility
                centre built around the philosophy "Her Health First." Dr.
                Priyanka Pachauri is presented as a gynaecologist in Moradabad
                focused on antenatal and postnatal care, high-risk pregnancies,
                laparoscopic surgery and menstrual disorders.
              </p>

              <p className="leading-8 text-gray-700">
                The website highlights a listening-first approach, continuity
                of care and the careful use of modern technology.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#74122E]">
                Services at Dr. Priyanka Gynaec
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Pregnancy and Birthing Care
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Regular antenatal visits, scans and screening tests, with
                    support for safe and gentle delivery and an emphasis on
                    normal vaginal birth where medically suitable.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Antenatal Services
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Structured prenatal care through each trimester to monitor
                    the health of the mother and developing baby.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    High-Risk Pregnancy Care
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Closer monitoring for diabetes, thyroid disease, high
                    blood pressure, twin pregnancy or previous complications.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Fertility and IVF
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Personalised evaluation and treatment for couples facing
                    difficulty in conceiving.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Menstrual Disorder Treatment
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Care for irregular, heavy or painful periods and hormonal
                    imbalance.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    3D Laparoscopy
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Keyhole surgery for ovarian cysts, fibroids, endometriosis,
                    prolapse and hysterectomy.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Hysteroscopy
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Examination of the uterine cavity and removal of polyps
                    without cuts on the abdomen.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Sterilization
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Laparoscopic tubal ligation as a day-care procedure.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Paediatric Care
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Child consultations, newborn care and vaccinations.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Reasons */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Common Reasons to Visit a Female Gynaecologist
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Women may need gynaecological care for a variety of symptoms
                and health concerns. Common reasons to schedule a consultation
                include:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Periods that are irregular, delayed, heavy or painful.</li>
                <li>PCOS, acne and unwanted facial hair.</li>
                <li>Confirming pregnancy and planning antenatal care.</li>
                <li>Difficulty in conceiving.</li>
                <li>
                  White discharge, itching, burning or recurring infections.
                </li>
                <li>Pelvic or lower abdominal pain.</li>
                <li>Ovarian cysts, fibroids or polyps.</li>
                <li>Endometriosis.</li>
                <li>
                  Urine leakage or a sense of heaviness in the vagina.
                </li>
                <li>Contraception and family planning.</li>
                <li>
                  Menopause symptoms such as hot flashes, mood swings and poor
                  sleep.
                </li>
              </ul>
            </section>

            {/* Women's Health Life Stages */}
            <section>
              <h2 className="mb-5 text-2xl font-bold text-[#74122E]">
                Women's Health at Different Life Stages
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Teenage Years
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Questions about first periods, cramps, hygiene and
                    nutrition are common. Cycles can take a couple of years to
                    settle, but very heavy bleeding or severe pain should be
                    checked.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Twenties and Thirties
                  </h3>
                  <p className="leading-7 text-gray-700">
                    This stage often involves PCOS, contraception choices,
                    preconception planning, pregnancy and infections.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    During Pregnancy
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Regular checkups protect both mother and baby. Visits
                    cover blood pressure, weight, haemoglobin, scans and
                    delivery planning.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    After Delivery
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Recovery, breastfeeding, emotional wellbeing and family
                    planning need attention.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    Forties and Beyond
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Heavy bleeding, fibroids and perimenopause symptoms become
                    more common.
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-5">
                  <h3 className="mb-2 text-lg font-semibold text-[#74122E]">
                    After Menopause
                  </h3>
                  <p className="leading-7 text-gray-700">
                    Bone and heart health matter, and any bleeding after
                    menopause needs prompt evaluation.
                  </p>
                </div>
              </div>
            </section>

            {/* Technology */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Technology That Supports Diagnosis and Treatment
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                The website lists several advanced facilities that support
                women's health diagnosis and treatment:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>High-definition 3D laparoscopic surgery.</li>
                <li>3D and 4D ultrasound.</li>
                <li>
                  Time-lapse embryo imaging incubator for fertility treatment.
                </li>
                <li>
                  AI-powered semen analysis and DNA integrity testing.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Technology helps with accuracy, but it works best alongside
                patient listening and sound medical judgement.
              </p>
            </section>

            {/* Warning Signs */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Signs You Should See a Gynaecologist Soon
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Certain symptoms should not be ignored. Arrange a medical
                consultation if you experience:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Bleeding that soaks a pad every hour or two.</li>
                <li>Bleeding between periods, after intercourse or after menopause.</li>
                <li>Severe pain that stops daily activities.</li>
                <li>No period for three months when you are not pregnant.</li>
                <li>Foul-smelling or unusual vaginal discharge.</li>
                <li>Ongoing pelvic pain.</li>
                <li>A lump or swelling in the lower abdomen.</li>
                <li>
                  Not conceiving after a year of trying, or six months if over
                  35.
                </li>
                <li>
                  Bleeding, leaking fluid or reduced baby movements during
                  pregnancy, which need urgent attention.
                </li>
              </ul>
            </section>

            {/* Laparoscopic Surgery */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Understanding Laparoscopic Surgery
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Laparoscopy uses a few small incisions and a camera to examine
                or treat conditions inside the abdomen and pelvis. Compared
                with open surgery, it often brings:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>Less pain after the procedure.</li>
                <li>Smaller scars.</li>
                <li>A shorter hospital stay.</li>
                <li>Quicker return to normal activity.</li>
              </ul>

              <p className="mt-4 leading-8 text-gray-700">
                Whether surgery is needed depends on your condition. Many
                problems are managed with medicines and monitoring. A good
                doctor explains your options, risks and alternatives before
                you decide.
              </p>
            </section>

            {/* Healthy Habits */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Simple Habits for Better Women's Health
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Everyday habits can support general health and help women take
                better care of their bodies. Consider these simple practices:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                <li>
                  Eat balanced meals with vegetables, fruit, protein, whole
                  grains and iron-rich foods.
                </li>
                <li>Exercise moderately most days.</li>
                <li>Sleep seven to eight hours.</li>
                <li>Keep a record of your periods.</li>
                <li>
                  Maintain intimate hygiene with mild, gentle products and
                  avoid douching.
                </li>
                <li>
                  Get regular checkups for anaemia, thyroid and blood sugar.
                </li>
                <li>
                  Avoid taking hormonal pills or antibiotics without medical
                  advice.
                </li>
                <li>Reach out to a trusted person when stressed.</li>
              </ul>
            </section>

            {/* First Consultation */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                What Happens During Your First Consultation
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Preparing for your first appointment can make the consultation
                easier. Bring previous reports, ultrasound scans and a list of
                current medicines. Note the dates of your last few periods and
                write down your questions.
              </p>

              <p className="mb-4 leading-8 text-gray-700">
                During your consultation, the doctor will generally:
              </p>

              <ol className="list-decimal space-y-3 pl-6 leading-7 text-gray-700">
                <li>
                  Listen to your concerns and take a detailed history.
                </li>
                <li>
                  Examine you only if needed, with your consent and privacy.
                </li>
                <li>
                  Suggest only the necessary tests and explain why.
                </li>
                <li>
                  Discuss the probable cause and treatment options.
                </li>
                <li>Plan follow-up visits.</li>
              </ol>

              <p className="mt-4 leading-8 text-gray-700">
                You are welcome to bring a family member or friend for support.
              </p>
            </section>

            {/* Location */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Location and Contact Details
              </h2>

              <p className="mb-4 leading-8 text-gray-700">
                Dr. Priyanka Gynaec is at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001, and is accessible to women
                from Civil Lines and nearby localities.
              </p>

              <p className="leading-8 text-gray-700">
                Call +91 90797 65578, message on WhatsApp at +91 89796 70705,
                or email drpriyankagynaec@gmail.com. If you are looking for a
                female gynaecologist in Civil Lines, Moradabad, book a
                consultation and discuss your concerns in a private,
                respectful setting.
              </p>
            </section>

            {/* Appointment CTA */}
            <section className="rounded-2xl bg-[#F8F4EA] p-6 sm:p-8">
              <h2 className="mb-4 text-2xl font-bold text-[#74122E]">
                Book an Appointment with Dr. Priyanka Pachauri
              </h2>

              <p className="mb-6 leading-8 text-gray-700">
                Your health deserves attention at every stage of life. Schedule
                a consultation to discuss your symptoms, pregnancy concerns,
                menstrual health or any other gynaecological issue in a
                comfortable and respectful setting.
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
