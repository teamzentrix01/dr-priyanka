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


export default function CSectionDoctorKatgharMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I consult for a C-section near Katghar, Moradabad?",
      a: "You can consult Dr. Priyanka Pachauri of Dr. Priyanka Gynaec for antenatal care and delivery planning. She prioritises normal delivery where safe and advises a caesarean only when it is medically necessary.",
    },
    {
      q: "Is a C-section safe?",
      a: "Yes, it is a commonly performed and generally safe surgery when done for a valid medical reason by an experienced team. Like any surgery, it carries some risks, which your doctor will explain.",
    },
    {
      q: "Can I choose a C-section without a medical reason?",
      a: "Please discuss your concerns openly with your doctor. Vaginal birth is generally preferred when it is safe, and your doctor will explain the benefits and risks of each option so you can decide with full information.",
    },
    {
      q: "How long does recovery take after a C-section?",
      a: "Many women feel considerably better within a few weeks, though full healing of the uterus and wound takes longer. Your doctor will give a personalised recovery plan.",
    },
    {
      q: "Will I be awake during the surgery?",
      a: "Usually yes, if regional anaesthesia is used. Your anaesthetist will discuss the best option for you.",
    },
    {
      q: "When can I start walking and normal activities?",
      a: "Gentle walking is usually encouraged soon after surgery. Heavy lifting and strenuous exercise should wait until your doctor approves.",
    },
    {
      q: "Can I breastfeed after a C-section?",
      a: "Yes. Most mothers can begin breastfeeding soon after surgery with support on comfortable positions.",
    },
    {
      q: "Can I have a normal delivery after a C-section?",
      a: "Some women can, depending on the reason for the earlier caesarean, the type of incision, and current health. This needs individual assessment.",
    },
    {
      q: "What warning signs should I watch for after a C-section?",
      a: "Fever, worsening pain, wound redness or discharge, heavy bleeding, foul-smelling discharge, leg pain or swelling, and breathing difficulty. Call your doctor immediately.",
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
                C-Section Doctor near Katghar Moradabad – Dr. Priyanka Pachauri
              </h1>


              <p className="text-gray-700 mb-4">
                Hearing that you may need a caesarean can bring worry, relief, or a mix of both. Some women plan for it from early pregnancy. Others learn about it late in labour. Either way, you need a doctor who explains the reasons clearly, treats you with respect, and puts the safety of you and your baby first.
              </p>


              <p className="text-gray-700 mb-4">
                If you live in Katghar or nearby areas of Moradabad, Dr. Priyanka Pachauri of Dr. Priyanka Gynaec provides supportive, customised birthing care. The clinic prioritises normal delivery wherever it is safe. When a caesarean is the safer choice, it is advised honestly and carried out with careful planning and follow-up. Its guiding philosophy is &quot;Her Health First.&quot;
              </p>
            </div>


            {/* Section 2 — What Is a C-Section? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is a C-Section?
              </h2>


              <p className="text-gray-700">
                A caesarean section, or C-section, is a surgical procedure in which the baby is born through an incision in the mother’s abdomen and uterus. It is performed when vaginal birth could pose risks to the mother, the baby, or both. It may be planned in advance or decided during labour.
              </p>
            </div>


            {/* Section 3 — Planned vs Emergency */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Planned vs. Emergency C-Section
              </h2>


              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Planned (Elective) Caesarean
                  </h3>
                  <p className="text-gray-700">
                    Scheduled before labour starts because of a known medical reason, such as a baby in an unfavourable position or a low-lying placenta.
                  </p>
                </div>


                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    Emergency Caesarean
                  </h3>
                  <p className="text-gray-700">
                    Decided during labour or late pregnancy when a sudden concern arises, such as fetal distress or labour that is not progressing.
                  </p>
                </div>
              </div>


              <p className="text-gray-700 mt-4">
                Both are safe when performed by an experienced team, and both need clear communication with the mother and family.
              </p>
            </div>


            {/* Section 4 — When Advised */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is a C-Section Medically Advised?
              </h2>


              <p className="text-gray-700 mb-4">
                Your doctor may recommend a caesarean if:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>The baby shows signs of distress during labour</li>
                <li>Labour does not progress despite adequate time and support</li>
                <li>The baby is in a breech or transverse position</li>
                <li>The placenta covers the cervix (placenta previa)</li>
                <li>There is a serious maternal condition, such as severe pre-eclampsia</li>
                <li>A multiple pregnancy has complicating factors</li>
                <li>The baby is very large relative to the pelvis</li>
                <li>There are specific risks from previous uterine surgery or earlier caesareans</li>
                <li>Certain maternal infections make vaginal birth unsafe</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Not every case in these categories automatically needs surgery. Your doctor weighs the evidence for your pregnancy and explains the plan in simple terms.
              </p>
            </div>


            {/* Section 5 — Antenatal Care */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Antenatal Care Before a C-Section
              </h2>


              <p className="text-gray-700 mb-4">
                Good preparation makes surgery safer and recovery smoother. Antenatal care at the clinic includes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Early registration and trimester-wise check-ups</li>
                <li>Ultrasound scans on a Voluson E22 3D/4D machine</li>
                <li>Blood tests and screening for anaemia, gestational diabetes, and thyroid problems</li>
                <li>Blood pressure and weight monitoring</li>
                <li>Review of the placenta’s position and the baby’s growth and presentation</li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Counselling on anaesthesia, surgery, and hospital stay</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Regular monitoring helps detect concerns early, so decisions can be made calmly instead of in a rush.
              </p>
            </div>


            {/* Section 6 — Preparing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Preparing for a Planned C-Section
              </h2>


              <p className="text-gray-700 mb-4">
                If a planned caesarean is advised, preparation typically includes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>A pre-operative check-up and blood tests</li>
                <li>Discussion of anaesthesia options with the anaesthetist</li>
                <li>Instructions about fasting before surgery</li>
                <li>Arranging help at home for the first few weeks</li>
                <li>Packing a hospital bag with comfortable clothes, sanitary pads, baby clothes, and documents</li>
                <li>Asking all your questions beforehand so you feel informed</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Share your full medical history, allergies, and current medicines with your doctor, so that surgery and anaesthesia can be planned safely.
              </p>
            </div>


            {/* Section 7 — During Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During a C-Section?
              </h2>


              <p className="text-gray-700 mb-4">
                Every hospital follows its own protocols, but in general:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Anaesthesia:</strong> Most women receive regional anaesthesia, which numbs the lower body while you stay awake. General anaesthesia is used in some situations.</li>
                <li><strong>Incision:</strong> A careful incision is made in the lower abdomen and uterus.</li>
                <li><strong>Birth:</strong> The baby is delivered, usually within minutes.</li>
                <li><strong>Placenta delivery and closure:</strong> The placenta is removed and the layers are stitched.</li>
                <li><strong>Early contact:</strong> When both are stable, you can often hold your baby early and begin breastfeeding with support.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                The whole procedure usually takes about 30 to 60 minutes.
              </p>
            </div>


            {/* Section 8 — Recovery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After a C-Section
              </h2>


              <p className="text-gray-700 mb-4">
                Recovery takes longer than after a normal delivery, so rest and patience matter. Typical guidance includes:
              </p>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Hospital stay:</strong> A few days, with pain relief and monitoring.</li>
                <li><strong>Wound care:</strong> Keep the area clean and dry, and follow your doctor’s instructions.</li>
                <li><strong>Movement:</strong> Short, gentle walks help circulation, with support for the incision.</li>
                <li><strong>Lifting:</strong> Avoid heavy lifting until your doctor says it is safe.</li>
                <li><strong>Diet:</strong> Balanced meals, plenty of fluids, and fibre to prevent constipation.</li>
                <li><strong>Rest:</strong> Sleep when your baby sleeps, and accept help from family.</li>
                <li><strong>Breastfeeding:</strong> Try comfortable positions that avoid pressure on the wound, such as the side-lying or football hold.</li>
              </ul>


              <p className="text-gray-700 mt-4">
                Contact your doctor promptly if you notice fever, increasing pain, redness or discharge from the wound, heavy bleeding, foul-smelling discharge, leg swelling or pain, or breathlessness.
              </p>
            </div>


            {/* Section 9 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Emotional Wellbeing After a Caesarean
              </h2>


              <p className="text-gray-700">
                Some women feel disappointed if the birth did not go as they imagined. Others feel anxious about recovery. These feelings are common and valid. Talking to your doctor, your partner, or a trusted family member can help. If low mood, anxiety, or tearfulness lasts beyond the first couple of weeks or stops you coping, ask for professional support.
              </p>
            </div>


            {/* Section 10 — Future Pregnancies */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Planning Future Pregnancies After a C-Section
              </h2>


              <p className="text-gray-700">
                After a caesarean, many women wonder about their next birth. Depending on the reason for the first surgery, the type of uterine incision, and your overall health, you may be able to attempt a vaginal birth, or you may be advised to plan another caesarean. Doctors also usually recommend leaving a gap between pregnancies so that the uterus can heal well. Discuss these questions early, ideally before conceiving again.
              </p>
            </div>


            {/* Section 11 — High-Risk */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                High-Risk Pregnancy and Delivery Planning
              </h2>


              <p className="text-gray-700">
                Women with diabetes, high blood pressure, thyroid disease, twin pregnancy, previous uterine surgery, or pregnancy after IVF may need a detailed birth plan. Dr. Priyanka Pachauri assesses each case individually, monitors closely, and chooses the safest mode and timing of delivery for mother and baby.
              </p>
            </div>


            {/* Section 12 — Why Women Trust */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>


              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Honest advice, with surgery recommended only when medically justified</li>
                <li>Patient-first listening and clear explanations</li>
                <li>Continuity of care from antenatal visits to postnatal follow-up</li>
                <li>Technology including 3D/4D ultrasound for detailed assessment</li>
                <li>Newborn care, vaccinations, and paediatric consultations on the same premises</li>
              </ul>
            </div>


            {/* Section 13 — Contact Information */}
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