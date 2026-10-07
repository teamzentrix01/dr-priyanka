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

export default function WhyWhiteDischargeHappens() {
  const faqs = [
    {
      q: "Why does white discharge happen?",
      a: "It is usually hormonal and keeps the vagina clean. Infections can also cause it.",
    },
    {
      q: "Is white discharge normal?",
      a: "Yes, if it is clear or milky, odourless and painless.",
    },
    {
      q: "What are the symptoms of abnormal white discharge?",
      a: "Thick or coloured discharge, bad smell, itching, burning or pelvic pain.",
    },
    {
      q: "Why do I get white discharge before my period?",
      a: "Rising hormones thicken discharge before periods. This is normal.",
    },
    {
      q: "Is white discharge a sign of pregnancy?",
      a: "It can be, but only a pregnancy test confirms it.",
    },
    {
      q: "Can white discharge cause weakness?",
      a: "Heavy, long-lasting discharge with infection may. See a doctor.",
    },
    {
      q: "Does white discharge mean an infection?",
      a: "Not always. Only changes in smell, colour or comfort suggest infection.",
    },
    {
      q: "When should I see a doctor?",
      a: "If discharge is smelly, coloured, itchy, painful or lasts several days.",
    },
    {
      q: "Which doctor should I consult in Moradabad?",
      a: "A gynaecologist such as Dr. Priyanka Pachauri at Gandhi Nagar.",
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
                Why White Discharge Happens: Causes, Symptoms and When to See a Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                If you have ever noticed a whitish fluid on your underwear and
                wondered whether something is wrong, you are in good company.
                White discharge is one of the most common questions women ask a
                gynaecologist.
              </p>

              <p className="mb-4 text-gray-700">
                The reassuring truth is that white discharge is often completely
                normal. It is a sign that your reproductive system is working as
                it should. But sometimes it signals an infection or another
                condition that needs attention.
              </p>

              <p className="text-gray-700">
                What Is White Discharge?
              </p>

              <p className="mb-4 text-gray-700">
                White discharge, also called leucorrhea, is a fluid released
                from the vagina and cervix. It is a natural part of how the
                female body cleans and protects itself.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It is made of vaginal fluid, cervical mucus, healthy bacteria and old cells.</li>
                <li>It carries dead cells and germs out of the vagina.</li>
                <li>It keeps the vaginal tissue moist and comfortable.</li>
                <li>It helps maintain a healthy, slightly acidic environment.</li>
                <li>It protects against infections.</li>
              </ul>

              <p className="text-gray-700">
                Think of it as your body&apos;s built-in self-cleaning system.
              </p>
            </div>

            {/* Section 2 — Why It Happens */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does White Discharge Happen? The Main Reasons
              </h2>

              <p className="mb-4 text-gray-700">
                White discharge happens for many reasons. They fall into two
                broad groups: normal (physiological) and abnormal
                (pathological).
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Reasons for White Discharge
              </h3>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                1. Hormonal Changes
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Oestrogen and progesterone levels rise and fall through your cycle.</li>
                <li>These hormones directly change the amount and thickness of discharge.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                2. Ovulation
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Around mid-cycle, discharge becomes clearer, stretchy and slippery.</li>
                <li>This helps sperm travel and is a sign of fertility.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                3. Before Periods
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge may turn thicker, whiter and creamier a few days before your period.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                4. Puberty
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Girls often notice white discharge 6 to 12 months before their first period.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                5. Pregnancy
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Higher oestrogen and increased blood flow to the pelvic area raise the amount of discharge.</li>
                <li>It is usually milky, thin and mild-smelling.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                6. Sexual Arousal
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The body produces extra lubrication, which can look like white discharge.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                7. Hormonal Contraceptives
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pills, injections and some devices can change the usual discharge pattern.</li>
              </ul>

              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                8. Emotional Stress
              </h4>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Stress can disturb hormones and slightly change discharge.</li>
              </ul>
            </div>

            {/* Section 3 — Abnormal Reasons */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Abnormal Reasons for White Discharge
              </h2>

              <p className="mb-4 text-gray-700">
                When discharge changes suddenly, it may point to a medical
                cause.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Vaginal Yeast Infection (Candidiasis)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Caused by an overgrowth of a fungus called Candida</li>
                <li>Thick, white, cottage-cheese-like discharge</li>
                <li>Intense itching and burning</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Bacterial Vaginosis (BV)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Caused by an imbalance of vaginal bacteria</li>
                <li>Thin, greyish-white discharge</li>
                <li>A strong fishy smell, often stronger after intercourse</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Trichomoniasis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A parasitic infection spread through sexual contact</li>
                <li>Frothy, yellow-green discharge</li>
                <li>Odour, irritation and pain</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Cervicitis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Inflammation of the cervix, often due to infection</li>
                <li>Persistent discharge and spotting after intercourse</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Pelvic Inflammatory Disease (PID)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the uterus, tubes or ovaries</li>
                <li>Heavy discharge with lower abdominal pain and fever</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Sexually Transmitted Infections (STIs)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chlamydia and gonorrhoea can change discharge colour, amount and smell.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Other Medical and Lifestyle Triggers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diabetes, which makes yeast infections more likely</li>
                <li>Long antibiotic or steroid use</li>
                <li>Weak immunity</li>
                <li>Poor intimate hygiene or over-washing</li>
                <li>Douching and scented products</li>
                <li>Tight synthetic underwear</li>
                <li>A retained tampon or foreign object</li>
                <li>Rarely, cervical or uterine conditions needing detailed evaluation</li>
              </ul>
            </div>

            {/* Section 4 — Normal Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge Symptoms: What Is Normal?
              </h2>

              <p className="mb-4 text-gray-700">
                Normal white discharge typically has these features.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Colour: clear, milky white or off-white</li>
                <li>Texture: thin, slightly sticky or stretchy</li>
                <li>Smell: none, or a very mild, non-offensive scent</li>
                <li>Amount: small to moderate, varying through the cycle</li>
                <li>No itching, burning, redness or pain</li>
                <li>No pelvic pain or fever</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How Normal Discharge Changes Through the Month
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>After your period: Little or no discharge; it may feel dry.</li>
                <li>Days leading to ovulation: Increasing, creamy or cloudy discharge.</li>
                <li>Ovulation: Clear, stretchy and slippery, like raw egg white.</li>
                <li>After ovulation: Thicker, stickier and less in amount.</li>
                <li>Before your period: Thicker and whiter, sometimes more in quantity.</li>
              </ul>

              <p className="text-gray-700">
                Knowing your own pattern helps you spot a real change quickly.
              </p>
            </div>

            {/* Section 5 — Abnormal Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge Symptoms: What Is Not Normal?
              </h2>

              <p className="mb-4 text-gray-700">
                Contact a doctor if your discharge shows any of these signs.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Changes in the Discharge Itself
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, lumpy or curd-like texture</li>
                <li>Frothy or bubbly appearance</li>
                <li>Yellow, green, grey or brown colour</li>
                <li>Blood-stained discharge between periods</li>
                <li>Sudden increase in quantity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Smell
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A strong fishy odour</li>
                <li>A foul or unpleasant smell that does not go away after washing</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Associated Discomfort
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Itching or burning in or around the vagina</li>
                <li>Redness, swelling or soreness of the vulva</li>
                <li>Pain or burning while passing urine</li>
                <li>Pain during intercourse</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                General Symptoms
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lower abdominal or pelvic pain</li>
                <li>Back pain</li>
                <li>Fever or chills</li>
                <li>Unusual tiredness or weakness</li>
              </ul>
            </div>

            {/* Section 6 — Quick Symptom Guide */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Different Causes Look: A Quick Symptom Guide
              </h2>

              <p className="mb-4 text-gray-700">
                This table-style guide is not a diagnosis, but it shows why
                testing matters.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yeast infection: thick and white, intense itching, little or no smell</li>
                <li>Bacterial vaginosis: thin and greyish, fishy smell, mild or no itching</li>
                <li>Trichomoniasis: frothy and yellow-green, strong smell, irritation</li>
                <li>Cervicitis: persistent discharge, spotting after intercourse</li>
                <li>PID: heavy discharge, pelvic pain, fever</li>
                <li>Normal hormonal change: milky or clear, no smell, no discomfort</li>
              </ul>

              <p className="text-gray-700">
                Many infections look alike. Only an examination and tests can
                tell them apart, and each needs different treatment.
              </p>
            </div>

            {/* Section 7 — Before Periods */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge Before Periods
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It is very common in the days before a period.</li>
                <li>Rising progesterone makes it thicker and creamier.</li>
                <li>It is usually odourless and painless.</li>
                <li>See a doctor if it is smelly, itchy or coloured.</li>
              </ul>
            </div>

            {/* Section 8 — Early Pregnancy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge in Early Pregnancy
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Increased milky discharge can be one of the earliest signs.</li>
                <li>It is usually thin, white and mild-smelling.</li>
                <li>It continues, and often increases, as pregnancy progresses.</li>
                <li>Itchy, smelly, green or yellow discharge needs a doctor&apos;s review.</li>
                <li>A sudden watery leak may be amniotic fluid and needs urgent attention.</li>
              </ul>
            </div>

            {/* Section 9 — Teenagers */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge in Teenagers and Young Girls
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It often starts before the first period.</li>
                <li>It is usually normal and a sign of hormonal maturity.</li>
                <li>Parents should reassure the girl and teach basic hygiene.</li>
                <li>Seek medical advice if it is coloured, smelly or uncomfortable.</li>
              </ul>
            </div>

            {/* Section 10 — Weakness or Back Pain */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can White Discharge Cause Weakness or Back Pain?
              </h2>

              <p className="text-gray-700">
                Normal discharge does not cause weakness. But if heavy,
                long-lasting discharge comes with tiredness, back pain or lower
                abdominal pain, an infection or another condition may be
                involved. Do not ignore it. A proper evaluation can find the
                real cause.
              </p>
            </div>

            {/* Section 11 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About White Discharge
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: All white discharge is a disease. Fact: Mild, odourless discharge is normal.</li>
                <li>Myth: It means you are weak or lack nutrition. Fact: It is usually hormonal or infection-related.</li>
                <li>Myth: It always means an STI. Fact: Most causes are not sexually transmitted.</li>
                <li>Myth: Unmarried women do not get it. Fact: It affects women of every age and marital status.</li>
                <li>Myth: Home remedies alone cure infections. Fact: Infections need correct medicines.</li>
              </ul>
            </div>

            {/* Section 12 — How Doctors Find Cause */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Doctors Find the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                A gynaecologist follows a clear process.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>History: Symptoms, periods, hygiene, medicines and sexual health</li>
                <li>Examination: Vaginal and cervical check, with your consent</li>
                <li>Tests (if needed): Swab, pH test, Pap smear, urine and blood tests</li>
                <li>Ultrasound: For pelvic pain or other findings</li>
                <li>Plan: Treatment based on the exact cause</li>
              </ul>
            </div>

            {/* Section 13 — Prevention */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Habits That Help Prevent Problems
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area with plain water or a mild wash.</li>
                <li>Avoid douching and scented products.</li>
                <li>Wear breathable cotton underwear and change it daily.</li>
                <li>Wipe from front to back.</li>
                <li>Change sanitary pads every 4 to 6 hours.</li>
                <li>Dry yourself well after bathing or swimming.</li>
                <li>Keep blood sugar under control.</li>
                <li>Avoid unnecessary antibiotics.</li>
                <li>Practise safe sex.</li>
                <li>Do not self-medicate.</li>
              </ul>
            </div>

            {/* Section 14 — When to See Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                Book a gynaecologist visit if you have:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge that changes colour, texture or smell</li>
                <li>Itching, burning or pain</li>
                <li>Symptoms lasting more than a few days</li>
                <li>Pelvic pain, fever or bleeding between periods</li>
                <li>Repeated infections</li>
                <li>Concerns about pregnancy or fertility</li>
                <li>Anxiety about whether your discharge is normal</li>
              </ul>
            </div>

            {/* Section 15 — Expert Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Expert Care at Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                center built on one philosophy: &quot;Her Health First.&quot;
                Your comfort, privacy and choices come first.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist known for
                empathetic, safe-motherhood focused care.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A caring female gynaecologist who listens first</li>
                <li>Private, respectful consultations</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Treatment based on the exact cause</li>
                <li>Complete women&apos;s health services in one place</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Do not let embarrassment stop you from getting answers. Book a
                private consultation today.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone / Appointments</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
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
                    <p className="font-semibold">Clinic Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh 244001
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
