
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is the clinic located in Rampur?",
    a: "No. It is in Gandhi Nagar, Moradabad. Women from Rampur and nearby areas travel there for consultations.",
  },
  {
    q: "Is abortion legal in India?",
    a: "Yes, under the MTP Act, within specified conditions and time limits, when performed by a registered medical practitioner at an approved facility.",
  },
  {
    q: "Up to how many weeks can a pregnancy be terminated?",
    a: "Generally up to 20 weeks, extending to 24 weeks for certain categories of women, and beyond that only for substantial fetal abnormalities, as per the Act. Your doctor will explain what applies to you.",
  },
  {
    q: "How can I tell if an MTP clinic is safe?",
    a: "Look for a registered doctor, an approved facility, an ultrasound before any decision, clear explanations, proper consent, emergency arrangements and follow-up.",
  },
  {
    q: "Is it safe to buy abortion pills from a chemist or online?",
    a: "No. Medicines taken without a doctor's assessment can cause serious bleeding, infection and incomplete termination. Always consult a qualified doctor first.",
  },
  {
    q: "Can an unmarried woman get an MTP?",
    a: "Yes. A woman's marital status does not prevent her from seeking termination within the legal conditions.",
  },
  {
    q: "Will my consultation be confidential?",
    a: "Yes. Your information is handled confidentially, and the law protects the privacy of women seeking termination.",
  },
  {
    q: "Does the clinic provide MTP, and where is it done?",
    a: "Please confirm service availability and the location of the procedure directly with the clinic when you call.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
  },
];

