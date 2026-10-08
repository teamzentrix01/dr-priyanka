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

export default function MaternityDoctorNearMe() {
  const faqs = [
    {
      q: "How do I find a good maternity doctor near me?",
      a: "Search by city, check credentials, read recent reviews, and visit the clinic before deciding.",
    },
    {
      q: "Is the nearest maternity doctor always the best choice?",
      a: "No. Qualifications, experience, facilities and trust matter as much as distance.",
    },
    {
      q: "When should I first visit a maternity doctor?",
      a: "As soon as pregnancy is confirmed, ideally within 8 to 12 weeks.",
    },
    {
      q: "What should I check at a nearby clinic?",
      a: "Cleanliness, qualified staff, ultrasound, emergency plans and clear pricing.",
    },
    {
      q: "Can I choose a lady doctor near me?",
      a: "Yes. Many women prefer one, as long as she is qualified and experienced.",
    },
    {
      q: "What should I do in a pregnancy emergency?",
      a: "Call your doctor and go to the nearest hospital immediately for bleeding, severe pain or reduced movements.",
    },
    {
      q: "Do nearby doctors offer both normal delivery and C-section?",
      a: "Many do. Ask your doctor about delivery options and when surgery would be needed.",
    },
    {
      q: "What should I carry to my first appointment?",
      a: "ID, previous reports, prescriptions and a list of your questions.",
    },
    {
      q: "Is postnatal care available at the same clinic?",
      a: "Many clinics offer it. Confirm that follow-ups and newborn care are included.",
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
                Maternity Doctor Near Me: How to Find a Trusted Pregnancy Doctor Close to Home
              </h1>

              <p className="mb-4 text-gray-700">
                When you find out you are pregnant, one of the first things you
                do is search for a maternity doctor near me. It is a smart
                search. During pregnancy you visit your doctor many times, and
                in an emergency, every minute counts.
              </p>

              <p className="mb-4 text-gray-700">
                But &quot;near me&quot; should never mean &quot;the first
                result on the map.&quot; The right nearby doctor is one who is
                qualified, experienced, caring and reachable. This guide helps
                you find that doctor without confusion.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Why proximity matters in pregnancy</li>
                <li>What to check beyond distance</li>
                <li>How to search smartly online</li>
                <li>How to evaluate a nearby clinic</li>
                <li>Emergency planning</li>
                <li>What care you should expect</li>
                <li>Questions to ask before you book</li>
              </ul>
            </div>

            {/* Section 2 — Why It Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Choosing a Maternity Doctor Near You Matter?
              </h2>

              <p className="mb-4 text-gray-700">
                Pregnancy is not a single appointment. It is months of regular
                care, and a nearby doctor makes the journey easier and safer.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits of a Nearby Maternity Doctor
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Easy regular visits: You will attend many check-ups and scans, so short travel reduces tiredness.</li>
                <li>Quicker emergency access: If you have bleeding, pain, leaking fluid or reduced movements, you can reach help faster.</li>
                <li>Less stress in late pregnancy: Long journeys become uncomfortable in the third trimester.</li>
                <li>Easier family support: Your husband or family member can accompany you without disrupting work.</li>
                <li>Better follow-up after delivery: Postnatal and newborn visits are simpler when the clinic is close.</li>
                <li>Lower travel costs: Frequent trips add up over nine months.</li>
              </ul>
            </div>

            {/* Section 3 — Beyond Near Me */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Look for Beyond &quot;Near Me&quot;
              </h2>

              <p className="mb-4 text-gray-700">
                Use distance as a starting filter, not the final decision.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Check These Essentials
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications: A recognized degree in obstetrics and gynaecology, such as MS, MD or DNB</li>
                <li>Medical registration: Valid registration with a state or national medical council</li>
                <li>Experience: Regular handling of normal deliveries, C-sections and complications</li>
                <li>Facilities: A clean clinic, ultrasound, an operation theatre and emergency arrangements</li>
                <li>Anesthetist and newborn support: Available during delivery</li>
                <li>Communication: Explains clearly and listens patiently</li>
                <li>Honesty: Advises surgery only when truly needed</li>
                <li>Availability: Reachable for urgent concerns</li>
                <li>Transparent costs: Gives a clear, written estimate</li>
              </ul>
            </div>

            {/* Section 4 — Search Online */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Search for a Maternity Doctor Near You Online
              </h2>

              <p className="mb-4 text-gray-700">
                The internet offers many options, so search wisely.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Smart Search Tips
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Search with your city or area, such as &quot;maternity doctor in Moradabad.&quot;</li>
                <li>Check the Google Maps listing for address, phone number, timings and photos.</li>
                <li>Read recent reviews, not just the star rating.</li>
                <li>Visit the clinic&apos;s official website and confirm the details match.</li>
                <li>Look for consistent contact information across platforms.</li>
                <li>Check whether the clinic lists its services, such as antenatal care, delivery and paediatric care.</li>
                <li>Note the response speed when you call or message.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Be Careful Of
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Listings with no clear address or phone number</li>
                <li>Reviews that all sound the same</li>
                <li>Ads promising guaranteed results</li>
                <li>Clinics that avoid answering basic questions</li>
              </ul>
            </div>

            {/* Section 5 — What Maternity Doctor Does */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a Maternity Doctor Do?
              </h2>

              <p className="mb-4 text-gray-700">
                A maternity doctor is an obstetrician-gynaecologist who looks
                after you before, during and after pregnancy.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Her Role Includes
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirming pregnancy and calculating the due date</li>
                <li>Planning and monitoring antenatal check-ups</li>
                <li>Advising on nutrition, supplements and lifestyle</li>
                <li>Ordering scans and blood tests</li>
                <li>Detecting and managing complications</li>
                <li>Planning and conducting delivery, normal or C-section</li>
                <li>Handling emergencies in labor</li>
                <li>Providing postnatal care, breastfeeding guidance and family planning advice</li>
              </ul>
            </div>

            {/* Section 6 — Services */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services You Should Expect From a Good Nearby Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                A complete maternity clinic should offer support at every
                stage.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Preconception counselling</li>
                <li>Checks for anemia, thyroid and blood sugar</li>
                <li>Folic acid and lifestyle advice</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular antenatal visits</li>
                <li>Ultrasound scans, including anomaly scan</li>
                <li>Blood and urine tests</li>
                <li>Screening for gestational diabetes and high blood pressure</li>
                <li>High-risk pregnancy monitoring</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                At Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Support for normal delivery</li>
                <li>C-section when medically needed</li>
                <li>Emergency response</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wound and recovery checks</li>
                <li>Breastfeeding support</li>
                <li>Newborn examination and vaccinations</li>
                <li>Emotional health screening</li>
                <li>Contraception counselling</li>
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

            {/* Section 7 — When to Visit */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Visit a Maternity Doctor?
              </h2>

              <p className="mb-4 text-gray-700">Earlier is better.</p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Book an Appointment When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You are planning a pregnancy</li>
                <li>You miss a period and test positive</li>
                <li>You have a history of miscarriage, fertility problems or a previous C-section</li>
                <li>You have diabetes, thyroid disease, high blood pressure or PCOS</li>
                <li>You are above 35 years of age</li>
                <li>You notice any unusual symptoms</li>
              </ul>
            </div>

            {/* Section 8 — Emergency Planning */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emergency Planning: Why Nearness Can Save Time
              </h2>

              <p className="mb-4 text-gray-700">
                In pregnancy, some symptoms need urgent attention. Knowing where
                to go beforehand reduces panic.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Go to Your Doctor or Nearest Hospital Immediately If You Have
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
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prepare Your Emergency Plan
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Save your doctor&apos;s phone number and WhatsApp number in your phone</li>
                <li>Keep a printed copy of your reports and prescriptions</li>
                <li>Know the fastest route to the clinic or hospital</li>
                <li>Arrange transport in advance for late pregnancy</li>
                <li>Keep your hospital bag ready from about 34 to 36 weeks</li>
                <li>Tell your family who to call and what to bring</li>
              </ul>
            </div>

            {/* Section 9 — Hospital Bag */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing Your Hospital Bag: A Quick Checklist
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>ID proof and insurance papers</li>
                <li>Medical records and scan reports</li>
                <li>Comfortable, loose clothing</li>
                <li>Sanitary pads</li>
                <li>Nursing-friendly tops</li>
                <li>Toiletries and slippers</li>
                <li>Phone and charger</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                For Your Baby
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soft cotton clothes and wraps</li>
                <li>Diapers and wipes</li>
                <li>Blankets and caps</li>
                <li>A baby carrier or seat for the journey home</li>
              </ul>
            </div>

            {/* Section 10 — Normal Delivery or C-Section */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery or C-Section: What a Good Doctor Considers
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor should base the decision on safety, not habit.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Delivery Is Usually Supported When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The baby is head-down</li>
                <li>Labor is progressing well</li>
                <li>Mother and baby are stable</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A C-Section May Be Advised When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The baby is breech or sideways</li>
                <li>Placenta previa is present</li>
                <li>Labor is not progressing</li>
                <li>The baby shows signs of distress</li>
                <li>The mother has certain medical conditions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Trustworthy Doctor Will
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Explain the reason clearly</li>
                <li>Discuss alternatives where safe</li>
                <li>Respect your questions</li>
              </ul>

              <p className="text-gray-700">
                You can read more on the{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/services/normal-delivery"
                  className="text-blue-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Normal Delivery
                </a>{" "}
                page.
              </p>
            </div>

            {/* Section 11 — Lady Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Many Women Prefer a Lady Doctor Near Them
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Comfort: Many feel more relaxed during examinations.</li>
                <li>Easier conversations: Private topics feel simpler to discuss.</li>
                <li>Family preference: In many families, a female doctor is the preferred choice.</li>
                <li>Trust: Feeling safe encourages openness about symptoms and fears.</li>
              </ul>
            </div>

            {/* Section 12 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Booking a Nearby Maternity Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Take this list to your first visit:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What are your qualifications and experience?</li>
                <li>How often will I need check-ups and scans?</li>
                <li>Will you personally attend my delivery?</li>
                <li>Do you support normal delivery wherever it is safe?</li>
                <li>When would you recommend a C-section?</li>
                <li>What is your plan for emergencies and after-hours calls?</li>
                <li>Is an anesthetist and newborn support available?</li>
                <li>Can my husband or family member stay with me?</li>
                <li>How can I contact you urgently?</li>
                <li>What is the estimated total cost and what does it include?</li>
                <li>Do you provide postnatal and newborn care?</li>
                <li>What are your clinic timings and appointment process?</li>
              </ul>
            </div>

            {/* Section 13 — Evaluate Clinic */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Evaluate a Clinic When You Visit
              </h2>

              <p className="mb-4 text-gray-700">
                First impressions matter. During your visit, notice:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cleanliness: Waiting room, consultation room and washrooms</li>
                <li>Staff behavior: Polite, helpful and organized</li>
                <li>Waiting time: Reasonable and well managed</li>
                <li>Privacy: Respectful examination setup</li>
                <li>Equipment: Ultrasound and other tools in working order</li>
                <li>Clear information: Fees, timings and procedures explained openly</li>
                <li>Comfort: A welcoming environment for pregnant women</li>
              </ul>
            </div>

            {/* Section 14 — Nearby Towns */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Care for Women From Nearby Towns
              </h2>

              <p className="mb-4 text-gray-700">
                If you live outside the city but plan to deliver in a larger
                town, planning ahead helps.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose a doctor whose clinic is reachable within a reasonable travel time.</li>
                <li>Discuss when to move closer to the clinic in late pregnancy.</li>
                <li>Ask whether some check-ups can be coordinated to reduce trips.</li>
                <li>Keep emergency contacts saved and transport arranged.</li>
                <li>Share your plan with family so everyone knows what to do.</li>
              </ul>
            </div>

            {/* Section 15 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Choosing a Doctor Near You
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: &quot;The closest clinic is always the best.&quot; Fact: Distance matters, but qualifications, experience and facilities matter more.</li>
                <li>Myth: &quot;A high star rating guarantees quality.&quot; Fact: Reviews help, but verify credentials yourself.</li>
                <li>Myth: &quot;I can wait until the second trimester to see a doctor.&quot; Fact: Early care helps detect problems and start supplements on time.</li>
                <li>Myth: &quot;I only need to visit when something feels wrong.&quot; Fact: Regular check-ups catch silent problems early.</li>
                <li>Myth: &quot;A C-section is always easier.&quot; Fact: It is major surgery with a longer recovery.</li>
              </ul>
            </div>

            {/* Section 16 — Contact */}
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

            {/* Section 17 — FAQs */}
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
