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


export default function PostnatalCheckupDoctorKatgharMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a postnatal checkup in Katghar, Moradabad?",
      a: "You can consult Dr. Priyanka Pachauri of Dr. Priyanka Gynaec, who provides postnatal care along with newborn care and vaccinations.",
    },
    {
      q: "When should I have my first postnatal checkup?",
      a: "Usually within the first one to two weeks after delivery, and a full checkup around six weeks. Visit sooner if you have any warning signs.",
    },
    {
      q: "What is checked during a postnatal visit?",
      a: "Blood pressure, weight, bleeding, uterine recovery, wound or stitches, breast and feeding concerns, emotional wellbeing, and contraception needs.",
    },
    {
      q: "How long does bleeding last after delivery?",
      a: "It usually lessens over several weeks. Heavy bleeding, large clots, or foul-smelling discharge needs medical review.",
    },
    {
      q: "How long does C-section recovery take?",
      a: "Most women feel noticeably better within a few weeks, but complete healing takes longer. Follow your doctor’s guidance on activity and wound care.",
    },
    {
      q: "Is it normal to feel low after childbirth?",
      a: "Mild mood swings in the first two weeks are common. If sadness, anxiety, or hopelessness continues or worsens, speak to your doctor, since postnatal depression is treatable.",
    },
    {
      q: "Can I get pregnant while breastfeeding?",
      a: "Yes, it is possible. Discuss suitable contraception at your postnatal visit.",
    },
    {
      q: "When can I resume exercise?",
      a: "Gentle walking is usually fine early on. Your doctor will advise on stronger exercise based on your delivery type and recovery.",
    },
    {
      q: "Are newborn vaccinations available at the clinic?",
      a: "Yes. The clinic offers paediatric consultations, newborn care, and vaccinations.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the “Book Appointment” option on the official website.",
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
                Postnatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>


              <p className="text-gray-700 mb-4">
                The days after childbirth are filled with joy, sleepless nights, and many new questions. Most of the attention goes to the baby, yet the mother’s recovery matters just as much. Healing from delivery, feeding, emotional changes, and long-term health all need proper medical guidance.
              </p>


              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby areas of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec provides postnatal care for new mothers, along with newborn care and vaccinations for babies. The clinic’s philosophy is &quot;Her Health First.&quot; You are listened to, supported, and never rushed.
              </p>
            </div>


            {/* Section 2 — What Is Postnatal Care? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Postnatal Care?
              </h2>


              <p className="text-gray-700">
                Postnatal care, also called postpartum care, is the medical care a mother receives after delivery. It begins right after birth and continues for the first six weeks, and often beyond. It covers physical recovery, emotional wellbeing, breastfeeding, contraception, and the baby’s early health.
              </p>
            </div>


            {/* Section 3 — Why Checkups Matter */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Postnatal Checkups Are Important
              </h2>


              <p className="text-gray-700 mb-4">
                Many women skip follow-up visits because they feel fine or are busy with the baby. However, problems such as infection, heavy bleeding, high blood pressure, anaemia, and low mood can appear after delivery without being obvious at first. A timely checkup helps to:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Confirm that the uterus and wound or stitches are healing well</li>
                <li>Detect infection or abnormal bleeding early</li>
                <li>Check blood pressure, weight, and haemoglobin levels</li>
                <li>Support breastfeeding</li>
                <li>Identify signs of postnatal depression or anxiety</li>
                <li>Discuss contraception and family planning</li>
                <li>Answer your questions about the baby</li>
              </ul>
            </div>


            {/* Section 4 — When to Have */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You Have a Postnatal Checkup?
              </h2>


              <p className="text-gray-700 mb-4">
                Schedules vary with each mother, but a typical pattern is:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Within the first few days:</strong> Review in the hospital or clinic, especially if you had a caesarean, stitches, or complications.</li>
                <li><strong>Around 1 to 2 weeks:</strong> Wound check, bleeding review, feeding support, and baby weight check.</li>
                <li><strong>Around 6 weeks:</strong> A full postnatal checkup, including a general examination and contraception discussion.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                If you had a high-risk pregnancy, diabetes, high blood pressure, or a difficult delivery, your doctor may advise extra visits.
              </p>
            </div>


            {/* Section 5 — Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Services at Dr. Priyanka Gynaec
              </h2>


              <p className="text-gray-700 mb-4">
                The clinic provides care for the mother and baby in one place:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Post-delivery physical examination</li>
                <li>Wound care after caesarean or stitches after a normal delivery</li>
                <li>Review of bleeding, pain, and uterine recovery</li>
                <li>Blood pressure, weight, and anaemia assessment</li>
                <li>Breastfeeding guidance</li>
                <li>Nutrition and rest advice</li>
                <li>Emotional wellbeing check</li>
                <li>Contraception and family planning counselling</li>
                <li>Newborn care and paediatric consultations</li>
                <li>Baby vaccinations</li>
              </ul>
            </div>


            {/* Section 6 — Normal Delivery Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After a Normal Delivery
              </h2>


              <p className="text-gray-700 mb-4">
                After a vaginal birth, common experiences include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Soreness or stitches:</strong> Keep the area clean and dry, and use pain relief as advised.</li>
                <li><strong>Vaginal bleeding (lochia):</strong> Heavier at first, gradually lightening over several weeks.</li>
                <li><strong>Afterpains:</strong> Cramping as the uterus contracts back to its normal size.</li>
                <li><strong>Fatigue:</strong> Very common, especially with broken sleep.</li>
                <li><strong>Breast changes:</strong> Fullness and engorgement as milk comes in.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Gentle walking, adequate fluids, fibre-rich food, and rest help recovery. Ask your doctor when it is safe to resume exercise and intimacy.
              </p>
            </div>


            {/* Section 7 — C-Section Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After a C-Section
              </h2>


              <p className="text-gray-700 mb-4">
                Recovery after a caesarean takes longer because it involves abdominal surgery. Guidance usually includes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Following wound care instructions carefully</li>
                <li>Supporting the incision when coughing, laughing, or getting up</li>
                <li>Walking gently, but avoiding heavy lifting until advised</li>
                <li>Eating well and drinking plenty of fluids to avoid constipation</li>
                <li>Taking prescribed medicines on time</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Report fever, increasing pain, redness, swelling, or discharge from the wound without delay.
              </p>
            </div>


            {/* Section 8 — Warning Signs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs That Need Prompt Medical Attention
              </h2>


              <p className="text-gray-700 mb-4">
                Contact your doctor or seek emergency care if you have:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Heavy bleeding that soaks a pad within an hour or passes large clots</li>
                <li>Fever or chills</li>
                <li>Foul-smelling vaginal discharge</li>
                <li>Severe or worsening abdominal pain</li>
                <li>Redness, swelling, or pus at the wound or stitches</li>
                <li>Severe headache or vision changes</li>
                <li>Pain, redness, or swelling in the leg</li>
                <li>Chest pain or breathlessness</li>
                <li>Painful, hard, red areas in the breast with fever</li>
                <li>Feelings of hopelessness or thoughts of harming yourself or the baby</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Do not wait for your next appointment if you notice any of these.
              </p>
            </div>


            {/* Section 9 — Breastfeeding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Breastfeeding Support
              </h2>


              <p className="text-gray-700 mb-4">
                Breastfeeding is natural, but it is also a skill that mother and baby learn together. Many women face sore nipples, low supply worries, or engorgement in the early days. Your doctor can help with:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Comfortable positions and a good latch</li>
                <li>Managing pain and engorgement</li>
                <li>Understanding feeding frequency and baby’s cues</li>
                <li>Maintaining supply and when to seek extra help</li>
                <li>Breastfeeding after a caesarean</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Most difficulties improve with timely support, so please ask rather than struggle alone.
              </p>
            </div>


            {/* Section 10 — Nutrition and Rest */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Nutrition and Rest After Delivery
              </h2>


              <p className="text-gray-700 mb-4">
                Your body needs fuel to heal and produce milk. General advice includes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Eating regular balanced meals with protein, vegetables, fruit, grains, and dairy</li>
                <li>Drinking enough water throughout the day</li>
                <li>Continuing iron, calcium, or other supplements if prescribed</li>
                <li>Resting whenever the baby sleeps</li>
                <li>Accepting help from family with housework and meals</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Please avoid crash diets and heavy exercise in the early weeks. Your doctor can advise when to restart workouts.
              </p>
            </div>


            {/* Section 11 — Emotional Health */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Health After Childbirth
              </h2>


              <p className="text-gray-700 mb-4">
                Many mothers experience the &quot;baby blues,&quot; with mood swings, tearfulness, and irritability in the first two weeks. It usually settles on its own. However, postnatal depression is different. It involves persistent sadness, anxiety, loss of interest, trouble bonding with the baby, sleep problems unrelated to the baby’s needs, or overwhelming guilt.
              </p>


              <p className="text-gray-700">
                It is a medical condition, not a weakness, and it is treatable. Talk to your doctor or a trusted family member if you recognise these signs. Early support helps both you and your baby.
              </p>
            </div>


            {/* Section 12 — Contraception */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contraception and Family Planning
              </h2>


              <p className="text-gray-700 mb-4">
                Fertility can return sooner than many women expect, even while breastfeeding. A postnatal checkup is the right time to discuss:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Short-term and long-term contraception options</li>
                <li>Methods suitable during breastfeeding</li>
                <li>Permanent options such as laparoscopic sterilization, a safe day-care procedure, for those who have completed their family</li>
                <li>Ideal spacing before the next pregnancy</li>
              </ul>
            </div>


            {/* Section 13 — Newborn Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Newborn Care and Vaccinations
              </h2>


              <p className="text-gray-700 mb-4">
                Postnatal care covers your baby as well. The clinic offers paediatric consultations, newborn care, and vaccinations, including guidance on:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Feeding and weight gain</li>
                <li>Umbilical cord care and bathing</li>
                <li>Sleep patterns and settling</li>
                <li>Jaundice, colic, and common newborn concerns</li>
                <li>Vaccination schedules</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Having mother and baby cared for in one place saves effort during a demanding period.
              </p>
            </div>


            {/* Section 14 — Pelvic Floor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Pelvic Floor and Long-Term Health
              </h2>


              <p className="text-gray-700">
                Pregnancy and delivery strain pelvic floor muscles. Leakage of urine, a feeling of heaviness in the pelvis, or persistent pain should not be ignored. Pelvic floor exercises and medical review can help, and further treatment is available if prolapse or other issues are found.
              </p>
            </div>


            {/* Section 15 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Clinic Address and Appointments
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