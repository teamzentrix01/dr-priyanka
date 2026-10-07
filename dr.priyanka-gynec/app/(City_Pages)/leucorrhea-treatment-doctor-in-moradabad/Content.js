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

export default function LeucorrheaTreatmentDoctorMoradabad() {
  const faqs = [
    {
      q: "What is leucorrhea?",
      a: "It is a whitish or yellowish vaginal discharge. It can be normal or a sign of infection.",
    },
    {
      q: "Which doctor treats leucorrhea in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri at Gandhi Nagar, Moradabad, treats leucorrhea and related issues.",
    },
    {
      q: "Is leucorrhea always a disease?",
      a: "No. Mild, odourless discharge is normal, but a change in colour, smell or itching needs checking.",
    },
    {
      q: "Can leucorrhea be cured completely?",
      a: "Yes, infection-related leucorrhea can be cured with the right diagnosis, treatment and follow-up.",
    },
    {
      q: "How long does leucorrhea treatment take?",
      a: "It often takes a few days to a couple of weeks, depending on the cause.",
    },
    {
      q: "Can leucorrhea cause weakness?",
      a: "Heavy, long-lasting discharge can come with tiredness. A doctor should check the cause.",
    },
    {
      q: "Is leucorrhea linked to infertility?",
      a: "Normal leucorrhea is not. Untreated infections like PID can affect fertility.",
    },
    {
      q: "Can I use home remedies for leucorrhea?",
      a: "Good hygiene helps, but infections need proper medicines. Avoid self-treatment.",
    },
    {
      q: "Is leucorrhea common in pregnancy?",
      a: "Yes. Increased mild, milky discharge can be normal, but abnormal symptoms need review.",
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
                Leucorrhea Treatment Doctor in Moradabad: Expert Diagnosis, Safe Treatment &amp; Lasting Relief
              </h1>

              <p className="mb-4 text-gray-700">
                Leucorrhea is a very common women&apos;s health concern, yet many
                women suffer in silence for months or even years. They feel shy,
                they try home remedies, or they assume it will &quot;go away on
                its own.&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Sometimes it does. But often it does not. When leucorrhea is
                caused by an infection or another underlying condition, delay
                can lead to discomfort, repeated infections and, in some cases,
                complications.
              </p>

              <p className="text-gray-700">
                What Is Leucorrhea?
              </p>

              <p className="mb-4 text-gray-700">
                Leucorrhea (also spelled leucorrhoea) is a whitish, yellowish or
                milky vaginal discharge. A small amount is a healthy, normal
                function of the female reproductive system. It becomes a problem
                when the amount, colour, smell or consistency changes, or when
                it comes with other symptoms.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Physiological leucorrhea: The normal type, caused by hormones, usually harmless.</li>
                <li>Pathological leucorrhea: The abnormal type, caused by infection or disease, which needs medical treatment.</li>
              </ul>

              <p className="text-gray-700">
                The aim of consulting a doctor is to find out which type you
                have and treat the exact cause.
              </p>
            </div>

            {/* Section 2 — Types */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Leucorrhea
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Physiological (Normal) Leucorrhea
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Appears at puberty</li>
                <li>Increases around ovulation</li>
                <li>Rises during pregnancy</li>
                <li>Increases before periods</li>
                <li>Clear to milky, with no foul smell</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pathological (Abnormal) Leucorrhea
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, curdy, frothy or watery</li>
                <li>Yellow, green or grey in colour</li>
                <li>Foul or fishy odour</li>
                <li>Accompanied by itching, pain or burning</li>
                <li>Persistent or recurring</li>
              </ul>
            </div>

            {/* Section 3 — Symptoms */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms of Leucorrhea That Need Medical Attention
              </h2>

              <p className="mb-4 text-gray-700">
                You should consult a gynaecologist if you experience:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy discharge that soaks your underwear</li>
                <li>Thick, white, cottage-cheese-like discharge</li>
                <li>Yellow, green or brown discharge</li>
                <li>Strong or unpleasant smell</li>
                <li>Itching, burning or irritation in the vaginal area</li>
                <li>Pain or burning while passing urine</li>
                <li>Pain during intercourse</li>
                <li>Lower abdominal or back pain</li>
                <li>Spotting between periods or after intercourse</li>
                <li>Fever, weakness or fatigue along with discharge</li>
                <li>Symptoms that return again and again</li>
              </ul>
            </div>

            {/* Section 4 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Causes of Leucorrhea
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment works best when the cause is correctly identified.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Infectious Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Candidiasis (yeast infection): thick, white discharge with itching</li>
                <li>Bacterial vaginosis: thin, greyish discharge with a fishy smell</li>
                <li>Trichomoniasis: frothy, yellow-green discharge</li>
                <li>Cervicitis: inflammation of the cervix</li>
                <li>Pelvic inflammatory disease (PID): infection of the uterus, tubes or ovaries</li>
                <li>Sexually transmitted infections (STIs)</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal and Physiological Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Puberty, ovulation and pregnancy</li>
                <li>Hormonal contraceptive pills</li>
                <li>Hormonal imbalance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle and Hygiene Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Poor intimate hygiene</li>
                <li>Excessive washing or douching</li>
                <li>Tight synthetic clothing</li>
                <li>Unchanged sanitary pads for long hours</li>
                <li>Chemical soaps and scented products</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diabetes, which raises the risk of yeast infections</li>
                <li>Weak immunity</li>
                <li>Long-term antibiotic or steroid use</li>
                <li>Cervical polyps or other cervical conditions</li>
                <li>Retained foreign object such as a tampon</li>
              </ul>
            </div>

            {/* Section 5 — Why Not Self-Treat */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why You Should Not Self-Treat Leucorrhea
              </h2>

              <p className="mb-4 text-gray-700">
                Many women rely on pharmacy creams, herbal remedies or advice
                from friends. This is risky for several reasons.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The wrong medicine can hide symptoms without curing the infection.</li>
                <li>Incomplete treatment makes infections come back stronger.</li>
                <li>Unnecessary antibiotics can disturb healthy vaginal bacteria.</li>
                <li>Serious conditions may be missed or delayed.</li>
                <li>Different infections need different medicines.</li>
              </ul>

              <p className="text-gray-700">
                A correct diagnosis is the foundation of successful leucorrhea
                treatment.
              </p>
            </div>

            {/* Section 6 — About Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri, Leucorrhea Treatment Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                At Dr. Priyanka Gynaec, care is built around one idea:
                &quot;Her Health First.&quot; Your comfort, privacy and choices
                are placed at the centre of every consultation.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a trusted gynaecologist in Moradabad.
                She is known for compassionate, patient-first treatment and for
                expertise in women&apos;s health across all life stages.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Patients Can Expect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A female doctor who listens carefully and explains clearly</li>
                <li>Private, judgment-free consultations</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Treatment plans based on your exact cause</li>
                <li>Follow-up care to prevent recurrence</li>
                <li>Complete women&apos;s health services under one roof</li>
              </ul>
            </div>

            {/* Section 7 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How the Doctor Diagnoses Leucorrhea
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Detailed Consultation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your symptoms and their duration</li>
                <li>Colour, smell and quantity of discharge</li>
                <li>Menstrual and sexual history</li>
                <li>Medicines, hygiene habits and medical conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Clinical Examination
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>General and pelvic examination</li>
                <li>Check of the vaginal walls and cervix</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Investigations (When Needed)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal swab or discharge test</li>
                <li>pH test</li>
                <li>Pap smear for cervical screening</li>
                <li>Urine examination</li>
                <li>Blood sugar and other blood tests</li>
                <li>Pelvic ultrasound for pain or other findings</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Clear Diagnosis and Plan
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The exact cause is identified</li>
                <li>You receive a plan with the treatment, the duration and what to avoid</li>
              </ul>
            </div>

            {/* Section 8 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Leucorrhea Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment is customised to the cause. It is not
                one-size-fits-all.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Medical Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antifungal tablets, creams or vaginal pessaries for yeast infections</li>
                <li>Antibiotics for bacterial vaginosis and other bacterial infections</li>
                <li>Anti-parasitic medicines for trichomoniasis</li>
                <li>Treatment for cervicitis or PID</li>
                <li>Partner treatment when an infection is sexually transmitted</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Treating the Underlying Condition
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood sugar control in diabetic patients</li>
                <li>Hormonal assessment and balancing</li>
                <li>Management of cervical or uterine problems after evaluation</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Lifestyle and Hygiene Correction
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Safe intimate hygiene practices</li>
                <li>Clothing and underwear advice</li>
                <li>Dietary guidance for general health</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Follow-Up and Prevention
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A review visit to confirm recovery</li>
                <li>Guidance to prevent recurrence</li>
                <li>Repeat testing in stubborn or recurring cases</li>
              </ul>
            </div>

            {/* Section 9 — Home Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care Tips That Support Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                These tips support treatment but are not a replacement for it.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash the outer genital area only, using plain water or a mild wash.</li>
                <li>Avoid douching or putting products inside the vagina.</li>
                <li>Wear loose, breathable cotton underwear.</li>
                <li>Change underwear daily and keep the area dry.</li>
                <li>Wipe from front to back.</li>
                <li>Change sanitary pads every 4 to 6 hours.</li>
                <li>Avoid scented soaps, sprays and powders.</li>
                <li>Complete the full course of medicines, even if you feel better.</li>
                <li>Drink plenty of water and eat a balanced diet.</li>
                <li>Avoid intercourse during treatment if your doctor advises it.</li>
                <li>Keep blood sugar controlled if you have diabetes.</li>
              </ul>
            </div>

            {/* Section 10 — Pregnancy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Leucorrhea During Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Discharge often increases in pregnancy, but it needs careful
                watching.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild, milky, odourless discharge is usually normal.</li>
                <li>Itchy, smelly, coloured or frothy discharge needs a doctor&apos;s check.</li>
                <li>Watery leakage may suggest a leak of amniotic fluid and needs urgent attention.</li>
                <li>Infections should be treated under a gynaecologist&apos;s supervision, with medicines safe for pregnancy.</li>
              </ul>

              <p className="text-gray-700">
                Dr. Priyanka&apos;s clinic offers complete antenatal care and
                delivery services, so you get continuous care from one trusted
                team.
              </p>
            </div>

            {/* Section 11 — Fertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Leucorrhea and Fertility
              </h2>

              <p className="mb-4 text-gray-700">
                Leucorrhea is often harmless, but untreated infections can
                affect reproductive health.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Repeated infections can inflame the cervix and uterus.</li>
                <li>Untreated PID can damage the fallopian tubes.</li>
                <li>Tubal damage is one cause of difficulty in conceiving.</li>
                <li>Timely treatment protects your chances of a healthy pregnancy.</li>
              </ul>

              <p className="text-gray-700">
                Women trying to conceive can also use the clinic&apos;s fertility
                services for a complete evaluation.
              </p>
            </div>

            {/* Section 12 — Recurrence */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can Leucorrhea Come Back After Treatment?
              </h2>

              <p className="mb-4 text-gray-700">
                Yes, it can. Recurrence is common when the root cause is not
                fully addressed. To lower the risk:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Finish the full course of treatment</li>
                <li>Attend follow-up appointments</li>
                <li>Treat your partner if advised</li>
                <li>Maintain good hygiene</li>
                <li>Control diabetes and other medical conditions</li>
                <li>Avoid unnecessary antibiotics</li>
                <li>Report symptoms early rather than waiting</li>
              </ul>
            </div>

            {/* Section 13 — When to Book */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Book an Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation with a leucorrhea treatment doctor in
                Moradabad if:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge has changed in colour, smell or amount</li>
                <li>Symptoms continue for more than a few days</li>
                <li>Home remedies are not working</li>
                <li>The problem keeps coming back</li>
                <li>You have pain, fever or bleeding along with discharge</li>
                <li>You are pregnant or planning pregnancy</li>
              </ul>
            </div>

            {/* Section 14 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Your health should never wait because of hesitation. Book a
                private and caring consultation today.
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

            {/* Section 14 — FAQs */}
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
