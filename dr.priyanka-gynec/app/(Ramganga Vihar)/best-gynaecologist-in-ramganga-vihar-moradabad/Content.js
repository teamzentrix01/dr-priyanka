
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

export default function BestGynaecologistRamgangaVihar() {
  const faqs = [
    {
      q: "How do I find the best gynaecologist for me?",
      a: "Check qualifications, relevant experience, communication and clinic quality, then compare two or three options.",
    },
    {
      q: "How do I verify a doctor&apos;s credentials?",
      a: "Look up the relevant medical council&apos;s records and ask about training.",
    },
    {
      q: "Can I ask for a female doctor?",
      a: "Yes. Ask when booking whether one is available.",
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
      q: "How can I judge a clinic&apos;s privacy?",
      a: "Check whether consultation rooms are screened and registration is discreet.",
    },
    {
      q: "Should I ask about costs upfront?",
      a: "Yes. Ask for clarity on consultation, tests and follow-up charges.",
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
                Best Gynaecologist in Ramganga Vihar, Moradabad: How to Choose
                the Right One for You
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;Best&quot; means different things to different women. For
                one person it is a doctor who listens patiently. For another it
                is deep experience with a particular condition. This guide gives
                you a clear way to judge a gynaecologist and clinic yourself,
                instead of relying on rankings. It is general information, not
                medical advice. It names no individual doctors, because I cannot
                verify or rank them, and only a qualified doctor can diagnose
                you or advise treatment.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does &quot;Best&quot; Really Mean?
              </h2>

              <p className="mb-4 text-gray-700">
                The best doctor is the one who fits your needs. Define your
                priorities first, then compare doctors against them.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Relevant experience for your concern</li>
                <li>Clear, respectful communication</li>
                <li>Honest advice without pressure</li>
                <li>A comfortable, hygienic clinic</li>
                <li>Fair and transparent costs</li>
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
                <li>Questions about contraception</li>
                <li>Menopause-related concerns</li>
                <li>Routine check-ups as advised by your doctor</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Gynaecologists Treat
              </h2>

              <p className="mb-4 text-gray-700">
                They care for women&apos;s reproductive health across life
                stages. Some focus on obstetrics, some on gynaecology, and many
                do both.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Menstrual and hormonal concerns</li>
                <li>Pregnancy and childbirth care</li>
                <li>Fertility guidance</li>
                <li>Infections and pelvic conditions</li>
                <li>Screening and preventive care</li>
                <li>Menopause support</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Gather names from reliable sources. Aim for two or three names
                to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor</li>
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
                Look for clear, checkable details. Credentials can be verified
                through the council&apos;s records.
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
                Experience with your concern matters more than a long list of
                titles. Honest, specific answers are a good sign.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  How often does the doctor treat cases like yours?
                </li>
                <li>What approach do they usually follow?</li>
                <li>When do they refer to another specialist?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                How a doctor talks is as important as skill. You should leave
                feeling heard and informed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do they listen to your full history?</li>
                <li>Do they explain in simple language?</li>
                <li>Do they welcome questions?</li>
                <li>Do they respect your choices?</li>
                <li>
                  Do they avoid fear-based or pressured advice?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female or Male Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                This is a personal preference. Comfort matters, so choose what
                helps you speak openly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask when booking if you prefer a female doctor.</li>
                <li>
                  Female staff or a chaperone can be requested for examinations.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take someone along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What do you think is causing my symptoms?</li>
                <li>Which tests do I need, and why?</li>
                <li>
                  What are my options, including not treating yet?
                </li>
                <li>What are the benefits and risks of each?</li>
                <li>How long before I may see improvement?</li>
                <li>When should I return for follow-up?</li>
                <li>
                  How can I reach you or the clinic with concerns?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is sensible when you feel unsure, especially
                before surgery. A good doctor will not be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Compare explanations, not only prescriptions.
                </li>
                <li>Carry the same reports to each visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask early and clearly. Request a written estimate for any
                procedure.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee</li>
                <li>Test and scan charges</li>
                <li>Procedure, hospital and medicine costs</li>
                <li>Follow-up visit charges</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                The facility matters alongside the doctor. Visit in person
                before committing.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean, well-maintained rooms</li>
                <li>Respectful, trained staff</li>
                <li>Reasonable waiting times</li>
                <li>Clear billing</li>
                <li>
                  Easy access for elderly relatives or companions
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy is essential in a gynaecology clinic. If privacy feels
                weak, consider another clinic.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation doors should not open onto the waiting area.
                </li>
                <li>Examination areas should be screened.</li>
                <li>Registration should not be overheard.</li>
                <li>
                  Staff should explain what they are doing and ask before
                  examining.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports comfort and trust. Planners such as{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                focus on these elements when designing healthcare interiors.
                Clinical standards remain the responsibility of the medical
                team.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Layout:</strong> Clear flow from reception to waiting
                  to consultation.
                </li>
                <li>
                  <strong>Surfaces:</strong> Washable, non-porous materials
                  that are easy to keep clean.
                </li>
                <li>
                  <strong>Lighting:</strong> Soft, glare-free light in waiting
                  areas, bright light for examination.
                </li>
                <li>
                  <strong>Sound:</strong> Rooms that keep conversations private.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
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
                During the Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Be honest, even about sensitive topics.</li>
                <li>
                  Ask for clarification if you do not understand.
                </li>
                <li>Tell staff if you feel uncomfortable.</li>
                <li>Ask for written instructions if needed.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                After the Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow advice and medicine instructions exactly.
                </li>
                <li>Complete recommended tests on time.</li>
                <li>Attend follow-up appointments.</li>
                <li>
                  Contact the clinic if symptoms worsen or something is unclear.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Guaranteed cures or unrealistic promises</li>
                <li>Pressure to buy packages or products</li>
                <li>
                  Poor privacy during consultation or examination
                </li>
                <li>Dismissing your concerns</li>
                <li>Unclear costs</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choosing only by advertisements or &quot;top&quot; lists
                </li>
                <li>
                  Delaying a visit despite worsening symptoms
                </li>
                <li>Skipping follow-up</li>
                <li>Self-medicating from online advice</li>
                <li>Not asking about costs</li>
                <li>
                  Staying with a doctor who makes you uncomfortable
                </li>
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
                Contact Space Build — Healthcare Interior Planning in Ramganga
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
                      <p>Ramganga Vihar, Moradabad, Uttar Pradesh, India</p>
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