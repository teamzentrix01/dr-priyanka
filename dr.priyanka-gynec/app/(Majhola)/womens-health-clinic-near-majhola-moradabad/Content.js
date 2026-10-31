
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

export default function WomensHealthClinicMajhola() {
  const faqs = [
    {
      q: "What does a women&apos;s health clinic do?",
      a: "It provides gynaecological care, period and hormonal guidance, pregnancy-related care and preventive advice.",
    },
    {
      q: "How do I check a doctor&apos;s credentials?",
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
      q: "How can I judge a clinic&apos;s privacy?",
      a: "Check whether consultation rooms are screened and registration is discreet.",
    },
    {
      q: "Should I ask about costs?",
      a: "Yes. Ask for clarity on consultation, tests and follow-up charges.",
    },
    {
      q: "Is a second opinion acceptable?",
      a: "Yes, especially if you feel unsure about advice.",
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
                Women&apos;s Health Clinic Near Majhola, Moradabad: How to Find
                and Judge the Right Clinic
              </h1>

              <p className="mb-4 text-gray-700">
                Choosing a women&apos;s health clinic is a personal decision.
                You want a place where you feel comfortable talking openly,
                where staff treat you with respect and where care is explained
                clearly. This guide explains what such clinics usually offer,
                what to check before you visit and how to prepare. It is general
                information, not medical advice, and it names no individual
                doctors or clinics because I cannot verify or rank them. Only a
                qualified doctor can diagnose you or advise treatment. Space
                Build works in interior planning, and its insight appears in the
                sections on clinic environment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Women&apos;s Health Clinic?
              </h2>

              <p className="mb-4 text-gray-700">
                It is a clinic focused on health concerns specific to women.
                Services differ from clinic to clinic, so ask what is available.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Gynaecological check-ups and consultations</li>
                <li>Period and hormonal concerns</li>
                <li>Pregnancy-related care</li>
                <li>Family planning advice</li>
                <li>Screening and preventive care</li>
                <li>Referrals to other specialists when needed</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choosing Carefully Matters
              </h2>

              <p className="mb-4 text-gray-700">
                You may visit more than once, and some topics are sensitive.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Trust makes it easier to share symptoms honestly.
                </li>
                <li>
                  Good communication improves understanding of your care.
                </li>
                <li>
                  A comfortable setting encourages regular check-ups.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Consider a visit if you notice any of the following. Seek urgent
                care for sudden severe pain or heavy bleeding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular or very painful periods</li>
                <li>Unusual discharge or persistent discomfort</li>
                <li>Pelvic pain</li>
                <li>Planning or confirming a pregnancy</li>
                <li>Questions about contraception</li>
                <li>Routine check-ups as advised by your doctor</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Clinics
              </h2>

              <p className="mb-4 text-gray-700">
                Gather names from reliable sources. Aim for two or three options
                to compare.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor</li>
                <li>Trusted friends and relatives</li>
                <li>Hospital and clinic listings</li>
                <li>
                  Official medical council directories for doctor details
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check Doctor Qualifications
              </h2>

              <p className="mb-4 text-gray-700">
                Look for clear, verifiable details. Credentials can be verified
                through the council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Recognised medical degree and specialist training</li>
                <li>Registration with the relevant medical council</li>
                <li>Years of experience in gynaecology</li>
                <li>Experience with concerns similar to yours</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check the Team
              </h2>

              <p className="mb-4 text-gray-700">
                A clinic is more than one doctor. The whole team affects your
                experience.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Trained nurses or assistants</li>
                <li>Clear front-desk support</li>
                <li>
                  Access to a female doctor or staff member, if you prefer
                </li>
                <li>Referral links for tests and specialist care</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services to Ask About
              </h2>

              <p className="mb-4 text-gray-700">
                Confirm what is offered on site before booking.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultations and examinations</li>
                <li>Ultrasound and basic tests, or tie-ups with labs</li>
                <li>Antenatal check-ups, if needed</li>
                <li>Counselling and follow-up care</li>
                <li>Emergency guidance after hours</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy and Dignity
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy is essential in a women&apos;s clinic. If privacy feels
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
                Hygiene and Cleanliness
              </h2>

              <p className="mb-4 text-gray-700">
                Look closely during your visit. Clean surroundings support
                comfort and trust.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tidy, well-maintained rooms</li>
                <li>Clean washrooms</li>
                <li>Fresh linen and clean examination surfaces</li>
                <li>Visible hand-wash facilities</li>
                <li>Proper disposal arrangements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comfort and Accessibility
              </h2>

              <p className="mb-4 text-gray-700">
                A good clinic works for everyone, including elderly visitors and
                people with limited mobility.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Step-free entry or a ramp</li>
                <li>Wide doors for wheelchairs</li>
                <li>Supportive seating with back support</li>
                <li>Reasonable waiting times</li>
                <li>Drinking water and accessible washrooms</li>
                <li>Space for a companion</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                Design supports comfort and trust. Planners such as Space Build
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
                  <strong>Furniture:</strong> Comfortable chairs and tidy,
                  closed storage.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Communication Style
              </h2>

              <p className="mb-4 text-gray-700">
                Notice how staff and doctors talk to you. You should leave
                feeling heard and informed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do they listen without judgement?</li>
                <li>Do they explain in simple language?</li>
                <li>Do they welcome questions?</li>
                <li>Do they respect your choices?</li>
                <li>Do they avoid pressure?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What services do you offer?</li>
                <li>
                  Who will see me, and can I choose a female doctor?
                </li>
                <li>How long is the usual wait?</li>
                <li>What are the consultation and test charges?</li>
                <li>
                  How do I reach the clinic if I have a concern after the visit?
                </li>
                <li>What happens in an emergency?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask early and ask clearly. Request clarity on what each charge
                includes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation fee</li>
                <li>Test and scan charges</li>
                <li>Procedure and medicine costs</li>
                <li>Follow-up visit charges</li>
                <li>Insurance acceptance, if relevant</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Booking and Timing
              </h2>

              <p className="mb-4 text-gray-700">
                Plan your visit well so that you do not feel rushed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask whether appointments are needed.</li>
                <li>Check timings, including days off.</li>
                <li>
                  Choose a time when you can avoid rushing.
                </li>
                <li>
                  Note your last period date before booking, if relevant.
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
                <li>
                  Take notes or ask for written instructions.
                </li>
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
                  Call the clinic if symptoms worsen or something is unclear.
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
                <li>Unclear billing</li>
                <li>Dismissing your concerns</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choosing only by advertisements</li>
                <li>
                  Delaying a visit despite worsening symptoms
                </li>
                <li>Skipping follow-up</li>
                <li>Self-medicating from online advice</li>
                <li>Not asking about costs</li>
                <li>
                  Staying with a clinic where you feel uncomfortable
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Healthcare Interior Planning Near Majhola,
                Moradabad
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
                      <p>Near Majhola, Moradabad, Uttar Pradesh, India</p>
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