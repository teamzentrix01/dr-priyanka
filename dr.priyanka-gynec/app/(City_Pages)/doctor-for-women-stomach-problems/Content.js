
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

export default function DoctorForWomensStomachProblemsMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for women's stomach problems?",
      a: "Start with a gynaecologist if symptoms are low in the belly or linked to periods, otherwise a gastroenterologist.",
    },
    {
      q: "Can a gynaecologist treat bloating?",
      a: "Yes, when it is linked to PCOS, cysts, fibroids or hormonal changes.",
    },
    {
      q: "Why does my stomach hurt before my period?",
      a: "Hormonal changes and uterine contractions commonly cause pre-period cramps and bloating.",
    },
    {
      q: "Can PCOS cause stomach bloating?",
      a: "Yes, PCOS can cause bloating and pelvic discomfort along with irregular periods.",
    },
    {
      q: "Is constipation related to endometriosis?",
      a: "It can be, as endometriosis may cause bowel pain and changes, mostly around periods.",
    },
    {
      q: "Are stomach problems common in pregnancy?",
      a: "Yes. Acidity, nausea and constipation are common, but severe pain or bleeding needs urgent care.",
    },
    {
      q: "Does the clinic offer keyhole surgery?",
      a: "Yes, including laparoscopic cystectomy, myomectomy, hysterectomy and endometriosis surgery.",
    },
    {
      q: "When is stomach pain an emergency?",
      a: "Sudden severe pain, fainting, heavy bleeding or high fever with pain needs immediate medical help.",
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
                Doctor for Women&apos;s Stomach Problems: Who Should You See?
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;I have a stomach problem&quot; is one of the most common
                complaints women bring to a clinic, and also one of the most
                confusing. Bloating, cramps, acidity, constipation, heaviness and
                nausea can come from the digestive system, but just as often from
                the reproductive system, because the uterus, ovaries and bowel
                sit very close together in the abdomen.
              </p>

              <p className="mb-4 text-gray-700">
                This guide helps you decide which doctor to consult for
                women&apos;s stomach problems, what symptoms point where, and how
                Dr. Priyanka Pachauri at Dr. Priyanka Gynaec in Moradabad can
                help.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women&apos;s Stomach Problems Are Different
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hormones affect digestion:</strong> Oestrogen and
                  progesterone change how fast food moves through the gut, so
                  bloating and constipation often rise and fall with the
                  menstrual cycle.
                </li>
                <li>
                  <strong>Organs share space:</strong> An enlarged ovary, fibroid
                  or inflamed pelvis can press on the bowel and bladder and feel
                  like a &quot;stomach issue.&quot;
                </li>
                <li>
                  <strong>Shared nerve pathways:</strong> Pain from the uterus and
                  the intestines can feel almost identical.
                </li>
                <li>
                  <strong>Life stages change the gut:</strong> Pregnancy,
                  postpartum recovery and menopause each bring their own digestive
                  symptoms.
                </li>
                <li>
                  <strong>Conditions overlap:</strong> Endometriosis and
                  irritable bowel syndrome (IBS) share many symptoms, which is
                  why diagnosis takes care.
                </li>
                <li>
                  <strong>Stress and diet add to it:</strong> Irregular meals,
                  skipped breakfast, low fluid intake and anxiety worsen almost
                  every digestive complaint.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor Should You Consult?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See a Gynaecologist When:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The problem changes with your periods (worse before or during
                  bleeding).
                </li>
                <li>
                  The pain or heaviness is low in the abdomen or pelvis.
                </li>
                <li>You also have heavy, irregular or painful periods.</li>
                <li>
                  You notice unusual discharge, spotting or pain during
                  intercourse.
                </li>
                <li>You have been trying to conceive or may be pregnant.</li>
                <li>
                  You have bloating with weight changes, acne or hair growth
                  (possible PCOS).
                </li>
                <li>
                  You feel a dragging sensation or pressure in the lower belly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See a Gastroenterologist or Physician When:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning in the upper stomach or chest after meals.</li>
                <li>Frequent vomiting, black stools or blood in stool.</li>
                <li>
                  Long-standing constipation or diarrhoea unrelated to your
                  cycle.
                </li>
                <li>
                  Pain after eating fatty food, which may suggest gallbladder
                  trouble.
                </li>
                <li>Unexplained weight loss with digestive symptoms.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                When You Are Unsure:
              </h3>
              <p className="mb-4 text-gray-700">
                Start with a female gynaecologist. If the cause turns out to be
                digestive, a good doctor will tell you honestly and refer you to
                the right specialist.
              </p>

              <p className="text-gray-700">
                This saves time, money and repeated visits to the wrong clinic.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Stomach Problems Women Face and What They May Mean
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Persistent Bloating
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Feeling full, tight or swollen, especially in the lower belly.
                </li>
                <li>
                  Can be linked to PCOS, ovarian cysts, fibroids or hormonal
                  changes.
                </li>
                <li>
                  It can also be dietary, from gas-forming foods or constipation.
                </li>
                <li>
                  Bloating that does not settle for weeks needs evaluation,
                  particularly after age 40.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Cramping and Lower Abdominal Pain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Period cramps are common, but severe or worsening pain is not
                  something to ignore.
                </li>
                <li>
                  Possible causes: endometriosis, fibroids, pelvic infection,
                  cysts.
                </li>
                <li>Pain with fever or discharge points towards infection.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Constipation and Painful Bowel Movements
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal shifts before periods often slow digestion.
                </li>
                <li>
                  Pelvic conditions such as endometriosis can cause pain during
                  bowel movements, mostly around periods.
                </li>
                <li>Low fibre and low water intake make it worse.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Acidity, Gas and Nausea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very common in pregnancy, especially in the first trimester and
                  late pregnancy.
                </li>
                <li>
                  Also triggered by stress, spicy food and irregular eating.
                </li>
                <li>
                  Persistent symptoms outside pregnancy deserve a proper check.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Frequent Urination with Lower Belly Pain
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>May be a urinary tract infection.</li>
                <li>
                  Can also be pressure from fibroids or a prolapse.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. A Feeling of Heaviness or Something &quot;Coming Down&quot;
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Possible uterine or vaginal vault prolapse.</li>
                <li>
                  Often mistaken for constipation or a stomach problem.
                </li>
                <li>
                  Treatable with modern options, including keyhole repair when
                  needed.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Digestive Symptoms During Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heartburn, constipation, nausea and gas are common.</li>
                <li>
                  Severe pain, persistent vomiting or bleeding must be reported
                  at once.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Symptoms After Delivery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Constipation, pelvic discomfort and abdominal soreness can linger.</li>
                <li>Postnatal follow-up ensures healing is on track.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags: When Not to Wait
              </h2>

              <p className="mb-4 text-gray-700">
                Seek urgent medical help if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe, stabbing abdominal pain.</li>
                <li>Pain with fainting, dizziness or a rapid heartbeat.</li>
                <li>Heavy bleeding or pain along with a missed period.</li>
                <li>
                  High fever with belly pain and foul-smelling discharge.
                </li>
                <li>Repeated vomiting that you cannot control.</li>
                <li>A swollen, rigid or extremely tender abdomen.</li>
                <li>Blood in vomit or stool.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                These can indicate emergencies such as ectopic pregnancy,
                ruptured cyst, appendicitis or serious infection.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Women&apos;s Health Specialist Finds the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                A structured approach prevents guesswork:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed conversation:</strong> Timing of symptoms,
                  relation to periods, diet, bowel habits, pregnancy possibility
                  and family history.
                </li>
                <li>
                  <strong>Physical examination:</strong> Gentle abdominal check,
                  and pelvic examination only when needed.
                </li>
                <li>
                  <strong>Ultrasound:</strong> Checks the uterus, ovaries and
                  surrounding pelvis.
                </li>
                <li>
                  <strong>Lab tests:</strong> Blood tests for anaemia, infection
                  and hormones, plus urine tests.
                </li>
                <li>
                  <strong>Advanced evaluation when required:</strong>{" "}
                  Hysteroscopy to look inside the uterus, or diagnostic
                  laparoscopy to see the pelvis directly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment: Matched to the Cause
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines for pain, acidity or infection.</li>
                <li>
                  Hormonal therapy for painful periods, endometriosis or PCOS.
                </li>
                <li>Diet and lifestyle guidance for lasting relief.</li>
                <li>
                  Pregnancy-safe advice for nausea, heartburn and constipation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Minimally Invasive Surgery (When Needed)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic cystectomy:</strong> removal of ovarian
                  cysts while preserving fertility.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy:</strong> removal of fibroids
                  while preserving the uterus.
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> excision to relieve
                  pelvic pain.
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy:</strong> removal of uterine
                  polyps without cuts.
                </li>
                <li>
                  <strong>Laparoscopic hysterectomy:</strong> an option when the
                  uterus must be removed.
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> keyhole repair of prolapse.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Keyhole (Laparoscopic) Surgery Helps
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tiny incisions and smaller scars.</li>
                <li>Less post-operative pain.</li>
                <li>Shorter hospital stay.</li>
                <li>Faster return to normal routine.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri and Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility centre
                in Moradabad guided by the philosophy &quot;Her Health First.&quot;
                The team listens first, then applies advanced technology with
                empathy and patience.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Services:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gynaecology and 3D laparoscopy.</li>
                <li>Fertility and IVF.</li>
                <li>Pregnancy and birthing care.</li>
                <li>Antenatal services and normal delivery.</li>
                <li>Endometriosis surgery.</li>
                <li>Paediatric care.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Technology:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>High-definition 3D laparoscopic surgery.</li>
                <li>3D and 4D ultrasound.</li>
                <li>Time-lapse imaging incubator.</li>
                <li>AI-powered semen analysis and DNA integrity testing.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What patients value:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clear explanations in a respectful environment.</li>
                <li>
                  Continuity of care from the first visit through follow-ups.
                </li>
                <li>
                  A focus on preserving fertility and choosing the least invasive
                  option.
                </li>
                <li>
                  Care for every life stage, from adolescence to motherhood.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Daily Habits for a Calmer Stomach
              </h2>

              <p className="mb-4 text-gray-700">
                These support treatment but never replace a diagnosis:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat at regular times and avoid long gaps between meals.</li>
                <li>
                  Include fibre: fruits, vegetables, whole grains and pulses.
                </li>
                <li>Drink enough water through the day.</li>
                <li>Limit very spicy, oily and heavily processed foods.</li>
                <li>
                  Walk or do gentle yoga daily to support digestion.
                </li>
                <li>Sleep well and manage stress.</li>
                <li>
                  Keep a symptom diary with your cycle dates to share with your
                  doctor.
                </li>
                <li>
                  Avoid repeated self-medication with painkillers or antacids.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your Appointment
              </h2>

              <p className="mb-4 text-gray-700">Bring:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous prescriptions, scans and reports.</li>
                <li>A list of current medicines and supplements.</li>
                <li>Dates of your last periods.</li>
                <li>
                  Notes on when symptoms occur and what makes them better or
                  worse.
                </li>
                <li>
                  Your questions, written down so you don&apos;t forget.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact and Appointment Details
              </h2>

              <p className="mb-4 text-gray-700">
                Women&apos;s stomach problems deserve more than a quick antacid.
                When symptoms follow your cycle, sit low in the abdomen or come
                with bleeding, discharge or fertility concerns, the answer often
                lies in women&apos;s health. A trusted female gynaecologist can
                find the true cause, treat it gently and guide you to other
                specialists if the problem is digestive.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec, Moradabad</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call for Appointment</p>
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
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
                        Pradesh 244001
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
                FAQs
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