export default function SafeMTPClinicNearRampur() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Safe MTP Clinic near Rampur – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              Deciding about a pregnancy is deeply personal. Some women face an
              unplanned pregnancy. Others receive difficult medical news about
              their own health or the baby&apos;s. Whatever your situation, you
              deserve respectful care, privacy and accurate information.
            </p>

            <p>
              If you live in Rampur, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              a doctor you can consult. The clinic is located in Moradabad, not
              in Rampur, and women from Rampur and nearby areas travel there
              for consultations. Its philosophy is{" "}
              <strong>&ldquo;Her Health First.&rdquo;</strong> You are listened
              to without judgement.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is MTP?
              </h2>
              <p>
                Medical termination of pregnancy (MTP) is the ending of a
                pregnancy by a qualified doctor. In India it is governed by
                the <strong>MTP Act</strong>, as amended in 2021, which allows
                termination in specified circumstances and within defined
                time limits, when done by a registered medical practitioner
                at an approved facility.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Is It Legal?
              </h2>
              <p>Yes, within the conditions of the Act. In general terms:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Up to 20 weeks:</strong> Termination may be allowed
                  on the opinion of one registered medical practitioner, for
                  reasons such as risk to the woman&apos;s physical or mental
                  health, or contraceptive failure.
                </li>
                <li>
                  <strong>20 to 24 weeks:</strong> Allowed for certain
                  categories of women, such as survivors of sexual assault,
                  minors, women whose marital status has changed during
                  pregnancy and women with specified disabilities, on the
                  opinion of two registered medical practitioners.
                </li>
                <li>
                  <strong>Beyond 24 weeks:</strong> Allowed only for
                  substantial fetal abnormalities diagnosed by a Medical
                  Board.
                </li>
              </ul>
              <p>
                Rules can be updated, so your doctor will explain what applies
                to you. Sex-selective termination is illegal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                How to Tell Whether a Clinic Is Safe
              </h2>
              <p>Safety matters more than speed or price. Check these points.</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  <strong>A registered doctor performs the procedure,</strong>{" "}
                  and you can ask about qualifications.
                </li>
                <li>
                  <strong>The facility is approved</strong> under the Act. Ask
                  the clinic to confirm.
                </li>
                <li>
                  <strong>An ultrasound confirms the pregnancy and its stage</strong>{" "}
                  before any decision. The stage decides which options are
                  safe.
                </li>
                <li>
                  <strong>You are examined and your history is taken,</strong>{" "}
                  including allergies, medical conditions and blood group
                  where needed.
                </li>
                <li>
                  <strong>Options, risks and aftercare are explained</strong>{" "}
                  in plain language.
                </li>
                <li>
                  <strong>Your consent is taken properly,</strong> and you are
                  not pressured.
                </li>
                <li>
                  <strong>Emergency arrangements exist,</strong> and you know
                  whom to contact afterwards.
                </li>
                <li>
                  <strong>Follow-up is offered,</strong> including contraception
                  counselling.
                </li>
                <li>
                  <strong>Your privacy is respected.</strong>
                </li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Red Flags: Walk Away If You See These
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Anyone offering medicines without an examination or
                  ultrasound
                </li>
                <li>
                  A chemist, unregistered practitioner or online seller
                  supplying pills
                </li>
                <li>No explanation of risks or aftercare</li>
                <li>Pressure to decide immediately</li>
                <li>
                  A promise of &ldquo;guaranteed&rdquo; results or a very low
                  price with no assessment
                </li>
                <li>
                  No way to contact the provider if something goes wrong
                </li>
                <li>Offers to reveal or act on the baby&apos;s sex</li>
              </ul>
              <p>
                Unsupervised attempts can cause heavy bleeding, infection,
                incomplete termination and serious harm.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why the Stage of Pregnancy Matters
              </h2>
              <p>
                Termination is generally safer when done early. The right
                method depends on the number of weeks, your health and what
                the law allows. If you are considering your options, do not
                delay a consultation. At the same time, take the time you
                need to think, while staying within the safe window.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens at the First Consultation
              </h2>
              <p>A first visit is a private conversation. You can expect:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  A listening-first discussion of your situation and wishes
                </li>
                <li>
                  Questions about your periods, previous pregnancies and
                  health
                </li>
                <li>
                  Confirmation of the pregnancy and its duration, usually by
                  ultrasound. The clinic uses a Voluson E22 3D and 4D
                  ultrasound machine
                </li>
                <li>
                  Basic tests, such as haemoglobin and blood group, if needed
                </li>
                <li>
                  A clear explanation of options, benefits, risks and legal
                  requirements
                </li>
                <li>Time to ask questions</li>
              </ul>
              <p>
                You are never pressured in any direction. If the clinic does
                not provide the service you need, it can tell you so honestly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Types of Methods
              </h2>
              <p>
                Your doctor will explain which methods suit you. In general
                there are two groups:
              </p>
              <p>
                <strong>Medical (medication-based) termination:</strong>{" "}
                Suitable only in the early weeks, under a doctor&apos;s
                supervision and with clear follow-up arrangements.
              </p>
              <p>
                <strong>Surgical termination:</strong> A short procedure by a
                trained doctor under suitable anaesthesia, used for early
                pregnancy or when medication is not appropriate. Later
                terminations, where legally permitted, take place in settings
                with the necessary facilities.
              </p>
              <p>
                The right choice depends on gestational age, your health and
                your preference.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Care From Rampur
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                When you book, ask:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Does the clinic provide MTP, and at what stages? Please
                  confirm this directly.
                </li>
                <li>Where would the procedure take place?</li>
                <li>How many visits will I need?</li>
                <li>
                  Can the consultation, ultrasound and tests be done on the
                  same day?
                </li>
                <li>
                  Do I need to bring anyone with me, or any documents?
                </li>
                <li>
                  Whom do I contact if I have a problem after returning home?
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Plan the journey:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Travel with someone you trust, if you can</li>
                <li>
                  Arrange transport home, especially if sedation is planned
                </li>
                <li>Plan rest for the rest of the day</li>
                <li>Carry sanitary pads, water and your medicines</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Plan for your return home:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Identify the nearest hospital with emergency facilities to
                  your home
                </li>
                <li>Keep the clinic&apos;s number saved</li>
                <li>Know the warning signs before you leave</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Aftercare and Warning Signs
              </h2>
              <p>
                After termination you can expect guidance on bleeding, pain
                and rest, advice on hygiene and diet, instructions on when to
                resume intercourse, and a follow-up to confirm that you are
                recovering well.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Seek urgent medical care if you have:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Very heavy bleeding that soaks a pad every hour</li>
                <li>Severe or worsening abdominal pain</li>
                <li>Fever or chills</li>
                <li>Foul-smelling discharge</li>
                <li>Dizziness or fainting</li>
              </ul>
              <p>
                If you cannot reach the clinic quickly, go to the nearest
                emergency facility. Do not delay care to travel to another
                city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Privacy and Confidentiality
              </h2>
              <p>
                The MTP Act protects the privacy of women seeking termination.
                Details are to be kept confidential and not disclosed except
                as the law permits. At Dr. Priyanka Gynaec, concerns are
                discussed respectfully, and your medical details are kept
                confidential. An adult woman, married or unmarried, gives
                her own consent. For women under 18, a guardian&apos;s consent
                is generally required.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>
              <p>
                Feelings after termination vary widely. Some women feel
                relief. Others feel sadness, guilt or anxiety, particularly
                if the decision was difficult or came from medical reasons.
                All of these reactions are valid. Talking with your doctor, a
                trusted family member or a counsellor can help. If distress
                continues, please ask for support.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Contraception and Future Pregnancies
              </h2>
              <p>
                A termination visit is also the time to plan ahead. Your
                doctor can help you choose a contraceptive method suited to
                your health and lifestyle, since fertility can return quickly.
                In most cases, a termination done safely by a qualified doctor
                does not affect later fertility. The clinic&apos;s antenatal
                and fertility services are available when you are ready.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Miscarriage Care
              </h2>
              <p>
                If you have bleeding or pain in early pregnancy, or have had
                a miscarriage, a prompt check-up is important. Ultrasound can
                show whether the miscarriage is complete or whether further
                treatment is needed. Care is given with sensitivity.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>A listening-first, judgement-free approach</strong>
                </li>
                <li>
                  <strong>Detailed assessment</strong> with 3D/4D ultrasound
                </li>
                <li>
                  <strong>Clear explanations</strong> of options and legal
                  requirements
                </li>
                <li>
                  <strong>Confidential, respectful care</strong>
                </li>
                <li>
                  <strong>Complete women&apos;s healthcare,</strong> including
                  contraception, fertility, pregnancy and postnatal services
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Clinic Address and Appointments
              </h2>
              <p>
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Contact Dr. Priyanka Gynaec
              </h2>
              <p className="mb-6">
                For appointments and information about available services,
                contact the clinic directly.
              </p>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="underline underline-offset-4"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="underline underline-offset-4"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                >
                  Our Services
                </Link>
              </div>
            </section>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="border-b border-gray-200 pb-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="leading-relaxed text-gray-700">{faq.a}</p>
                </div>
              ))}
            </section>
          </article>

          <aside className="lg:sticky lg:top-24">
            <LandingEnquiryForm />
          </aside>
        </div>
      </section>
    </main>
  );
}
