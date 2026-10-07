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
      q: "Who is the best doctor for women's surgery in Moradabad?",
      a: "Dr. Priyanka Pachauri is a highly recommended gynaecologist specialising in advanced laparoscopic women's surgery.",
    },
    {
      q: "Is laparoscopic surgery safer than open surgery?",
      a: "Yes, it generally involves less blood loss, less pain, and a lower infection risk.",
    },
    {
      q: "How long does recovery take after laparoscopic surgery?",
      a: "Most patients recover within 2–4 weeks, much faster than open surgery.",
    },
    {
      q: "Can fibroids be removed without removing the uterus?",
      a: "Yes, laparoscopic myomectomy removes fibroids while preserving the uterus.",
    },
    {
      q: "Does surgery always affect fertility?",
      a: "No, many procedures are specifically designed to preserve fertility.",
    },
    {
      q: "What tests are done before surgery?",
      a: "Ultrasound, blood tests, and sometimes hysteroscopy or MRI are done before surgery.",
    },
    {
      q: "Does Dr. Priyanka Gynaec treat ovarian cysts surgically?",
      a: "Yes, laparoscopic cystectomy is offered for ovarian cyst removal.",
    },
    {
      q: "Can I book an appointment online?",
      a: "Yes, visit https://www.gynaecologistmoradabad.com/ or contact directly via call/WhatsApp.",
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
                Doctor for Women&apos;s Surgery in Moradabad – Dr. Priyanka
                Pachauri
              </h1>

              <p className="mb-4 text-gray-700">
                When a gynaecological condition requires surgical treatment,
                choosing the right doctor for women&apos;s surgery in Moradabad
                becomes one of the most important decisions a woman can make.
                From ovarian cysts and fibroids to prolapse and
                infertility-related procedures, modern surgical techniques now
                allow most conditions to be treated safely, with minimal pain
                and faster recovery.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, a gold medalist gynaecologist in
                Moradabad, specialises in advanced 3D laparoscopic gynaecological
                surgery, offering women a safer, less invasive alternative to
                traditional open surgery. This guide covers the most common
                women&apos;s surgeries, what to expect, and why Dr. Priyanka
                Gynaec is a trusted choice for surgical care in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Laparoscopic (Keyhole) Surgery Over Open Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Laparoscopic surgery has transformed women&apos;s healthcare by
                making major procedures far less traumatic for the body.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Smaller incisions:</strong> usually just a few
                  millimetres, compared to large cuts in open surgery.
                </li>
                <li>
                  <strong>Less blood loss:</strong> during the procedure.
                </li>
                <li>
                  <strong>Significantly less pain:</strong> after surgery.
                </li>
                <li>
                  <strong>Shorter hospital stay:</strong> many procedures allow
                  discharge within 24–48 hours.
                </li>
                <li>
                  <strong>Faster return to daily activities and work.</strong>
                </li>
                <li>
                  <strong>Minimal scarring,</strong> which matters both
                  physically and emotionally.
                </li>
                <li>
                  <strong>Lower risk of infection:</strong> due to smaller wound
                  area.
                </li>
                <li>
                  <strong>Better preservation of fertility:</strong> in
                  procedures like myomectomy and cystectomy.
                </li>
                <li>
                  <strong>3D visualization:</strong> allows greater surgical
                  precision compared to traditional 2D laparoscopy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Women&apos;s Surgeries Performed by Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers a comprehensive range of gynaecological
                surgical procedures:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic Cystectomy:</strong> removal of ovarian
                  cysts while preserving healthy ovarian tissue and fertility.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy:</strong> uterus-preserving
                  removal of fibroids, ideal for women wanting to conceive
                  later.
                </li>
                <li>
                  <strong>Laparoscopic Hysterectomy:</strong> minimally invasive
                  removal of the uterus for conditions like fibroids,
                  adenomyosis, or abnormal bleeding.
                </li>
                <li>
                  <strong>Endometriosis Surgery:</strong> precise excision of
                  endometrial tissue to relieve chronic pelvic pain.
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> advanced keyhole repair for
                  uterine or vaginal vault prolapse.
                </li>
                <li>
                  <strong>Laparoscopic Sterilization:</strong> safe, permanent
                  tubal ligation as a day-care procedure.
                </li>
                <li>
                  <strong>Diagnostic Hysteroscopy:</strong> internal evaluation
                  of the uterine cavity without external incisions.
                </li>
                <li>
                  <strong>Hysteroscopic Polypectomy:</strong> scarless removal
                  of uterine polyps.
                </li>
                <li>
                  <strong>Surgery for ectopic pregnancy,</strong> when required,
                  using minimally invasive techniques.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is Surgery Recommended for Women&apos;s Health Issues?
              </h2>

              <p className="mb-4 text-gray-700">
                Surgery is generally considered only when other treatment
                options have not worked or when the condition requires it
                directly. Common reasons include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Large or persistent ovarian cysts that don&apos;t resolve on
                  their own.
                </li>
                <li>
                  Fibroids causing heavy bleeding, pain, or pressure symptoms.
                </li>
                <li>
                  Severe endometriosis unresponsive to medical management.
                </li>
                <li>
                  Uterine or vaginal prolapse affecting daily comfort and
                  quality of life.
                </li>
                <li>
                  Abnormal uterine bleeding not controlled with medication.
                </li>
                <li>
                  Uterine polyps causing irregular bleeding or affecting
                  fertility.
                </li>
                <li>Confirmed ectopic pregnancy.</li>
                <li>
                  Family completed and seeking permanent sterilization.
                </li>
                <li>
                  Suspicious growths needing removal and biopsy for diagnosis.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnostic Process Before Recommending Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka follows a thorough, patient-centred evaluation
                before any surgical decision:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed medical and symptom history.</li>
                <li>Pelvic examination.</li>
                <li>
                  Ultrasound scan (3D/4D) using the advanced Voluson E22BT2024
                  machine.
                </li>
                <li>Hormonal and blood tests, as needed.</li>
                <li>
                  Diagnostic hysteroscopy, for uterine cavity conditions.
                </li>
                <li>MRI or additional imaging, in select complex cases.</li>
                <li>
                  Discussion of all treatment options, including non-surgical
                  alternatives first.
                </li>
                <li>
                  Clear explanation of risks, benefits, and recovery expectations
                  before finalizing surgery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect Before, During, and After Surgery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before Surgery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pre-surgical blood tests and fitness evaluation.
                </li>
                <li>Anaesthesia consultation, if required.</li>
                <li>
                  Clear instructions on fasting and medication before the
                  procedure.
                </li>
                <li>
                  Detailed discussion of the surgical plan and expected
                  outcomes.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Surgery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed under general or regional anaesthesia, depending on
                  the procedure.
                </li>
                <li>
                  Small incisions made for laparoscopic instruments and camera.
                </li>
                <li>
                  Real-time 3D visualization guiding precise surgical steps.
                </li>
                <li>
                  Continuous monitoring throughout the procedure for safety.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Surgery:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Short hospital stay, often 1–2 days for most laparoscopic
                  procedures.
                </li>
                <li>
                  Pain managed with medication; discomfort is typically much
                  lower than open surgery.
                </li>
                <li>
                  Early mobilization encouraged to speed up recovery.
                </li>
                <li>
                  Follow-up visit scheduled to monitor healing and discuss
                  reports (if biopsy was done).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Timeline After Women&apos;s Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery varies by procedure, but here is a general guide:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Days 1–2:</strong> Hospital stay and initial recovery,
                  mild discomfort managed with medication.
                </li>
                <li>
                  <strong>Week 1:</strong> Light activities can usually resume;
                  avoid heavy lifting.
                </li>
                <li>
                  <strong>Weeks 2–4:</strong> Gradual return to normal routine
                  and work, depending on procedure type.
                </li>
                <li>
                  <strong>4–6 weeks:</strong> Follow-up scan or check-up to
                  confirm complete healing.
                </li>
                <li>
                  <strong>Full recovery:</strong> Typically faster with
                  laparoscopic surgery compared to open surgery, often within
                  2–4 weeks for most procedures.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Women&apos;s Surgery in
                Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gold medalist gynaecologist with international fellowship
                  training in laparoscopic surgery.
                </li>
                <li>
                  Specialised expertise in 3D laparoscopic gynaecological
                  procedures.
                </li>
                <li>
                  Advanced infrastructure including high-definition 3D
                  laparoscopy equipment.
                </li>
                <li>
                  Fertility-focused surgical approach, prioritizing organ and
                  fertility preservation wherever possible.
                </li>
                <li>
                  Transparent communication — patients are guided through every
                  option before deciding on surgery.
                </li>
                <li>
                  Continuity of care, from diagnosis through surgery and
                  post-operative follow-up.
                </li>
                <li>
                  Strong reputation built on genuine patient trust and
                  word-of-mouth referrals.
                </li>
                <li>
                  Conveniently located clinic in Gandhi Nagar, Moradabad.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety Measures Followed for Women&apos;s Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thorough pre-operative screening to assess fitness for
                  surgery.
                </li>
                <li>
                  Sterile operating environment to minimize infection risk.
                </li>
                <li>
                  Experienced anaesthesia support for safe sedation.
                </li>
                <li>
                  Advanced 3D laparoscopic technology for precision and reduced
                  complications.
                </li>
                <li>
                  Post-operative monitoring to catch any early signs of
                  complications.
                </li>
                <li>
                  Clear discharge instructions and emergency contact guidance.
                </li>
                <li>
                  Scheduled follow-up visits to ensure proper healing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Women&apos;s Surgery – Busted
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;All gynaecological surgery means
                  removing the uterus.&quot; <strong>Fact:</strong> Many
                  procedures, like myomectomy and cystectomy, preserve the
                  uterus and fertility.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Laparoscopic surgery is riskier
                  than open surgery.&quot; <strong>Fact:</strong> It is
                  generally safer, with lower blood loss and infection risk when
                  performed by an experienced surgeon.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Recovery always takes
                  months.&quot; <strong>Fact:</strong> Most laparoscopic
                  procedures allow return to normal activity within 2–4 weeks.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Surgery always affects future
                  fertility.&quot; <strong>Fact:</strong> Fertility-preserving
                  techniques are specifically used when future pregnancy is
                  desired.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Surgery is always the first
                  option.&quot; <strong>Fact:</strong> Non-surgical treatments
                  are tried first whenever medically appropriate.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Prepare for Women&apos;s Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complete all pre-operative tests as advised by the doctor.
                </li>
                <li>
                  Inform the doctor about existing medical conditions, allergies,
                  or medications.
                </li>
                <li>
                  Arrange support at home for the first few days after surgery.
                </li>
                <li>
                  Follow fasting instructions carefully before the procedure.
                </li>
                <li>
                  Pack essentials for a short hospital stay, if required.
                </li>
                <li>
                  Ask all your questions during the pre-surgery consultation.
                </li>
                <li>
                  Plan time off work according to the expected recovery period.
                </li>
                <li>
                  Keep emergency contact numbers handy for the clinic.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Consider Getting a Surgical Consultation?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women with persistent symptoms (pain, bleeding, pressure) that
                  haven&apos;t improved with medication.
                </li>
                <li>
                  Women diagnosed with fibroids, cysts, or polyps on ultrasound,
                  even without severe symptoms yet.
                </li>
                <li>
                  Women experiencing prolapse symptoms, such as a feeling of
                  heaviness or bulge in the vaginal area.
                </li>
                <li>
                  Women with chronic pelvic pain suspected to be linked to
                  endometriosis.
                </li>
                <li>
                  Women who have completed their family and are considering
                  permanent sterilization.
                </li>
                <li>
                  Women advised hysteroscopy or biopsy due to abnormal bleeding
                  patterns.
                </li>
                <li>
                  Women seeking a second opinion before agreeing to a major
                  surgery elsewhere.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Non-Surgical Alternatives Considered First
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka believes in offering the least invasive effective
                treatment. Before recommending surgery, these options are
                usually explored:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal medication to manage bleeding, pain, or cycle
                  irregularities.
                </li>
                <li>
                  Pain management protocols for conditions like mild
                  endometriosis.
                </li>
                <li>
                  Lifestyle and dietary changes to support hormonal balance.
                </li>
                <li>
                  Watchful monitoring with regular ultrasound for small,
                  asymptomatic cysts or fibroids.
                </li>
                <li>
                  Iron and nutritional support for anemia linked to heavy
                  bleeding.
                </li>
                <li>
                  Non-hormonal medical therapy, where appropriate, before
                  considering invasive options.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Surgery is recommended only when these alternatives are
                ineffective, unsuitable, or when the condition itself requires a
                surgical solution.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cost Considerations for Women&apos;s Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                While exact costs should always be confirmed directly with the
                clinic, several factors typically affect surgical pricing:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Type and complexity of the procedure (e.g., cystectomy vs
                  hysterectomy).
                </li>
                <li>
                  Duration of hospital stay required for recovery.
                </li>
                <li>
                  Type of anaesthesia used during the procedure.
                </li>
                <li>
                  Pre-operative tests and imaging needed before surgery.
                </li>
                <li>
                  Post-operative follow-up visits included in the care plan.
                </li>
                <li>
                  Use of advanced 3D laparoscopic equipment, which can affect
                  overall treatment cost.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                For an accurate estimate specific to your condition, it is best
                to schedule a consultation and discuss the surgical plan directly
                with the clinic.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Surgeon for Women&apos;s Health Issues
              </h2>

              <p className="mb-4 text-gray-700">
                When searching for a &quot;doctor for women&apos;s surgery in
                Moradabad,&quot; these factors matter most:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Specialised training in gynaecological and laparoscopic
                  surgery.
                </li>
                <li>
                  Track record of successful outcomes and positive patient
                  testimonials.
                </li>
                <li>
                  Access to modern equipment, such as 3D laparoscopy and quality
                  imaging.
                </li>
                <li>
                  Willingness to explain all options, including non-surgical
                  alternatives.
                </li>
                <li>
                  Focus on fertility preservation for women who wish to conceive
                  in the future.
                </li>
                <li>
                  Clear, transparent communication about risks, costs, and
                  recovery expectations.
                </li>
                <li>
                  Availability for follow-up care, not just the surgery itself.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Dr. Priyanka Gynaec meets all of these criteria, offering
                comprehensive, patient-focused surgical care for women in and
                around Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Gynaec – Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For expert consultation and surgical care, reach out directly:
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
                        Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone/Call for Appointment</p>
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
                FAQs on Doctor for Women&apos;s Surgery in Moradabad
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
