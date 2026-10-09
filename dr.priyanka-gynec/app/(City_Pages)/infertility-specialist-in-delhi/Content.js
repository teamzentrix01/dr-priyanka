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

export default function InfertilitySpecialistDelhi() {
  const faqs = [
    {
      q: "How do I choose an infertility specialist in Delhi?",
      a: "Check qualifications, facilities, ethics, consultation time and cost transparency.",
    },
    {
      q: "Is Dr. Priyanka Gynaec located in Delhi?",
      a: "No. The clinic is in Moradabad, Uttar Pradesh, about 160 km from Delhi.",
    },
    {
      q: "When should I see a fertility specialist?",
      a: "After 12 months of trying, or 6 months if you are 35 or older.",
    },
    {
      q: "Do I need IVF straight away?",
      a: "Not always. Treatment depends on your age, tests and cause.",
    },
    {
      q: "Should my husband also be tested?",
      a: "Yes. Male factors cause about one-third of infertility cases.",
    },
    {
      q: "Can I send my reports before visiting?",
      a: "Yes. You can share reports on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Does the clinic offer pregnancy care after treatment?",
      a: "Yes. Antenatal care and normal delivery support are available.",
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
                Infertility Specialist in Delhi: How to Choose the Right Fertility Doctor, Including Options Beyond the Metro
              </h1>

              <p className="mb-4 text-gray-700">
                Many couples start their search with &quot;infertility
                specialist in Delhi.&quot; It is natural. Delhi has a large
                number of hospitals and fertility clinics. But a bigger name
                does not always mean better care for you. What matters is the
                doctor&apos;s expertise, the clinic&apos;s facilities, how much
                time you receive and whether the treatment plan is honest.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains how to choose a fertility specialist, what
                tests and treatments to expect, and why some Delhi-NCR couples
                choose to travel to Dr. Priyanka Gynaec in Moradabad, about 160
                km from Delhi, for personalised care.
              </p>
            </div>

            {/* Section 2 — Understanding Infertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Infertility First
              </h2>

              <p className="mb-4 text-gray-700">
                Infertility means difficulty in conceiving after a defined
                period of regular, unprotected intercourse.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Under 35 years: no pregnancy after 12 months of trying</li>
                <li>35 years and above: no pregnancy after 6 months</li>
                <li>Earlier evaluation: if there is a known issue such as PCOS, endometriosis or irregular periods</li>
                <li>Primary infertility: you have never conceived</li>
                <li>Secondary infertility: you conceived before but are struggling now</li>
              </ul>

              <p className="text-gray-700">
                Infertility is shared. About one-third of cases involve a female
                factor, one-third a male factor, and the rest involve both
                partners or remain unexplained.
              </p>
            </div>

            {/* Section 3 — When to See a Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See an Infertility Specialist?
              </h2>

              <p className="mb-4 text-gray-700">Consider a consultation if:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You have been trying for 12 months (or 6 months if 35 or older)</li>
                <li>Your periods are irregular, very infrequent or absent</li>
                <li>You have severe period or pelvic pain</li>
                <li>You have been told you have PCOS, endometriosis, fibroids or thyroid disease</li>
                <li>You have had pelvic infection, tuberculosis or abdominal surgery</li>
                <li>You have had two or more miscarriages</li>
                <li>Your partner has had a low sperm count or any previous testing concern</li>
                <li>You are over 38 and wish to conceive</li>
                <li>You want to freeze eggs or embryos for the future</li>
              </ul>

              <p className="text-gray-700">
                Time matters. Egg quality and quantity decline with age, so
                earlier action gives more options.
              </p>
            </div>

            {/* Section 4 — What a Specialist Does */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What an Infertility Specialist Does
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reviews the medical history of both partners</li>
                <li>Selects tests that fit your situation</li>
                <li>Identifies the cause or causes</li>
                <li>Treats underlying conditions first, such as thyroid, PCOS or infection</li>
                <li>Recommends the simplest effective treatment before advanced options</li>
                <li>Performs minimally invasive surgery when a structural problem is present</li>
                <li>Offers IUI and IVF when needed</li>
                <li>Supports you emotionally and explains your chances honestly</li>
              </ul>
            </div>

            {/* Section 5 — Common Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Infertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Female Factors
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation disorders: PCOS, thyroid problems, high prolactin, low ovarian reserve</li>
                <li>Blocked fallopian tubes: often after infection, surgery or endometriosis</li>
                <li>Endometriosis: causes pain and may affect egg quality and tubal function</li>
                <li>Fibroids and polyps: can distort the uterine cavity</li>
                <li>Uterine septum or adhesions: reduce implantation chances</li>
                <li>Age: the single most important factor</li>
                <li>Lifestyle: obesity, low body weight, smoking, alcohol, chronic stress</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Male Factors
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low sperm count</li>
                <li>Poor sperm movement</li>
                <li>Abnormal sperm shape</li>
                <li>No sperm in semen (azoospermia)</li>
                <li>Varicocele (enlarged scrotal veins)</li>
                <li>Sperm DNA damage</li>
                <li>Hormonal imbalance or infections</li>
                <li>Smoking, alcohol, heat exposure and obesity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Unexplained Infertility
              </h3>

              <p className="mb-2 text-gray-700">
                About 10–15% of couples have normal results yet cannot conceive.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>This does not mean you cannot have a baby.</li>
                <li>IUI or IVF often helps in these cases.</li>
              </ul>
            </div>

            {/* Section 6 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests Commonly Recommended
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For the Woman
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Transvaginal ultrasound for uterus, ovaries and follicle count</li>
                <li>AMH test for ovarian reserve</li>
                <li>FSH, LH, prolactin and thyroid tests</li>
                <li>HSG or sonosalpingography to check the tubes</li>
                <li>Hysteroscopy to view the uterine cavity</li>
                <li>Diagnostic laparoscopy when pelvic disease is suspected</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For the Man
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Semen analysis</li>
                <li>Advanced sperm testing including DNA integrity</li>
                <li>Hormone tests if required</li>
                <li>Scrotal ultrasound if a varicocele is suspected</li>
              </ul>

              <p className="text-gray-700">
                Not every couple needs every test. A good specialist is
                selective.
              </p>
            </div>

            {/* Section 7 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Explained
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle and Natural Cycle Support
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Healthy weight and balanced diet</li>
                <li>Regular exercise and good sleep</li>
                <li>Folic acid supplements</li>
                <li>Stopping tobacco and alcohol</li>
                <li>Ovulation tracking and timed intercourse</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Ovulation Induction
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tablets or injections to stimulate egg release</li>
                <li>Common in PCOS and irregular cycles</li>
                <li>Monitored by ultrasound for safety</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Minimally Invasive Surgery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diagnostic hysteroscopy and polypectomy: treat polyps and uterine problems without cuts</li>
                <li>Laparoscopic cystectomy: removes ovarian cysts while preserving fertility</li>
                <li>Laparoscopic myomectomy: removes fibroids while preserving the uterus</li>
                <li>Endometriosis excision: relieves pain and improves the pelvic environment</li>
                <li>Benefits: small incisions, less pain, quicker recovery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. IUI (Intrauterine Insemination)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Prepared sperm is placed in the uterus around ovulation</li>
                <li>Suitable for mild male factor, unexplained infertility and some ovulation problems</li>
                <li>Needs at least one open fallopian tube</li>
                <li>A short procedure without anaesthesia</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. IVF and ICSI
              </h3>

              <p className="mb-2 text-gray-700">
                Eggs are collected, fertilised in the laboratory and the embryo
                is transferred to the uterus.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>ICSI places a single sperm into each egg, helping in severe male factor.</li>
                <li>It is advised for blocked tubes, severe male factor, endometriosis, advanced age or failed IUI.</li>
                <li>Time-lapse embryo monitoring helps observe embryos without disturbing them.</li>
                <li>Frozen embryo transfer adds flexibility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Fertility Preservation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Egg or embryo freezing for those delaying pregnancy</li>
                <li>Helpful before cancer treatment or other medical therapy</li>
              </ul>
            </div>

            {/* Section 8 — How to Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose a Fertility Specialist: Delhi or Beyond
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you pick a doctor in Delhi or elsewhere, use this
                checklist.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualification and experience: confirm the doctor&apos;s degrees and fertility experience.</li>
                <li>Ethical approach: the doctor should not push IVF when simpler options may work.</li>
                <li>Time with the doctor: you should be heard, not rushed.</li>
                <li>Complete facilities: ultrasound, laboratory, semen analysis, hysteroscopy and laparoscopy under one roof</li>
                <li>Modern technology: time-lapse embryo monitoring and advanced sperm testing</li>
                <li>Both partners evaluated: male testing should be taken seriously.</li>
                <li>Cost transparency: ask for an itemised estimate that includes medicines and scans.</li>
                <li>Honest success discussion: be cautious about any guarantee.</li>
                <li>Continuity of care: a team that can also manage pregnancy and delivery</li>
                <li>Reachability: a clinic that answers calls and WhatsApp messages promptly</li>
                <li>Real patient experiences: word-of-mouth and genuine reviews</li>
              </ul>
            </div>

            {/* Section 9 — Big City vs Regional */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Big-City Clinic vs. a Focused Regional Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Both can offer excellent care. Think about what matters most to
                you.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Points to Weigh with Big-City Clinics
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many options and large infrastructure</li>
                <li>Often busy, with shorter consultation times</li>
                <li>Higher travel, parking and stay costs within the city</li>
                <li>Long waiting times at popular centres</li>
                <li>Different doctors may see you at different visits</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Points to Weigh with a Focused Regional Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Often more time with the main doctor</li>
                <li>A more personal, less rushed experience</li>
                <li>A calmer environment away from city congestion</li>
                <li>Continuity from fertility treatment to pregnancy care</li>
                <li>Travel is required, so plan your visits in advance</li>
              </ul>

              <p className="text-gray-700">
                The right choice is the one where you feel heard and the plan
                makes medical sense.
              </p>
            </div>

            {/* Section 10 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Delhi-NCR Couples Consider Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre in Moradabad that follows the philosophy of &quot;Her
                Health First&quot;.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF care: personalised plans for every couple</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>AI-powered semen analysis: includes DNA integrity testing for a deeper male fertility assessment</li>
                <li>3D laparoscopic surgery: for cysts, fibroids, endometriosis and tubal factors</li>
                <li>Hysteroscopy services: diagnostic hysteroscopy and polyp removal</li>
                <li>3D/4D ultrasound: detailed imaging for fertility monitoring and pregnancy</li>
                <li>Complete journey support: from the first fertility test to antenatal care and normal delivery</li>
                <li>Newborn care access: paediatric consultations and vaccinations</li>
                <li>Empathetic approach: technology used with patience and respect for your choices</li>
              </ul>
            </div>

            {/* Section 11 — Travelling */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Travelling from Delhi to Moradabad
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Moradabad is roughly 160 km from Delhi, and the journey generally takes about three to four hours by road.</li>
                <li>Direct trains and buses connect Delhi with Moradabad. Check current timetables before you travel.</li>
                <li>The clinic address: A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001</li>
                <li>Couples from Ghaziabad, Noida, Hapur, Gajraula, Amroha and Rampur may find travel more convenient.</li>
              </ul>
            </div>

            {/* Section 12 — Planning Visits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Visits Smartly
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>First visit: history, ultrasound and initial tests, which may be done in one day.</li>
                <li>Share previous reports in advance through WhatsApp so the doctor can review them.</li>
                <li>Plan the stay: your doctor can advise how many visits and days you will need.</li>
                <li>Follow-up scans: ask whether local monitoring is possible for some steps.</li>
                <li>Keep your partner involved: bring both partners for the first visit to save time.</li>
                <li>Please confirm timings and appointment availability by phone before travelling.</li>
              </ul>
            </div>

            {/* Section 13 — What to Bring */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Bring to Your First Visit
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>All earlier fertility reports, scans and prescriptions</li>
                <li>HSG, hormone and semen analysis reports</li>
                <li>A list of current medicines</li>
                <li>Your menstrual cycle details (dates and length)</li>
                <li>Records of previous surgeries or pregnancies</li>
                <li>Your partner, if possible</li>
                <li>A list of questions to ask</li>
              </ul>
            </div>

            {/* Section 14 — Simple Habits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Habits That Support Fertility
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy weight.</li>
                <li>Eat fresh vegetables, fruit, pulses, nuts and whole grains.</li>
                <li>Start folic acid at least three months before trying.</li>
                <li>Exercise moderately and regularly.</li>
                <li>Quit smoking and limit alcohol and caffeine.</li>
                <li>Manage stress through yoga, walking or meditation.</li>
                <li>Sleep 7–8 hours every night.</li>
                <li>Track ovulation and plan intercourse in the fertile window.</li>
                <li>Check thyroid, sugar and vitamin D levels.</li>
                <li>Avoid unproven remedies and self-medication.</li>
                <li>Encourage your partner to test early.</li>
              </ul>
            </div>

            {/* Section 15 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Caring for Your Emotional Wellbeing
              </h2>

              <p className="mb-4 text-gray-700">
                Feeling anxious, sad or frustrated is normal.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk openly with your partner.</li>
                <li>Avoid comparing your journey with others.</li>
                <li>Take breaks between treatment cycles when needed.</li>
                <li>Consider counselling if stress feels heavy.</li>
                <li>Celebrate each small step forward.</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Fertility Consultation Today
              </h2>

              <p className="mb-6 text-black">
                Do not wait because of distance or doubt. Send your reports on
                WhatsApp and speak to the team first.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
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
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
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
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
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

            {/* Section 17 — FAQs */}
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