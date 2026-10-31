
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

export default function FibroidSurgeryDoctorMajhola() {
  const faqs = [
    {
      q: "Do all fibroids need surgery?",
      a: "No. Many are only monitored, and treatment depends on symptoms, size and location.",
    },
    {
      q: "Who should I consult first?",
      a: "A gynaecologist, who can examine you and advise on tests.",
    },
    {
      q: "How do I verify a doctor&apos;s qualifications?",
      a: "Check the relevant medical council&apos;s records and ask about training and registration.",
    },
    {
      q: "Is a second opinion necessary?",
      a: "It is not mandatory, but it is sensible before any surgery.",
    },
    {
      q: "What should I bring to the first visit?",
      a: "Past scans, reports, a list of medicines and your symptom notes.",
    },
    {
      q: "How do I judge a clinic?",
      a: "Look at cleanliness, privacy, staff behaviour, accessibility and clarity of billing.",
    },
    {
      q: "Can I ask about costs upfront?",
      a: "Yes. Ask for a written estimate that lists what is included.",
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
                Fibroid Surgery Doctor in Majhola, Moradabad: How to Find and
                Choose the Right Specialist
              </h1>

              <p className="mb-4 text-gray-700">
                Hearing that you may have a fibroid can feel worrying, and
                choosing a doctor adds to the stress. The right specialist
                explains clearly, listens carefully and discusses every option,
                not only surgery. This guide helps you understand the basics,
                prepare for a visit and judge a doctor and clinic fairly. It is
                general information, not medical advice. Only a qualified doctor
                can diagnose and advise you. Space Build works in interior
                design, and its clinic-planning insight appears in the section
                on what a good clinic environment looks like.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Uterine Fibroids?
              </h2>

              <p className="mb-4 text-gray-700">
                Fibroids are non-cancerous growths in or around the uterus.
                Never self-diagnose. A scan and examination by a doctor are
                needed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>They vary in size, number and position.</li>
                <li>
                  Many cause no symptoms and are found during routine scans.
                </li>
                <li>Some cause discomfort or other symptoms.</li>
                <li>
                  Treatment depends on symptoms, size, location and personal
                  plans.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Consult a Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                Consider seeing a gynaecologist if you notice any of the
                following. Persistent or worsening symptoms deserve prompt
                medical attention.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy or prolonged periods</li>
                <li>Pelvic pain or pressure</li>
                <li>Frequent urination or bloating</li>
                <li>Pain during periods or intimacy</li>
                <li>Difficulty conceiving</li>
                <li>A fibroid found on a scan</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Not Every Fibroid Needs Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Surgery is one option among several. A good doctor explains why
                a particular option is recommended for you.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Some fibroids are only monitored over time.</li>
                <li>Medicines may help manage certain symptoms.</li>
                <li>Other procedures exist for specific cases.</li>
                <li>
                  Surgery may be advised when symptoms are significant or other
                  options are unsuitable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Treats Fibroids?
              </h2>

              <p className="mb-4 text-gray-700">
                Fibroids are usually managed by a gynaecologist. You can verify
                credentials through the relevant medical council&apos;s records.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Check that the doctor holds recognised medical qualifications.
                </li>
                <li>
                  Ask about registration with the relevant medical council.
                </li>
                <li>Ask how often they treat fibroid cases.</li>
                <li>
                  Surgical procedures are performed by gynaecologists trained in
                  them.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist Doctors
              </h2>

              <p className="mb-4 text-gray-700">
                Gather names from reliable sources. Aim for two or three names,
                so you can compare approaches.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Your family doctor or previous gynaecologist</li>
                <li>Friends and relatives with similar experience</li>
                <li>Hospital or clinic listings</li>
                <li>Official medical council directories</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Check Qualifications and Experience
              </h2>

              <p className="mb-4 text-gray-700">
                Look for clear, verifiable details. Experience with your type of
                case matters more than a long list of titles.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Medical degree and specialist training</li>
                <li>Years of practice in gynaecology</li>
                <li>Experience with cases similar to yours</li>
                <li>Hospital affiliations where surgery would take place</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Judge Communication
              </h2>

              <p className="mb-4 text-gray-700">
                How a doctor talks is as important as skill. You should leave
                feeling informed, not rushed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do they listen to your full history?</li>
                <li>Do they explain in simple language?</li>
                <li>Do they welcome questions?</li>
                <li>
                  Do they discuss risks and alternatives honestly?
                </li>
                <li>Do they avoid pressure to decide quickly?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Write the answers down, or take a family member along.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>What type of fibroid do I have, and where is it?</li>
                <li>
                  Does it need treatment now, or can it be monitored?
                </li>
                <li>What options are available for me?</li>
                <li>What are the benefits and risks of each?</li>
                <li>How long is recovery?</li>
                <li>How will this affect future pregnancy plans?</li>
                <li>What follow-up will I need?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests You May Be Asked For
              </h2>

              <p className="mb-4 text-gray-700">
                Doctors may advise tests to understand the problem. Ask why each
                test is needed and what it will show.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ultrasound scans</li>
                <li>Blood tests</li>
                <li>Other imaging, if needed</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consider a Second Opinion
              </h2>

              <p className="mb-4 text-gray-700">
                A second opinion is normal and sensible. A good doctor will not
                be offended.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>It is especially useful before any surgery.</li>
                <li>
                  Compare the explanation, not only the recommendation.
                </li>
                <li>Carry your reports and scans to each visit.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Costs
              </h2>

              <p className="mb-4 text-gray-700">
                Ask about costs early. Request an estimate in writing and ask
                what it includes.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Consultation and test charges</li>
                <li>Surgeon, hospital and anaesthesia fees</li>
                <li>Medicines and follow-up visits</li>
                <li>Insurance coverage and claim process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Hospital or Clinic
              </h2>

              <p className="mb-4 text-gray-700">
                The facility matters as much as the doctor. Visit in person
                before deciding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clean, well-maintained rooms</li>
                <li>Trained nursing and support staff</li>
                <li>Emergency backup arrangements</li>
                <li>Clear billing and discharge process</li>
                <li>Easy access for family members</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Clinic Environment Looks Like
              </h2>

              <p className="mb-4 text-gray-700">
                The setting affects how comfortable and safe you feel. Clinic
                designers such as Space Build focus on these elements when
                planning healthcare interiors.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Privacy:</strong> Consultation doors do not open onto
                  the waiting area.
                </li>
                <li>
                  <strong>Cleanliness:</strong> Washable, non-porous surfaces
                  and tidy rooms.
                </li>
                <li>
                  <strong>Comfort:</strong> Supportive seating, soft lighting
                  and good ventilation.
                </li>
                <li>
                  <strong>Access:</strong> Step-free entry, wide doors and
                  accessible washrooms.
                </li>
                <li>
                  <strong>Order:</strong> Clear signs, organised reception and
                  short waiting times.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Your First Visit
              </h2>

              <p className="mb-4 text-gray-700">
                A little preparation helps you make the most of the
                consultation.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Note your symptoms and when they began.</li>
                <li>Record your menstrual pattern.</li>
                <li>List current medicines and past conditions.</li>
                <li>Bring earlier scans and reports.</li>
                <li>Prepare your questions in advance.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consent and Information
              </h2>

              <p className="mb-4 text-gray-700">
                Before any procedure, you have a right to clear information.
                Never sign without understanding.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Understand what will be done and why.</li>
                <li>Know the risks and expected recovery.</li>
                <li>Read consent forms carefully.</li>
                <li>Ask for clarification on anything unclear.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Surgery, If Advised
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor will give specific instructions. Do not rely on
                general lists. Follow your own doctor&apos;s advice.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow guidance on food, medicines and tests.</li>
                <li>Arrange a family member to stay with you.</li>
                <li>Plan time off work and household help.</li>
                <li>Pack comfortable clothes and documents.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery and Follow-Up
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery varies from person to person. Follow your doctor&apos;s
                instructions and attend every scheduled review.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Follow wound care and activity advice.</li>
                <li>Attend follow-up visits.</li>
                <li>
                  Report unusual symptoms to the doctor promptly.
                </li>
                <li>Rest and eat well as advised.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Support
              </h2>

              <p className="mb-4 text-gray-700">
                A fibroid diagnosis can feel stressful. Reliable information and
                support can make the process easier.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Talk to trusted family or friends.</li>
                <li>
                  Ask your doctor for reliable information sources.
                </li>
                <li>Avoid unverified advice from social media.</li>
                <li>
                  Seek support if worry affects your daily life.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags When Choosing a Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pressure to book surgery immediately</li>
                <li>No clear explanation of the diagnosis</li>
                <li>Dismissing questions or a second opinion</li>
                <li>Guaranteed results or unrealistic promises</li>
                <li>Unclear costs and no written estimate</li>
                <li>Unverifiable qualifications</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choosing only by advertisements</li>
                <li>Skipping tests or reports</li>
                <li>Not asking about alternatives</li>
                <li>Ignoring recovery planning</li>
                <li>
                  Delaying a visit despite worsening symptoms
                </li>
                <li>Relying on online advice instead of a doctor</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Clinic Planning Support in Majhola,
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
                      <p>Majhola, Moradabad, Uttar Pradesh, India</p>
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