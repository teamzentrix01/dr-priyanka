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

export default function ContraceptionAdviceMoradabad() {
  const faqs = [
    {
      q: "Which doctor offers contraception advice in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers personalised contraception and birth control counselling.",
    },
    {
      q: "What contraception options are available?",
      a: "Options include pills, IUDs, injections, implants, barrier methods, and permanent sterilisation.",
    },
    {
      q: "Which contraception method is most effective?",
      a: "Long-acting methods like IUDs and implants tend to be highly effective, but the right choice depends on individual factors.",
    },
    {
      q: "Can I switch my contraception method if it doesn't suit me?",
      a: "Yes, most methods can be changed with medical guidance if they cause unwanted side effects.",
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
      q: "Is emergency contraception meant for regular use?",
      a: "No, it is meant only for occasional emergency situations, not as a routine method.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before visiting?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Does contraceptive pill use cause permanent infertility?",
      a: "No, fertility generally returns after stopping most hormonal contraceptive methods.",
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
                Contraception Advice Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Choosing the right contraception method is a deeply personal decision that affects a woman's health, lifestyle, and future plans. With so many options available and so much conflicting information online, many women end up choosing a method based on guesswork rather than medical guidance.
              </p>

              <p className="text-gray-700">
                This guide breaks down the most common contraception options, how to choose wisely, and how to find a reliable contraception advice doctor in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — Why Contraception Advice Should Come From a Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Contraception Advice Should Come From a Doctor, Not the Internet
              </h2>

              <p className="text-gray-700 mb-4">
                Many women rely on advice from friends, family, or online forums when choosing a contraceptive method. While well-intentioned, this approach carries real risks:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>What works well for one woman may not suit another's health profile at all</li>
                <li>Certain medical conditions can make specific methods unsafe or less effective</li>
                <li>Online sources often exaggerate side effects or spread outdated information</li>
                <li>A doctor can match a method to your lifestyle, not just your symptoms</li>
                <li>Professional guidance reduces the chances of unexpected pregnancy due to incorrect method use</li>
                <li>A consultation can catch underlying issues, like hormonal imbalances, that affect contraceptive choice</li>
              </ul>
            </div>

            {/* Section 3 — Understanding Your Contraception Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Your Contraception Options
              </h2>

              <p className="text-gray-700 mb-4">
                A proper consultation walks through the full range of options so you can make an informed decision.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hormonal Methods
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Combined oral contraceptive pills</strong> – contain two hormones and are taken daily; effective when used correctly and consistently</li>
                    <li><strong>Progestin-only pills</strong> – a hormone-only option, often suitable for women who cannot take oestrogen-based pills</li>
                    <li><strong>Contraceptive injections</strong> – given periodically, offering convenience without a daily routine</li>
                    <li><strong>Contraceptive implants</strong> – small rods placed under the skin, providing multi-year protection with minimal daily effort</li>
                    <li><strong>Hormonal IUDs</strong> – placed inside the uterus, releasing hormones locally for long-term protection</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Non-Hormonal Methods
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Copper IUDs</strong> – a hormone-free option offering long-term protection through a small device placed in the uterus</li>
                    <li><strong>Barrier methods</strong> – such as condoms, which also help reduce sexually transmitted infection risk</li>
                    <li><strong>Diaphragms and cervical caps</strong> – less commonly used, but available as non-hormonal barrier options</li>
                    <li><strong>Fertility awareness methods</strong> – tracking your cycle to identify fertile and non-fertile days, generally less reliable than other methods</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Emergency and Permanent Options
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Emergency contraception</strong> – used after unprotected intercourse; not meant to replace regular contraception</li>
                    <li><strong>Laparoscopic tubal ligation</strong> – a permanent, minimally invasive procedure for those who have completed their family</li>
                    <li><strong>Vasectomy</strong> – a permanent option for the male partner, often discussed as part of a couple's overall planning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 — How to Choose the Right Contraception Method */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Contraception Method
              </h2>

              <p className="text-gray-700 mb-4">
                A good doctor considers several personal factors before recommending a method:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Your overall health history, including blood pressure, migraines, or clotting disorders</li>
                <li>Whether you are currently breastfeeding, which affects hormonal method suitability</li>
                <li>Your comfort with daily routines versus longer-acting, low-maintenance options</li>
                <li>Whether you want a temporary method or are ready for a permanent solution</li>
                <li>Your risk of exposure to sexually transmitted infections, which barrier methods also help address</li>
                <li>Any past experience with side effects from a particular method</li>
                <li>Your future pregnancy plans and how soon you may want to conceive again</li>
              </ul>
            </div>

            {/* Section 5 — Effectiveness: What the Numbers Really Mean */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Effectiveness: What the Numbers Really Mean
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding effectiveness helps set realistic expectations. In general terms:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Long-acting methods like IUDs and implants tend to have very high effectiveness because they don't rely on daily user action</li>
                <li>Daily methods like pills are highly effective when taken consistently, but effectiveness drops with missed doses</li>
                <li>Barrier methods are moderately effective and also offer STI protection, but carry higher user-error related failure rates</li>
                <li>Emergency contraception is effective when used promptly, but is significantly less reliable than a planned, ongoing method</li>
                <li>Permanent methods like tubal ligation offer very high, long-term effectiveness once the procedure is done</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Your doctor can explain these effectiveness differences in more detail based on your specific method of interest.
              </p>
            </div>

            {/* Section 6 — Managing Side Effects and Adjusting Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Managing Side Effects and Adjusting Methods
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Mild side effects like spotting, nausea, or headaches are common when starting hormonal methods and often settle within a few months</li>
                <li>A doctor can help distinguish between expected, temporary side effects and signs that a method isn't suitable for you</li>
                <li>Switching methods is possible and sometimes necessary — it doesn't mean contraception itself has failed you</li>
                <li>Regular follow-up visits help track how well a chosen method is working</li>
                <li>Any severe or unusual symptoms should always be reported to your doctor promptly rather than stopping a method abruptly without guidance</li>
              </ul>
            </div>

            {/* Section 7 — What to Expect During a Contraception Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Contraception Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed health and lifestyle discussion</strong> – to understand what matters most to you in a method</li>
                <li><strong>Medical history review</strong> – checking for conditions that might affect method safety</li>
                <li><strong>Explanation of suitable options</strong> – tailored to your specific situation, not a generic list</li>
                <li><strong>Physical examination if required</strong> – particularly relevant before IUD insertion</li>
                <li><strong>Clear guidance on correct usage</strong> – to maximise effectiveness of the chosen method</li>
                <li><strong>Discussion of side effects and warning signs</strong> – so you know what's normal and what needs follow-up</li>
                <li><strong>Follow-up scheduling</strong> – to review how the method is working after a few months</li>
              </ul>
            </div>

            {/* Section 8 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Contraception Advice in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad, offering personalised, judgment-free contraception counselling. Her clinic follows the guiding principle of "Her Health First," ensuring every patient feels heard and informed before making a decision.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Personalised contraception and birth control counselling</li>
                    <li>Laparoscopic sterilisation for those seeking a permanent solution</li>
                    <li>PCOS and hormonal imbalance evaluation, relevant to method suitability</li>
                    <li>Pregnancy, antenatal, and postnatal care for future family planning</li>
                    <li>Diagnostic hysteroscopy for uterine evaluation when needed</li>
                    <li>3D laparoscopic gynaecological surgery for related conditions</li>
                    <li>Fertility evaluation and IVF treatment for those planning to conceive later</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Supporting Safe Contraceptive Care
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines for accurate evaluation before certain procedures, like IUD placement</li>
                    <li>High-definition 3D laparoscopic surgical systems for safe, precise permanent procedures</li>
                    <li>An integrated care team that follows up with patients as they adjust to a chosen method</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology</li>
                    <li><strong>Continuity of care</strong> – the same team supporting patients through consultation, method selection, and follow-up</li>
                    <li><strong>Outcomes patients hope for</strong> – a contraception method that truly fits their health and lifestyle needs</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9 — Common Myths About Contraception */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Contraception
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"Birth control pills cause long-term infertility"</strong> – Fertility generally returns after stopping most hormonal methods</li>
                <li><strong>"IUDs are painful and unsafe"</strong> – Insertion may cause brief discomfort, but IUDs are considered safe and highly effective for most women</li>
                <li><strong>"You can't get pregnant while breastfeeding"</strong> – Breastfeeding alone is not a fully reliable contraceptive method</li>
                <li><strong>"Emergency contraception can be used as a regular method"</strong> – It is meant only for occasional emergency use, not routine contraception</li>
                <li><strong>"Contraception is only a woman's responsibility"</strong> – Options like condoms and vasectomy make it a shared responsibility between partners</li>
                <li><strong>"All hormonal methods cause significant weight gain"</strong> – Individual responses vary, and many women experience no significant weight changes</li>
              </ul>
            </div>

            {/* Section 10 — How to Approach Your Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Approach Your Contraception Consultation
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Reflect on your lifestyle and future pregnancy plans before your visit.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Book a consultation with a qualified gynaecologist to discuss all suitable options.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Share your complete medical history for a safe, personalised recommendation.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Ask about effectiveness rates, side effects, and how to use your chosen method correctly.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Discuss cost and any procedure details if choosing a device or permanent method.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Start your chosen method with clear instructions from your doctor.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Attend follow-up visits to confirm the method suits you well, adjusting if needed.
                </p>
              </div>
            </div>

            {/* Section 11 — Benefits of Consulting a Local Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient access for consultation, procedures, and follow-up visits without travel hassle</li>
                <li>Easier scheduling for procedures like IUD placement or sterilisation</li>
                <li>Lower overall cost compared to travelling to another city for the same services</li>
                <li>A trusted, familiar doctor for ongoing reproductive health needs</li>
                <li>Continuity of care that connects contraception advice with broader gynaecological health</li>
              </ul>
            </div>

            {/* Section 12 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for reliable contraception advice in Moradabad, here are the verified contact details from the official website:
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p className="text-black">Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p className="text-black">Dr. Priyanka Gynaec – Fertility • Maternity • 3D Laparoscopy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone / Call for Appointment</p>
                      <a href="tel:9079765578" className="text-black hover:underline">
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="tel:8979670705" className="text-black hover:underline">
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:drpriyanka@gynaecologistmoradabad.com" className="text-black hover:underline">
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a href="https://www.gynaecologistmoradabad.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                        https://www.gynaecologistmoradabad.com/
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  It's recommended to call or message on WhatsApp in advance to book a private consultation to discuss your contraception options comfortably.
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

            {/* Section 13 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
               gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Personal, patient-first messaging</strong> – The homepage tagline "Her Health First" reflects an approach centred on informed, individual choice, which fits naturally with contraception counselling.</li>
                <li><strong>Relevant procedure mentioned directly</strong> – Laparoscopic sterilisation is explicitly listed as a service, showing direct relevance to permanent contraception seekers.</li>
                <li><strong>Broad reproductive health coverage</strong> – Gynaecology, hormonal health, and fertility services listed together suggest the clinic can support women across different contraceptive life stages.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D/4D ultrasound and laparoscopic systems builds confidence in the safety of related procedures.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for private, quick communication.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post comparing different contraceptive methods, along with a simple decision-guide format, could help the website rank better for this topic and help patients arrive more informed for their consultation.</li>
              </ul>
            </div>

            {/* Section 14 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQ)
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