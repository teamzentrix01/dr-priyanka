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

export default function InfertilitySpecialistAppointmentBooking() {
  const faqs = [
    {
      q: "How can I book an infertility specialist appointment?",
      a: "Call +91 90797 65578, WhatsApp +91 89796 70705, email drpriyankagynaec@gmail.com or use the website.",
    },
    {
      q: "When should I book a fertility consultation?",
      a: "After 12 months of trying, or 6 months if you are 35 or older.",
    },
    {
      q: "Should my husband come to the appointment?",
      a: "Yes, ideally. Both partners should be evaluated together.",
    },
    {
      q: "What documents should I bring?",
      a: "Previous reports, scans, prescriptions, semen reports and a list of medicines.",
    },
    {
      q: "Can I send reports before the visit?",
      a: "Yes. You can share them on WhatsApp or email in advance.",
    },
    {
      q: "Will I have to start treatment at the first visit?",
      a: "No. The first visit is for evaluation and planning.",
    },
    {
      q: "Can I book if I live outside Moradabad?",
      a: "Yes. Share reports first and confirm timings before travelling.",
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
                Infertility Specialist Appointment Booking: How to Book, What to Prepare and What to Expect
              </h1>

              <p className="mb-4 text-gray-700">
                Taking the first step toward fertility care is often the hardest
                part. You may have been thinking about it for months, but doubts
                hold you back. Will the doctor judge us? What will they ask?
                What tests will we need? How do we even book?
              </p>

              <p className="mb-4 text-gray-700">
                The good news is that booking a fertility consultation is
                simple, and a little preparation makes the first visit far more
                useful. This guide explains when to book, the different ways to
                book at Dr. Priyanka Gynaec in Moradabad, what to carry, what
                happens during the visit and how to plan the steps that follow.
              </p>
            </div>

            {/* Section 2 — Why Booking Early Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Booking an Appointment Early Matters
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Time works against fertility. A woman&apos;s egg quality and quantity decline gradually with age, so early action keeps more options open.</li>
                <li>Diagnosis ends guesswork. Many couples feel relief simply from knowing the cause.</li>
                <li>Many causes are treatable. Ovulation problems, thyroid issues and structural problems can often be corrected.</li>
                <li>Early testing saves money. The right test at the right time avoids months of unnecessary attempts.</li>
                <li>Both partners can be checked together. This avoids delays.</li>
                <li>A plan reduces anxiety. Knowing the next step brings calm.</li>
              </ul>
            </div>

            {/* Section 3 — When to Book */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Book an Infertility Appointment?
              </h2>

              <p className="mb-4 text-gray-700">General guidance:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Under 35 years: after 12 months of regular, unprotected intercourse without pregnancy</li>
                <li>35 years and above: after 6 months</li>
                <li>Over 40: book as soon as you plan to conceive</li>
              </ul>

              <p className="mb-4 text-gray-700">Book earlier if:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your periods are irregular, very infrequent or absent</li>
                <li>You have severe period pain or chronic pelvic pain</li>
                <li>You have PCOS, endometriosis, fibroids or an ovarian cyst</li>
                <li>You have thyroid problems or high prolactin</li>
                <li>You have had pelvic infection, tuberculosis or pelvic surgery</li>
                <li>You have had two or more miscarriages</li>
                <li>Your partner has a low sperm count or an abnormal semen report</li>
                <li>IUI or other treatment has not worked before</li>
                <li>You want to freeze eggs or check your fertility potential</li>
              </ul>

              <p className="text-gray-700">
                You do not need to be certain something is wrong. A consultation
                is also for answers and reassurance.
              </p>
            </div>

            {/* Section 4 — Who Should Come */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Come to the Appointment?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ideally both partners. Fertility is a shared matter, and male factors contribute to about one-third of cases.</li>
                <li>The woman alone is also welcome if her partner cannot attend. A semen analysis can be arranged separately.</li>
                <li>A supportive family member can come if you feel more comfortable.</li>
                <li>Your partner&apos;s presence helps the doctor take a complete history and plan tests together.</li>
              </ul>
            </div>

            {/* Section 5 — What to Prepare */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Prepare Before You Book
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A list of your concerns and questions</li>
                <li>Your cycle details: first day of your last period, usual cycle length, any pain, spotting or unusual bleeding</li>
                <li>Your history: number of years trying, previous pregnancies or miscarriages, past surgeries, infections or medicines</li>
                <li>Your partner&apos;s history: previous semen reports, any surgery, injury or illness related to fertility</li>
                <li>Lifestyle details: smoking, alcohol, exercise, sleep and stress</li>
                <li>Your preferred date and time</li>
              </ul>
            </div>

            {/* Section 6 — Documents */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Documents Should You Carry?
              </h2>

              <p className="mb-4 text-gray-700">
                Bring everything you have, even if it seems old or unimportant.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous fertility reports and prescriptions</li>
                <li>Ultrasound reports</li>
                <li>HSG or sonosalpingography reports</li>
                <li>Hormone tests such as AMH, FSH, LH, prolactin and thyroid</li>
                <li>Semen analysis reports, including any DNA testing</li>
                <li>Records of previous IUI or IVF cycles</li>
                <li>Surgery or discharge summaries</li>
                <li>A list of current medicines and supplements</li>
                <li>Identity proof and any referral letter</li>
              </ul>

              <p className="text-gray-700">
                Tip: organise reports by date in one folder. It helps the doctor
                see the full picture quickly.
              </p>
            </div>

            {/* Section 7 — Send Reports Before */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can You Send Reports Before the Visit?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Yes. Sending reports on WhatsApp or email before your visit can save time.</li>
                <li>Take clear photos or scans so the details are readable.</li>
                <li>Keep the original reports with you for the appointment.</li>
                <li>Your doctor may advise additional tests after reviewing your history.</li>
              </ul>
            </div>

            {/* Section 8 — First Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During the First Consultation?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. A Calm Conversation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor listens to your story first.</li>
                <li>Expect questions about your cycle, health, lifestyle and previous treatments.</li>
                <li>Nothing you say will be judged. Honest answers help the doctor help you.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Examination and Ultrasound
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A basic physical examination</li>
                <li>A transvaginal ultrasound to look at the uterus and ovaries</li>
                <li>It is usually short and well tolerated, and you can ask for explanations at any point.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Initial Tests
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests such as hormones, thyroid and AMH, where appropriate</li>
                <li>A semen analysis for the male partner</li>
                <li>Further tests only when needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Discussion and Planning
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A clear explanation of what the findings may mean</li>
                <li>Options from simple to advanced, matched to your situation</li>
                <li>A realistic timeline and an honest conversation about chances</li>
                <li>Information on the likely number of visits and expected expenses</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Time for Questions
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>No question is too small or too personal.</li>
                <li>You can ask for the plan in writing.</li>
              </ul>
            </div>

            {/* Section 9 — Tests */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Be Advised After Booking
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Female Partner
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>AMH and hormone panel</li>
                <li>Thyroid profile</li>
                <li>HSG or sonosalpingography</li>
                <li>Hysteroscopy</li>
                <li>Diagnostic laparoscopy if endometriosis or tubal disease is suspected</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Male Partner
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Semen analysis</li>
                <li>AI-powered semen analysis</li>
                <li>Sperm DNA integrity testing</li>
                <li>Hormone tests or scrotal ultrasound if needed</li>
              </ul>

              <p className="text-gray-700">
                Not everyone needs every test. Your doctor selects only what is
                relevant to you.
              </p>
            </div>

            {/* Section 10 — Treatment Paths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Paths That May Follow
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lifestyle changes and treating underlying conditions</li>
                <li>Ovulation induction with scan monitoring</li>
                <li>Hysteroscopy for polyps, septum or adhesions</li>
                <li>3D laparoscopic surgery for cysts, fibroids and endometriosis</li>
                <li>IUI for selected couples</li>
                <li>IVF and ICSI when other options are unlikely to work</li>
                <li>Frozen embryo transfer and fertility preservation</li>
              </ul>

              <p className="text-gray-700">
                Your doctor will recommend the simplest effective path, and you
                remain part of every decision.
              </p>
            </div>

            {/* Section 11 — Tips */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Smooth and Stress-Free Visit
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Book a time that does not clash with work or travel stress.</li>
                <li>Arrive a little early to complete formalities.</li>
                <li>Bring your partner if possible.</li>
                <li>Wear comfortable clothing.</li>
                <li>Carry a notebook or use your phone to record the doctor&apos;s advice.</li>
                <li>Write your questions before you go.</li>
                <li>Eat normally and stay hydrated unless told otherwise.</li>
                <li>Ask about the next steps before you leave.</li>
              </ul>
            </div>

            {/* Section 12 — Outside Moradabad */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning If You Live Outside Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Couples travel from nearby towns such as Rampur, Amroha,
                Sambhal, Bijnor and Bareilly, and from Delhi-NCR.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Share reports in advance on WhatsApp or email.</li>
                <li>Ask whether initial tests can be done on the same day to avoid a second trip.</li>
                <li>Plan your visit around your cycle if scans are required.</li>
                <li>Check travel and stay options if multiple visits are likely.</li>
                <li>Ask whether some monitoring can be done locally when appropriate.</li>
                <li>Confirm the appointment time the day before you travel.</li>
              </ul>
            </div>

            {/* Section 13 — Reschedule */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What If You Need to Reschedule?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Inform the clinic as early as possible by phone or WhatsApp.</li>
                <li>Keep your reports ready for the new date.</li>
                <li>If you are in the middle of a treatment cycle, call right away, because timing may matter.</li>
              </ul>
            </div>

            {/* Section 14 — Booking Tips */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking Tips for Couples Feeling Nervous
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It is normal to feel anxious, and many couples do.</li>
                <li>Remember that a consultation is only a conversation.</li>
                <li>You are not committing to any treatment by attending.</li>
                <li>Many couples feel relieved after the first visit.</li>
                <li>Choose a time when you and your partner can both be present and calm.</li>
              </ul>
            </div>

            {/* Section 15 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Booking a Fertility Appointment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: I should wait until I am sure something is wrong. Fact: early advice helps, and waiting can reduce options.</li>
                <li>Myth: the doctor will push IVF at the first visit. Fact: a good doctor begins with a diagnosis and the simplest effective option.</li>
                <li>Myth: only the woman needs to attend. Fact: both partners should be evaluated.</li>
                <li>Myth: the first visit is painful or embarrassing. Fact: it is mostly conversation and a short, gentle ultrasound.</li>
                <li>Myth: booking means I must start treatment. Fact: you decide the next step after you have the information.</li>
              </ul>
            </div>

            {/* Section 16 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Couples Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec combines fertility care, gynaecological
                surgery and maternity services under the philosophy &quot;Her
                Health First&quot;.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF services: personalised plans for each couple</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>AI-powered semen analysis: includes DNA integrity testing</li>
                <li>3D laparoscopy and hysteroscopy: treat structural causes while preserving fertility</li>
                <li>3D/4D ultrasound: detailed imaging for fertility and pregnancy care</li>
                <li>Complete journey support: from the first consultation to antenatal care, normal delivery and newborn care</li>
                <li>Easy access: phone, WhatsApp and email options for booking and questions</li>
                <li>Respectful, unhurried consultations: you are heard before any plan is made</li>
              </ul>
            </div>

            {/* Section 17 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Infertility Specialist Appointment Today
              </h2>

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

            {/* Section 18 — FAQs */}
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