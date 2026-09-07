import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function IVFCentreMoradabad() {
  const faqs = [
    {
      q: "When should a couple consider visiting an IVF centre in Moradabad?",
      a: "After one year of trying to conceive without success, or after six months if the woman is above thirty five years of age.",
    },
    {
      q: "Is IVF the first treatment recommended for infertility?",
      a: "No, simpler options like ovulation induction or IUI are usually tried first unless the diagnosis clearly requires IVF.",
    },
    {
      q: "Is ICSI different from regular IVF?",
      a: "Yes, ICSI involves injecting a single sperm directly into the egg and is mainly used for male factor infertility.",
    },
    {
      q: "Does the IVF centre have its own embryology laboratory?",
      a: "Yes, having an in house laboratory with proper embryo monitoring support improves accuracy and reduces delays.",
    },
    {
      q: "Is the egg retrieval procedure painful?",
      a: "It is done under sedation or light anaesthesia, so discomfort is minimal and closely monitored.",
    },
    {
      q: "What affects the success rate of IVF the most?",
      a: "Female age, ovarian reserve, sperm quality, and the underlying cause of infertility all play a major role.",
    },
    {
      q: "Can male infertility also be treated at the same centre?",
      a: "Yes, semen analysis and treatment for low sperm count or motility issues are handled alongside female fertility evaluation.",
    },
    {
      q: "How is Dr. Priyanka Pachauri connected to Ujala Cygnus BrightStar Hospital?",
      a: "Dr. Priyanka Pachauri is associated with Ujala Cygnus BrightStar Hospital in Moradabad, providing fertility, IVF, and gynaecological care through the hospital's infrastructure.",
    },
    {
      q: "How can I book a fertility consultation?",
      a: "You can call the hospital directly or message on WhatsApp at 8979670705 to schedule an appointment.",
    },
    {
      q: "Is fertility preservation like egg freezing available?",
      a: "Yes, egg and embryo freezing options are available for women who wish to delay pregnancy or preserve fertility before certain medical treatments.",
    },
  ];


  const sections = [
    {
      title: "Understanding Infertility Before Jumping To IVF",
      intro: "Infertility is generally defined as the inability to conceive after one year of regular unprotected intercourse, or after six months if the woman is above thirty five years of age. It is important to understand that infertility is not always a female issue. In a significant number of cases, the cause lies with the male partner, and in many others, it is a combination of factors on both sides.",
      items: [
        "Blocked or damaged fallopian tubes",
        "Ovulation disorders, including PCOS",
        "Low ovarian reserve, especially in women above thirty five",
        "Endometriosis affecting the uterus and ovaries",
        "Uterine abnormalities such as fibroids or polyps",
        "Low sperm count, poor motility, or abnormal sperm shape in the male partner",
        "Unexplained infertility where no clear cause is found despite testing",
      ],
      outro: "A responsible IVF centre always begins with proper diagnosis rather than recommending IVF as the first option. Only after this evaluation does a fertility specialist decide whether the couple needs simpler treatments like ovulation induction and IUI, or whether IVF is the more suitable path forward.",
    },
    {
      title: "What Does An IVF Centre In Moradabad Actually Offer",
      intro: "A comprehensive IVF centre offers multiple layers of fertility care, tailored to each couple's diagnosis.",
      items: [
        "Fertility Evaluation for Both Partners: A proper fertility workup includes hormonal blood tests, ultrasound scans to assess the uterus and ovaries, tubal patency tests for women, and semen analysis for men.",
        "Ovulation Induction and IUI: For couples with mild ovulation issues or unexplained infertility, ovulation induction combined with Intrauterine Insemination is often tried before moving to IVF.",
        "In Vitro Fertilisation (IVF): IVF involves stimulating the ovaries to produce multiple eggs, retrieving those eggs through a minor procedure, fertilising them with sperm in a laboratory, and transferring the resulting embryo back into the uterus.",
        "ICSI for Male Factor Infertility: Intracytoplasmic Sperm Injection, commonly known as ICSI, is used when sperm count or motility is too low for natural fertilisation to occur reliably.",
        "Embryo Monitoring and Laboratory Support: Modern IVF laboratories use time lapse imaging to monitor embryo development continuously without disturbing the embryo.",
        "Fertility Preservation: Egg freezing and embryo freezing are increasingly used by women who wish to delay pregnancy for medical or personal reasons.",
      ],
    },
    {
      title: "Why Hospital Level Support Matters During IVF Treatment",
      intro: "IVF is not a single day procedure. It involves several weeks of monitoring, a minor surgical step for egg retrieval, and careful post transfer care. Choosing a centre backed by full hospital infrastructure offers real advantages.",
      items: [
        "Immediate access to an operation theatre for egg retrieval procedures",
        "On site laboratory support for same day hormonal testing",
        "Anaesthesia support administered safely during egg collection",
        "Coordination between the fertility specialist, embryologist, and gynaecology team",
        "Emergency backup available in the rare case of complications such as ovarian hyperstimulation",
        "Continuity of care if the pregnancy needs to transition into antenatal and delivery services at the same facility",
      ],
      outro: "This is very different from a stand alone collection centre that outsources lab work or surgical steps elsewhere, which can add delays and reduce coordination during a process where timing matters significantly.",
    },
    {
      title: "Factors That Affect IVF Success Rates",
      intro: "Many couples search for guaranteed success before starting treatment, but IVF outcomes depend on several individual factors rather than the clinic alone. Being aware of these factors helps set realistic expectations.",
      items: [
        "Age of the woman, since egg quality and quantity decline with age",
        "Ovarian reserve, measured through hormonal tests and ultrasound",
        "Underlying cause of infertility and how well it responds to treatment",
        "Sperm quality and count in the male partner",
        "Uterine health and receptivity for embryo implantation",
        "Lifestyle factors such as weight, smoking, and stress levels",
        "Number of previous IVF attempts and their outcomes",
      ],
      outro: "A trustworthy fertility specialist will always explain these factors honestly rather than offering unrealistic promises, and will personalise the treatment protocol accordingly.",
    },
    {
      title: "What To Look For While Choosing An IVF Centre In Moradabad",
      intro: "Selecting the right fertility clinic is an important decision. The following factors can help guide your choice.",
      items: [
        "A fertility specialist with genuine experience in reproductive medicine",
        "Transparent explanation of diagnosis, treatment options, and realistic success rates",
        "Access to a proper embryology laboratory rather than outsourced testing",
        "Hospital backed infrastructure for egg retrieval and emergency situations",
        "Personalised treatment protocols instead of a single standard package for everyone",
        "Clear, upfront discussion of costs before treatment begins",
        "Emotional support and counselling alongside the medical process",
        "Continuity of care from fertility treatment through pregnancy and delivery",
      ],
    },
    {
      title: "Common Emotional Challenges During Fertility Treatment",
      intro: "Infertility treatment is not only physically demanding, it is emotionally taxing as well. Recognising this helps couples prepare better and seek the right support.",
      items: [
        "Anxiety around test results and treatment timelines",
        "Pressure from family or social expectations around parenthood",
        "Emotional strain after a failed IVF cycle",
        "Financial stress related to repeated treatment cycles",
        "Communication gaps between partners during a stressful process",
      ],
      outro: "A good fertility clinic acknowledges these challenges openly and offers counselling support alongside medical treatment, rather than treating the process as purely clinical.",
    },
    {
      title: "What To Expect During Your First Fertility Consultation",
      intro: "Understanding what a first visit involves can help couples feel more prepared and confident.",
      items: [
        "Detailed discussion of medical history for both partners",
        "Review of previous treatments or tests, if any",
        "Basic hormonal blood tests and ultrasound scan for the woman",
        "Semen analysis recommendation for the male partner",
        "A clear explanation of likely causes and next steps",
        "An honest, personalised treatment plan rather than a generic protocol",
      ],
    },
  ];


  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          <div className="flex-1 order-1">
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                IVF Centre In Moradabad: A Complete Guide To Fertility Treatment And Infertility Care
              </h1>

              <p className="text-gray-700 mb-4">
                For many couples, the journey to parenthood does not follow the timeline they expected. Months turn into years, hope mixes with anxiety, and every failed attempt makes the next question harder to ask out loud. This is the reality for a large number of couples across Moradabad and nearby towns, and it is exactly why the right IVF centre matters so much. A good fertility clinic does not just perform a procedure. It listens, investigates the real cause behind infertility, and builds a treatment plan around the couple rather than pushing a one size fits all approach.
              </p>

              <p className="text-gray-700">
                This guide explains everything you need to know about IVF and fertility treatment in Moradabad, what a reliable IVF centre should offer, and what questions to ask before you begin treatment.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-3xl font-serif mb-4 text-gray-900">{section.title}</h2>
                <p className="text-gray-700 mb-4">{section.intro}</p>
                <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {section.outro && <p className="text-gray-700">{section.outro}</p>}
              </div>
            ))}

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Dedicated Word On Expertise Behind The Care
              </h2>

              <p className="text-gray-700 mb-4">
                Fertility treatment outcomes depend heavily on the experience of the specialist guiding the process. Dr. Priyanka Pachauri, associated with Ujala Cygnus BrightStar Hospital in Moradabad, brings this expertise to fertility evaluation, IVF, and related gynaecological care in the city.
              </p>

              <p className="text-gray-700">
                Being connected to a full scale hospital rather than a stand alone collection centre means patients receive coordinated support across diagnosis, laboratory testing, egg retrieval, and pregnancy care, all guided by the same principle of putting the woman's health and comfort first at every stage of her fertility journey.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing The Right IVF Centre In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing the right IVF centre in Moradabad can significantly shape both the outcome and the experience of a couple's fertility journey. Hospital level support, a proper diagnostic approach, an experienced fertility specialist, and transparent communication together make the difference between a stressful, uncertain process and a well guided path toward parenthood.
              </p>

              <p className="text-gray-700">
                For couples in Moradabad, having this kind of coordinated fertility care available locally means fewer delays, better continuity, and the confidence of knowing that every step, from the first consultation to a successful pregnancy, is handled under one roof.
              </p>
            </div>

            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">Contact &amp; Clinic Address</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Dr. Priyanka Pachauri</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Contact Us</p>
                    <div className="flex items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">+91 90797 65578</a>
                      <span className="text-gray-400">|</span>
                      <a href="tel:8979670705" className="hover:underline">+91 8979670705 (WhatsApp)</a>
                    </div>
                    <div className="mt-2">
                      <Mail size={18} className="inline mr-2 text-black" />
                      <a href="mailto:drpriyanka@gynaecologistmoradabad.com" className="hover:underline">
                        drpriyanka@gynaecologistmoradabad.com
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

            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border border-gray-200 rounded-lg p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

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