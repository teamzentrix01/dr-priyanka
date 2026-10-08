import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function DeliverySpecialistMoradabad() {
  const faqs = [
    {
      q: "Is a C-section painful?",
      a: "Not during surgery, as anaesthesia blocks pain. Some soreness is expected afterwards.",
    },
    {
      q: "What will I feel during a C-section?",
      a: "Usually pressure or tugging, but not sharp pain.",
    },
    {
      q: "Will I be awake?",
      a: "Usually yes, under spinal or epidural anaesthesia.",
    },
    {
      q: "How long does C-section pain last?",
      a: "Strongest in the first few days, easing over the first couple of weeks. Full healing takes longer.",
    },
    {
      q: "How is pain managed after surgery?",
      a: "With prescribed medicines, gentle walking, pillow support and good positioning.",
    },
    {
      q: "Is C-section more painful than normal delivery?",
      a: "It is a different kind of pain. Both can be managed with proper care.",
    },
    {
      q: "Is pain relief safe while breastfeeding?",
      a: "Your doctor will choose medicines that suit you and your baby.",
    },
    {
      q: "What if I feel pain during surgery?",
      a: "Tell the anaesthetist immediately. More medicine can be given.",
    },
    {
      q: "When should I call my doctor?",
      a: "For fever, worsening pain, wound discharge, heavy bleeding, calf pain or breathing difficulty.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          <div className="order-1 flex-1">
            <section className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Is C-Section Painful: An Honest Guide to What You Will Feel
                Before, During and After Surgery
              </h1>

              <p className="mb-4 text-gray-700">
                If you have been told you may need a caesarean, one question
                probably keeps coming back: &quot;Is a C-section
                painful?&quot; It is the most common fear among expecting
                mothers, and it deserves a clear, honest answer, not vague
                reassurance.
              </p>

              <p className="mb-4 text-gray-700">
                The short answer is this. You should not feel pain during the
                surgery, because anaesthesia blocks it. You will usually feel
                pressure or tugging. After the surgery, there will be some pain
                and soreness while you heal, but it can be managed with proper
                pain relief. This guide explains each stage in detail, so you
                know what to expect. It also shows how Dr. Priyanka Pachauri at
                Dr. Priyanka Gynaec supports mothers through caesarean birth
                with clear communication and careful pain management.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Short Answer
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>During surgery:</strong> Anaesthesia blocks pain, so
                  you should not feel sharp pain
                </li>
                <li>
                  <strong>What you may feel:</strong> Pressure, pulling or
                  tugging
                </li>
                <li>
                  <strong>After surgery:</strong> Soreness, cramps and wound
                  pain are common for a few days
                </li>
                <li>
                  <strong>Pain relief:</strong> Medicines, positioning and
                  gentle movement help
                </li>
                <li>
                  <strong>Recovery:</strong> Discomfort usually eases over the
                  first couple of weeks, though full healing takes longer
                </li>
                <li>
                  <strong>Everyone is different:</strong> Pain tolerance and
                  recovery vary from woman to woman
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a C-Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A C-section (caesarean section) is surgery in which the baby is
                born through a cut in the mother&apos;s abdomen and uterus.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>It is done in an operation theatre</li>
                <li>It can be planned for a medical reason</li>
                <li>It can be an emergency, decided during pregnancy or labour</li>
                <li>It is major abdominal surgery</li>
                <li>
                  It is done only when it is medically needed or safer for
                  mother or baby
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Understanding what happens removes much of the fear.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain During a C-Section
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What Anaesthesia Does
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Spinal anaesthesia:</strong> A single injection in the
                  lower back numbs the lower half of the body quickly
                </li>
                <li>
                  <strong>Epidural anaesthesia:</strong> A thin tube in the
                  lower back delivers medicine, and it can be topped up
                </li>
                <li>
                  <strong>General anaesthesia:</strong> You are asleep. It is
                  used mainly in some emergencies
                </li>
                <li>
                  With spinal or epidural, you stay awake and can see and hear
                  your baby&apos;s birth
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What You Should Not Feel
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sharp or cutting pain</li>
                <li>Burning pain from the incision</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What You May Feel
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A numb, heavy sensation in your legs</li>
                <li>Pressure or pushing on the abdomen</li>
                <li>Tugging or pulling as the baby is delivered</li>
                <li>
                  Shivering, nausea or a dry mouth, which are common and
                  treatable
                </li>
                <li>Anxiety, which the team can help calm</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Feel Pain During Surgery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tell the anaesthetist immediately</li>
                <li>Extra medicine can be given</li>
                <li>You should never have to endure pain silently</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens Before the Injection?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You change into a gown and the team checks your details
                </li>
                <li>A drip is placed in your hand</li>
                <li>You sit or lie on your side for the anaesthesia injection</li>
                <li>
                  The injection can feel like a pinch or a sting, then the area
                  goes numb
                </li>
                <li>
                  The team checks that you are fully numb before surgery begins
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The anaesthetist stays with you throughout and monitors your
                blood pressure, heart rate and comfort.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain Right After Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                When anaesthesia wears off, usually within a few hours, you will
                begin to feel the wound.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Wound pain:</strong> A sore, pulling or burning feeling
                  along the incision
                </li>
                <li>
                  <strong>After-pains:</strong> Cramping as the uterus contracts
                  back to size, often stronger when breastfeeding
                </li>
                <li>
                  <strong>Gas pain:</strong> Trapped gas can cause sharp cramps
                  in the abdomen, and sometimes pain in the shoulder
                </li>
                <li>
                  <strong>Back or leg soreness:</strong> From lying still and
                  from the anaesthesia site
                </li>
                <li>
                  <strong>Movement pain:</strong> Sitting up, coughing, sneezing
                  or laughing may hurt
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is normal, and your care team will manage it.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain Relief After a C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor chooses pain relief that suits you and is generally
                safe while breastfeeding.
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular pain medicines as prescribed, taken on schedule rather
                  than waiting for severe pain
                </li>
                <li>Stronger medicines for a short time, if needed</li>
                <li>
                  Injections or additional medicine in the first day, where
                  advised
                </li>
                <li>Medicines for nausea or itching, if they occur</li>
                <li>Medicines or advice for gas and constipation</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Important
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do not self-medicate or take extra doses without asking your
                  doctor
                </li>
                <li>
                  Tell your team how bad your pain is on a scale of 0 to 10
                </li>
                <li>
                  Ask if your medicines are suitable while breastfeeding
                </li>
                <li>
                  Report any side effects such as dizziness, rash or severe
                  drowsiness
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Long Does C-Section Pain Last?
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery is gradual, and timelines vary.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First 2–3 Days
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain is usually strongest</li>
                <li>Movement may feel difficult</li>
                <li>You will rely more on regular pain relief</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First Week
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain begins to ease</li>
                <li>Walking becomes easier</li>
                <li>Gas and cramps settle</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Weeks 2–6
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Soreness reduces steadily</li>
                <li>Many women feel a pulling or tight sensation at the scar</li>
                <li>Energy slowly returns</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Beyond 6 Weeks
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Most women feel much better</li>
                <li>
                  Numbness, tingling or sensitivity around the scar can last
                  longer
                </li>
                <li>Full comfort may take several months for some women</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If pain is getting worse instead of better, contact your doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips to Reduce C-Section Pain
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Movement and Positioning
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Walk a little as soon as your team allows, since it helps gas,
                  circulation and healing
                </li>
                <li>
                  To get out of bed, roll to your side and push up with your
                  arms
                </li>
                <li>
                  Hold a pillow firmly against your abdomen when coughing,
                  sneezing or laughing
                </li>
                <li>Avoid sitting hunched forward for long periods</li>
                <li>Rest between short walks</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Everyday Comfort
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Wear loose, soft clothing and high-waist underwear that does
                  not rub the scar
                </li>
                <li>
                  Sleep with a pillow supporting your abdomen or between your
                  knees
                </li>
                <li>
                  Use pillows to support your arms and baby while feeding
                </li>
                <li>Keep the wound clean and dry as advised</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Food and Fluids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Drink plenty of fluids</li>
                <li>Eat fibre-rich food to prevent constipation</li>
                <li>Ask about stool softeners if needed</li>
                <li>Eat small, regular, protein-rich meals</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Mind and Body
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Practise slow breathing when pain peaks</li>
                <li>Keep visitors limited so you can rest</li>
                <li>Accept help with household tasks and the baby</li>
                <li>Talk about anxiety or low mood</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Feeding Your Baby: Comfortable Positions
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Side-lying:</strong> Keeps pressure off the wound
                </li>
                <li>
                  <strong>Football hold:</strong> The baby tucks under your arm,
                  away from the incision
                </li>
                <li>
                  <strong>Cradle with a pillow:</strong> A pillow on your lap
                  protects the wound
                </li>
                <li>
                  Ask nurses or lactation support for help with latching
                </li>
                <li>
                  Frequent feeding helps milk supply, and after-pains may feel
                  stronger at first
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is C-Section More Painful Than Normal Delivery?
              </h2>

              <p className="mb-4 text-gray-700">
                There is no simple answer. The pain is different, not simply
                more or less.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Normal Delivery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Labour pain can be intense, but options such as epidural can
                  reduce it
                </li>
                <li>Perineal soreness or stitches may follow</li>
                <li>Recovery is generally faster</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                C-Section
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No labour pain if the surgery is planned before labour starts
                </li>
                <li>Wound pain and cramps follow</li>
                <li>Recovery is usually slower, with more restriction in movement</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Comparing Fairly
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A planned C-section avoids labour pain but has surgical
                  recovery pain
                </li>
                <li>
                  An emergency C-section after a long labour may involve both
                </li>
                <li>
                  Pain relief choices change the experience in both types of
                  birth
                </li>
                <li>
                  Each woman&apos;s body, pain tolerance and circumstances
                  differ
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The best mode of delivery is the one that is safest for you and
                your baby.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Side Effects of Anaesthesia
              </h2>

              <p className="mb-4 text-gray-700">
                Most side effects are mild and treatable, and your team will
                monitor you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Low blood pressure, causing dizziness or nausea</li>
                <li>Itching, particularly with certain pain medicines</li>
                <li>Shivering</li>
                <li>
                  Headache after spinal anaesthesia, which can occur in some
                  women. It is often worse when sitting or standing and better
                  when lying down. Report it to your doctor
                </li>
                <li>Temporary difficulty passing urine</li>
                <li>Back soreness at the injection site</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Always report severe or persistent symptoms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Pain Is Not Normal: Warning Signs
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor straight away if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain that keeps getting worse after the first few days</li>
                <li>Fever or chills</li>
                <li>Redness, swelling, heat or discharge from the wound</li>
                <li>
                  A foul smell from the wound or vaginal discharge
                </li>
                <li>Heavy bleeding or large clots</li>
                <li>
                  Pain, swelling or redness in one calf, which can signal a clot
                </li>
                <li>
                  Chest pain or difficulty breathing, which needs emergency care
                </li>
                <li>A severe headache that is worse on standing</li>
                <li>Persistent vomiting or inability to pass urine</li>
                <li>Pain so severe that medicines are not helping</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Do not wait for your next scheduled visit if something feels
                wrong.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Long-Term Scar Sensations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Numbness or tingling around the scar is common and often
                  improves over months
                </li>
                <li>
                  A pulling or tight feeling may appear when stretching
                </li>
                <li>Itching as the scar heals is normal</li>
                <li>
                  A small number of women have persistent scar pain. Speak to
                  your doctor if pain continues for months
                </li>
                <li>
                  Gentle scar care, once your doctor says the wound has healed,
                  may help
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Emotional Side of C-Section Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fear before surgery is very common</li>
                <li>
                  Disappointment after an unplanned C-section is also common
                </li>
                <li>
                  Physical pain and tiredness can make emotions feel heavier
                </li>
                <li>
                  A caesarean birth does not make you any less of a mother
                </li>
                <li>
                  Talk to your partner, family or doctor about how you feel
                </li>
                <li>
                  Seek help if sadness, anxiety or difficulty bonding continues
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare to Feel More in Control
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask your doctor to explain every step of the surgery</li>
                <li>
                  Discuss anaesthesia options and your concerns in advance
                </li>
                <li>Ask who will manage your pain after surgery</li>
                <li>Learn what to expect in the first 48 hours</li>
                <li>
                  Pack a loose, soft hospital outfit and supportive pillow
                </li>
                <li>Arrange help at home for the first weeks</li>
                <li>Keep your doctor&apos;s phone and WhatsApp numbers saved</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Qualifications:</strong> MS (Obstetrics &amp;
                  Gynaecology), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  <strong>Roles:</strong> Co-leads Shree Advanced Urogynae
                  Clinic and serves as a Consultant at Ujala Cygnus BrightStar
                  Hospital
                </li>
                <li>
                  <strong>Expertise:</strong> Normal delivery, high-risk
                  pregnancy care, antenatal and postnatal care, 3D laparoscopic
                  surgery and fertility treatment
                </li>
                <li>
                  <strong>Approach:</strong> Natural birth first when safe, and
                  timely surgery when needed
                </li>
                <li>
                  <strong>Philosophy:</strong> &quot;Her Health First&quot;,
                  which means your comfort and safety guide every decision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How We Support You at Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>We explain clearly why a caesarean is advised</li>
                <li>
                  We discuss anaesthesia and pain relief before surgery
                </li>
                <li>Operation theatre is on standby 24/7 for emergencies</li>
                <li>
                  Continuous fetal monitoring and one-on-one nursing support in
                  labour
                </li>
                <li>
                  Painless labour options for women aiming for normal delivery
                </li>
                <li>
                  Breastfeeding and wound care guidance after birth
                </li>
                <li>Postnatal follow-up and newborn guidance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Talk to Dr. Priyanka About Your Concerns
              </h2>

              <p className="mb-6 text-gray-700">
                If fear of pain is on your mind, bring it up early. A calm
                conversation with your doctor can ease a lot of worry.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+919079765578"
                        className="hover:underline"
                      >
                        +91 90797 65578
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <a
                        href="https://wa.me/918979670705"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +91 89796 70705
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:drpriyankagynec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
                  >
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}