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

export default function LadyDoctorWhiteDischargeMoradabad() {
  const faqs = [
    {
      q: "Is there a lady doctor for white discharge in Moradabad?",
      a: "Yes. Dr. Priyanka Pachauri is a female gynaecologist at Gandhi Nagar, Moradabad.",
    },
    {
      q: "Why choose a female doctor for white discharge?",
      a: "Many women feel more comfortable and speak more openly, which helps accurate diagnosis.",
    },
    {
      q: "Is the consultation private?",
      a: "Yes. Consultations are held privately and respectfully.",
    },
    {
      q: "Will I always need an internal examination?",
      a: "No. It is done only when needed and with your consent.",
    },
    {
      q: "Is white discharge always a problem?",
      a: "No. Clear or milky, odourless discharge is normal. Changes in smell, colour or comfort need checking.",
    },
    {
      q: "What tests may be needed?",
      a: "Possibly a discharge swab, Pap smear, or urine or blood tests, only if required.",
    },
    {
      q: "Can I visit if I am unmarried?",
      a: "Yes. Women of any age or marital status can consult.",
    },
    {
      q: "Can white discharge be cured?",
      a: "Infection-related discharge can be cured with correct treatment and follow-up.",
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
                Lady Doctor for White Discharge in Moradabad: Private, Caring and Expert Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                For many women, the hardest part of treating white discharge is
                not the medicine. It is the first step: talking about it.
                Embarrassment, fear of judgment and worry about being examined
                by a stranger stop countless women from seeking help.
              </p>

              <p className="mb-4 text-gray-700">
                If you have been searching for a lady doctor for white discharge
                in Moradabad, you are making a thoughtful choice. Feeling safe
                and comfortable helps you speak openly, and open conversation
                leads to a correct diagnosis and better treatment.
              </p>

              <p className="text-gray-700">
                Why Many Women Prefer a Lady Doctor
              </p>

              <p className="mb-4 text-gray-700">
                Preferences are personal, and every woman deserves to choose
                what makes her comfortable.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Comfort with sensitive topics: Discussing discharge, periods and intimate health feels easier.</li>
                <li>Less embarrassment: You may open up faster, which helps the doctor understand your problem.</li>
                <li>Cultural and family comfort: Many families feel more at ease with a female doctor.</li>
                <li>Privacy and trust: Women often feel safer during an examination.</li>
                <li>Shared understanding: A female gynaecologist can relate closely to women&apos;s health experiences.</li>
                <li>Better communication: Honest conversation leads to better diagnosis.</li>
              </ul>

              <p className="text-gray-700">
                An important note: A good doctor, male or female, is defined by
                skill, ethics and empathy. But if a lady doctor helps you seek
                care sooner, that is a real health advantage.
              </p>
            </div>

            {/* Section 2 — Why Not Ignore */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why White Discharge Should Not Be Ignored
              </h2>

              <p className="mb-4 text-gray-700">
                White discharge is often normal, but not always.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear to milky white</li>
                <li>Thin or mildly sticky</li>
                <li>Odourless or mild-smelling</li>
                <li>No itching, burning or pain</li>
                <li>Varies with your cycle, ovulation and pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Abnormal Discharge That Needs a Doctor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, curdy, frothy, yellow, green or grey</li>
                <li>Foul or fishy smell</li>
                <li>Itching, burning or redness</li>
                <li>Pain in the lower abdomen</li>
                <li>Heavy, persistent or recurring</li>
                <li>Bleeding between periods or after intercourse</li>
              </ul>
            </div>

            {/* Section 3 — Why Women Delay */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Reasons Women Delay Seeing a Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Many women wait months before getting help. These are the most
                common reasons.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Embarrassment about the topic</li>
                <li>Fear of being judged</li>
                <li>Worry about an internal examination</li>
                <li>Belief that it will &quot;go away on its own&quot;</li>
                <li>Reliance on friends, chemists or online remedies</li>
                <li>Not knowing which doctor to see</li>
                <li>Concern about cost or time</li>
                <li>Fear of a serious diagnosis</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Waiting Is Risky
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Infections can spread to the uterus and tubes.</li>
                <li>Discomfort and itching can get worse.</li>
                <li>Repeated infections may need longer treatment.</li>
                <li>Untreated pelvic infection can affect fertility.</li>
              </ul>
            </div>

            {/* Section 4 — Causes */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Causes of White Discharge a Gynaecologist Can Diagnose
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yeast infection: thick, white, curd-like discharge with itching</li>
                <li>Bacterial vaginosis: thin, greyish discharge with a fishy smell</li>
                <li>Trichomoniasis: frothy, yellow-green discharge with odour</li>
                <li>Cervicitis: persistent discharge and spotting after intercourse</li>
                <li>Pelvic inflammatory disease: discharge with pelvic pain and fever</li>
                <li>Hormonal changes: puberty, ovulation, pregnancy or contraceptives</li>
                <li>Diabetes and weak immunity: raise infection risk</li>
                <li>Hygiene factors: douching, scented products, tight clothing</li>
              </ul>

              <p className="text-gray-700">
                Because many infections look similar, only an examination and
                tests can identify the right cause and the right medicine.
              </p>
            </div>

            {/* Section 5 — Meet Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Dr. Priyanka Pachauri: A Caring Lady Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                center in Moradabad built on one idea: &quot;Her Health
                First.&quot; Your comfort, your privacy and your choices come
                first. The clinic&apos;s approach is to listen first and then
                apply expert care with empathy and patience.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected female gynaecologist known
                for empathetic, safe-motherhood focused care and for expertise
                across the stages of a woman&apos;s life.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Women Feel Comfortable Here
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A female gynaecologist who listens without judgment</li>
                <li>Private, respectful consultations</li>
                <li>Clear explanations in simple language</li>
                <li>Examination only when needed, and only with your consent</li>
                <li>Questions are welcome, however small or personal</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Continuity of care, so your history is remembered</li>
                <li>Strong word of mouth, with families recommending the clinic</li>
              </ul>
            </div>

            {/* Section 6 — First Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Not knowing what happens next creates anxiety. Here is a clear
                picture.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: A Warm, Private Welcome
              </h3>

              <p className="mb-4 text-gray-700">
                You are greeted respectfully and your concern is kept
                confidential.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: A Conversation First
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor asks about your symptoms, cycle, hygiene and health history.</li>
                <li>You can speak freely and take your time.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Examination, Only If Needed
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A gentle examination is done only when it will help the diagnosis.</li>
                <li>Your consent and comfort come first.</li>
                <li>You can ask the doctor to explain each step.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Tests, Only If Needed
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A swab to identify the infection</li>
                <li>Urine or blood tests when needed</li>
                <li>Pap smear when advised</li>
                <li>Ultrasound if there is pain or another concern</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: A Clear Explanation
              </h3>

              <p className="mb-4 text-gray-700">
                You learn the likely cause in simple words.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 6: A Personalised Plan
              </h3>

              <p className="text-gray-700">
                Medicines, hygiene guidance and a follow-up date.
              </p>
            </div>

            {/* Section 7 — Treatment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment for White Discharge
              </h2>

              <p className="mb-4 text-gray-700">
                Treatment depends on the cause. It is never one-size-fits-all.
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
                Supportive Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hygiene and clothing guidance</li>
                <li>Blood sugar control in diabetes</li>
                <li>Hormonal assessment where needed</li>
                <li>Lifestyle and diet tips</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Follow-Up
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A review to confirm recovery</li>
                <li>Advice to prevent recurrence</li>
              </ul>
            </div>

            {/* Section 8 — Feel Comfortable */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Feel More Comfortable Before Your Visit
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Remember that doctors see these concerns every day. You are not alone.</li>
                <li>Write down your symptoms and how long you have had them.</li>
                <li>Note the date of your last period and your cycle length.</li>
                <li>Bring previous reports or prescriptions.</li>
                <li>List your questions beforehand.</li>
                <li>Wear comfortable, loose clothing.</li>
                <li>Avoid douching or vaginal creams for a day or two before a swab test, unless told otherwise.</li>
                <li>Bring a family member or friend for support if it helps.</li>
              </ul>
            </div>

            {/* Section 9 — Privacy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Confidentiality: What You Can Expect
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your concerns are discussed in a private consultation room.</li>
                <li>Your records are handled respectfully.</li>
                <li>You are never rushed or judged.</li>
                <li>You decide what feels comfortable to share.</li>
                <li>You can ask for a pause or clarification at any point.</li>
              </ul>
            </div>

            {/* Section 10 — Home Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Home Care Tips That Support Treatment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area with plain water or a mild, unscented wash.</li>
                <li>Avoid douching and scented products.</li>
                <li>Wear breathable cotton underwear and change it daily.</li>
                <li>Wipe from front to back.</li>
                <li>Change sanitary pads every 4 to 6 hours.</li>
                <li>Keep blood sugar controlled if you are diabetic.</li>
                <li>Drink enough water and eat a balanced diet.</li>
                <li>Complete the full course of medicines.</li>
              </ul>
            </div>

            {/* Section 11 — Warning Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: See a Doctor Soon
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Foul-smelling or coloured discharge</li>
                <li>Itching or burning that disturbs sleep or daily life</li>
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

            {/* Section 12 — Pregnancy and Fertility */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                White Discharge in Pregnancy and Fertility
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild, milky discharge is common and usually normal.</li>
                <li>Itchy, smelly or coloured discharge needs a doctor&apos;s review.</li>
                <li>Never use medicines or creams without your doctor&apos;s advice.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Fertility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Untreated infections like PID can affect the fallopian tubes.</li>
                <li>Early treatment protects your chances of conceiving.</li>
                <li>Women planning pregnancy can use the clinic&apos;s fertility services for a complete evaluation.</li>
              </ul>
            </div>

            {/* Section 13 — Complete Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Beyond White Discharge: Complete Women&apos;s Healthcare
              </h2>

              <p className="mb-4 text-gray-700">
                If you visit for white discharge, you also have access to a
                wider set of services under one roof.
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

              <p className="text-gray-700">
                One trusted doctor can follow you through different stages of
                life.
              </p>
            </div>

            {/* Section 14 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Do not let embarrassment delay your care. Book a private
                consultation with a caring lady gynaecologist.
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

            {/* Section 15 — FAQs */}
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
