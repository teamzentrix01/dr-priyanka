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

export default function PelvicFloorTherapyMoradabad() {
  const faqs = [
    {
      q: "What is pelvic floor dysfunction?",
      a: "It is when the pelvic floor muscles are weakened, damaged, or unable to function properly, affecting bladder, bowel, or reproductive support.",
    },
    {
      q: "Who treats pelvic floor disorders in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) evaluates and treats pelvic floor conditions, including prolapse and incontinence.",
    },
    {
      q: "Is urine leakage after childbirth treatable?",
      a: "Yes, many cases improve significantly with pelvic floor exercises, lifestyle changes, or further treatment if needed.",
    },
    {
      q: "What is sacrocolpopexy?",
      a: "It is an advanced keyhole surgical procedure used to repair uterine or vaginal vault prolapse.",
    },
    {
      q: "Can pelvic floor problems be treated without surgery?",
      a: "Yes, options like pelvic floor exercises, biofeedback, and pessary devices can help manage many cases non-surgically.",
    },
    {
      q: "Does childbirth always cause pelvic floor problems?",
      a: "Not always, but vaginal delivery is a common contributing factor, making postpartum evaluation worthwhile.",
    },
    {
      q: "How do I book a consultation for pelvic floor concerns?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is pelvic organ prolapse common?",
      a: "Yes, it is a common condition, especially after childbirth or with age-related changes, and is treatable.",
    },
    {
      q: "Does the clinic offer minimally invasive surgical options?",
      a: "Yes, including 3D laparoscopic techniques for prolapse and pelvic floor repair procedures.",
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
                Pelvic Floor Therapy Doctor in Moradabad: Understanding and
                Treating Pelvic Floor Disorders
              </h1>

              <p className="mb-4 text-gray-700">
                Pelvic floor problems are far more common than most women
                realize, yet they are often the last thing women feel comfortable
                discussing — even with a doctor. Leaking urine when you cough or
                laugh, a feeling of heaviness or bulging in the pelvic area, or
                discomfort during intimacy are all signs that the pelvic floor
                muscles may not be functioning as they should. These issues can
                affect women of any age, though they become more common after
                childbirth or with age-related changes.
              </p>

              <p className="text-gray-700">
                In Moradabad, finding a gynaecologist experienced in diagnosing
                and treating pelvic floor disorders is an important step toward
                getting real, lasting relief. This article explains what pelvic
                floor dysfunction involves, its common causes and symptoms,
                available treatment options, and why Dr. Priyanka Pachauri is a
                trusted specialist for pelvic floor care in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is the Pelvic Floor and Why It Matters
              </h2>

              <p className="mb-4 text-gray-700">
                The pelvic floor is a group of muscles and connective tissue
                that supports the bladder, uterus, and rectum. When these
                muscles are weakened, damaged, or dysfunctional, it can lead to
                a range of problems affecting daily comfort and quality of life.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The pelvic floor supports multiple organs, meaning dysfunction
                  can affect urinary, bowel, and reproductive health
                  simultaneously
                </li>
                <li>
                  Childbirth is one of the most common causes of pelvic floor
                  weakness, due to the strain placed on these muscles during
                  vaginal delivery
                </li>
                <li>
                  Hormonal changes during menopause can further weaken pelvic
                  floor tissue over time
                </li>
                <li>
                  Chronic straining, such as from constipation or a persistent
                  cough, can contribute to pelvic floor problems over the years
                </li>
                <li>
                  Pelvic floor dysfunction is not just about weakness — in some
                  cases, the muscles can be too tight or unable to relax
                  properly, causing pain rather than leakage
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Pelvic Floor Disorders
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Urinary Incontinence
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Leaking urine during coughing, sneezing, laughing, or
                      physical activity (stress incontinence)
                    </li>
                    <li>
                      A sudden, strong urge to urinate that is difficult to
                      control (urge incontinence)
                    </li>
                    <li>
                      A combination of both types in some women (mixed
                      incontinence)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Pelvic Organ Prolapse
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A sensation of heaviness, pressure, or bulging in the
                      vaginal area
                    </li>
                    <li>
                      Can involve the bladder, uterus, or rectum shifting from
                      their normal position
                    </li>
                    <li>
                      Symptoms often worsen with standing for long periods or
                      physical exertion
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Fecal Incontinence
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Difficulty controlling bowel movements or passing gas
                      involuntarily
                    </li>
                    <li>
                      Often linked to pelvic floor muscle or nerve damage,
                      sometimes related to childbirth
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Pelvic Pain and Muscle Tightness
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Chronic pelvic pain related to overly tight or spasming
                      pelvic floor muscles
                    </li>
                    <li>
                      Pain during intercourse, which can be connected to pelvic
                      floor dysfunction
                    </li>
                    <li>
                      Difficulty fully emptying the bladder or bowels due to
                      muscle tension
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Pelvic Floor Dysfunction
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vaginal childbirth, particularly with prolonged labor, large
                  babies, or the use of forceps or vacuum delivery
                </li>
                <li>
                  Multiple pregnancies, which can cumulatively strain pelvic
                  floor support over time
                </li>
                <li>
                  Menopause, due to declining estrogen levels affecting tissue
                  strength and elasticity
                </li>
                <li>
                  Chronic constipation and straining, which places repeated
                  pressure on pelvic floor muscles
                </li>
                <li>
                  Obesity, which increases pressure on pelvic structures
                </li>
                <li>
                  Chronic coughing, such as from smoking-related lung conditions
                </li>
                <li>
                  Previous pelvic surgery, which can sometimes affect
                  surrounding muscle and tissue support
                </li>
                <li>
                  Age-related tissue changes, which naturally reduce muscle
                  strength and elasticity over time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Suggest You Should See a Specialist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Leaking urine during exercise, coughing, sneezing, or laughing
                </li>
                <li>
                  A frequent, urgent need to urinate that is hard to control
                </li>
                <li>
                  A feeling of heaviness, pressure, or a visible bulge in the
                  vaginal area
                </li>
                <li>
                  Difficulty fully emptying the bladder or bowels
                </li>
                <li>
                  Pain during intercourse that seems related to pelvic muscle
                  tension
                </li>
                <li>
                  Lower back or pelvic pain without another clear explanation
                </li>
                <li>
                  Reduced sensation or noticeable looseness in the vaginal area,
                  especially after childbirth
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Pelvic Floor Disorders Are Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed medical history, including childbirth history,
                  symptoms, and their impact on daily life
                </li>
                <li>
                  Pelvic examination, to assess muscle tone, strength, and any
                  signs of prolapse
                </li>
                <li>
                  Pelvic ultrasound, which can help evaluate pelvic organ
                  position and support structures
                </li>
                <li>
                  Urodynamic testing, in some cases, to assess bladder function
                  more precisely
                </li>
                <li>
                  Assessment of pelvic floor muscle strength and coordination,
                  sometimes through specific physical evaluation techniques
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Pelvic Floor Disorders
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Conservative, Non-Surgical Approaches
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Pelvic floor exercises (Kegels), done correctly and
                      consistently, to strengthen weakened muscles
                    </li>
                    <li>
                      Biofeedback therapy, which helps patients learn to properly
                      engage and relax pelvic floor muscles
                    </li>
                    <li>
                      Lifestyle modifications, including weight management,
                      treating chronic cough, and managing constipation
                    </li>
                    <li>
                      Pessary devices, a supportive device placed in the vagina
                      to help manage prolapse symptoms without surgery
                    </li>
                    <li>
                      Bladder training techniques, useful for managing urge
                      incontinence
                    </li>
                    <li>
                      Physical therapy with a pelvic floor specialist, focusing
                      on targeted muscle strengthening or relaxation techniques
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Surgical Treatment Options
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Sacrocolpopexy, an advanced procedure to repair uterine or
                      vaginal vault prolapse, often performed using minimally
                      invasive laparoscopic techniques
                    </li>
                    <li>
                      Other prolapse repair surgeries, tailored to the specific
                      organs and degree of prolapse involved
                    </li>
                    <li>
                      Minimally invasive laparoscopic approaches, generally
                      associated with smaller incisions, less pain, and faster
                      recovery compared to traditional open surgery
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Postpartum Pelvic Floor Care Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vaginal delivery places significant strain on the pelvic floor,
                  making postpartum evaluation important even without obvious
                  symptoms
                </li>
                <li>
                  Early symptoms are sometimes dismissed as a normal part of
                  postpartum recovery, when they may actually benefit from
                  targeted treatment
                </li>
                <li>
                  Early intervention can prevent worsening of mild pelvic floor
                  weakness into more significant prolapse or incontinence later
                  in life
                </li>
                <li>
                  Postpartum check-ups are a good opportunity to raise any
                  pelvic floor-related concerns, even if they feel minor or
                  embarrassing to mention
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Pelvic Floor Therapy Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers evaluation
                and treatment for pelvic floor disorders as part of her
                comprehensive gynaecological practice in Moradabad. According to
                her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her clinic&apos;s relevant services include:
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Key Features of Care
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Sacrocolpopexy, an advanced keyhole procedure specifically
                      listed among her specialized services for repairing
                      uterine and vaginal vault prolapse
                    </li>
                    <li>
                      3D laparoscopic surgical expertise, applicable to
                      minimally invasive prolapse and pelvic floor repair
                      procedures
                    </li>
                    <li>
                      Postnatal care, providing an opportunity to identify and
                      address pelvic floor concerns early after childbirth
                    </li>
                    <li>
                      A &quot;Her Health First&quot; approach, ensuring that
                      symptoms like leakage or pelvic pressure are taken
                      seriously rather than dismissed
                    </li>
                    <li>
                      Advanced diagnostic imaging, including a Voluson E22 3D/4D
                      ultrasound machine, useful in evaluating pelvic organ
                      support structures
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Why Patients Choose the Clinic
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Patient testimonials consistently emphasize feeling
                      comfortable discussing sensitive concerns and receiving
                      clear explanations of treatment options
                    </li>
                    <li>
                      Particularly important for pelvic floor issues, which many
                      women hesitate to bring up
                    </li>
                    <li>
                      The clinic is located in Gandhi Nagar, Moradabad, making
                      it accessible to patients across the city seeking pelvic
                      floor evaluation and treatment
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventive Tips for Pelvic Floor Health
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Practice pelvic floor exercises regularly, even before
                  symptoms appear, especially during and after pregnancy
                </li>
                <li>
                  Maintain a healthy body weight, reducing excess pressure on
                  pelvic structures
                </li>
                <li>
                  Manage chronic constipation through adequate fiber, hydration,
                  and avoiding excessive straining
                </li>
                <li>
                  Treat chronic coughing promptly, particularly if related to
                  smoking or a respiratory condition
                </li>
                <li>
                  Avoid heavy lifting with poor technique, which can place
                  unnecessary strain on pelvic floor muscles
                </li>
                <li>
                  Attend postpartum check-ups, using them as an opportunity to
                  raise any pelvic floor concerns early
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Perform Pelvic Floor Exercises Correctly
              </h2>

              <p className="mb-4 text-gray-700">
                Many women attempt Kegel exercises without proper technique,
                reducing their effectiveness. Keep these points in mind:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Identify the right muscles by trying to stop the flow of urine
                  midstream — the muscles you use are your pelvic floor muscles,
                  though this should not be done regularly as a training method
                </li>
                <li>
                  Contract and hold these muscles for a few seconds, then fully
                  relax for an equal amount of time, gradually building up hold
                  duration as strength improves
                </li>
                <li>
                  Avoid holding your breath or tightening your abdomen, thighs,
                  or buttocks instead of the pelvic floor itself
                </li>
                <li>
                  Practice consistently, ideally several sets throughout the day,
                  rather than occasionally
                </li>
                <li>
                  Be patient with results, since noticeable improvement in
                  strength and symptom control often takes several weeks of
                  consistent practice
                </li>
                <li>
                  Ask your doctor for a proper assessment if you are unsure
                  whether you are engaging the right muscles
                </li>
                <li>
                  Combine exercises with other lifestyle changes, such as
                  maintaining a healthy weight and managing constipation, for
                  the best overall results
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Pelvic Floor Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed discussion of your symptoms, including when they
                  started and how they affect your daily life
                </li>
                <li>
                  Questions about childbirth history, including delivery type,
                  any complications, and baby&apos;s birth weight
                </li>
                <li>
                  A physical examination, assessing pelvic floor muscle tone and
                  checking for any signs of prolapse
                </li>
                <li>
                  Discussion of treatment options, ranging from exercises and
                  lifestyle changes to more advanced interventions if needed
                </li>
                <li>
                  A follow-up plan, particularly if starting with conservative
                  treatments like pelvic floor exercises or biofeedback
                </li>
                <li>
                  An opportunity to ask questions freely, since a good
                  specialist will create space for discussing sensitive symptoms
                  without embarrassment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Pelvic Floor Disorders
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Leaking urine after childbirth is just something you have to live with.&quot;</strong>{" "}
                  Many cases of postpartum incontinence can be significantly
                  improved with proper evaluation and treatment.
                </li>
                <li>
                  <strong>&quot;Pelvic floor problems only affect older women.&quot;</strong>{" "}
                  These issues can occur at any age, particularly after
                  childbirth, and should not be dismissed simply due to a
                  woman&apos;s age.
                </li>
                <li>
                  <strong>&quot;Kegel exercises alone can fix any pelvic floor issue.&quot;</strong>{" "}
                  While helpful for many, some conditions, like significant
                  prolapse, may require additional treatment such as a pessary
                  or surgery.
                </li>
                <li>
                  <strong>&quot;Pelvic floor surgery always involves major, invasive procedures.&quot;</strong>{" "}
                  Many prolapse repairs today, including sacrocolpopexy, can be
                  performed using minimally invasive laparoscopic techniques.
                </li>
                <li>
                  <strong>&quot;It is too embarrassing to discuss with a doctor.&quot;</strong>{" "}
                  Pelvic floor disorders are common and medically recognized
                  conditions — a good doctor will discuss them without judgment.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                To consult Dr. Priyanka Pachauri for pelvic floor therapy in
                Moradabad, reach out through any of the following:
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>
                        Dr. Priyanka Gynaec – Fertility • Maternity • 3D
                        Laparoscopy
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
                        href="mailto:drpriyanka@gynaecologistmoradabad.com"
                        className="break-all hover:underline"
                      >
                        drpriyanka@gynaecologistmoradabad.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
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