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


export default function CSectionSpecialistDelhiRoadMoradabad() {
  const faqs = [
    {
      q: "Is C-section painful?",
      a: "You will not feel pain during surgery because of anaesthesia. Some discomfort afterwards is normal and is managed with medicines.",
    },
    {
      q: "How soon can I hold my baby after a C-section?",
      a: "Usually within minutes if both mother and baby are stable.",
    },
    {
      q: "Will I have a scar after a C-section?",
      a: "Yes, usually a low horizontal scar that often fades over time.",
    },
    {
      q: "Can I have a normal delivery after a C-section?",
      a: "In some cases, yes. Your doctor will assess your eligibility based on the reason for the previous caesarean, the type of uterine incision, and your current pregnancy.",
    },
    {
      q: "When can I start exercising after a C-section?",
      a: "Gentle walking usually begins early. Structured exercise should wait until your doctor clears you, often after six weeks.",
    },
    {
      q: "Can I choose a C-section without a medical reason?",
      a: "Discuss this openly with your doctor, who will explain the benefits and risks so you can make an informed decision.",
    },
    {
      q: "How long does a C-section procedure take?",
      a: "The procedure often takes around 45 to 60 minutes, though the total hospital stay is usually longer for recovery and newborn care.",
    },
    {
      q: "How long is the hospital stay after a C-section?",
      a: "Most mothers stay in hospital for three to five days, depending on their recovery and the baby’s health.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist, obstetrician, and IVF specialist (MS, FMAS) offering C-section care, pregnancy management, and treatment for high-risk pregnancies.",
    },
    {
      q: "What facilities should a C-section hospital have?",
      a: "A strong facility should have a clean operation theatre, anaesthesia support, blood bank access, newborn care arrangements, and 24-hour emergency readiness.",
    },
    {
      q: "How can I book a C-section consultation in Moradabad?",
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
                C-Section Specialist on Delhi Road Moradabad: What Every Expecting Mother Should Know
              </h1>


              <p className="text-gray-700 mb-4">
                Not every birth follows the path a mother imagines. Sometimes a baby’s position, a medical condition, or a change during labour makes a caesarean delivery the safest choice. Knowing what a C-section involves, and having a skilled doctor you trust, can turn a stressful situation into a calm and confident one.
              </p>


              <p className="text-gray-700">
                If you are looking for a C-section specialist on Delhi Road Moradabad, this guide explains when surgery is needed, what happens on the day, how recovery works, and how to choose the right doctor.
              </p>
            </div>


            {/* Section 2 — What Is a C-Section? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a C-Section?
              </h2>


              <p className="text-gray-700 mb-4">
                A caesarean section, commonly called a C-section, is a surgical procedure in which the baby is delivered through an incision in the mother’s abdomen and uterus. It is performed by an obstetrician-gynaecologist with the support of an anaesthetist, surgical nurses, and, ideally, a paediatrician for the newborn.
              </p>


              <p className="text-gray-700 mb-4">
                A C-section may be planned in advance or performed as an emergency during labour. Both are common, well-established procedures, and when done in a properly equipped facility they are considered safe.
              </p>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Planned or Elective C-Section
                  </h3>
                  <p className="text-gray-700">
                    A planned C-section is scheduled in advance, usually around the 39th week, when a medical reason makes vaginal birth unsafe or less suitable.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Emergency C-Section
                  </h3>
                  <p className="text-gray-700">
                    An emergency C-section is decided during labour when a sudden concern arises, such as fetal distress, bleeding, or stalled progress.
                  </p>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                Because emergencies can arise without warning, it is wise to choose a facility that can operate quickly at any hour.
              </p>
            </div>


            {/* Section 3 — Why Delhi Road Is Practical */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Delhi Road Is a Practical Location
              </h2>


              <p className="text-gray-700">
                When time matters, distance matters. Delhi Road is well connected across Moradabad, with hospitals, nursing homes, blood banks, diagnostic labs, and pharmacies located nearby. This helps families reach a facility quickly, arrange blood or medicines without delay, and stay close to mother and baby during the hospital stay.
              </p>
            </div>


            {/* Section 4 — Common Medical Reasons */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Medical Reasons for a C-Section
              </h2>


              <p className="text-gray-700 mb-4">
                Your doctor may advise a caesarean for reasons such as:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Baby in breech, or feet-first, or sideways position</li>
                <li>Placenta covering the cervix, known as placenta previa</li>
                <li>Labour that does not progress despite adequate time and support</li>
                <li>Signs of distress in the baby’s heart rate</li>
                <li>Previous caesarean with certain risk factors</li>
                <li>Twin or multiple pregnancy in specific situations</li>
                <li>Severe high blood pressure or pre-eclampsia</li>
                <li>Very large baby relative to the pelvis</li>
                <li>Certain infections or medical conditions in the mother</li>
                <li>Umbilical cord problems</li>
              </ul>


              <p className="text-gray-700 mt-4">
                The decision should always be explained clearly, and you are entitled to ask questions and understand the reasoning.
              </p>
            </div>


            {/* Section 5 — Before the Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Before the Surgery: Preparation
              </h2>


              <p className="text-gray-700 mb-4">
                For a planned C-section, your doctor will guide you through preparation.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Pre-operative tests:</strong> Blood tests, blood group, haemoglobin, blood pressure, and sometimes an ECG</li>
                <li><strong>Anaesthesia consultation:</strong> The anaesthetist explains the type of anaesthesia, usually spinal or epidural, which keeps you awake but pain-free from the waist down</li>
                <li><strong>Fasting instructions:</strong> You will be told when to stop eating and drinking</li>
                <li><strong>Consent:</strong> The doctor explains benefits, risks, and alternatives before you sign</li>
                <li><strong>Hospital bag:</strong> Include documents, comfortable clothes, sanitary pads, nursing wear, and baby essentials</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Ask any question that worries you. A good doctor welcomes them.
              </p>
            </div>


            {/* Section 6 — During the Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During a C-Section?
              </h2>


              <p className="text-gray-700 mb-4">
                Knowing the steps can reduce fear.
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Anaesthesia is given:</strong> Most mothers receive spinal or epidural anaesthesia and remain awake.</li>
                <li><strong>The area is cleaned and prepared:</strong> A sterile drape is placed, and a catheter is inserted into the bladder.</li>
                <li><strong>Incision:</strong> A small horizontal cut is made low on the abdomen, followed by an incision in the uterus.</li>
                <li><strong>Delivery of the baby:</strong> The baby is usually born within minutes. You may feel pressure or tugging, but not pain.</li>
                <li><strong>Newborn care:</strong> The baby is checked, cleaned, and, when stable, placed with you for skin-to-skin contact.</li>
                <li><strong>Closing:</strong> The placenta is removed, and the uterus and abdomen are stitched closed.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                The entire procedure often takes around 45 to 60 minutes, and your partner may be allowed in the operation theatre depending on hospital policy.
              </p>
            </div>


            {/* Section 7 — Risks and Safety */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Risks and Safety
              </h2>


              <p className="text-gray-700 mb-4">
                C-section is generally safe, but like any surgery it carries some risks. These may include:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Infection at the wound or in the uterus</li>
                <li>Bleeding</li>
                <li>Reactions to anaesthesia</li>
                <li>Blood clots, which are uncommon</li>
                <li>Slower recovery compared with vaginal birth</li>
                <li>Breathing difficulty for the newborn in some cases</li>
              </ul>


              <p className="text-gray-700 mt-4">
                A skilled surgeon, sterile conditions, proper monitoring, and timely antibiotics keep these risks low.
              </p>
            </div>


            {/* Section 8 — Recovery After a C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After a C-Section
              </h2>


              <p className="text-gray-700 mb-4">
                Healing takes time, so patience matters.
              </p>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    In Hospital
                  </h3>
                  <p className="text-gray-700">
                    Most mothers stay for three to five days. Pain relief is provided, and nurses help you sit up and walk gently to prevent clots and support healing.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Wound Care
                  </h3>
                  <p className="text-gray-700">
                    Keep the dressing clean and dry, follow instructions on bathing, and watch for redness, swelling, or discharge.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Movement
                  </h3>
                  <p className="text-gray-700">
                    Short walks help circulation and digestion. Avoid heavy lifting, intense exercise, and strenuous stretching until your doctor permits.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Breastfeeding
                  </h3>
                  <p className="text-gray-700">
                    You can begin early. Try side-lying or football-hold positions to keep pressure off the wound.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Nutrition
                  </h3>
                  <p className="text-gray-700">
                    Eat protein, fibre, fruits, vegetables, and plenty of fluids to support healing and prevent constipation.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Rest and Routine
                  </h3>
                  <p className="text-gray-700">
                    Sleep when the baby sleeps and accept help from family. Most women resume driving and light activity after several weeks, but follow your doctor’s advice.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 9 — Warning Signs After Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs After Surgery
              </h2>


              <p className="text-gray-700 mb-4">
                Contact your doctor promptly if you notice:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Fever</li>
                <li>Increasing pain, redness, or pus at the wound</li>
                <li>Heavy bleeding or large clots</li>
                <li>Foul-smelling discharge</li>
                <li>Pain or swelling in the legs</li>
                <li>Breathlessness or chest pain</li>
                <li>Burning urination</li>
                <li>Persistent low mood or anxiety</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Early attention prevents small problems from becoming serious.
              </p>
            </div>


            {/* Section 10 — How to Choose a C-Section Specialist */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose a C-Section Specialist
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Qualifications and Registration
                  </h3>
                  <p className="text-gray-700">
                    Look for MBBS with MD, MS, DGO, or DNB in Obstetrics and Gynaecology, along with a valid medical council registration.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Surgical Experience
                  </h3>
                  <p className="text-gray-700">
                    Ask about the doctor’s experience with planned, emergency, and repeat caesarean procedures, including complicated cases.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Facility Standards
                  </h3>
                  <p className="text-gray-700">
                    A strong facility has a clean operation theatre, anaesthesia support, blood bank access, intensive newborn care, and 24-hour emergency readiness.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Team Support
                  </h3>
                  <p className="text-gray-700">
                    Surgery is a team effort. Experienced anaesthetists, nurses, and paediatricians improve safety for both mother and baby.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Honest Counselling
                  </h3>
                  <p className="text-gray-700">
                    Choose a doctor who recommends a caesarean only when it is medically justified and who also supports normal delivery when it is safe.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Transparent Costs
                  </h3>
                  <p className="text-gray-700">
                    Request a clear estimate covering surgery, hospital stay, medicines, anaesthesia, and newborn care.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Reputation
                  </h3>
                  <p className="text-gray-700">
                    Speak with mothers who delivered there. Their experience with comfort, communication, and aftercare is a reliable guide.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 11 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Questions to Ask Your Doctor
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Why is a C-section recommended in my case?</li>
                <li>What are the alternatives, if any?</li>
                <li>Which anaesthesia will be used?</li>
                <li>How long will I stay in hospital?</li>
                <li>What are the total expected charges?</li>
                <li>When can I resume normal activities?</li>
              </ul>
            </div>


            {/* Section 12 — Repeat C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Planning Ahead for a Repeat C-Section
              </h2>


              <p className="text-gray-700">
                Women who have had one caesarean may have another planned, or may be eligible to attempt vaginal birth after caesarean depending on the reason for the first surgery, the type of uterine incision, and the current pregnancy. Discuss this early so you can plan together with your doctor. Allow at least a couple of years between pregnancies where possible, as it supports uterine healing.
              </p>
            </div>


            {/* Section 13 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Wellbeing
              </h2>


              <p className="text-gray-700">
                Some mothers feel disappointed or anxious after a C-section, especially if it was unplanned. These feelings are common and valid. A healthy baby and a healthy mother are the real goals, and the method of birth does not define your strength as a parent. Talk to your doctor or family if feelings persist, and ask for support without hesitation.
              </p>
            </div>


            {/* Section 14 — Myths About C-Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Myths About C-Section
              </h2>


              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “C-section means you did not try hard enough.”
                  </h3>
                  <p className="text-gray-700">
                    The decision is medical, not a measure of effort.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “You cannot breastfeed after a C-section.”
                  </h3>
                  <p className="text-gray-700">
                    You can, with proper positioning and support.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Back pain is guaranteed after spinal anaesthesia.”
                  </h3>
                  <p className="text-gray-700">
                    Back pain after pregnancy is common for many reasons and is not directly caused by anaesthesia.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “You can have only three caesareans.”
                  </h3>
                  <p className="text-gray-700">
                    The number depends on individual health and surgical findings, so ask your doctor.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    “Recovery needs complete bed rest for months.”
                  </h3>
                  <p className="text-gray-700">
                    Gentle movement is encouraged. Rest is important, but not total inactivity.
                  </p>
                </div>
              </div>
            </div>


            {/* Section 15 — About Dr. Priyanka Pachauri */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Dr. Priyanka Pachauri — C-Section Specialist in Moradabad
              </h2>


              <p className="text-gray-700 mb-4">
                For expecting mothers in Moradabad, Dr. Priyanka Pachauri (MS in Obstetrics &amp; Gynaecology, FMAS, Advanced Infertility Fellowship) offers structured pregnancy and C-section care. She co-leads Shree Advanced Urogynae Clinic and serves as a Consultant at Ujala Cygnus BrightStar Hospital. Her official website, <a href="https://www.gynaecologistmoradabad.com/" className="text-blue-600 hover:underline">gynaecologistmoradabad.com</a>, reflects her patient-first approach, &quot;Her Health First&quot;.
              </p>


              <p className="text-gray-700 mb-4">
                Her practice includes antenatal care, high-risk pregnancy management, planned and emergency caesarean delivery support, postnatal recovery guidance, and breastfeeding support. The focus is on clear counselling, timely decision-making, and safe care for both mother and baby.
              </p>


              <p className="text-gray-700 mb-4">
                Whether a C-section is planned in advance or becomes necessary during labour, having an experienced obstetric team and a well-equipped facility can make the experience safer and more reassuring for the family.
              </p>
            </div>


            {/* Section 16 — Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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


            {/* Section 17 — FAQs */}
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