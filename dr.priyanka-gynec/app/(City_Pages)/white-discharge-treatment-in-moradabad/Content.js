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

export default function WhiteDischargeTreatmentMoradabad() {
  const faqs = [
    {
      q: "Is white discharge normal?",
      a: "Yes, clear or white, odourless discharge is usually normal.",
    },
    {
      q: "When is white discharge a problem?",
      a: "When it smells bad, changes colour or texture, or causes itching or pain.",
    },
    {
      q: "What causes white discharge?",
      a: "Hormones, yeast or bacterial infections, STIs, cervical problems or irritants.",
    },
    {
      q: "Can white discharge be cured?",
      a: "Yes, infections are treatable once the cause is identified.",
    },
    {
      q: "Is it caused by weakness?",
      a: "No, weakness alone does not cause abnormal discharge.",
    },
    {
      q: "Can I treat it at home?",
      a: "Home remedies cannot treat infections, so see a doctor for abnormal discharge.",
    },
    {
      q: "Is white discharge common in pregnancy?",
      a: "Yes, but report any smell, itching, colour change or bleeding.",
    },
    {
      q: "Does white discharge affect fertility?",
      a: "Normal discharge does not, but untreated infections like PID can.",
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
                White Discharge Treatment in Moradabad: When It Is Normal, When It Is Not, and Who to See
              </h1>

              <p className="mb-4 text-gray-700">
                Many women quietly worry about white discharge. Is it normal? Is
                it an infection? Is it a sign of something serious? Because the
                topic feels embarrassing, women often delay seeing a doctor, or
                rely on home remedies and advice from friends.
              </p>

              <p className="text-gray-700">
                The truth is simple: some white discharge is completely normal,
                and some needs treatment. The key is knowing the difference.
                This guide explains the causes, warning signs and treatment
                options, and how Dr. Priyanka Pachauri at Dr. Priyanka Gynaec,
                Moradabad can help you with privacy, respect and clear answers.
              </p>
            </div>

            {/* Section 2 — What Is White Discharge */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is White Discharge (Leucorrhoea)?
              </h2>

              <p className="mb-4 text-gray-700">
                White discharge, medically called leucorrhoea, is a fluid
                released from the vagina. It is made up of cervical mucus,
                vaginal cells and normal bacteria.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Keeps the vagina clean and moist</li>
                <li>Helps protect against infection</li>
                <li>Changes in amount and texture during the menstrual cycle</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why It Is Not Always a Disease
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal discharge is a healthy, natural process</li>
                <li>It only becomes a problem when its colour, smell, texture or symptoms change</li>
              </ul>
            </div>

            {/* Section 3 — Normal vs Abnormal */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal vs Abnormal White Discharge
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs of Normal Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear, white or off-white in colour</li>
                <li>Thin, watery, creamy or slightly sticky</li>
                <li>Little or no odour</li>
                <li>No itching, burning or pain</li>
                <li>Increases around ovulation, before periods, during pregnancy and with sexual arousal</li>
                <li>May look slightly yellow when dry on underwear, without other symptoms</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs of Abnormal Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, curdy or cottage-cheese-like texture</li>
                <li>Grey, green, yellow or blood-stained colour</li>
                <li>Strong, fishy or foul smell</li>
                <li>Itching, burning or redness around the vagina</li>
                <li>Pain or burning while passing urine</li>
                <li>Pain during intercourse</li>
                <li>Lower abdominal pain</li>
                <li>Heavy, continuous discharge that soaks through underwear</li>
                <li>Discharge with fever</li>
              </ul>

              <p className="text-gray-700">
                If you have any abnormal sign, see a gynaecologist rather than
                self-treating.
              </p>
            </div>

            {/* Section 4 — Common Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of White Discharge
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Hormonal Changes (Normal)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation, when mucus becomes clear and stretchy</li>
                <li>Premenstrual days</li>
                <li>Pregnancy, which often increases discharge</li>
                <li>Use of hormonal contraceptives</li>
                <li>Puberty and breastfeeding</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Vaginal Yeast Infection (Candidiasis)
              </h3>

              <p className="mb-2 text-gray-700">Typical features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, white, curd-like discharge</li>
                <li>Intense itching and redness</li>
                <li>Burning during urination or intercourse</li>
                <li>Usually little or no smell</li>
              </ul>

              <p className="mb-2 text-gray-700">Risk factors:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diabetes</li>
                <li>Recent antibiotic use</li>
                <li>Pregnancy</li>
                <li>Tight, non-breathable clothing</li>
                <li>Weakened immunity</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Bacterial Vaginosis (BV)
              </h3>

              <p className="mb-2 text-gray-700">Typical features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thin, grey-white discharge</li>
                <li>Strong fishy smell, often stronger after intercourse</li>
                <li>Little itching</li>
              </ul>

              <p className="mb-2 text-gray-700">Why it happens:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>An imbalance of normal vaginal bacteria</li>
                <li>Douching and frequent use of vaginal washes can contribute</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Trichomoniasis
              </h3>

              <p className="mb-2 text-gray-700">Typical features:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Frothy, yellow-green discharge</li>
                <li>Foul smell</li>
                <li>Itching and discomfort while urinating</li>
                <li>Spread through sexual contact, so partner treatment is usually needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Other Sexually Transmitted Infections
              </h3>

              <p className="mb-2 text-gray-700">
                Examples include chlamydia and gonorrhoea:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>May cause unusual discharge, pelvic pain or burning urination</li>
                <li>Sometimes cause no symptoms at all</li>
                <li>Need testing and prompt treatment to prevent complications</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Cervical Conditions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cervicitis (inflammation of the cervix)</li>
                <li>Cervical ectropion (a common, usually harmless change on the cervix)</li>
                <li>Cervical polyps</li>
                <li>In some cases, persistent abnormal discharge needs screening to rule out serious conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Pelvic Inflammatory Disease (PID)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the uterus, tubes or ovaries</li>
                <li>Causes discharge, lower abdominal pain, fever and painful intercourse</li>
                <li>Needs prompt treatment to protect fertility</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Poor Hygiene or Irritants
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Scented soaps, vaginal washes and douches</li>
                <li>Harsh detergents on underwear</li>
                <li>Synthetic or tight underwear</li>
                <li>Not changing sanitary pads regularly</li>
                <li>Retained tampon or foreign object</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Other Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Allergic reactions to products</li>
                <li>Diabetes</li>
                <li>Weak immunity</li>
                <li>Menopause-related changes, which can cause dryness and discharge</li>
                <li>Rarely, cancers of the cervix or uterus, which is why persistent, unexplained or bloody discharge should always be examined</li>
              </ul>
            </div>

            {/* Section 5 — Weakness or Diet */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is White Discharge Linked to Weakness or Diet?
              </h2>

              <p className="mb-4 text-gray-700">
                Many women are told that white discharge is caused by
                &quot;weakness&quot; or &quot;heat in the body.&quot; Let us
                clarify.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is True
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Poor nutrition and anaemia can lower general health, but they do not directly cause leucorrhoea</li>
                <li>Uncontrolled diabetes can increase infection risk</li>
                <li>Stress and poor sleep can affect hormones</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Is a Myth
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Eating specific foods alone does not cause or cure abnormal discharge</li>
                <li>Home remedies cannot treat infections</li>
                <li>Constant or smelly discharge is not &quot;just weakness&quot;</li>
              </ul>

              <p className="text-gray-700">
                Bottom line: Do not ignore persistent symptoms by attributing
                them to weakness. Get examined.
              </p>
            </div>

            {/* Section 6 — When to See Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Gynaecologist?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Book an Appointment If
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge has a bad smell, new colour or thick, curdy texture</li>
                <li>You have itching, burning, pain or swelling</li>
                <li>Discharge persists for more than a week or keeps returning</li>
                <li>You have lower abdominal pain, fever or pain during intercourse</li>
                <li>Discharge is blood-stained or occurs after intercourse</li>
                <li>You are pregnant and notice any change in discharge</li>
                <li>You have bleeding after menopause with discharge</li>
                <li>Home remedies or over-the-counter products have not worked</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Seek Urgent Care If
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge comes with high fever and severe pelvic pain</li>
                <li>You are pregnant and notice a sudden gush of watery fluid</li>
                <li>You have heavy bleeding</li>
              </ul>
            </div>

            {/* Section 7 — Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Gynaecologist Diagnoses the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                A proper diagnosis prevents unnecessary medicines and repeated
                infections.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Happens at the Consultation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A private, respectful discussion of your symptoms</li>
                <li>Questions about your cycle, hygiene habits, contraception and sexual health</li>
                <li>A general and pelvic examination, when appropriate</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tests That May Be Advised
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal swab for microscopy and culture</li>
                <li>pH testing of vaginal fluid</li>
                <li>Urine tests to rule out urinary infection</li>
                <li>Pap smear or HPV testing, as recommended for cervical screening</li>
                <li>Tests for sexually transmitted infections</li>
                <li>Blood sugar tests if infections are recurrent</li>
                <li>Pelvic ultrasound when pain or other findings suggest it</li>
              </ul>
            </div>

            {/* Section 8 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for White Discharge
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment always depends on the cause. This is why
                self-medication often fails.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If Discharge Is Normal
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reassurance and education</li>
                <li>Simple hygiene advice</li>
                <li>No medicine needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Yeast Infection
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antifungal creams, vaginal tablets or oral tablets as prescribed</li>
                <li>Blood sugar control if diabetic</li>
                <li>Advice on breathable cotton underwear</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bacterial Vaginosis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Prescribed antibiotics, taken orally or applied in the vagina</li>
                <li>Avoiding douching</li>
                <li>Follow-up if symptoms return</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Trichomoniasis and Other STIs
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Specific antibiotics</li>
                <li>Treatment of the partner at the same time</li>
                <li>Avoiding intercourse until treatment is complete</li>
                <li>Follow-up testing</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Cervicitis or Cervical Problems
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Targeted medicines</li>
                <li>Treatment of cervical polyps or other findings when needed</li>
                <li>Regular screening as advised</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Inflammatory Disease
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A full course of antibiotics, sometimes with hospital care</li>
                <li>Partner treatment when appropriate</li>
                <li>Close follow-up to protect fertility</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Recurrent Infections
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Identifying triggers such as diabetes, antibiotic use or hygiene products</li>
                <li>Longer or repeated treatment plans</li>
                <li>Lifestyle and hygiene changes</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Important
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Complete the full course of medicine, even if symptoms improve</li>
                <li>Do not use leftover medicines or take antibiotics without advice</li>
                <li>Avoid vaginal creams or washes from the chemist without a diagnosis</li>
              </ul>
            </div>

            {/* Section 9 — Prevention */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Everyday Tips to Prevent Abnormal Discharge
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hygiene Habits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash the external genital area with plain water or a mild, unscented cleanser</li>
                <li>Avoid douching and internal vaginal washes</li>
                <li>Wipe from front to back after using the toilet</li>
                <li>Change sanitary pads every few hours</li>
                <li>Dry the area properly after bathing</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Clothing
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear breathable cotton underwear</li>
                <li>Avoid tight, synthetic clothing for long hours</li>
                <li>Change out of wet swimwear or gym clothes quickly</li>
                <li>Wash underwear with mild detergent and dry it fully in sunlight</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Control blood sugar if you are diabetic</li>
                <li>Eat a balanced diet and drink enough water</li>
                <li>Use protection during intercourse and stay in a mutually faithful relationship</li>
                <li>Take antibiotics only when prescribed</li>
                <li>Attend regular check-ups and cervical screening</li>
              </ul>
            </div>

            {/* Section 10 — Pregnancy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge During Pregnancy
              </h2>

              <p className="mb-4 text-gray-700">
                Increased white discharge is common in pregnancy because of
                rising hormones.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Usually Normal
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thin, milky, mild-smelling discharge</li>
                <li>No itching or pain</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See Your Doctor If
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It is thick, curdy, green, yellow or foul-smelling</li>
                <li>You have itching or burning</li>
                <li>It is blood-stained</li>
                <li>You suspect leaking of fluid</li>
                <li>You have abdominal pain or fever</li>
              </ul>

              <p className="text-gray-700">
                Infections during pregnancy should be treated promptly, as some
                can increase the risk of complications. Always use only
                medicines approved by your doctor.
              </p>
            </div>

            {/* Section 11 — Why Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec for White Discharge Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                antenatal and postnatal care, high-risk pregnancies,
                laparoscopic gynaecological surgery and menstrual disorder
                treatment. The clinic&apos;s philosophy is &quot;Her Health
                First.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What You Can Expect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A private, judgement-free consultation</li>
                <li>Time to explain your symptoms comfortably</li>
                <li>Clear diagnosis rather than guesswork</li>
                <li>Safe, evidence-based treatment</li>
                <li>Honest advice about prevention and follow-up</li>
                <li>Continuity of care for related concerns</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other Services Available at the Clinic
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Menstrual disorder and PCOS treatment</li>
                <li>Antenatal and postnatal care</li>
                <li>Fertility and IVF</li>
                <li>Diagnostic hysteroscopy and polypectomy</li>
                <li>3D laparoscopic gynaecological surgery</li>
                <li>3D/4D ultrasound (Voluson E22 series)</li>
                <li>Paediatric consultations and vaccinations</li>
              </ul>
            </div>

            {/* Section 12 — Do Not Feel Embarrassed */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Do Not Feel Embarrassed: Your Doctor Has Heard It All
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Reminders
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal discharge is a common reason for gynaecology visits</li>
                <li>Doctors treat it as routine medical care</li>
                <li>Early treatment is easier and more effective</li>
                <li>Delay can lead to recurring infections or complications</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                To Prepare for Your Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Note when the discharge started and how it looks and smells</li>
                <li>Avoid douching or vaginal products for a day or two before the visit, unless advised otherwise</li>
                <li>Mention all medicines you take</li>
                <li>Write down your questions</li>
              </ul>
            </div>

            {/* Section 13 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation Today
              </h2>

              <p className="mb-6 text-black">
                If you are worried about discharge, itching or odour, do not
                wait. A short consultation can bring clarity and relief.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Contact Dr. Priyanka Gynaec, Moradabad</p>
                    <p className="text-black">Doctor: Dr. Priyanka Pachauri</p>
                  </div>
                </div>

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
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-black">@dr.priyanka.gynae</p>
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
