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

export default function TopFemaleGynaecologist() {
  const faqs = [
    {
      q: "Who is a top female gynaecologist in Moradabad?",
      a: "Dr. Priyanka Pachauri of Dr. Priyanka Gynaec is widely recognised as a leading female gynaecologist for women's health.",
    },
    {
      q: "Why do many women prefer a female gynaecologist?",
      a: "Many feel more comfortable discussing sensitive topics and undergoing examinations with a female doctor.",
    },
    {
      q: "Does the clinic offer both surgical and non-surgical care?",
      a: "Yes, including 3D laparoscopic surgery alongside general gynaecology and fertility care.",
    },
    {
      q: "Can young, unmarried women consult here too?",
      a: "Yes, gynaecological concerns like irregular periods or PCOS can affect women at any age.",
    },
    {
      q: "How can I book an appointment?",
      a: "Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
    },
    {
      q: "Where is the clinic located?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001.",
    },
    {
      q: "Does the clinic offer fertility and IVF treatment?",
      a: "Yes, personalised fertility and IVF treatments are offered with advanced lab support.",
    },
    {
      q: "Is gynaecologistmoradabad.com a genuine, well-built website?",
      a: "Yes, it clearly lists services, technology used, patient testimonials, and verified contact details.",
    },
    {
      q: "Can I email the clinic for queries?",
      a: "Yes, you can email drpriyanka@gynaecologistmoradabad.com.",
    },
    {
      q: "Is a female doctor equally skilled in surgery compared to a male doctor?",
      a: "Yes, gender has no bearing on surgical skill; experience and training determine expertise.",
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
                Top Female Gynaecologist in Moradabad: A Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                For many women, the choice between a male and female
                gynaecologist isn&apos;t just a preference — it&apos;s a factor
                that directly affects how comfortable, understood, and open they
                feel during consultations about deeply personal health matters.
                A skilled female gynaecologist often brings both clinical
                expertise and a shared understanding of the female experience,
                from puberty through menopause.
              </p>

              <p className="text-gray-700">
                This guide explains why many women specifically seek a female
                specialist, what to look for, and why Dr. Priyanka Pachauri has
                become a trusted name among women searching for a top female
                gynaecologist in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Many Women Prefer a Female Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                While the gender of a doctor doesn&apos;t determine medical
                skill, many women find real, practical benefits in choosing a
                female specialist for their reproductive health needs:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Greater ease discussing sensitive topics like periods, sexual
                  health, or intimate discomfort
                </li>
                <li>
                  A sense of shared understanding, since a female doctor has
                  personal familiarity with the female body and its changes
                </li>
                <li>
                  Reduced hesitation during physical examinations, especially
                  for first-time patients or younger women
                </li>
                <li>
                  More open conversations about topics some women find
                  embarrassing to discuss with a male doctor
                </li>
                <li>
                  Cultural or personal comfort, which matters significantly in
                  many Indian households and communities
                </li>
                <li>
                  A feeling of being truly heard, rather than rushed through a
                  sensitive conversation
                </li>
                <li>
                  Greater comfort for young unmarried women seeking
                  gynaecological advice for the first time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Female Gynaecologist &quot;Top Rated&quot;?
              </h2>

              <p className="mb-4 text-gray-700">
                Being a woman alone doesn&apos;t automatically make a doctor the
                right choice — genuine expertise and patient-centred care matter
                just as much. Look for these qualities together:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Strong medical qualifications</strong> – MS/DGO in
                  Obstetrics & Gynaecology, along with relevant fellowship
                  training
                </li>
                <li>
                  <strong>Years of hands-on clinical experience</strong> –
                  across pregnancy, surgery, and general gynaecological care
                </li>
                <li>
                  <strong>A genuinely empathetic communication style</strong> –
                  explaining conditions and treatment options patiently, without
                  medical jargon
                </li>
                <li>
                  <strong>A private, comfortable clinic environment</strong> –
                  where patients feel safe discussing personal concerns
                </li>
                <li>
                  <strong>A broad range of services</strong> – covering
                  everything from routine check-ups to complex surgery under one
                  roof
                </li>
                <li>
                  <strong>Modern technology and equipment</strong> – supporting
                  accurate diagnosis and safer treatment
                </li>
                <li>
                  <strong>Strong patient testimonials and referrals</strong> –
                  especially from other women who felt genuinely cared for
                </li>
                <li>
                  <strong>Respect for patient autonomy</strong> – involving
                  women fully in decisions about their own bodies and care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Areas Where a Female Gynaecologist&apos;s Understanding Matters
                Most
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Menstrual health concerns</strong> – many women feel
                  more comfortable discussing irregular, heavy, or painful
                  periods with a female doctor
                </li>
                <li>
                  <strong>Sexual health and intimacy-related concerns</strong> –
                  often easier to discuss openly with a female specialist
                </li>
                <li>
                  <strong>Pregnancy and childbirth</strong> – many women feel
                  emotionally supported having a female doctor guide them
                  through labour and delivery
                </li>
                <li>
                  <strong>Menopause and hormonal changes</strong> – a female
                  doctor&apos;s own life-stage understanding can add depth to
                  these conversations
                </li>
                <li>
                  <strong>Body image and physical examination comfort</strong> –
                  reduces anxiety, especially for younger or first-time patients
                </li>
                <li>
                  <strong>PCOS and hormonal disorders</strong> – often
                  accompanied by emotional or body-image related struggles that
                  benefit from empathetic, understanding care
                </li>
                <li>
                  <strong>Postpartum recovery</strong> – both physical and
                  emotional support during a vulnerable period after childbirth
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri: A Top Female Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri, founder of Dr. Priyanka Gynaec, is widely
                recognised as a leading female gynaecologist in Moradabad,
                combining strong clinical credentials with a deeply
                patient-centred approach. Her clinic&apos;s guiding philosophy,
                &quot;Her Health First,&quot; reflects a commitment to placing
                every woman&apos;s comfort, dignity, and individual story at
                the centre of her care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comprehensive Services Offered
              </h2>

              <p className="mb-4 text-gray-700">
                Her practice covers a full spectrum of women&apos;s health needs
                under one roof:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Gynaecology and general women&apos;s health consultations</li>
                <li>3D laparoscopic gynaecological surgery</li>
                <li>Fertility evaluation and personalised IVF treatment</li>
                <li>Pregnancy, antenatal, and postnatal (birthing) care</li>
                <li>
                  Normal delivery with a focus on minimal medical intervention
                </li>
                <li>
                  Laparoscopic cystectomy for ovarian cysts while preserving
                  fertility
                </li>
                <li>Laparoscopic myomectomy for uterine fibroids</li>
                <li>
                  Laparoscopic hysterectomy with faster, minimally invasive
                  recovery
                </li>
                <li>Sacrocolpopexy for uterine and vaginal vault prolapse</li>
                <li>
                  Laparoscopic sterilisation as a day-care procedure
                </li>
                <li>
                  Diagnostic hysteroscopy and hysteroscopic polypectomy
                </li>
                <li>
                  Endometriosis surgery and chronic pelvic pain management
                </li>
                <li>Paediatric consultations, vaccinations, and newborn care</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Technology That Supports Confident, Accurate Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  High-definition 3D laparoscopic surgical systems for precision
                  and faster recovery
                </li>
                <li>
                  3D & 4D ultrasound machines (Voluson E22BT2024) for detailed
                  pregnancy and pelvic imaging
                </li>
                <li>
                  GERI time-lapse imaging incubator, used in advanced IVF embryo
                  monitoring
                </li>
                <li>
                  AI-powered semen analysis and DNA integrity testing for
                  complete fertility evaluation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Four Pillars Behind Her Reputation
              </h2>

              <p className="mb-4 text-gray-700">
                According to the clinic&apos;s own patient communication, its
                strong reputation is built on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Expertise with heart</strong> – gold medal academic
                  credentials and international fellowship training across
                  laparoscopy, fertility, and endometriosis care
                </li>
                <li>
                  <strong>Continuity you can count on</strong> – an integrated
                  team that remembers each patient&apos;s history and concerns
                  across every visit
                </li>
                <li>
                  <strong>Outcomes patients hope for</strong> – successful
                  pregnancies after years of difficulty, pain-free life after
                  endometriosis treatment, and fertility-preserving surgery
                </li>
                <li>
                  <strong>Trust earned daily</strong> – reputation built through
                  mothers referring daughters and friends referring friends,
                  rather than paid advertising alone
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Life Stages Where a Female Gynaecologist Provides Continuous
                Support
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Adolescence</strong> – guiding young women through
                  puberty, first periods, and initial gynaecological concerns
                  with sensitivity
                </li>
                <li>
                  <strong>Reproductive years</strong> – supporting contraception
                  decisions, fertility planning, and pregnancy care
                </li>
                <li>
                  <strong>Pregnancy and childbirth</strong> – offering hands-on,
                  empathetic guidance through one of life&apos;s most
                  significant experiences
                </li>
                <li>
                  <strong>Postpartum period</strong> – addressing physical
                  recovery alongside emotional wellbeing after delivery
                </li>
                <li>
                  <strong>Perimenopause and menopause</strong> – helping women
                  navigate hormonal changes with informed, compassionate care
                </li>
                <li>
                  <strong>Ongoing preventive care</strong> – encouraging regular
                  screenings like Pap smears throughout adult life
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step-by-Step: How to Choose the Right Female Gynaecologist in
                Moradabad
              </h2>

              <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Step 1: Check qualifications</strong> – confirm
                  MS/DGO credentials and relevant fellowship training.
                </li>
                <li>
                  <strong>Step 2: Review the range of services</strong> – ensure
                  the doctor covers your specific health needs.
                </li>
                <li>
                  <strong>Step 3: Look at available technology</strong> – modern
                  equipment supports more accurate diagnosis and safer
                  treatment.
                </li>
                <li>
                  <strong>Step 4: Read patient testimonials</strong> – look for
                  mentions of comfort, empathy, and clear communication.
                </li>
                <li>
                  <strong>Step 5: Visit for an initial consultation</strong> –
                  notice how comfortable and heard you feel during the
                  conversation.
                </li>
                <li>
                  <strong>Step 6: Check contact accessibility</strong> – phone
                  and WhatsApp availability make follow-up questions easier.
                </li>
                <li>
                  <strong>Step 7: Trust your own comfort level</strong> – the
                  right doctor should make you feel safe discussing anything,
                  without judgment.
                </li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Choosing a Female Gynaecologist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;A male doctor and female doctor offer the same
                  experience&quot;</strong> – While skill matters most, many
                  women report feeling more at ease with a female doctor for
                  deeply personal topics
                </li>
                <li>
                  <strong>&quot;Female doctors are less experienced in
                  surgery&quot;</strong> – Gender has no bearing on surgical
                  skill; many female gynaecologists are highly trained
                  laparoscopic surgeons
                </li>
                <li>
                  <strong>&quot;It only matters for pregnancy care&quot;</strong>{" "}
                  – Comfort with a female doctor matters across the entire span
                  of reproductive health, not just pregnancy
                </li>
                <li>
                  <strong>&quot;Younger, unmarried women don&apos;t need a
                  gynaecologist&quot;</strong> – Many gynaecological concerns,
                  like irregular periods or PCOS, can affect women at any age
                </li>
                <li>
                  <strong>&quot;All clinics offer the same level of privacy and
                  comfort&quot;</strong> – The environment and approach of the
                  clinic can significantly affect how safe and respected a
                  patient feels
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Choosing a Local Female Specialist in Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Faster access during pregnancy emergencies or urgent
                  gynaecological concerns
                </li>
                <li>
                  Easier, more frequent follow-up visits without long-distance
                  travel
                </li>
                <li>
                  A more comfortable, familiar setting for discussing sensitive
                  health matters
                </li>
                <li>
                  Lower overall treatment cost compared to metro-city hospitals
                </li>
                <li>
                  Continuity of care with the same trusted doctor across every
                  life stage
                </li>
                <li>
                  Family support nearby during recovery after surgery or
                  delivery
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details – Dr. Priyanka Gynaec, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist & Fertility Specialist (MBBS, MS)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Call for
                      Appointment</p>
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
                        Pradesh, 244001
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Website Analysis: gynaecologistmoradabad.com
              </h2>

              <p className="mb-4 text-gray-700">
                Since a short analysis of the official website was requested,
                here is a quick and honest breakdown:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Comfort-first, personal messaging</strong> – The
                  homepage tagline &quot;Her Health First&quot; clearly
                  reflects a female-centred, empathetic approach that resonates
                  with women searching specifically for a female specialist.
                </li>
                <li>
                  <strong>Comprehensive services listing</strong> – All 13
                  services, from laparoscopy to paediatric care, are listed
                  individually, showing the full depth of expertise available
                  under one roof.
                </li>
                <li>
                  <strong>Strong technology proof points</strong> – Mentions of
                  3D laparoscopy, 4D ultrasound, GERI time-lapse incubator, and
                  AI semen analysis add credibility to the clinic&apos;s
                  clinical capability.
                </li>
                <li>
                  <strong>Active, updated blog section</strong> – Recent
                  articles on PCOS, endometriosis, and trimester-wise pregnancy
                  care show ongoing engagement with women&apos;s health topics.
                </li>
                <li>
                  <strong>Easy-to-find contact details</strong> – Phone,
                  WhatsApp, and email are clearly visible in both header and
                  footer sections.
                </li>
                <li>
                  <strong>Genuine patient testimonials</strong> – Real feedback,
                  such as the review from patient &quot;Rudri J,&quot; adds
                  authentic social proof.
                </li>
                <li>
                  <strong>Local SEO basics covered</strong> – A complete clinic
                  address with pin code appears in the footer, supporting
                  visibility in local Moradabad searches.
                </li>
                <li>
                  <strong>Improvement opportunity</strong> – Adding a page that
                  speaks directly to the personal, comfort-driven reasons women
                  choose a female gynaecologist could further strengthen the
                  website&apos;s emotional connection with prospective patients.
                </li>
              </ul>
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