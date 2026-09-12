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

export default function IVFCentreMoradabad() {
  const faqs = [
    {
      q: "What is an IVF Centre In Moradabad?",
      a: "An IVF centre provides specialised fertility evaluation and treatment for couples experiencing difficulty conceiving. Depending on the patient's diagnosis, treatment may include fertility assessment, IUI, IVF, ICSI and other reproductive health services.",
    },
    {
      q: "When should I visit an IVF Centre In Moradabad?",
      a: "A fertility consultation is generally recommended after prolonged difficulty conceiving, although earlier evaluation may be appropriate when there are known fertility concerns, irregular periods, endometriosis, tubal problems, previous reproductive surgery or male fertility issues.",
    },
    {
      q: "Is IVF the first treatment for infertility?",
      a: "Not always. Depending on the cause of infertility, a doctor may recommend medical treatment, ovulation induction, IUI or another approach before IVF.",
    },
    {
      q: "What is the difference between IUI and IVF?",
      a: "IUI places prepared sperm into the uterus around ovulation, while IVF involves collecting eggs, fertilising them in a laboratory and transferring an embryo into the uterus.",
    },
    {
      q: "What is ICSI?",
      a: "ICSI is a fertilisation technique in which a single sperm is injected directly into an egg. It may be recommended in selected cases, particularly for certain male-factor infertility situations.",
    },
    {
      q: "What factors affect IVF treatment outcomes?",
      a: "Age, ovarian reserve, egg and sperm factors, the cause of infertility, uterine health, previous treatment history and embryo development can all influence IVF outcomes.",
    },
    {
      q: "Does male infertility affect the need for IVF?",
      a: "Yes. Male fertility factors can contribute to infertility, and treatment may include medical evaluation, IUI, IVF or ICSI depending on the findings.",
    },
    {
      q: "How much does IVF cost in Moradabad?",
      a: "IVF costs vary according to the investigations, medicines, treatment protocol, laboratory services and additional procedures required. A personalised estimate can be discussed during consultation.",
    },
    {
      q: "Can PCOS cause infertility?",
      a: "PCOS can affect ovulation and may make conception more difficult for some women. Appropriate evaluation and treatment can help address ovulation-related fertility problems.",
    },
    {
      q: "Can endometriosis affect fertility?",
      a: "Endometriosis can affect fertility in some women. The appropriate treatment depends on the severity, symptoms, age, fertility goals and other clinical factors.",
    },
    {
      q: "How can I book an IVF consultation in Moradabad?",
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
                IVF Centre In Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                Finding the right IVF Centre In Moradabad is an important decision for couples who are trying to conceive and need specialised fertility care. Infertility can have different causes, including ovulation problems, blocked fallopian tubes, endometriosis, reduced ovarian reserve, fibroids, male factor infertility, or unexplained infertility.
              </p>

              <p className="text-gray-700">
                At Dr. Priyanka's fertility and gynaecology practice in Moradabad, couples can seek evaluation and guidance for infertility and understand which treatment option may be appropriate for their individual situation. Depending on the diagnosis, treatment may include lifestyle and medical management, ovulation induction, IUI, IVF, ICSI, hysteroscopy, or laparoscopic procedures.
              </p>
            </div>

            {/* Section 2 — IVF Centre For Fertility Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Centre In Moradabad For Fertility And Infertility Care
              </h2>

              <p className="text-gray-700 mb-4">
                IVF, or In Vitro Fertilisation, is a fertility treatment in which eggs are collected from the ovaries and fertilised with sperm in a laboratory. An embryo may then be transferred into the uterus.
              </p>

              <p className="text-gray-700 mb-4">
                IVF may be considered when other fertility treatments are not suitable or have not resulted in pregnancy, depending on the couple's medical history.
              </p>

              <p className="text-gray-700 mb-4">
                A fertility consultation generally focuses on:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Understanding the couple's medical and reproductive history</li>
                <li>Identifying possible causes of infertility</li>
                <li>Assessing ovarian function and reproductive health</li>
                <li>Evaluating sperm health</li>
                <li>Checking the uterus and fallopian tubes when required</li>
                <li>Reviewing previous fertility treatments</li>
                <li>Discussing suitable treatment options</li>
                <li>Explaining the expected steps, benefits, limitations and possible risks</li>
              </ul>

              <p className="text-gray-700 mt-4">
                This evaluation helps create an individualised fertility treatment plan rather than using the same approach for every patient.
              </p>
            </div>

            {/* Section 3 — IVF Treatment In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Treatment In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                IVF Treatment In Moradabad involves several stages. The exact protocol can vary according to age, ovarian reserve, fertility diagnosis, previous treatment history and other individual factors.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Fertility Assessment
                  </h3>
                  <p className="text-gray-700">
                    The first step is usually a detailed evaluation of both partners. For women, evaluation may include hormonal tests, ultrasound and other investigations when medically indicated. Depending on the history, the doctor may also recommend assessment of the fallopian tubes or uterus. For men, semen analysis is an important part of the fertility evaluation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Ovarian Stimulation
                  </h3>
                  <p className="text-gray-700">
                    If IVF is recommended, medicines may be prescribed to stimulate the ovaries to develop multiple follicles. The response is monitored using appropriate clinical assessments, which may include ultrasound and blood tests.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Egg Retrieval
                  </h3>
                  <p className="text-gray-700">
                    When the follicles are considered ready, eggs are collected through a procedure known as oocyte retrieval. The procedure is generally performed with appropriate pain control or anaesthesia as decided by the treating medical team.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Fertilisation
                  </h3>
                  <p className="text-gray-700">
                    The collected eggs are combined with sperm in a fertility laboratory. Depending on the clinical situation, conventional fertilisation or ICSI (Intracytoplasmic Sperm Injection) may be considered.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Embryo Development
                  </h3>
                  <p className="text-gray-700">
                    Following fertilisation, embryos are monitored during their development under laboratory conditions. The number and quality of embryos available can vary between individuals and treatment cycles.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Embryo Transfer
                  </h3>
                  <p className="text-gray-700">
                    When appropriate, an embryo may be transferred into the uterus. The decision regarding embryo transfer depends on the individual treatment plan and clinical circumstances.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Pregnancy Testing
                  </h3>
                  <p className="text-gray-700">
                    After embryo transfer, the fertility team provides instructions regarding medication, follow-up and the appropriate timing of pregnancy testing.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Who May Need IVF Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who May Need IVF Treatment?
              </h2>

              <p className="text-gray-700 mb-4">
                IVF may be considered for different fertility conditions. It is not limited to one specific cause of infertility.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the individual diagnosis, IVF may be considered in situations such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Blocked or damaged fallopian tubes</li>
                <li>Certain ovulation disorders</li>
                <li>Some cases of endometriosis</li>
                <li>Reduced ovarian reserve</li>
                <li>Certain forms of male factor infertility</li>
                <li>Previous unsuccessful fertility treatments</li>
                <li>Unexplained infertility</li>
                <li>Fertility problems associated with increasing maternal age</li>
                <li>Situations where other fertility treatments are unlikely to be suitable</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The decision to proceed with IVF should be made after an appropriate fertility evaluation.
              </p>
            </div>

            {/* Section 5 — IVF Doctor In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Doctor In Moradabad For Individualised Treatment Planning
              </h2>

              <p className="text-gray-700 mb-4">
                Consulting an experienced gynaecologist or fertility specialist can help couples understand the reason for infertility and the treatment options available to them.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecological and fertility-related care in Moradabad, with consultation focused on understanding each patient's medical history and fertility concerns.
              </p>

              <p className="text-gray-700 mb-4">
                During a fertility consultation, couples can discuss:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Previous attempts to conceive</li>
                <li>Menstrual and ovulation history</li>
                <li>Previous pregnancy history</li>
                <li>Previous IVF, IUI or other fertility treatment</li>
                <li>Medical conditions and medications</li>
                <li>Fertility investigations</li>
                <li>Male and female fertility factors</li>
                <li>Possible treatment options</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The goal is to understand the individual situation before deciding on the next step.
              </p>
            </div>

            {/* Section 6 — Fertility Evaluation For Both Partners */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Evaluation For Both Partners
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility can involve female factors, male factors, a combination of both, or no clearly identifiable cause. For this reason, evaluating only the woman may not provide a complete picture.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Female Fertility Evaluation
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Depending on the clinical history, evaluation may include:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Menstrual history</li>
                    <li>Ovulation assessment</li>
                    <li>Hormonal testing</li>
                    <li>Ovarian reserve assessment</li>
                    <li>Pelvic ultrasound</li>
                    <li>Uterine evaluation</li>
                    <li>Fallopian tube assessment when indicated</li>
                  </ul>
                  <p className="text-gray-700">
                    Conditions such as PCOS, endometriosis, fibroids, ovarian cysts and other reproductive health problems may require specific evaluation and treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Male Fertility Evaluation
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Male factors can also contribute to difficulty conceiving. A semen analysis is commonly used to assess factors such as:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Sperm count</li>
                    <li>Sperm motility</li>
                    <li>Sperm morphology</li>
                  </ul>
                  <p className="text-gray-700">
                    Further evaluation may be recommended depending on the findings.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 — IUI And IVF Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IUI And IVF Treatment In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                IVF is not always the first fertility treatment. Depending on the cause of infertility, age and other factors, a doctor may consider treatments such as:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ovulation Induction
                  </h3>
                  <p className="text-gray-700">
                    Medicines may be used to support ovulation in selected patients with ovulation-related fertility problems.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    IUI
                  </h3>
                  <p className="text-gray-700">
                    Intrauterine Insemination (IUI) involves placing prepared sperm into the uterus around the time of ovulation. IUI may be considered for selected couples depending on the fertility diagnosis.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    IVF
                  </h3>
                  <p className="text-gray-700">
                    IVF involves fertilisation outside the body followed by embryo transfer into the uterus.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ICSI
                  </h3>
                  <p className="text-gray-700">
                    ICSI is a specialised fertilisation technique in which a single sperm is injected directly into an egg. It may be considered in selected cases, particularly when there are significant male-factor fertility concerns or previous fertilisation problems.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                The most appropriate treatment depends on the individual diagnosis.
              </p>
            </div>

            {/* Section 8 — Infertility Treatment In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Treatment In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility Treatment In Moradabad is not limited to IVF. Some fertility problems can be managed by treating the underlying condition.
              </p>

              <p className="text-gray-700 mb-4">
                For example, fertility care may involve evaluation and management of:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>PCOS and ovulation problems</li>
                <li>Endometriosis</li>
                <li>Fibroids</li>
                <li>Ovarian cysts</li>
                <li>Uterine polyps</li>
                <li>Tubal problems</li>
                <li>Hormonal disorders</li>
                <li>Male factor infertility</li>
                <li>Unexplained infertility</li>
              </ul>

              <p className="text-gray-700 mt-4">
                In selected cases, procedures such as hysteroscopy or laparoscopy may be considered when they are clinically appropriate. The purpose of the fertility evaluation is to identify the most suitable treatment pathway rather than automatically choosing IVF.
              </p>
            </div>

            {/* Section 9 — Factors That Can Affect IVF Outcomes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Factors That Can Affect IVF Treatment Outcomes
              </h2>

              <p className="text-gray-700 mb-4">
                Couples often want to know the chances of success before starting IVF. However, IVF outcomes vary between individuals and treatment cycles.
              </p>

              <p className="text-gray-700 mb-4">
                Factors that may influence outcomes include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Age</li>
                <li>Ovarian reserve</li>
                <li>Egg quality</li>
                <li>Sperm quality</li>
                <li>Cause and duration of infertility</li>
                <li>Uterine health</li>
                <li>Previous fertility treatment</li>
                <li>Number and development of embryos</li>
                <li>Other medical conditions</li>
              </ul>

              <p className="text-gray-700 mt-4">
                For this reason, a responsible fertility consultation should provide realistic expectations based on the patient's individual circumstances rather than promising a particular outcome.
              </p>
            </div>

            {/* Section 10 — IVF Consultation In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Consultation In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                A fertility consultation is an opportunity to understand your reproductive health before making decisions about treatment.
              </p>

              <p className="text-gray-700 mb-4">
                Before your appointment, it can be helpful to bring:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Previous ultrasound reports</li>
                <li>Hormonal test reports</li>
                <li>Semen analysis reports</li>
                <li>Previous IVF or IUI records</li>
                <li>Details of previous pregnancies</li>
                <li>Current medication information</li>
                <li>Relevant medical and surgical history</li>
              </ul>

              <p className="text-gray-700 mt-4">
                During the consultation, you can ask about the recommended treatment, possible alternatives, expected timeline, potential risks and estimated costs.
              </p>
            </div>

            {/* Section 11 — How To Choose An IVF Centre */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How To Choose An IVF Centre In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing an IVF Centre In Moradabad should involve more than comparing advertisements or package prices.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualified Fertility Care
                  </h3>
                  <p className="text-gray-700">
                    Check the qualifications and experience of the doctor managing your fertility treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Individualised Treatment
                  </h3>
                  <p className="text-gray-700">
                    The clinic should assess your medical history before recommending a treatment plan.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-gray-700">
                    You should receive understandable information about investigations, treatment steps, possible risks and expected follow-up.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Laboratory And Clinical Support
                  </h3>
                  <p className="text-gray-700">
                    Ask about the fertility laboratory and how embryology services are coordinated with the clinical team.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparent Costs
                  </h3>
                  <p className="text-gray-700">
                    Before starting treatment, ask for a clear explanation of consultation, investigations, medicines, procedures and other possible costs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Follow-Up Care
                  </h3>
                  <p className="text-gray-700">
                    Fertility treatment involves multiple appointments, so convenient communication and follow-up can be important throughout the process.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 — IVF Cost In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Cost In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The IVF Cost In Moradabad can vary depending on the treatment protocol and the individual requirements of the couple.
              </p>

              <p className="text-gray-700 mb-4">
                Factors that may affect the total cost include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Initial fertility investigations</li>
                <li>Medicines used during ovarian stimulation</li>
                <li>Monitoring</li>
                <li>Egg retrieval</li>
                <li>Laboratory and embryology services</li>
                <li>ICSI when recommended</li>
                <li>Embryo freezing or storage when applicable</li>
                <li>Additional procedures or investigations</li>
                <li>Follow-up treatment</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Because treatment requirements differ from one patient to another, it is better to discuss the expected cost during a fertility consultation rather than relying on a single advertised package price.
              </p>
            </div>

            {/* Section 13 — When Should You Visit An IVF Centre */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Visit An IVF Centre?
              </h2>

              <p className="text-gray-700 mb-4">
                You may consider a fertility consultation if you have been trying to conceive without success or have a known condition that may affect fertility.
              </p>

              <p className="text-gray-700 mb-4">
                Earlier evaluation may be appropriate when there are concerns such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Irregular or absent periods</li>
                <li>Known PCOS</li>
                <li>Endometriosis</li>
                <li>Previous pelvic or reproductive surgery</li>
                <li>Previous ectopic pregnancy</li>
                <li>Known tubal problems</li>
                <li>Reduced ovarian reserve</li>
                <li>Previous cancer treatment that may affect fertility</li>
                <li>Known male fertility problems</li>
                <li>Repeated pregnancy loss</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Age is also an important factor in fertility planning, so couples should discuss their individual circumstances with a qualified doctor rather than delaying evaluation unnecessarily.
              </p>
            </div>

            {/* Section 14 — Fertility Care For Couples In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Fertility Care For Couples In Moradabad
              </h2>

              <p className="text-gray-700">
                For couples searching for an IVF Centre In Moradabad, local access to fertility consultation can make it easier to attend investigations, monitoring appointments and follow-up visits. Dr. Priyanka's practice in Moradabad provides gynaecological and fertility consultations for women and couples seeking guidance about infertility and reproductive health. Each patient is assessed individually, and treatment recommendations depend on the medical findings and fertility goals.
              </p>
            </div>

            {/* Section 15 — Why Choose Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka For Fertility Consultation?
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecological care in Moradabad and consultations related to fertility and infertility.
              </p>

              <p className="text-gray-700 mb-4">
                Patients can discuss concerns related to:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Infertility</li>
                <li>IVF</li>
                <li>IUI</li>
                <li>PCOS</li>
                <li>Endometriosis</li>
                <li>Ovulation problems</li>
                <li>Ovarian cysts</li>
                <li>Fibroids</li>
                <li>Uterine problems</li>
                <li>Menstrual disorders</li>
                <li>Fertility planning</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A consultation can help determine which investigations or treatment options may be appropriate for your situation.
              </p>
            </div>

            {/* Section 16 — Book An IVF Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Book An IVF Consultation In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you are searching for an IVF Centre In Moradabad, the first step is to understand your fertility concerns and receive an appropriate evaluation.
              </p>

              <p className="text-gray-700 mb-4">
                You can contact Dr. Priyanka's clinic to discuss your fertility concerns and schedule a consultation.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Pachauri</p>
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
                Frequently Asked Questions About IVF Centre In Moradabad
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