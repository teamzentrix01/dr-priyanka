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

export default function FamilyPlanningMoradabad() {
  const faqs = [
    {
      q: "Which doctor offers family planning consultation in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers guidance on contraception and sterilisation options.",
    },
    {
      q: "What family planning methods are available?",
      a: "Options include pills, IUDs, injections, implants, barrier methods, and permanent sterilisation.",
    },
    {
      q: "Is laparoscopic sterilisation permanent?",
      a: "Yes, it is considered a permanent method and should be chosen after careful consultation.",
    },
    {
      q: "Does sterilisation affect hormones or periods?",
      a: "No, tubal ligation typically does not affect hormonal balance since the ovaries remain unaffected.",
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
      q: "Can I switch contraceptive methods later if needed?",
      a: "Yes, most temporary methods can be changed with medical guidance if they don't suit you.",
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
      q: "Is family planning only a woman's responsibility?",
      a: "No, options like vasectomy make it a shared decision between partners.",
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
                Family Planning Consultation in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Family planning is one of the most personal and important decisions a woman or couple can make, shaping not just reproductive health but also financial stability, career plans, and overall family wellbeing. Yet many women hesitate to seek professional guidance, relying instead on incomplete information from friends or the internet.
              </p>

              <p className="text-gray-700">
                This guide explains the full range of family planning options available today and how to find the right doctor for family planning consultation in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Is Family Planning and Why Does It Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Family Planning and Why Does It Matter?
              </h2>

              <p className="text-gray-700 mb-4">
                Family planning refers to the informed, voluntary decisions individuals and couples make about if, when, and how many children to have, supported by access to the right information and healthcare services. It plays a vital role in:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Allowing couples to plan pregnancies around their financial and emotional readiness</li>
                <li>Improving maternal and child health outcomes through better-spaced pregnancies</li>
                <li>Reducing risks associated with unplanned or closely spaced pregnancies</li>
                <li>Supporting women's career, education, and personal goals</li>
                <li>Giving couples control over the size and timing of their family</li>
                <li>Reducing the physical and emotional strain of unintended pregnancies</li>
              </ul>
            </div>

            {/* Section 3 — Why Professional Consultation Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Professional Consultation Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Many people choose contraception methods based on word-of-mouth advice rather than medical guidance, which can lead to ineffective or unsuitable choices. A proper consultation matters because:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Not every contraceptive method suits every woman's health profile</li>
                <li>Certain medical conditions can make some methods unsafe or less effective</li>
                <li>A doctor can explain the actual effectiveness rates of different methods, which vary significantly</li>
                <li>Side effects and their management are better understood with professional guidance</li>
                <li>Permanent methods like sterilisation require careful, informed decision-making</li>
                <li>A gynaecologist can also address related concerns like irregular periods or hormonal issues during the same consultation</li>
              </ul>
            </div>

            {/* Section 4 — Types of Family Planning Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Types of Family Planning Methods
              </h2>

              <p className="text-gray-700 mb-4">
                A comprehensive family planning consultation covers a range of temporary and permanent options.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Temporary (Reversible) Methods
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Oral contraceptive pills</strong> – hormonal pills taken daily to prevent pregnancy, requiring medical guidance on suitability</li>
                    <li><strong>Intrauterine devices (IUDs)</strong> – small devices placed in the uterus, offering long-term, reversible protection</li>
                    <li><strong>Contraceptive injections</strong> – hormonal injections given periodically for pregnancy prevention</li>
                    <li><strong>Contraceptive implants</strong> – small devices placed under the skin, providing multi-year protection</li>
                    <li><strong>Barrier methods</strong> – such as condoms, which also help reduce the risk of sexually transmitted infections</li>
                    <li><strong>Natural family planning methods</strong> – tracking fertility cycles, though generally less reliable than other methods</li>
                    <li><strong>Emergency contraception</strong> – for use after unprotected intercourse, not intended as a regular method</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Permanent Methods
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li><strong>Laparoscopic tubal ligation (female sterilisation)</strong> – a minimally invasive day-care procedure that permanently prevents pregnancy</li>
                    <li><strong>Vasectomy (male sterilisation)</strong> – a simpler, permanent procedure for male partners, usually discussed alongside female options</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 5 — Factors That Influence the Right Choice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Factors That Influence the Right Choice for You
              </h2>

              <p className="text-gray-700 mb-4">
                A good doctor considers multiple factors before recommending a method:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Your age and future pregnancy plans</li>
                <li>Existing medical conditions, such as blood pressure issues or clotting disorders</li>
                <li>Whether you are breastfeeding, which can affect certain hormonal methods</li>
                <li>How consistently you can follow a daily or scheduled method</li>
                <li>Whether you want a temporary or permanent solution</li>
                <li>Any history of side effects with previous contraceptive methods</li>
                <li>Personal comfort level with different types of procedures or devices</li>
              </ul>
            </div>

            {/* Section 6 — What to Expect During a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Family Planning Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed health history review</strong> – understanding your medical background and any relevant conditions</li>
                <li><strong>Discussion of family planning goals</strong> – whether you want to delay, space, or permanently prevent future pregnancies</li>
                <li><strong>Explanation of available methods</strong> – including effectiveness, benefits, and possible side effects of each option</li>
                <li><strong>Physical examination if needed</strong> – particularly before certain procedures like IUD insertion</li>
                <li><strong>Personalised recommendation</strong> – based on your health profile and preferences, not a one-size-fits-all approach</li>
                <li><strong>Procedure scheduling if applicable</strong> – for methods like IUD placement or sterilisation</li>
                <li><strong>Follow-up guidance</strong> – to monitor how well the chosen method is working for you</li>
              </ul>
            </div>

            {/* Section 7 — Laparoscopic Sterilisation: A Closer Look */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Sterilisation: A Closer Look
              </h2>

              <p className="text-gray-700 mb-4">
                For couples who have completed their family and want a permanent solution, laparoscopic tubal ligation is a commonly recommended option. Key points include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>It is typically performed as a minimally invasive, day-care procedure</li>
                <li>Recovery time is generally much shorter compared to older surgical methods</li>
                <li>It is considered a permanent method, so the decision should be made after careful thought and consultation</li>
                <li>The procedure does not affect hormonal balance or menstrual cycles in most cases</li>
                <li>A skilled laparoscopic surgeon ensures precision and reduces complication risks</li>
                <li>Reversal procedures exist but are not always successful, reinforcing the importance of informed decision-making beforehand</li>
              </ul>
            </div>

            {/* Section 8 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Family Planning in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad offering comprehensive, judgment-free family planning consultations. Her clinic follows the guiding principle of "Her Health First," ensuring every patient feels informed and empowered in her reproductive choices.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Family planning guidance and contraceptive counselling</li>
                    <li>Laparoscopic sterilisation as a day-care procedure for permanent family planning</li>
                    <li>Pregnancy, antenatal, and postnatal care for those planning future pregnancies</li>
                    <li>Diagnostic hysteroscopy for uterine evaluation when needed</li>
                    <li>3D laparoscopic gynaecological surgery for related conditions</li>
                    <li>PCOS and hormonal imbalance evaluation, relevant to contraceptive choice</li>
                    <li>Fertility evaluation and IVF treatment for those planning to conceive</li>
                    <li>Paediatric consultations for existing children</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Supporting Safe Family Planning Procedures
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>High-definition 3D laparoscopic surgical systems for precise, minimally invasive sterilisation procedures</li>
                    <li>3D & 4D ultrasound machines for accurate evaluation before certain procedures like IUD placement</li>
                    <li>An integrated care team that supports patients through both temporary and permanent family planning decisions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology and laparoscopy</li>
                    <li><strong>Continuity of care</strong> – the same team supporting patients through consultation, procedure, and follow-up</li>
                    <li><strong>Outcomes patients hope for</strong> – safe, effective family planning solutions tailored to individual needs</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9 — Common Myths About Family Planning */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Family Planning
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"Contraceptive pills cause permanent infertility"</strong> – Fertility typically returns after stopping most hormonal methods, though a doctor can address individual concerns</li>
                <li><strong>"IUDs are only for women who have already had children"</strong> – Many IUD types are suitable for women regardless of childbirth history, depending on individual evaluation</li>
                <li><strong>"Sterilisation immediately affects hormones or periods"</strong> – Tubal ligation does not typically alter hormonal balance since it doesn't affect the ovaries</li>
                <li><strong>"Natural methods are just as effective as medical methods"</strong> – Natural methods generally have lower effectiveness rates compared to medical options</li>
                <li><strong>"Family planning is only a woman's responsibility"</strong> – Options like vasectomy make family planning a shared decision between partners</li>
                <li><strong>"Once you choose a method, you're stuck with it"</strong> – Most temporary methods can be changed if they don't suit you, with medical guidance</li>
              </ul>
            </div>

            {/* Section 10 — How to Approach Your Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Approach Your Family Planning Consultation
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Reflect on your family planning goals – whether you want to delay, space, or permanently prevent pregnancy.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Book a consultation with a qualified gynaecologist to discuss all available options.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Share your complete medical history for a safe, personalised recommendation.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Ask about effectiveness rates and side effects of each method being considered.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Discuss cost and procedure details if choosing a device or permanent method.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Schedule the procedure or begin the chosen method with clear instructions from your doctor.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Attend follow-up visits to confirm the method is working well for you.
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
                <li>Easier scheduling for procedures like IUD placement or laparoscopic sterilisation</li>
                <li>Lower overall cost compared to travelling to another city for the same services</li>
                <li>A trusted, familiar doctor for ongoing reproductive health needs</li>
                <li>Continuity of care that connects family planning with broader gynaecological and pregnancy care</li>
              </ul>
            </div>

            {/* Section 12 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable family planning consultation in Moradabad, here are the verified contact details from the official website:
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
                  It's recommended to call or message on WhatsApp in advance to schedule a private consultation to discuss your family planning options.
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
                <li><strong>Empowerment-focused messaging</strong> – The homepage tagline "Her Health First" reflects an approach centred on informed patient choice, which fits well with family planning decisions.</li>
                <li><strong>Explicit mention of laparoscopic sterilisation</strong> – The service listing directly names laparoscopic sterilisation as a day-care procedure, showing clear relevance to this topic.</li>
                <li><strong>Broad reproductive health coverage</strong> – Pregnancy, fertility, and gynaecology services listed together suggest the clinic can support patients across every stage of family planning.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D laparoscopic systems builds confidence in the safety and precision of sterilisation procedures.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for private, quick communication.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post or FAQ section comparing contraceptive options could help the website rank better for this topic and support patients in making informed choices before their consultation.</li>
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