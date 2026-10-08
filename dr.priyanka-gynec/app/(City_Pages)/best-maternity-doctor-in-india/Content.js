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

export default function BestMaternityDoctorIndia() {
  const faqs = [
    {
      q: "Who is the best maternity doctor in India?",
      a: "There is no single best doctor. The best one is qualified, experienced, honest and right for you.",
    },
    {
      q: "How do I find a good maternity doctor?",
      a: "Check qualifications, experience, communication, facilities and how comfortable you feel.",
    },
    {
      q: "Do I need a doctor in a big city for a safe delivery?",
      a: "Not always. Skilled doctors with safe facilities work in smaller cities too.",
    },
    {
      q: "What qualifications should a maternity doctor have?",
      a: "An MS, MD or DNB in obstetrics and gynaecology, with valid medical registration.",
    },
    {
      q: "Is a lady doctor better for maternity care?",
      a: "Many women prefer one for comfort. Qualifications and experience matter most.",
    },
    {
      q: "Does the best doctor always suggest a C-section?",
      a: "No. A good doctor recommends it only when it is medically needed.",
    },
    {
      q: "When should I first visit a maternity doctor?",
      a: "As soon as pregnancy is confirmed, ideally within 8 to 12 weeks.",
    },
    {
      q: "What are red flags when choosing a doctor?",
      a: "Pressure for surgery, vague answers, guaranteed outcomes and no emergency plan.",
    },
    {
      q: "Can I get a second opinion?",
      a: "Yes. It is always reasonable if you feel unsure about any advice.",
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
                Best Maternity Doctor in India: How to Find the Right Doctor for a Safe Pregnancy and Delivery
              </h1>

              <p className="mb-4 text-gray-700">
                Every expecting mother wants the best care for herself and her
                baby. So it is natural to search online for the best maternity
                doctor in India. But the internet can be confusing. Rankings,
                ads and star ratings often make it hard to know who is truly
                trustworthy.
              </p>

              <p className="mb-4 text-gray-700">
                The honest truth is this: there is no single &quot;best&quot;
                doctor for every woman. The best maternity doctor is the one who
                is qualified, experienced, honest, reachable and right for your
                needs and your comfort.
              </p>

              <p className="mb-4 text-gray-700">
                This guide shows you exactly how to find her.
              </p>

              <p className="mb-4 text-gray-700">
                In this article:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What &quot;best&quot; really means in maternity care</li>
                <li>Qualities of an excellent maternity doctor</li>
                <li>Big city vs smaller city care</li>
                <li>How to verify credentials</li>
                <li>Red flags to avoid</li>
                <li>Questions to ask before you choose</li>
                <li>What good maternity care looks like at every stage</li>
              </ul>
            </div>

            {/* Section 2 — What Best Means */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Best Maternity Doctor&quot; Really Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                Many people assume the best doctor is the most famous or the
                most expensive. In reality, &quot;best&quot; is personal and
                practical.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                The Best Maternity Doctor for You Is Someone Who
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Is properly qualified in obstetrics and gynaecology</li>
                <li>Has real experience with normal deliveries and C-sections</li>
                <li>Listens patiently and explains clearly</li>
                <li>Gives honest advice, even when it is not what you expected</li>
                <li>Is reachable when you need her</li>
                <li>Works in a safe, well-equipped setup</li>
                <li>Makes you feel comfortable and respected</li>
              </ul>

              <p className="text-gray-700">
                Remember: Awards and advertising are not proof of quality.
                Skill, honesty and care are.
              </p>
            </div>

            {/* Section 3 — Why It Matters */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing the Right Maternity Doctor Matters
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor shapes your pregnancy experience from start to
                finish.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Good Maternity Doctor Helps You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detect problems early through regular check-ups and scans</li>
                <li>Manage conditions like diabetes, blood pressure and anemia</li>
                <li>Make informed decisions about delivery</li>
                <li>Handle emergencies calmly and quickly</li>
                <li>Recover well after birth</li>
                <li>Feel supported emotionally, not just medically</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A Poor Fit Can Mean
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Missed warning signs</li>
                <li>Confusing or rushed advice</li>
                <li>Unnecessary procedures</li>
                <li>Stress, fear and regret</li>
              </ul>
            </div>

            {/* Section 4 — Qualities */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Qualities of the Best Maternity Doctor
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Strong Qualifications
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>MBBS plus postgraduate training in obstetrics and gynaecology (MS, MD or DNB)</li>
                <li>Valid registration with a state or national medical council</li>
                <li>Additional fellowships or training, which show commitment to learning</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Real Experience
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular experience with deliveries and surgeries</li>
                <li>Comfort managing complications and emergencies</li>
                <li>Experience with high-risk pregnancies where relevant</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Honest, Ethical Advice
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Recommends a C-section only when medically needed</li>
                <li>Supports normal delivery when it is safe</li>
                <li>Explains risks and options without pressure</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Clear Communication
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Uses simple language</li>
                <li>Welcomes your questions</li>
                <li>Involves you and your family in decisions</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Compassion and Respect
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Treats you with dignity</li>
                <li>Respects your privacy and preferences</li>
                <li>Notices your emotional wellbeing</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Availability
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reachable for urgent concerns</li>
                <li>Follows your case from early pregnancy through delivery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Updated Knowledge
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Follows current safe practices</li>
                <li>Uses modern tools such as detailed ultrasound where appropriate</li>
              </ul>
            </div>

            {/* Section 5 — Big City vs Smaller City */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Big City vs Smaller City: Where Should You Seek Maternity Care?
              </h2>

              <p className="mb-4 text-gray-700">
                Many families assume the best doctors are only in metros like
                Delhi, Mumbai or Bangalore. This is not always true.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advantages of Big-City Hospitals
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Large multi-specialty setups</li>
                <li>Wide range of specialists under one roof</li>
                <li>Advanced neonatal intensive care in many centres</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advantages of Care in Smaller Cities
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Often lower costs</li>
                <li>Easier access, with less travel and waiting</li>
                <li>More personal attention and continuity</li>
                <li>Closer to family support during pregnancy and recovery</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Key takeaway:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A skilled, experienced doctor with a safe, well-equipped setup can deliver excellent care in any city.</li>
                <li>High-risk cases may need a centre with advanced neonatal support, and a good doctor will tell you honestly when this is the case.</li>
              </ul>
            </div>

            {/* Section 6 — Verify Credentials */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Verify a Maternity Doctor&apos;s Credentials
              </h2>

              <p className="mb-4 text-gray-700">
                Do not depend only on advertisements or social media. Check for
                yourself:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Look at the clinic&apos;s official website: Is the information clear and consistent?</li>
                <li>Check qualifications: Look for obstetrics and gynaecology degrees.</li>
                <li>Confirm medical council registration: Valid registration is essential.</li>
                <li>Review experience: Ask how long she has practiced and what kinds of cases she handles.</li>
                <li>Read patient feedback: Look for patterns in comments about communication and outcomes.</li>
                <li>Ask for references: Friends and family who delivered under the doctor can give honest views.</li>
                <li>Notice professionalism: A confident doctor is comfortable answering questions about her background.</li>
              </ul>
            </div>

            {/* Section 7 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags: Signs You Should Look Elsewhere
              </h2>

              <p className="mb-4 text-gray-700">
                Be careful if a doctor or clinic:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pushes for surgery without explaining why</li>
                <li>Avoids questions or becomes defensive</li>
                <li>Promises a &quot;guaranteed&quot; or &quot;perfect&quot; outcome</li>
                <li>Gives vague answers about costs and inclusions</li>
                <li>Has no clear plan for emergencies, such as an anesthetist or blood availability</li>
                <li>Operates in an unclean or disorganized setting</li>
                <li>Is difficult to reach during pregnancy</li>
                <li>Pressures you to decide immediately</li>
                <li>Dismisses your concerns</li>
              </ul>

              <p className="text-gray-700">
                Trust your instincts: If something feels wrong, get a second
                opinion.
              </p>
            </div>

            {/* Section 8 — Good Care at Every Stage */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Good Maternity Care Looks Like at Every Stage
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before Pregnancy (Preconception)
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Review of your health history</li>
                <li>Checks for anemia, thyroid and blood sugar</li>
                <li>Folic acid and lifestyle guidance</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Trimester
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirming pregnancy and due date</li>
                <li>Early scan and blood tests</li>
                <li>Supplements and safe lifestyle advice</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed anomaly scan</li>
                <li>Screening for gestational diabetes</li>
                <li>Regular monitoring of your health and the baby&apos;s growth</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Growth scans and position checks</li>
                <li>Monitoring for pre-eclampsia and other complications</li>
                <li>Delivery planning and birth preferences</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Delivery
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Safe management of normal labor</li>
                <li>C-section when medically necessary</li>
                <li>Quick, coordinated response in emergencies</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postnatal Period
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wound and recovery checks</li>
                <li>Breastfeeding and nutrition support</li>
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

            {/* Section 9 — Normal Delivery and C-Section */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery and C-Section: What a Good Doctor Considers
              </h2>

              <p className="mb-4 text-gray-700">
                The best maternity doctors base the delivery decision on safety,
                not habit or convenience.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Delivery Is Usually Supported When
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The baby is in a head-down position</li>
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

            {/* Section 10 — High-Risk Pregnancy */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                High-Risk Pregnancy: When Expertise Matters Even More
              </h2>

              <p className="mb-4 text-gray-700">
                Some pregnancies need closer attention.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                You May Need a High-Risk Specialist If You Have
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gestational or pre-existing diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disease</li>
                <li>Twins or multiple pregnancy</li>
                <li>Previous miscarriages or preterm birth</li>
                <li>A previous C-section or uterine surgery</li>
                <li>Placenta problems</li>
                <li>Age above 35 or below 18</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Good High-Risk Care Involves
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>More frequent visits and scans</li>
                <li>Careful medication management</li>
                <li>Planning delivery in a well-equipped setting</li>
                <li>Honest discussion about risks and options</li>
              </ul>
            </div>

            {/* Section 11 — Questions */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before You Choose Your Maternity Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Take this checklist to your first consultation:
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What are your qualifications and experience?</li>
                <li>How many deliveries and C-sections do you handle?</li>
                <li>How often will I need check-ups and scans?</li>
                <li>Will you personally attend my delivery?</li>
                <li>Do you support normal delivery wherever it is safe?</li>
                <li>When would you recommend a C-section?</li>
                <li>What is your plan for emergencies?</li>
                <li>Is an anesthetist and newborn care available?</li>
                <li>Can my husband or family member stay with me?</li>
                <li>How can I reach you outside clinic hours?</li>
                <li>What is the estimated total cost, and what does it include?</li>
                <li>Do you provide postnatal and newborn care?</li>
              </ul>
            </div>

            {/* Section 12 — Comparing Doctors */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comparing Doctors Fairly: A Simple 6-Step Method
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Step 1: Shortlist two or three doctors. Use recommendations, official websites and patient feedback.</li>
                <li>Step 2: Verify credentials. Confirm qualifications and registration.</li>
                <li>Step 3: Visit in person. Observe cleanliness, staff behavior and waiting-time management.</li>
                <li>Step 4: Ask your questions. Note how openly and clearly the doctor answers.</li>
                <li>Step 5: Compare costs and inclusions. Get written estimates and understand exclusions.</li>
                <li>Step 6: Choose by trust and comfort. The best choice is the doctor you feel safe with, not just the one with the biggest name.</li>
              </ul>
            </div>

            {/* Section 13 — Lady Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Many Women Prefer a Lady Doctor for Maternity Care
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Comfort: Many women feel more relaxed during examinations.</li>
                <li>Easier communication: Private topics feel simpler to discuss.</li>
                <li>Family preference: In many families, a female doctor is the preferred choice.</li>
                <li>Emotional trust: Feeling safe encourages openness about symptoms and fears.</li>
              </ul>

              <p className="text-gray-700">
                Important: Comfort should go together with qualifications and
                experience. Gender alone does not guarantee quality.
              </p>
            </div>

            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Choosing a Maternity Doctor
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: &quot;The most expensive doctor is the best.&quot; Fact: Price does not guarantee quality.</li>
                <li>Myth: &quot;Only metro city doctors are good.&quot; Fact: Skilled, caring doctors practice across India, including smaller cities.</li>
                <li>Myth: &quot;A bigger hospital is always safer.&quot; Fact: Doctor skill, team readiness and emergency facilities matter most.</li>
                <li>Myth: &quot;A good doctor always recommends a C-section.&quot; Fact: A good doctor recommends it only when medically needed.</li>
                <li>Myth: &quot;Online ratings tell the whole story.&quot; Fact: Reviews help, but they should not replace your own checks.</li>
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
