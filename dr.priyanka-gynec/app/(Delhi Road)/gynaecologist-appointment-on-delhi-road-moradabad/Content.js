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
  MessageCircle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function GynaecologistAppointmentDelhiRoadMoradabad() {
  const faqs = [
    {
      q: "Do I need to fast before a gynaecology appointment?",
      a: "Usually not. Some blood tests need fasting, and the clinic will tell you when you book.",
    },
    {
      q: "How long does a consultation take?",
      a: "Typically fifteen to thirty minutes, though longer visits may be needed for detailed concerns or procedures.",
    },
    {
      q: "Can I book for someone else, such as my daughter or mother?",
      a: "Yes. Share the reason for the visit with the clinic so the right time and doctor are arranged.",
    },
    {
      q: "What if I need to cancel or reschedule?",
      a: "Inform the clinic as early as possible, as this helps other patients.",
    },
    {
      q: "Should I shave or wax before the visit?",
      a: "No, it is not required. Doctors are focused on your health, not grooming.",
    },
    {
      q: "How often should I have a check-up?",
      a: "A yearly visit is a good habit. Your doctor may advise a different schedule depending on your age and health.",
    },
    {
      q: "Can I consult a gynaecologist if I am not married?",
      a: "Yes. Gynaecological care is for every woman, regardless of marital status.",
    },
    {
      q: "Can I visit during my period?",
      a: "For many consultations this is fine, though a Pap smear is usually better scheduled outside your period.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering women’s health consultations, pregnancy care, and gynaecological treatment.",
    },
    {
      q: "What facilities are available at Dr. Priyanka Pachauri’s clinic?",
      a: "The clinic provides consultation, ultrasound support, laboratory investigations, antenatal care, pregnancy monitoring, and guidance for gynaecological treatment where required.",
    },
    {
      q: "How can I book an appointment near Delhi Road, Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic’s official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Gynaecologist Appointment on Delhi Road Moradabad: How to Book, Prepare and Get the Most From Your Visit
              </h1>


              <p className="text-gray-700 mb-4">
                Many women know they should see a gynaecologist but keep postponing it. Some are unsure how to book, some feel nervous about the examination, and others simply do not know what to expect. A little preparation removes most of this worry.
              </p>


              <p className="text-gray-700">
                If you are planning a gynaecologist appointment on Delhi Road Moradabad, this guide walks you through when to book, how to choose a doctor, what to prepare, and what happens during the visit.
              </p>
            </div>


            {/* Section 2 — Why Book an Appointment? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Book an Appointment?
              </h2>


              <p className="text-gray-700">
                A gynaecologist is not only for pregnancy or illness. A planned visit lets the doctor listen carefully, examine you without rush, and arrange the right tests. Walk-in visits are possible for emergencies, but an appointment usually means shorter waiting, more time with the doctor, and better continuity of care.
              </p>
            </div>


            {/* Section 3 — Why Delhi Road Is Convenient */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Delhi Road Is a Convenient Location
              </h2>


              <p className="text-gray-700">
                Delhi Road is well connected within Moradabad, with clinics, diagnostic labs, pharmacies, and hospitals located close together. This means you can consult the doctor, complete a scan or blood test, and collect medicines in one trip. For women managing household duties, work, or travel with children, that saves valuable time.
              </p>
            </div>


            {/* Section 4 — When Should You Book? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Book a Gynaecologist Appointment?
              </h2>


              <p className="text-gray-700 mb-4">
                You can book for routine care or for a specific concern.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Routine Reasons
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Yearly women’s health check-up</li>
                    <li>Pap smear and HPV screening</li>
                    <li>Contraception and family planning advice</li>
                    <li>Pre-pregnancy counselling</li>
                    <li>Menopause guidance</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Symptom-Related Reasons
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Irregular, heavy, or painful periods</li>
                    <li>Missed periods with a negative pregnancy test</li>
                    <li>Unusual discharge, itching, or burning</li>
                    <li>Pelvic or lower abdominal pain</li>
                    <li>Pain during intercourse</li>
                    <li>Difficulty conceiving</li>
                    <li>A positive pregnancy test</li>
                    <li>Breast lumps or changes</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Urgent Reasons: Do Not Wait for an Appointment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Sudden heavy bleeding</li>
                    <li>Severe abdominal pain</li>
                    <li>Bleeding or fluid leakage during pregnancy</li>
                    <li>Reduced baby movements</li>
                    <li>High fever with pelvic pain</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    In emergencies, go directly to the nearest hospital.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 5 — How to Book Your Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Book Your Appointment
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    By Phone
                  </h3>
                  <p className="text-gray-700">
                    Calling the clinic is the simplest method. Ask for the doctor’s available days, consultation timings, and the earliest slot.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Through the Clinic’s Website or Messaging
                  </h3>
                  <p className="text-gray-700">
                    Some clinics accept requests through their website or messaging apps. Keep your confirmation message.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    In Person
                  </h3>
                  <p className="text-gray-700">
                    You can visit the clinic reception and book a slot. This also lets you see the facilities before the actual visit.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Through a Family Referral
                  </h3>
                  <p className="text-gray-700">
                    Many women choose a doctor recommended by relatives or friends. Personal experience is a valuable guide.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 6 — Questions to Ask While Booking */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask While Booking
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What are the doctor’s timings, and is the appointment fixed or token-based?</li>
                <li>What is the consultation fee?</li>
                <li>Is a lady doctor available?</li>
                <li>Are scans and lab tests available on site?</li>
                <li>What documents should I bring?</li>
                <li>Is there parking, and is the clinic accessible for elderly patients?</li>
              </ul>
            </div>


            {/* Section 7 — Choosing the Right Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing the Right Doctor
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualifications and Registration
                  </h3>
                  <p className="text-gray-700">
                    Look for MD, MS, DGO, or DNB in Obstetrics and Gynaecology, along with a valid medical council registration.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience With Your Concern
                  </h3>
                  <p className="text-gray-700">
                    Some doctors focus on pregnancy, while others focus on fertility, hormonal conditions, or surgery. Match the doctor to your need.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Communication Style
                  </h3>
                  <p className="text-gray-700">
                    Choose someone who listens, explains simply, and respects your privacy.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Facilities
                  </h3>
                  <p className="text-gray-700">
                    A clean clinic, ultrasound support, laboratory access, and emergency arrangements add reassurance.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Ethical Advice
                  </h3>
                  <p className="text-gray-700">
                    A good doctor recommends only the tests and procedures that are truly necessary.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Costs
                  </h3>
                  <p className="text-gray-700">
                    Fees for consultation, tests, and procedures should be explained in advance.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reputation
                  </h3>
                  <p className="text-gray-700">
                    Honest feedback from other women is often the most reliable indicator.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 8 — Timing Your Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Timing Your Appointment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>For general consultation:</strong> Any convenient day works.</li>
                <li><strong>For a Pap smear:</strong> Try to avoid the days of your period, and avoid intercourse, vaginal creams, or douching for a day or two before the test unless the doctor advises otherwise.</li>
                <li><strong>For pelvic ultrasound:</strong> Some scans are better done at a particular point in your cycle, so ask the clinic.</li>
                <li><strong>For pregnancy:</strong> Book as soon as you get a positive test, ideally within the first eight to twelve weeks.</li>
                <li><strong>For irregular periods:</strong> Book even if you are not bleeding, since your history and tests matter more than timing.</li>
              </ul>
            </div>


            {/* Section 9 — How to Prepare for Your Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your Visit
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Track your cycle:</strong> Note the first day of your last period, usual cycle length, and any changes.</li>
                <li><strong>List your symptoms:</strong> Include when they began, how often they occur, and what makes them better or worse.</li>
                <li><strong>Gather documents:</strong> Bring earlier prescriptions, scan reports, blood tests, and any discharge summaries.</li>
                <li><strong>List medicines:</strong> Include vitamins, herbal products, and home remedies, since some can affect treatment.</li>
                <li><strong>Know your history:</strong> Be ready to share past pregnancies, surgeries, allergies, and family history of diabetes, thyroid disease, or cancer.</li>
                <li><strong>Write your questions:</strong> It is easy to forget details once you are in the consultation room.</li>
                <li><strong>Dress comfortably:</strong> Loose clothing makes any examination easier.</li>
                <li><strong>Bring support if you wish:</strong> A family member or friend can accompany you for the discussion.</li>
              </ul>
            </div>


            {/* Section 10 — What Happens During the Appointment? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During the Appointment?
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Registration:</strong> You will fill in basic details and may be asked about your reason for visiting.</li>
                <li><strong>Preliminary checks:</strong> A nurse may record your weight, blood pressure, and sometimes pulse or temperature.</li>
                <li><strong>Conversation:</strong> The doctor asks about your periods, pregnancies, symptoms, medicines, and lifestyle. Honest answers help her reach the right diagnosis.</li>
                <li><strong>Examination, if needed:</strong> Depending on your concern, an abdominal or pelvic examination may be advised. The doctor explains each step and asks for your consent.</li>
                <li><strong>Tests:</strong> Blood tests, urine tests, ultrasound, or a Pap smear may be suggested.</li>
                <li><strong>Plan:</strong> You receive an explanation, treatment suggestions, and follow-up timing.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You can pause, ask questions, or request a female attendant at any point.
              </p>
            </div>


            {/* Section 11 — Pelvic Examination */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What About the Pelvic Examination?
              </h2>


              <p className="text-gray-700 mb-4">
                Many women feel anxious about this. It is usually brief and, for most women, causes only mild discomfort. Helpful tips include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Tell the doctor if it is your first time</li>
                <li>Breathe slowly and relax your muscles</li>
                <li>Ask the doctor to explain each step</li>
                <li>Say stop if you feel pain</li>
                <li>Request a female attendant if you prefer</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Not every visit needs an internal examination. Many concerns can be assessed through conversation and ultrasound.
              </p>
            </div>


            {/* Section 12 — Tests You May Be Advised */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tests You May Be Advised
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Ultrasound to examine the uterus, ovaries, or the baby</li>
                <li>Pap smear for cervical screening</li>
                <li>HPV test in selected cases</li>
                <li>Blood tests for haemoglobin, sugar, thyroid, and hormones</li>
                <li>Urine tests for infection or pregnancy</li>
                <li>Vaginal swab for infection</li>
                <li>Breast examination or referral for further screening</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask why each test is needed, what it involves, and when the results will be ready.
              </p>
            </div>


            {/* Section 13 — After the Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                After the Appointment
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Follow the prescription exactly and complete the full course</li>
                <li>Book your next visit before you leave, if possible</li>
                <li>Keep all reports in one folder</li>
                <li>Note any new symptoms and report them early</li>
                <li>Call the clinic if you do not understand an instruction</li>
                <li>Do not stop medicines without asking your doctor</li>
              </ul>
            </div>


            {/* Section 14 — Telephone and Video Consultations */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Telephone and Video Consultations
              </h2>


              <p className="text-gray-700">
                Some doctors offer remote consultations for follow-ups, report reviews, and simple concerns. They are convenient, especially if travel is difficult. However, many conditions need a physical examination, scan, or procedure, so your doctor will advise when a visit is necessary.
              </p>
            </div>


            {/* Section 15 — Common Concerns Before a First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Concerns Before a First Visit
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “I feel embarrassed.”
                  </h3>
                  <p className="text-gray-700">
                    Doctors discuss these topics daily, and your comfort is their priority.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “I am not married.”
                  </h3>
                  <p className="text-gray-700">
                    Gynaecological care is for every woman, regardless of marital status.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “I am on my period.”
                  </h3>
                  <p className="text-gray-700">
                    For many consultations this is fine, though a Pap smear is usually better scheduled outside your period.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “What if I need an examination?”
                  </h3>
                  <p className="text-gray-700">
                    The doctor will explain and ask for consent. You can pause or stop at any time.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Will my information be shared?”
                  </h3>
                  <p className="text-gray-700">
                    Reputable clinics maintain confidentiality as a core professional duty.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 16 — Questions to Ask Your Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is the likely cause of my symptoms?</li>
                <li>Which tests do I need, and are they urgent?</li>
                <li>What are my treatment options?</li>
                <li>Are there any side effects or risks?</li>
                <li>How soon should I notice improvement?</li>
                <li>When should I return for follow-up?</li>
              </ul>
            </div>


            {/* Section 17 — Mistakes to Avoid */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Mistakes to Avoid
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Postponing a visit because symptoms seem minor</li>
                <li>Hiding information out of embarrassment</li>
                <li>Self-medicating with hormonal tablets or antibiotics</li>
                <li>Skipping follow-up once you feel better</li>
                <li>Searching the internet for a diagnosis instead of consulting a doctor</li>
                <li>Comparing your reports with other women’s reports</li>
              </ul>
            </div>


            {/* Section 18 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist Appointment in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For women in Moradabad seeking a comfortable and well-organised consultation, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers comprehensive women’s healthcare. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first philosophy, &quot;Her Health First&quot;.
              </p>


              <p className="text-gray-700 mb-4">
                Her clinic provides consultations for menstrual problems, PCOS, fertility concerns, infections, pregnancy care, menopause, adolescent health, and preventive screening. With ultrasound support, laboratory investigations, and clear treatment planning, patients can receive timely care close to Delhi Road, Moradabad.
              </p>


              <p className="text-gray-700 mb-4">
                Whether you are booking a routine check-up or consulting for a specific concern, Dr. Priyanka Pachauri focuses on respectful communication, privacy, and personalised guidance for every patient.
              </p>
            </div>


            {/* Section 19 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Appointment
              </h2>


              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>


                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec Clinic</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh, 244001
                      </p>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>


                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>


                        <span className="text-gray-400">|</span>


                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>


                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynaec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynaec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <MessageCircle size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Social Media</p>
                      <div className="space-y-1">
                        <a
                          href="https://www.instagram.com/dr.priyanka.gynae/"
                          className="block hover:underline text-black"
                        >
                          Instagram: @dr.priyanka.gynae
                        </a>
                        <a
                          href="https://www.facebook.com/priyanka.pachauri.790080"
                          className="block hover:underline text-black"
                        >
                          Facebook: priyanka.pachauri.790080
                        </a>
                      </div>
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


            {/* Section 20 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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