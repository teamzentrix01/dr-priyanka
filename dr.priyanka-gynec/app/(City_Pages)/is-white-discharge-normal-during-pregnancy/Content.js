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

export default function WhiteDischargePregnancyMoradabad() {
  const faqs = [
    {
      q: "Is white discharge normal during pregnancy?",
      a: "Yes, milky, thin, mild-smelling discharge is normal and often increases during pregnancy.",
    },
    {
      q: "Is white discharge an early sign of pregnancy?",
      a: "It can be, but only a pregnancy test confirms pregnancy.",
    },
    {
      q: "Why does discharge increase in pregnancy?",
      a: "Higher oestrogen and more pelvic blood flow raise vaginal secretions.",
    },
    {
      q: "When is discharge abnormal in pregnancy?",
      a: "When it is green, yellow, foul-smelling, itchy, bloody or watery.",
    },
    {
      q: "Is thick white discharge in pregnancy normal?",
      a: "Mild thick discharge can be normal. Curdy discharge with itching suggests a yeast infection.",
    },
    {
      q: "How can I tell discharge from amniotic fluid?",
      a: "Amniotic fluid is watery and constant. Discharge is thicker and milky. Call your doctor if unsure.",
    },
    {
      q: "Can discharge harm my baby?",
      a: "Normal discharge does not. Untreated infections can, so see a doctor early.",
    },
    {
      q: "Can I use home remedies or creams?",
      a: "No. Use only treatment your doctor recommends in pregnancy.",
    },
    {
      q: "Does discharge increase before labour?",
      a: "Yes. You may lose the mucus plug, which can look thick and slightly bloody.",
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
                Is White Discharge Normal During Pregnancy? What Every Expecting Mother Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy changes almost everything about your body, including
                something many women do not expect: a noticeable increase in
                vaginal discharge. Many expecting mothers see more white or
                milky fluid and immediately worry. Is it an infection? Is the
                baby safe?
              </p>

              <p className="mb-4 text-gray-700">
                The short answer is reassuring. In most cases, white discharge
                during pregnancy is completely normal. But some changes in
                colour, smell, texture or amount can signal a problem that needs
                prompt attention.
              </p>

              <p className="text-gray-700">
                What Is White Discharge in Pregnancy?
              </p>

              <p className="mb-4 text-gray-700">
                White discharge in pregnancy is medically called leucorrhea of
                pregnancy. It is a thin, milky and mild-smelling fluid produced
                by the vagina and cervix.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It is a normal part of pregnancy for most women.</li>
                <li>It can begin as early as the first weeks, even before a missed period.</li>
                <li>It usually continues, and often increases, until delivery.</li>
                <li>It helps protect the birth canal from infection.</li>
              </ul>
            </div>

            {/* Section 2 — Why It Increases */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Discharge Increase During Pregnancy?
              </h2>

              <p className="mb-4 text-gray-700">
                Several natural changes in your body explain this.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rising oestrogen: Higher hormone levels stimulate the cervix and vagina to produce more fluid.</li>
                <li>Increased blood flow: More blood circulates to the pelvic area, increasing secretions.</li>
                <li>Softening of vaginal and cervical tissues: The body prepares for childbirth.</li>
                <li>Protection of the baby: Extra discharge forms a defence against germs travelling to the uterus.</li>
                <li>Cervical mucus changes: A mucus plug gradually forms to seal the cervix.</li>
              </ul>

              <p className="text-gray-700">
                In short, the increase is not a disease. It is your body
                protecting your pregnancy.
              </p>
            </div>

            {/* Section 3 — Early Pregnancy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is White Discharge Normal in Early Pregnancy?
              </h2>

              <p className="mb-4 text-gray-700">
                Yes. For many women, increased discharge is one of the earliest
                signs of pregnancy.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Typical Early Pregnancy Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thin and milky white</li>
                <li>Slightly sticky or watery</li>
                <li>Mild smell, or none</li>
                <li>No itching or burning</li>
                <li>Gradually increasing in amount</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Keep in Mind
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some women notice little change, and that is also normal.</li>
                <li>Discharge alone cannot confirm pregnancy. A pregnancy test is needed.</li>
                <li>Light spotting in very early pregnancy can happen, but always mention it to your doctor.</li>
              </ul>
            </div>

            {/* Section 4 — Second and Third Trimester */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge in the Second and Third Trimesters
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge often stays steady or increases further.</li>
                <li>It remains milky, thin and mild-smelling.</li>
                <li>Yeast infections become more common during this stage.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge is usually at its heaviest.</li>
                <li>Many women need a panty liner for comfort.</li>
                <li>Near the end, you may notice thicker mucus.</li>
                <li>Closer to labour, you may lose the mucus plug, which can look thick, jelly-like and clear, pink or slightly bloody.</li>
                <li>This &quot;show&quot; can happen days or hours before labour starts, so tell your doctor.</li>
              </ul>
            </div>

            {/* Section 5 — Normal Checklist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal White Discharge in Pregnancy: Quick Checklist
              </h2>

              <p className="mb-4 text-gray-700">
                Your discharge is likely normal if it is:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear, white or milky</li>
                <li>Thin and not lumpy</li>
                <li>Odourless or only mildly scented</li>
                <li>Free from itching, burning or redness</li>
                <li>Not accompanied by pain, fever or bleeding</li>
                <li>Gradually increasing, without sudden changes</li>
              </ul>
            </div>

            {/* Section 6 — Warning Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: When White Discharge Is Not Normal
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor promptly if your discharge shows any of
                these signs.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Changes in Colour and Texture
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yellow, green or grey discharge</li>
                <li>Thick, lumpy, cottage-cheese-like discharge</li>
                <li>Frothy or bubbly discharge</li>
                <li>Pink, brown or blood-stained discharge</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Changes in Smell
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A strong fishy smell</li>
                <li>A foul or unpleasant odour</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Associated Symptoms
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Itching, burning or irritation in the vagina</li>
                <li>Redness or swelling of the vulva</li>
                <li>Pain or burning while passing urine</li>
                <li>Pain during intercourse</li>
                <li>Lower abdominal pain or cramps</li>
                <li>Fever or chills</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Urgent Warning Signs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden gush or steady trickle of watery fluid</li>
                <li>Heavy bleeding</li>
                <li>Regular tightening or contractions before 37 weeks</li>
                <li>Reduced baby movements</li>
              </ul>
            </div>

            {/* Section 7 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Causes of Abnormal Discharge in Pregnancy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Yeast Infection (Candidiasis)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Very common during pregnancy because of hormonal changes</li>
                <li>Thick, white, curd-like discharge with intense itching</li>
                <li>Needs treatment safe for pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Bacterial Vaginosis (BV)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Caused by an imbalance of vaginal bacteria</li>
                <li>Thin, greyish discharge with a fishy smell</li>
                <li>Should be treated, because it may be linked to pregnancy complications</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Trichomoniasis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A sexually transmitted parasitic infection</li>
                <li>Frothy, yellow-green discharge and irritation</li>
                <li>Needs medical treatment</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Other Sexually Transmitted Infections
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chlamydia and gonorrhoea may cause unusual discharge</li>
                <li>Early testing and treatment protect mother and baby</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Urinary Tract Infection
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning urine, frequent urination and discomfort</li>
                <li>Often mistaken for discharge problems</li>
                <li>Needs prompt treatment in pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Leaking Amniotic Fluid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Watery, clear, odourless fluid that does not stop</li>
                <li>Can feel like a sudden gush or a constant trickle</li>
                <li>A medical urgency, especially before 37 weeks</li>
              </ul>
            </div>

            {/* Section 8 — Discharge vs Amniotic Fluid */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Tell Discharge from Leaking Amniotic Fluid
              </h2>

              <p className="mb-4 text-gray-700">
                This is a common worry in the later months.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thicker, milky or creamy</li>
                <li>Comes in small amounts</li>
                <li>Has a mild smell</li>
                <li>Varies through the day</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible Amniotic Fluid Leak
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thin and watery, like clear water</li>
                <li>Often odourless, or slightly sweet-smelling</li>
                <li>Soaks through underwear or pads</li>
                <li>Continues even when you lie down or change position</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Do
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Do not wait to see if it settles.</li>
                <li>Note the time and colour.</li>
                <li>Call your doctor or go to the clinic or hospital immediately.</li>
              </ul>
            </div>

            {/* Section 9 — Why Infections Matter */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Infections During Pregnancy Should Not Be Ignored
              </h2>

              <p className="mb-4 text-gray-700">
                Most infections are treatable, but ignoring them has risks.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infections can travel upward towards the uterus.</li>
                <li>Untreated infections may be linked to preterm labour or early rupture of membranes in some cases.</li>
                <li>Symptoms such as itching and discomfort can seriously disturb your daily life.</li>
                <li>Early treatment is usually simple and safe.</li>
              </ul>

              <p className="text-gray-700">
                The goal is not to scare you. It is to encourage you to speak up
                early so a doctor can protect you and your baby.
              </p>
            </div>

            {/* Section 10 — Self-Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Self-Care Tips for Normal Pregnancy Discharge
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area with plain water or a mild, unscented wash.</li>
                <li>Never douche. It disturbs healthy bacteria and may cause harm.</li>
                <li>Wear loose, breathable cotton underwear and change it daily.</li>
                <li>Use panty liners if needed, and change them often.</li>
                <li>Avoid tampons, scented pads, sprays and powders.</li>
                <li>Wipe from front to back.</li>
                <li>Dry the area well after bathing.</li>
                <li>Drink enough water and eat a balanced diet.</li>
                <li>Keep blood sugar under control if you have diabetes.</li>
                <li>Include curd or other probiotic foods only if your doctor agrees.</li>
              </ul>
            </div>

            {/* Section 11 — What Not to Do */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Not to Do
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Do not use any vaginal cream or pessary without your doctor&apos;s advice.</li>
                <li>Do not take antibiotics or antifungals on a friend&apos;s or chemist&apos;s advice.</li>
                <li>Do not ignore itching, smell or colour changes.</li>
                <li>Do not use harsh soaps, antiseptic liquids or home remedies inside the vagina.</li>
                <li>Do not delay a visit because you feel shy or embarrassed.</li>
              </ul>
            </div>

            {/* Section 12 — Doctor Evaluation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Your Doctor Evaluates Discharge in Pregnancy
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Conversation: Symptoms, duration, pregnancy week and history</li>
                <li>Examination: Gentle, only where needed, with your consent</li>
                <li>Swab test: To identify yeast, bacteria or parasites</li>
                <li>Urine test: To rule out a urinary infection</li>
                <li>Ultrasound: To check the baby, fluid levels and cervix when advised</li>
                <li>Treatment: Medicines that are safe for pregnancy</li>
                <li>Follow-up: To confirm the infection has cleared</li>
              </ul>
            </div>

            {/* Section 13 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options in Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause and must always be chosen by a
                doctor.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy-safe antifungal treatment for yeast infections</li>
                <li>Suitable antibiotics for bacterial vaginosis or other infections</li>
                <li>Treatment of urinary infections</li>
                <li>Care for any threatened early labour or fluid leakage</li>
                <li>Hygiene and lifestyle guidance</li>
                <li>Regular antenatal monitoring</li>
              </ul>
            </div>

            {/* Section 14 — Why Choose Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Pregnancy Care in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health center in Moradabad
                built on one idea: &quot;Her Health First.&quot; Your comfort,
                your choices and your story are at the centre of care.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist known for
                empathetic, safe-motherhood focused care, including antenatal
                and postnatal care and high-risk pregnancy management.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What You Can Expect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A caring female gynaecologist who listens first</li>
                <li>Structured antenatal check-ups throughout pregnancy</li>
                <li>3D and 4D ultrasound support</li>
                <li>Care for high-risk pregnancy needs</li>
                <li>Gentle support towards normal delivery</li>
                <li>Private, respectful consultations</li>
                <li>One trusted team from your first scan to delivery</li>
              </ul>
            </div>

            {/* Section 15 — When to Call */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Call Your Doctor: Quick Summary
              </h2>

              <p className="mb-4 text-gray-700">
                Call or visit if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge that is green, yellow, grey or foul-smelling</li>
                <li>Itching, burning or pain</li>
                <li>Blood-stained discharge</li>
                <li>A sudden watery leak</li>
                <li>Lower abdominal pain, fever or contractions</li>
                <li>Reduced baby movements</li>
                <li>Any change that worries you, even if you are unsure</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Do not wait or worry alone. Book a private, caring consultation
                today.
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
