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

export default function HPVVaccinationMoradabad() {
  const faqs = [
    {
      q: "Which doctor offers HPV vaccination guidance in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers guidance and support for HPV vaccination decisions.",
    },
    {
      q: "What is the ideal age to get the HPV vaccine?",
      a: "Typically between ages 9-14, though it can still offer benefits for older teens and young adults.",
    },
    {
      q: "How many doses of the HPV vaccine are needed?",
      a: "Usually two doses for younger adolescents and three doses for older teens and adults, as advised by the doctor.",
    },
    {
      q: "Is the HPV vaccine safe?",
      a: "Yes, it has a strong global safety record, with only mild, temporary side effects in most cases.",
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
      q: "Do I still need cervical cancer screening after vaccination?",
      a: "Yes, screening is still recommended since the vaccine doesn't cover every HPV strain.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic with questions before booking?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Can boys also get the HPV vaccine?",
      a: "Yes, boys can also benefit from HPV vaccination, as advised by a doctor.",
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
                HPV Vaccination Doctor in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                The HPV (Human Papillomavirus) vaccine is one of the most significant advances in preventive women's healthcare, offering strong protection against the virus responsible for most cervical cancer cases. Despite its proven benefits, many families in India remain unaware of when to get it, who needs it, or where to find reliable guidance.
              </p>

              <p className="text-gray-700">
                This guide explains everything about HPV vaccination and how to find a trusted HPV vaccination doctor in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — What Is HPV and Why Vaccination Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is HPV and Why Vaccination Matters
              </h2>

              <p className="text-gray-700 mb-4">
                HPV (Human Papillomavirus) is an extremely common virus, with most sexually active individuals being exposed to some strain during their lifetime. While most infections clear on their own, certain high-risk strains can persist and lead to serious health issues over time.
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>HPV is the leading cause of cervical cancer worldwide</li>
                <li>It can also contribute to other cancers, including vaginal, vulvar, anal, and throat cancers</li>
                <li>HPV often causes no visible symptoms, making prevention more valuable than early detection alone</li>
                <li>The virus spreads primarily through skin-to-skin genital contact, including during sexual activity</li>
                <li>Vaccination before exposure to the virus offers the strongest protective benefit</li>
              </ul>
            </div>

            {/* Section 3 — How the HPV Vaccine Works */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How the HPV Vaccine Works
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>The vaccine trains the immune system to recognise and fight specific high-risk HPV strains</li>
                <li>It is most effective when given before a person becomes sexually active, though it still offers benefits afterward</li>
                <li>It protects against the HPV strains responsible for the majority of cervical cancer cases</li>
                <li>Some vaccine versions also protect against strains linked to genital warts</li>
                <li>The vaccine does not treat existing HPV infections — it prevents future infection from the strains it covers</li>
                <li>Even vaccinated individuals should continue routine cervical cancer screening, as the vaccine does not cover every HPV strain</li>
              </ul>
            </div>

            {/* Section 4 — Who Should Get the HPV Vaccine */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Get the HPV Vaccine?
              </h2>

              <p className="text-gray-700 mb-4">
                General guidance typically includes the following groups, though your doctor will personalise recommendations:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Adolescent girls and boys, ideally starting around ages 9-14, before likely exposure to the virus</li>
                <li>Teenagers and young adults who missed the ideal early vaccination window can often still benefit</li>
                <li>Women up to their mid-20s or slightly beyond, depending on individual risk and doctor's advice</li>
                <li>Both boys and girls can benefit, since HPV affects health outcomes in men as well</li>
                <li>Individuals with a history of abnormal Pap smears may still benefit from vaccination, as advised by their doctor</li>
                <li>The exact recommended age range and number of doses should always be confirmed with a qualified gynaecologist or paediatrician</li>
              </ul>
            </div>

            {/* Section 5 — HPV Vaccination Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                HPV Vaccination Schedule
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Younger adolescents (typically under 15) are usually given a two-dose schedule, spaced several months apart</li>
                <li>Older teens and adults are typically given a three-dose schedule over about six months</li>
                <li>Completing the full recommended dose schedule is important for full protective benefit</li>
                <li>Missing or delaying a dose doesn't always mean restarting the whole series — a doctor can advise on catch-up scheduling</li>
                <li>Your doctor will confirm the exact schedule based on age at the time of the first dose</li>
              </ul>
            </div>

            {/* Section 6 — Safety and Common Side Effects */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Common Side Effects
              </h2>

              <p className="text-gray-700 mb-4">
                The HPV vaccine has a strong global safety record, but like any vaccine, it can cause mild, temporary side effects:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Soreness, redness, or swelling at the injection site</li>
                <li>Mild fever for a short period after vaccination</li>
                <li>Headache or mild fatigue</li>
                <li>Dizziness or fainting immediately after injection (a brief period of monitoring is usually recommended)</li>
                <li>Serious side effects are rare, and the vaccine has been used safely in millions of people worldwide</li>
                <li>Any specific concerns, allergies, or medical history should be discussed with your doctor before vaccination</li>
              </ul>
            </div>

            {/* Section 7 — Benefits of Getting Vaccinated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Getting Vaccinated
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Significantly reduces the risk of developing cervical cancer later in life</li>
                <li>Reduces risk of other HPV-related cancers, including vaginal, vulvar, and anal cancers</li>
                <li>Offers protection against strains responsible for genital warts, depending on vaccine type</li>
                <li>Provides long-lasting protection when given at the recommended age and complete dose schedule</li>
                <li>Reduces the emotional and financial burden of dealing with HPV-related health issues later</li>
                <li>Contributes to broader community protection by reducing overall virus transmission</li>
              </ul>
            </div>

            {/* Section 8 — Common Myths About HPV Vaccination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About HPV Vaccination
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"Only girls need the vaccine"</strong> – Boys can also benefit, as HPV affects health outcomes in men too</li>
                <li><strong>"It's only necessary for sexually active individuals"</strong> – The vaccine works best when given before any exposure to the virus</li>
                <li><strong>"One dose is enough"</strong> – Full protection generally requires completing the recommended dose schedule</li>
                <li><strong>"The vaccine causes infertility"</strong> – This is a widely circulated myth with no scientific backing; the vaccine does not affect fertility</li>
                <li><strong>"If I'm vaccinated, I never need cervical cancer screening"</strong> – Screening remains important since the vaccine doesn't cover every HPV strain</li>
                <li><strong>"It's too late to get vaccinated after a certain age"</strong> – While most effective earlier, your doctor can advise if vaccination is still worthwhile for you</li>
              </ul>
            </div>

            {/* Section 9 — What to Expect During a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Consultation for HPV Vaccination
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Discussion of medical history</strong> – to check for any allergies or conditions that need special consideration</li>
                <li><strong>Age-appropriate guidance</strong> – the doctor will explain the right dosing schedule based on age</li>
                <li><strong>Vaccine administration</strong> – a quick injection, usually in the upper arm</li>
                <li><strong>Short observation period</strong> – typically 15-30 minutes after the shot to monitor for any immediate reaction</li>
                <li><strong>Guidance on managing mild side effects</strong> – such as soreness or mild fever</li>
                <li><strong>Follow-up dose scheduling</strong> – clear guidance on when to return for the next dose, if applicable</li>
                <li><strong>Continued screening advice</strong> – reminding patients that regular cervical screening should still continue as appropriate</li>
              </ul>
            </div>

            {/* Section 10 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for HPV Vaccination in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad, offering guidance and care around HPV vaccination and broader cervical cancer prevention. Her clinic follows the guiding principle of "Her Health First," ensuring every patient and family receives clear, judgment-free information.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Cervical screening, including Pap smear testing</li>
                    <li>Guidance and support for HPV vaccination decisions</li>
                    <li>Diagnostic hysteroscopy for further uterine evaluation when needed</li>
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>3D laparoscopic gynaecological surgery for more complex gynaecological conditions</li>
                    <li>Paediatric consultations, including vaccinations, for younger patients</li>
                    <li>PCOS and hormonal imbalance evaluation</li>
                    <li>Fertility evaluation and IVF treatment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology and Approach Supporting Preventive Care
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines available for complementary pelvic imaging when needed</li>
                    <li>High-definition 3D laparoscopic systems available for further evaluation in complex cases</li>
                    <li>A patient-first, educational approach to discussing preventive options like vaccination and screening together</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology</li>
                    <li><strong>Continuity of care</strong> – the same team supporting patients and families across preventive care decisions over time</li>
                    <li><strong>Outcomes patients hope for</strong> – reduced long-term cancer risk and lasting peace of mind</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 11 — How to Approach the HPV Vaccination Decision */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Approach the HPV Vaccination Decision
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Talk to a gynaecologist or paediatrician about the ideal age to start vaccination for yourself or your child.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Discuss any allergies or medical history that might affect the decision.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Confirm the recommended dose schedule based on age at first dose.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Schedule the first dose and any required follow-up doses.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Monitor for mild, expected side effects and report anything unusual to your doctor.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Continue routine cervical cancer screening as advised, even after completing vaccination.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Share accurate information with family members to counter common myths.
                </p>
              </div>
            </div>

            {/* Section 12 — Benefits of Consulting a Local Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Convenient access for both initial and follow-up vaccine doses without travel hassle</li>
                <li>Easier scheduling for multi-dose vaccination series over several months</li>
                <li>Lower overall cost compared to travelling to another city for the same service</li>
                <li>A trusted, familiar doctor who can also guide broader family preventive health decisions</li>
                <li>Continuity of care that links vaccination guidance with ongoing cervical screening</li>
              </ul>
            </div>

            {/* Section 13 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for a reliable HPV vaccination doctor in Moradabad, here are the verified contact details from the official website:
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
                  It's recommended to call or message on WhatsApp in advance to discuss vaccine availability and schedule your appointment.
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

            {/* Section 14 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                 gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Family-friendly, reassuring messaging</strong> – The homepage tagline "Her Health First" sets a supportive tone that fits well with preventive care decisions for both mothers and daughters.</li>
                <li><strong>Broad preventive and paediatric coverage</strong> – The presence of both gynaecology and paediatric consultation services suggests the clinic can support vaccination decisions across age groups.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D/4D ultrasound and diagnostic capability builds overall confidence in the clinic's broader preventive health approach.</li>
                <li><strong>Active blog with related health topics</strong> – Existing articles on reproductive and hormonal health show ongoing patient education, though a dedicated HPV vaccination article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for quick appointment booking.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post explaining HPV vaccination benefits, schedules, and myths could help the website rank better for this important preventive health topic and guide more parents and young women toward timely vaccination.</li>
              </ul>
            </div>

            {/* Section 15 — FAQs */}
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