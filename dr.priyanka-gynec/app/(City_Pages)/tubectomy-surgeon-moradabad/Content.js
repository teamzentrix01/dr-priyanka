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

export default function TubectomySurgeon() {
  const faqs = [
    {
      q: "What is a tubectomy?",
      a: "It's a permanent contraception procedure that blocks the fallopian tubes to prevent pregnancy.",
    },
    {
      q: "Who performs tubectomy surgery in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers laparoscopic tubectomy as part of her surgical services.",
    },
    {
      q: "Is laparoscopic tubectomy a major surgery?",
      a: "No, it's a minimally invasive, day-care procedure with small incisions and a relatively quick recovery.",
    },
    {
      q: "Can tubectomy be done right after delivery?",
      a: "Yes, postpartum tubectomy can be performed shortly after vaginal delivery or during a cesarean section.",
    },
    {
      q: "Does tubectomy affect hormones or periods?",
      a: "No, it doesn't affect hormone levels, and most women continue to have regular periods afterward.",
    },
    {
      q: "Is tubectomy reversible?",
      a: "It's intended to be permanent; while reversal procedures exist, success isn't guaranteed.",
    },
    {
      q: "How do I book a consultation for tubectomy?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "How long is the recovery after laparoscopic tubectomy?",
      a: "Many women resume light activities within a day or two, with full recovery typically within one to two weeks.",
    },
    {
      q: "Does tubectomy protect against sexually transmitted infections?",
      a: "No, it only prevents pregnancy; barrier methods are still needed for STI protection.",
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
                Tubectomy Surgeon in Moradabad: A Complete Guide to Female
                Sterilization
              </h1>

              <p className="mb-4 text-gray-700">
                For couples who&apos;ve decided their family is complete,
                tubectomy — also known as tubal ligation or female sterilization
                — offers a safe, permanent, and highly effective form of
                contraception. It&apos;s one of the most commonly performed
                family planning procedures worldwide, yet many women still have
                questions and uncertainties about what the procedure actually
                involves, how it&apos;s performed, and what recovery looks like.
              </p>

              <p className="text-gray-700">
                In Moradabad, choosing an experienced tubectomy surgeon matters
                significantly, since the procedure&apos;s safety and the speed
                of recovery depend heavily on surgical skill and technique. This
                article covers everything you need to know about tubectomy, from
                how it works to what to expect during recovery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Tubectomy
              </h2>

              <p className="mb-4 text-gray-700">
                Tubectomy is a surgical procedure that permanently prevents
                pregnancy by blocking, cutting, or removing the fallopian tubes,
                preventing the egg from meeting sperm. Key facts include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is considered a permanent form of contraception, intended
                  for women or couples certain they don&apos;t want future
                  pregnancies
                </li>
                <li>
                  It doesn&apos;t affect hormone levels or menstrual cycles,
                  since it only blocks the fallopian tubes rather than altering
                  ovarian function
                </li>
                <li>
                  It&apos;s highly effective, among the most reliable forms of
                  contraception available
                </li>
                <li>
                  It doesn&apos;t provide protection against sexually
                  transmitted infections, so barrier methods may still be needed
                  for that purpose
                </li>
                <li>
                  It&apos;s different from a hysterectomy, since the uterus and
                  ovaries remain intact and the menstrual cycle continues as
                  before
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Tubectomy Procedures
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Laparoscopic Tubectomy
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Performed using minimally invasive keyhole surgery with
                      small incisions
                    </li>
                    <li>
                      Involves the use of a laparoscope, a thin instrument with
                      a camera, to visualize and access the fallopian tubes
                    </li>
                    <li>
                      Generally allows for a faster recovery and less
                      post-operative discomfort compared to traditional open
                      surgery
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Mini-Laparotomy
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Involves a slightly larger incision than laparoscopic
                      surgery, but still smaller than a full open procedure
                    </li>
                    <li>
                      Often used in postpartum tubectomy performed shortly after
                      delivery, when the uterus is enlarged and the tubes are
                      more easily accessible
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Postpartum Tubectomy
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Performed within a day or two after vaginal delivery, or
                      at the same time as a cesarean section
                    </li>
                    <li>
                      Convenient for women who&apos;ve decided on permanent
                      contraception and are already in the hospital for delivery
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Interval Tubectomy
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Performed at any time unrelated to a recent pregnancy,
                      typically as a planned, scheduled procedure
                    </li>
                    <li>
                      Usually done laparoscopically as a day-care surgery
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for Tubectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women who are certain they don&apos;t want future pregnancies,
                  since the procedure is intended to be permanent
                </li>
                <li>
                  Couples who&apos;ve completed their family and are looking for
                  a reliable, long-term contraception solution
                </li>
                <li>
                  Women for whom other contraceptive methods aren&apos;t suitable
                  or preferred, due to side effects or personal reasons
                </li>
                <li>
                  Women without medical conditions that would make surgery or
                  anesthesia significantly risky, as assessed by their doctor
                </li>
                <li>
                  Women who understand that reversal is not guaranteed, even
                  though certain reversal procedures exist in specific cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important Considerations Before Choosing Tubectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Permanence</strong> — while reversal procedures exist,
                  they aren&apos;t always successful, and tubectomy should be
                  considered a permanent decision
                </li>
                <li>
                  <strong>No protection against STIs</strong> — barrier methods
                  are still needed if there&apos;s a risk of sexually
                  transmitted infection
                </li>
                <li>
                  <strong>Timing flexibility</strong> — the procedure can be
                  done postpartum or as a separate, planned surgery
                </li>
                <li>
                  <strong>Discussion with your partner</strong>, if applicable,
                  since this is often a significant shared family planning
                  decision
                </li>
                <li>
                  <strong>Understanding alternatives</strong>, such as
                  long-acting reversible contraception, which may be worth
                  discussing if there&apos;s any uncertainty about permanence
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a Laparoscopic Tubectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed under general or regional anesthesia, depending on
                  the specific case and hospital protocol
                </li>
                <li>
                  Small incisions are made, typically near the belly button,
                  through which the laparoscope and surgical instruments are
                  inserted
                </li>
                <li>
                  The fallopian tubes are identified and blocked, using clips,
                  rings, or by cutting and tying the tubes, depending on the
                  technique used
                </li>
                <li>
                  The procedure typically takes around 20 to 30 minutes, though
                  this can vary based on individual factors
                </li>
                <li>
                  Performed as a day-care procedure in many cases, meaning the
                  patient can often go home the same day
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Tubectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most women can resume light activities within a day or two,
                  though this varies based on the specific procedure and
                  individual healing
                </li>
                <li>
                  Some soreness, bloating, or shoulder pain (from the gas used
                  during laparoscopy) is common in the first day or two
                </li>
                <li>
                  Avoid heavy lifting or strenuous activity for a period as
                  advised by your surgeon, typically around one to two weeks
                </li>
                <li>
                  Incision sites are small, and stitches, if used, typically
                  dissolve or are removed at a follow-up visit
                </li>
                <li>
                  Normal daily activities and light work can usually resume
                  within a few days, though this depends on individual recovery
                  and the nature of your work
                </li>
                <li>
                  A follow-up appointment is generally scheduled to confirm
                  proper healing
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing Laparoscopic Tubectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Minimally invasive, with smaller incisions compared to
                  traditional open surgery
                </li>
                <li>
                  Faster recovery time, allowing most women to return to normal
                  activities sooner
                </li>
                <li>
                  Reduced post-operative pain compared to older surgical
                  techniques
                </li>
                <li>
                  Lower risk of infection and complications, associated with
                  smaller incisions
                </li>
                <li>
                  High success rate, among the most effective contraceptive
                  methods available
                </li>
                <li>
                  No ongoing maintenance required, unlike other contraceptive
                  methods that need regular attention or replacement
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing an Experienced Tubectomy Surgeon Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgical skill directly affects safety, particularly given the
                  delicate nature of identifying and correctly blocking the
                  fallopian tubes
                </li>
                <li>
                  Experience reduces the risk of complications, including
                  bleeding, infection, or incomplete tubal blockage
                </li>
                <li>
                  An experienced surgeon can better handle unexpected findings
                  during surgery, such as unusual pelvic anatomy
                </li>
                <li>
                  Faster surgical time generally means less anesthesia exposure,
                  contributing to a smoother recovery
                </li>
                <li>
                  Clear pre- and post-operative guidance from an experienced
                  surgeon helps ensure the best possible recovery experience
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Tubectomy Surgeon in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers laparoscopic
                tubectomy as part of her surgical practice in Moradabad.
                According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her services relevant to permanent contraception include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic Sterilization</strong>, explicitly listed
                  among her specialized procedures, described as a safe,
                  permanent keyhole tubal ligation performed as a day-care
                  procedure
                </li>
                <li>
                  <strong>3D laparoscopic surgical expertise</strong>,
                  supporting precise, minimally invasive technique throughout
                  the procedure
                </li>
                <li>
                  <strong>Postnatal care coordination</strong>, useful for women
                  considering postpartum tubectomy shortly after delivery
                </li>
                <li>
                  <strong>A &quot;Her Health First&quot; approach</strong>,
                  ensuring the decision to undergo tubectomy is made after a
                  clear, unhurried discussion of the procedure, its permanence,
                  and alternatives
                </li>
                <li>
                  <strong>Structured follow-up care</strong>, supporting a
                  smooth recovery after the procedure
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently highlight
                feeling well-informed and supported throughout their treatment —
                an important quality when making a significant, permanent
                decision like tubectomy. The clinic is located in Gandhi Nagar,
                Moradabad, making it accessible to patients from across the city
                and surrounding areas.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Tubectomy Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Being well-prepared can help the process go smoothly and reduce
                pre-surgery anxiety:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discuss your full medical history with your surgeon, including
                  any previous surgeries or existing health conditions
                </li>
                <li>
                  Follow pre-operative fasting instructions, typically avoiding
                  food and drink for a specified period before anesthesia
                </li>
                <li>
                  Arrange for someone to accompany you to and from the hospital,
                  since you won&apos;t be able to drive after anesthesia
                </li>
                <li>
                  Plan for a few days of rest at home following the procedure,
                  even though recovery is generally quick
                </li>
                <li>
                  Wear comfortable, loose clothing on the day of surgery
                </li>
                <li>
                  Ask about any medications you&apos;re currently taking, since
                  some may need to be paused before surgery
                </li>
                <li>
                  Prepare your home in advance, such as arranging help with
                  household tasks or childcare for the first day or two after
                  surgery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tubectomy Compared to Other Contraceptive Options
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Permanence</strong> — tubectomy is intended to be
                  permanent, while methods like IUDs, injectables, or pills are
                  reversible
                </li>
                <li>
                  <strong>Maintenance</strong> — tubectomy requires no ongoing
                  action once performed, unlike pills that need daily use or
                  injectables that need periodic renewal
                </li>
                <li>
                  <strong>Effectiveness</strong> — tubectomy is among the most
                  effective contraceptive methods available, comparable to or
                  exceeding many reversible options
                </li>
                <li>
                  <strong>Hormonal impact</strong> — unlike hormonal
                  contraceptives, tubectomy doesn&apos;t involve any hormonal
                  changes
                </li>
                <li>
                  <strong>Suitability</strong> — tubectomy is best suited for
                  those who are certain about not wanting future pregnancies,
                  while reversible methods suit those who may want children
                  later
                </li>
                <li>
                  <strong>Partner involvement</strong> — some couples also
                  consider vasectomy as an alternative permanent option for the
                  male partner, which is a less invasive procedure worth
                  discussing together
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Your Tubectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Am I a good candidate for laparoscopic tubectomy, or would
                  another approach be more suitable in my case?
                </li>
                <li>
                  What type of anesthesia will be used, and what are the
                  associated risks?
                </li>
                <li>
                  How soon after delivery can I have a postpartum tubectomy, if
                  that&apos;s my preference?
                </li>
                <li>
                  What does the recovery process typically look like, and when
                  can I resume normal activities?
                </li>
                <li>
                  What are the chances of the procedure failing, and what would
                  that mean?
                </li>
                <li>
                  Are there alternative contraceptive options I should consider
                  before deciding on a permanent procedure?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Tubectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Tubectomy affects hormones or
                  causes early menopause.&quot;{" "}
                  <strong>Fact:</strong> It doesn&apos;t affect hormone
                  production, since the ovaries remain fully intact and
                  functional.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;It significantly changes your
                  menstrual cycle.&quot;{" "}
                  <strong>Fact:</strong> Most women continue to have their
                  periods as before, since tubectomy only blocks the fallopian
                  tubes.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Tubectomy always requires major
                  open surgery.&quot;{" "}
                  <strong>Fact:</strong> Laparoscopic tubectomy is widely
                  available and generally involves smaller incisions and faster
                  recovery than older surgical techniques.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Tubectomy can always be reversed
                  if you change your mind.&quot;{" "}
                  <strong>Fact:</strong> Reversal procedures exist, but
                  success isn&apos;t guaranteed, so the decision should be
                  treated as permanent.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Recovery always takes several
                  weeks.&quot;{" "}
                  <strong>Fact:</strong> Many women recover from laparoscopic
                  tubectomy and resume light activities within just a few days.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Book Your Appointment
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Laparoscopic Surgeon (MBBS, MS)
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