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

export default function MaternityDoctorOnline() {
  const faqs = [
    {
      q: "How do I find a good maternity doctor online?",
      a: "Search by city, check the official website, verify credentials and read recent reviews.",
    },
    {
      q: "Can I book a maternity doctor appointment online?",
      a: "Yes. Most clinics accept bookings by phone, WhatsApp, email or their website.",
    },
    {
      q: "Can a maternity doctor treat me fully online?",
      a: "No. Scans, tests and examinations need an in-person visit.",
    },
    {
      q: "What can I discuss online with my doctor?",
      a: "General questions, report reviews, appointment planning and some follow-up queries.",
    },
    {
      q: "Is online pregnancy advice safe?",
      a: "Only when it comes from a qualified doctor who knows your case.",
    },
    {
      q: "Can I send my reports in advance?",
      a: "Often yes. Ask the clinic which number or email to use.",
    },
    {
      q: "What should I do in a pregnancy emergency?",
      a: "Go to your doctor or nearest hospital immediately. Do not wait for an online reply.",
    },
    {
      q: "When should I book my first pregnancy appointment?",
      a: "As soon as the test is positive, ideally within 8 to 12 weeks.",
    },
    {
      q: "How do I verify an online doctor's credentials?",
      a: "Check degrees, medical council registration and consistent details across platforms.",
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
                Maternity Doctor Online: How to Find, Book and Consult a Trusted Pregnancy Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                Today, almost every pregnancy journey begins on a phone. You
                search for a doctor, read reviews, check a website, send a
                WhatsApp message and book a slot, all before the first visit.
              </p>

              <p className="mb-4 text-gray-700">
                Searching for a maternity doctor online is convenient and smart.
                But the internet also has fake profiles, misleading ads and
                advice that does not fit your situation. This guide shows you
                how to use online tools safely, and where an online step must
                give way to an in-person visit.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Why women search for a maternity doctor online</li>
                <li>How to find a trustworthy doctor online</li>
                <li>How to verify credentials</li>
                <li>Ways to book and enquire online</li>
                <li>What online consultation can and cannot do</li>
                <li>How to prepare for a remote conversation</li>
                <li>Emergencies that must never wait for online advice</li>
                <li>Questions to ask before you choose</li>
              </ul>
            </div>

            {/* Section 2 — Why Search Online */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do Women Search for a Maternity Doctor Online?
              </h2>

              <p className="mb-4 text-gray-700">
                Digital search has changed how families choose doctors.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Reasons
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Convenience: You can research from home at any hour.</li>
                <li>Comparison: You can look at several doctors and clinics side by side.</li>
                <li>Privacy: Sensitive questions feel easier to start online.</li>
                <li>Speed: You can get an appointment slot without long queues.</li>
                <li>Access: Women in smaller towns can find specialists nearby or in the next city.</li>
                <li>Pregnancy fatigue and nausea: Early pregnancy can make travelling to explore clinics difficult.</li>
                <li>Busy schedules: Working women can book outside office hours.</li>
              </ul>

              <p className="text-gray-700">
                But remember: Online search is a starting point. Pregnancy care
                still needs physical examinations, scans and tests.
              </p>
            </div>

            {/* Section 3 — Online Tools */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Online Tools Can Help You Do
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Find clinics and doctors through search engines and maps</li>
                <li>Read the doctor&apos;s profile on an official website</li>
                <li>Check patient reviews and ratings</li>
                <li>See the list of services offered</li>
                <li>Book or request an appointment by phone, WhatsApp, email or website</li>
                <li>Ask basic questions before your first visit</li>
                <li>Share past reports in advance</li>
                <li>Get reminders for appointments</li>
                <li>Ask short follow-up questions after a visit, if the clinic allows</li>
              </ul>
            </div>

            {/* Section 4 — Find Trustworthy Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Find a Trustworthy Maternity Doctor Online
              </h2>

              <p className="mb-4 text-gray-700">
                Not every listing is reliable. Use these steps.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Search Smartly
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Add your city or area, such as &quot;maternity doctor in Moradabad.&quot;</li>
                <li>Use specific terms like &quot;gynaecologist for pregnancy&quot; or &quot;antenatal care.&quot;</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Check the Official Website
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Look for a clear doctor profile, services, address and contact details.</li>
                <li>Make sure the site looks professional and the information is consistent.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Read Reviews Carefully
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Look for recent, detailed reviews, not only star ratings.</li>
                <li>Notice repeated comments about communication, behavior and care quality.</li>
                <li>Be cautious if all reviews sound identical.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Compare Information Across Platforms
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Name, address and phone number should match on the website, maps listing and social pages.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Look at Social Media With Caution
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Social pages can show the clinic&apos;s style and patient stories.</li>
                <li>They should not replace checking credentials.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Ask Friends and Family
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Personal recommendations add trust to what you find online.</li>
              </ul>
            </div>

            {/* Section 5 — Verify Credentials */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Verify a Doctor&apos;s Credentials Online
              </h2>

              <p className="mb-4 text-gray-700">
                Do not rely only on advertising.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check qualifications: Look for MS, MD or DNB in obstetrics and gynaecology.</li>
                <li>Confirm medical registration: Valid registration with a state or national medical council is essential.</li>
                <li>Review experience: Look for the types of cases the doctor handles.</li>
                <li>Look for extra training: Fellowships and specialized courses show commitment to learning.</li>
                <li>Notice professionalism: A confident doctor is comfortable giving clear information.</li>
                <li>Watch for red flags: guaranteed results, pressure to decide fast, vague answers or no contact details.</li>
              </ul>
            </div>

            {/* Section 6 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags When Choosing a Doctor Online
              </h2>

              <p className="mb-4 text-gray-700">
                Be careful if a profile or clinic:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Promises &quot;100% guaranteed&quot; outcomes</li>
                <li>Has no clear address, phone number or doctor name</li>
                <li>Shows only stock photos and no real information</li>
                <li>Pushes for surgery or expensive packages before examining you</li>
                <li>Refuses to answer basic questions</li>
                <li>Uses fake-looking reviews or exaggerated claims</li>
                <li>Offers to diagnose serious problems completely over chat</li>
                <li>Asks for payment before confirming basic details</li>
              </ul>

              <p className="text-gray-700">
                Trust your instincts. If something feels wrong, look elsewhere.
              </p>
            </div>

            {/* Section 7 — Book Online */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Book a Maternity Doctor Online
              </h2>

              <p className="mb-4 text-gray-700">
                Most clinics offer several simple options.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common Ways to Book
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Phone call: Speak to the clinic and choose a time</li>
                <li>WhatsApp message: Send your name, weeks of pregnancy and preferred time</li>
                <li>Email: Share questions or reports in writing</li>
                <li>Website &quot;Book Appointment&quot; or contact form: Request a slot online</li>
                <li>Social media message: Some clinics respond to enquiries, though direct contact is more reliable</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tips for a Smooth Booking
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>State clearly that you are pregnant and how many weeks you are</li>
                <li>Mention any urgent symptoms so the clinic can prioritize you</li>
                <li>Ask about the consultation fee and timings</li>
                <li>Ask what documents to bring</li>
                <li>Confirm the clinic&apos;s address and how to reach it</li>
                <li>Save the clinic&apos;s phone and WhatsApp number in your phone</li>
              </ul>
            </div>

            {/* Section 8 — Online vs In-Person */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Can Be Done Online, and What Needs a Visit?
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding this difference protects your health.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Usually Fine Online
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Finding information and comparing doctors</li>
                <li>Booking appointments</li>
                <li>Asking general questions before your first visit</li>
                <li>Sharing existing reports for review</li>
                <li>Clarifying diet, supplement or appointment instructions</li>
                <li>Follow-up questions after a visit, where the clinic allows</li>
                <li>Reminders for scans and check-ups</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Needs an In-Person Visit
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirming pregnancy and the first antenatal check-up</li>
                <li>Physical examination, blood pressure and weight checks</li>
                <li>Ultrasound scans and blood or urine tests</li>
                <li>Any new or worrying symptom</li>
                <li>Checking your baby&apos;s heartbeat and growth</li>
                <li>Delivery planning and labor care</li>
                <li>Wound checks after a C-section</li>
                <li>Postnatal check-up at about 6 weeks</li>
              </ul>

              <p className="text-gray-700">
                Key point: Online help supports your care. It cannot replace
                examination and scans.
              </p>
            </div>

            {/* Section 9 — Tele-Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is a Tele-Consultation Right for You?
              </h2>

              <p className="mb-4 text-gray-700">
                Some clinics offer video or phone consultations. Whether it fits
                depends on your situation.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                It May Help When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You need to clarify advice from a recent visit</li>
                <li>You want to discuss reports already reviewed</li>
                <li>You live far away and need a quick follow-up</li>
                <li>You have a simple question that does not need an examination</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                It Is Not Suitable When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You have bleeding, severe pain, fluid leakage or reduced baby movements</li>
                <li>You are due for scans, blood tests or blood pressure checks</li>
                <li>You are in labor or suspect labor</li>
                <li>Your symptoms are new, worsening or unclear</li>
              </ul>

              <p className="text-gray-700">
                Before booking: Ask the clinic directly whether tele-consultation
                is available for your needs.
              </p>
            </div>

            {/* Section 10 — Prepare */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for an Online or Remote Conversation
              </h2>

              <p className="mb-4 text-gray-700">
                A little preparation makes the conversation much more useful.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Keep Ready
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your name, age and number of weeks of pregnancy</li>
                <li>The date of your last menstrual period</li>
                <li>Your current medicines and supplements</li>
                <li>Recent scan and blood test reports (clear photos or PDFs)</li>
                <li>Your blood pressure and weight readings, if you have them</li>
                <li>A list of your symptoms and when they started</li>
                <li>Your questions written down</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Video or Phone Calls
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose a quiet place with good network</li>
                <li>Keep your phone charged</li>
                <li>Have a pen and notebook ready</li>
                <li>Ask a family member to join if you wish</li>
              </ul>
            </div>

            {/* Section 11 — Privacy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Protecting Your Privacy and Safety Online
              </h2>

              <p className="mb-4 text-gray-700">
                Your health information is sensitive.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Share reports only with the clinic&apos;s official contact numbers or email.</li>
                <li>Avoid posting medical details on public social media pages.</li>
                <li>Be careful with payment links from unknown numbers or profiles.</li>
                <li>Verify the number on the official website before sending documents.</li>
                <li>Do not follow medical advice from anonymous groups or unverified accounts.</li>
                <li>Keep your own copies of all reports and prescriptions.</li>
              </ul>
            </div>

            {/* Section 12 — Emergencies */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergencies: Never Wait for an Online Reply
              </h2>

              <p className="mb-4 text-gray-700">
                Some symptoms need immediate in-person care. Do not wait for a
                message or call-back.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Go to Your Doctor or the Nearest Hospital Immediately If You Have
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding or leaking of fluid</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>Severe headache, blurred vision or sudden swelling of the face and hands</li>
                <li>High fever</li>
                <li>Regular contractions before 37 weeks</li>
                <li>Chest pain or difficulty breathing</li>
                <li>Persistent vomiting with inability to drink</li>
                <li>Sudden pain or swelling in one leg</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prepare in Advance
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Save your doctor&apos;s phone number</li>
                <li>Know the route to the nearest hospital</li>
                <li>Keep your reports and ID together</li>
                <li>Tell your family who to call</li>
              </ul>
            </div>

            {/* Section 13 — Check-Up Plan */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Standard Pregnancy Check-Up Plan to Expect
              </h2>

              <p className="mb-4 text-gray-700">
                Even if you start online, your care will follow a physical
                schedule.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early pregnancy: first visit within about 8 to 12 weeks, with scan and tests</li>
                <li>Up to 28 weeks: about monthly visits</li>
                <li>28 to 36 weeks: about every 2 weeks</li>
                <li>36 weeks to delivery: weekly visits</li>
                <li>After delivery: check-up at about 6 weeks, and earlier if needed</li>
                <li>Typical total: around 10 to 14 visits in a normal pregnancy, and more for high-risk cases.</li>
              </ul>

              <p className="text-gray-700">
                For structured prenatal care, see the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/antenatal-services"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Antenatal Services
                </a>{" "}
                page.
              </p>
            </div>

            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Online Pregnancy Care
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: &quot;I can manage the whole pregnancy online.&quot; Fact: Scans, tests and examinations must be done in person.</li>
                <li>Myth: &quot;Online advice is always safe.&quot; Fact: Only advice from a qualified doctor who knows your case is reliable.</li>
                <li>Myth: &quot;A high rating means a great doctor.&quot; Fact: Reviews help, but you should verify credentials too.</li>
                <li>Myth: &quot;Searching symptoms is as good as seeing a doctor.&quot; Fact: Online searches cannot examine you or your baby.</li>
                <li>Myth: &quot;I can wait to see a doctor if I feel fine.&quot; Fact: Many problems begin silently, so early visits matter.</li>
              </ul>
            </div>

            {/* Section 15 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-6 text-black">
                Dr. Priyanka Pachauri: Best Gynaecologist in Moradabad
              </p>

              <p className="mb-6 text-black">
                Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Phone</p>
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
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
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
