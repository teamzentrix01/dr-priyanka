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

export default function MoradabadGynaecologyClinic() {
  const faqs = [
    {
      q: "What should I check first when choosing a gynaecology clinic?",
      a: "Start with the clinic's technology, hygiene standards, and range of services relevant to your specific health need.",
    },
    {
      q: "Is a multi-specialty hospital better than a solo private clinic?",
      a: "Not necessarily — solo clinics often offer more personalized care, while hospitals provide broader emergency infrastructure; the right choice depends on your needs.",
    },
    {
      q: "Why does laparoscopic technology matter when choosing a clinic?",
      a: "It generally supports safer, more precise surgery with faster recovery compared to traditional open procedures.",
    },
    {
      q: "How important is emergency preparedness in choosing a clinic?",
      a: "Very important, especially for pregnancy care, since timely emergency response can significantly affect outcomes.",
    },
    {
      q: "Can I visit a clinic before booking a major procedure?",
      a: "Yes, many clinics welcome a visit or consultation beforehand to assess comfort, hygiene, and communication.",
    },
    {
      q: "Does a clinic offering multiple services mean better care?",
      a: "It can mean more coordinated care and fewer referrals, though the quality of each individual service still matters most.",
    },
    {
      q: "Does gynaecologistmoradabad.com describe its clinic technology and services?",
      a: "Yes, the website highlights 3D laparoscopic surgery, AI-based imaging, and a broad range of gynaecological and fertility services.",
    },
    {
      q: "What's the best way to verify clinic hygiene and comfort before treatment?",
      a: "Visit in person for an initial consultation and observe the waiting area, examination rooms, and staff behavior firsthand.",
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
                Moradabad Gynaecology Clinic: What to Look for in a Trusted
                Facility
              </h1>

              <p className="mb-4 text-gray-700">
                Choosing the right Moradabad gynaecology clinic isn&apos;t just
                about finding a qualified doctor — the clinic itself plays a
                huge role in the quality, safety, and comfort of your care. This
                guide walks through what actually makes a gynaecology clinic
                reliable, from technology and hygiene to emergency preparedness,
                and highlights what to expect from Dr. Priyanka Pachauri&apos;s
                clinic in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Clinic Itself Matters, Not Just the Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Even an excellent doctor can be limited by the facility they
                work in. A well-equipped clinic directly affects:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic accuracy</strong>, through access to
                  quality imaging and testing equipment.
                </li>
                <li>
                  <strong>Surgical safety and outcomes</strong>, particularly
                  for laparoscopic procedures requiring specialized equipment.
                </li>
                <li>
                  <strong>Comfort and hygiene</strong>, which matter
                  significantly for sensitive gynaecological examinations and
                  procedures.
                </li>
                <li>
                  <strong>Emergency readiness</strong>, especially important
                  during pregnancy and delivery.
                </li>
                <li>
                  <strong>Overall efficiency</strong>, including appointment
                  scheduling, waiting times, and follow-up coordination.
                </li>
                <li>
                  <strong>Continuity of care</strong>, when multiple services
                  (consultation, diagnostics, surgery) are available at one
                  location.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Features of a Reliable Gynaecology Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                When evaluating any gynaecology clinic in Moradabad, look for
                these core features:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Advanced Diagnostic Technology
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D/4D ultrasound imaging for detailed, accurate fetal and
                  pelvic assessment.
                </li>
                <li>
                  On-site laboratory or coordination with nearby labs for quick
                  blood test turnaround.
                </li>
                <li>
                  Digital record-keeping, making it easier to track your history
                  across visits.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Laparoscopic Surgical Capability
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D laparoscopic surgical systems for minimally invasive
                  procedures.
                </li>
                <li>
                  Trained surgical staff experienced specifically in
                  gynaecological laparoscopy.
                </li>
                <li>
                  Proper operation theatre infrastructure, meeting safety and
                  hygiene standards.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hygiene and Cleanliness Standards
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Visibly clean waiting areas, examination rooms, and procedure
                  rooms.
                </li>
                <li>
                  Proper sterilization protocols for instruments and surgical
                  equipment.
                </li>
                <li>
                  Well-maintained restroom and patient facilities.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Comfortable Patient Experience
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Private, respectful examination spaces.
                </li>
                <li>
                  Reasonable waiting times, with organized appointment
                  scheduling.
                </li>
                <li>
                  Friendly, professional support staff at reception and during
                  consultations.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Emergency Preparedness
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Clear protocols for urgent situations, especially relevant for
                  pregnancy-related emergencies.
                </li>
                <li>
                  Access to hospital facilities for delivery or surgical
                  emergencies, if the clinic itself is consultation-focused.
                </li>
                <li>
                  Reachability outside standard hours, particularly important
                  for expecting mothers nearing delivery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Comprehensive Service Range
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ability to handle routine care, pregnancy, surgery, and
                  fertility treatment, reducing the need to visit multiple
                  facilities.
                </li>
                <li>
                  Fertility and IVF support, if this falls within the
                  clinic&apos;s offerings.
                </li>
                <li>
                  Coordinated post-treatment follow-up, rather than fragmented,
                  one-time visits.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Gynaecology Clinics You&apos;ll Find in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the different types of clinics can help set
                expectations:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Solo private practice clinics</strong> — typically run
                  by a single gynaecologist, often offering more personalized,
                  continuous care.
                </li>
                <li>
                  <strong>Multi-specialty private hospitals</strong> — offering
                  broader infrastructure, specialist teams, and more extensive
                  emergency facilities.
                </li>
                <li>
                  <strong>Government hospitals and clinics</strong> — generally
                  more affordable, though sometimes with higher patient volumes
                  and longer wait times.
                </li>
                <li>
                  <strong>Fertility-focused clinics</strong> — specializing
                  specifically in IVF and reproductive treatments, sometimes as
                  a dedicated facility rather than general gynaecology.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Each type has its own strengths, and the right choice depends on
                your specific needs — routine care, a straightforward pregnancy,
                a complex surgical case, or fertility treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask When Evaluating a Gynaecology Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Before choosing a clinic, consider asking:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What diagnostic and imaging technology is available on-site?
                </li>
                <li>
                  Do you perform laparoscopic surgery, and what equipment is
                  used?
                </li>
                <li>
                  What is your typical appointment wait time?
                </li>
                <li>
                  How do you handle emergencies, especially during pregnancy?
                </li>
                <li>
                  Is the clinic hygienic and well-maintained — can I visit
                  before booking a major procedure?
                </li>
                <li>
                  What is the full range of services offered here?
                </li>
                <li>
                  Do you coordinate with a specific hospital for delivery or
                  surgery, if needed?
                </li>
                <li>
                  How are patient records maintained and shared across visits?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags to Watch for When Visiting a Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                During an initial visit, pay attention to warning signs that
                might indicate a less reliable facility:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Visibly unclean or poorly maintained spaces, including waiting
                  and examination areas.
                </li>
                <li>
                  Rushed consultations with little time to discuss your concerns
                  properly.
                </li>
                <li>
                  Reluctance to explain technology, procedures, or costs
                  clearly.
                </li>
                <li>
                  Disorganized appointment scheduling or unclear follow-up
                  processes.
                </li>
                <li>
                  Lack of clarity about which doctor will be present for your
                  treatment or delivery.
                </li>
                <li>
                  No clear emergency protocol in case something urgent arises.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Technology-Driven Clinics Are Increasingly Preferred
              </h2>

              <p className="mb-4 text-gray-700">
                Many women now specifically look for clinics that emphasize
                modern technology, because it often translates into tangible
                benefits:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>More accurate diagnosis</strong>, reducing the chances
                  of missed or delayed detection of conditions like cysts or
                  fibroids.
                </li>
                <li>
                  <strong>Safer, more precise surgery</strong>, particularly
                  with 3D laparoscopic and AI-assisted imaging systems.
                </li>
                <li>
                  <strong>Better fertility treatment outcomes</strong>,
                  supported by tools like time-lapse embryo monitoring.
                </li>
                <li>
                  <strong>Faster recovery times</strong>, especially with
                  minimally invasive surgical options.
                </li>
                <li>
                  <strong>More informed decision-making</strong>, since detailed
                  imaging and diagnostics give both doctor and patient clearer
                  information.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Make the Most of Your Clinic Visits
              </h2>

              <p className="mb-4 text-gray-700">
                Once you&apos;ve chosen a clinic, a few habits can help you get
                the most value from your ongoing care:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep a personal folder of all reports, prescriptions, and scan
                  results.
                </li>
                <li>
                  Arrive slightly early to account for any registration or
                  paperwork.
                </li>
                <li>
                  Prepare your questions in advance, especially for
                  time-limited consultations.
                </li>
                <li>
                  Follow up on test results proactively rather than assuming no
                  news is good news.
                </li>
                <li>
                  Communicate any new symptoms promptly, rather than waiting for
                  your next scheduled visit.
                </li>
                <li>
                  Build a long-term relationship with the clinic for more
                  consistent, coordinated care over time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec — Gynaecology Clinic in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For those specifically searching for a Moradabad gynaecology
                clinic, Dr. Priyanka Gynaec (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), led by Dr. Priyanka Pachauri, is a relevant local option.
                Here&apos;s a clinic-focused analysis based on the website:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Technology:</strong> The clinic highlights 3D
                  laparoscopic surgery, AI-based imaging, and time-lapse embryo
                  monitoring — indicating a strong technology-driven approach to
                  both diagnosis and treatment.
                </li>
                <li>
                  <strong>Service Range:</strong> Listed services span pregnancy
                  care (antenatal/postnatal and high-risk management),
                  laparoscopic surgery (sterilization, cystectomy, myomectomy,
                  hysterectomy), diagnostic hysteroscopy, endometriosis surgery,
                  and fertility/IVF treatment — suggesting a fairly
                  comprehensive, multi-service clinic rather than a narrowly
                  focused practice.
                </li>
                <li>
                  <strong>Patient Experience:</strong> The site includes patient
                  testimonials generally reflecting clear communication and a
                  comfortable consultation experience.
                </li>
                <li>
                  <strong>Positioning:</strong> The clinic is presented as a
                  leading gynaecology practice in Moradabad, combining routine
                  care with advanced surgical and fertility services under one
                  roof.
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Accessibility and Location Factors Worth Considering
              </h2>

              <p className="mb-4 text-gray-700">
                Beyond technology and hygiene, practical accessibility factors
                can significantly affect your overall experience with a
                gynaecology clinic:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Distance from home or workplace</strong> — closer
                  clinics reduce travel stress, especially important during
                  pregnancy or post-surgery recovery.
                </li>
                <li>
                  <strong>Parking and transport availability</strong>,
                  particularly relevant if you&apos;re visiting during later
                  stages of pregnancy or right after a procedure.
                </li>
                <li>
                  <strong>Clinic timings</strong>, including whether evening or
                  weekend slots are available for working women.
                </li>
                <li>
                  <strong>Ease of scheduling appointments</strong>, whether
                  through phone, WhatsApp, or online booking.
                </li>
                <li>
                  <strong>Proximity to a hospital</strong>, in case delivery or
                  a surgical emergency requires moving beyond the clinic itself.
                </li>
                <li>
                  <strong>Availability of nearby pharmacies and diagnostic
                  labs</strong>, which can save time when tests or medications
                  are needed urgently.
                </li>
                <li>
                  <strong>Physical accessibility of the building</strong>,
                  especially important for women who are heavily pregnant or
                  recovering from surgery and may have limited mobility.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your First Visit to a Gynaecology Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Knowing what a typical first visit involves can help you feel
                more prepared and less anxious:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Registration and basic paperwork</strong> — sharing
                  your basic details and reason for the visit.
                </li>
                <li>
                  <strong>A private conversation with the doctor</strong> about
                  your symptoms, concerns, and medical history.
                </li>
                <li>
                  <strong>A physical examination</strong>, if clinically
                  relevant to your concern, conducted with privacy and consent.
                </li>
                <li>
                  <strong>Discussion of next steps</strong> — this might include
                  lifestyle advice, a prescription, or a recommendation for
                  further tests.
                </li>
                <li>
                  <strong>Scheduling of follow-up visits</strong>, if needed,
                  based on your specific situation.
                </li>
                <li>
                  <strong>An opportunity to ask questions</strong> — a good
                  clinic will encourage this rather than rush you through the
                  visit.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Knowing this general flow in advance can make the visit feel
                more predictable, especially for women visiting a gynaecologist
                for the very first time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Evaluating a Clinic Through the Lens of Long-Term Care
              </h2>

              <p className="mb-4 text-gray-700">
                Since gynaecological health often involves care across many
                years — from routine visits to pregnancy to eventual menopause
                management — it&apos;s worth evaluating a clinic not just for
                your immediate need, but for long-term suitability:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Would this clinic support me through different life stages,
                  not just my current concern?
                </li>
                <li>
                  Does the clinic maintain organized records that would help if
                  I return years later?
                </li>
                <li>
                  Is the doctor likely to remain in practice long-term, offering
                  continuity rather than frequent doctor changes?
                </li>
                <li>
                  Does the clinic&apos;s service range cover future needs I
                  might have, such as fertility treatment or menopause care?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Thinking beyond your immediate visit can help you choose a
                clinic that grows with your healthcare needs over time, rather
                than one you&apos;ll need to switch away from later.
              </p>
            </section>

            <section className="mb-12">
              <p className="text-gray-700">
                A trustworthy Moradabad gynaecology clinic combines more than
                just a good doctor — it requires the right technology, hygiene
                standards, emergency readiness, and a comprehensive range of
                services to support you across different health needs. Use the
                evaluation points in this guide during your research and first
                visit, and don&apos;t hesitate to ask direct questions before
                committing to ongoing care at any clinic.
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