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

export default function HeavyPeriodDoctorReviewsMoradabad() {
  const faqs = [
    {
      q: "Are online doctor reviews reliable?",
      a: "They are useful but should be combined with credentials and personal verification.",
    },
    {
      q: "What should I look for in heavy period doctor reviews?",
      a: "Look for clear communication, correct diagnosis, honest options and good follow-up.",
    },
    {
      q: "How can I spot fake reviews?",
      a: "Watch for repeated wording, no details and unrealistic claims.",
    },
    {
      q: "What do patients say about Dr. Priyanka?",
      a: "Published feedback mentions feeling understood and receiving clear explanations.",
    },
    {
      q: "Where can I check independent reviews?",
      a: "Search the clinic on Google Maps and check its social media pages.",
    },
    {
      q: "Do heavy periods always need surgery?",
      a: "No. Many women improve with medicines or a hormonal IUD.",
    },
    {
      q: "Will treatment affect my chances of pregnancy?",
      a: "Most treatments do not. Share your plans with your doctor.",
    },
    {
      q: "Does Dr. Priyanka treat heavy periods in Moradabad?",
      a: "Yes. She offers diagnosis, medical care and advanced laparoscopic procedures.",
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
                Heavy Period Doctor Reviews: How to Read Them, What to Trust and How to Choose
              </h1>

              <p className="text-gray-700">
                Before booking an appointment, most women do the same thing:
                they search for heavy period doctor reviews. You want to know
                whether other patients felt heard, whether the diagnosis was
                accurate and whether the treatment worked. That instinct is
                smart, but online reviews can also mislead if you do not know
                how to read them.
              </p>
            </div>

            {/* Section 2 — Why Reviews Matter */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Reviews Matter for Heavy Period Care
              </h2>

              <p className="mb-4 text-gray-700">
                Heavy periods are personal and sometimes uncomfortable to
                discuss. Reviews help you feel less alone and more prepared.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Show how a doctor communicates and listens</li>
                <li>Reveal how long consultations feel</li>
                <li>Mention whether explanations were clear</li>
                <li>Give hints about follow-up and continuity</li>
                <li>Reflect the clinic environment and staff behaviour</li>
                <li>Help you decide whether to visit or look elsewhere</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Reviews Cannot Tell You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Whether the treatment will work for your specific cause</li>
                <li>The doctor&apos;s actual qualifications and registration</li>
                <li>Whether results are typical or exceptional</li>
                <li>Medical details that depend on your health history</li>
              </ul>

              <p className="text-gray-700">
                Reviews are one useful input, not the final answer.
              </p>
            </div>

            {/* Section 3 — Genuine Reviews */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Genuine Heavy Period Reviews Usually Mention
              </h2>

              <p className="mb-4 text-gray-700">
                When feedback is honest and useful, it often includes themes
                like these.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Communication
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor listened without interrupting</li>
                <li>Symptoms were taken seriously, not dismissed as &quot;normal&quot;</li>
                <li>Reports and scans were explained in simple language</li>
                <li>Questions were welcomed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Diagnosis
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Appropriate tests were advised</li>
                <li>The cause was identified, not just the symptom</li>
                <li>Options were discussed before a decision</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Treatment
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines were tried first, where suitable</li>
                <li>Surgery was recommended only when needed</li>
                <li>Fertility plans were respected</li>
                <li>Side effects were explained honestly</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                About Experience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Comfortable, respectful clinic environment</li>
                <li>Helpful and polite staff</li>
                <li>Reasonable waiting time</li>
                <li>Easy follow-up by phone or WhatsApp</li>
              </ul>
            </div>

            {/* Section 4 — Read Reviews */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Read Reviews Like an Expert
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Look for Patterns, Not Single Stories
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>One glowing or angry review proves little</li>
                <li>Repeated mentions of the same strength or concern are more reliable</li>
                <li>Compare reviews across different platforms</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Check the Details
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Specific reviews describing the visit are more credible than &quot;Great doctor!&quot;</li>
                <li>Look for details about symptoms, tests and treatment steps</li>
                <li>Notice whether the reviewer explains why they were satisfied</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Check Recency
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recent reviews reflect current service</li>
                <li>Old reviews may not match today&apos;s clinic</li>
                <li>A steady flow over time is a healthy sign</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Balance Positive and Negative
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A perfect score with no detail can look suspicious</li>
                <li>A few mixed reviews are normal for any doctor</li>
                <li>Pay attention to how the clinic responds to criticism</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Consider the Source
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Google Maps reviews are widely used</li>
                <li>Practo-style platforms may show verified visits</li>
                <li>Clinic website testimonials are chosen by the clinic and may not show every opinion</li>
                <li>Word of mouth from friends and family is often the most trusted</li>
              </ul>
            </div>

            {/* Section 5 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags in Doctor Reviews
              </h2>

              <p className="mb-4 text-gray-700">
                Be cautious when you see:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many reviews posted within a few days with similar wording</li>
                <li>Generic praise with no details about the visit</li>
                <li>Reviews that read like advertisements</li>
                <li>Promises of &quot;100% cure&quot; or guaranteed results</li>
                <li>Reviewers with no other activity or profile history</li>
                <li>Heavy pressure in reviews to choose a particular package</li>
                <li>Claims of results that sound medically impossible</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Claims to Treat Carefully
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>&quot;Cured in one visit&quot; or &quot;never had a problem again&quot;</li>
                <li>Reviews that give medical advice to others</li>
                <li>Comparisons that insult other doctors</li>
              </ul>

              <p className="text-gray-700">
                Honest feedback sounds like a real experience, not a sales pitch.
              </p>
            </div>

            {/* Section 6 — Verify Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Beyond Reviews: Verify the Doctor Yourself
              </h2>

              <p className="mb-4 text-gray-700">
                Reviews should be combined with factual checks.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Qualifications
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Postgraduate degree in obstetrics and gynaecology</li>
                <li>Registration with the relevant medical council</li>
                <li>Additional training in laparoscopy or hysteroscopy for surgical care</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Experience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular treatment of heavy periods, PCOS, fibroids, polyps and endometriosis</li>
                <li>Comfort with both medical and surgical options</li>
                <li>Participation in training, fellowships or conferences</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Facilities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound, including 3D/4D where relevant</li>
                <li>Hysteroscopy and laparoscopy availability</li>
                <li>Hygiene, privacy and emergency readiness</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Transparency
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear explanation of diagnosis and options</li>
                <li>Willingness to give a second opinion or written estimate</li>
                <li>Honest discussion of risks and limits</li>
              </ul>
            </div>

            {/* Section 7 — Dr. Priyanka Feedback */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does Dr. Priyanka Gynaec&apos;s Published Feedback Highlight?
              </h2>

              <p className="mb-4 text-gray-700">
                To keep this page honest, here is exactly what can be said from
                the clinic&apos;s website.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The site features a testimonials section with a rotating set of patient stories and a section for video stories</li>
                <li>The visible testimonial describes a family who discovered the clinic through Instagram and chose to consult</li>
                <li>The patient said they felt comfortable and understood from the first visit</li>
                <li>The doctor explained everything clearly and guided them at every step</li>
                <li>The patient expressed gratitude and recommended the clinic</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What This Does and Does Not Prove
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>It shows the communication style patients appreciate</li>
                <li>It suggests a supportive and explanatory approach</li>
                <li>It is not a heavy-period-specific review</li>
                <li>It is chosen by the clinic and should be read alongside independent reviews</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How You Can Verify
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Search &quot;Dr. Priyanka Gynaec Moradabad&quot; on Google Maps and read recent reviews</li>
                <li>Look at the clinic&apos;s Instagram and Facebook pages for patient stories</li>
                <li>Ask the clinic whether you can speak to someone who has had a similar treatment</li>
                <li>Ask friends and family in Moradabad for personal recommendations</li>
                <li>Call or WhatsApp the clinic with your questions before booking</li>
              </ul>
            </div>

            {/* Section 8 — Clinic Strengths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Clinic&apos;s Strengths as Presented on Its Website
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Patient-first philosophy: &quot;Her Health First&quot; is the core message</li>
                <li>Technology: High-definition 3D laparoscopy and 3D/4D ultrasound</li>
                <li>Scope of care: Gynaecology, laparoscopy, fertility and IVF, pregnancy, antenatal care and paediatric care</li>
                <li>Surgical range: Myomectomy, cystectomy, hysterectomy, polypectomy, endometriosis surgery and sterilisation</li>
                <li>Continuity of care: An integrated team that remembers your history</li>
                <li>Credentials mentioned on the website: Gold medal credentials and international fellowships</li>
                <li>Accessibility: Phone, WhatsApp and email contact, with a clear address</li>
              </ul>

              <p className="text-gray-700">
                These are the clinic&apos;s own statements. Verify any credential
                you consider important by asking the clinic directly.
              </p>
            </div>

            {/* Section 9 — Heavy Periods Refresher */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Heavy Periods (Quick Refresher)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Signs of Heavy Menstrual Bleeding
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods longer than 7 days</li>
                <li>Pad or tampon changes every 1–2 hours</li>
                <li>Double protection needed</li>
                <li>Clots larger than a coin</li>
                <li>Waking at night to change protection</li>
                <li>Tiredness, dizziness or breathlessness</li>
                <li>Avoiding work, travel or exercise</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Causes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS and ovulation problems</li>
                <li>Thyroid disorders</li>
                <li>Fibroids and polyps</li>
                <li>Adenomyosis and endometriosis</li>
                <li>Perimenopause</li>
                <li>Bleeding disorders</li>
                <li>Copper IUD or certain medicines</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Treatments
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tranexamic acid and pain relievers</li>
                <li>Hormonal pills or progesterone therapy</li>
                <li>Iron and vitamin supplements</li>
                <li>Hormonal IUD (LNG-IUS)</li>
                <li>Hysteroscopic polypectomy</li>
                <li>Laparoscopic myomectomy, cystectomy and endometriosis excision</li>
                <li>Hysterectomy only when other options are unsuitable</li>
              </ul>
            </div>

            {/* Section 10 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Clinic After Reading Reviews
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>How many women with heavy periods do you treat regularly?</li>
                <li>Which tests will I need and why?</li>
                <li>What non-surgical options can I try first?</li>
                <li>How will treatment affect my chances of pregnancy?</li>
                <li>If surgery is needed, can it be done by keyhole?</li>
                <li>What is the follow-up plan?</li>
                <li>Can I get a written estimate?</li>
              </ul>
            </div>

            {/* Section 11 — Leave Review */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Leave a Helpful Review After Your Visit
              </h2>

              <p className="mb-4 text-gray-700">
                If you decide to share your experience, you help other women.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Describe your concern in general terms without sharing private reports</li>
                <li>Mention what you appreciated, such as listening, clarity or follow-up</li>
                <li>Be honest about any difficulties, such as waiting time</li>
                <li>Avoid medical advice for others</li>
                <li>Do not exaggerate results</li>
                <li>Update your review if your situation changes</li>
                <li>Respect your own privacy and avoid sharing sensitive details</li>
              </ul>
            </div>

            {/* Section 12 — Diet and Lifestyle */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips While You Decide
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Iron-Rich Foods
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Spinach, methi and other leafy greens</li>
                <li>Lentils, chickpeas and rajma</li>
                <li>Dates, raisins and jaggery</li>
                <li>Beetroot, pomegranate and amla</li>
                <li>Eggs, fish or lean meat if non-vegetarian</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Healthy Habits
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pair iron foods with vitamin C</li>
                <li>Avoid tea or coffee right after meals</li>
                <li>Rest and stay hydrated</li>
                <li>Track your cycles in a diary</li>
                <li>Avoid aspirin unless your doctor approves</li>
                <li>Do not start hormonal pills on your own</li>
              </ul>
            </div>

            {/* Section 13 — Emergency */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Warning Signs: Do Not Wait for Reviews
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital immediately if you have:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaking more than one pad per hour for 2 hours or more</li>
                <li>Fainting, severe weakness or confusion</li>
                <li>Heavy bleeding during pregnancy</li>
                <li>Severe one-sided abdominal pain with bleeding</li>
                <li>Fever with foul-smelling discharge</li>
              </ul>
            </div>

            {/* Section 14 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Appointment Today
              </h2>

              <p className="mb-6 text-black">
                The best review is your own experience. A single consultation
                can answer your questions and help you decide.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Contact Dr. Priyanka Gynaec</p>
                    <p className="text-black">Doctor: Dr. Priyanka Pachauri</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone (Appointments)</p>
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
                      href="mailto:drpriyankagynec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynec@gmail.com
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
