
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

export default function GynaecologistServicesInMoradabad() {
  const faqs = [
    {
      q: "What services does a gynaecologist typically offer?",
      a: "Services generally include pregnancy care, menstrual health management, gynaecological surgery, fertility treatment, and routine screenings.",
    },
    {
      q: "Are laparoscopic surgery services widely available in Moradabad?",
      a: "Yes, several clinics, including advanced ones, now offer laparoscopic options for fibroids, cysts, sterilization, and hysterectomy.",
    },
    {
      q: "Can I get pregnancy care and surgery from the same gynaecologist?",
      a: "Yes, many gynaecologists, especially those trained in both obstetrics and laparoscopic surgery, can manage both.",
    },
    {
      q: "Does fertility treatment fall under standard gynaecologist services?",
      a: "Increasingly yes — many gynaecological clinics now offer integrated fertility evaluation and IVF treatment.",
    },
    {
      q: "How do I know which services I actually need?",
      a: "An initial consultation helps identify the right services based on your symptoms, history, and health goals.",
    },
    {
      q: "Are diagnostic tests usually available at the same clinic?",
      a: "Many well-equipped clinics offer on-site ultrasound and basic diagnostics, reducing the need for outside referrals.",
    },
    {
      q: "Does gynaecologistmoradabad.com list a full range of gynaecological services?",
      a: "Yes, the website lists pregnancy care, multiple laparoscopic surgeries, hysteroscopy, and fertility & IVF treatment.",
    },
    {
      q: "How can I contact Dr. Priyanka Gynaec to ask about a specific service?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, email drpriyankagynec@gmail.com, or visit gynaecologistmoradabad.com.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Does the clinic support both routine and complex gynaecological cases?",
      a: "Based on the range of listed services — from general care to advanced laparoscopic and fertility treatment — it appears to support both.",
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
                Gynaecologist Services in Moradabad: Complete Guide to
                Women&apos;s Healthcare
              </h1>

              <p className="mb-4 text-gray-700">
                Understanding what gynaecologist services in Moradabad are
                actually available can help you make informed decisions about
                your reproductive and general health — whether you need routine
                care, pregnancy support, surgery, or fertility treatment. This
                guide breaks down the full spectrum of gynaecological services
                you should expect from a well-equipped women&apos;s health
                clinic, and highlights a comprehensive local option, Dr.
                Priyanka Pachauri.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Understanding Available Services Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing the full range of services a gynaecologist offers helps
                you:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Avoid unnecessary referrals to multiple specialists for
                  related concerns.
                </li>
                <li>
                  Choose one trusted doctor for long-term care across different
                  life stages.
                </li>
                <li>
                  Get faster, more coordinated treatment, since the same clinic
                  can often handle diagnosis, treatment, and follow-up.
                </li>
                <li>
                  Compare clinics more accurately, based on the specific
                  services you actually need.
                </li>
                <li>
                  Plan your healthcare budget better, knowing what&apos;s
                  typically included under each service category.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Core Gynaecologist Services You Should Look For
              </h2>

              <p className="mb-4 text-gray-700">
                A comprehensive gynaecological practice typically offers a mix
                of the following categories:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Pregnancy & Antenatal Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Routine antenatal check-ups throughout pregnancy, including
                  growth monitoring.
                </li>
                <li>
                  Ultrasound scans to track fetal development at different
                  stages.
                </li>
                <li>
                  High-risk pregnancy management for conditions like gestational
                  diabetes, hypertension, or multiple pregnancies.
                </li>
                <li>
                  Delivery care, including both normal and cesarean delivery
                  support.
                </li>
                <li>
                  Postnatal care for recovery monitoring after childbirth.
                </li>
                <li>
                  Guidance on nutrition, vaccination schedules, and warning
                  signs during pregnancy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Laparoscopic (Minimally Invasive) Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic Sterilization</strong> — a keyhole
                  procedure for permanent contraception.
                </li>
                <li>
                  <strong>Laparoscopic Cystectomy</strong> — precision removal
                  of ovarian cysts while preserving healthy ovarian tissue.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy</strong> — fibroid removal
                  with fertility preservation as a priority.
                </li>
                <li>
                  <strong>Laparoscopic Hysterectomy</strong> — minimally
                  invasive removal of the uterus when medically necessary.
                </li>
                <li>
                  <strong>Endometriosis Surgery</strong> — laparoscopic
                  treatment for endometrial tissue growth outside the uterus.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Diagnostic & Fertility Services
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic Hysteroscopy</strong> — examination and
                  treatment of conditions inside the uterine cavity.
                </li>
                <li>
                  <strong>Fertility evaluation</strong> — hormone testing,
                  ultrasound-based ovarian reserve assessment, and semen
                  analysis coordination.
                </li>
                <li>
                  <strong>IVF (In Vitro Fertilization) treatment</strong> — for
                  couples facing difficulty conceiving naturally.
                </li>
                <li>
                  <strong>Ovulation tracking and monitoring</strong> for
                  fertility planning.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Menstrual & Hormonal Health
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Evaluation of irregular or heavy periods (abnormal uterine
                  bleeding).
                </li>
                <li>
                  PCOS/PCOD management, including lifestyle and medical
                  treatment approaches.
                </li>
                <li>
                  Hormonal imbalance assessment and treatment.
                </li>
                <li>
                  Menopause management, addressing symptoms and long-term health
                  considerations.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. General Gynaecological Care
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Routine pelvic examinations and Pap smears for cervical health
                  screening.
                </li>
                <li>
                  Vaginal infection diagnosis and treatment.
                </li>
                <li>
                  Contraception counseling, including both temporary and
                  permanent options.
                </li>
                <li>
                  General wellness consultations for reproductive health
                  concerns at any life stage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing a Clinic With Advanced Laparoscopic
                Technology
              </h2>

              <p className="mb-4 text-gray-700">
                Many modern gynaecological services now rely on laparoscopic and
                minimally invasive techniques. Clinics equipped with advanced
                technology typically offer:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D/4D laparoscopic visualization for more precise, controlled
                  surgery.
                </li>
                <li>
                  AI-assisted imaging to support accurate diagnosis and surgical
                  planning.
                </li>
                <li>
                  Shorter hospital stays compared to traditional open surgery.
                </li>
                <li>
                  Faster recovery times, allowing quicker return to daily
                  activities.
                </li>
                <li>
                  Reduced scarring and post-operative pain.
                </li>
                <li>
                  Better fertility preservation outcomes, especially important
                  for younger patients.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Fertility & IVF Services Fit Into Gynaecological Care
              </h2>

              <p className="mb-4 text-gray-700">
                Fertility treatment is increasingly becoming a core part of
                comprehensive gynaecological practices, rather than a separate
                specialty. Look for:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Initial fertility work-up, including hormone panels and
                  ultrasound evaluation.
                </li>
                <li>
                  Time-lapse embryo monitoring technology, which allows more
                  precise embryo selection during IVF.
                </li>
                <li>
                  Coordinated care between gynaecological surgery and fertility
                  treatment — for example, treating fibroids or cysts that may
                  be affecting fertility before starting IVF.
                </li>
                <li>
                  Personalized treatment plans based on age, ovarian reserve,
                  and specific fertility challenges.
                </li>
                <li>
                  Emotional and counseling support, since fertility treatment
                  can be a stressful journey for many couples.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Complete Pregnancy Care Journey Typically Includes
              </h2>

              <p className="mb-4 text-gray-700">
                For women seeking pregnancy-related gynaecologist services, a
                complete care journey generally covers:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pre-conception counseling</strong> — health
                  optimization before pregnancy.
                </li>
                <li>
                  <strong>First trimester care</strong> — confirmation scans,
                  early screening tests, and initial risk assessment.
                </li>
                <li>
                  <strong>Second trimester monitoring</strong> — anomaly scans
                  and growth tracking.
                </li>
                <li>
                  <strong>Third trimester preparation</strong> — delivery
                  planning and monitoring for complications.
                </li>
                <li>
                  <strong>Labor and delivery support</strong> — both vaginal and
                  cesarean delivery capability.
                </li>
                <li>
                  <strong>Postnatal follow-up</strong> — recovery checks for
                  both mother and baby coordination with pediatric care.
                </li>
                <li>
                  <strong>Breastfeeding and recovery guidance</strong> in the
                  weeks following delivery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Gynaecologist Clinic for Your Needs
              </h2>

              <p className="mb-4 text-gray-700">
                With so many possible services, choosing the right clinic
                depends on matching your specific needs with what&apos;s
                offered. Consider:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Your current life stage</strong> — are you focused on
                  pregnancy, fertility, surgery, or general wellness?
                </li>
                <li>
                  <strong>Whether the clinic offers laparoscopic options</strong>
                  , especially if surgery may be needed.
                </li>
                <li>
                  <strong>On-site diagnostic capability</strong>, reducing the
                  need to visit multiple locations for tests.
                </li>
                <li>
                  <strong>Doctor&apos;s specific experience</strong> with your
                  concern, not just general gynaecology.
                </li>
                <li>
                  <strong>Clinic accessibility and appointment availability</strong>
                  , especially important during pregnancy.
                </li>
                <li>
                  <strong>Transparent communication</strong> about treatment
                  plans and costs.
                </li>
                <li>
                  <strong>Reviews and testimonials</strong> reflecting real
                  patient experiences with similar services.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask About Available Services Before Booking
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do you offer laparoscopic options for surgeries like fibroid
                  or cyst removal?
                </li>
                <li>
                  What fertility and IVF services are available at your clinic?
                </li>
                <li>
                  Can you manage my entire pregnancy journey, including
                  delivery, at this clinic?
                </li>
                <li>
                  What diagnostic tests are available on-site versus requiring
                  outside referral?
                </li>
                <li>
                  Do you handle both routine care and complex or high-risk
                  cases?
                </li>
                <li>
                  What is the typical cost range for the specific service I
                  need?
                </li>
                <li>
                  How do you coordinate care if I need multiple services (for
                  example, fibroid surgery followed by fertility treatment)?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For those researching gynaecologist services in Moradabad, Dr.
                Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) offers a comprehensive range of services under one clinic.
                Here&apos;s a breakdown based on her website:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pregnancy Care:</strong> Antenatal and postnatal care,
                  along with high-risk pregnancy management.
                </li>
                <li>
                  <strong>Laparoscopic Surgery:</strong> Sterilization,
                  Cystectomy (ovarian cysts), Myomectomy (fibroids), and
                  Hysterectomy — all performed using 3D laparoscopic (keyhole)
                  technology.
                </li>
                <li>
                  <strong>Diagnostic Services:</strong> Diagnostic Hysteroscopy
                  for evaluating and treating uterine cavity conditions.
                </li>
                <li>
                  <strong>Fertility & IVF Treatment:</strong> Supported by
                  AI-based imaging and time-lapse embryo monitoring technology,
                  indicating an advanced approach to fertility care.
                </li>
                <li>
                  <strong>Endometriosis Surgery:</strong> Laparoscopic treatment
                  for endometriosis-related concerns.
                </li>
                <li>
                  <strong>Overall Clinic Philosophy:</strong> The website
                  emphasizes minimally invasive, fertility-preserving techniques
                  across nearly all surgical services, along with modern
                  diagnostic technology.
                </li>
                <li>
                  <strong>Patient Testimonials:</strong> The site includes
                  patient feedback generally reflecting clear communication and
                  a comfortable consultation experience.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
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
              <p className="text-gray-700">
                Gynaecologist services in Moradabad span a wide range — from
                routine check-ups and pregnancy care to advanced laparoscopic
                surgery and fertility treatment. Understanding this full
                spectrum helps you choose a clinic that can support you across
                different needs and life stages, rather than searching
                separately for each concern. A clinic offering integrated,
                technology-driven, minimally invasive care — like the services
                outlined on Dr. Priyanka Pachauri&apos;s website — can be a
                convenient, comprehensive option for women in Moradabad seeking
                coordinated women&apos;s healthcare.
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
