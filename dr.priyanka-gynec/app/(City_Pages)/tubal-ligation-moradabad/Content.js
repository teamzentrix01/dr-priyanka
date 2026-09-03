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

export default function TubalLigationMoradabad() {
  const faqs = [
    {
      q: "Is tubal ligation painful?",
      a: "No, it is performed under anesthesia and is minimally invasive, causing little to no pain during the procedure itself.",
    },
    {
      q: "Does tubal ligation affect periods or hormones?",
      a: "No, it only blocks the fallopian tubes and does not affect the ovaries, so hormone levels and periods remain normal.",
    },
    {
      q: "Is hospital admission required for tubal ligation?",
      a: "It is usually a day-care procedure, though postpartum sterilization may be done during the same hospital stay as delivery.",
    },
    {
      q: "Can tubal ligation be reversed?",
      a: "Reversal surgery exists but is complex and not always successful, so the procedure should be considered permanent.",
    },
    {
      q: "How effective is tubal ligation as birth control?",
      a: "It is over 99% effective, making it one of the most reliable methods of permanent contraception.",
    },
    {
      q: "When can tubal ligation be performed after delivery?",
      a: "It can be done shortly after a vaginal delivery, during a cesarean section, or as a separate procedure at any other time.",
    },
    {
      q: "What technology does Dr. Priyanka Gynaec use for tubal ligation?",
      a: "The clinic uses high-definition 3D laparoscopic surgery for precise, minimally invasive sterilization.",
    },
    {
      q: "How can I book a consultation for tubal ligation in Moradabad?",
      a: "You can call or WhatsApp the clinic directly using the contact details above to schedule a consultation and evaluation.",
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
                Tubal Ligation in Moradabad: Complete Guide to Permanent Birth Control
              </h1>

              <p className="text-gray-700 mb-4">
                For couples who have completed their families and are looking for a safe, permanent method of contraception, tubal ligation remains one of the most reliable and widely trusted options available. If you&apos;re considering this procedure, understanding your options for tubal ligation in Moradabad can help you make a confident, informed decision. This complete guide explains what tubal ligation involves, how the modern laparoscopic approach works, what to expect during recovery, and how to choose the right specialist.
              </p>
            </div>

            {/* Section 2 — What Is Tubal Ligation? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Tubal Ligation?
              </h2>

              <p className="text-gray-700 mb-4">
                Tubal ligation, often referred to as &quot;getting your tubes tied&quot; or tubectomy, is a permanent surgical method of female sterilization. During the procedure, the fallopian tubes — which carry eggs from the ovaries to the uterus — are blocked, cut, or sealed, preventing the egg and sperm from meeting. This effectively prevents pregnancy permanently, without affecting a woman&apos;s menstrual cycle or hormone levels.
              </p>

              <p className="text-gray-700">
                Unlike temporary contraception methods such as pills, IUDs, or injections, tubal ligation is intended to be a permanent decision, making it ideal for women or couples who are certain they do not wish to have more children in the future.
              </p>
            </div>

            {/* Section 3 — Why Choose Laparoscopic Tubal Ligation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Laparoscopic Tubal Ligation
              </h2>

              <p className="text-gray-700 mb-4">
                Modern tubal ligation is performed using minimally invasive laparoscopic technique, offering major advantages over older open surgical methods:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Small incisions, typically just one or two tiny cuts under a centimeter each</li>
                <li>Day-care procedure, allowing most women to go home the same day</li>
                <li>Minimal scarring, since incisions are so small</li>
                <li>Quick recovery, with most women returning to light activities within a few days</li>
                <li>Lower risk of infection and complications compared to open surgery</li>
                <li>High effectiveness, with a very low failure rate when performed correctly</li>
              </ul>
            </div>

            {/* Section 4 — Who Is a Good Candidate for Tubal Ligation? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Is a Good Candidate for Tubal Ligation?
              </h2>

              <p className="text-gray-700 mb-4">
                Tubal ligation may be a suitable option for women who:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Have completed their desired family size and are certain they do not want future pregnancies</li>
                <li>Want a highly effective, permanent form of contraception</li>
                <li>Wish to avoid the ongoing use of hormonal birth control methods</li>
                <li>Have medical conditions where future pregnancy could pose significant health risks</li>
                <li>Are looking for a procedure that does not affect hormone levels or menstrual cycles</li>
              </ul>

              <p className="text-gray-700 mt-4">
                It&apos;s important to note that tubal ligation is considered permanent. While reversal procedures exist, they are complex, not always successful, and not guaranteed to restore fertility — so the decision should be made with careful thought and full understanding.
              </p>
            </div>

            {/* Section 5 — When Can Tubal Ligation Be Performed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Can Tubal Ligation Be Performed?
              </h2>

              <p className="text-gray-700 mb-4">
                Tubal ligation can be performed at different times depending on individual circumstances:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Interval sterilization</strong> — Performed as a standalone laparoscopic procedure, unrelated to pregnancy or delivery</li>
                <li><strong>Postpartum sterilization</strong> — Performed shortly after a vaginal delivery, often during the same hospital stay</li>
                <li><strong>During a cesarean section</strong> — Performed immediately after delivery of the baby during a planned C-section, avoiding the need for a separate procedure</li>
              </ul>

              <p className="text-gray-700">
                Your doctor will help determine the most appropriate timing based on your individual situation and preferences.
              </p>
            </div>

            {/* Section 6 — Step-by-Step: What to Expect During Laparoscopic Tubal Ligation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Step-by-Step: What to Expect During Laparoscopic Tubal Ligation
              </h2>

              <ol className="text-gray-700 space-y-4 mb-4 list-decimal pl-5">
                <li>
                  <strong>Pre-Surgical Evaluation</strong>
                  <br />
                  Your doctor will review your medical history, confirm your decision, and ensure this is the right choice for your circumstances through detailed counselling.
                </li>
                <li>
                  <strong>Anesthesia</strong>
                  <br />
                  The procedure is performed under general anesthesia or, in some cases, spinal anesthesia, ensuring complete comfort throughout.
                </li>
                <li>
                  <strong>Small Incisions</strong>
                  <br />
                  One or two small incisions, each less than a centimeter, are made near the navel and lower abdomen to allow the laparoscope and instruments access.
                </li>
                <li>
                  <strong>Visualization and Tubal Closure</strong>
                  <br />
                  The laparoscope provides a magnified, high-definition view of the fallopian tubes, which are then blocked, cut, sealed, or clipped using specialized instruments — the exact technique may vary based on individual factors and surgeon preference.
                </li>
                <li>
                  <strong>Closure and Recovery</strong>
                  <br />
                  The small incisions are closed with dissolvable stitches, and most patients are discharged the same day or within 24 hours.
                </li>
              </ol>
            </div>

            {/* Section 7 — Recovery After Tubal Ligation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Tubal Ligation
              </h2>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Procedure duration:</strong> Typically 20–30 minutes</li>
                <li><strong>Hospital stay:</strong> Same-day or next-day discharge in most cases</li>
                <li><strong>Return to light activities:</strong> Within a few days</li>
                <li><strong>Full recovery:</strong> Usually within 1 week</li>
                <li>Mild soreness or bloating around the incision sites is common for a few days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">
                Post-Procedure Care Tips
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Rest for the first day or two following the procedure</li>
                <li>Avoid heavy lifting and strenuous exercise for about a week, as advised</li>
                <li>Keep incision sites clean and dry to prevent infection</li>
                <li>Take prescribed pain relief medication as needed</li>
                <li>Attend the follow-up visit to confirm proper healing</li>
                <li>Contact your doctor if you experience fever, heavy bleeding, or severe pain</li>
              </ul>
            </div>

            {/* Section 8 — Does Tubal Ligation Affect Hormones or Periods? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Does Tubal Ligation Affect Hormones or Periods?
              </h2>

              <p className="text-gray-700">
                No, tubal ligation only blocks the fallopian tubes and does not remove or affect the ovaries or uterus. This means hormone production continues normally, and menstrual cycles remain unaffected. The procedure prevents pregnancy without altering a woman&apos;s natural hormonal balance in any way.
              </p>
            </div>

            {/* Section 9 — Tubal Ligation vs Other Contraception Methods */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Tubal Ligation vs Other Contraception Methods
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">
                        Factor
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">
                        Tubal Ligation
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">
                        IUD
                      </th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-gray-900 font-semibold">
                        Oral Contraceptive Pills
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Permanence
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Permanent
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Long-term, removable
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Temporary
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Effectiveness
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Over 99%
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Over 99%
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        About 91–99% with typical use
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Hormonal Impact
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        None
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Depends on type
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Yes
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Daily Action Needed
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        None
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        None
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Daily pill required
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 font-medium">
                        Reversibility
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Difficult, not guaranteed
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Fully reversible
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">
                        Fully reversible
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 10 — Is Tubal Ligation Reversible? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Is Tubal Ligation Reversible?
              </h2>

              <p className="text-gray-700">
                While tubal reversal surgery does exist, it is a complex procedure with variable success rates that depend on factors such as the original sterilization technique used, the length of remaining healthy tube, and the woman&apos;s age and overall fertility health. For this reason, tubal ligation should always be considered a permanent decision, and women who may want children in the future should carefully discuss alternative, reversible contraception options with their doctor first.
              </p>
            </div>

            {/* Section 11 — How to Choose the Right Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose the Right Specialist for Tubal Ligation in Moradabad
              </h2>

              <ol className="text-gray-700 space-y-2 mb-4 list-decimal pl-5">
                <li>Experience with laparoscopic sterilization procedures, ensuring precision and safety</li>
                <li>Thorough pre-procedure counselling, helping you make a fully informed, confident decision</li>
                <li>Day-care surgical facility with modern laparoscopic equipment</li>
                <li>Clear communication about the permanence of the procedure and available alternatives</li>
                <li>Attention to timing options, including postpartum or cesarean-combined sterilization if relevant</li>
                <li>Continuity of care from consultation through recovery and follow-up</li>
              </ol>
            </div>

            {/* Section 12 — Dr. Priyanka Gynaec: Trusted Tubal Ligation Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: Trusted Tubal Ligation Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Gynaec is a trusted center for tubal ligation in Moradabad, offering safe, minimally invasive laparoscopic sterilization rooted in the philosophy of &quot;Her Health First.&quot;
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology Used
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>High-Definition 3D Laparoscopic Surgery for precise, safe tubal ligation</li>
                <li>Volusun E22BT2024 3D &amp; 4D ultrasound machine for comprehensive pre-procedure evaluation</li>
                <li>Day-care surgical facility designed for quick, comfortable recovery</li>
                <li>Integrated maternity care for combined postpartum or cesarean sterilization when needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Patients Trust This Clinic
              </h3>

              <p className="text-gray-700 mb-4">
                Patients consistently highlight thorough, compassionate counselling before the procedure, gold-medal credentials and international fellowship training, and a care team that ensures continuity of care from first visit through follow-up.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Our Specialities
              </h3>

              <p className="text-gray-700 mb-2">
                Dr. Priyanka Gynaec offers a comprehensive range of women&apos;s health and surgical services, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Laparoscopic Sterilization — Safe and permanent keyhole tubal ligation day-care procedure</li>
                <li>Gynaecology &amp; Laparoscopy — Expert 3D laparoscopic care for reproductive health</li>
                <li>Pregnancy &amp; Birthing Care — Supportive, customized care through every trimester</li>
                <li>Normal Delivery — Gentle, expert-guided natural delivery support</li>
                <li>Antenatal Services — Structured prenatal screening and monitoring</li>
                <li>Laparoscopic Cystectomy &amp; Myomectomy — Fertility-preserving cyst and fibroid removal</li>
                <li>Laparoscopic Hysterectomy — Minimally invasive uterus removal with fast recovery</li>
                <li>Endometriosis Surgery — Advanced excision for pain relief and fertility preservation</li>
                <li>Fertility &amp; IVF — Personalized fertility treatment plans</li>
                <li>Paediatric Care — Newborn care, vaccinations, and pediatric consultations</li>
              </ul>
            </div>

            {/* Section 13 — Cost of Tubal Ligation in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Cost of Tubal Ligation in Moradabad
              </h2>

              <p className="text-gray-700">
                The cost of tubal ligation in Moradabad depends on whether it is performed as a standalone interval procedure or combined with delivery, along with the surgical technique used. As a day-care laparoscopic procedure, it remains significantly more affordable than in metro cities like Delhi or Mumbai, while offering the same standard of surgical precision and safety. A personalized consultation is the best way to receive an accurate cost estimate for your situation.
              </p>
            </div>

            {/* Section 14 — Conclusion */}
            <div className="mb-12">
              <p className="text-gray-700">
                Choosing a permanent method of contraception is a significant, personal decision, and having accurate information makes all the difference. With advanced laparoscopic technology, thorough counselling, and experienced specialists now available locally, tubal ligation in Moradabad offers women a safe, effective, and comfortable path to permanent family planning, close to home. If you have completed your family and are considering permanent sterilization, consult an experienced specialist to discuss whether tubal ligation is the right choice for you.
              </p>
            </div>

            {/* Section 15 — Contact & Clinic Address */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact &amp; Clinic Address
              </h2>

              <div className="space-y-4 mb-6">
                {/* Clinic Address */}
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-black mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold">Dr. Priyanka Gynaec</p>
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
                        href="mailto:contact@drpriyankaGynaec.com"
                        className="hover:underline"
                      >
                        contact@drpriyankaGynaec.com
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

            {/* Section 16 — FAQs */}
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