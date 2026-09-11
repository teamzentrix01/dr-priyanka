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

export default function AntenatalCareDoctorNearMe() {
  const faqs = [
    {
      q: "How do I find a good antenatal care doctor near me in Moradabad?",
      a: "Look for proximity, availability, consistent doctor continuity, modern equipment and genuine local reputation — Dr. Priyanka Gynaec offers all of these.",
    },
    {
      q: "Is Dr. Priyanka Gynaec easily accessible in Moradabad?",
      a: "Yes, the clinic is located near Old Roadways, Gandhi Nagar, making it centrally accessible for the city and nearby areas.",
    },
    {
      q: "Can I switch to a nearby doctor mid-pregnancy?",
      a: "Yes, with your previous reports and scans, care can continue smoothly from where you left off.",
    },
    {
      q: "How often will I need to visit an antenatal care doctor near me?",
      a: "Monthly until 28 weeks, every two weeks until 36 weeks, and weekly after that until delivery.",
    },
    {
      q: "Does this nearby clinic offer high-risk pregnancy care?",
      a: "Yes, gestational diabetes, hypertension and multiple pregnancies are managed with careful monitoring.",
    },
    {
      q: "Is 3D/4D ultrasound available locally?",
      a: "Yes, the Voluson E22 machine provides detailed 3D and 4D ultrasound imaging on-site.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book directly by calling or messaging on WhatsApp (8979670705).",
    },
    {
      q: "Where exactly is the clinic located?",
      a: "It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "Is postnatal and baby checkup also available nearby?",
      a: "Yes, postnatal care for the mother and newborn checkups are both available at the same center.",
    },
    {
      q: "What should I carry for my first nearby consultation?",
      a: "Previous reports, pregnancy test results, your last menstrual period date, and a list of current medicines.",
    },
    {
      q: "Can family members accompany me to appointments?",
      a: "Yes, bringing a family member for support is welcomed at every visit.",
    },
    {
      q: "What if I have an urgent concern between scheduled checkups?",
      a: "You can call or message on WhatsApp for guidance, and urgent same-day slots are available when needed.",
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
                Antenatal Care Doctor Near Me – Trusted Pregnancy Care in Moradabad by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Typing &quot;antenatal care doctor near me&quot; usually means you want someone reachable, reliable and experienced enough to trust with your pregnancy. In Moradabad, Dr. Priyanka Gynaec fits exactly that need — an accessible clinic, advanced technology, and a doctor who treats every pregnancy with personal attention from the first visit until delivery.
              </p>

              <p className="text-gray-700">
                This article explains why searching for an antenatal care doctor near me in Moradabad should lead you here, what makes a nearby clinic actually worth choosing, and how to reach Dr. Priyanka Gynaec quickly.
              </p>
            </div>

            {/* Section 2 — Why "Near Me" Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why &quot;Near Me&quot; Matters When Choosing an Antenatal Care Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Frequent visits are part of pregnancy care, so distance affects how consistent your checkups will be</li>
                <li>Emergencies during pregnancy need a doctor who can be reached quickly</li>
                <li>A nearby clinic reduces travel stress, which matters especially in later trimesters</li>
                <li>Local doctors understand regional health patterns and common concerns in the area</li>
                <li>Building a relationship with one nearby doctor avoids repeating your history at multiple places</li>
              </ul>
            </div>

            {/* Section 3 — Why Dr. Priyanka Gynaec Is the Right Choice */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Dr. Priyanka Gynaec Is the Right Antenatal Care Doctor Near You in Moradabad
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Gold medal credentials and international fellowship-qualified gynaec doctor</li>
                <li>Conveniently located near Old Roadways, Gandhi Nagar, Moradabad</li>
                <li>Structured, trimester-wise antenatal care plan for every patient</li>
                <li>Advanced 3D/4D ultrasound for accurate fetal monitoring</li>
                <li>Proven experience managing high-risk pregnancies</li>
                <li>Same doctor available for every visit, avoiding repeated explanations</li>
                <li>Female-friendly, comfortable and private consultation environment</li>
                <li>24x7 availability for emergency and urgent pregnancy concerns</li>
                <li>Strong local reputation — patients refer their own family and friends nearby</li>
              </ul>
            </div>

            {/* Section 4 — About Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                About Dr. Priyanka Gynaec – A Trusted Local Antenatal Care Doctor
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri is a well-known gynaecologist based in Moradabad, guided by her &quot;Her Health First&quot; philosophy. Being locally based means she is familiar with the patient community, understands common local health concerns, and remains genuinely reachable throughout each pregnancy.
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Specialization in gynaecology and obstetrics</li>
                <li>Deep local experience with antenatal, delivery and postnatal care</li>
                <li>Skilled management of high-risk conditions like gestational diabetes and hypertension</li>
                <li>Known for calm, clear communication, particularly reassuring for first-time mothers</li>
                <li>Paediatric consultation also available locally, so the whole family's care stays close to home</li>
              </ul>
            </div>

            {/* Section 5 — Services Offered */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Services Offered by This Antenatal Care Doctor Near Me in Moradabad
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. First Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirmation of pregnancy and early dating scan</li>
                <li>Baseline blood tests and infection screening</li>
                <li>Early lifestyle and nutrition guidance</li>
                <li>Assessment of any early risk factors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Second Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Detailed anomaly scan to check the baby's development</li>
                <li>Gestational diabetes screening</li>
                <li>Regular blood pressure and weight monitoring</li>
                <li>Vaccination schedule guidance</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Third Trimester Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Frequent visits as the delivery date approaches</li>
                <li>Growth scan and doppler study</li>
                <li>Position check and delivery preparation</li>
                <li>Timely identification of late-pregnancy risks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. High-Risk Pregnancy Management
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Careful monitoring of gestational diabetes, hypertension and similar conditions</li>
                <li>Specialized care for multiple pregnancy (twins)</li>
                <li>Safe handling of pregnancies with a previous C-section or complication history</li>
                <li>Coordinated referrals when additional specialist input is needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Normal Delivery Guidance
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Encouraging natural, vaginal delivery whenever medically safe</li>
                <li>Painless labor options discussed in advance</li>
                <li>Birth plan preparation guidance</li>
                <li>Quick decision-making if emergency C-section becomes necessary</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Postnatal Care
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Monitoring the mother's recovery after delivery</li>
                <li>Breastfeeding guidance and support</li>
                <li>Newborn's initial checkup and vaccination</li>
                <li>Timely management of postpartum concerns</li>
              </ul>
            </div>

            {/* Section 6 — Technology Available */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Technology Available at This Nearby Antenatal Care Clinic
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Voluson E22 BT2024:</strong> Advanced 3D and 4D ultrasound machine</li>
                <li><strong>Doppler monitoring:</strong> For fetal wellbeing assessment</li>
                <li><strong>Digital fetal heart rate monitoring:</strong> For accurate tracking</li>
                <li><strong>Accurate lab coordination:</strong> For fast, reliable results</li>
                <li><strong>Well-equipped labor room:</strong> Ready for emergencies</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Having this level of technology available locally means patients in Moradabad don't need to travel to bigger cities for advanced pregnancy monitoring.
              </p>
            </div>

            {/* Section 7 — What Makes a Good "Near Me" Search Result */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Makes a Good &quot;Antenatal Care Doctor Near Me&quot; Search Result
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Actual proximity:</strong> A short travel time for frequent monthly and weekly visits</li>
                <li><strong>Availability:</strong> Someone reachable for questions and emergencies, not just scheduled visits</li>
                <li><strong>Consistency:</strong> The same doctor tracking your pregnancy from start to finish</li>
                <li><strong>Technology:</strong> Modern ultrasound and monitoring equipment on-site</li>
                <li><strong>Communication:</strong> Clear explanations rather than rushed, generic advice</li>
                <li><strong>Reputation:</strong> Genuine local reviews and word-of-mouth trust, not just online ratings</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Dr. Priyanka Gynaec checks each of these boxes for patients searching for care close to home in Moradabad.
              </p>
            </div>

            {/* Section 8 — Who Should Search */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Should Search for an Antenatal Care Doctor Near Me
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Women who have just found out they are pregnant and want a nearby first consultation</li>
                <li>Patients already pregnant but looking to switch to a more accessible clinic</li>
                <li>Anyone dealing with gestational diabetes, hypertension or other high-risk conditions</li>
                <li>Women carrying twins who need frequent, closer monitoring</li>
                <li>Patients who had complications in a previous pregnancy</li>
                <li>Anyone who wants a second opinion without travelling far</li>
                <li>New mothers who want postnatal and baby checkups nearby too</li>
              </ul>
            </div>

            {/* Section 9 — Recommended Visit Schedule */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recommended Antenatal Visit Schedule
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Weeks 4-28:</strong> One checkup every month</li>
                <li><strong>Weeks 28-36:</strong> One checkup every two weeks</li>
                <li><strong>Weeks 36 onwards:</strong> Weekly checkups until delivery</li>
                <li><strong>High-risk pregnancies:</strong> Additional visits as advised</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Having a nearby doctor makes this frequent schedule far easier to maintain.
              </p>
            </div>

            {/* Section 10 — What to Expect at Each Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Expect at Each Visit
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Weight, blood pressure and general health check</li>
                <li>Discussion of new symptoms or concerns</li>
                <li>Abdominal examination and fetal heart rate check</li>
                <li>Review of previous test results and scans</li>
                <li>Guidance for diet, supplements and the coming weeks</li>
                <li>Time reserved for questions about labor and delivery</li>
              </ul>
            </div>

            {/* Section 11 — Benefits of Choosing Local */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Local Antenatal Care Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Easier to keep every appointment without long travel</li>
                <li>Faster access to the doctor if urgent concerns arise between visits</li>
                <li>Familiarity with local hospitals in case of emergency transfer</li>
                <li>Stronger doctor-patient relationship built over regular, nearby visits</li>
                <li>Reduced stress for the mother, especially during later pregnancy stages</li>
                <li>Convenient for family members to accompany without long trips</li>
              </ul>
            </div>

            {/* Section 12 — Safety and Comfort Standards */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Safety and Comfort Standards
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sterilized examination rooms and modern equipment</li>
                <li>Proper infection-control protocols followed at every visit</li>
                <li>Female-friendly and private consultation environment</li>
                <li>Trained staff available to support patients through every checkup</li>
                <li>Clear explanations given for every test, scan and recommendation</li>
              </ul>
            </div>

            {/* Section 13 — Why Patients Trust Dr. Priyanka Gynaec */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Patients Trust Dr. Priyanka Gynaec as Their Nearby Antenatal Care Doctor
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Expertise with Heart:</strong> International fellowship and gold medal credentials</li>
                <li><strong>Continuity of Care:</strong> The same doctor from the first visit through delivery</li>
                <li><strong>Proven Outcomes:</strong> A strong track record of safe, well-monitored pregnancies</li>
                <li><strong>Earned Trust:</strong> Patients refer their own family and neighbours nearby</li>
              </ul>
            </div>

            {/* Section 14 — Preparing for Your First Visit */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for Your First Visit
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Carry any pregnancy test results or previous reports you already have</li>
                <li>Note down your last menstrual period date</li>
                <li>List any medicines, supplements or allergies</li>
                <li>Write down questions or concerns beforehand</li>
                <li>Wear comfortable clothing for the examination</li>
                <li>Bring a family member along if you'd like support</li>
              </ul>
            </div>

            {/* Section 15 — Serving Moradabad and Nearby Localities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Serving Moradabad and Nearby Localities
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Patients travel from across Moradabad city as well as nearby towns and villages</li>
                <li>The clinic's location near Old Roadways, Gandhi Nagar makes it centrally accessible</li>
                <li>Same-day consultation slots available for urgent pregnancy concerns</li>
                <li>Coordination support offered for patients coming from a distance</li>
                <li>Reports and prescriptions can be shared digitally for easier follow-up</li>
              </ul>
            </div>

            {/* Section 16 — Common Mistakes to Avoid */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Mistakes People Make When Searching &quot;Antenatal Care Doctor Near Me&quot;
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Choosing purely on distance without checking the doctor's actual experience</li>
                <li>Ignoring whether the same doctor will be available at every visit</li>
                <li>Not confirming what technology and equipment the clinic actually has</li>
                <li>Skipping a first consultation just because reviews looked average online</li>
                <li>Assuming every nearby clinic offers high-risk pregnancy management, without asking directly</li>
                <li>Not checking how emergencies outside clinic hours are handled</li>
              </ul>
            </div>

            {/* Section 17 — How Dr. Priyanka Gynaec Avoids These Gaps */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Dr. Priyanka Gynaec Avoids These Common Gaps
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Distance is matched with real credentials — gold medal and international fellowship training</li>
                <li>The same doctor personally reviews every scan and test, visit after visit</li>
                <li>Advanced 3D/4D ultrasound and monitoring equipment are available on-site, not outsourced</li>
                <li>Genuine patient experiences and referrals reflect actual outcomes, not just star ratings</li>
                <li>High-risk pregnancy management is a core part of the practice, not an occasional exception</li>
                <li>Clear guidance is given for emergencies, including WhatsApp and call access</li>
              </ul>
            </div>

            {/* Section 18 — Building a Long-Term Care Relationship */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Building a Long-Term Care Relationship
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Continuity matters beyond just one pregnancy — many patients return for future pregnancies</li>
                <li>Family members often become patients too, once trust is established</li>
                <li>Postnatal and paediatric care staying local means fewer new doctors to introduce your history to</li>
                <li>A nearby, trusted doctor becomes a long-term health resource, not a one-time visit</li>
                <li>Local familiarity helps in quickly coordinating care if a referral to a specialist is ever needed</li>
              </ul>
            </div>

            {/* Section 19 — Final Thoughts */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Choosing an Antenatal Care Doctor Near Me
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Proximity alone isn't enough — pair it with real expertise, technology and continuity of care</li>
                <li>Dr. Priyanka Gynaec Moradabad combines convenient location with advanced, personalized pregnancy care</li>
                <li>Starting your search with genuine local trust, rather than just search rankings, leads to better outcomes</li>
                <li>A short distance to a truly reliable doctor is worth far more than a slightly closer, unfamiliar clinic</li>
                <li>If you are searching for an antenatal care doctor near me in Moradabad, an early consultation is the best next step</li>
              </ul>
            </div>

            {/* Section 20 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Address, Contact and WhatsApp
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
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh – 244001
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
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
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

              <p className="text-gray-700 mt-6">
                Message directly on WhatsApp for appointment booking, directions or any query. For emergencies or urgent concerns, calling is better than messaging.
              </p>
            </div>

            {/* Section 21 — FAQs */}
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