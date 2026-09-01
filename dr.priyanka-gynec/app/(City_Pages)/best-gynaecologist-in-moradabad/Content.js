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

export default function BestGynaecologistMoradabad() {
  const faqs = [
    {
      q: "What makes Dr. Priyanka Pachauri the best gynaecologist in Moradabad?",
      a: "Dr. Priyanka Pachauri combines advanced 3D laparoscopic expertise, international fellowships, and a patient-first approach. She offers evidence-based gynaecological care with genuine empathy, unlike generalized clinics that lack specialized fertility and laparoscopy infrastructure.",
    },
    {
      q: "Does Dr. Priyanka Gynaec treat high-risk pregnancies?",
      a: "Yes, high-risk pregnancy management is a core specialization, including preeclampsia, gestational diabetes, fetal growth restriction (FGR), and other complications, with structured antenatal monitoring throughout.",
    },
    {
      q: "Is 3D laparoscopic surgery available at the clinic?",
      a: "Yes, Dr. Priyanka Pachauri performs high-definition 3D laparoscopic surgery for fibroids, ovarian cysts, endometriosis, and hysterectomy, ensuring minimal scarring, less pain, and faster recovery than open surgery.",
    },
    {
      q: "Do I need prior reports before my first consultation?",
      a: "Not mandatory, but bringing existing ultrasound reports, hormonal profiles, or previous treatment history helps Dr. Priyanka design a more accurate, personalized care plan during your first visit.",
    },
    {
      q: "Can patients from outside Moradabad consult Dr. Priyanka Gynaec?",
      a: "Yes, many patients travel from Rampur, Amroha, Sambhal, and surrounding districts for fertility treatment and laparoscopic surgery. WhatsApp consultation is also available for initial queries and reports review.",
    },
    {
      q: "Does the clinic offer fertility and IVF treatment?",
      a: "Yes, fertility care is a core specialization, including ovulation induction, IUI, IVF, ICSI, GERI time-lapse embryo monitoring, and AI-assisted semen analysis for comprehensive couple fertility evaluation.",
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
                Best Gynaecologist in Moradabad: Complete Women&apos;s Healthcare with Dr. Priyanka Pachauri
              </h1>

              <p className="text-gray-700 mb-4">
                When it comes to finding the best gynaecologist in Moradabad,
                patients look for more than a prescription. They look for
                accurate diagnosis, surgical precision, advanced technology, and
                a doctor who genuinely listens. Dr. Priyanka Pachauri, Consultant
                Obstetrician, Gynaecologist &amp; Infertility Specialist, has
                emerged as one of the most trusted names in Moradabad for
                women seeking expert gynaecological, fertility, and pregnancy
                care.
              </p>

              <p className="text-gray-700">
                Combining world-class expertise with cutting-edge technology
                such as 3D laparoscopy, AI-based imaging, and GERI time-lapse
                embryo monitoring, Dr. Priyanka Gynaec has become the preferred
                choice for women across Moradabad, Rampur, Amroha, Sambhal, and
                neighboring districts who want serious, hospital-grade women&apos;s
                healthcare without having to travel to bigger cities.
              </p>
            </div>

            {/* Section 2 — Why Choose a Specialist Gynaecologist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose a Specialist Gynaecologist Over General Treatment?
              </h2>

              <p className="text-gray-700 mb-4">
                Women&apos;s health concerns, from menstrual disorders and PCOS
                to infertility, high-risk pregnancy, and pelvic conditions,
                require precise, individualized care. Generic treatment often
                addresses only surface symptoms, leading to recurring problems
                and delayed diagnosis of underlying conditions like endometriosis
                or fibroids.
              </p>

              <p className="text-gray-700">
                At Dr. Priyanka Gynaec, every case begins with thorough listening
                and diagnostic clarity before any treatment plan is designed.
                Patients don&apos;t have to choose between compassion and clinical
                precision. They get both, backed by advanced 3D laparoscopic
                and fertility technology.
              </p>
            </div>

            {/* Section 3 — Comprehensive Treatment Facilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Comprehensive Care Offered by Dr. Priyanka Gynaec
              </h2>

              <p className="text-gray-700 mb-6">
                Dr. Priyanka Gynaec in Moradabad is equipped to handle a wide
                spectrum of women&apos;s health concerns through dedicated,
                specialized care pathways.
              </p>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Gynaecology &amp; Laparoscopy
                  </h3>
                  <p className="text-gray-700">
                    High-definition 3D laparoscopic evaluation and surgery for
                    fibroids, ovarian cysts, and endometriosis, along with pelvic
                    floor repair and prolapse corrective procedures, performed
                    with minimal scarring and rapid recovery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Fertility &amp; IVF Treatment
                  </h3>
                  <p className="text-gray-700">
                    Comprehensive fertility evaluation, ovulation induction, IUI,
                    IVF, and ICSI supported by GERI time-lapse embryo incubators
                    and AI-powered semen analysis, personalized to each
                    couple&apos;s diagnosis and path to parenthood.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Pregnancy, Birthing &amp; Antenatal Care
                  </h3>
                  <p className="text-gray-700">
                    Structured antenatal check-ups, growth scans, 3D/4D fetal
                    wellbeing monitoring, and supportive birth planning,
                    including painless epidural labor assistance and continuous
                    fetal monitoring during delivery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. High-Risk Pregnancy Management
                  </h3>
                  <p className="text-gray-700">
                    Specialized monitoring and management of preeclampsia,
                    gestational diabetes, fetal growth restriction (FGR), and
                    other complications requiring close obstetric supervision
                    throughout pregnancy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Laparoscopic Myomectomy &amp; Hysterectomy
                  </h3>
                  <p className="text-gray-700">
                    Uterus-preserving laparoscopic removal of fibroids and, when
                    needed, minimally invasive total laparoscopic hysterectomy
                    (TLH) with ovarian preservation options and minimal blood
                    loss using vessel-sealing technology.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Menstrual Disorders &amp; Hysteroscopy
                  </h3>
                  <p className="text-gray-700">
                    Diagnostic hysteroscopy and hysteroscopic polypectomy for
                    abnormal uterine bleeding, uterine polyps, and unexplained
                    infertility, with histopathology verification for accurate
                    diagnosis.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Endometriosis Surgery &amp; Pain Relief
                  </h3>
                  <p className="text-gray-700">
                    Advanced 3D laparoscopic excision of endometriotic implants,
                    chocolate cysts, and pelvic adhesions with nerve-sparing
                    dissection, aimed at long-term pain relief and fertility
                    preservation.
                  </p>
                </div>

              </div>
            </div>

            {/* Section 4 — Experienced Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                An Experienced, Research-Driven Specialist
              </h2>

              <p className="text-gray-700 mb-4">
                What sets Dr. Priyanka Pachauri apart as a gynaecologist in
                Moradabad is her commitment to individualized diagnosis. Rather
                than prescribing generic treatment, she reviews each patient&apos;s
                complete history, current symptoms, and reproductive goals
                before designing a care plan, an approach that consistently
                improves outcomes and reduces recovery time.
              </p>

              <p className="text-gray-700">
                MBBS from Gajra Raja Medical College (GRMC), Gwalior and MS in
                Obstetrics &amp; Gynaecology from Sardar Patel Medical College
                (SPMC), Bikaner, along with Fellowships in Minimal Access
                Surgery (FMAS), Laparoscopic Surgery, and Advanced Infertility.
                Dr. Priyanka co-leads Shree Advanced Urogynae Clinic and serves
                as a Consultant at Ujala Cygnus BrightStar Hospital, New
                Moradabad.
              </p>
            </div>

            {/* Section 5 — Hygiene & Infrastructure */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology, Hygiene &amp; Patient Comfort
              </h2>

              <p className="text-gray-700 mb-4">
                A common concern patients have when choosing a gynaecologist is
                whether the clinic has the right technology and hygiene
                standards. Dr. Priyanka Gynaec addresses this directly with:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High-Definition 3D Laparoscopic surgical setup</li>
                <li>Voluson E22BT2024 with 3D &amp; 4D ultrasound machine</li>
                <li>GERI time-lapse embryo incubator</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
                <li>Clean, private consultation and examination rooms</li>
              </ul>

              <p className="text-gray-700">
                This attention to technology and comfort has made Dr. Priyanka
                Gynaec a trusted choice not just for local Moradabad residents
                but also for patients traveling from nearby towns for
                specialized fertility and laparoscopic care.
              </p>
            </div>

            {/* Section 6 — Why Moradabad Needed This Clinic */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Moradabad Needed a Dedicated Women&apos;s Health Specialist
              </h2>

              <p className="text-gray-700 mb-4">
                Moradabad, known widely for its brassware industry, has
                historically had limited access to specialized, technology-driven
                gynaecological care. Many women previously had to travel to
                Delhi or bigger cities for advanced laparoscopic surgery or IVF
                treatment.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Gynaec was established to fill this exact gap,
                bringing 3D laparoscopy, fertility technology, and high-risk
                pregnancy expertise to Moradabad itself, so women no longer need
                to leave the city for serious gynaecological intervention.
              </p>
            </div>

            {/* Section 7 — Who Should Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Visit Dr. Priyanka Gynaec?
              </h2>

              <p className="text-gray-700 mb-4">
                You should consider consulting Dr. Priyanka Pachauri if you are
                dealing with:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Difficulty conceiving after 12 months of trying (or 6 months if age is above 35)</li>
                <li>Irregular, absent, or painful periods (possible PCOS or endometriosis)</li>
                <li>A high-risk pregnancy requiring close monitoring</li>
                <li>Fibroids, ovarian cysts, or pelvic pain</li>
                <li>Abnormal uterine bleeding or suspected uterine polyps</li>
                <li>Pelvic organ prolapse or urinary incontinence</li>
                <li>Recurrent miscarriages or failed fertility attempts elsewhere</li>
                <li>Male factor infertility concerns needing joint evaluation</li>
                <li>A desire for a supportive, well-planned normal delivery</li>
                <li>Routine antenatal care and pregnancy screening</li>
              </ul>

              <p className="text-gray-700">
                Even women without a specific complaint are encouraged to visit
                for a routine gynaecological check-up, as Dr. Priyanka Gynaec
                recommends periodic screening for long-term reproductive health.
              </p>
            </div>

            {/* Section 8 — The Difference */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Dr. Priyanka Gynaec Difference
              </h2>

              <p className="text-gray-700 mb-4">
                Unlike clinics that rely on standard, one-size-fits-all
                protocols, Dr. Priyanka Gynaec designs every treatment plan
                around the individual patient, combining surgical precision
                with genuine empathy. This patient-first approach is what
                leads to outcomes patients hope for, not just temporary relief.
              </p>

              <p className="text-gray-700">
                Patient education is also central to care here, from
                understanding treatment options to post-procedure recovery and
                fertility planning. Patients leave every consultation with
                clarity, not just a prescription.
              </p>
            </div>

            {/* Section 9 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">

              <h2 className="text-3xl font-serif mb-4">
                Book a Consultation with Dr. Priyanka Gynaec
              </h2>

              <p className="text-black mb-6">
                Women interested in expert gynaecological, fertility, or
                pregnancy care can book a consultation with Dr. Priyanka
                Pachauri in Moradabad. The initial consultation typically
                involves a detailed history review and diagnostic evaluation,
                followed by a personalized treatment plan. For patients
                traveling from outside Moradabad, WhatsApp consultation is
                available for initial queries and report review.
              </p>

              <div className="space-y-4 mb-6">

                {/* Clinic Address */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">Dr. Priyanka Gynaec</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad,
                      Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />

                  <div>
    <p className="font-semibold">Contact Us</p>

    <div className="flex items-center gap-3 text-black">
      <a href="tel:9079765578" className="hover:underline">
        9079765578
      </a>

      <span className="text-gray-400">|</span>

      <a href="tel:9680321761 " className="hover:underline">
        9680321761 (WhatsApp)
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

            {/* Section 10 — FAQs */}
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

                    <p className="text-gray-700">
                      {faq.a}
                    </p>
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