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

export default function MaternityDoctorVsObstetrician() {
  const faqs = [
    {
      q: "Is a maternity doctor the same as an obstetrician?",
      a: "In most cases, yes. \"Maternity doctor\" is the everyday term for an obstetrician.",
    },
    {
      q: "What is the difference between an obstetrician and a gynaecologist?",
      a: "Obstetricians focus on pregnancy and childbirth. Gynaecologists focus on female reproductive health overall.",
    },
    {
      q: "What is an OB-GYN?",
      a: "A doctor trained in both obstetrics and gynaecology, the most common qualification in India.",
    },
    {
      q: "Which doctor should I see during pregnancy?",
      a: "An obstetrician or OB-GYN, who can manage antenatal care, delivery and postnatal care.",
    },
    {
      q: "Can a gynaecologist deliver my baby?",
      a: "Yes, if she is also trained in obstetrics, which is true for most gynaecologists in India.",
    },
    {
      q: "What is a maternal-fetal medicine specialist?",
      a: "An obstetrician with extra training in high-risk pregnancies.",
    },
    {
      q: "Do I need a midwife or a doctor?",
      a: "A doctor is needed for complications and surgery. A midwife can support low-risk care in some settings.",
    },
    {
      q: "Does the doctor's title affect the quality of care?",
      a: "Not by itself. Qualifications, experience, honesty and facilities matter more.",
    },
    {
      q: "Can the same doctor care for me before and after pregnancy?",
      a: "Yes. An OB-GYN can follow you from preconception to postnatal and long-term care.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Doctor vs Obstetrician: What Is the Difference and Who Should You See?
              </h1>

              <p className="mb-4 text-gray-700">
                When you become pregnant, you hear many titles: maternity
                doctor, obstetrician, gynaecologist, OB-GYN, midwife. It is easy
                to feel confused about who does what, and who you should
                actually book.
              </p>

              <p className="mb-4 text-gray-700">
                Quick answer: In most cases, a maternity doctor and an
                obstetrician are the same kind of specialist. &quot;Maternity
                doctor&quot; is the everyday term families use.
                &quot;Obstetrician&quot; is the formal medical term for a doctor
                trained in pregnancy, childbirth and the period right after
                birth. In India, most obstetricians are also gynaecologists, so
                you will often see the combined title OB-GYN.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains each title clearly, so you can choose the
                right doctor with confidence.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The short answer</li>
                <li>What each title means</li>
                <li>Maternity doctor vs obstetrician vs gynaecologist</li>
                <li>OB-GYN, maternal-fetal medicine specialist, midwife and neonatologist</li>
                <li>Qualifications to look for</li>
                <li>Which doctor you need at each stage</li>
                <li>How to choose the right one</li>
              </ul>
            </div>

            {/* Section 2 — Short Answer */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Short Answer: Are They the Same?
              </h2>

              <p className="mb-4 text-gray-700">
                Mostly, yes. Here is how the terms relate:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maternity doctor: a common, non-technical phrase for the doctor who looks after you in pregnancy and delivery</li>
                <li>Obstetrician: the formal medical specialist who provides that care</li>
                <li>In practice: When people say &quot;maternity doctor,&quot; they usually mean an obstetrician, often an OB-GYN</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why the Confusion Exists
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>&quot;Maternity&quot; is a general word, not a medical title.</li>
                <li>Hospitals and websites use the terms differently.</li>
                <li>Many doctors hold both obstetrics and gynaecology qualifications.</li>
              </ul>
            </div>

            {/* Section 3 — Obstetrician */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an Obstetrician?
              </h2>

              <p className="mb-4 text-gray-700">
                An obstetrician is a doctor who specializes in pregnancy,
                childbirth and the postpartum period.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                An Obstetrician Typically
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms and monitors pregnancy</li>
                <li>Manages antenatal check-ups, scans and tests</li>
                <li>Detects and treats pregnancy complications</li>
                <li>Conducts normal deliveries</li>
                <li>Performs C-sections and other obstetric surgeries</li>
                <li>Handles emergencies during labor</li>
                <li>Provides postnatal care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Training Involves
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>MBBS (the basic medical degree)</li>
                <li>Postgraduate training in obstetrics and gynaecology (MS, MD or DNB)</li>
                <li>Years of hands-on experience in labor rooms and operating theatres</li>
              </ul>
            </div>

            {/* Section 4 — Maternity Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Maternity Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                &quot;Maternity doctor&quot; is not a separate medical degree.
                It describes the role a doctor plays in your pregnancy.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Maternity Doctor Is Usually
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>An obstetrician or OB-GYN</li>
                <li>The main doctor who follows you through pregnancy</li>
                <li>The one who plans and manages your delivery</li>
                <li>A familiar, simple term used by families, clinics and search engines</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Also Used For
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A clinic or hospital&apos;s &quot;maternity department&quot; or &quot;maternity services&quot;</li>
                <li>Care packages that cover antenatal visits, delivery and postnatal care</li>
              </ul>
            </div>

            {/* Section 5 — Gynaecologist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Gynaecologist?
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist specializes in the female reproductive system
                across a woman&apos;s whole life.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Gynaecologist Typically Handles
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Menstrual problems and irregular periods</li>
                <li>PCOS and hormonal issues</li>
                <li>Fertility concerns</li>
                <li>Fibroids, ovarian cysts and endometriosis</li>
                <li>Contraception and family planning</li>
                <li>Infections and pelvic pain</li>
                <li>Menopause and related concerns</li>
                <li>Screening for cervical and other conditions</li>
                <li>Gynaecological surgeries, including keyhole (laparoscopic) procedures</li>
              </ul>

              <p className="text-gray-700">
                Key point: A gynaecologist&apos;s work is broader than
                pregnancy.
              </p>
            </div>

            {/* Section 6 — OB-GYN */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an OB-GYN?
              </h2>

              <p className="mb-4 text-gray-700">
                OB-GYN means a doctor trained in both obstetrics and
                gynaecology. This is the most common qualification in India.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                An OB-GYN Can
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Care for you before, during and after pregnancy</li>
                <li>Treat reproductive health problems when you are not pregnant</li>
                <li>Provide long-term continuity of care from teenage years through menopause</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Many Women Prefer an OB-GYN
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>One trusted doctor knows your full history</li>
                <li>She can manage both routine and complicated situations</li>
                <li>Fertility, pregnancy and postnatal care stay connected</li>
              </ul>
            </div>

            {/* Section 7 — Comparison */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Maternity Doctor vs Obstetrician vs Gynaecologist: A Quick Comparison
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3">Title</th>
                      <th className="border border-gray-200 px-4 py-3">Meaning</th>
                      <th className="border border-gray-200 px-4 py-3">Main Focus</th>
                      <th className="border border-gray-200 px-4 py-3">Usually Same as OB-GYN?</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Maternity doctor</td>
                      <td className="border border-gray-200 px-4 py-3">Everyday term</td>
                      <td className="border border-gray-200 px-4 py-3">Pregnancy and delivery care</td>
                      <td className="border border-gray-200 px-4 py-3">Yes, in most cases</td>
                    </tr>

                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Obstetrician</td>
                      <td className="border border-gray-200 px-4 py-3">Medical specialist</td>
                      <td className="border border-gray-200 px-4 py-3">Pregnancy, childbirth, postpartum</td>
                      <td className="border border-gray-200 px-4 py-3">Often yes</td>
                    </tr>

                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Gynaecologist</td>
                      <td className="border border-gray-200 px-4 py-3">Medical specialist</td>
                      <td className="border border-gray-200 px-4 py-3">Female reproductive health overall</td>
                      <td className="border border-gray-200 px-4 py-3">Often yes</td>
                    </tr>

                    <tr>
                      <td className="border border-gray-200 px-4 py-3">OB-GYN</td>
                      <td className="border border-gray-200 px-4 py-3">Combined specialist</td>
                      <td className="border border-gray-200 px-4 py-3">Both pregnancy and reproductive health</td>
                      <td className="border border-gray-200 px-4 py-3">Same thing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-700">
                How to remember it: Obstetrics = pregnancy and birth. Gynaecology
                = female reproductive health. OB-GYN = both.
              </p>
            </div>

            {/* Section 8 — Other Professionals */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Other Professionals You May Meet During Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Your care may involve more than one expert. Here is who is who:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Maternal-Fetal Medicine (MFM) Specialist
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>An obstetrician with extra training in high-risk pregnancies</li>
                <li>Helpful for complex conditions or complications</li>
                <li>Often involved when specialist monitoring is needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Midwife
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A trained professional who supports normal pregnancy and labor</li>
                <li>Common in many countries; their role in private care varies in India</li>
                <li>Works alongside doctors, especially for low-risk care and labor support</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Neonatologist
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A doctor specialized in newborn babies, especially premature or sick newborns</li>
                <li>Works in newborn intensive care (NICU)</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Paediatrician
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A doctor who looks after your baby&apos;s health, growth and vaccinations</li>
                <li>Examines your newborn after birth and follows up afterward</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Anesthetist
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gives anesthesia for C-sections and provides pain relief in labor</li>
                <li>Monitors you during surgery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Sonologist or Radiologist
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Performs and reports ultrasound scans</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Family Physician or General Practitioner
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Can help with general health and minor illnesses</li>
                <li>Usually refers pregnant women to an obstetrician for pregnancy care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lactation Counsellor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Helps with breastfeeding technique and concerns</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Dietitian
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Guides nutrition, especially for conditions like gestational diabetes</li>
              </ul>
            </div>

            {/* Section 9 — Obstetrician vs Midwife */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Obstetrician vs Midwife: What Is the Difference?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Obstetrician
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A medical doctor and surgeon</li>
                <li>Can manage complications and perform C-sections</li>
                <li>Suitable for all pregnancies, especially those with risks</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Midwife
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Trained in supporting normal pregnancy and childbirth</li>
                <li>Focuses on guidance, comfort and monitoring in low-risk cases</li>
                <li>Refers to a doctor if complications appear</li>
              </ul>

              <p className="text-gray-700">
                Important: Safe maternity care often involves a team. Your doctor
                decides who is needed based on your health.
              </p>
            </div>

            {/* Section 10 — Who to See */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should You See at Each Stage?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Planning a Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>See: An OB-GYN or gynaecologist</li>
                <li>Why: Preconception advice, health checks and fertility guidance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Confirmed Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>See: An obstetrician (maternity doctor)</li>
                <li>Why: Antenatal care, scans, tests and planning</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                High-Risk Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>See: An obstetrician with experience in high-risk care, or an MFM specialist</li>
                <li>Why: Closer monitoring and specialized management</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Labor and Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>See: Your obstetrician, supported by nurses, an anesthetist and a paediatric team</li>
                <li>Why: Safe delivery and emergency readiness</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>See: Your obstetrician for postnatal check-ups, and a paediatrician for your newborn</li>
                <li>Why: Recovery, feeding support and baby care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Long-Term Women&apos;s Health
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>See: A gynaecologist</li>
                <li>Why: Periods, contraception, menopause and screening</li>
              </ul>
            </div>

            {/* Section 11 — Qualifications */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Qualifications to Look For
              </h2>

              <p className="mb-4 text-gray-700">
                Whatever title is used, check the training behind it.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>MBBS: the basic medical degree</li>
                <li>Postgraduate degree: MS, MD or DNB in Obstetrics and Gynaecology</li>
                <li>Medical council registration: valid and current</li>
                <li>Additional training: fellowships in areas like high-risk pregnancy, laparoscopy or fertility</li>
                <li>Experience: regular handling of normal deliveries, C-sections and complications</li>
              </ul>

              <p className="text-gray-700">
                Note: A title alone does not prove quality. Always verify
                credentials and experience.
              </p>
            </div>

            {/* Section 12 — Title and Quality */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does the Title Affect the Quality of Care?
              </h2>

              <p className="mb-4 text-gray-700">
                Not by itself. Quality depends on the person and the setup.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Matters More Than the Title
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications and registration</li>
                <li>Hands-on experience</li>
                <li>Honest, clear communication</li>
                <li>Willingness to support normal delivery when safe</li>
                <li>Emergency readiness and a good team</li>
                <li>Availability when you need her</li>
                <li>Compassion and respect</li>
              </ul>
            </div>

            {/* Section 13 — Choose Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Doctor for Your Pregnancy
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check qualifications and registration</li>
                <li>Look at experience with normal deliveries, C-sections and high-risk cases</li>
                <li>Notice communication: Does she explain clearly and listen patiently?</li>
                <li>Prefer honesty: Surgery should be advised only when truly needed</li>
                <li>Consider comfort: Many women prefer a lady doctor for ease and trust</li>
                <li>Inspect facilities: A clean clinic, ultrasound, an operation theatre and emergency arrangements</li>
                <li>Check availability: She should be reachable for urgent concerns</li>
                <li>Ask about costs: Get a clear, written estimate</li>
              </ul>
            </div>

            {/* Section 14 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Doctor
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What are your qualifications and experience?</li>
                <li>Are you an obstetrician, a gynaecologist or both?</li>
                <li>How often will I need check-ups and scans?</li>
                <li>Will you personally attend my delivery?</li>
                <li>Do you support normal delivery wherever it is safe?</li>
                <li>When would a C-section be necessary?</li>
                <li>What is your plan for emergencies?</li>
                <li>Do you provide postnatal and newborn care?</li>
                <li>Who else will be part of my care team?</li>
                <li>What is the estimated cost of care?</li>
              </ul>
            </div>

            {/* Section 15 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pregnancy Doctors
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: &quot;A maternity doctor and an obstetrician are completely different.&quot; Fact: In most cases, they are the same kind of specialist.</li>
                <li>Myth: &quot;A gynaecologist cannot manage pregnancy.&quot; Fact: Most gynaecologists in India are also trained obstetricians (OB-GYNs).</li>
                <li>Myth: &quot;I need a separate specialist for every stage.&quot; Fact: One OB-GYN can usually care for you from planning to postnatal.</li>
                <li>Myth: &quot;A higher-sounding title means a better doctor.&quot; Fact: Skill, experience and honesty matter more.</li>
                <li>Myth: &quot;A midwife can replace a doctor in all cases.&quot; Fact: Complications and surgery need a doctor.</li>
              </ul>
            </div>

            {/* Section 16 — Urgent Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See Your Doctor Urgently
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for your next appointment if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding or leaking of fluid</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache, blurred vision or sudden swelling of the face and hands</li>
                <li>High fever</li>
                <li>Regular contractions before 37 weeks</li>
                <li>Chest pain or difficulty breathing</li>
                <li>Persistent vomiting with inability to drink</li>
              </ul>

              <p className="text-gray-700">
                Call your doctor immediately or go to the nearest hospital.
              </p>
            </div>

            {/* Section 17 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-6 text-black">
                Dr. Priyanka Pachauri: Best Gynaecologist in Moradabad
              </p>

              <p className="mb-6 text-black">
                Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 18 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}