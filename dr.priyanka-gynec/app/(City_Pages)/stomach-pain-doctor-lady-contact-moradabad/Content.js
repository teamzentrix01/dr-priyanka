import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function StomachPainDoctorLadyMoradabadAppointment() {
  const faqs = [
    {
      q: "What is the clinic's email and website?",
      a: "Email drpriyankagynec@gmail.com or visit https://www.gynaecologistmoradabad.com/.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Does Dr. Priyanka treat all types of stomach pain?",
      a: "She treats gynaecological causes. For digestive causes, she can guide you to the right specialist.",
    },
    {
      q: "How do I book an appointment?",
      a: "Call, WhatsApp, email, or use the Book Appointment option on the website.",
    },
    {
      q: "When should I see a lady gynaecologist for stomach pain?",
      a: "See her if the pain is in the lower belly, linked to periods, or comes with bleeding or discharge.",
    },
    {
      q: "Will I need surgery?",
      a: "Not always. Many conditions are treated with medicines or monitoring.",
    },
    {
      q: "Is my consultation private?",
      a: "Yes. Your details are treated with privacy and respect.",
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
                Stomach Pain Doctor Lady in Moradabad: Contact Number and
                Appointment Guide
              </h1>

              <p className="mb-4 text-gray-700">
                When stomach pain strikes, you want two things quickly: the right
                doctor and a way to reach her. Many women in Moradabad search for
                a lady doctor so they can talk about periods, pregnancy,
                discharge or pelvic pain without hesitation.
              </p>

              <p className="mb-4 text-gray-700">
                This guide gives you the contact details of Dr. Priyanka Gynaec
                in Moradabad. It also explains which stomach pains a lady
                gynaecologist treats, what to say when you call, how to prepare,
                and when to skip the appointment and go straight to an emergency
                room.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details: Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Save these details for quick access:
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone (appointments)</p>
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
              </div>

              <p className="mt-4 text-gray-700">
                Clinic timings and availability can change, so confirm the day
                and time when you call or message.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ways to Book an Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                You can choose whichever method feels easiest.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Call:</strong> speak directly to the clinic for
                  appointment queries and quick questions.
                </li>
                <li>
                  <strong>WhatsApp:</strong> send a short message describing your
                  concern and preferred time.
                </li>
                <li>
                  <strong>Email:</strong> useful for sharing reports or
                  non-urgent questions.
                </li>
                <li>
                  <strong>Website:</strong> use the &quot;Book Appointment&quot;
                  option on the website.
                </li>
                <li>
                  <strong>Visit in person:</strong> the clinic is near Old
                  Roadways in Gandhi Nagar.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Say When You Call or Message
              </h2>

              <p className="mb-4 text-gray-700">
                A clear message helps the team guide you faster.
              </p>

              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your name and age.</li>
                <li>
                  Where the pain is, such as lower belly, left side or right
                  side.
                </li>
                <li>How long you have had it.</li>
                <li>Whether it is linked to your periods.</li>
                <li>Whether you are pregnant or could be pregnant.</li>
                <li>Any bleeding, discharge or fever.</li>
                <li>Your preferred day and time.</li>
                <li>Whether it is urgent.</li>
              </ul>

              <p className="mb-2 text-gray-700">
                Sample WhatsApp message:
              </p>

              <blockquote className="rounded-lg border-l-4 border-gray-300 bg-gray-50 p-4 text-gray-700">
                &quot;Hello, I am [name], age []. I have had lower stomach pain
                for [] days. I would like to book a consultation with Dr.
                Priyanka. Please share the available time.&quot;
              </blockquote>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Stomach Pains Does a Lady Gynaecologist Treat?
              </h2>

              <p className="mb-4 text-gray-700">
                &quot;Stomach pain&quot; is a broad phrase. Many women&apos;s
                belly complaints come from the reproductive system.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Book a lady gynaecologist when the pain is:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>In the lower abdomen or pelvis.</li>
                <li>Linked to periods or ovulation.</li>
                <li>Present during or after intercourse.</li>
                <li>Seen with abnormal bleeding or discharge.</li>
                <li>Associated with a missed period or pregnancy.</li>
                <li>
                  Accompanied by a lump or swelling in the lower belly.
                </li>
                <li>Seen with bloating and irregular periods.</li>
                <li>Related to fertility concerns.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See a gastroenterologist or physician when the pain is:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning in the upper stomach with acid reflux.</li>
                <li>Linked to meals, nausea or repeated vomiting.</li>
                <li>Seen with black stools or blood in stool.</li>
                <li>
                  Accompanied by long-term diarrhoea or constipation with weight
                  loss.
                </li>
                <li>Associated with yellow eyes or skin.</li>
                <li>Painful or difficult swallowing.</li>
              </ul>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist. She does not practise
                as a digestive specialist, but she can tell you during
                consultation whether your pain looks gynaecological and guide you
                to the right doctor if it does not.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Women&apos;s Health Causes of Stomach Pain
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Period Cramps
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain before or during periods.</li>
                <li>Severe pain that stops daily work needs evaluation.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>One-sided pain, fullness or bloating.</li>
                <li>Sudden severe pain can mean twisting or rupture.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heaviness, pressure and heavy periods.</li>
                <li>Swelling in the lower belly.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe period pain and chronic pelvic pain.</li>
                <li>Pain during intercourse and bowel movements.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular periods, weight gain and bloating.</li>
                <li>May affect fertility if untreated.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Infection (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lower belly pain, fever and unusual discharge.</li>
                <li>Needs timely treatment.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy-Related Pain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild stretching pain is often normal.</li>
                <li>Severe pain, bleeding or fever needs prompt review.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Uterine Prolapse
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Dragging heaviness in the lower belly.</li>
                <li>Urinary or bowel difficulty.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Call the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                Contact the clinic if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain lasting more than a few days.</li>
                <li>Pain that returns every month.</li>
                <li>Heavy, irregular or prolonged periods.</li>
                <li>Bleeding between periods.</li>
                <li>Pain during intercourse.</li>
                <li>Persistent bloating or swelling in the lower belly.</li>
                <li>Unusual or foul-smelling discharge.</li>
                <li>Burning urination with pelvic pain.</li>
                <li>A missed period with belly pain.</li>
                <li>Repeated need for painkillers.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When NOT to Wait for an Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the nearest hospital emergency department immediately if
                you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe abdominal pain.</li>
                <li>Fainting, dizziness or cold, clammy skin.</li>
                <li>Heavy bleeding soaking pads quickly.</li>
                <li>High fever with severe pain.</li>
                <li>Severe pain with a positive pregnancy test.</li>
                <li>Vomiting blood or passing black stools.</li>
                <li>Chest pain or pain spreading to the arm or jaw.</li>
                <li>A hard, rigid abdomen with repeated vomiting.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Emergencies cannot wait for a routine slot. Go first, then follow
                up with your gynaecologist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, safe-motherhood focused care. Her practice covers
                antenatal and postnatal care, high-risk pregnancies, laparoscopic
                gynaecological surgery and menstrual disorder treatment.
              </p>

              <p className="mb-4 text-gray-700">
                The clinic follows a &quot;Her Health First&quot; philosophy:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>She listens first before advising tests or treatment.</li>
                <li>Options are explained in simple, clear language.</li>
                <li>Surgery is advised only when truly needed.</li>
                <li>Privacy and comfort are respected.</li>
                <li>Care continues through follow-up visits.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Available at the Clinic
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gynaecology and laparoscopy:</strong> expert 3D
                  laparoscopic care.
                </li>
                <li>
                  <strong>Laparoscopic cystectomy:</strong> keyhole removal of
                  ovarian cysts while preserving fertility.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy:</strong> uterus-preserving
                  fibroid surgery.
                </li>
                <li>
                  <strong>Laparoscopic hysterectomy:</strong> minimally invasive
                  uterus removal.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> removal of
                  endometriosis for pelvic pain relief.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy and polypectomy:</strong>{" "}
                  gentle examination and treatment inside the uterus.
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> repair of uterine and vaginal
                  vault prolapse.
                </li>
                <li>
                  <strong>Laparoscopic sterilization:</strong> day-care tubal
                  ligation.
                </li>
                <li>
                  <strong>Fertility and IVF:</strong> personalised treatment
                  plans.
                </li>
                <li>
                  <strong>Pregnancy, antenatal and normal delivery care.</strong>
                </li>
                <li>
                  <strong>Paediatric care:</strong> newborn and child
                  consultations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology for Accurate Diagnosis
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery system.</li>
                <li>3D and 4D ultrasound for detailed imaging.</li>
                <li>Time-lapse imaging incubator for embryo monitoring.</li>
                <li>AI-powered semen analysis and DNA integrity testing.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A pelvic ultrasound is often the first test for lower stomach
                pain in women. It can show cysts, fibroids and other pelvic
                changes quickly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Your Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Registration:</strong> share your details and the
                  reason for your visit.
                </li>
                <li>
                  <strong>History:</strong> pain pattern, periods, pregnancies,
                  bowel and urine habits.
                </li>
                <li>
                  <strong>Examination:</strong> a gentle abdominal and pelvic
                  check, always with your consent.
                </li>
                <li>
                  <strong>Tests:</strong> ultrasound, blood or urine tests where
                  needed.
                </li>
                <li>
                  <strong>Diagnosis:</strong> the probable cause explained in
                  simple words.
                </li>
                <li>
                  <strong>Treatment plan:</strong> medicines, lifestyle advice,
                  minor procedures or surgery if required.
                </li>
                <li>
                  <strong>Follow-up:</strong> a review to check your progress.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note the first day of your last period.</li>
                <li>Keep a short pain diary for one or two cycles.</li>
                <li>
                  Describe the pain: sharp, dull, cramping or burning.
                </li>
                <li>
                  Mention triggers such as meals, movement or intercourse.
                </li>
                <li>
                  Carry previous ultrasound reports, blood tests and
                  prescriptions.
                </li>
                <li>List medicines, supplements and allergies.</li>
                <li>Mention past surgeries and pregnancies.</li>
                <li>Bring a family member if it makes you comfortable.</li>
                <li>Write your questions in advance.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions You Can Ask the Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What is the likely cause of my pain?</li>
                <li>Which tests do I need, and why?</li>
                <li>Do I need medicines, monitoring or surgery?</li>
                <li>Will this affect my fertility or pregnancy?</li>
                <li>How long will recovery take?</li>
                <li>
                  What warning signs should make me return urgently?
                </li>
                <li>When should I come for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Approaches You May Be Offered
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Monitoring:</strong> for small, harmless cysts or
                  fibroids.
                </li>
                <li>
                  <strong>Medicines:</strong> for pain, infection, hormonal
                  imbalance or heavy bleeding.
                </li>
                <li>
                  <strong>Lifestyle plans:</strong> diet and exercise guidance,
                  especially for PCOS.
                </li>
                <li>
                  <strong>Minor procedures:</strong> such as hysteroscopy for
                  polyps.
                </li>
                <li>
                  <strong>Keyhole surgery:</strong> for cysts, fibroids,
                  endometriosis or prolapse when needed.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                In suitable cases, keyhole surgery means smaller scars, less pain
                and quicker recovery than open surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Care While You Wait for Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                These steps may give comfort but never replace medical advice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Apply a warm compress to the lower abdomen.</li>
                <li>Rest during severe cramps.</li>
                <li>Drink plenty of water.</li>
                <li>Eat light, fibre-rich meals.</li>
                <li>Avoid long-term painkiller use without advice.</li>
                <li>Note any change in your symptoms.</li>
                <li>Do not ignore worsening pain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Choose a Lady Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Greater comfort during examination.</li>
                <li>
                  Easier conversation about periods, intercourse and discharge.
                </li>
                <li>
                  Better understanding of pain linked to the menstrual cycle.
                </li>
                <li>Reduced hesitation and embarrassment.</li>
                <li>A trusting, private environment.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A patient shared on the clinic&apos;s website that they felt
                comfortable and understood from the first visit, with every step
                explained clearly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Doctor: A Quick Checklist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications and practical experience.</li>
                <li>A doctor who listens and explains patiently.</li>
                <li>Modern ultrasound and laparoscopic facilities.</li>
                <li>Honest advice with no pressure to operate.</li>
                <li>Privacy and comfort at the clinic.</li>
                <li>Easy contact through phone and WhatsApp.</li>
                <li>Convenient location.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>

              <p className="mb-4 text-gray-700">
                Stomach or lower belly pain is a signal worth listening to. A
                single call or WhatsApp message is enough to begin. The sooner
                the cause is found, the simpler the treatment usually is.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
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
