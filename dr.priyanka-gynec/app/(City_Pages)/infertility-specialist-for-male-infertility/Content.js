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

export default function InfertilitySpecialistMaleInfertility() {
  const faqs = [
    {
      q: "Which doctor treats male infertility?",
      a: "A fertility specialist evaluates the couple, and a urologist or andrologist may be involved for male-specific treatment.",
    },
    {
      q: "What is the first test for male infertility?",
      a: "A semen analysis, checking sperm count, movement and shape.",
    },
    {
      q: "Can male infertility be cured?",
      a: "Many causes are treatable, and ICSI can help even with low sperm counts.",
    },
    {
      q: "What is a sperm DNA integrity test?",
      a: "It checks whether sperm DNA is damaged, which can affect embryo quality.",
    },
    {
      q: "What is ICSI?",
      a: "A single sperm is injected directly into an egg to help fertilisation.",
    },
    {
      q: "Can lifestyle changes improve sperm quality?",
      a: "Yes. Quitting smoking, reducing alcohol and managing weight can help over about three months.",
    },
    {
      q: "Is semen testing painful or embarrassing?",
      a: "No. It is a simple, private and painless test.",
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
                Infertility Specialist for Male Infertility: Causes, Tests and Treatment Options
              </h1>

              <p className="mb-4 text-gray-700">
                In many Indian families, infertility is still assumed to be a
                woman&apos;s problem. Medical facts say otherwise. Male factors
                contribute to roughly one-third of infertility cases, and in
                another group of couples both partners have a contributing
                issue. Yet many men delay testing because of hesitation,
                embarrassment or myths.
              </p>

              <p className="mb-4 text-gray-700">
                The good news is that male infertility is common, testable in a
                simple and painless way, and often treatable. This guide
                explains what an infertility specialist does for male
                infertility, which tests matter, what treatments exist and when
                assisted reproduction such as IUI, IVF and ICSI helps.
              </p>
            </div>

            {/* Section 2 — What Is Male Infertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Male Infertility?
              </h2>

              <p className="mb-4 text-gray-700">
                Male infertility means a man&apos;s reproductive health is
                reducing the couple&apos;s chance of conceiving.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It usually relates to sperm count, movement, shape or DNA quality.</li>
                <li>It can also involve blocked sperm passage, hormonal problems or erection and ejaculation difficulties.</li>
                <li>A man can appear completely healthy and still have abnormal semen results.</li>
                <li>It is rarely related to masculinity or sexual ability, and it is a medical issue like any other.</li>
              </ul>
            </div>

            {/* Section 3 — When to Get Tested */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should a Man Get Tested?
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait for years. Consider testing if:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The couple has been trying for 12 months without success (or 6 months if the woman is 35 or older)</li>
                <li>The partner has been advised fertility evaluation</li>
                <li>There is a history of low sperm count in previous reports</li>
                <li>There is a history of mumps after puberty, infection, injury or surgery in the groin or testicles</li>
                <li>You have a known varicocele, undescended testicle or hernia surgery history</li>
                <li>You have had chemotherapy, radiation or long-term medication</li>
                <li>You have low sexual desire, erection problems or reduced ejaculate volume</li>
                <li>You smoke, drink heavily, use anabolic steroids or work in high-heat environments</li>
                <li>The couple has had repeated miscarriages</li>
                <li>IUI or IVF has failed in the past</li>
              </ul>

              <p className="text-gray-700">
                Tip: testing both partners together at the start saves months of
                delay.
              </p>
            </div>

            {/* Section 4 — What a Specialist Does */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does an Infertility Specialist Do for Male Infertility?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Takes a detailed history covering health, lifestyle, medicines, past surgeries and sexual function</li>
                <li>Orders the right tests, beginning with a semen analysis</li>
                <li>Interprets results in the context of the female partner&apos;s fertility</li>
                <li>Identifies treatable factors such as infections, lifestyle issues or hormonal problems</li>
                <li>Recommends the most suitable fertility treatment for the couple</li>
                <li>Refers to a urologist or andrologist when specialised male treatment or surgery is needed</li>
                <li>Offers assisted reproduction (IUI, IVF and ICSI) when appropriate</li>
                <li>Provides honest counselling and emotional support to both partners</li>
              </ul>
            </div>

            {/* Section 5 — Common Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Male Infertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Sperm Production Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low sperm count (oligozoospermia)</li>
                <li>No sperm in the semen (azoospermia)</li>
                <li>Poor sperm movement (asthenozoospermia)</li>
                <li>Abnormal shape (teratozoospermia)</li>
                <li>Causes include hormonal imbalance, genetic conditions, infections or testicular damage.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Varicocele
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Enlarged veins in the scrotum, similar to varicose veins</li>
                <li>Can raise testicular temperature and affect sperm quality</li>
                <li>One of the most common treatable causes</li>
                <li>Often painless, so it may go unnoticed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Blockages in the Sperm Passage
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Prevent sperm from reaching the semen</li>
                <li>May result from infection, surgery, injury or birth differences</li>
                <li>Sperm production may be normal, but sperm cannot travel out</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Hormonal Disorders
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low testosterone, thyroid problems or high prolactin</li>
                <li>Problems with the pituitary gland, which controls sperm production</li>
                <li>Often treatable with medicines</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Sperm DNA Damage
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sperm may look normal in routine tests but carry damaged DNA.</li>
                <li>It may reduce fertilisation, embryo quality and implantation, and may be linked to miscarriage.</li>
                <li>Common contributors are smoking, heat, infection, obesity and oxidative stress.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Infections
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infections of the testicles, prostate or urinary tract</li>
                <li>Some sexually transmitted infections</li>
                <li>Mumps affecting the testicles after puberty</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Ejaculation and Erection Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Erectile dysfunction</li>
                <li>Premature or delayed ejaculation</li>
                <li>Retrograde ejaculation, where semen flows backward into the bladder</li>
                <li>Many causes are treatable with medical or psychological support.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Lifestyle and Environmental Factors
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Smoking and tobacco</li>
                <li>Heavy alcohol use</li>
                <li>Obesity</li>
                <li>Anabolic steroid use</li>
                <li>Prolonged heat exposure (hot baths, tight clothing, long periods of laptop use on the lap)</li>
                <li>Mental stress and poor sleep</li>
                <li>Exposure to pesticides, heavy metals or industrial chemicals</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Medical Treatments and Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chemotherapy and radiation</li>
                <li>Certain long-term medicines</li>
                <li>Diabetes</li>
                <li>Previous groin or testicular surgery</li>
              </ul>
            </div>

            {/* Section 6 — Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs That May Point to a Male Fertility Problem
              </h2>

              <p className="mb-4 text-gray-700">
                Many men have no symptoms at all. Possible signs include:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain, swelling or a lump in the testicles</li>
                <li>Reduced facial or body hair</li>
                <li>Low sexual desire</li>
                <li>Erection or ejaculation problems</li>
                <li>Very small semen volume</li>
                <li>Repeated respiratory infections in some genetic conditions</li>
                <li>A history of testicular problems from childhood</li>
              </ul>

              <p className="text-gray-700">
                Absence of symptoms does not mean normal fertility. Testing is
                the only reliable way to know.
              </p>
            </div>

            {/* Section 7 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests for Male Infertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Semen Analysis
              </h3>

              <p className="mb-2 text-gray-700">
                This is the first and most important test.
              </p>

              <p className="mb-2 text-gray-700">What it measures:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Semen volume</li>
                <li>Sperm concentration</li>
                <li>Sperm motility (movement)</li>
                <li>Sperm morphology (shape)</li>
                <li>Sample liquefaction and other basic features</li>
              </ul>

              <p className="mb-2 text-gray-700">Preparation tips:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Abstain for the period advised by the lab, usually 2–5 days</li>
                <li>Give a fresh sample at the lab or as instructed</li>
                <li>Avoid alcohol and illness around the test date</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Repeat testing: results can vary from sample to sample, so a
                repeat test is often advised.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. AI-Powered Semen Analysis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uses advanced technology to assess sperm in a more objective and detailed way</li>
                <li>Reduces human variation in assessing movement and shape</li>
                <li>Dr. Priyanka Gynaec offers AI-powered semen analysis.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Sperm DNA Integrity (Fragmentation) Testing
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Checks whether sperm DNA is damaged</li>
                <li>Particularly useful for repeated IUI or IVF failure, unexplained infertility or recurrent miscarriage</li>
                <li>Dr. Priyanka Gynaec offers DNA integrity testing.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Hormone Blood Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Testosterone</li>
                <li>FSH and LH</li>
                <li>Prolactin</li>
                <li>Thyroid hormones</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Scrotal Ultrasound
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detects varicocele, testicular size changes and other structural issues</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Urine and Infection Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Post-ejaculation urine test for retrograde ejaculation</li>
                <li>Cultures when infection is suspected</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Genetic Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Advised in severe cases such as very low or absent sperm count</li>
                <li>Helps identify the cause and plan treatment, including counselling</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Testicular or Specialised Evaluation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rarely needed, and handled with the help of a urologist or andrologist</li>
              </ul>
            </div>

            {/* Section 8 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Male Infertility
              </h2>

              <p className="mb-4 text-gray-700">
                The approach depends on the cause and on the female
                partner&apos;s fertility too.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle Changes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Stop smoking and tobacco</li>
                <li>Reduce or stop alcohol</li>
                <li>Lose excess weight</li>
                <li>Exercise regularly but avoid overheating</li>
                <li>Wear loose underwear and avoid long hot baths</li>
                <li>Eat a balanced diet rich in fruit, vegetables, nuts and protein</li>
                <li>Sleep 7–8 hours</li>
                <li>Manage stress</li>
                <li>Avoid unprescribed supplements or steroids</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Treating Infections and Hormonal Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antibiotics for confirmed infections</li>
                <li>Thyroid or prolactin correction</li>
                <li>Hormonal therapy for selected conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Antioxidants and Supplements
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sometimes advised when oxidative stress is suspected</li>
                <li>Should be used only under medical advice</li>
                <li>Not a replacement for lifestyle correction</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Surgical and Procedural Treatment
              </h3>

              <p className="mb-2 text-gray-700">
                Performed by a urologist or andrologist where appropriate.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Varicocele repair</li>
                <li>Correction of blockages</li>
                <li>Surgical sperm retrieval when no sperm are found in the ejaculate but production may still be present</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Treatment of Sexual Function Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines</li>
                <li>Counselling or sex therapy</li>
                <li>Lifestyle and relationship support</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. IUI (Intrauterine Insemination)
              </h3>

              <p className="mb-2 text-gray-700">
                Washed and concentrated sperm is placed directly into the
                uterus.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Suitable for: mild sperm abnormalities with a healthy female partner</li>
                <li>Needs: at least one open fallopian tube and an adequate number of motile sperm after preparation</li>
                <li>Advantages: simple, short and less invasive</li>
                <li>Success reality: several cycles may be needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. IVF With ICSI
              </h3>

              <p className="mb-2 text-gray-700">
                In ICSI, a single sperm is injected into each egg.
              </p>

              <p className="mb-2 text-gray-700">Suitable for:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low sperm count</li>
                <li>Poor movement or abnormal shape</li>
                <li>Sperm retrieved surgically</li>
                <li>Failed fertilisation in earlier cycles</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Advantages: works even when only a few healthy sperm are
                available.
              </p>

              <p className="mb-4 text-gray-700">
                Technology support: time-lapse embryo monitoring helps observe
                embryos without disturbing them.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Donor Sperm
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Considered only when no other option works</li>
                <li>Requires careful counselling and consent from both partners</li>
                <li>Subject to legal and ethical guidelines</li>
              </ul>
            </div>

            {/* Section 9 — Quick Guide */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Quick Guide: Which Option for Which Situation?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Slightly low counts, healthy partner: lifestyle correction, then IUI</li>
                <li>Varicocele with abnormal semen: evaluation for repair, then fertility treatment</li>
                <li>Severe low count or poor motility: IVF with ICSI</li>
                <li>High DNA fragmentation: lifestyle and antioxidants, then IVF with ICSI where needed</li>
                <li>Azoospermia: detailed workup, possible sperm retrieval and ICSI</li>
                <li>Erection or ejaculation issues: medical and psychological support, then assisted conception if required</li>
                <li>Unexplained infertility with abnormal DNA test: early IVF-based planning</li>
              </ul>
            </div>

            {/* Section 10 — Female Partner */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Female Partner Still Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Fertility is a team effort. Even with a male factor, the
                woman&apos;s age, tubes, ovaries and uterus all affect results.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A younger partner with good ovarian reserve can improve the chance of success with ICSI.</li>
                <li>An older partner may need quicker progression to IVF.</li>
                <li>A joint evaluation helps choose the correct treatment faster.</li>
              </ul>
            </div>

            {/* Section 11 — Lifestyle Habits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Improve Sperm Health
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Quit smoking and tobacco</li>
                <li>Limit alcohol</li>
                <li>Maintain a healthy weight</li>
                <li>Exercise moderately</li>
                <li>Eat colourful vegetables, fruit, nuts and whole grains</li>
                <li>Stay hydrated</li>
                <li>Avoid overheating the groin area</li>
                <li>Avoid steroids and unproven supplements</li>
                <li>Treat diabetes and other chronic problems</li>
                <li>Reduce stress and sleep well</li>
                <li>Avoid unnecessary exposure to chemicals and pesticides</li>
              </ul>
            </div>

            {/* Section 12 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Male Infertility
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: infertility is always a woman&apos;s problem. Fact: male factors contribute to about one-third of cases.</li>
                <li>Myth: if a man has normal sexual function, his fertility must be normal. Fact: sperm quality can be poor even when sexual function is normal.</li>
                <li>Myth: male infertility cannot be treated. Fact: many causes are treatable, and ICSI helps even with very few sperm.</li>
                <li>Myth: one semen report is final. Fact: results can vary, and repeat testing is often needed.</li>
                <li>Myth: testing is embarrassing or painful. Fact: it is a simple, private and painless test.</li>
              </ul>
            </div>

            {/* Section 13 — Emotional Support */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Support for Men
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It is normal to feel worried, guilty or ashamed.</li>
                <li>Open conversation with your partner is valuable.</li>
                <li>Avoid blaming each other. It is a shared medical journey.</li>
                <li>Counselling can help if stress feels heavy.</li>
                <li>Seeking help early is a sign of responsibility and strength.</li>
              </ul>
            </div>

            {/* Section 14 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Couples Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers couple-focused fertility care built
                around the philosophy &quot;Her Health First&quot;, and it takes
                the male partner&apos;s evaluation just as seriously.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>AI-powered semen analysis: a modern, objective assessment of sperm</li>
                <li>DNA integrity testing: a deeper look at sperm quality</li>
                <li>Fertility and IVF services: personalised plans for each couple</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>3D/4D ultrasound: detailed imaging for the female partner&apos;s evaluation and for pregnancy</li>
                <li>One team from conception to delivery: fertility care, antenatal services, normal delivery support and newborn care</li>
                <li>Respectful, private consultations: an unhurried and judgement-free environment</li>
                <li>Appropriate referral: coordination with urology or andrology specialists when specialised male treatment is needed</li>
              </ul>
            </div>

            {/* Section 15 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation Today
              </h2>

              <p className="mb-6 text-black">
                Testing is simple, private and the fastest way to get clarity.
                Bring your partner, bring your reports and start the
                conversation.
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

            {/* Section 16 — FAQs */}
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