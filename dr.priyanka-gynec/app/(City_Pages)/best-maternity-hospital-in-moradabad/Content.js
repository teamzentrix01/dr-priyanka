import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function BestMaternityHospitalMoradabad() {
  const faqs = [
    {
      q: "How do I choose the best maternity hospital in Moradabad?",
      a: "Check the doctor's experience, hospital technology, emergency readiness, and patient reviews before deciding.",
    },
    {
      q: "Are good normal delivery options available in Moradabad?",
      a: "Yes, several centres prioritize normal delivery and opt for a C-section only when medically necessary.",
    },
    {
      q: "When should the first checkup happen at a maternity hospital?",
      a: "Ideally within 6 to 8 weeks of confirming the pregnancy.",
    },
    {
      q: "Can high-risk pregnancies be managed in Moradabad?",
      a: "Yes, experienced gynaecologists safely manage high-risk pregnancy cases as well.",
    },
    {
      q: "How long are postnatal follow-ups needed after delivery?",
      a: "Regular postnatal checkups are usually recommended for up to 6 weeks after delivery.",
    },
    {
      q: "Is 3D and 4D ultrasound available at maternity hospitals here?",
      a: "Yes, advanced centres like Dr. Priyanka Gynaec offer 3D and 4D ultrasound facilities.",
    },
    {
      q: "How can I book an appointment?",
      a: "You can book via call or WhatsApp. The WhatsApp number is 8979670705.",
    },
    {
      q: "Does a first pregnancy need extra attention?",
      a: "Yes, regular monitoring and following the doctor's guidance is important during a first pregnancy.",
    },
    {
      q: "Do the best maternity hospitals also provide newborn care?",
      a: "Yes, good maternity hospitals also offer newborn care and vaccination guidance after delivery.",
    },
    {
      q: "What should be included in the diet during pregnancy?",
      a: "A balanced diet rich in protein, iron, calcium, and folic acid, followed as per the doctor's advice.",
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
                Best Maternity Hospital in Moradabad: The Right Partner for Your Motherhood Journey
              </h1>


              <p className="text-gray-700">
                The maternity journey is far more than a medical process. It is
                an emotional, life-changing experience. That is why finding the
                best maternity hospital in Moradabad deserves careful thought.
                The points below will help make that decision easier.
              </p>
            </div>


            {/* Section 2 — What Makes Best */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Really Makes a Maternity Hospital the Best
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>A qualified and experienced team of gynaecologists</li>
                <li>Modern labor room and delivery infrastructure</li>
                <li>24 by 7 emergency readiness</li>
                <li>Strong preference for normal delivery</li>
                <li>Proven track record in handling high-risk pregnancies</li>
                <li>Newborn care and NICU support</li>
                <li>Clean, hygienic, and comfortable environment</li>
                <li>Transparent communication and genuinely attentive care</li>
                <li>Reasonable and transparent pricing</li>
                <li>Positive patient reviews and testimonials</li>
              </ul>
            </div>


            {/* Section 3 — Why It Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why a Best Maternity Hospital in Moradabad Matters
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Access expert care while staying close to family</li>
                <li>Reach the hospital quickly in case of an emergency</li>
                <li>No need to travel repeatedly for routine checkups</li>
                <li>More comfortable in a familiar environment</li>
                <li>Continuity of care with the same doctor throughout pregnancy</li>
                <li>Better understanding of local health patterns and lifestyle factors</li>
                <li>Savings on travel and accommodation expenses</li>
              </ul>
            </div>


            {/* Section 4 — Choosing Hospital */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                What to Look for While Choosing the Best Maternity Hospital
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Doctor&apos;s Credentials
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Verify qualifications and fellowships</li>
                    <li>Check years of experience</li>
                    <li>Look at the track record with complicated deliveries</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Delivery Approach
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Prefer hospitals that prioritize normal delivery</li>
                    <li>C-section should only happen for genuine medical need</li>
                    <li>Delivery plan should be clearly discussed in advance</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Technology and Equipment
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>3D and 4D ultrasound machine</li>
                    <li>Fetal monitoring devices</li>
                    <li>Proper labor-delivery-recovery setup</li>
                    <li>Emergency operation theatre readiness</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Newborn Care Facilities
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Equipped nursery</li>
                    <li>NICU support if needed</li>
                    <li>Vaccination guidance after delivery</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Patient Reviews and Testimonials
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Check real patient experiences</li>
                    <li>Do not rely on marketing claims alone</li>
                    <li>Give weight to local reviews and word-of-mouth</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Cleanliness and Comfort
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Hygienic environment</li>
                    <li>Calm, stress-free atmosphere</li>
                    <li>Comfortable waiting and recovery areas</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 5 — Trimester Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                How Trimester-Wise Maternity Care Works
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    First Trimester (Months 1 to 3)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Pregnancy confirmation tests</li>
                    <li>Baseline blood tests</li>
                    <li>Folic acid supplementation</li>
                    <li>Early ultrasound scan</li>
                    <li>Overall health assessment</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Second Trimester (Months 4 to 6)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Anomaly scan</li>
                    <li>Glucose tolerance test</li>
                    <li>Regular monitoring visits</li>
                    <li>Nutrition and weight-gain tracking</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Third Trimester (Months 7 to 9)
                  </h3>
                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Checking the baby&apos;s position</li>
                    <li>Monitoring fluid levels</li>
                    <li>Tracking weight gain</li>
                    <li>Finalizing the delivery plan</li>
                    <li>Assessing labor readiness</li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Section 6 — Dr Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Gynaec: A Leading Maternity Center in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                Led by Dr. Priyanka Pachauri, this centre offers complete
                solutions for every stage of a woman&apos;s health journey. A
                review of the official website, gynaecologistmoradabad.com,
                shows that it is not just a maternity clinic. It is a
                comprehensive women&apos;s health destination.
              </p>


              <h3 className="font-semibold text-gray-900 mb-3">
                Maternity and Related Services
              </h3>


              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Pregnancy and Birthing Care: A supportive, customized delivery experience</li>
                <li>Antenatal Services: Structured prenatal checkups and screenings</li>
                <li>Normal Delivery: An approach that prioritizes natural delivery</li>
                <li>Gynaecology and 3D Laparoscopy: Advanced surgical options for reproductive health</li>
                <li>Fertility and IVF: Personalized treatment to help couples achieve parenthood</li>
                <li>Laparoscopic Cystectomy, Myomectomy and Hysterectomy: Fertility-preserving keyhole procedures</li>
                <li>Diagnostic Hysteroscopy and Polypectomy: Minimally invasive procedures</li>
                <li>Endometriosis Surgery: Advanced 3D laparoscopic excision</li>
                <li>Paediatric Care: Compassionate consultation for newborns and children</li>
              </ul>


              <h3 className="font-semibold text-gray-900 mb-3">
                Advanced Technology
              </h3>


              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>High-definition 3D laparoscopic surgery setup</li>
                <li>3D and 4D ultrasound machine</li>
                <li>GERI time-lapse embryo incubator</li>
                <li>AI-powered semen analysis</li>
              </ul>


              <h3 className="font-semibold text-gray-900 mb-3">
                What Builds Patient Trust
              </h3>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Gold medal credentials</li>
                <li>International fellowships</li>
                <li>Continuity of care, with the same team from first visit through delivery</li>
                <li>Genuine, clear communication as reflected in patient testimonials</li>
              </ul>
            </div>


            {/* Section 7 — Mistakes */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Mistakes to Avoid While Choosing the Best Maternity Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Relying only on advertisements</li>
                <li>Ignoring emergency preparedness</li>
                <li>Not clarifying doubts with the doctor</li>
                <li>Underestimating postnatal care</li>
                <li>Ignoring the distance factor</li>
                <li>Skipping reviews and testimonials</li>
              </ul>
            </div>


            {/* Section 8 — Postnatal */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Care Is Part of Being the Best Maternity Hospital
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Regular monitoring of the mother&apos;s recovery</li>
                <li>Breastfeeding guidance</li>
                <li>Following the newborn&apos;s vaccination schedule</li>
                <li>Mental health and emotional support</li>
                <li>Scheduling follow-up visits</li>
              </ul>
            </div>


            {/* Section 9 — Local Benefits */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Benefits of Choosing a Local Maternity Hospital in Moradabad
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Less travel stress, especially in the third trimester</li>
                <li>Quick emergency access</li>
                <li>Family support during checkups and delivery</li>
                <li>Cost-effective care with no added travel or stay expenses</li>
                <li>Continuity of care with the same doctor throughout the journey</li>
              </ul>
            </div>


            {/* Section 10 — Myths */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Myths to Clear Up Before Choosing a Maternity Hospital
              </h2>


              <ul className="text-gray-700 space-y-3 list-disc pl-5">
                <li>Myth: A bigger city hospital is always better. Reality: Doctor expertise and technology matter more.</li>
                <li>Myth: A C-section is always the safer option. Reality: Normal delivery, when medically appropriate, usually means faster recovery.</li>
                <li>Myth: An expensive hospital means better care. Reality: Cost is not a guarantee of quality.</li>
                <li>Myth: One visit per trimester is enough. Reality: Regular, scheduled visits are essential.</li>
                <li>Myth: Postnatal care is not that important. Reality: Care after delivery matters just as much.</li>
              </ul>
            </div>


            {/* Section 11 — Healthy Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Essential Tips for a Healthy Pregnancy
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Maintain a balanced diet with iron, calcium, and folic acid</li>
                <li>Never skip scheduled checkups</li>
                <li>Stay active with light exercise like walking or prenatal yoga</li>
                <li>Track your baby&apos;s movements and report unusual changes immediately</li>
                <li>Prioritize rest and a stress-free environment</li>
                <li>Never self-medicate and always consult your doctor first</li>
                <li>Stay well hydrated</li>
                <li>Keep emotional support from family close throughout</li>
              </ul>
            </div>


            {/* Section 12 — Patient Centric */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Sets a Patient-Centric Maternity Hospital Apart
              </h2>


              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Consultations never feel rushed</li>
                <li>Test results and scans are clearly explained</li>
                <li>Family is involved in important decisions</li>
                <li>Birth preferences are respected wherever medically safe</li>
                <li>Emotional support is offered consistently</li>
              </ul>
            </div>


            {/* Section 13 — Government vs Private */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Government vs Private Maternity Hospitals in Moradabad
              </h2>


              <p className="text-gray-700 mb-6">
                Choosing between a government and a private maternity hospital is
                a common dilemma. Here is a quick comparison to help you decide.
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Government Maternity Hospitals
                  </h3>


                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Lower or subsidized treatment costs</li>
                    <li>High patient volume, which can mean longer waiting times</li>
                    <li>Doctor availability may vary by shift</li>
                    <li>Basic infrastructure, though improving in many centres</li>
                    <li>Suitable for families prioritizing affordability over personalization</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Private Maternity Hospitals
                  </h3>


                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Personalized, one-on-one attention from the same doctor</li>
                    <li>Shorter waiting times and more flexible appointment scheduling</li>
                    <li>Access to advanced technology like 3D and 4D ultrasound and modern labor rooms</li>
                    <li>Cleaner, more comfortable facilities</li>
                    <li>Better continuity of care throughout pregnancy and delivery</li>
                    <li>Slightly higher cost, but often justified by quality and consistency of care</li>
                  </ul>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                For many families, a private maternity hospital in Moradabad
                offers the right balance of quality, comfort, and accessibility,
                especially for first-time mothers or high-risk pregnancies that
                need close monitoring.
              </p>
            </div>


            {/* Section 14 — Questions */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Important Questions to Ask Before Choosing a Maternity Hospital
              </h2>


              <p className="text-gray-700 mb-4">
                Before finalizing a hospital, it helps to ask a few direct
                questions during your first visit:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>What is the doctor&apos;s experience with normal deliveries versus C-sections?</li>
                <li>Is the doctor personally available during labor, or will a different doctor be on call?</li>
                <li>What emergency facilities are available on-site, including blood bank access?</li>
                <li>Is a NICU available in-house, or would the baby need to be transferred elsewhere?</li>
                <li>What is the hospital&apos;s approach to pain management during labor?</li>
                <li>Are family members allowed in the delivery room?</li>
                <li>What is included in the overall delivery package, and are there any hidden charges?</li>
                <li>How are postnatal checkups and vaccinations scheduled after discharge?</li>
              </ul>


              <p className="text-gray-700">
                Getting clear answers to these questions in advance helps avoid
                confusion and stress later, especially during an emergency.
              </p>
            </div>


            {/* Section 15 — Hospital Bag */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What to Pack for a Hospital Delivery
              </h2>


              <p className="text-gray-700 mb-6">
                Being prepared in advance reduces last-minute stress when labor
                begins. A basic hospital bag checklist includes:
              </p>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    For the Mother
                  </h3>


                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Comfortable, loose clothing and nightwear</li>
                    <li>Maternity pads and nursing bras</li>
                    <li>Toiletries and basic skincare items</li>
                    <li>Important medical documents, reports, and ID proof</li>
                    <li>Mobile charger and personal comfort items</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    For the Baby
                  </h3>


                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Soft newborn clothing sets</li>
                    <li>Swaddle blankets</li>
                    <li>Diapers and baby wipes</li>
                    <li>A going-home outfit</li>
                  </ul>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    For the Family or Support Person
                  </h3>


                  <ul className="text-gray-700 space-y-2 list-disc pl-5">
                    <li>Snacks and water bottles</li>
                    <li>A change of clothes</li>
                    <li>Cash and insurance documents, if applicable</li>
                  </ul>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                Packing this bag by the start of the third trimester ensures
                you&apos;re ready whenever labor begins, without any last-minute
                scrambling.
              </p>
            </div>


            {/* Section 16 — Family Support */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Role of Family Support During the Maternity Journey
              </h2>


              <p className="text-gray-700 mb-4">
                Family involvement plays a bigger role in a smooth maternity
                experience than many people realize. A supportive environment
                helps reduce stress for the mother both physically and
                emotionally.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Accompanying the mother to checkups builds confidence and reassurance</li>
                <li>Helping track appointment schedules and reports avoids missed visits</li>
                <li>Being present during labor, where hospital policy allows, offers emotional comfort</li>
                <li>Assisting with household responsibilities reduces physical strain during pregnancy</li>
                <li>Supporting the mother through postnatal recovery makes a significant difference to overall wellbeing</li>
              </ul>


              <p className="text-gray-700">
                A maternity hospital that welcomes and accommodates family
                involvement, rather than treating it as an inconvenience, often
                contributes to a noticeably better overall experience for the
                mother.
              </p>
            </div>


            {/* Section 17 — Closing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                A Safe and Comfortable Maternity Journey
              </h2>


              <p className="text-gray-700">
                Choosing the best maternity hospital in Moradabad is a decision
                that shapes the safety, comfort, and overall experience of you
                and your baby. Experienced doctors, modern technology, and a
                genuinely caring team come together to create a smooth and safe
                maternity journey. If you&apos;re looking for trusted maternity care
                in Moradabad, use the contact details below for appointments and
                queries.
              </p>
            </div>


            {/* Section 18 — CTA */}
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
                      href="mailto:drpriyankagynec@gmail.com"
                      className="hover:underline"
                    >
                      drpriyankagynec@gmail.com
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


            {/* Section 19 — FAQs */}
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
