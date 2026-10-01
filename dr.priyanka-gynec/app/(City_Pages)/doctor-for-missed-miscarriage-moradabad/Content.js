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

export default function DoctorForMissedMiscarriageMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a missed miscarriage in Moradabad?",
      a: "A gynaecologist with antenatal and early pregnancy expertise, such as Dr. Priyanka Pachauri. Call +91 90797 65578.",
    },
    {
      q: "What is a missed miscarriage?",
      a: "It is when the baby stops growing but the tissue stays in the womb, often without pain or bleeding.",
    },
    {
      q: "Did I cause my miscarriage?",
      a: "No. Most miscarriages are due to random chromosomal problems and are not caused by anything you did.",
    },
    {
      q: "What are the treatment options?",
      a: "Waiting, medicines, or a minor surgical procedure. Your doctor will help you choose. WhatsApp: +91 89796 70705.",
    },
    {
      q: "Is D&C always required?",
      a: "No. Some women pass the tissue naturally or with tablets. The best option depends on your health.",
    },
    {
      q: "How long does recovery take?",
      a: "Physical recovery is usually a few days to weeks. Emotional healing may take longer.",
    },
    {
      q: "When can I try for pregnancy again?",
      a: "Often after you feel ready and your doctor confirms. Ask for personal advice. Email: drpriyankagynec@gmail.com.",
    },
    {
      q: "Will I need tests after a miscarriage?",
      a: "Usually only after two or more losses, when your doctor may advise investigations.",
    },
    {
      q: "What are warning signs after miscarriage?",
      a: "Heavy bleeding, fever, foul discharge or severe pain. Seek medical help immediately.",
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
                Doctor for Missed Miscarriage in Moradabad: Compassionate Care,
                Treatment and Recovery
              </h1>

              <p className="mb-4 text-gray-700">
                Hearing &quot;there is no heartbeat&quot; at a routine scan is
                one of the hardest moments a woman and her family can face. You
                may have had no pain, no bleeding, and no warning at all. If you
                are searching for a doctor for missed miscarriage in Moradabad,
                please know first that this is not your fault, and that you are
                not alone.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what a missed miscarriage is, how it is
                diagnosed, what treatment options exist, how recovery works, and
                how to plan your next pregnancy with confidence.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Missed Miscarriage?
              </h2>

              <p className="mb-4 text-gray-700">
                A missed miscarriage, sometimes called a silent miscarriage or
                missed abortion in medical terms, is a pregnancy loss in which
                the baby has stopped developing, but the body has not yet
                expelled the pregnancy tissue.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The pregnancy sac may still be present in the womb.
                </li>
                <li>
                  There may be no bleeding and no pain at all.
                </li>
                <li>
                  Pregnancy symptoms such as nausea may fade, or may continue
                  for a while.
                </li>
                <li>
                  It is usually found on an ultrasound during a routine check.
                </li>
                <li>
                  It is a medical event, not a result of anything you did.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Common Is It?
              </h2>

              <p className="mb-4 text-gray-700">
                Early pregnancy loss is more common than most people realise.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Roughly 1 in 5 known pregnancies may end in miscarriage,
                  mostly in the first trimester.
                </li>
                <li>
                  Many losses happen because of chromosomal problems in the
                  embryo, which are random.
                </li>
                <li>
                  Having one miscarriage does not mean you cannot have a healthy
                  pregnancy later.
                </li>
                <li>
                  Most women who lose a pregnancy go on to have a healthy baby.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Missed Miscarriage vs Other Types of Miscarriage
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Threatened miscarriage:</strong> bleeding with the
                  pregnancy still continuing.
                </li>
                <li>
                  <strong>Inevitable miscarriage:</strong> bleeding with an open
                  cervix, and loss is unavoidable.
                </li>
                <li>
                  <strong>Incomplete miscarriage:</strong> part of the pregnancy
                  tissue has passed, and part remains.
                </li>
                <li>
                  <strong>Complete miscarriage:</strong> all the pregnancy
                  tissue has passed naturally.
                </li>
                <li>
                  <strong>Missed miscarriage:</strong> the baby has died, but
                  the tissue stays in the womb, often with no symptoms.
                </li>
                <li>
                  <strong>Recurrent miscarriage:</strong> two or more pregnancy
                  losses.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor decides the type after examination and ultrasound.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms and Signs of a Missed Miscarriage
              </h2>

              <p className="mb-4 text-gray-700">
                Many women feel completely normal, which is why it is called
                &quot;silent.&quot;
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible signs:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Loss of early pregnancy symptoms such as nausea or breast
                  tenderness.
                </li>
                <li>Light spotting or brown discharge.</li>
                <li>Mild cramping or a dull backache.</li>
                <li>The belly not growing as expected.</li>
                <li>
                  A pregnancy test that becomes faint or negative later.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Confirmed only through:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ultrasound showing no heartbeat or an embryo smaller than
                  expected.
                </li>
                <li>
                  Repeat scans and blood tests when the diagnosis is uncertain.
                </li>
              </ul>

              <p className="text-gray-700">
                Never assume a loss from symptoms alone, and never ignore
                bleeding or pain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Is a Missed Miscarriage Diagnosed?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ultrasound scan:</strong> the main test, ideally a
                  transvaginal scan in early pregnancy.
                </li>
                <li>
                  <strong>Absent fetal heartbeat:</strong> once the embryo is
                  large enough, no heartbeat is seen.
                </li>
                <li>
                  <strong>Empty or abnormal sac:</strong> the sac may show no
                  embryo or growth that has stopped.
                </li>
                <li>
                  <strong>Repeat scan after about 7 to 10 days:</strong>{" "}
                  sometimes needed to be sure, so a healthy pregnancy is never
                  wrongly ended.
                </li>
                <li>
                  <strong>Blood tests (hCG):</strong> hormone levels that fail
                  to rise appropriately can support the diagnosis.
                </li>
                <li>
                  <strong>Second opinion or 3D/4D ultrasound:</strong> helpful
                  for clearer images where needed.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A careful, patient diagnosis avoids mistakes and protects a
                viable pregnancy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does a Missed Miscarriage Happen?
              </h2>

              <p className="mb-4 text-gray-700">
                In most cases, no single cause is found, and it could not have
                been prevented.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common causes:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Chromosomal abnormalities:</strong> the most common
                  cause, and completely random.
                </li>
                <li>
                  <strong>Hormonal issues:</strong> such as thyroid problems or
                  poorly controlled diabetes.
                </li>
                <li>
                  <strong>Uterine problems:</strong> fibroids, polyps, adhesions
                  or an unusually shaped uterus.
                </li>
                <li>
                  <strong>Infections:</strong> certain infections during early
                  pregnancy.
                </li>
                <li>
                  <strong>Immune or clotting disorders:</strong> in a small
                  group of women.
                </li>
                <li>
                  <strong>Age:</strong> the risk rises with maternal age,
                  especially after 35.
                </li>
                <li>
                  <strong>Lifestyle factors:</strong> smoking, alcohol and heavy
                  caffeine can raise risk.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What does NOT cause miscarriage:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal work, walking or light exercise.</li>
                <li>Sex during pregnancy.</li>
                <li>Stress from ordinary daily life.</li>
                <li>Lifting light objects.</li>
                <li>Something you ate, thought or said.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Missed Miscarriage
              </h2>

              <p className="mb-4 text-gray-700">
                There is more than one safe option. The choice depends on your
                health, how far along you are, and your preferences.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Expectant Management (Waiting)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Waiting for the body to pass the tissue naturally.
                </li>
                <li>
                  Suitable for some women who are stable and have no infection.
                </li>
                <li>May take days to a few weeks.</li>
                <li>
                  Requires regular follow-up and clear warning signs to watch
                  for.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Medical Management (Medicines)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tablets are prescribed to help the womb empty itself.
                </li>
                <li>
                  Often done at home, under your doctor&apos;s guidance.
                </li>
                <li>
                  Usually causes cramping and bleeding, which is heavier than a
                  period.
                </li>
                <li>
                  A follow-up scan or check confirms that everything has passed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Surgical Management
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A minor procedure, such as suction evacuation or D&C
                  (dilation and curettage), to remove the tissue.
                </li>
                <li>
                  Usually done as a short day-care procedure under anaesthesia.
                </li>
                <li>
                  Preferred when there is heavy bleeding, infection, or a woman
                  wants a quick and predictable option.
                </li>
                <li>
                  Recovery is usually quick, and tissue can be tested if needed.
                </li>
              </ul>

              <p className="text-gray-700">
                Your doctor explains benefits, risks and what to expect before
                you decide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During and After Treatment
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Immediately after:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild to moderate cramps.</li>
                <li>
                  Bleeding, similar to or heavier than a period.
                </li>
                <li>Tiredness and emotional heaviness.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In the following days and weeks:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding gradually reduces and can last up to two weeks or
                  more.
                </li>
                <li>
                  Your next period usually returns in about 4 to 6 weeks.
                </li>
                <li>
                  A pregnancy test may stay positive for a few weeks because of
                  leftover hormone.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Simple care tips:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Use pads instead of tampons for the bleeding period.
                </li>
                <li>Rest as long as you feel the need.</li>
                <li>
                  Avoid intercourse and swimming until your doctor says it is
                  safe.
                </li>
                <li>Take prescribed medicines exactly as advised.</li>
                <li>
                  Eat iron-rich and protein-rich food to rebuild strength.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs After a Miscarriage: See Your Doctor Immediately
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very heavy bleeding, such as soaking more than 2 pads in an
                  hour.
                </li>
                <li>Passing large clots.</li>
                <li>Fever or chills.</li>
                <li>Foul-smelling discharge.</li>
                <li>Severe or worsening abdominal pain.</li>
                <li>Dizziness, fainting or extreme weakness.</li>
                <li>
                  Bleeding that continues long after treatment.
                </li>
                <li>
                  A positive pregnancy test that does not go negative in the
                  expected time.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Prompt care prevents infection and serious complications.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Recovery: You Are Allowed to Grieve
              </h2>

              <p className="mb-4 text-gray-700">
                Physical healing is often quicker than emotional healing. Your
                feelings are valid, whatever they look like.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sadness, guilt, anger, numbness or anxiety are all common.
                </li>
                <li>
                  Grief may come in waves, sometimes even months later.
                </li>
                <li>
                  Partners may grieve differently, and both experiences matter.
                </li>
                <li>
                  Avoid blaming yourself, because this was not caused by
                  anything you did.
                </li>
                <li>
                  Talk to someone you trust, such as your partner, a family
                  member or a friend.
                </li>
                <li>
                  Give yourself time before deciding about the next pregnancy.
                </li>
                <li>
                  Consider counselling if the sadness feels heavy or does not
                  ease over time.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you ever feel hopeless or think about harming yourself,
                please contact a mental health professional or a trusted person
                immediately. You deserve care and support.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should Tests Be Done? Recurrent Pregnancy Loss
              </h2>

              <p className="mb-4 text-gray-700">
                Most women need no special tests after a single miscarriage.
                Your doctor may advise investigation after two or more losses.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible tests:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood tests for thyroid, blood sugar and clotting or immune
                  factors.
                </li>
                <li>
                  Ultrasound or 3D/4D scan to check the shape of the uterus.
                </li>
                <li>
                  Hysteroscopy to look inside the womb for polyps, adhesions or
                  a septum.
                </li>
                <li>
                  Genetic testing of the couple or of the pregnancy tissue, when
                  appropriate.
                </li>
                <li>Hormone tests where needed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Possible treatments, based on findings:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines for thyroid or diabetes control.</li>
                <li>
                  Correction of uterine problems, such as removal of polyps.
                </li>
                <li>Blood-thinning treatment in selected cases.</li>
                <li>Close early pregnancy monitoring and support.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Planning Your Next Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>When to try again:</strong> many women can try once
                  they feel physically and emotionally ready, often after a
                  normal period. Ask your doctor for personal advice.
                </li>
                <li>
                  <strong>Start folic acid:</strong> take it before conception,
                  as prescribed.
                </li>
                <li>
                  <strong>Get health checks:</strong> thyroid, blood sugar,
                  haemoglobin and blood group.
                </li>
                <li>
                  <strong>Rh-negative women:</strong> discuss anti-D injection
                  with your doctor after a loss.
                </li>
                <li>
                  <strong>Eat well:</strong> balanced meals with protein, iron,
                  calcium and fibre.
                </li>
                <li>
                  <strong>Avoid tobacco, alcohol and excess caffeine.</strong>
                </li>
                <li>
                  <strong>Manage weight and chronic conditions</strong> with
                  medical support.
                </li>
                <li>
                  <strong>Book an early scan</strong> in the next pregnancy for
                  reassurance.
                </li>
                <li>
                  <strong>Fertility support:</strong> if conceiving is
                  difficult, fertility evaluation or IVF guidance may help.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka Pachauri in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is known in Moradabad for antenatal care,
                high-risk pregnancy management, fertility care and patient-first
                communication. Based on the clinic&apos;s listed services, you
                can expect:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Empathetic communication:</strong> clear, gentle
                  explanations at a very difficult time.
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> careful confirmation of
                  pregnancy status before any decision.
                </li>
                <li>
                  <strong>Choice of treatment:</strong> guidance on waiting,
                  medicines or a minor procedure, so you feel involved.
                </li>
                <li>
                  <strong>Hysteroscopy services:</strong> diagnostic
                  hysteroscopy and polyp removal, useful for finding causes of
                  repeated loss.
                </li>
                <li>
                  <strong>Fertility and IVF support:</strong> for couples who
                  need help conceiving after a loss.
                </li>
                <li>
                  <strong>Continuity of care:</strong> the same team from early
                  pregnancy to delivery and follow-up.
                </li>
                <li>
                  <strong>Newborn support:</strong> paediatric care at the same
                  centre for future pregnancies.
                </li>
                <li>
                  <strong>Convenient location:</strong> Gandhi Nagar, Moradabad,
                  with call and WhatsApp booking.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A respectful discussion of your history and symptoms.
                </li>
                <li>Ultrasound and any needed blood tests.</li>
                <li>A clear explanation of your diagnosis.</li>
                <li>All treatment options, with pros and cons.</li>
                <li>
                  Advice on pain relief, bleeding and warning signs.
                </li>
                <li>A follow-up plan and emotional support.</li>
                <li>
                  Guidance on tests and planning for your next pregnancy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for Family and Partners
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Listen without judging or trying to &quot;fix&quot; the grief.
                </li>
                <li>
                  Avoid comments such as &quot;it was for the best&quot; or
                  &quot;just try again.&quot;
                </li>
                <li>
                  Accompany her to appointments if she wishes.
                </li>
                <li>Help with meals, household tasks and rest.</li>
                <li>
                  Share the emotional load, and look after your own feelings
                  too.
                </li>
                <li>
                  Keep the doctor&apos;s phone, WhatsApp and clinic address
                  handy.
                </li>
                <li>
                  Encourage professional support if she seems very low.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment
              </h2>

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
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh, 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
                Frequently Asked Questions (FAQs)
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
