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

export default function FemaleGynaecologistBuddhiVihar() {
  const faqs = [
    {
      q: "Can I request a female gynaecologist?",
      a: "Yes. Ask when booking whether one is available.",
    },
    {
      q: "Can I ask for a chaperone during examination?",
      a: "Yes. You can request a female nurse or assistant to be present.",
    },
    {
      q: "Can I refuse an examination?",
      a: "Yes. You can ask questions, pause or say no, and the doctor should explain alternatives.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Is a female doctor always better?",
      a: "Not necessarily. Qualifications, experience and communication matter equally.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Past reports, a medicine list and notes on your symptoms and cycle.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially before surgery or if you feel unsure.",
    },
    {
      q: "Where can I learn more about clinic planning?",
      a: "Visit spacebuild.co.in to learn about healthcare interior planning.",
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
                Female Gynaecologist in Buddhi Vihar, Moradabad: Comfort,
                Consent and Choice in Women&apos;s Healthcare
              </h1>

              <p className="mb-4 text-gray-700">
                Many women prefer a female gynaecologist because it helps them
                speak openly about personal concerns. That preference is valid,
                and so is your right to understand and agree to every step of
                your care. This guide explains how to request a female doctor,
                what consent means in a clinic, how to verify credentials and
                how to judge a clinic&apos;s privacy. It is general information,
                not medical advice. It names no individual doctors, because I
                cannot verify or rank them, and only a qualified doctor can
                diagnose you or advise treatment. Space Build works in interior
                planning, and its insight appears in the sections on clinic
                environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Comfort Shapes Care
              </h2>

              <p className="mb-4 text-gray-700">
                Comfort affects how much you share. Better information helps the
                doctor advise you more accurately.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>You may describe symptoms more honestly.</li>
                <li>You are more likely to ask questions.</li>
                <li>You are more likely to attend follow-ups.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Gender the Only Factor?
              </h2>

              <p className="mb-4 text-gray-700">
                It is one factor among several. Choose a doctor who is both
                comfortable for you and well qualified.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Qualifications and experience matter just as much.
                </li>
                <li>
                  Communication style decides how heard you feel.
                </li>
                <li>A private, hygienic clinic adds to comfort.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Consider a visit if you notice any of the following. Seek urgent
                care for sudden severe pain or very heavy bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular, very heavy or painful periods</li>
                <li>Pelvic pain or unusual discharge</li>
                <li>Planning or confirming a pregnancy</li>
                <li>Questions about contraception or fertility</li>
                <li>Menopause-related changes</li>
                <li>Routine check-ups advised by your doctor</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Request a Female Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Be direct when booking. You do not need to justify your
                preference.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Say clearly that you prefer a female doctor.</li>
                <li>Ask which days she consults.</li>
                <li>
                  Ask whether a female assistant is present during examinations.
                </li>
                <li>
                  If none is available, ask when the next opening is.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Consent
              </h2>

              <p className="mb-4 text-gray-700">
                Consent means you agree after understanding. Consent is ongoing,
                not a one-time signature.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The doctor should explain what will be done and why.
                </li>
                <li>You should be asked before any examination.</li>
                <li>You can ask questions at any point.</li>
                <li>You can say no or ask to stop.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Right to a Chaperone
              </h2>

              <p className="mb-4 text-gray-700">
                You can ask for support during examinations. A good clinic
                respects these requests without fuss.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Request a female nurse or assistant to be present.
                </li>
                <li>
                  Ask a trusted family member to wait nearby, if you prefer.
                </li>
                <li>
                  Let staff know if you want a break or a pause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Your Right to Privacy
              </h2>

              <p className="mb-4 text-gray-700">
                Your information belongs to you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Conversations should not be overheard.</li>
                <li>Reports should be handled discreetly.</li>
                <li>You can ask who will see your records.</li>
                <li>
                  Registration should not require sharing details loudly at a
                  crowded counter.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Aim for two or three names to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or earlier gynaecologist</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Verify Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Credentials can be verified through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of practice in gynaecology</li>
                <li>Hospital affiliations for deliveries or surgery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check Relevant Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Honest, specific answers are a good sign.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>How often does she treat cases like yours?</li>
                <li>What approach does she usually follow?</li>
                <li>When does she refer to another specialist?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                You should leave feeling heard and informed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Does she listen to your full history?</li>
                <li>Does she explain in simple language?</li>
                <li>Does she welcome questions?</li>
                <li>Does she respect your choices?</li>
                <li>
                  Does she avoid fear-based or pressured advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take someone along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What do you think is causing my symptoms?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including monitoring?
                </li>
                <li>What are the benefits and risks of each?</li>
                <li>When should I return for follow-up?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                If a Female Doctor Is Not Available
              </h2>

              <p className="mb-4 text-gray-700">
                Options remain. Never delay urgent care because of this
                preference.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ask for a female staff member to be present.
                </li>
                <li>
                  Ask for a clear explanation before any procedure.
                </li>
                <li>
                  Consider another clinic if you remain uncomfortable.
                </li>
                <li>
                  For non-urgent concerns, wait for a female doctor&apos;s slot.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                It is sensible when you feel unsure, especially before surgery.
                A good doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only prescriptions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understand the Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask for an itemised bill.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee and follow-up charges</li>
                <li>Test and scan costs</li>
                <li>Medicine and procedure costs</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports comfort and dignity. Planners such as Space
                Build focus on these elements when designing healthcare
                interiors. Clinical standards remain the responsibility of the
                medical team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area, and examination areas are screened.
                </li>
                <li>
                  <strong>Hygiene:</strong> Washable, non-porous surfaces,
                  fresh linen and tidy rooms.
                </li>
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
                <li>
                  <strong>Lighting:</strong> Soft light in waiting areas and
                  bright, glare-free light for examination.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Seating:</strong> Supportive chairs, with space for
                  companions and elders.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Write down your symptoms and when they began.</li>
                <li>Note your cycle dates.</li>
                <li>List current medicines and past conditions.</li>
                <li>Bring earlier reports and scans.</li>
                <li>Prepare your questions.</li>
                <li>Take a trusted companion if you wish.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Using Reviews Wisely
              </h2>

              <p className="mb-4 text-gray-700">
                Online reviews can help, but read them carefully. Verify claims
                through your own visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Look for detailed comments, not only star ratings.
                </li>
                <li>Notice repeated praise or complaints.</li>
                <li>
                  Be cautious of many similar reviews posted together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Dismissing your preference or concerns</li>
                <li>
                  Examining without explanation or permission
                </li>
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>Unclear costs</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choosing only by gender or advertisements</li>
                <li>
                  Delaying a visit despite worsening symptoms
                </li>
                <li>Staying silent when uncomfortable</li>
                <li>Skipping follow-up</li>
                <li>Self-medicating from online advice</li>
                <li>Not asking about costs</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning in Buddhi
                Vihar, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Interior Partner</p>
                      <p>Space Build</p>
                      <p className="text-sm text-gray-600">
                        Healthcare interior planning and clinic design support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Important Note</p>
                      <p className="text-sm text-gray-600">
                        This page provides general information only. It does not
                        recommend or rank any doctor. Consult a qualified
                        healthcare professional for diagnosis and treatment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+919927611780"
                        className="hover:underline"
                      >
                        +91 99276 11780
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+918077973797"
                        className="hover:underline"
                      >
                        +91 80779 73797
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:spacebuild.india@gmail.com"
                        className="break-all hover:underline"
                      >
                        spacebuild.india@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Buddhi Vihar, Moradabad, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.spacebuild.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.spacebuild.co.in
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