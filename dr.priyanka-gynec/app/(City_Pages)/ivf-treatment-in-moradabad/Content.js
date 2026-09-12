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
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function IVFTreatmentMoradabad() {
  const faqs = [
    {
      q: "What is IVF Treatment In Moradabad?",
      a: "IVF treatment involves collecting eggs, fertilising them with sperm in a laboratory and transferring an embryo into the uterus when appropriate. The treatment is used for selected cases of infertility.",
    },
    {
      q: "When should I consult an IVF Doctor In Moradabad?",
      a: "A fertility consultation may be appropriate when you have difficulty conceiving, particularly after prolonged attempts or when you already have a known fertility-related condition.",
    },
    {
      q: "Is IVF the first treatment for infertility?",
      a: "Not necessarily. Depending on the diagnosis, age and fertility history, treatment may include ovulation induction, IUI, surgery or other medical management before IVF.",
    },
    {
      q: "What is the difference between IUI and IVF?",
      a: "IUI places prepared sperm into the uterus around ovulation. IVF involves collecting eggs and fertilising them in a laboratory before transferring an embryo into the uterus.",
    },
    {
      q: "What is ICSI in IVF treatment?",
      a: "ICSI is a laboratory fertilisation technique in which one sperm is injected directly into an egg. It may be recommended in selected cases.",
    },
    {
      q: "What is IVF Cost In Moradabad?",
      a: "IVF cost varies depending on investigations, medicines, monitoring, laboratory services, ICSI and other treatment requirements. An individual estimate can be discussed during consultation.",
    },
    {
      q: "Does PCOS affect fertility?",
      a: "PCOS can affect ovulation and may make conception more difficult for some women. Treatment depends on the individual's symptoms, fertility goals and medical findings.",
    },
    {
      q: "Can endometriosis affect fertility?",
      a: "Endometriosis can affect fertility in some women. Treatment options depend on the severity of the condition, symptoms, age and fertility goals.",
    },
    {
      q: "Can male infertility require IVF or ICSI?",
      a: "Yes. Depending on semen analysis and other findings, a fertility specialist may discuss IUI, IVF or ICSI.",
    },
    {
      q: "Is IVF treatment painful?",
      a: "Some stages of IVF, particularly egg retrieval, involve a medical procedure and appropriate pain control or anaesthesia may be used. Patients should discuss the procedure and expected discomfort with their treating team.",
    },
    {
      q: "Does IVF guarantee pregnancy?",
      a: "No. IVF cannot guarantee pregnancy. Outcomes vary according to age, ovarian reserve, egg and sperm factors, embryo development, uterine health and other individual factors.",
    },
    {
      q: "How can I book IVF Treatment In Moradabad?",
      a: "You can contact Dr. Priyanka's clinic by phone or WhatsApp to enquire about a fertility consultation and appointment.",
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
                IVF Treatment In Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                If you are looking for IVF Treatment In Moradabad, getting the right fertility evaluation is an important first step. Difficulty in conceiving can have several causes, including ovulation problems, blocked fallopian tubes, endometriosis, reduced ovarian reserve, fibroids, male-factor infertility, or unexplained infertility.
              </p>

              <p className="text-gray-700 mb-4">
                IVF, or In Vitro Fertilisation, is one of the fertility treatment options available for selected couples. However, IVF is not automatically the first treatment for every patient. The appropriate approach depends on the age of the woman, fertility history, test results, ovarian reserve, sperm parameters, reproductive health and the underlying cause of infertility.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri provides gynaecology and fertility consultation in Moradabad for women and couples seeking evaluation and guidance for infertility, IVF, IUI and related reproductive health concerns.
              </p>
            </div>

            {/* Section 2 — IVF For Personalised Fertility Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Treatment In Moradabad For Personalised Fertility Care
              </h2>

              <p className="text-gray-700 mb-4">
                IVF is a treatment in which eggs are collected from the ovaries and fertilised with sperm in a laboratory. If embryos develop, an embryo may subsequently be transferred into the uterus.
              </p>

              <p className="text-gray-700 mb-4">
                IVF may be considered when:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The fallopian tubes are blocked or severely damaged</li>
                <li>There are certain forms of male-factor infertility</li>
                <li>Ovulation-related fertility problems have not responded adequately to other treatment</li>
                <li>Endometriosis is affecting fertility</li>
                <li>Previous fertility treatments have not resulted in pregnancy</li>
                <li>There is unexplained infertility</li>
                <li>Age-related fertility factors need to be considered</li>
                <li>Other clinical circumstances make IVF an appropriate option</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Before starting IVF, a fertility specialist evaluates the individual circumstances and discusses available treatment options.
              </p>
            </div>

            {/* Section 3 — What Is IVF */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is IVF?
              </h2>

              <p className="text-gray-700 mb-4">
                In Vitro Fertilisation (IVF) is a form of assisted reproductive technology.
              </p>

              <p className="text-gray-700 mb-4">
                Instead of fertilisation occurring inside the fallopian tube, eggs are collected from the ovaries and fertilised with sperm in a laboratory. The resulting embryos are monitored, and an embryo may be transferred to the uterus according to the treatment plan.
              </p>

              <p className="text-gray-700 mb-4">
                IVF may involve several appointments, monitoring visits, medication, egg retrieval, laboratory fertilisation, embryo development and follow-up.
              </p>

              <p className="text-gray-700">
                The exact treatment protocol is different for every patient.
              </p>
            </div>

            {/* Section 4 — Who May Need IVF Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who May Need IVF Treatment?
              </h2>

              <p className="text-gray-700 mb-4">
                IVF may be recommended for selected patients with different fertility problems.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Blocked Fallopian Tubes
                  </h3>
                  <p className="text-gray-700">
                    Blocked or significantly damaged fallopian tubes can prevent sperm and egg from meeting naturally. Depending on the extent of the problem and other fertility factors, IVF may be considered.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Male Factor Infertility
                  </h3>
                  <p className="text-gray-700">
                    Low sperm count, reduced sperm motility or other sperm-related problems can contribute to difficulty conceiving. Depending on the findings, treatments such as IUI, IVF or ICSI may be discussed.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ovulation Problems
                  </h3>
                  <p className="text-gray-700">
                    Conditions such as PCOS can interfere with regular ovulation. Some women may respond to ovulation treatment, while IVF may be considered when other approaches are not appropriate or have not worked.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Endometriosis
                  </h3>
                  <p className="text-gray-700">
                    Endometriosis can affect fertility in some women. Treatment depends on symptoms, severity, age and fertility goals. IVF may be considered in selected situations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reduced Ovarian Reserve
                  </h3>
                  <p className="text-gray-700">
                    Ovarian reserve can decline with age and may vary between individuals. Tests such as AMH and ultrasound-based assessment may help the doctor understand ovarian reserve.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Unexplained Infertility
                  </h3>
                  <p className="text-gray-700">
                    Sometimes standard investigations do not identify a specific cause of infertility. In such situations, the fertility specialist may discuss options such as expectant management, ovulation treatment, IUI or IVF depending on the individual circumstances.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — IVF Process In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Process In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The IVF process usually involves several stages.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Fertility Consultation And Evaluation
                  </h3>
                  <p className="text-gray-700 mb-2">
                    The first step is understanding the fertility history of both partners. Depending on the clinical situation, investigations may include:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Medical and reproductive history</li>
                    <li>Menstrual and ovulation assessment</li>
                    <li>Hormonal blood tests</li>
                    <li>AMH or ovarian reserve assessment when indicated</li>
                    <li>Pelvic ultrasound</li>
                    <li>Uterine assessment</li>
                    <li>Fallopian tube evaluation when required</li>
                    <li>Semen analysis</li>
                  </ul>
                  <p className="text-gray-700">
                    Previous fertility reports and treatment records can also be useful during the consultation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Ovarian Stimulation
                  </h3>
                  <p className="text-gray-700">
                    When IVF is recommended, medicines may be prescribed to stimulate the ovaries so that multiple follicles can develop. The response is monitored through appropriate clinical assessments, which may include ultrasound and blood tests. The medication dose and duration depend on the patient's response.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Egg Retrieval
                  </h3>
                  <p className="text-gray-700">
                    When the follicles reach the appropriate stage, eggs are collected through an egg retrieval procedure. Pain control or anaesthesia may be used according to the procedure and the treating medical team's assessment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Fertilisation
                  </h3>
                  <p className="text-gray-700">
                    The collected eggs are fertilised with sperm in the laboratory. Conventional IVF or ICSI (Intracytoplasmic Sperm Injection) may be considered depending on sperm parameters, previous fertilisation results and other clinical factors.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Embryo Development
                  </h3>
                  <p className="text-gray-700">
                    Following fertilisation, embryos are monitored during their development. The number of embryos available and their development can vary between treatment cycles.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Embryo Transfer
                  </h3>
                  <p className="text-gray-700">
                    When appropriate, an embryo is transferred into the uterus using a thin catheter. The timing and number of embryos transferred depend on the individual treatment plan.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Pregnancy Follow-Up
                  </h3>
                  <p className="text-gray-700">
                    After embryo transfer, the fertility team provides instructions regarding medication and follow-up. A pregnancy test is performed at the appropriate time recommended by the treating doctor. If pregnancy occurs, the patient can then move into pregnancy monitoring and antenatal care.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 — IVF Specialist In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Specialist In Moradabad: Why Fertility Evaluation Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing an IVF Specialist In Moradabad should not be based only on advertisements, packages or promises of success. A proper fertility consultation should consider both partners and identify factors that may influence treatment.
              </p>

              <p className="text-gray-700 mb-4">
                During an IVF consultation, your doctor may review:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Age</li>
                <li>Duration of infertility</li>
                <li>Previous pregnancies</li>
                <li>Menstrual history</li>
                <li>Ovulation history</li>
                <li>Previous IUI or IVF cycles</li>
                <li>Ovarian reserve</li>
                <li>Uterine health</li>
                <li>Fallopian tube condition</li>
                <li>Semen analysis</li>
                <li>Previous surgeries</li>
                <li>Existing medical conditions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This information helps determine whether IVF, IUI, medical treatment, surgery or another fertility approach may be appropriate.
              </p>
            </div>

            {/* Section 7 — IVF And IUI Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF And IUI Treatment In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                IVF is not the only fertility treatment. Depending on the diagnosis, a fertility specialist may recommend other options.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ovulation Induction
                  </h3>
                  <p className="text-gray-700">
                    Medication can sometimes be used to help women who have difficulty ovulating regularly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    IUI
                  </h3>
                  <p className="text-gray-700">
                    Intrauterine Insemination (IUI) involves placing prepared sperm into the uterus around the time of ovulation. IUI may be considered in selected cases depending on factors such as age, ovulation, sperm parameters and the cause of infertility.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    IVF
                  </h3>
                  <p className="text-gray-700">
                    IVF involves egg retrieval, laboratory fertilisation and embryo transfer.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ICSI
                  </h3>
                  <p className="text-gray-700">
                    ICSI involves injecting a single sperm directly into an egg. It may be considered in selected cases, particularly when there are significant sperm-related concerns or previous fertilisation problems.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                The treatment choice should be based on the couple's individual fertility assessment.
              </p>
            </div>

            {/* Section 8 — Infertility Treatment In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Treatment In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility Treatment In Moradabad may involve treating an underlying condition rather than immediately proceeding to IVF.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the diagnosis, treatment may involve evaluation and management of:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>PCOS</li>
                <li>Ovulation disorders</li>
                <li>Endometriosis</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Uterine polyps</li>
                <li>Tubal problems</li>
                <li>Hormonal problems</li>
                <li>Male-factor infertility</li>
                <li>Unexplained infertility</li>
              </ul>

              <p className="text-gray-700 mt-4">
                In selected patients, procedures such as hysteroscopy or laparoscopy may also be considered. The purpose of the fertility evaluation is to understand the cause and select the most appropriate treatment pathway.
              </p>
            </div>

            {/* Section 9 — Fertility Evaluation For Women And Men */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Evaluation For Women And Men
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility can affect either partner or both partners.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Female Fertility Assessment
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Depending on the medical history, assessment may include:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Menstrual history</li>
                    <li>Ovulation assessment</li>
                    <li>Hormonal tests</li>
                    <li>Ovarian reserve testing</li>
                    <li>Ultrasound</li>
                    <li>Uterine evaluation</li>
                    <li>Fallopian tube assessment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Male Fertility Assessment
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Male fertility should also be evaluated when a couple is having difficulty conceiving. A semen analysis can assess:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Sperm concentration</li>
                    <li>Sperm motility</li>
                    <li>Sperm morphology</li>
                  </ul>
                  <p className="text-gray-700">
                    Additional tests may be recommended depending on the results and medical history.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 — Factors That Affect IVF Outcomes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Factors That Affect IVF Treatment Outcomes
              </h2>

              <p className="text-gray-700 mb-4">
                There is no single IVF success rate that applies to every patient. Treatment outcomes can vary according to:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Age</li>
                <li>Ovarian reserve</li>
                <li>Egg quality</li>
                <li>Sperm quality</li>
                <li>Cause of infertility</li>
                <li>Uterine health</li>
                <li>Embryo development</li>
                <li>Previous fertility treatment</li>
                <li>Other medical conditions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A fertility specialist should discuss realistic expectations based on the individual patient's circumstances. No clinic can guarantee pregnancy or a particular IVF outcome.
              </p>
            </div>

            {/* Section 11 — IVF Cost In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Cost In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                One of the most common questions patients ask is about IVF Cost In Moradabad. The total cost can vary because each IVF treatment plan is different.
              </p>

              <p className="text-gray-700 mb-4">
                Factors that may affect the cost include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Initial fertility investigations</li>
                <li>Medicines used during ovarian stimulation</li>
                <li>Ultrasound and monitoring</li>
                <li>Egg retrieval</li>
                <li>Laboratory services</li>
                <li>ICSI, when recommended</li>
                <li>Embryo freezing or storage, when applicable</li>
                <li>Additional procedures</li>
                <li>Follow-up consultations</li>
              </ul>

              <p className="text-gray-700 mt-4">
                For this reason, it is better to discuss the expected cost after fertility evaluation rather than relying on a fixed advertised price.
              </p>
            </div>

            {/* Section 12 — How To Choose An IVF Centre */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How To Choose An IVF Centre In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you are comparing an IVF Centre In Moradabad, consider more than the treatment package price.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualified Medical Team
                  </h3>
                  <p className="text-gray-700">
                    Look for appropriate medical qualifications and experience in fertility and reproductive healthcare.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Proper Fertility Evaluation
                  </h3>
                  <p className="text-gray-700">
                    The centre should assess the relevant factors before recommending IVF.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Treatment Information
                  </h3>
                  <p className="text-gray-700">
                    Ask about the treatment stages, medication, monitoring, possible risks and follow-up.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparent Cost
                  </h3>
                  <p className="text-gray-700">
                    Ask what is included in the treatment cost and which additional expenses may arise.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Laboratory Support
                  </h3>
                  <p className="text-gray-700">
                    Ask how egg fertilisation, embryo culture and embryology services are managed.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Individualised Care
                  </h3>
                  <p className="text-gray-700">
                    Every couple has different fertility factors. Treatment should therefore be based on the patient's medical assessment rather than a fixed protocol.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 13 — Preparing For IVF Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing For IVF Treatment
              </h2>

              <p className="text-gray-700 mb-4">
                Before beginning fertility treatment, discuss your general health and medication with your doctor.
              </p>

              <p className="text-gray-700 mb-4">
                Some practical steps include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Maintain a balanced diet</li>
                <li>Avoid smoking</li>
                <li>Avoid alcohol when advised during fertility treatment</li>
                <li>Take prescribed medicines and supplements as directed</li>
                <li>Maintain regular physical activity appropriate for your health</li>
                <li>Keep previous fertility reports organised</li>
                <li>Inform your doctor about existing medical conditions</li>
                <li>Attend scheduled monitoring appointments</li>
                <li>Ask questions if any part of the treatment is unclear</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Do not start supplements or medicines specifically for fertility without discussing them with your doctor.
              </p>
            </div>

            {/* Section 14 — When Should You Consult An IVF Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Consult An IVF Doctor?
              </h2>

              <p className="text-gray-700 mb-4">
                You may benefit from a fertility consultation if you have been trying to conceive without success.
              </p>

              <p className="text-gray-700 mb-4">
                Earlier assessment may be appropriate if there are known fertility concerns such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Irregular or absent periods</li>
                <li>PCOS</li>
                <li>Endometriosis</li>
                <li>Previous pelvic surgery</li>
                <li>Previous ectopic pregnancy</li>
                <li>Known tubal problems</li>
                <li>Reduced ovarian reserve</li>
                <li>Previous fertility treatment</li>
                <li>Known male fertility problems</li>
                <li>Recurrent pregnancy loss</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Women above 35 may also benefit from discussing fertility evaluation sooner rather than waiting for a prolonged period.
              </p>
            </div>

            {/* Section 15 — Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec – Fertility And Gynaecology Care In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecology and fertility consultations in Moradabad.
              </p>

              <p className="text-gray-700 mb-4">
                Patients can discuss concerns related to:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>IVF</li>
                <li>Infertility</li>
                <li>IUI</li>
                <li>ICSI</li>
                <li>PCOS</li>
                <li>Endometriosis</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Menstrual problems</li>
                <li>Ovulation problems</li>
                <li>Pregnancy planning</li>
                <li>Reproductive health</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The recommended treatment depends on the patient's diagnosis, medical history and fertility goals.
              </p>
            </div>

            {/* Section 16 — Book An IVF Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Book An IVF Consultation In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you are searching for IVF Treatment In Moradabad, the first step is a proper fertility consultation.
              </p>

              <p className="text-gray-700 mb-4">
                A detailed evaluation can help you understand the possible cause of infertility and whether treatment such as ovulation induction, IUI, IVF, ICSI, hysteroscopy, laparoscopy or another approach may be appropriate.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  You can contact the clinic directly to enquire about fertility consultation and appointment availability.
                </p>

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
            </div>

            {/* Section 17 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions About IVF Treatment In Moradabad
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

                    <p className="text-gray-700">{faq.a}</p>
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