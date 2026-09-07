
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function NormalDeliveryHospitalMoradabad() {
  const faqs = [
    {
      q: "How do I choose a normal delivery hospital in Moradabad?",
      a: "Check the doctor's approach to normal delivery, the labor room infrastructure, and emergency readiness before deciding.",
    },
    {
      q: "How can I improve my chances of a normal delivery?",
      a: "Regular checkups, an active lifestyle, a balanced diet, and prenatal yoga can improve the chances.",
    },
    {
      q: "Is normal delivery painful?",
      a: "Some discomfort is natural, but pain management options and proper preparation make the experience manageable.",
    },
    {
      q: "When does a C-section become necessary?",
      a: "When the baby is in a breech position, labor is not progressing, or there is a risk to the mother's or baby's health.",
    },
    {
      q: "Is normal delivery possible after a previous C-section?",
      a: "VBAC is possible in many cases. Discuss your specific situation with your doctor.",
    },
    {
      q: "How long are follow-up visits needed after delivery?",
      a: "Regular postnatal checkups are usually recommended for up to 6 weeks after delivery.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book via call or WhatsApp. The WhatsApp number is 8979670705.",
    },
    {
      q: "Can a family member stay with me during labor?",
      a: "Depending on hospital policy, many centres do allow this. It is best to confirm in advance.",
    },
    {
      q: "What is the best way to prepare for a normal delivery in the third trimester?",
      a: "Keep your birth plan, hospital bag, and understanding of labor signs ready by the third trimester.",
    },
    {
      q: "Is normal delivery possible in every pregnancy?",
      a: "No, it depends on the mother's and baby's health condition. The doctor evaluates this on a case-by-case basis.",
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
                Normal Delivery Hospital Moradabad: The Right Choice for a Safe, Natural Birth
              </h1>


              <p className="text-gray-700">
                Every expecting mother hopes for a safe and smooth normal
                delivery. But without the right guidance and the right hospital,
                that hope can quickly turn into stress. That is why finding the
                right normal delivery hospital in Moradabad calls for a few
                important factors to be kept in mind. The points below will help
                make this decision easier and better informed.
              </p>
            </div>


            {/* Section 2 — Why Normal Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Normal Delivery Is Often Preferred
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Faster recovery compared to a C-section</li>
                <li>Shorter hospital stay</li>
                <li>No surgery or anesthesia related risks</li>
                <li>Helps build the baby's natural immunity</li>
                <li>Mother can begin breastfeeding sooner</li>
                <li>Generally considered safer for future pregnancies too</li>
                <li>Lower risk of infection</li>
              </ul>
            </div>


            {/* Section 3 — Choosing Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                What to Look for While Choosing a Normal Delivery Hospital
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. The Doctor's Approach
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>The doctor should genuinely prioritize normal delivery, treating a C-section as a last resort</li>
                    <li>Patience and proper monitoring throughout labor</li>
                    <li>Every case evaluated individually</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Labor Room Infrastructure
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Modern labor-delivery-recovery setup</li>
                    <li>Continuous fetal monitoring equipment</li>
                    <li>Pain management options such as epidurals, if needed</li>
                    <li>Emergency operation theatre backup in case of sudden complications</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Doctor's Availability
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>The doctor should be personally available during labor</li>
                    <li>A 24 by 7 team, not just fixed working hours</li>
                    <li>Immediate response in emergency situations</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Antenatal Preparation
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Regular checkups that improve the chances of a normal delivery</li>
                    <li>Guidance on prenatal exercises and yoga</li>
                    <li>Diet and weight-management advice</li>
                    <li>Birth preparation classes, where available</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Post-Delivery Support
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Immediate skin-to-skin contact facility</li>
                    <li>Breastfeeding guidance right after delivery</li>
                    <li>Postnatal monitoring for both mother and baby</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 4 — Improve Chances */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Improve Your Chances of a Normal Delivery
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Stay active during pregnancy with light walking and prenatal yoga</li>
                <li>Never skip regular checkups with your doctor</li>
                <li>Follow a balanced diet to avoid excessive weight gain</li>
                <li>Learn to recognize the signs of labor and reach the hospital on time</li>
                <li>Practice breathing techniques and relaxation exercises</li>
                <li>Discuss your birth preferences with your doctor well in advance</li>
                <li>Reduce stress and maintain a positive mindset</li>
              </ul>
            </div>


            {/* Section 5 — Normal vs C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Normal Delivery vs C-Section: When Each One Is Needed
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Normal Delivery Is Generally Preferred When:
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>The baby's position is correct (head-down)</li>
                    <li>Both mother and baby are in a stable condition</li>
                    <li>Labor is progressing naturally</li>
                    <li>There are no major complications</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    A C-Section Becomes Necessary When:
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>The baby is in a breech position</li>
                    <li>There is a complication like placenta previa</li>
                    <li>The baby's size is too large for labor</li>
                    <li>There is a sudden risk to the mother's or baby's health</li>
                    <li>Labor is not progressing, or there are signs of fetal distress</li>
                  </ul>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                A good hospital always attempts normal delivery first,
                recommending a C-section only when there is a genuine medical
                need.
              </p>
            </div>


            {/* Section 6 — Trimester Prep */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Trimester-Wise Preparation for a Normal Delivery
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    First Trimester
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Baseline health check and risk assessment</li>
                    <li>Starting folic acid and necessary supplements</li>
                    <li>Lifestyle and diet guidance</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Second Trimester
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Anomaly scan to check the baby's growth</li>
                    <li>Starting physical activity and prenatal yoga</li>
                    <li>Glucose test and nutrition monitoring</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Third Trimester
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Regular checks on the baby's position</li>
                    <li>Understanding the signs of labor</li>
                    <li>Preparing your birth plan and hospital bag</li>
                    <li>Finalizing your delivery approach with the doctor</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 7 — Dr Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: A Trusted Center for Normal Delivery in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                When it comes to normal delivery in Moradabad, Dr. Priyanka
                Gynaec is a name that comes up often. Led by Dr. Priyanka
                Pachauri, this centre prioritizes natural delivery while
                providing a safe and supportive birthing experience. A review of
                the official website, gynaecologistmoradabad.com, shows that
                this approach is central to the centre's philosophy.
              </p>


              <h3 className="font-semibold text-gray-900 mb-3">
                Services That Support Normal Delivery
              </h3>


              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Pregnancy and Birthing Care: A supportive, customized delivery experience</li>
                <li>Antenatal Services: Structured prenatal checkups that improve the chances of normal delivery</li>
                <li>Normal Delivery: Dedicated priority for natural, vaginal delivery</li>
                <li>Gynaecology and 3D Laparoscopy: Advanced options for reproductive health</li>
                <li>Paediatric Care: Newborn consultation right after delivery</li>
              </ul>


              <h3 className="font-semibold text-gray-900 mb-3">
                Advanced Technology That Makes Delivery Safer
              </h3>


              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>High-definition 3D laparoscopic surgery setup, for emergency situations</li>
                <li>3D and 4D ultrasound machine for accurate tracking of baby's position and growth</li>
                <li>Continuous fetal monitoring facility</li>
              </ul>


              <h3 className="font-semibold text-gray-900 mb-3">
                What Builds Patient Trust
              </h3>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gold medal credentials and international fellowships</li>
                <li>Continuity of care with the same team from first visit through delivery</li>
                <li>Patient testimonials mention empathetic and clear communication</li>
                <li>A genuine focus on the Her Health First philosophy</li>
              </ul>
            </div>


            {/* Section 8 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Mistakes to Avoid While Choosing a Normal Delivery Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Not discussing your birth preferences with the doctor</li>
                <li>Relying only on the hospital's marketing</li>
                <li>Skipping antenatal checkups</li>
                <li>Ignoring signs of labor and reaching the hospital too late</li>
                <li>Not checking emergency backup facilities</li>
                <li>Not asking about pain management options in advance</li>
              </ul>
            </div>


            {/* Section 9 — Postnatal */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Care After a Normal Delivery
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Regular recovery checkups</li>
                <li>Breastfeeding guidance and lactation support</li>
                <li>Following the newborn's vaccination schedule</li>
                <li>Rest and nutrition guidance for the mother</li>
                <li>Emotional and mental health support</li>
              </ul>
            </div>


            {/* Section 10 — Local Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Local Normal Delivery Hospital in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Less travel stress, especially during labor</li>
                <li>Quick access to the hospital in an emergency</li>
                <li>Family support available during delivery</li>
                <li>Cost-effective with no need to travel to another city</li>
                <li>Continuity of care with the same doctor</li>
              </ul>
            </div>


            {/* Section 11 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths About Normal Delivery
              </h2>


              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>Myth: Normal delivery is always extremely painful. Reality: Pain management options are available, and proper preparation can make the experience much more manageable.</li>
                <li>Myth: Once a C-section, always a C-section. Reality: VBAC (Vaginal Birth After Cesarean) is possible in many cases. Discuss this with your doctor.</li>
                <li>Myth: Normal delivery is safe only for young mothers. Reality: Overall health condition matters more than age alone.</li>
                <li>Myth: A bigger hospital means better chances of normal delivery. Reality: The doctor's approach and experience matter far more.</li>
                <li>Myth: You should rush to the hospital the moment labor pain starts. Reality: Discuss with your doctor beforehand exactly when it is the right time to go in.</li>
              </ul>
            </div>


            {/* Section 12 — Pain Management */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pain Management Options During Normal Delivery
              </h2>


              <p className="text-gray-700 mb-4">
                Labor pain is one of the biggest concerns for most expecting
                mothers, but modern maternity hospitals offer several ways to
                manage it comfortably:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Epidural anesthesia: Numbs the lower body while keeping the mother fully awake and aware during delivery</li>
                <li>Breathing and relaxation techniques: Taught during antenatal classes to help manage contractions naturally</li>
                <li>Position changes during labor: Walking, sitting on a birthing ball, or changing posture can ease discomfort</li>
                <li>Warm water therapy: Some hospitals offer warm showers or tubs to relax muscles during early labor</li>
                <li>Continuous emotional support: A calm, reassuring environment and a supportive team can significantly reduce perceived pain</li>
                <li>Massage and counter-pressure techniques: Applied by trained staff or a birth partner to ease back pain during contractions</li>
              </ul>


              <p className="text-gray-700">
                Discussing pain management preferences with your doctor in
                advance helps you feel more prepared and less anxious as your
                due date approaches.
              </p>
            </div>


            {/* Section 13 — Signs of Labor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Signs of Labor You Should Never Ignore
              </h2>


              <p className="text-gray-700 mb-4">
                Knowing what to watch for helps you reach the hospital at the
                right time, not too early and not too late.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Regular, increasingly intense contractions coming closer together</li>
                <li>Water breaking, or a sudden gush or trickle of fluid</li>
                <li>Lower back pain that comes in waves</li>
                <li>Bloody show or mucus discharge</li>
                <li>Reduced or unusual baby movements</li>
                <li>Pelvic pressure that feels different from earlier in pregnancy</li>
              </ul>


              <p className="text-gray-700">
                If you notice any of these signs, contact your hospital
                immediately rather than waiting it out at home, especially if it
                is your first pregnancy.
              </p>
            </div>


            {/* Section 14 — Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Doctor About Normal Delivery
              </h2>


              <p className="text-gray-700 mb-4">
                Having an open conversation with your doctor well before your due
                date can make the entire process feel far less uncertain:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is your personal experience and success rate with normal deliveries?</li>
                <li>Under what circumstances would you recommend switching to a C-section?</li>
                <li>Will you personally be present during my labor, or will another doctor step in?</li>
                <li>What pain relief options are available at this hospital?</li>
                <li>Is skin-to-skin contact and immediate breastfeeding supported right after birth?</li>
                <li>What happens if labor does not progress as expected?</li>
              </ul>


              <p className="text-gray-700">
                Clear answers to these questions help you build trust with your
                medical team and approach delivery day with more confidence.
              </p>
            </div>


            {/* Section 15 — Closing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Safe and Smooth Normal Delivery Experience
              </h2>


              <p className="text-gray-700">
                Choosing the right normal delivery hospital in Moradabad has a
                direct impact on your delivery experience, recovery, and your
                baby's health. An experienced doctor, modern infrastructure, and
                a genuinely supportive team come together to make a safe and
                smooth normal delivery possible. If you are looking for trusted
                normal delivery care in Moradabad, use the contact details below
                for appointments and queries.
              </p>
            </div>


            {/* Section 16 — CTA */}
            <div className="mb-12 bg-[#F8F4EA] text-black rounded-2xl p-8">
              <h2 className="text-3xl font-serif mb-4">
                Contact Details
              </h2>


              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


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
                  </div>
                </div>


                <div className="flex items-start gap-3">
                  <Mail
                    size={20}
                    className="text-black mt-1 shrink-0"
                  />


                  <div>
                    <p className="font-semibold">Email</p>


                    <a
                      href="mailto:drpriyanka@gynaecologistmoradabad.com"
                      className="hover:underline"
                    >
                      drpriyanka@gynaecologistmoradabad.com
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


            {/* Section 17 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
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


                    <p className="text-gray-700">
                      {faq.a}
                    </p>
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