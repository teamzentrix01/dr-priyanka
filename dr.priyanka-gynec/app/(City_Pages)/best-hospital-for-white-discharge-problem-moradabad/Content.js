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

export default function BestHospitalWhiteDischargeMoradabad() {
  const faqs = [
    {
      q: "Which is the best hospital for white discharge in Moradabad?",
      a: "Choose one with an experienced gynaecologist, proper tests and privacy. Dr. Priyanka Gynaec is a trusted option.",
    },
    {
      q: "Do I need a big hospital for white discharge?",
      a: "Usually no. A good gynaecology clinic with the right tests can treat most cases.",
    },
    {
      q: "Which doctor treats white discharge?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats white discharge in Moradabad.",
    },
    {
      q: "Is white discharge always an infection?",
      a: "No. Mild, odourless discharge is normal. Colour, smell or itching changes need checking.",
    },
    {
      q: "What tests are done for white discharge?",
      a: "Common tests include a discharge swab, pH test, Pap smear, and urine or blood tests.",
    },
    {
      q: "Can white discharge be cured completely?",
      a: "Infection-related discharge can be cured with correct treatment and follow-up.",
    },
    {
      q: "Is a female doctor available?",
      a: "Yes. Dr. Priyanka Pachauri is a female gynaecologist known for compassionate care.",
    },
    {
      q: "Can I treat it at home?",
      a: "Hygiene helps, but infections need proper medicines. Avoid self-treatment.",
    },
    {
      q: "Does white discharge affect fertility?",
      a: "Normal discharge does not. Untreated infections like PID can, so early care matters.",
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
                Best Hospital for White Discharge Problem in Moradabad: How to Choose the Right Care
              </h1>

              <p className="mb-4 text-gray-700">
                If you have been searching for the best hospital for white
                discharge problem in Moradabad, you are not alone. White
                discharge is among the most common reasons women see a
                gynaecologist, yet many delay treatment because of
                embarrassment, fear or confusion about where to go.
              </p>

              <p className="mb-4 text-gray-700">
                The truth is simple: you do not need a large, crowded hospital
                to treat white discharge. You need the right doctor, correct
                tests, privacy and proper follow-up. This guide helps you choose
                wisely and shows what quality care looks like.
              </p>

              <p className="text-gray-700">
                Understanding White Discharge
              </p>

              <p className="mb-4 text-gray-700">
                White discharge (leucorrhea) is a whitish or milky fluid from
                the vagina. A small amount is normal. It keeps the vagina clean,
                moist and protected.
              </p>

              <p className="text-gray-700">
                It is usually normal when it:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Is clear to milky white</li>
                <li>Is thin or mildly sticky</li>
                <li>Has no strong smell</li>
                <li>Causes no itching or pain</li>
                <li>Increases around ovulation, before periods or in pregnancy</li>
              </ul>

              <p className="text-gray-700">
                It needs treatment when it:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Becomes thick, curdy, frothy, yellow, green or grey</li>
                <li>Has a foul or fishy smell</li>
                <li>Comes with itching, burning or redness</li>
                <li>Occurs with pain in the lower abdomen</li>
                <li>Is heavy, persistent or keeps returning</li>
                <li>Causes pain during urination or intercourse</li>
              </ul>
            </div>

            {/* Section 2 — Why Right Hospital Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why the Right Hospital or Clinic Matters
              </h2>

              <p className="mb-4 text-gray-700">
                White discharge looks like one problem, but it has many causes.
                Choosing the wrong place can mean the wrong medicine, repeated
                infections and wasted months.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wrong diagnosis: A yeast infection and a bacterial infection need different treatment.</li>
                <li>Incomplete treatment: Symptoms may fade while the infection stays.</li>
                <li>Repeated recurrence: The root cause is never addressed.</li>
                <li>Missed complications: Conditions like cervicitis or PID may go unnoticed.</li>
                <li>Embarrassment and stress: An uncomfortable setting stops women from speaking openly.</li>
              </ul>
            </div>

            {/* Section 3 — What Makes Best Hospital */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes the Best Hospital for White Discharge Treatment?
              </h2>

              <p className="mb-4 text-gray-700">
                Use this checklist when comparing places in Moradabad.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. A Qualified Gynaecologist
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A trained, experienced gynaecologist, ideally a female doctor</li>
                <li>A doctor who examines you personally rather than only prescribing over the phone</li>
                <li>Clear explanation of your diagnosis in simple words</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Proper Diagnostic Facilities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal swab or discharge tests</li>
                <li>pH testing</li>
                <li>Pap smear for cervical screening</li>
                <li>Ultrasound for pelvic pain or unclear causes</li>
                <li>Blood and urine tests when needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Privacy and Comfort
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Private consultation rooms</li>
                <li>Respectful, judgment-free staff</li>
                <li>Confidentiality of your records</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Cause-Based Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines matched to the exact infection</li>
                <li>No unnecessary antibiotics or long medicine lists</li>
                <li>Honest advice on what is and is not needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Follow-Up Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A review visit to confirm recovery</li>
                <li>Guidance to prevent recurrence</li>
                <li>Support if the problem keeps returning</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Easy Access
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A convenient location in Moradabad</li>
                <li>Simple booking by phone or WhatsApp</li>
                <li>Reasonable waiting times</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Trust and Reputation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Genuine patient testimonials</li>
                <li>Word-of-mouth recommendations</li>
                <li>Transparent, ethical practice</li>
              </ul>
            </div>

            {/* Section 4 — Hospital vs Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hospital vs Specialist Clinic: Which Is Better?
              </h2>

              <p className="mb-4 text-gray-700">
                Many women assume a bigger hospital means better treatment. For
                white discharge, that is not always true.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Large Multi-Specialty Hospital
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wide range of departments</li>
                <li>Useful for emergencies or complex multi-organ conditions</li>
                <li>Often longer waits and shorter consultations</li>
                <li>Less personal attention</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Dedicated Women&apos;s Health Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Focus on gynaecological care</li>
                <li>Longer, more personal consultations</li>
                <li>Doctor who knows your history</li>
                <li>Better privacy for sensitive concerns</li>
                <li>Easier follow-up</li>
              </ul>

              <p className="text-gray-700">
                For most white discharge problems, a dedicated gynaecology
                clinic with good diagnostics and an experienced doctor is an
                excellent choice.
              </p>
            </div>

            {/* Section 5 — About Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec: A Trusted Women&apos;s Health Center in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                center in Moradabad built on one idea: &quot;Her Health
                First.&quot; Your comfort, privacy and choices are at the centre
                of every consultation. The team listens first and then applies
                expert care with empathy and patience.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist known for
                compassionate, safe-motherhood focused care and for expertise
                across the stages of a woman&apos;s life.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Women Choose This Center for White Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A caring female gynaecologist who listens carefully</li>
                <li>Private, respectful consultations</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Treatment based on the exact cause, not guesswork</li>
                <li>Continuity of care, so your history is remembered</li>
                <li>Complete women&apos;s health services in one place</li>
                <li>A reputation built on families recommending the clinic</li>
              </ul>
            </div>

            {/* Section 6 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How White Discharge Is Diagnosed
              </h2>

              <p className="mb-4 text-gray-700">
                A proper diagnosis is the foundation of successful treatment.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed Conversation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Symptoms and how long you have had them</li>
                <li>Colour, smell and amount of discharge</li>
                <li>Menstrual and sexual history</li>
                <li>Medicines, hygiene habits and medical conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General and pelvic examination</li>
                <li>Check of the vagina and cervix, with your consent</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Tests When Required
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge swab to identify yeast, bacteria or parasites</li>
                <li>pH test</li>
                <li>Pap smear</li>
                <li>Urine and blood tests, including blood sugar</li>
                <li>Pelvic ultrasound if pain or other findings are present</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Clear Plan
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The cause is explained</li>
                <li>Treatment, duration and precautions are discussed</li>
                <li>A follow-up date is set</li>
              </ul>
            </div>

            {/* Section 7 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for White Discharge
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause. It is never one-size-fits-all.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antifungal tablets, creams or pessaries for yeast infections</li>
                <li>Antibiotics for bacterial vaginosis</li>
                <li>Anti-parasitic medicines for trichomoniasis</li>
                <li>Treatment for cervicitis or pelvic infections</li>
                <li>Partner treatment when the infection is sexually transmitted</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Treating Underlying Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood sugar control in diabetes</li>
                <li>Hormonal assessment where needed</li>
                <li>Evaluation of cervical or uterine problems</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hygiene and Lifestyle Guidance
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Safe intimate hygiene</li>
                <li>Clothing and underwear advice</li>
                <li>Dietary and general health tips</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Follow-Up and Prevention
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A review to confirm the infection has cleared</li>
                <li>Guidance to prevent recurrence</li>
              </ul>
            </div>

            {/* Section 8 — Warning Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Do Not Delay Your Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Visit a gynaecologist soon if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge with fever or lower abdominal pain</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Foul-smelling or coloured discharge</li>
                <li>Pain while urinating or during intercourse</li>
                <li>Symptoms lasting more than a few days</li>
                <li>Repeated infections despite treatment</li>
                <li>Unusual discharge during pregnancy</li>
                <li>A sudden watery leak in pregnancy (seek urgent care)</li>
              </ul>
            </div>

            {/* Section 9 — Home Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips That Support Treatment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area with plain water or a mild wash.</li>
                <li>Avoid douching and scented products.</li>
                <li>Wear breathable cotton underwear and change it daily.</li>
                <li>Wipe from front to back.</li>
                <li>Change sanitary pads every 4 to 6 hours.</li>
                <li>Complete the full course of medicines.</li>
                <li>Keep blood sugar controlled if you are diabetic.</li>
                <li>Drink enough water and eat a balanced diet.</li>
              </ul>
            </div>

            {/* Section 10 — Pregnancy and Fertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge in Pregnancy and Fertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild, milky discharge is common and usually normal.</li>
                <li>Itchy, smelly or coloured discharge needs medical review.</li>
                <li>Infections should be treated under a gynaecologist&apos;s guidance.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Fertility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Untreated infections like PID can damage the fallopian tubes.</li>
                <li>Early treatment protects your chances of conceiving.</li>
                <li>Women planning pregnancy can use the clinic&apos;s fertility services for a full evaluation.</li>
              </ul>
            </div>

            {/* Section 11 — Mistakes to Avoid */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mistakes to Avoid When Choosing Where to Go
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Choosing only by distance or advertising</li>
                <li>Relying on pharmacy staff for medicines</li>
                <li>Following random social media remedies</li>
                <li>Skipping tests to save money</li>
                <li>Stopping medicine as soon as symptoms improve</li>
                <li>Ignoring recurrence</li>
                <li>Feeling too embarrassed to ask questions</li>
              </ul>
            </div>

            {/* Section 12 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Your health should not wait. Book a private and caring
                consultation today.
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

            {/* Section 13 — FAQs */}
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
