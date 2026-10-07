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

export default function StopWhiteDischargePermanently() {
  const faqs = [
    {
      q: "Can white discharge be stopped permanently?",
      a: "Normal discharge cannot and should not stop. Infection-related discharge can be cured with proper treatment.",
    },
    {
      q: "Why does white discharge keep coming back?",
      a: "Usually the cause was not treated fully, or triggers like diabetes or poor hygiene continue.",
    },
    {
      q: "Do home remedies cure white discharge?",
      a: "No. They may support hygiene, but infections need proper medicines.",
    },
    {
      q: "Which doctor treats white discharge?",
      a: "A gynaecologist. Dr. Priyanka Pachauri treats it in Moradabad.",
    },
    {
      q: "How long does treatment take?",
      a: "Often a few days to two weeks, depending on the cause.",
    },
    {
      q: "Should I stop treatment when symptoms improve?",
      a: "No. Complete the full course so the infection does not return.",
    },
    {
      q: "Does diet affect white discharge?",
      a: "Yes, balanced eating, hydration and limiting excess sugar help prevent infections.",
    },
    {
      q: "Is white discharge normal?",
      a: "Yes, if it is clear or milky, odourless and painless.",
    },
    {
      q: "Is it safe to use medicines in pregnancy?",
      a: "Only use medicines prescribed by your doctor during pregnancy.",
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
                How to Stop White Discharge Permanently: What Really Works
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;How do I stop white discharge permanently?&quot; is one of
                the most common questions women ask. Many have tried home
                remedies, pharmacy medicines or social media tips, only to see
                the problem return again and again.
              </p>

              <p className="mb-4 text-gray-700">
                Here is the honest answer, and it helps to hear it early: normal
                white discharge cannot, and should not, be stopped completely.
                It is a healthy function of your body. But abnormal white
                discharge caused by infection or another condition can be
                treated effectively, and recurrence can be greatly reduced.
              </p>

              <p className="text-gray-700">
                First, Understand: Normal vs Abnormal Discharge
              </p>

              <p className="mb-4 text-gray-700">
                Before trying to &quot;stop&quot; anything, know what you are
                dealing with.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Discharge (No Treatment Needed)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear to milky white</li>
                <li>Thin or mildly sticky</li>
                <li>Odourless or mild-smelling</li>
                <li>No itching, burning or pain</li>
                <li>Changes with your cycle, ovulation and pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Abnormal Discharge (Needs Treatment)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, curdy, frothy, yellow, green or grey</li>
                <li>Foul or fishy smell</li>
                <li>Itching, burning or redness</li>
                <li>Lower abdominal pain</li>
                <li>Heavy, persistent or recurring</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Key point:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal discharge is protection. Trying to stop it can harm your natural balance.</li>
                <li>Abnormal discharge is a symptom. The goal is to treat the cause.</li>
              </ul>
            </div>

            {/* Section 2 — Why It Keeps Coming Back */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why White Discharge Keeps Coming Back
              </h2>

              <p className="mb-4 text-gray-700">
                Recurrence is frustrating, and it usually has a reason.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The real cause was never diagnosed.</li>
                <li>Treatment was incomplete or stopped too early.</li>
                <li>Wrong or unnecessary medicines were used.</li>
                <li>A partner with an infection was not treated.</li>
                <li>Diabetes or weak immunity was not controlled.</li>
                <li>Hygiene habits keep irritating the area.</li>
                <li>Tight or damp clothing creates a perfect environment for germs.</li>
                <li>Repeated antibiotic use disturbed healthy vaginal bacteria.</li>
                <li>An underlying condition, such as cervicitis, was missed.</li>
              </ul>

              <p className="text-gray-700">
                Fix the cause, and the problem usually stops.
              </p>
            </div>

            {/* Section 3 — Common Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes You Need to Treat
              </h2>

              <p className="mb-4 text-gray-700">
                Permanent relief depends on identifying which of these applies
                to you.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yeast infection: thick, white, curd-like discharge with itching</li>
                <li>Bacterial vaginosis: thin, grey discharge with a fishy smell</li>
                <li>Trichomoniasis: frothy, yellow-green discharge with odour</li>
                <li>Cervicitis: persistent discharge with spotting after intercourse</li>
                <li>Pelvic inflammatory disease: discharge with pelvic pain and fever</li>
                <li>Hormonal imbalance: changes linked to cycles, contraceptives or stress</li>
                <li>Diabetes: raises the risk of repeated yeast infections</li>
                <li>Poor hygiene or over-washing: disturbs natural protection</li>
              </ul>
            </div>

            {/* Section 4 — Step 1 Diagnosis */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Get the Correct Diagnosis
              </h2>

              <p className="mb-4 text-gray-700">
                This is the most important step. Without it, nothing lasts.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Gynaecologist Will Usually
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask about your symptoms, cycle, hygiene and history</li>
                <li>Perform a gentle examination where needed</li>
                <li>Take a swab to identify yeast, bacteria or parasites</li>
                <li>Check vaginal pH</li>
                <li>Advise a Pap smear for cervical screening</li>
                <li>Test urine and blood sugar if needed</li>
                <li>Suggest an ultrasound if pain or other findings are present</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why This Matters
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yeast, bacteria and parasites each need a different medicine.</li>
                <li>The wrong medicine can make the problem worse.</li>
              </ul>
            </div>

            {/* Section 5 — Step 2 Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Complete the Right Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends entirely on the cause.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Treatment May Include
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antifungal tablets, creams or pessaries for yeast infections</li>
                <li>Antibiotics for bacterial vaginosis and other bacterial infections</li>
                <li>Anti-parasitic medicines for trichomoniasis</li>
                <li>Treatment for cervicitis or pelvic infection</li>
                <li>Partner treatment when infection is sexually transmitted</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Rules for Success
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Take the full course, even if symptoms improve early.</li>
                <li>Take medicines exactly as prescribed.</li>
                <li>Do not share medicines or use leftover tablets.</li>
                <li>Attend your follow-up visit to confirm recovery.</li>
              </ul>
            </div>

            {/* Section 6 — Step 3 Underlying Condition */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Treat the Underlying Condition
              </h2>

              <p className="mb-4 text-gray-700">
                Recurring discharge often points to something deeper.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Diabetes: Keep blood sugar controlled to prevent yeast infections.</li>
                <li>Hormonal imbalance: Get hormonal evaluation if your cycles are irregular.</li>
                <li>PCOS: Treating it can improve overall vaginal and reproductive health.</li>
                <li>Weak immunity: Improve sleep, nutrition and general health.</li>
                <li>Cervical or uterine problems: Further evaluation may be needed.</li>
                <li>Recurrent partner infection: Treat both partners when advised.</li>
              </ul>
            </div>

            {/* Section 7 — Step 4 Hygiene */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 4: Fix Daily Hygiene Habits
              </h2>

              <p className="mb-4 text-gray-700">
                Small habits make a big difference.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Do
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area with plain water or a mild, unscented wash.</li>
                <li>Wipe from front to back.</li>
                <li>Wear loose, breathable cotton underwear.</li>
                <li>Change underwear daily, and sooner if damp.</li>
                <li>Change sanitary pads every 4 to 6 hours.</li>
                <li>Dry the area well after bathing.</li>
                <li>Change out of wet swimwear or gym clothes quickly.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Do Not
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Douche or wash inside the vagina</li>
                <li>Use scented soaps, sprays, powders or wipes</li>
                <li>Wear tight synthetic underwear for long hours</li>
                <li>Share towels or undergarments</li>
                <li>Use harsh antiseptic liquids</li>
              </ul>
            </div>

            {/* Section 8 — Step 5 Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 5: Support Your Body with a Healthy Lifestyle
              </h2>

              <p className="mb-4 text-gray-700">
                Lifestyle does not replace medical treatment, but it helps
                prevent recurrence.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Diet and Hydration
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Drink enough water through the day.</li>
                <li>Eat a balanced diet with vegetables, fruits and protein.</li>
                <li>Limit excess sugar, since high sugar can feed yeast.</li>
                <li>Include curd or probiotic foods if your doctor agrees.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                General Health
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sleep well and manage stress.</li>
                <li>Exercise regularly.</li>
                <li>Maintain a healthy weight.</li>
                <li>Avoid smoking.</li>
                <li>Avoid unnecessary antibiotics.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Intimate Health
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Practise safe sex.</li>
                <li>Urinate after intercourse.</li>
                <li>Avoid intercourse during treatment if your doctor advises it.</li>
              </ul>
            </div>

            {/* Section 9 — Home Remedies */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Remedies: What Helps and What Does Not
              </h2>

              <p className="mb-4 text-gray-700">
                Many women search for quick home fixes. Here is a balanced view.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Generally Harmless Supportive Habits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Staying hydrated</li>
                <li>Wearing cotton underwear</li>
                <li>Keeping the area clean and dry</li>
                <li>Eating curd if you tolerate it and your doctor agrees</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Things to Avoid
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Putting curd, garlic, vinegar, baking soda or herbal mixtures inside the vagina</li>
                <li>Using antiseptic solutions or douching</li>
                <li>Relying on herbal or ayurvedic powders without medical advice</li>
                <li>Following social media &quot;permanent cure&quot; claims</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                The Reality
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Home remedies do not cure infections.</li>
                <li>Some can irritate tissues or delay proper treatment.</li>
                <li>Use them only as support, never as a substitute for a doctor.</li>
              </ul>
            </div>

            {/* Section 10 — Can It Be Cured Permanently */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can White Discharge Be Cured Permanently?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Can Be Cured
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yeast infections, bacterial vaginosis and trichomoniasis can usually be cured with proper treatment.</li>
                <li>Cervicitis and pelvic infections can be treated and resolved.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What May Recur
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infections can return if triggers continue, such as diabetes, poor hygiene or an untreated partner.</li>
                <li>Some women are prone to recurrence and need a longer preventive plan.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Will Always Continue
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal physiological discharge, which is healthy.</li>
              </ul>

              <p className="text-gray-700">
                So the realistic goal is &quot;treat the infection, remove the
                triggers and keep the discharge normal&quot;, not &quot;never
                have any discharge.&quot;
              </p>
            </div>

            {/* Section 11 — Long-Term Prevention */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Simple Long-Term Prevention Plan
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Get a proper diagnosis at the first sign of abnormal discharge.</li>
                <li>Complete your full treatment.</li>
                <li>Attend follow-ups.</li>
                <li>Maintain good hygiene.</li>
                <li>Wear breathable clothing.</li>
                <li>Control diabetes and other medical conditions.</li>
                <li>Avoid unnecessary antibiotics.</li>
                <li>Treat partners when advised.</li>
                <li>Report early symptoms rather than waiting.</li>
                <li>Schedule routine gynaecological check-ups and Pap smears.</li>
              </ul>
            </div>

            {/* Section 12 — When to See Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor Right Away
              </h2>

              <p className="mb-4 text-gray-700">
                Do not wait if you notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Foul-smelling or coloured discharge</li>
                <li>Itching or burning that disturbs sleep or daily life</li>
                <li>Pain in the lower abdomen or pelvis</li>
                <li>Fever or chills</li>
                <li>Bleeding between periods or after intercourse</li>
                <li>Pain during urination or intercourse</li>
                <li>Symptoms lasting more than a few days</li>
                <li>Repeated infections despite treatment</li>
                <li>Unusual discharge during pregnancy</li>
              </ul>
            </div>

            {/* Section 13 — Pregnancy and Fertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge, Pregnancy and Fertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild, milky discharge is normal and should not be &quot;stopped&quot;.</li>
                <li>Itchy, smelly or coloured discharge needs prompt medical review.</li>
                <li>Never use creams or medicines without your doctor&apos;s advice.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Fertility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Untreated infections such as PID can damage the fallopian tubes.</li>
                <li>Early treatment protects your chances of conceiving.</li>
                <li>Women planning pregnancy can use the clinic&apos;s fertility services for a full evaluation.</li>
              </ul>
            </div>

            {/* Section 14 — Care at Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Care at Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                center in Moradabad built on one philosophy: &quot;Her Health
                First.&quot; Your comfort, privacy and choices sit at the centre
                of every consultation.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist known for
                empathetic, safe-motherhood focused care.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What You Can Expect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A caring female gynaecologist who listens first</li>
                <li>Private, respectful consultations</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Treatment based on the exact cause</li>
                <li>Follow-up care to prevent recurrence</li>
                <li>Complete women&apos;s health services in one place</li>
              </ul>
            </div>

            {/* Section 15 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Stop guessing and start with a proper diagnosis. Book a private,
                caring consultation today.
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
