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

export default function BestGynaecologistMoradabadWhiteDischarge() {
  const faqs = [
    {
      q: "Who is the best gynaecologist in Moradabad for white discharge?",
      a: "Choose one who listens, tests properly and treats the cause. Dr. Priyanka Pachauri is a trusted option.",
    },
    {
      q: "How do I choose a gynaecologist for white discharge?",
      a: "Check qualifications, experience, privacy, diagnostic facilities and honest, cause-based treatment.",
    },
    {
      q: "Is a female gynaecologist available?",
      a: "Yes. Dr. Priyanka Pachauri is a female gynaecologist.",
    },
    {
      q: "Will I need an internal examination?",
      a: "Only if needed, and always with your consent.",
    },
    {
      q: "What tests are done for white discharge?",
      a: "Possibly a swab, pH test, Pap smear, or urine and blood tests.",
    },
    {
      q: "Is white discharge always a problem?",
      a: "No. Clear or milky, odourless discharge is normal.",
    },
    {
      q: "Can white discharge be cured?",
      a: "Infection-related discharge can be cured with correct treatment and follow-up.",
    },
    {
      q: "Is the consultation private?",
      a: "Yes. Consultations are held privately and respectfully.",
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
                Best Gynaecologist in Moradabad for White Discharge: How to Choose the Right Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                White discharge is one of the most common reasons women see a
                gynaecologist, and it is also one of the most delayed. Many
                women wait for weeks, try home remedies or ask friends, mainly
                because they are not sure who to trust.
              </p>

              <p className="text-gray-700">
                If you are searching for the best gynaecologist in Moradabad for
                white discharge, you are asking the right question. The
                &quot;best&quot; doctor is not decided by an advertisement. It
                is the one who listens carefully, finds the real cause, treats
                it honestly and makes you feel safe.
              </p>
            </div>

            {/* Section 2 — Why Choosing Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Gynaecologist Matters
              </h2>

              <p className="mb-4 text-gray-700">
                White discharge looks like one problem, but it has many possible
                causes. The doctor you choose decides whether you get the right
                answer the first time.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Good Gynaecologist Helps You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Get an accurate diagnosis, not a guess</li>
                <li>Receive medicines matched to the exact cause</li>
                <li>Avoid unnecessary tests, antibiotics and expenses</li>
                <li>Prevent repeated infections</li>
                <li>Spot serious conditions early</li>
                <li>Protect your fertility and pregnancy health</li>
                <li>Feel comfortable discussing intimate concerns</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Poor Fit Can Lead To
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wrong medicines that hide symptoms</li>
                <li>Infections that return again and again</li>
                <li>Months of discomfort</li>
                <li>Missed complications such as pelvic infection</li>
              </ul>
            </div>

            {/* Section 3 — Understanding White Discharge */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding White Discharge First
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear to milky white</li>
                <li>Thin or mildly sticky</li>
                <li>Odourless or mild-smelling</li>
                <li>No itching, burning or pain</li>
                <li>Changes with your cycle, ovulation and pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Abnormal Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick, curdy, frothy, yellow, green or grey</li>
                <li>Foul or fishy smell</li>
                <li>Itching, burning, redness or swelling</li>
                <li>Lower abdominal pain</li>
                <li>Heavy, persistent or recurring</li>
                <li>Bleeding between periods or after intercourse</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Causes a Gynaecologist Will Look For
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yeast infection: thick, white, curd-like discharge with itching</li>
                <li>Bacterial vaginosis: thin, greyish discharge with a fishy smell</li>
                <li>Trichomoniasis: frothy, yellow-green discharge with odour</li>
                <li>Cervicitis: inflammation of the cervix with persistent discharge</li>
                <li>Pelvic inflammatory disease: discharge with pelvic pain and fever</li>
                <li>Sexually transmitted infections</li>
                <li>Hormonal causes: puberty, ovulation, pregnancy, contraceptives</li>
                <li>Diabetes and weak immunity</li>
                <li>Hygiene factors: douching, scented products, tight clothing</li>
              </ul>

              <p className="text-gray-700">
                Because these look alike, only an examination and the right
                tests can separate them.
              </p>
            </div>

            {/* Section 4 — 10 Things to Look For */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                10 Things to Look for in the Best Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Use this checklist when comparing doctors in Moradabad.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Qualifications and Registration
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A recognised gynaecology qualification</li>
                <li>Valid medical registration</li>
                <li>Credentials clearly shared and verifiable</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Experience with Women&apos;s Health Concerns
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular experience with infections, menstrual problems and pelvic health</li>
                <li>Comfortable handling both routine and complex cases</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. A Listening Approach
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gives you time to explain</li>
                <li>Does not rush or dismiss your concern</li>
                <li>Asks thoughtful questions about your history</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Clear Explanations
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Explains the cause in simple words</li>
                <li>Tells you why each test or medicine is needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Proper Diagnostic Support
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Swab tests, pH testing and Pap smear</li>
                <li>Ultrasound when pelvic pain or other findings need checking</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Honest, Cause-Based Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>No unnecessary antibiotics or long medicine lists</li>
                <li>Advises tests only when they will change treatment</li>
                <li>Straightforward about what is and is not needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Privacy and Respect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Private consultation rooms</li>
                <li>Judgment-free staff</li>
                <li>Examination only with your consent</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Follow-Up Care
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A review visit to confirm recovery</li>
                <li>Guidance to prevent recurrence</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Easy Access
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Convenient location in Moradabad</li>
                <li>Simple booking by phone or WhatsApp</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Genuine Reputation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Real patient testimonials</li>
                <li>Word-of-mouth recommendations</li>
                <li>Ethical communication, with no exaggerated promises</li>
              </ul>
            </div>

            {/* Section 5 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags: Doctors and Clinics to Be Careful About
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Promises of &quot;100% guaranteed cure&quot;</li>
                <li>Prescribing medicines without examination or history</li>
                <li>Pressure to buy expensive packages</li>
                <li>Dismissing your concerns as &quot;nothing&quot;</li>
                <li>Refusing to explain the diagnosis</li>
                <li>Advising many unrelated tests without reason</li>
                <li>No privacy during consultation</li>
                <li>Unclear fees or hidden charges</li>
              </ul>
            </div>

            {/* Section 6 — Meet Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Dr. Priyanka Pachauri at Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility center
                in Moradabad built on one idea: &quot;Her Health First.&quot;
                Your comfort, your choices and your story come first. The team
                listens first and then applies expert knowledge and modern
                technology with empathy and patience.
              </p>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a respected gynaecologist known for
                empathetic, safe-motherhood focused care and for expertise in
                antenatal and postnatal care, high-risk pregnancy, menstrual
                disorders and laparoscopic gynaecological surgery. The clinic
                also highlights gold medal credentials and international
                fellowships.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Women Choose This Clinic for White Discharge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A caring female gynaecologist who listens without judgment</li>
                <li>Private, respectful consultations</li>
                <li>Advanced diagnostic support, including 3D/4D ultrasound</li>
                <li>Treatment based on the exact cause</li>
                <li>Continuity of care, so your history is remembered</li>
                <li>Complete women&apos;s health services in one place</li>
                <li>A reputation built on families recommending the clinic</li>
              </ul>
            </div>

            {/* Section 7 — What Happens During Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your Visit
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: A Private Welcome
              </h3>

              <p className="mb-4 text-gray-700">
                Your concern is kept confidential and heard patiently.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Conversation First
              </h3>

              <p className="mb-4 text-gray-700">
                Symptoms, cycle, hygiene, medicines and medical history.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Examination, Only If Needed
              </h3>

              <p className="mb-4 text-gray-700">
                Gentle and with your consent.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Tests, Only If Needed
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Discharge swab</li>
                <li>pH test</li>
                <li>Pap smear</li>
                <li>Urine or blood tests</li>
                <li>Ultrasound for pain or other findings</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Clear Diagnosis
              </h3>

              <p className="mb-4 text-gray-700">
                The likely cause explained simply.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 6: Personalised Plan
              </h3>

              <p className="text-gray-700">
                Medicines, hygiene guidance and a follow-up date.
              </p>
            </div>

            {/* Section 8 — Treatment Options */}
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
                <li>Antifungal medicines for yeast infections</li>
                <li>Antibiotics for bacterial vaginosis</li>
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
                <li>Hormonal evaluation where needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Diet and Lifestyle Tips
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow-up</li>
                <li>Review to confirm recovery</li>
                <li>Advice to prevent recurrence</li>
              </ul>
            </div>

            {/* Section 9 — Preparing for Appointment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Appointment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Note your last period date and cycle length.</li>
                <li>Write down your symptoms and how long you have had them.</li>
                <li>Bring previous reports and prescriptions.</li>
                <li>List any medicines or supplements you take.</li>
                <li>Prepare your questions beforehand.</li>
                <li>Avoid douching or vaginal creams for a day or two before a swab test, unless told otherwise.</li>
                <li>Wear comfortable, loose clothing.</li>
              </ul>
            </div>

            {/* Section 10 — Home Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Home Care Tips That Support Treatment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wash only the outer genital area with plain water or a mild wash.</li>
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
                Warning Signs: See a Gynaecologist Soon
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Foul-smelling or coloured discharge</li>
                <li>Itching or burning that disturbs sleep or work</li>
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
                <li>Itchy, smelly or coloured discharge needs prompt review.</li>
                <li>Never use creams or medicines without your doctor&apos;s advice.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Fertility
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Untreated infections like PID can damage the fallopian tubes.</li>
                <li>Early treatment protects your chances of conceiving.</li>
                <li>Women planning pregnancy can use the clinic&apos;s fertility and IVF services.</li>
              </ul>
            </div>

            {/* Section 13 — Complete Care */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Complete Women&apos;s Healthcare Under One Roof
              </h2>

              <p className="mb-4 text-gray-700">
                If you visit for white discharge, you also have access to:
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
                One trusted team can support you through different stages of
                life.
              </p>
            </div>

            {/* Section 14 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Contact Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-6 text-black">
                Do not let hesitation delay your care. Book a private,
                respectful consultation with a caring gynaecologist.
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
