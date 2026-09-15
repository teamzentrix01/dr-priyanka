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

export default function VaginalInfectionTreatmentMoradabad() {
  const faqs = [
    {
      q: "Which doctor treats vaginal infections in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec offers diagnosis and treatment for vaginal infections.",
    },
    {
      q: "What are common signs of a vaginal infection?",
      a: "Itching, unusual discharge, odour, burning during urination, and discomfort during intercourse.",
    },
    {
      q: "Can vaginal infections go away on their own?",
      a: "Some mild cases may resolve, but persistent or recurring symptoms need proper medical diagnosis and treatment.",
    },
    {
      q: "What tests are done to identify the cause?",
      a: "A vaginal swab test and, if needed, STI screening or a blood sugar check are commonly used.",
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
      q: "Does my partner need treatment too?",
      a: "In some infections, yes — the doctor will advise if partner treatment is necessary to prevent reinfection.",
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
      q: "Why do some women get recurrent vaginal infections?",
      a: "Diabetes, hormonal changes, antibiotic use, and hygiene habits can all contribute to recurrence.",
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
                Vaginal Infection Treatment in Moradabad: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                Vaginal infections are one of the most common reasons women visit a gynaecologist, yet the topic often carries unnecessary embarrassment that delays proper treatment. Left unaddressed, infections can cause persistent discomfort, recur repeatedly, and in some cases lead to more serious complications.
              </p>

              <p className="text-gray-700">
                This guide explains the types, causes, and warning signs of vaginal infections, and how to find the right doctor for vaginal infection treatment in Moradabad — including details about Dr. Priyanka Pachauri, a well-known gynaecologist in the city.
              </p>
            </div>

            {/* Section 2 — Understanding Vaginal Infections */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Understanding Vaginal Infections
              </h2>

              <p className="text-gray-700 mb-4">
                The vagina naturally maintains a balance of healthy bacteria and a stable pH level. When this balance is disturbed — by hormones, hygiene practices, medication, or other factors — harmful bacteria or fungi can multiply and cause infection.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">
                  Common Types of Vaginal Infections
                </h3>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li><strong>Yeast infection (Candidiasis)</strong> – caused by an overgrowth of naturally occurring fungus, leading to itching and thick discharge</li>
                  <li><strong>Bacterial vaginosis (BV)</strong> – an imbalance of natural bacteria, often producing a fishy odour</li>
                  <li><strong>Trichomoniasis</strong> – a sexually transmitted infection caused by a parasite</li>
                  <li><strong>Sexually transmitted infections (STIs)</strong> – such as chlamydia or gonorrhoea, which can also affect vaginal health</li>
                  <li><strong>Atrophic vaginitis</strong> – thinning and dryness of vaginal tissue, common after menopause due to lower oestrogen levels</li>
                  <li><strong>Allergic or irritant vaginitis</strong> – reaction to soaps, detergents, or certain fabrics rather than an infection</li>
                </ul>
              </div>
            </div>

            {/* Section 3 — Common Symptoms */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Symptoms That Signal a Vaginal Infection
              </h2>

              <p className="text-gray-700 mb-4">
                Recognising symptoms early helps in seeking timely treatment. Common warning signs include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent itching or irritation in or around the vagina</li>
                <li>Unusual discharge — thick and white, greyish, yellow, or green in colour</li>
                <li>A strong or unpleasant odour, especially a fishy smell</li>
                <li>Burning sensation during urination</li>
                <li>Pain or discomfort during sexual intercourse</li>
                <li>Redness, swelling, or soreness of the vaginal area</li>
                <li>Light spotting or bleeding unrelated to periods</li>
                <li>General discomfort that doesn't improve with basic hygiene changes</li>
              </ul>
            </div>

            {/* Section 4 — Why Infections Should Never Be Self-Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Infections Should Never Be Self-Treated Long-Term
              </h2>

              <p className="text-gray-700 mb-4">
                Many women try over-the-counter creams or home remedies before seeing a doctor. While mild cases sometimes improve temporarily, relying on self-treatment long-term carries risks:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Wrong treatment can mask symptoms without curing the actual infection</li>
                <li>Untreated bacterial vaginosis has been linked to complications during pregnancy</li>
                <li>Repeated, incomplete treatment can lead to antibiotic or antifungal resistance</li>
                <li>Some STIs mimic common infections but require very different treatment approaches</li>
                <li>Chronic untreated infections can affect fertility and reproductive health over time</li>
                <li>A proper diagnosis distinguishes between infection types that need completely different medications</li>
              </ul>
            </div>

            {/* Section 5 — Causes and Risk Factors */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Causes and Risk Factors for Vaginal Infections
              </h2>

              <p className="text-gray-700 mb-4">
                A thorough gynaecologist looks at the underlying cause rather than only treating symptoms. Common risk factors include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Antibiotic use</strong> – disrupting the natural balance of protective vaginal bacteria</li>
                <li><strong>Uncontrolled diabetes</strong> – higher sugar levels encouraging yeast overgrowth</li>
                <li><strong>Hormonal changes</strong> – during pregnancy, menopause, or with certain contraceptives</li>
                <li><strong>Poor hygiene practices</strong> – or, conversely, over-washing and douching, which disrupts natural pH</li>
                <li><strong>Tight, non-breathable clothing</strong> – trapping moisture and creating a favourable environment for infection</li>
                <li><strong>Multiple or new sexual partners</strong> – increasing exposure to sexually transmitted infections</li>
                <li><strong>Weakened immune system</strong> – making the body less able to fight off infections naturally</li>
                <li><strong>Scented hygiene products</strong> – such as soaps, sprays, or scented pads, which can irritate sensitive tissue</li>
              </ul>
            </div>

            {/* Section 6 — What to Expect During Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect During a Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                A proper vaginal infection consultation with an experienced gynaecologist typically includes:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Detailed symptom history</strong> – duration, severity, and pattern of symptoms</li>
                <li><strong>Physical and pelvic examination</strong> – to check for visible signs of infection or irritation</li>
                <li><strong>Vaginal swab test</strong> – to identify whether the cause is fungal, bacterial, or parasitic</li>
                <li><strong>STI screening if relevant</strong> – especially if symptoms suggest a sexually transmitted cause</li>
                <li><strong>Blood sugar check</strong> – particularly important for recurrent yeast infections</li>
                <li><strong>Personalised treatment plan</strong> – oral or topical medication based on the exact cause identified</li>
                <li><strong>Partner treatment guidance, if needed</strong> – some infections require treating both partners to prevent reinfection</li>
                <li><strong>Follow-up visit</strong> – to confirm the infection has cleared completely</li>
              </ul>
            </div>

            {/* Section 7 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Doctor for Vaginal Infection Treatment in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad known for handling vaginal infections and related women's health concerns with care and discretion. Her clinic follows the guiding principle of "Her Health First," ensuring every patient receives a private, judgment-free consultation.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Diagnosis and treatment of vaginal and cervical infections</li>
                    <li>PCOS and hormonal imbalance evaluation</li>
                    <li>Diagnostic hysteroscopy for uterine cavity assessment when needed</li>
                    <li>Pregnancy, antenatal, and postnatal care (infections during pregnancy need special attention)</li>
                    <li>3D laparoscopic gynaecological surgery for more complex conditions</li>
                    <li>Endometriosis and chronic pelvic pain management</li>
                    <li>Fertility evaluation and IVF treatment</li>
                    <li>Paediatric consultations for younger patients</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Technology Used for Accurate Diagnosis
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>3D & 4D ultrasound machines for detailed pelvic imaging when infections are linked to structural or hormonal causes</li>
                    <li>High-definition 3D laparoscopic systems for further evaluation in complex or recurring cases</li>
                    <li>Lab-supported diagnostic testing integrated into the clinic's overall gynaecological care</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training across gynaecology and related fields</li>
                    <li><strong>Continuity of care</strong> – the same team tracking a patient's history across every visit and follow-up</li>
                    <li><strong>Outcomes patients hope for</strong> – accurate diagnosis, effective treatment, and lasting relief from recurring infections</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 8 — Prevention Tips */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Prevention Tips for Vaginal Health
              </h2>

              <p className="text-gray-700 mb-4">
                Prevention plays a major role in avoiding repeat infections. General guidance includes:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Wear breathable, cotton underwear and avoid overly tight clothing</li>
                <li>Avoid scented soaps, sprays, wipes, or douches in the genital area</li>
                <li>Change out of wet clothing, like swimwear, as soon as possible</li>
                <li>Wipe front to back after using the washroom to prevent bacterial spread</li>
                <li>Maintain good blood sugar control if diabetic</li>
                <li>Avoid unnecessary or prolonged antibiotic use without medical guidance</li>
                <li>Use protection during sexual activity to reduce STI risk</li>
                <li>Change sanitary pads or tampons regularly during periods</li>
                <li>Avoid inserting unnecessary products into the vagina without medical advice</li>
              </ul>
            </div>

            {/* Section 9 — How to Choose the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Choose the Right Doctor for Vaginal Infection Treatment
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Look for a qualified gynaecologist – MS/DGO qualification with relevant clinical experience in infection management.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Confirm lab testing facilities – accurate diagnosis needs proper swab or lab testing, not guesswork.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Check for a private, comfortable setting – this is a sensitive topic that deserves discretion and respect.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Read patient reviews – look for mentions of accurate diagnosis and effective, lasting treatment.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Check contact accessibility – phone and WhatsApp availability make it easier to ask follow-up questions discreetly.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Ask about recurrent infection management – important if symptoms keep returning despite treatment.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Evaluate communication style – the doctor should explain the cause and treatment plan clearly and without judgment.
                </p>
              </div>
            </div>

            {/* Section 10 — Benefits of Consulting a Local Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Consulting a Local Specialist in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster appointment availability without long-distance travel</li>
                <li>Easier, more frequent follow-up visits to confirm complete recovery</li>
                <li>Lower overall treatment cost compared to travelling to another city</li>
                <li>More comfortable, familiar environment for discussing a sensitive health concern</li>
                <li>Continuity of care if the infection is linked to a broader issue like diabetes or hormonal imbalance</li>
                <li>Quick access to lab testing facilities for accurate, targeted treatment</li>
              </ul>
            </div>

            {/* Section 11 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone searching for reliable vaginal infection treatment in Moradabad, here are the verified contact details from the official website:
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

            {/* Section 12 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Comfort-focused messaging</strong> – The homepage tagline "Her Health First" sets a reassuring, judgment-free tone, which is important for patients discussing infections.</li>
                <li><strong>Broad gynaecological coverage</strong> – General gynaecology, hormonal health, and diagnostic services are listed, showing the clinic can evaluate infections alongside related causes like PCOS or diabetes.</li>
                <li><strong>Technology transparency</strong> – Mentioning 3D/4D ultrasound and diagnostic capability builds confidence for investigating underlying or recurring causes.</li>
                <li><strong>Active blog with related health topics</strong> – Existing articles on hormonal and reproductive health show ongoing patient education, though a dedicated vaginal infection article is not currently listed.</li>
                <li><strong>Easy-to-access contact details</strong> – Phone, WhatsApp, and email are clearly visible in the header and footer for discreet, quick communication.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, supporting visibility for Moradabad-based searches.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated blog post or FAQ section specifically addressing vaginal infections could help the website rank better for this topic and provide patients with more targeted, reassuring information before booking.</li>
              </ul>
            </div>

            {/* Section 13 — FAQs */}
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