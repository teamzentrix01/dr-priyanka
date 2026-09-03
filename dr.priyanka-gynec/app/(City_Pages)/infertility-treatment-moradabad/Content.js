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

export default function InfertilityTreatmentMoradabad() {
  const faqs = [
    {
      q: "What is the most common cause of infertility in women?",
      a: "PCOS and ovulation disorders are among the most common causes of female infertility.",
    },
    {
      q: "Can infertility be caused by the male partner?",
      a: "Yes, male factors such as low sperm count or poor sperm motility contribute to nearly half of all infertility cases.",
    },
    {
      q: "When should a couple seek fertility treatment?",
      a: "After one year of trying to conceive without success, or six months if the woman is above 35 years old.",
    },
    {
      q: "What is the difference between IUI and IVF?",
      a: "IUI places prepared sperm directly into the uterus, while IVF involves fertilizing eggs outside the body before transferring the embryo into the uterus.",
    },
    {
      q: "Is IVF painful?",
      a: "IVF involves minor discomfort during egg retrieval, but the procedure is performed under sedation and is generally well tolerated.",
    },
    {
      q: "How successful is IVF treatment?",
      a: "Success rates depend on age, cause of infertility, and embryo quality, and are generally highest in women under 35.",
    },
    {
      q: "Can PCOS patients conceive naturally after treatment?",
      a: "Yes, many PCOS patients conceive naturally or with ovulation-inducing medication after proper treatment.",
    },
    {
      q: "How can I book a consultation for infertility treatment in Moradabad?",
      a: "You can call or WhatsApp the clinic directly using the contact details above to schedule a consultation and evaluation.",
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
                Infertility Treatment in Moradabad – Expert Fertility Care by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Struggling to conceive can be one of the most emotionally challenging experiences a couple faces. The good news is that infertility is a treatable medical condition in the majority of cases, and couples in Moradabad no longer need to travel to metro cities for advanced fertility care. Dr. Priyanka Gynaec offers comprehensive infertility treatment in Moradabad, combining compassionate counselling with cutting-edge reproductive technology to help couples achieve their dream of parenthood.
              </p>

              <p className="text-gray-700">
                This detailed guide explains what infertility means, its common causes in both men and women, how it is diagnosed, and the range of treatment options available right here in Moradabad.
              </p>
            </div>

            {/* Section 2 — Common Causes of Infertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Infertility
              </h2>

              <p className="text-gray-700 mb-4">
                Infertility can arise from female factors, male factors, or a combination of both. Understanding the underlying cause is the first step toward effective treatment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Female Infertility Causes
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>PCOS (Polycystic Ovary Syndrome):</strong> One of the leading causes of ovulation-related infertility, affecting a large number of women of reproductive age.</li>
                <li><strong>Ovulation Disorders:</strong> Irregular or absent ovulation due to hormonal imbalance.</li>
                <li><strong>Blocked Fallopian Tubes:</strong> Often caused by past infections, endometriosis, or previous pelvic surgery.</li>
                <li><strong>Endometriosis:</strong> A condition where uterine tissue grows outside the uterus, affecting egg quality and implantation.</li>
                <li><strong>Uterine Abnormalities:</strong> Fibroids, polyps, or structural issues in the uterus that interfere with implantation.</li>
                <li><strong>Age-Related Decline:</strong> Egg quantity and quality naturally decline with age, especially after 35.</li>
                <li><strong>Thyroid and Hormonal Disorders:</strong> Imbalances in thyroid or prolactin levels can disrupt ovulation.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Male Infertility Causes
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Low Sperm Count (Oligospermia):</strong> Reduced number of sperm in semen.</li>
                <li><strong>Poor Sperm Motility or Morphology:</strong> Sperm that cannot move properly or are abnormally shaped.</li>
                <li><strong>Varicocele:</strong> Enlarged veins in the scrotum that can affect sperm production and quality.</li>
                <li><strong>Hormonal Imbalances:</strong> Low testosterone or other hormonal issues affecting sperm production.</li>
                <li><strong>Lifestyle Factors:</strong> Smoking, alcohol, obesity, and chronic stress can significantly impact sperm health.</li>
                <li><strong>DNA Fragmentation:</strong> Damage to sperm DNA that can reduce fertilization and pregnancy success rates.</li>
              </ul>
            </div>

            {/* Section 3 — When Should You See a Fertility Specialist? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See a Fertility Specialist?
              </h2>

              <p className="text-gray-700 mb-4">
                Couples are advised to consult a fertility specialist if:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>They have been trying to conceive for over a year without success (six months if the woman is above 35)</li>
                <li>The woman has irregular or absent periods</li>
                <li>There is a history of pelvic infections, endometriosis, or previous pelvic surgery</li>
                <li>The man has known reproductive health issues</li>
                <li>There has been a previous miscarriage or failed pregnancy</li>
                <li>One or both partners have a known medical condition affecting fertility</li>
              </ul>

              <p className="text-gray-700">
                Early evaluation increases the chances of identifying the cause quickly and starting effective treatment without unnecessary delay.
              </p>
            </div>

            {/* Section 4 — How Is Infertility Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Infertility Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                At Dr. Priyanka Gynaec, the diagnostic process is thorough and personalized for both partners, since infertility can stem from either side. Common diagnostic tests include:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Women:
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Hormonal blood tests (FSH, LH, AMH, Thyroid, Prolactin)</li>
                <li>Ultrasound to assess ovarian reserve, uterine health, and follicle development</li>
                <li>Hysterosalpingography (HSG) to check for blocked fallopian tubes</li>
                <li>Diagnostic hysteroscopy or laparoscopy, if structural abnormalities are suspected</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Men:
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Semen analysis to assess sperm count, motility, and morphology</li>
                <li>AI-powered semen analysis and DNA integrity testing for a more precise evaluation</li>
                <li>Hormonal evaluation, if required</li>
              </ul>

              <p className="text-gray-700">
                This dual evaluation approach ensures that the treatment plan addresses the actual cause of infertility rather than relying on guesswork.
              </p>
            </div>

            {/* Section 5 — Infertility Treatment Options Available in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Infertility Treatment Options Available in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment for infertility depends on the underlying cause, the age of the woman, and how long the couple has been trying to conceive. Dr. Priyanka Gynaec offers a complete range of fertility treatments under one roof.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Lifestyle and Medical Management
              </h3>

              <p className="text-gray-700 mb-3">
                For couples with mild ovulation issues or PCOS, the first line of treatment often includes:
              </p>

              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Weight management and dietary guidance</li>
                <li>Ovulation-inducing medications to regulate the menstrual cycle</li>
                <li>Treatment of underlying thyroid or hormonal imbalances</li>
                <li>Timed intercourse guidance based on ovulation tracking</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Intrauterine Insemination (IUI)
              </h3>

              <p className="text-gray-700 mb-3">
                IUI is a simpler and less invasive fertility treatment where prepared, healthy sperm is directly placed into the uterus around the time of ovulation. It is often recommended for:
              </p>

              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Mild male factor infertility</li>
                <li>Unexplained infertility</li>
                <li>Ovulation disorders</li>
                <li>Couples using donor sperm</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. In Vitro Fertilization (IVF)
              </h3>

              <p className="text-gray-700 mb-3">
                IVF is one of the most effective and widely used assisted reproductive technologies, recommended when other treatments have not been successful or when the cause of infertility requires a more advanced approach, such as blocked fallopian tubes, severe male factor infertility, or advanced maternal age.
              </p>

              <p className="text-gray-700 mb-3">
                The IVF process typically involves:
              </p>

              <ol className="text-gray-700 space-y-2 mb-6 list-decimal pl-5">
                <li>Ovarian stimulation using fertility medications</li>
                <li>Egg retrieval under monitored conditions</li>
                <li>Fertilization of eggs with sperm in the laboratory</li>
                <li>Embryo culture and monitoring</li>
                <li>Embryo transfer into the uterus</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. GERI Time-Lapse Embryo Monitoring
              </h3>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec uses advanced GERI time-lapse imaging incubators that continuously monitor embryo development without disturbing the embryo. This technology helps embryologists select the healthiest embryo for transfer, improving the chances of a successful pregnancy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Laparoscopic Surgery for Fertility Issues
              </h3>

              <p className="text-gray-700 mb-4">
                Many structural causes of infertility, such as blocked fallopian tubes, ovarian cysts, fibroids, and endometriosis, can be corrected through advanced 3D laparoscopic surgery, which is minimally invasive and helps preserve fertility while resolving the underlying issue.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Male Infertility Treatment
              </h3>

              <p className="text-gray-700 mb-4">
                For male factor infertility, treatment options may include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Medications to improve sperm count and quality</li>
                <li>Lifestyle modification guidance</li>
                <li>Surgical correction of varicocele, if present</li>
                <li>Advanced sperm selection techniques combined with IUI or IVF</li>
              </ul>
            </div>

            {/* Section 6 — Why Choose Dr. Priyanka Gynaec for Infertility Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Infertility Treatment in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Couples across Moradabad and surrounding regions choose Dr. Priyanka Gynaec for fertility treatment because of a genuine, patient-first philosophy backed by advanced technology. Key reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Personalized fertility treatment plans based on individual diagnosis, not a one-size-fits-all approach</li>
                <li>Access to advanced technology including 3D/4D ultrasound, GERI time-lapse incubators, and AI-based semen analysis</li>
                <li>Expertise in both surgical and non-surgical fertility treatments under one roof</li>
                <li>A compassionate team that supports couples emotionally through every step of the journey</li>
                <li>Continuity of care from the first consultation through pregnancy confirmation</li>
                <li>A strong track record built on patient trust and successful outcomes</li>
              </ul>
            </div>

            {/* Section 7 — What to Expect During Your Fertility Journey */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During Your Fertility Journey
              </h2>

              <p className="text-gray-700">
                Every couple&apos;s fertility journey is different. At the first consultation, both partners&apos; medical history is reviewed, followed by relevant diagnostic tests. Based on the results, a personalized treatment plan is created, which may start with simpler options like ovulation induction or IUI before progressing to IVF if needed. Throughout the process, the team provides emotional support and clear communication, since fertility treatment can be as much an emotional journey as a medical one.
              </p>
            </div>

            {/* Section 8 — Tips to Support Fertility Naturally */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tips to Support Fertility Naturally
              </h2>

              <p className="text-gray-700 mb-4">
                While medical treatment addresses the underlying cause, couples can also support their fertility through:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Maintaining a healthy body weight</li>
                <li>Eating a balanced, nutrient-rich diet</li>
                <li>Avoiding smoking and limiting alcohol consumption</li>
                <li>Managing stress through relaxation techniques or counselling</li>
                <li>Tracking ovulation cycles accurately</li>
                <li>Attending regular health check-ups</li>
              </ul>
            </div>

            {/* Section 9 — The Role of Age in Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Role of Age in Fertility
              </h2>

              <p className="text-gray-700 mb-4">
                Age plays one of the most significant roles in a woman&apos;s ability to conceive, and understanding this can help couples make timely decisions about seeking treatment. A woman is born with a fixed number of eggs, and both the quantity and quality of these eggs decline gradually with time, with a more noticeable drop after the age of 35 and a sharper decline after 40. This decline affects not only the chances of natural conception but also the success rates of assisted reproductive treatments like IUI and IVF. Men also experience a gradual decline in sperm quality with age, although the effect is generally less pronounced than in women.
              </p>

              <p className="text-gray-700 mb-4">
                This is why fertility specialists often recommend that couples above 35 seek evaluation after just six months of trying, rather than waiting a full year. Early testing allows the doctor to assess ovarian reserve through tests like AMH (Anti-Müllerian Hormone) and plan treatment before the biological window narrows further. For women who wish to delay childbearing for personal or professional reasons, options like fertility preservation and egg freezing can also be discussed during a consultation.
              </p>
            </div>

            {/* Section 10 — Emotional Wellbeing During Fertility Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Wellbeing During Fertility Treatment
              </h2>

              <p className="text-gray-700 mb-4">
                The journey through infertility diagnosis and treatment can be emotionally demanding for both partners, often involving stress, anxiety, and, at times, a sense of isolation. It is important to recognize that these feelings are a normal part of the process and not a sign of weakness. Open communication between partners, joining support groups, and seeking counselling when needed can make a meaningful difference in coping with the emotional ups and downs of treatment.
              </p>

              <p className="text-gray-700">
                At Dr. Priyanka Gynaec, the approach to fertility care goes beyond medical treatment alone. The team places equal importance on emotional support, ensuring that couples feel heard, informed, and reassured at every stage of their journey, from the first consultation to the moment they receive positive news.
              </p>
            </div>

            {/* Section 11 — Speciality & Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Speciality &amp; Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Speciality:</strong> Fertility &amp; IVF, Gynaecology &amp; Advanced 3D Laparoscopy, Pregnancy &amp; Maternity Care, Paediatrics
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact &amp; Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh, 244001
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
                          href="mailto:contact@drpriyankaGynaec.com"
                          className="hover:underline"
                        >
                          contact@drpriyankaGynaec.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
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

            {/* Section 12 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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