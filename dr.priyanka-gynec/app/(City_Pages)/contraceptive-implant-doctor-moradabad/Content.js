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

export default function ContraceptiveImplantDoctor() {
  const faqs = [
    {
      q: "What is a contraceptive implant?",
      a: "It's a small hormonal rod inserted under the skin of the upper arm that provides long-term, reversible contraception.",
    },
    {
      q: "Who can I consult about contraceptive implants in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers family planning counselling and contraceptive guidance.",
    },
    {
      q: "Is a contraceptive implant reversible?",
      a: "Yes, fertility typically returns quickly after the implant is removed.",
    },
    {
      q: "Does the implant protect against STIs?",
      a: "No, it only prevents pregnancy; barrier methods are still needed for STI protection.",
    },
    {
      q: "Is the insertion procedure painful?",
      a: "It's performed under local anesthesia and is generally quick, with only mild discomfort at the insertion site afterward.",
    },
    {
      q: "Can I use a contraceptive implant while breastfeeding?",
      a: "Generally yes, progestin-only methods are usually considered compatible with breastfeeding, though it's best to confirm with your doctor.",
    },
    {
      q: "How do I book a consultation for contraceptive counselling?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "What if I experience side effects after getting an implant?",
      a: "You should discuss any side effects with your doctor, who can help manage them or consider alternative options if needed.",
    },
    {
      q: "Does the clinic also offer permanent contraception options?",
      a: "Yes, laparoscopic sterilization is available for women seeking a permanent contraceptive solution.",
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
                Contraceptive Implant Doctor in Moradabad: A Complete Guide to
                Long-Acting Reversible Contraception
              </h1>

              <p className="mb-4 text-gray-700">
                Choosing the right contraceptive method is a deeply personal
                decision, and for many women, a long-acting reversible option
                like a contraceptive implant offers an appealing balance between
                effectiveness and flexibility. Unlike permanent procedures, an
                implant provides years of reliable contraception while still
                allowing a woman to plan for pregnancy in the future, simply by
                having it removed.
              </p>

              <p className="text-gray-700">
                In Moradabad, understanding how contraceptive implants work, who
                they&apos;re suitable for, and finding a doctor who can guide
                this decision properly is an important step toward confident
                family planning. This article explains what a contraceptive
                implant involves, how it compares to other methods, what to
                expect from insertion to removal, and how Dr. Priyanka Pachauri
                supports women navigating contraceptive choices in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Contraceptive Implant
              </h2>

              <p className="mb-4 text-gray-700">
                A contraceptive implant is a small, flexible rod inserted just
                under the skin of the upper arm, which releases a steady, low
                dose of hormone to prevent pregnancy. Key facts include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is a long-acting reversible contraceptive (LARC),
                  typically effective for several years depending on the
                  specific type used
                </li>
                <li>
                  It works primarily by preventing ovulation, along with
                  thickening cervical mucus to further reduce the chance of
                  pregnancy
                </li>
                <li>
                  It is one of the most effective reversible contraceptive
                  methods available, with a very low failure rate
                </li>
                <li>
                  Fertility generally returns quickly after removal, making it a
                  good option for women who want effective contraception now but
                  may want children later
                </li>
                <li>
                  It requires a simple in-clinic procedure for both insertion
                  and removal, performed under local anesthesia
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Contraceptive Implant Works
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Releases a low, steady dose of progestin hormone into the
                  bloodstream over time
                </li>
                <li>
                  Primarily prevents ovulation, meaning no egg is released for
                  sperm to fertilize
                </li>
                <li>
                  Thickens cervical mucus, making it more difficult for sperm to
                  reach an egg if ovulation does occur
                </li>
                <li>
                  Provides continuous protection without requiring daily
                  attention, unlike birth control pills
                </li>
                <li>
                  Does not require partner cooperation or timing around
                  intercourse, unlike barrier methods
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is a Good Candidate for a Contraceptive Implant
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women looking for highly effective, long-term contraception
                  without a permanent commitment
                </li>
                <li>
                  Women who struggle to remember daily pills or prefer a
                  &quot;set it and forget it&quot; method
                </li>
                <li>
                  Breastfeeding mothers, since progestin-only methods are
                  generally considered compatible with breastfeeding
                </li>
                <li>
                  Women who cannot use estrogen-containing contraceptives due to
                  certain health conditions
                </li>
                <li>
                  Women planning to delay pregnancy for several years but who
                  want the option to conceive sooner if their plans change
                </li>
                <li>
                  Women who&apos;ve had side effects with other hormonal methods
                  and want to discuss alternative options with their doctor
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Contraceptive Implants
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Highly effective, among the most reliable reversible
                  contraceptive methods
                </li>
                <li>
                  Long-lasting protection, reducing the need for frequent
                  attention or renewal
                </li>
                <li>
                  Reversible, with fertility typically returning soon after
                  removal
                </li>
                <li>
                  Convenient, requiring no daily action once inserted
                </li>
                <li>
                  Doesn&apos;t interfere with intercourse, unlike barrier
                  methods
                </li>
                <li>
                  Suitable for many women who can&apos;t use estrogen-based
                  contraceptives
                </li>
                <li>
                  Can help manage certain conditions, such as heavy or painful
                  periods, in some cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Potential Side Effects and Considerations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Changes in menstrual bleeding patterns, ranging from lighter
                  periods to irregular spotting, are common, especially in the
                  first few months
                </li>
                <li>
                  No protection against sexually transmitted infections, meaning
                  barrier methods are still needed for that purpose
                </li>
                <li>
                  Requires a minor procedure for insertion and removal, though
                  both are generally quick and performed under local anesthesia
                </li>
                <li>
                  Some women experience mild side effects, such as headaches,
                  mood changes, or weight fluctuations, though these vary
                  significantly between individuals
                </li>
                <li>
                  Occasional difficulty with removal, particularly if the
                  implant has moved slightly, which is why insertion by an
                  experienced provider matters
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Insertion Procedure
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed in a clinical setting, typically taking just a few
                  minutes
                </li>
                <li>
                  Local anesthesia is used to numb the insertion area on the
                  inner upper arm
                </li>
                <li>
                  A small applicator device inserts the implant just under the
                  skin through a tiny incision
                </li>
                <li>
                  No stitches are usually required, and a small bandage is
                  applied afterward
                </li>
                <li>
                  Mild bruising or tenderness at the insertion site is common
                  for a few days afterward
                </li>
                <li>
                  The implant should be palpable under the skin, and your
                  provider will confirm correct placement
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Removal Procedure
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Also performed under local anesthesia, typically a
                  straightforward outpatient procedure
                </li>
                <li>
                  A small incision is made near the implant site, and the
                  implant is gently removed
                </li>
                <li>
                  Can be done at any point during the implant&apos;s effective
                  period, whether due to planning a pregnancy, experiencing side
                  effects, or reaching the end of its effective duration
                </li>
                <li>
                  A new implant can be inserted immediately after removal, if
                  continued contraception is desired
                </li>
                <li>
                  Fertility typically returns quickly, allowing women to begin
                  trying to conceive soon after removal if desired
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comparing Contraceptive Implants to Other Methods
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Versus birth control pills</strong> — implants
                  don&apos;t require daily attention and have a much lower risk
                  of user error affecting effectiveness
                </li>
                <li>
                  <strong>Versus IUDs</strong> — both are long-acting and highly
                  effective, though implants are placed in the arm rather than
                  the uterus, and some women prefer one placement location over
                  the other
                </li>
                <li>
                  <strong>Versus injectable contraceptives</strong> — implants
                  don&apos;t require repeat clinic visits every few months,
                  unlike injections
                </li>
                <li>
                  <strong>Versus barrier methods</strong> — implants offer
                  significantly higher effectiveness and don&apos;t require
                  action at the time of intercourse
                </li>
                <li>
                  <strong>Versus permanent sterilization</strong> — implants are
                  fully reversible, making them suitable for women who
                  aren&apos;t certain about ruling out future pregnancies
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Professional Guidance Matters for Choosing Contraception
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Every woman&apos;s health history is different, and
                  what&apos;s suitable for one person may not be ideal for
                  another
                </li>
                <li>
                  A doctor can assess for contraindications, such as certain
                  medical conditions that may affect which method is safest
                </li>
                <li>
                  Proper insertion technique matters, reducing the risk of
                  complications or difficulty with future removal
                </li>
                <li>
                  Ongoing support helps manage side effects, such as irregular
                  bleeding, which some women experience after starting an
                  implant
                </li>
                <li>
                  A knowledgeable doctor can help weigh trade-offs between
                  different contraceptive options based on personal
                  circumstances and future family planning goals
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Family Planning and Contraceptive
                Guidance in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers family
                planning counselling and contraceptive guidance as part of her
                comprehensive women&apos;s health practice in Moradabad.
                According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her approach to contraceptive care reflects the same
                principles that guide her broader practice, including:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A &quot;Her Health First&quot; philosophy, ensuring
                  contraceptive decisions are made collaboratively, with the
                  patient&apos;s preferences and health history genuinely
                  considered
                </li>
                <li>
                  Comprehensive gynaecological services, including menstrual
                  health, fertility, and surgical care, allowing contraceptive
                  counselling to be integrated into a woman&apos;s broader
                  reproductive health plan
                </li>
                <li>
                  Both reversible and permanent contraceptive options discussed,
                  including laparoscopic sterilization for those seeking a
                  permanent solution, alongside guidance on reversible methods
                  for women who want flexibility
                </li>
                <li>
                  Postnatal care, offering a natural opportunity to discuss
                  contraceptive planning after delivery
                </li>
                <li>
                  Clear, judgment-free communication, helping patients feel
                  comfortable asking questions about sensitive topics like
                  sexual health and family planning
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently describe
                feeling heard and well-informed throughout their consultations —
                an important quality when navigating a decision as personal as
                contraceptive choice. The clinic is located in Gandhi Nagar,
                Moradabad, making it accessible to women across the city seeking
                family planning guidance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Choosing a Contraceptive Method
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Which contraceptive options are most suitable for my specific
                  health history and family planning goals?
                </li>
                <li>
                  What side effects are common with this method, and how are
                  they typically managed?
                </li>
                <li>
                  How soon can I expect fertility to return after stopping this
                  method, if I choose to conceive later?
                </li>
                <li>
                  What does the insertion or procedure process actually involve?
                </li>
                <li>
                  How effective is this method compared to other options I might
                  be considering?
                </li>
                <li>
                  What follow-up care, if any, is recommended after starting
                  this method?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Contraceptive Implants
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Implants cause permanent
                  infertility.&quot;{" "}
                  <strong>Fact:</strong> Fertility typically returns quickly
                  after removal, making implants a fully reversible option.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;The implant can move to other
                  parts of the body.&quot;{" "}
                  <strong>Fact:</strong> While rare displacement can occur,
                  especially if not inserted correctly, it generally stays close
                  to the insertion site when placed properly.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;All hormonal methods cause the
                  same side effects.&quot;{" "}
                  <strong>Fact:</strong> Side effect profiles vary between
                  methods, and a doctor can help identify the option most likely
                  to suit your body.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;You can&apos;t get an implant
                  while breastfeeding.&quot;{" "}
                  <strong>Fact:</strong> Progestin-only methods like implants are
                  generally considered compatible with breastfeeding, though
                  it&apos;s worth confirming with your doctor.
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
                        Gynaecologist & Family Planning Specialist (MBBS, MS)
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