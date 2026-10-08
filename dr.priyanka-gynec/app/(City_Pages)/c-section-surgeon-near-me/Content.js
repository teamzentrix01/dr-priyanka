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
      q: "Who is a good C-section surgeon near me in Moradabad?",
      a: "Choose a qualified obstetrician with surgical training, honest advice and 24/7 OT backup, such as Dr. Priyanka Pachauri.",
    },
    {
      q: "What qualifications should a C-section surgeon have?",
      a: "MS, DNB or DGO in Obstetrics & Gynaecology, valid registration and surgical experience.",
    },
    {
      q: "What does FMAS mean?",
      a: "Fellowship in Minimal Access Surgery, which shows advanced surgical training.",
    },
    {
      q: "Will I be awake during the surgery?",
      a: "Usually yes, under spinal or epidural anaesthesia.",
    },
    {
      q: "Who is in the operation theatre?",
      a: "The surgeon, an assistant, an anaesthetist, nurses and paediatric support.",
    },
    {
      q: "When is a C-section necessary?",
      a: "For placenta previa, fetal distress, failed labour progress or serious maternal conditions.",
    },
    {
      q: "Is emergency OT available?",
      a: "Yes. OT standby is available 24/7.",
    },
    {
      q: "Can I have a normal delivery after a C-section?",
      a: "In selected cases, after assessing your scar and history.",
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
                C-Section Surgeon Near Me in Moradabad: What to Look For Before
                You Choose
              </h1>

              <p className="mb-4 text-gray-700">
                When your doctor says you may need a caesarean, the question
                changes from &quot;who is my doctor?&quot; to &quot;who will
                operate on me and my baby?&quot; That is a very personal
                decision. You are placing your trust, and your baby&apos;s first
                moments, in the hands of a surgeon.
              </p>

              <p className="mb-4 text-gray-700">
                If you are searching for a C-section surgeon near you in
                Moradabad, this guide will help you choose with clarity. It
                explains what a caesarean surgeon does, which qualifications and
                safety systems matter, which questions to ask and how Dr.
                Priyanka Pachauri at Dr. Priyanka Gynaec approaches surgical
                birth with skill, honesty and care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does a C-Section Surgeon Do?
              </h2>

              <p className="mb-4 text-gray-700">
                A C-section surgeon is an obstetrician-gynaecologist trained to
                perform caesarean delivery and to manage the pregnancy around
                it.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Decides, with you, whether surgery is medically needed
                </li>
                <li>Plans the timing of a planned caesarean</li>
                <li>Reviews your reports, scans and medical history</li>
                <li>
                  Works with the anaesthetist on the safest anaesthesia plan
                </li>
                <li>Performs the surgery and delivers the baby</li>
                <li>Controls bleeding and repairs the uterus and abdominal layers</li>
                <li>Monitors your recovery in hospital</li>
                <li>Guides wound care, feeding and follow-up after discharge</li>
                <li>Advises on future pregnancies and birth options</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A good surgeon is also a good communicator, because you need to
                understand every step.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Surgeon or Hospital: Which Matters More?
              </h2>

              <p className="mb-4 text-gray-700">
                Both matter, and neither is enough alone.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                The Surgeon
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Skill and judgement in the operating theatre</li>
                <li>Honest advice about when surgery is needed</li>
                <li>Calm decision-making in emergencies</li>
                <li>Clear communication before and after surgery</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                The Facility and Team
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>A well-equipped operation theatre</li>
                <li>A trained anaesthetist</li>
                <li>Skilled nurses and support staff</li>
                <li>Newborn care support</li>
                <li>Readiness for emergencies at any hour</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A skilled surgeon without a ready team is risky, and a good
                facility without an experienced surgeon is equally risky. Look
                for both.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Qualifications to Check in a C-Section Surgeon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>MBBS as the base medical degree</li>
                <li>
                  MS (Obstetrics &amp; Gynaecology), DNB or DGO as postgraduate
                  training
                </li>
                <li>Valid registration with the medical council</li>
                <li>
                  Surgical fellowships, such as FMAS (Fellowship in Minimal
                  Access Surgery), which show advanced surgical training
                </li>
                <li>Hospital affiliations with established facilities</li>
                <li>Experience in both routine and complicated deliveries</li>
                <li>
                  Continuing education in current surgical and safety practices
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                These details should be easy to verify on a doctor&apos;s
                website or profile. If they are not, ask.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
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
                  <strong>Surgical background:</strong> Training and practice in
                  minimally invasive and precision surgery
                </li>
                <li>
                  <strong>Approach:</strong> Natural birth first when safe, and
                  timely surgery only when needed
                </li>
                <li>
                  <strong>Philosophy:</strong> &quot;Her Health First&quot;,
                  which means your comfort and safety guide every decision
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Her surgical training and her experience with high-risk pregnancy
                help her plan carefully, whether your caesarean is scheduled or
                sudden.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why &quot;Near Me&quot; Matters When You Choose a Surgeon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A shorter journey if labour begins or complications arise
                  suddenly
                </li>
                <li>Easier last-trimester check-ups</li>
                <li>Quicker wound checks after you go home</li>
                <li>Less strain on you and your family during recovery</li>
                <li>Simple follow-up visits for you and your newborn</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Surgical Team: Who Is in the Room?
              </h2>

              <p className="mb-4 text-gray-700">
                A caesarean is a team effort.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Obstetric surgeon:</strong> Performs the operation
                </li>
                <li>
                  <strong>Assistant doctor or surgeon:</strong> Helps during
                  surgery
                </li>
                <li>
                  <strong>Anaesthetist:</strong> Gives anaesthesia and monitors
                  you throughout
                </li>
                <li>
                  <strong>Operation theatre nurses:</strong> Prepare instruments
                  and support the surgeon
                </li>
                <li>
                  <strong>Paediatric support:</strong> Checks and cares for the
                  baby
                </li>
                <li>
                  <strong>Recovery nurses:</strong> Monitor you after surgery
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Ask your surgeon who will be present and how the team
                communicates during surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Would a Surgeon Recommend a C-Section?
              </h2>

              <p className="mb-4 text-gray-700">
                A responsible surgeon recommends a caesarean only for clear
                medical reasons.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Placenta covering the cervix (placenta previa)</li>
                <li>Placental abruption</li>
                <li>Breech or sideways baby, in selected cases</li>
                <li>Fetal distress or abnormal heart rate in labour</li>
                <li>Labour that fails to progress despite proper care</li>
                <li>Cord prolapse</li>
                <li>
                  Severe pre-eclampsia or other serious maternal illness
                </li>
                <li>
                  Some previous uterine surgeries or complicated scars
                </li>
                <li>Baby too large to pass safely through the pelvis</li>
                <li>Some twin or multiple pregnancies</li>
              </ul>

              <p className="mt-4 text-gray-700">
                If surgery is advised, ask: &quot;What is the exact reason, and
                what are the alternatives?&quot;
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planned vs Emergency Caesarean
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Planned Caesarean
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The reason is known in advance</li>
                <li>You and your surgeon choose a suitable date</li>
                <li>Tests, fasting and preparation are done calmly</li>
                <li>You have time to ask questions and arrange help at home</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emergency Caesarean
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The decision is made quickly during pregnancy or labour</li>
                <li>The team acts fast to protect mother and baby</li>
                <li>Clear communication becomes extra important</li>
                <li>
                  A ready theatre and an experienced surgeon make a major
                  difference
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Even if you hope for a normal delivery, know who your surgeon
                would be if plans change.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a C-Section: The Surgeon&apos;s Steps
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You are taken to the operation theatre and your details are
                  checked
                </li>
                <li>
                  Anaesthesia is given, most often spinal or epidural, so you
                  stay awake
                </li>
                <li>
                  The abdomen is cleaned and covered with sterile drapes
                </li>
                <li>
                  A cut is made in the abdomen, most commonly a low horizontal
                  cut, though a vertical cut is used in some situations
                </li>
                <li>
                  The uterus is opened and the baby is delivered, usually within
                  minutes
                </li>
                <li>
                  The baby is checked and, when it is safe, brought to you
                </li>
                <li>The placenta is delivered</li>
                <li>The uterus and the abdominal layers are stitched carefully</li>
                <li>You are moved to recovery for monitoring</li>
              </ul>

              <p className="mt-4 text-gray-700">
                The surgery generally takes under an hour, though your own case
                may differ. Your surgeon will explain what to expect for you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Surgical Safety: What a Good Team Should Do
              </h2>

              <p className="mb-4 text-gray-700">
                These are practices you can reasonably ask about, with any
                surgeon.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirm your identity, procedure and allergies before surgery
                </li>
                <li>Review your blood group and medical history</li>
                <li>Use sterile technique and clean instruments</li>
                <li>Give preventive antibiotics when appropriate</li>
                <li>
                  Monitor your blood pressure, heart rate and oxygen throughout
                </li>
                <li>Keep medicines and equipment for emergencies ready</li>
                <li>Count instruments and materials carefully</li>
                <li>Track bleeding and treat it promptly</li>
                <li>Observe you closely in the recovery room</li>
                <li>Explain warning signs before you leave the hospital</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A confident surgeon will welcome these questions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask a C-Section Surgeon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Why do I need a caesarean?</li>
                <li>Is there any safe alternative in my case?</li>
                <li>Who will perform my surgery?</li>
                <li>
                  What is your experience with caesarean and complicated
                  deliveries?
                </li>
                <li>What type of anaesthesia will I have?</li>
                <li>Who will be in the theatre with me?</li>
                <li>Can my partner be with me?</li>
                <li>Will I be able to hold my baby right after birth?</li>
                <li>How is pain managed afterwards?</li>
                <li>How long will I stay in hospital?</li>
                <li>What are the warning signs after I go home?</li>
                <li>
                  What are the estimated costs and what do they include?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags When Choosing a Surgeon
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A caesarean is advised without a clear medical explanation
                </li>
                <li>
                  Pressure to decide quickly when there is no emergency
                </li>
                <li>
                  Refusal to explain risks, alternatives or recovery
                </li>
                <li>
                  Vague answers about the team, theatre readiness or anaesthesia
                </li>
                <li>
                  Promises such as &quot;no pain&quot;, &quot;no scar&quot; or
                  &quot;100% safe&quot;
                </li>
                <li>No written estimate or itemised bill</li>
                <li>Dismissing your questions or fears</li>
              </ul>

              <p className="mt-4 text-gray-700">
                You always have the right to ask questions and, unless it is an
                emergency, to seek a second opinion.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Surgery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend all antenatal visits and scans</li>
                <li>Complete tests your surgeon asks for</li>
                <li>
                  Share your full medical history, allergies and medicines
                </li>
                <li>Follow fasting instructions exactly</li>
                <li>Discuss anaesthesia and pain relief</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Practical
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pack your hospital bag by week 36</li>
                <li>Arrange help at home for the first weeks</li>
                <li>Keep reports, ID and insurance papers together</li>
                <li>Plan transport and a backup option</li>
                <li>Save the clinic&apos;s phone and WhatsApp numbers</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Emotional
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Share your worries with your partner or family</li>
                <li>
                  Remember that a caesarean is a valid, safe way to give birth
                  when needed
                </li>
                <li>Ask for explanations until you feel comfortable</li>
                <li>Rest, eat well and sleep</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery and Follow-Up With Your Surgeon
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Hospital
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Monitoring of blood pressure, bleeding and wound</li>
                <li>Pain relief and gentle assisted walking</li>
                <li>Help with feeding positions</li>
                <li>Newborn checks</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                At Home
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rest whenever the baby sleeps</li>
                <li>Keep the wound clean and dry as advised</li>
                <li>Walk short distances daily</li>
                <li>
                  Support your abdomen with a pillow when coughing or laughing
                </li>
                <li>Avoid heavy lifting until your surgeon allows</li>
                <li>Eat protein-rich meals and drink plenty of fluids</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Follow-Up
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wound check as advised</li>
                <li>Postnatal check-up at about 6 weeks</li>
                <li>Contraception and family planning discussion</li>
                <li>
                  Guidance on when to resume exercise and driving
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Your Surgeon If You Notice
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever or chills</li>
                <li>
                  Increasing pain, redness, swelling or discharge at the wound
                </li>
                <li>Heavy bleeding or large clots</li>
                <li>Foul-smelling discharge</li>
                <li>Pain or swelling in one leg</li>
                <li>Chest pain or breathing difficulty</li>
                <li>
                  Persistent sadness, anxiety or trouble bonding with your baby
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Honest Risks of C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Surgery has benefits and risks, and a good surgeon explains both.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Infection of the wound or uterus</li>
                <li>Bleeding</li>
                <li>Blood clots</li>
                <li>Reactions to anaesthesia</li>
                <li>Longer recovery than a normal delivery</li>
                <li>Scar-related issues in later pregnancies</li>
                <li>Adhesions inside the abdomen</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your surgeon will explain how these apply to you and how the
                team works to lower them.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Future Pregnancies After a C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some women can attempt vaginal birth after caesarean (VBAC)
                </li>
                <li>
                  It depends on the reason for the first caesarean, the type of
                  scar and your current health
                </li>
                <li>
                  It needs close monitoring in a facility ready for emergencies
                </li>
                <li>It is not suitable for everyone</li>
                <li>
                  Discuss it early in your next pregnancy, not at the last
                  moment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cost: What to Ask Before Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                We cannot quote a fair price without understanding your case,
                but you should always ask:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What does the estimate include (surgeon, theatre, anaesthesia,
                  stay, medicines)?
                </li>
                <li>What is excluded?</li>
                <li>Is newborn care included?</li>
                <li>
                  What happens if there are complications or extra days?
                </li>
                <li>Can I have the estimate in writing?</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Clear answers prevent surprises.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Families Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MS (O&amp;G), FMAS qualified obstetrician with surgical
                  training
                </li>
                <li>Honest advice, with surgery only when needed</li>
                <li>Operation theatre on standby 24/7</li>
                <li>
                  Continuous fetal monitoring and one-on-one nursing in labour
                </li>
                <li>
                  Painless labour options for those hoping for normal delivery
                </li>
                <li>3D/4D ultrasound and modern technology</li>
                <li>Care for low-risk and high-risk pregnancies</li>
                <li>
                  Antenatal, delivery, postnatal and paediatric support in one
                  place
                </li>
                <li>A patient team that explains and listens</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Meet Your Surgeon Before You Need One
              </h2>

              <p className="mb-6 text-gray-700">
                A calm conversation early in pregnancy can ease a lot of fear.
                Book a consultation, ask every question and know your plan.
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