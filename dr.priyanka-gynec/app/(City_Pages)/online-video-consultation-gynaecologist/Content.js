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
  Globe,
  Video,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function OnlineVideoConsultation() {
  const faqs = [
    {
      q: "Can I get an online video consultation with a gynaecologist in Moradabad?",
      a: "You can call or message Dr. Priyanka Gynaec on WhatsApp to discuss your concern and confirm the best next step.",
    },
    {
      q: "Does the website have a video consultation booking system?",
      a: "No dedicated video consultation tool is currently visible; contact is primarily through phone and WhatsApp.",
    },
    {
      q: "Can all gynaecological issues be handled online?",
      a: "No, physical examinations, scans, and procedures require an in-person visit.",
    },
    {
      q: "Is WhatsApp consultation a good option for quick queries?",
      a: "Yes, it's a convenient way to describe your concern and get initial guidance from the clinic.",
    },
    {
      q: "How can I contact the clinic?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located for in-person visits?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Can I send my previous reports before a consultation?",
      a: "Yes, you can email them to drpriyanka@gynaecologistmoradabad.com in advance.",
    },
    {
      q: "Is gynaecologistmoradabad.com a reliable, informative website?",
      a: "Yes, it clearly lists services, technology used, testimonials, and verified contact details.",
    },
    {
      q: "Is remote guidance suitable for emergencies?",
      a: "No, emergencies like heavy bleeding or severe pain need immediate in-person or emergency care.",
    },
    {
      q: "Can follow-up questions after a clinic visit be handled by phone or WhatsApp?",
      a: "Yes, quick follow-up clarifications can often be handled this way.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Online Video Consultation Gynaecologist: A Complete Guide
              </h1>

              <p className="text-gray-700 mb-4">
                In today's fast-paced world, many women prefer discussing sensitive health concerns from the comfort and privacy of their own homes before deciding whether an in-person visit is needed. An online video consultation gynaecologist service bridges that gap, offering guidance, reassurance, and initial evaluation without requiring an immediate clinic visit.
              </p>

              <p className="text-gray-700">
                This guide explains how online gynaecology consultations work, when they're useful, their limitations, and how to connect with Dr. Priyanka Pachauri, a well-known gynaecologist in Moradabad, for guidance on your health concerns.
              </p>
            </div>

            {/* Section 2 — What Is an Online Video Consultation in Gynaecology */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is an Online Video Consultation in Gynaecology?
              </h2>

              <p className="text-gray-700 mb-4">
                An online video consultation allows a patient to speak with a gynaecologist remotely, using a video call, phone call, or messaging platform, instead of visiting the clinic in person for the initial discussion. It typically involves:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A live video or phone conversation where the patient describes symptoms and concerns</li>
                <li>The doctor asking detailed questions to understand the situation, similar to an in-person visit</li>
                <li>Guidance on next steps — whether home care advice, medication guidance, or a recommendation to visit in person for examination or tests</li>
                <li>Sharing of previous reports, prescriptions, or scan images digitally for the doctor's review</li>
                <li>Follow-up communication through call or messaging for quick questions after the consultation</li>
              </ul>
            </div>

            {/* Section 3 — Why Online Consultations Have Become Popular */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Online Consultations Have Become Popular
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>They save time by removing travel and waiting-room delays for simple queries</li>
                <li>They offer privacy for discussing sensitive topics from a comfortable, familiar space</li>
                <li>They allow quick access to medical guidance when an in-person visit isn't immediately possible</li>
                <li>They're useful for follow-up questions after an initial in-person consultation</li>
                <li>They help women in nearby towns or rural areas around Moradabad access specialist guidance without long travel</li>
                <li>They provide a good starting point to understand whether a concern is urgent or can wait for a scheduled visit</li>
              </ul>
            </div>

            {/* Section 4 — When an Online Consultation Is Genuinely Useful */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When an Online Consultation Is Genuinely Useful
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>General queries about symptoms</strong> – understanding whether something needs urgent attention or can be monitored</li>
                <li><strong>Follow-up after a previous visit</strong> – discussing test results, medication response, or recovery progress</li>
                <li><strong>Prescription renewal or clarification</strong> – for ongoing, previously diagnosed conditions</li>
                <li><strong>Guidance on pregnancy-related questions</strong> – for non-urgent concerns between scheduled antenatal visits</li>
                <li><strong>Discussing reports or scans</strong> – reviewing previous test results and deciding on next steps</li>
                <li><strong>Initial guidance on family planning or contraception options</strong> – before an in-person visit for procedures</li>
                <li><strong>Lifestyle and general health advice</strong> – related to periods, PCOS management, or general wellness questions</li>
              </ul>
            </div>

            {/* Section 5 — Limitations of Online Consultations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Limitations of Online Consultations
              </h2>

              <p className="text-gray-700 mb-4">
                While convenient, online consultations cannot fully replace in-person care in every situation. It's important to understand these limitations:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A physical or pelvic examination cannot be performed over video, which is necessary for many diagnoses</li>
                <li>Ultrasound scans, lab tests, and other diagnostic procedures require an in-person visit</li>
                <li>Emergency situations, such as heavy bleeding, severe pain, or pregnancy complications, need immediate in-person or emergency care, not a video call</li>
                <li>Some conditions require hands-on assessment for an accurate diagnosis</li>
                <li>Surgical consultations ultimately require in-person evaluation before any procedure</li>
                <li>A good doctor will always recommend an in-person visit when the situation requires it, rather than trying to manage everything remotely</li>
              </ul>
            </div>

            {/* Section 6 — How to Prepare for a Video or Phone Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for a Video or Phone Consultation
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Find a quiet, private space where you feel comfortable discussing personal health details</li>
                <li>Write down your symptoms, their duration, and any patterns you've noticed beforehand</li>
                <li>Keep any previous reports, prescriptions, or scan images ready to share if needed</li>
                <li>Prepare a list of specific questions so you don't forget anything important during the call</li>
                <li>Ensure a stable internet or phone connection to avoid disruptions during the consultation</li>
                <li>Be honest and detailed about your symptoms, just as you would in an in-person visit</li>
              </ul>
            </div>

            {/* Section 7 — What a Good Remote Consultation Should Include */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What a Good Remote Consultation Should Include
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A patient, unhurried discussion of your symptoms and concerns</li>
                <li>Clear, honest guidance on whether your situation needs an in-person visit</li>
                <li>Simple, practical advice you can follow immediately if appropriate</li>
                <li>A clear explanation of any medication or treatment being suggested</li>
                <li>Transparency about the limitations of a remote assessment for your specific concern</li>
                <li>A clear plan for follow-up, whether by phone, message, or an in-person appointment</li>
              </ul>
            </div>

            {/* Section 8 — Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri: Remote Guidance and In-Person Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is a well-recognised gynaecologist in Moradabad offering comprehensive women's health care. While a full pelvic examination, ultrasound, or procedure always requires an in-person visit, many initial questions, follow-ups, and guidance discussions can be started through a phone call or WhatsApp message before deciding on the next step. Her clinic follows the guiding principle of "Her Health First," prioritising patient comfort and clear communication at every stage.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Relevant Services Offered
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Gynaecology and general women's health consultations</li>
                    <li>Fertility evaluation and IVF treatment guidance</li>
                    <li>Pregnancy, antenatal, and postnatal care</li>
                    <li>PCOS and hormonal imbalance evaluation</li>
                    <li>3D laparoscopic gynaecological surgery for conditions requiring intervention</li>
                    <li>Diagnostic hysteroscopy and related evaluations</li>
                    <li>Endometriosis and chronic pelvic pain management</li>
                    <li>Paediatric consultations for younger patients</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How to Reach Out for Remote Guidance
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Call the clinic directly to discuss your concern and understand whether a phone discussion, or an in-person visit, is the right next step</li>
                    <li>Message on WhatsApp for a quick, convenient way to describe your symptoms and ask initial questions</li>
                    <li>Email your reports or scan images in advance so the doctor has context before your consultation</li>
                    <li>Follow up after an in-person visit through call or WhatsApp for quick clarifications about your treatment plan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Why Patients Trust This Clinic
                  </h3>
                  <p className="text-gray-700 mb-2">According to the clinic's own patient communication, trust is built on:</p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li><strong>Expertise with heart</strong> – strong academic credentials and specialised fellowship training in gynaecology and related fields</li>
                    <li><strong>Continuity of care</strong> – the same team tracking your history whether communication happens by phone, message, or in person</li>
                    <li><strong>Outcomes patients hope for</strong> – clear guidance, appropriate next steps, and timely care when it's genuinely needed</li>
                    <li><strong>Trust earned daily</strong> – reputation built through patient referrals rather than paid promotion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 9 — Common Myths About Online Gynaecology Consultations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Online Gynaecology Consultations
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>"Online consultations can replace all clinic visits"</strong> – Many conditions still require physical examination, scans, or procedures done in person</li>
                <li><strong>"It's not private or secure"</strong> – A reputable clinic maintains confidentiality just as it would during an in-person visit</li>
                <li><strong>"Doctors can't give useful advice without seeing you"</strong> – A lot of valuable guidance, especially for follow-ups and general queries, can be given remotely</li>
                <li><strong>"It's only useful for minor issues"</strong> – It can also help you quickly determine if a symptom needs urgent, in-person attention</li>
                <li><strong>"WhatsApp consultations aren't real medical advice"</strong> – When used to communicate with a genuine, qualified doctor, it's simply another channel for the same professional guidance</li>
              </ul>
            </div>

            {/* Section 10 — How to Use Remote Consultation Effectively */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: How to Use Remote Consultation Effectively
              </h2>

              <div className="space-y-3">
                <p className="text-gray-700">
                  <strong>Step 1:</strong> Identify your concern and decide if it's urgent (needing immediate in-person care) or can start with a call or message.
                </p>
                <p className="text-gray-700">
                  <strong>Step 2:</strong> Call or WhatsApp the clinic to briefly explain your situation.
                </p>
                <p className="text-gray-700">
                  <strong>Step 3:</strong> Share any relevant previous reports or scan images if requested.
                </p>
                <p className="text-gray-700">
                  <strong>Step 4:</strong> Discuss your symptoms honestly and ask all your questions clearly.
                </p>
                <p className="text-gray-700">
                  <strong>Step 5:</strong> Follow the doctor's guidance on whether an in-person visit is needed next.
                </p>
                <p className="text-gray-700">
                  <strong>Step 6:</strong> Book an in-person appointment promptly if advised, especially for examination or procedures.
                </p>
                <p className="text-gray-700">
                  <strong>Step 7:</strong> Use follow-up calls or messages for quick clarifications after your visit or treatment.
                </p>
              </div>
            </div>

            {/* Section 11 — Benefits of Combining Remote Guidance with Local Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Combining Remote Guidance with a Local Moradabad Specialist
              </h2>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Quick initial guidance without needing to travel for every small concern</li>
                <li>A trusted doctor who already knows your history for both remote and in-person visits</li>
                <li>Faster decision-making on whether your situation needs urgent, in-person attention</li>
                <li>Continuity of care that connects phone or message conversations with your full medical record</li>
                <li>Lower overall cost and time compared to unnecessary trips for issues that could be resolved with a quick conversation</li>
              </ul>
            </div>

            {/* Section 12 — Contact Details */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                For anyone looking to connect with a gynaecologist in Moradabad through a call, message, or in-person visit, here are the verified contact details from the official website:
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Award size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p className="text-black">Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p className="text-black">Dr. Priyanka Gynaec – Fertility • Maternity • 3D Laparoscopy</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Phone / Call for Guidance or Appointment</p>
                      <a href="tel:9079765578" className="text-black hover:underline">
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Video size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a href="tel:8979670705" className="text-black hover:underline">
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:drpriyanka@gynaecologistmoradabad.com" className="text-black hover:underline">
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a href="https://www.gynaecologistmoradabad.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                        https://www.gynaecologistmoradabad.com/
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 13 — Website Analysis */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                gynaecologistmoradabad.com
              </h2>

              <p className="text-gray-700 mb-4">
                Since a short analysis of the official website was requested, here is a quick and honest breakdown:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>Direct contact channels available</strong> – Phone and WhatsApp numbers are clearly listed in the header and footer, making it easy to reach the clinic for an initial conversation.</li>
                <li><strong>No dedicated online video consultation booking system currently visible</strong> – The website does not appear to feature a specific video-call booking tool or telemedicine portal; communication is primarily supported through phone and WhatsApp.</li>
                <li><strong>Broad service range described</strong> – The site clearly lists gynaecology, fertility, and maternity services, helping patients understand what can be discussed even in an initial phone conversation.</li>
                <li><strong>Reassuring, patient-first messaging</strong> – The tagline "Her Health First" supports a comfortable tone for reaching out with sensitive questions by phone or message.</li>
                <li><strong>Genuine patient testimonials</strong> – Real feedback (such as from patient "Rudri J") adds authentic social proof about the overall patient experience.</li>
                <li><strong>Local SEO fundamentals present</strong> – A complete clinic address with pin code is listed, useful for patients who will eventually need an in-person visit.</li>
                <li><strong>Improvement opportunity</strong> – Adding a dedicated online video consultation booking feature, along with clear information on what can and cannot be handled remotely, could make it easier for patients searching specifically for virtual consultation options.</li>
              </ul>
            </div>

            {/* Section 14 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}