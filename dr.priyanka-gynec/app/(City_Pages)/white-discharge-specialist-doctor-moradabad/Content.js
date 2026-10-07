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

export default function WhiteDischargeSpecialistMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for white discharge in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats it at Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is white discharge normal?",
      a: "Yes, if it is clear or milky, odourless and painless.",
    },
    {
      q: "When is white discharge a problem?",
      a: "When it is smelly, coloured, itchy, painful or lasts several days.",
    },
    {
      q: "What causes white discharge?",
      a: "Hormones, yeast or bacterial infections, diabetes and hygiene factors.",
    },
    {
      q: "What tests may be needed?",
      a: "A discharge swab, pH test, Pap smear, or urine and blood tests if required.",
    },
    {
      q: "Can it be cured?",
      a: "Infection-related discharge can be cured with correct treatment and follow-up.",
    },
    {
      q: "Is a female doctor available?",
      a: "Yes. Dr. Priyanka Pachauri is a female gynaecologist.",
    },
    {
      q: "Is it safe during pregnancy?",
      a: "Mild milky discharge is normal. Smelly or coloured discharge needs a doctor.",
    },
    {
      q: "Can I use home remedies?",
      a: "Hygiene helps, but infections need proper medicines. Avoid self-treatment.",
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
                White Discharge Specialist Doctor in Moradabad: Accurate Diagnosis and Caring Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Few health concerns cause as much quiet worry as white
                discharge. Women wonder whether it is normal, whether it is
                serious and whether they should see a doctor. Many stay silent
                for months.
              </p>

              <p className="text-gray-700">
                If you are looking for a white discharge specialist doctor in
                Moradabad, this guide will help you understand your symptoms and
                know when to get help. It also shows what proper care looks
                like.
              </p>
            </div>

            {/* Section 2 — Who Is Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a White Discharge Specialist?
              </h2>

              <p className="mb-4 text-gray-700">
                There is no separate degree for white discharge. The right
                doctor is a gynaecologist, a specialist in women&apos;s
                reproductive health, who regularly diagnoses and treats vaginal
                and cervical conditions.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Good Specialist Will
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Examine and test to find the exact cause</li>
                <li>Treat the cause, not just the symptom</li>
                <li>Explain your condition clearly</li>
                <li>Protect your privacy and comfort</li>
                <li>Help prevent the problem from returning</li>
              </ul>
            </div>

            {/* Section 3 — What Is White Discharge */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Exactly Is White Discharge?
              </h2>

              <p className="mb-4 text-gray-700">
                White discharge, or leucorrhea, is a fluid released from the
                vagina and cervix. It is made of mucus, vaginal fluid, healthy
                bacteria and shed cells.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It cleans the vagina by removing old cells and germs.</li>
                <li>It keeps tissues moist and comfortable.</li>
                <li>It supports a healthy, protective vaginal environment.</li>
                <li>It changes naturally through the month.</li>
              </ul>
            </div>

            {/* Section 4 — Normal vs Abnormal */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Your Discharge Normal? A Simple Guide
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs It Is Usually Normal
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear, white or milky colour</li>
                <li>Thin or slightly sticky texture</li>
                <li>No smell, or only a mild one</li>
                <li>No itching, burning or pain</li>
                <li>Changes with ovulation, periods, pregnancy or arousal</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs It May Need Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, curd-like, frothy or lumpy texture</li>
                <li>Yellow, green, grey or brown colour</li>
                <li>Strong fishy or foul smell</li>
                <li>Itching, burning, redness or swelling</li>
                <li>Pain in the lower abdomen or pelvis</li>
                <li>Pain during urination or intercourse</li>
                <li>Heavy discharge that soaks underwear</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Fever or unusual tiredness</li>
              </ul>
            </div>

            {/* Section 5 — Why Abnormal Happens */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Abnormal White Discharge Happen?
              </h2>

              <p className="mb-4 text-gray-700">
                Different causes produce different patterns. This is why a
                proper check matters.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Infections
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Candidiasis (yeast infection): thick, white and curdy with strong itching</li>
                <li>Bacterial vaginosis: thin, greyish and fishy-smelling</li>
                <li>Trichomoniasis: frothy, yellow-green and irritating</li>
                <li>Cervicitis: inflammation of the cervix, often with spotting</li>
                <li>Pelvic inflammatory disease: discharge with pelvic pain and fever</li>
                <li>Other sexually transmitted infections</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal and Natural Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Puberty and ovulation</li>
                <li>Pregnancy</li>
                <li>Hormonal contraceptives</li>
                <li>Stress and hormonal imbalance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle and Health Factors
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diabetes</li>
                <li>Weak immunity</li>
                <li>Long antibiotic or steroid use</li>
                <li>Douching or harsh intimate products</li>
                <li>Tight, damp or synthetic clothing</li>
                <li>Infrequent pad changes during periods</li>
                <li>A forgotten tampon or foreign object</li>
              </ul>
            </div>

            {/* Section 6 — Why Not Wait */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why You Should Not Wait or Self-Treat
              </h2>

              <p className="mb-4 text-gray-700">
                Many women rely on pharmacy creams, friends&apos; advice or
                online tips. This often backfires.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Different infections need different medicines.</li>
                <li>The wrong medicine can mask symptoms without curing the cause.</li>
                <li>Repeated self-treatment disturbs healthy vaginal bacteria.</li>
                <li>Infections can spread to the uterus and tubes.</li>
                <li>Untreated pelvic infection may affect fertility.</li>
                <li>A serious condition could go unnoticed.</li>
              </ul>

              <p className="text-gray-700">
                Early, correct treatment is usually simpler, shorter and less
                costly.
              </p>
            </div>

            {/* Section 7 — What Specialist Does Differently */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Specialist Does Differently
              </h2>

              <p className="mb-4 text-gray-700">
                Compare self-treatment with a proper consultation.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Self-treatment: Guessing the cause. Specialist: Identifies the cause through examination and tests.</li>
                <li>Self-treatment: One medicine for everything. Specialist: Matches medicine to the exact infection.</li>
                <li>Self-treatment: Stops when symptoms ease. Specialist: Confirms recovery at follow-up.</li>
                <li>Self-treatment: Ignores triggers. Specialist: Addresses diabetes, hygiene and partner factors.</li>
              </ul>
            </div>

            {/* Section 8 — About Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Trusted Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                center in Moradabad built on a simple philosophy: &quot;Her
                Health First.&quot; The clinic treats your comfort, choices and
                story as the centre of care. It listens first and then applies
                expertise and technology with empathy.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist known for
                empathetic, safe-motherhood focused care. Her work covers
                antenatal and postnatal care, high-risk pregnancy, menstrual
                disorders and laparoscopic gynaecological surgery.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Women Value Here
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A female gynaecologist who listens without judgment</li>
                <li>Private, respectful consultations</li>
                <li>Clear explanations in simple language</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Treatment matched to the exact cause</li>
                <li>Continuity of care, with your history remembered</li>
                <li>Complete women&apos;s health services in one place</li>
                <li>Families who recommend the clinic to each other</li>
              </ul>
            </div>

            {/* Section 9 — Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Consultation, Step by Step
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Welcome and Privacy
              </h3>

              <p className="mb-4 text-gray-700">
                Your concern is heard privately and respectfully.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Conversation
              </h3>

              <p className="mb-4 text-gray-700">
                Symptoms, duration, cycle, hygiene, medicines and medical
                history.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Examination (if needed)
              </h3>

              <p className="mb-4 text-gray-700">
                Gentle, explained step by step and only with your consent.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Tests (if needed)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge swab to identify the organism</li>
                <li>pH test</li>
                <li>Pap smear for cervical screening</li>
                <li>Urine test and blood sugar check</li>
                <li>Pelvic ultrasound if there is pain or another concern</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Diagnosis
              </h3>

              <p className="mb-4 text-gray-700">
                The cause is explained in plain words.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Treatment Plan
              </h3>

              <p className="text-gray-700">
                Medicines, hygiene advice and a follow-up date.
              </p>
            </div>

            {/* Section 10 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment is personalised. A few examples show how it varies.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antifungal tablets, creams or pessaries for yeast infection</li>
                <li>Antibiotics for bacterial vaginosis and other bacterial infections</li>
                <li>Anti-parasitic medicines for trichomoniasis</li>
                <li>Care for cervicitis or pelvic infection</li>
                <li>Partner treatment when the infection is sexually transmitted</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Addressing Underlying Factors
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood sugar control in diabetes</li>
                <li>Hormonal evaluation when cycles are irregular</li>
                <li>Review of contraceptive or medicine use</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Daily Care Guidance
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hygiene and clothing advice</li>
                <li>Diet and hydration tips</li>
                <li>Safe-sex counselling</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Follow-Up
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Review to confirm the infection has cleared</li>
                <li>A plan to prevent recurrence</li>
              </ul>
            </div>

            {/* Section 11 — Daily Habits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Daily Habits That Support Recovery and Prevention
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area, using plain water or a mild, unscented wash.</li>
                <li>Never douse or douche inside the vagina.</li>
                <li>Wear loose, breathable cotton underwear and change it daily.</li>
                <li>Wipe from front to back.</li>
                <li>Change sanitary pads every 4 to 6 hours.</li>
                <li>Dry yourself well after bathing or swimming.</li>
                <li>Change out of damp clothes promptly.</li>
                <li>Eat a balanced diet and drink enough water.</li>
                <li>Keep blood sugar under control.</li>
                <li>Avoid unnecessary antibiotics.</li>
                <li>Practise safe sex and urinate after intercourse.</li>
              </ul>
            </div>

            {/* Section 12 — Common Mistakes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mistakes Women Commonly Make
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Waiting too long because of embarrassment</li>
                <li>Using vaginal washes or douches</li>
                <li>Stopping medicine as soon as itching improves</li>
                <li>Buying creams on a friend&apos;s advice</li>
                <li>Ignoring recurrence</li>
                <li>Skipping the follow-up visit</li>
                <li>Assuming it will always &quot;settle on its own&quot;</li>
              </ul>
            </div>

            {/* Section 13 — When to See Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See the Doctor Without Delay
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Foul-smelling or coloured discharge</li>
                <li>Itching or burning that disturbs sleep or daily activities</li>
                <li>Lower abdominal or pelvic pain</li>
                <li>Fever or chills</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Pain during urination or intercourse</li>
                <li>Symptoms lasting more than a few days</li>
                <li>Repeated infections</li>
                <li>Unusual discharge during pregnancy</li>
                <li>A sudden watery leak in pregnancy (seek urgent care)</li>
              </ul>
            </div>

            {/* Section 14 — Special Situations */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Situations
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Milky, mild-smelling discharge often increases and is usually normal.</li>
                <li>Itchy, smelly or coloured discharge needs prompt medical review.</li>
                <li>Use only treatments approved by your doctor.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                When Planning a Baby
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Untreated infections like PID can affect the fallopian tubes.</li>
                <li>Early treatment protects fertility.</li>
                <li>The clinic&apos;s fertility and IVF services can evaluate you fully.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Teenagers
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge often begins before the first period and is usually normal.</li>
                <li>Seek advice if it is smelly, coloured or uncomfortable.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Menopause
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge is less common.</li>
                <li>Any new discharge or bleeding should be checked.</li>
              </ul>
            </div>

            {/* Section 15 — Complete Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                More Than White Discharge: Complete Women&apos;s Healthcare
              </h2>

              <p className="mb-4 text-gray-700">
                When you visit the clinic, you also have access to a wide range
                of services.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General gynaecology and 3D laparoscopy</li>
                <li>Fertility and IVF care</li>
                <li>Pregnancy and antenatal services</li>
                <li>Normal delivery support</li>
                <li>Menstrual disorder and PCOS care</li>
                <li>Diagnostic hysteroscopy and polyp treatment</li>
                <li>Paediatric care</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

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
