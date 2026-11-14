
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

export default function BestGynaecologist() {
  const faqs = [
    {
      q: "How do I choose the best gynaecologist in Moradabad?",
      a: "Look for qualifications, experience, clear communication, modern facilities, ethical advice and good follow-up care. Choose a doctor you feel comfortable talking to.",
    },
    {
      q: "What services does Dr. Priyanka Gynaec offer?",
      a: "Pregnancy and delivery care, high-risk pregnancy monitoring, fertility and IVF, 3D laparoscopic surgery, hysteroscopy, menstrual disorder treatment, sterilization and paediatric care.",
    },
    {
      q: "At what age should a woman first visit a gynaecologist?",
      a: "Many doctors suggest a first visit between 13 and 15 years, or earlier if there are problems with periods. Adult women should have routine checkups even without symptoms.",
    },
    {
      q: "Is laparoscopic surgery safe?",
      a: "Laparoscopy is widely used and generally safe when performed by trained surgeons. It usually means smaller cuts and faster recovery, but suitability depends on your condition.",
    },
    {
      q: "Can PCOS be treated?",
      a: "Yes. PCOS is manageable with lifestyle changes, medicines and, when needed, fertility treatment. Early diagnosis helps.",
    },
    {
      q: "When should we see a fertility specialist?",
      a: "Consult one if you have been trying to conceive for a year without success, or six months if the woman is over 35 or has irregular periods or known reproductive problems.",
    },
    {
      q: "Does the clinic offer care for newborn babies?",
      a: "Yes. Paediatric consultations, newborn care and vaccinations are available.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705 or email drpriyankagynaec@gmail.com.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">

            {/* Introduction */}
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Best Gynaecologist in Civil Lines, Moradabad: Complete Women&apos;s Health Care
              </h1>

              <p className="mb-4 text-gray-700">
                Choosing a gynaecologist is a personal decision. You want
                someone who listens, explains clearly and respects your
                choices. Women&apos;s health needs change across life, from
                the first period and pregnancy to fertility concerns,
                hormonal issues and menopause. A trusted gynaecologist can
                guide you through all of these stages. If you are searching
                for the best gynaecologist in Civil Lines, Moradabad,
                Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers
                comprehensive care built on the philosophy of
                &quot;Her Health First.&quot;
              </p>
            </section>

            {/* About Doctor */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known
                for antenatal and postnatal care, high-risk pregnancy
                management, laparoscopic gynaecological surgery and
                treatment of menstrual disorders. Her clinic combines
                compassionate, patient-centred care with modern technology.
              </p>

              <p className="mb-4 text-gray-700">
                According to the clinic&apos;s website, the practice
                emphasises:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Listening first, then recommending treatment</li>
                <li>Continuity of care, with one team that knows your history</li>
                <li>Minimally invasive surgery wherever possible</li>
                <li>Safe motherhood and gentle birthing support</li>
                <li>Care for women at every life stage</li>
              </ul>
            </section>

            {/* Choosing a Gynaecologist */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Gynaecologist the &quot;Best&quot; for You?
              </h2>

              <p className="mb-4 text-gray-700">
                No single doctor is right for every woman, but certain
                qualities matter. When choosing a gynaecologist, look for:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Patient listening:</strong> She should hear your
                  concerns without rushing or judging.
                </li>
                <li>
                  <strong>Clear communication:</strong> Diagnosis and
                  treatment options should be explained in simple language.
                </li>
                <li>
                  <strong>Qualifications and experience:</strong> Check
                  training, surgical experience and areas of expertise.
                </li>
                <li>
                  <strong>Modern facilities:</strong> Reliable ultrasound,
                  laboratory support and surgical technology improve
                  accuracy and safety.
                </li>
                <li>
                  <strong>Ethical advice:</strong> A good doctor recommends
                  only the tests and procedures you truly need.
                </li>
                <li>
                  <strong>Follow-up care:</strong> Women&apos;s health often
                  needs ongoing monitoring.
                </li>
                <li>
                  <strong>Privacy and comfort:</strong> Sensitive topics
                  deserve a respectful setting.
                </li>
              </ul>
            </section>

            {/* Services */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Offered at Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 text-gray-700">
                The clinic offers a wide range of services under one roof.
              </p>

              <div className="space-y-5 text-gray-700">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pregnancy and Birthing Care
                  </h3>
                  <p>
                    Structured antenatal checkups, ultrasound and screening
                    tests through every trimester, along with support for
                    safe and gentle childbirth. The clinic prioritises
                    normal vaginal delivery where it is medically suitable.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    High-Risk Pregnancy Care
                  </h3>
                  <p>
                    Closer monitoring for women with diabetes, thyroid
                    problems, high blood pressure, twin pregnancies or
                    previous pregnancy complications.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Fertility and IVF
                  </h3>
                  <p>
                    Personalised fertility evaluation and treatment for
                    couples who find conceiving difficult. The website
                    describes advanced tools such as time-lapse embryo
                    monitoring and AI-based semen analysis.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Gynaecology and 3D Laparoscopy
                  </h3>
                  <p>
                    Minimally invasive keyhole surgery for ovarian cysts,
                    fibroids, endometriosis, prolapse and hysterectomy,
                    with smaller incisions and faster recovery than open
                    surgery.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Hysteroscopy
                  </h3>
                  <p>
                    Diagnostic hysteroscopy to examine the uterine cavity
                    and hysteroscopic removal of uterine polyps without cuts.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Menstrual Disorder Treatment
                  </h3>
                  <p>
                    Evaluation and treatment of irregular periods, heavy
                    bleeding, painful periods and hormonal imbalance.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Sterilization
                  </h3>
                  <p>
                    Laparoscopic tubal ligation as a day-care procedure
                    for women seeking permanent contraception.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Paediatric Care
                  </h3>
                  <p>
                    Paediatric consultations, newborn care and vaccinations.
                  </p>
                </div>
              </div>
            </section>

            {/* Conditions Treated */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Conditions Treated
              </h2>

              <p className="mb-4 text-gray-700">
                Women visit a gynaecologist for many reasons, including:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, delayed, heavy or painful periods</li>
                <li>PCOS and hormonal imbalance</li>
                <li>Difficulty in conceiving</li>
                <li>Pregnancy checkups and delivery planning</li>
                <li>Ovarian cysts</li>
                <li>Uterine fibroids and polyps</li>
                <li>Endometriosis and chronic pelvic pain</li>
                <li>White discharge, itching and vaginal infections</li>
                <li>Urinary problems and uterine prolapse</li>
                <li>Menopause symptoms</li>
                <li>Contraception advice and family planning</li>
              </ul>
            </section>

            {/* Technology */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology That Supports Accurate Care
              </h2>

              <p className="mb-4 text-gray-700">
                Good care depends on accurate diagnosis. The clinic&apos;s
                website lists advanced facilities, including:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery</li>
                <li>3D and 4D ultrasound</li>
                <li>
                  Time-lapse embryo imaging incubator for fertility treatment
                </li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Technology is a tool. What matters is how thoughtfully it is
                used, and the clinic&apos;s stated approach is to apply it
                with patience and empathy.
              </p>
            </section>

            {/* Laparoscopic Surgery */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Laparoscopic Surgery: Smaller Cuts, Faster Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Many gynaecological problems once needed large abdominal
                incisions. Laparoscopy uses a few tiny cuts and a camera,
                which usually means:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Less pain after surgery</li>
                <li>Smaller scars</li>
                <li>Shorter hospital stay</li>
                <li>Quicker return to normal activities</li>
                <li>Lower risk of some wound complications</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Laparoscopic procedures at the clinic include cystectomy
                for ovarian cysts, myomectomy for fibroids, hysterectomy,
                endometriosis excision and prolapse repair. Whether surgery
                is needed, and which type, depends on your condition. Your
                doctor will explain the options, risks and benefits before
                any decision.
              </p>
            </section>

            {/* When to Visit */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Gynaecologist?
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for a serious problem. Consult a gynaecologist if
                you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods that are very painful, very heavy or irregular</li>
                <li>Missed periods and possible pregnancy</li>
                <li>Pelvic pain that does not settle</li>
                <li>Abnormal discharge, itching or a bad smell</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>
                  Difficulty conceiving after a year of trying, or six
                  months if over 35
                </li>
                <li>Lumps or heaviness in the lower abdomen</li>
                <li>
                  Hot flashes, mood changes or irregular bleeding near
                  menopause
                </li>
                <li>
                  Leaking urine or a feeling of something coming down in
                  the vagina
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Routine checkups matter even when you feel well. Regular
                visits help detect problems early.
              </p>
            </section>

            {/* Preventive Care */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventive Care for Every Age
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Teenagers:</strong> Guidance on periods, hygiene,
                  nutrition and vaccination.
                </p>

                <p>
                  <strong>Young adults:</strong> Contraception advice, PCOS
                  care and preconception planning.
                </p>

                <p>
                  <strong>Pregnancy:</strong> Regular antenatal care, healthy
                  nutrition and safe delivery planning.
                </p>

                <p>
                  <strong>After delivery:</strong> Recovery, breastfeeding
                  support and family planning.
                </p>

                <p>
                  <strong>Midlife:</strong> Evaluation of heavy bleeding,
                  fibroids and perimenopause symptoms.
                </p>

                <p>
                  <strong>After menopause:</strong> Bone health, heart health
                  and attention to any unusual bleeding.
                </p>
              </div>
            </section>

            {/* First Visit */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Bring any previous medical reports, ultrasound scans and a
                list of medicines. Note the dates of your last few periods
                and write down your questions. During the visit the doctor
                will:
              </p>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>Listen to your concerns and take a detailed history</li>
                <li>
                  Examine you if needed, with your consent and in privacy
                </li>
                <li>Suggest tests only when necessary</li>
                <li>
                  Explain the likely cause and the treatment options
                </li>
                <li>Plan follow-up visits</li>
              </ol>

              <p className="mt-4 text-gray-700">
                You are welcome to bring a family member for support.
              </p>
            </section>

            {/* Location */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Location and Accessibility
              </h2>

              <p className="mb-4 text-gray-700">
                The clinic is at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001. Women from Civil Lines and
                other parts of the city can reach it for consultations and
                follow-ups. Easy access matters, because many women&apos;s
                health conditions need more than one visit.
              </p>
            </section>

            {/* Appointment and Contact */}
            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book an Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Call <strong>+91 90797 65578</strong> or message on WhatsApp
                at <strong>+91 89796 70705</strong>. You can also write to
                <strong> drpriyankagynaec@gmail.com</strong>. If you are
                looking for the best gynaecologist in Civil Lines,
                Moradabad, schedule a consultation and find out whether the
                clinic&apos;s approach suits you.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">

                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist &amp; Fertility Specialist (MBBS, MS)
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh – 244001
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

            {/* FAQs */}
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

                    <p className="text-gray-700">
                      {faq.a}
                    </p>
                  </article>
                ))}
              </div>
            </section>

          </div>

          {/* Enquiry Form */}
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
