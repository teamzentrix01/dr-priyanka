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


export default function BookGynaecologistAppointmentKatgharMoradabad() {
  const faqs = [
    {
      q: "How do I book a gynaecologist appointment in Katghar, Moradabad?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the “Book Appointment” option on the official website.",
    },
    {
      q: "Who will I consult at the clinic?",
      a: "You will consult Dr. Priyanka Pachauri at Dr. Priyanka Gynaec, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Can I book an appointment on WhatsApp?",
      a: "Yes. You can message the clinic on WhatsApp at +91 89796 70705 with your name, concern, and preferred time.",
    },
    {
      q: "What are the clinic timings and consultation fees?",
      a: "Please confirm the current timings and fees directly with the clinic by phone or WhatsApp when you book.",
    },
    {
      q: "What should I bring to my first appointment?",
      a: "Previous prescriptions, blood tests, ultrasounds, surgical records, a list of medicines, and your questions. If pregnant, bring your antenatal card.",
    },
    {
      q: "Do I need to be married to consult a gynaecologist?",
      a: "No. Women of any age or marital status can consult a gynaecologist for periods, hormonal issues, infections, or check-ups.",
    },
    {
      q: "Should my husband come with me for a fertility consultation?",
      a: "Yes, ideally. Fertility involves both partners, and joint evaluation saves time and gives a clearer picture.",
    },
    {
      q: "Can I book an appointment for a second opinion about surgery?",
      a: "Yes. Bring your reports and scans, and the doctor will review them and explain the options.",
    },
    {
      q: "Is my consultation confidential?",
      a: "Yes. Your concerns are discussed respectfully and your medical details are kept confidential.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
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
                Book Gynaecologist Appointment in Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>


              <p className="text-gray-700 mb-4">
                Booking a gynaecology appointment is often the hardest part. Many women put it off for weeks or months because they feel embarrassed, unsure whether the symptom is serious, or worried about what the doctor will say. Yet early consultation usually means simpler treatment and less worry.
              </p>


              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby areas of Moradabad, you can book a consultation with Dr. Priyanka Pachauri of Dr. Priyanka Gynaec. The clinic follows the philosophy &quot;Her Health First.&quot; You are listened to, informed, and never rushed.
              </p>
            </div>


            {/* Section 2 — How to Book */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Book Your Appointment
              </h2>


              <p className="text-gray-700 mb-4">
                Getting started takes only a few minutes. You can reach the clinic in any of these ways:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>
                  <strong>Phone call:</strong> +91 90797 65578
                </li>
                <li>
                  <strong>WhatsApp:</strong> +91 89796 70705
                </li>
                <li>
                  <strong>Website:</strong> Use the “Book Appointment” option on{" "}
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    className="text-blue-600 hover:underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </li>
              </ul>


              <p className="text-gray-700 mb-4">
                When you call or message, it helps to share:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Your name and age</li>
                <li>The reason for your visit, in a few words</li>
                <li>Whether it is your first visit or a follow-up</li>
                <li>Your preferred day and time</li>
              </ul>


              <p className="text-gray-700 mt-4">
                The team will confirm the details with you. Please check the available timings directly with the clinic when you book.
              </p>
            </div>


            {/* Section 3 — Why Book in Advance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Book in Advance?
              </h2>


              <p className="text-gray-700 mb-4">
                Walking in without notice is sometimes possible, but booking ahead has clear benefits:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>You are less likely to face long waiting times</li>
                <li>Enough time is set aside for your consultation</li>
                <li>Tests or scans can be planned if needed</li>
                <li>The team can ask you to bring the right reports</li>
                <li>You can arrange travel and family support comfortably</li>
              </ul>


              <p className="text-gray-700 mt-4">
                For pregnancy follow-ups, fertility treatment, and procedures, appointments also help the team keep your care on schedule.
              </p>
            </div>


            {/* Section 4 — Who Can Book */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Can Book a Gynaecology Appointment?
              </h2>


              <p className="text-gray-700 mb-4">
                Women of any age or marital status are welcome to consult a gynaecologist. Common reasons include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Irregular, painful, heavy, or missed periods</li>
                <li>PCOS or hormonal concerns</li>
                <li>Vaginal infections, discharge, or itching</li>
                <li>Pelvic pain</li>
                <li>Fibroids, ovarian cysts, or polyps</li>
                <li>Endometriosis</li>
                <li>Pregnancy confirmation and antenatal care</li>
                <li>Difficulty conceiving</li>
                <li>Contraception advice</li>
                <li>Menopause symptoms</li>
                <li>Postnatal check-ups</li>
                <li>Preventive health check-ups</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You do not need to wait for a serious problem. A routine check-up is also a good reason to visit.
              </p>
            </div>


            {/* Section 5 — Which Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Which Appointment Should You Book?
              </h2>


              <p className="text-gray-700 mb-4">
                Different needs call for different types of consultation. Here is a simple guide.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    General Gynaecology Consultation
                  </h3>
                  <p className="text-gray-700">
                    For periods problems, infections, pelvic pain, contraception, menopause, or any symptom you are unsure about.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Pregnancy and Antenatal Appointment
                  </h3>
                  <p className="text-gray-700">
                    For early pregnancy confirmation, regular antenatal visits, ultrasound scans, nutrition guidance, and delivery planning. The clinic uses a Voluson E22 3D and 4D ultrasound machine for detailed imaging.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    High-Risk Pregnancy Consultation
                  </h3>
                  <p className="text-gray-700">
                    For women with diabetes, high blood pressure, thyroid disease, previous miscarriage, twin pregnancy, or pregnancy after IVF, who need closer monitoring.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Fertility and IVF Consultation
                  </h3>
                  <p className="text-gray-700">
                    For couples trying to conceive. Both partners are encouraged to attend, since fertility involves both. The clinic offers ovulation induction, IVF, time-lapse embryo monitoring, and AI-powered semen analysis with DNA integrity testing.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Laparoscopy and Surgery Consultation
                  </h3>
                  <p className="text-gray-700">
                    For cysts, fibroids, endometriosis, prolapse, or when a second opinion about surgery is needed. 3D laparoscopic options and alternatives are explained clearly.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Hysteroscopy Consultation
                  </h3>
                  <p className="text-gray-700">
                    For abnormal bleeding, repeated miscarriage, suspected polyps, or fertility concerns that need a look inside the uterus.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Postnatal and Paediatric Appointment
                  </h3>
                  <p className="text-gray-700">
                    For recovery after delivery, breastfeeding support, contraception counselling, newborn care, and vaccinations.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 6 — How to Prepare */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Prepare for Your Visit
              </h2>


              <p className="text-gray-700 mb-4">
                A little preparation makes your consultation more useful.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Track your cycle:</strong> Note the first day of your last period, usual cycle length, and any changes</li>
                <li><strong>Write down symptoms:</strong> When they began, how severe they are, and what makes them better or worse</li>
                <li><strong>List your medicines:</strong> Include supplements, hormonal pills, and herbal products</li>
                <li><strong>Bring records:</strong> Previous prescriptions, blood tests, ultrasounds, and surgical reports</li>
                <li><strong>Note your history:</strong> Past pregnancies, surgeries, allergies, and family history of conditions such as diabetes or fibroids</li>
                <li><strong>Prepare your questions:</strong> Write them down so nothing is forgotten</li>
                <li><strong>Consider a companion:</strong> You are welcome to bring a family member or friend if it helps you feel at ease</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If you are pregnant, bring your antenatal card and previous scan reports.
              </p>
            </div>


            {/* Section 7 — First Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During the First Consultation?
              </h2>


              <p className="text-gray-700 mb-4">
                A first visit is a conversation first. You can expect:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>A listening-first discussion:</strong> The doctor asks about your symptoms, cycles, health, and goals.</li>
                <li><strong>A gentle examination, only if needed:</strong> You will be told what is being done and why.</li>
                <li><strong>Tests or scans, if required:</strong> Such as an ultrasound or blood tests.</li>
                <li><strong>A clear explanation:</strong> What the findings mean and what your options are.</li>
                <li><strong>A treatment plan:</strong> Including follow-up timing, medicines, or procedures if needed.</li>
                <li><strong>Time for questions:</strong> Without pressure.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                You can ask for a pause, or say no to any step, at any time. Your comfort matters.
              </p>
            </div>


            {/* Section 8 — Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Privacy and Comfort
              </h2>


              <p className="text-gray-700">
                Many women worry about discussing sensitive topics. At Dr. Priyanka Gynaec, concerns are handled respectfully and your medical details are kept confidential. No question is too small or too embarrassing. Doctors hear these concerns every day, and honest information leads to better care.
              </p>
            </div>


            {/* Section 9 — Pregnancy Booking */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Booking for Pregnancy: When to Call
              </h2>


              <p className="text-gray-700">
                If you have just had a positive pregnancy test, it is a good idea to book an appointment soon, ideally within the first 6 to 8 weeks. Early registration allows the doctor to confirm the pregnancy, begin supplements, and identify any risk factors from the start.
              </p>
            </div>


            {/* Section 10 — Urgent Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When to Seek Urgent Care Instead of Waiting for an Appointment
              </h2>


              <p className="text-gray-700 mb-4">
                Some situations should not wait. Seek urgent medical care, or contact the clinic immediately, if you have:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Heavy bleeding that soaks a pad every hour</li>
                <li>Bleeding during pregnancy</li>
                <li>Severe or sudden abdominal or pelvic pain</li>
                <li>Fainting, dizziness, or breathlessness</li>
                <li>Fever with foul-smelling discharge</li>
                <li>Reduced or absent baby movements</li>
                <li>Leaking fluid or regular contractions before the due date</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If it is an emergency, go to the nearest emergency facility without delay.
              </p>
            </div>


            {/* Section 11 — Follow-Up */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Follow-Up Appointments
              </h2>


              <p className="text-gray-700 mb-4">
                Good care continues after the first visit. Follow-ups may be needed for:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Reviewing test or scan results</li>
                <li>Checking response to medicines</li>
                <li>Fertility monitoring cycles</li>
                <li>Routine antenatal visits</li>
                <li>Recovery checks after delivery or surgery</li>
                <li>Vaccination schedules for babies</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Keep the follow-up date given by your doctor, and call earlier if your symptoms change.
              </p>
            </div>


            {/* Section 12 — Why Women Choose */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Choose Dr. Priyanka Gynaec
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A patient-first, listening-focused approach</li>
                <li>Continuity of care from the first visit through every follow-up</li>
                <li>Advanced technology, including 3D laparoscopy and 3D/4D ultrasound</li>
                <li>Gynaecology, fertility, pregnancy, and paediatric care in one place</li>
                <li>Honest advice, with tests and surgery recommended only when needed</li>
              </ul>
            </div>


            {/* Section 13 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Address and Contact
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
                          +91 89796 70705 (WhatsApp)
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


            {/* Section 14 — FAQs */}
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