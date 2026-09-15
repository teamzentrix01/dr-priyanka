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

export default function AnomalyScanMoradabad() {
  const faqs = [
    {
      q: "Which doctor performs anomaly scans in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers detailed anomaly (Level II) scans using 3D/4D ultrasound technology.",
    },
    {
      q: "When is the anomaly scan usually done?",
      a: "Typically between 18 and 22 weeks of pregnancy.",
    },
    {
      q: "What does the anomaly scan check?",
      a: "It examines the baby's brain, heart, spine, abdomen, limbs, placenta position, and amniotic fluid levels.",
    },
    {
      q: "Is the anomaly scan different from a regular pregnancy ultrasound?",
      a: "Yes, it is significantly more detailed and systematic than routine check-up scans.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Is the anomaly scan painful or risky?",
      a: "No, it is a standard, non-invasive ultrasound procedure with no known risk to mother or baby.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before my scan?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Does a normal anomaly scan guarantee a completely healthy baby?",
      a: "It significantly reduces uncertainty about structural development, but no single scan can detect every possible condition.",
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
                Anomaly Scan Specialist in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                The anomaly scan, often called the Level II or 20-week scan, is
                one of the most detailed and important ultrasounds performed
                during pregnancy. It offers a thorough look at the baby&apos;s
                developing organs and structures, giving expecting parents
                reassurance and, when needed, early information to plan ahead.
              </p>

              <p className="text-gray-700">
                This guide explains what the anomaly scan involves, when it is
                done, and how to find a reliable anomaly scan specialist in
                Moradabad — including details about Dr. Priyanka Pachauri, a
                well-known gynaecologist in the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an Anomaly Scan?
              </h2>

              <p className="mb-4 text-gray-700">
                The anomaly scan is a detailed, structured ultrasound
                examination performed in the middle of pregnancy to closely
                examine the baby&apos;s anatomy and development. Unlike earlier,
                simpler scans, it takes a systematic look at nearly every major
                organ and structure to check that development is progressing as
                expected.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is also known as the Level II scan, mid-trimester scan, or
                  20-week scan
                </li>
                <li>
                  It focuses specifically on structural development rather than
                  chromosomal risk assessment
                </li>
                <li>
                  It is typically more detailed and takes longer than routine
                  pregnancy check-up scans
                </li>
                <li>
                  It helps confirm healthy development and may identify
                  conditions needing further evaluation or specialist input
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Anomaly Scan Is Important
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It provides a detailed structural assessment of the baby&apos;s
                  brain, heart, spine, limbs, and internal organs
                </li>
                <li>
                  It can help detect certain structural conditions early enough
                  to plan appropriate care and specialist referral if needed
                </li>
                <li>
                  It confirms the position of the placenta, which is important
                  for delivery planning
                </li>
                <li>It checks amniotic fluid levels during this stage of pregnancy</li>
                <li>
                  It provides significant reassurance when development is
                  progressing normally
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is the Anomaly Scan Performed?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The anomaly scan is typically performed between 18 and 22
                  weeks of pregnancy
                </li>
                <li>
                  This window allows the baby&apos;s organs to be assessed in
                  sufficient detail while imaging conditions remain favourable
                </li>
                <li>
                  Your doctor will confirm the most suitable timing based on
                  your pregnancy dating
                </li>
                <li>
                  Scheduling within this window is important for the best
                  quality structural assessment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does the Anomaly Scan Examine?
              </h2>

              <p className="mb-4 text-gray-700">
                A detailed anomaly scan systematically reviews multiple areas
                of the baby&apos;s development:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Brain and skull:</strong> Overall brain structure and
                  skull shape
                </li>
                <li>
                  <strong>Face:</strong> Facial features, including the lips
                  and profile
                </li>
                <li>
                  <strong>Spine:</strong> Normal spinal alignment and closure
                </li>
                <li>
                  <strong>Heart:</strong> The four chambers and major blood
                  vessels
                </li>
                <li>
                  <strong>Abdomen and organs:</strong> The stomach, kidneys,
                  bladder, and other internal structures
                </li>
                <li>
                  <strong>Limbs:</strong> Arms, legs, hands, and feet
                </li>
                <li>
                  <strong>Placenta position:</strong> Important for delivery
                  planning, particularly if low-lying
                </li>
                <li>
                  <strong>Amniotic fluid:</strong> Whether fluid volume appears
                  within the expected range
                </li>
                <li>
                  <strong>Umbilical cord:</strong> The number of blood vessels
                  and overall appearance
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Anomaly Scan Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Duration:</strong> The scan commonly takes 30 to 45
                  minutes or longer because it is detailed
                </li>
                <li>
                  <strong>Comfortable positioning:</strong> You will lie down
                  while gel is applied to your abdomen for the ultrasound probe
                </li>
                <li>
                  <strong>Systematic examination:</strong> The doctor or
                  sonographer checks each structure methodically and may ask
                  you to change position for a clearer view
                </li>
                <li>
                  <strong>Patience may be needed:</strong> The baby&apos;s
                  position may make some views take longer or require a brief
                  follow-up scan
                </li>
                <li>
                  <strong>Discussion of findings:</strong> Your doctor explains
                  what was seen and whether development appears within the
                  expected range
                </li>
                <li>
                  <strong>Next steps if needed:</strong> If further assessment
                  is appropriate, your doctor can explain additional testing or
                  referral options
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Anomaly Scan Results
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Normal scan:</strong> No structural concerns are
                  identified, and routine pregnancy care continues
                </li>
                <li>
                  <strong>Soft markers:</strong> Minor variations may be noted;
                  these often have no major medical significance, but your
                  doctor will explain their relevance
                </li>
                <li>
                  <strong>Structural concerns:</strong> Further specialised
                  imaging or referral to a fetal medicine specialist may be
                  recommended
                </li>
                <li>
                  <strong>Placenta position:</strong> A low-lying placenta may
                  need to be reviewed again later in pregnancy
                </li>
                <li>
                  <strong>Reassurance:</strong> Most anomaly scans show
                  healthy, expected development
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Specialist Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed examination requires skill, patience, and a
                  systematic approach
                </li>
                <li>
                  High-resolution ultrasound equipment can improve image
                  clarity for structural assessment
                </li>
                <li>
                  Experienced interpretation helps distinguish normal variation
                  from a finding that needs closer review
                </li>
                <li>
                  Clear and calm communication can reduce unnecessary anxiety
                  for expecting parents
                </li>
                <li>
                  Prompt referral guidance supports timely access to specialist
                  care when needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: Anomaly Scan Specialist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, offers
                pregnancy and antenatal care in Moradabad. Patients can contact
                the clinic to confirm availability, scan scheduling, and the
                appropriate next step for their pregnancy care.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Relevant Services Offered
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>Detailed anomaly or Level II scan coordination</li>
                    <li>High-risk pregnancy monitoring and management</li>
                    <li>Normal delivery and birthing care</li>
                    <li>Gynaecology and general women&apos;s health consultations</li>
                    <li>Fertility evaluation and IVF treatment</li>
                    <li>Paediatric consultations for newborn care</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Technology and Approach
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      3D and 4D ultrasound capability for detailed pregnancy
                      imaging
                    </li>
                    <li>
                      Systematic scanning protocols for a thorough structural
                      review
                    </li>
                    <li>
                      Antenatal care that connects scan findings with ongoing
                      pregnancy monitoring
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Why Patients Choose the Clinic
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      <strong>Patient-focused care:</strong> Clear discussion
                      of pregnancy concerns and available next steps
                    </li>
                    <li>
                      <strong>Continuity of care:</strong> Support from
                      pregnancy screening through delivery and postnatal care
                    </li>
                    <li>
                      <strong>Detailed guidance:</strong> Clear explanations
                      intended to help parents make informed decisions
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Anomaly Scans
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;It is the same as a routine ultrasound&quot;</strong>{" "}
                  — It is a more detailed and structured assessment of fetal
                  anatomy
                </li>
                <li>
                  <strong>&quot;Earlier normal scans make it unnecessary&quot;</strong>{" "}
                  — This scan checks structures that cannot be fully assessed
                  in early pregnancy
                </li>
                <li>
                  <strong>&quot;Any noted finding means something is seriously wrong&quot;</strong>{" "}
                  — Some observations are normal variations; interpretation
                  requires clinical context
                </li>
                <li>
                  <strong>&quot;A normal scan guarantees a completely healthy baby&quot;</strong>{" "}
                  — It provides valuable reassurance but cannot detect every
                  possible condition
                </li>
                <li>
                  <strong>&quot;Gender is the main purpose of the scan&quot;</strong>{" "}
                  — Its primary medical purpose is structural assessment; fetal
                  sex disclosure is restricted in India
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Scan
              </h2>

              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Step 1:</strong> Confirm pregnancy dating with your
                  doctor and schedule the scan between 18 and 22 weeks.
                </p>
                <p>
                  <strong>Step 2:</strong> Wear comfortable clothing that
                  allows easy access to your abdomen.
                </p>
                <p>
                  <strong>Step 3:</strong> Keep enough time available because a
                  detailed scan can take longer than a routine check-up.
                </p>
                <p>
                  <strong>Step 4:</strong> Bring a support person if you would
                  like company during the appointment.
                </p>
                <p>
                  <strong>Step 5:</strong> Ask questions about what is being
                  examined and what the findings mean.
                </p>
                <p>
                  <strong>Step 6:</strong> Discuss the report with your doctor
                  and follow any recommended next steps.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Local Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Convenient scheduling during a medically important stage of
                  pregnancy
                </li>
                <li>
                  Less need for long-distance travel for detailed prenatal
                  imaging
                </li>
                <li>
                  Continuity with a doctor who understands your pregnancy
                  history
                </li>
                <li>
                  Easier scheduling of follow-up scans or consultations if
                  required
                </li>
                <li>
                  A familiar and supportive setting during an important
                  appointment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 text-gray-700">
                Contact the clinic in advance to confirm scan availability,
                appointment timing, and any preparation instructions.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>
                        Dr. Priyanka Gynaec – Fertility • Maternity • 3D
                        Laparoscopy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
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
                        href="mailto:drpriyanka@gynaecologistmoradabad.com"
                        className="break-all hover:underline"
                      >
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
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
                Frequently Asked Questions
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