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

export default function FibroidSurgeryRecoveryTime() {
  const faqs = [
    {
      q: "What is the average recovery time after fibroid surgery?",
      a: "It varies by technique — hysteroscopic surgery may need just days, laparoscopic surgery around 2–4 weeks, and open surgery 4–6 weeks or more.",
    },
    {
      q: "Which fibroid surgery has the fastest recovery?",
      a: "Hysteroscopic myomectomy generally has the fastest recovery since there are no abdominal incisions involved.",
    },
    {
      q: "When can I return to work after laparoscopic myomectomy?",
      a: "Many women return to desk-based work within about 2 weeks, though this depends on individual healing and job demands.",
    },
    {
      q: "How long should I wait before trying to conceive after fibroid surgery?",
      a: "Most surgeons recommend waiting 3 to 6 months, depending on how much the uterine wall was involved during surgery.",
    },
    {
      q: "Does fibroid size affect recovery time?",
      a: "Yes, larger or more numerous fibroids generally require more extensive surgery and a longer recovery period.",
    },
    {
      q: "Is laparoscopic myomectomy safe for large fibroids?",
      a: "It depends on size and location; very large or complex fibroids may still require open surgery for safety.",
    },
    {
      q: "Does gynaecologistmoradabad.com offer fibroid (myomectomy) surgery?",
      a: "Yes, the website lists 'Laparoscopic Myomectomy' and 'Diagnostic Hysteroscopy' as services, directly relevant to fibroid removal and recovery.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "What should I bring to discuss my expected recovery time?",
      a: "Bring your ultrasound or MRI reports showing fibroid size, number, and location, along with details of any previous surgeries.",
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
                Fibroid Surgery Recovery Time Moradabad: Complete Recovery Guide
              </h1>

              <p className="mb-4 text-gray-700">
                If you&apos;re preparing for fibroid removal surgery
                (myomectomy), one of the biggest questions on your mind is
                likely: &quot;What is the fibroid surgery recovery time in
                Moradabad, and what should I expect?&quot; This guide walks you
                through the complete recovery timeline for both laparoscopic and
                open myomectomy, practical tips for a smoother recovery, and how
                to choose the right surgeon for your case.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Fibroid Surgery (Myomectomy)?
              </h2>

              <p className="mb-4 text-gray-700">
                Myomectomy is a surgical procedure to remove uterine fibroids —
                non-cancerous growths in or around the uterus — while preserving
                the uterus itself. This makes it different from a hysterectomy,
                which removes the entire uterus.
              </p>

              <p className="mb-4 font-semibold text-gray-900">
                Key facts about fibroid surgery:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is the preferred option for women who want to preserve
                  fertility or keep their uterus for other personal reasons.
                </li>
                <li>
                  Fibroids can be single or multiple, and can vary widely in
                  size and location (inside the uterine cavity, within the
                  uterine wall, or on the outer surface).
                </li>
                <li>
                  The surgical approach depends on the number, size, and
                  location of the fibroids.
                </li>
                <li>
                  It can be performed via laparoscopy (keyhole surgery),
                  hysteroscopy (through the vagina/cervix for cavity-based
                  fibroids), or open surgery (laparotomy).
                </li>
                <li>
                  Recovery time varies significantly depending on which
                  technique is used.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Recovery Time Is Such an Important Question
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery time matters to most women because:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  They need to plan time off work or arrange help at home,
                  especially if they have young children.
                </li>
                <li>
                  Many want to understand when it&apos;s safe to resume
                  exercise, driving, or intimacy.
                </li>
                <li>
                  Women planning pregnancy after fibroid removal need to know
                  how long to wait before trying to conceive.
                </li>
                <li>
                  Recovery expectations help in choosing between laparoscopic
                  and open surgery, when both are medically appropriate options.
                </li>
                <li>
                  Realistic planning reduces anxiety and helps ensure a
                  smoother, complication-free healing process.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Fibroid Surgery and How They Affect Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                The surgical technique used has the single biggest impact on
                recovery time. Here&apos;s how the main approaches compare:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Laparoscopic Myomectomy (Keyhole Surgery)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed through 3–4 small incisions using a camera and
                  specialized instruments.
                </li>
                <li>
                  Best suited for moderate-sized fibroids located on the outer
                  or within the muscular wall of the uterus.
                </li>
                <li>
                  Offers 3D visualization with modern equipment for precise
                  fibroid removal.
                </li>
                <li>
                  Generally associated with less pain, less blood loss, and
                  shorter hospital stay.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hysteroscopic Myomectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed through the vagina and cervix, with no external
                  incisions at all.
                </li>
                <li>
                  Used specifically for fibroids growing inside the uterine
                  cavity (submucosal fibroids).
                </li>
                <li>
                  Typically has the shortest recovery time among all fibroid
                  surgery types, since there is no abdominal incision.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Open Myomectomy (Laparotomy)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Involves a larger abdominal incision, similar to a C-section
                  incision.
                </li>
                <li>
                  Usually reserved for very large fibroids, multiple fibroids,
                  or complex cases where laparoscopy isn&apos;t suitable.
                </li>
                <li>
                  Involves the longest recovery time among the three techniques
                  due to the larger wound.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fibroid Surgery Recovery Time: Detailed Timeline
              </h2>

              <p className="mb-4 text-gray-700">
                Here&apos;s what recovery typically looks like, broken down by
                surgical approach:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Laparoscopic Myomectomy Recovery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hospital stay:</strong> Usually 1–2 days.
                </li>
                <li>
                  <strong>Initial rest period:</strong> First 3–5 days focused
                  on rest and light movement around the house.
                </li>
                <li>
                  <strong>Return to light activity:</strong> Typically within
                  1–2 weeks.
                </li>
                <li>
                  <strong>Return to work (desk job):</strong> Often possible
                  within 2 weeks, depending on individual healing.
                </li>
                <li>
                  <strong>Return to exercise/heavy lifting:</strong> Usually
                  advised to wait 4–6 weeks.
                </li>
                <li>
                  <strong>Full internal healing:</strong> Can take up to 3
                  months, even though external recovery feels complete earlier.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hysteroscopic Myomectomy Recovery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hospital stay:</strong> Often same-day or overnight
                  (day-care procedure).
                </li>
                <li>
                  <strong>Return to light activity:</strong> Within 1–3 days in
                  many cases.
                </li>
                <li>
                  <strong>Return to work:</strong> Often within 3–5 days,
                  depending on the individual.
                </li>
                <li>
                  <strong>Full recovery:</strong> Usually within 1–2 weeks.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Open Myomectomy Recovery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hospital stay:</strong> Typically 3–5 days.
                </li>
                <li>
                  <strong>Initial rest period:</strong> First 1–2 weeks require
                  significant rest and limited movement.
                </li>
                <li>
                  <strong>Return to light activity:</strong> Usually after 2–3
                  weeks.
                </li>
                <li>
                  <strong>Return to work (desk job):</strong> Often 4–6 weeks.
                </li>
                <li>
                  <strong>Return to exercise/heavy lifting:</strong> Usually
                  advised to wait 6–8 weeks.
                </li>
                <li>
                  <strong>Full internal healing:</strong> Can take up to 3–4
                  months.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Influence Individual Recovery Time
              </h2>

              <p className="mb-4 text-gray-700">
                While the above timelines are general guides, actual recovery
                varies based on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Number and size of fibroids removed — more extensive surgery
                  generally means longer healing.
                </li>
                <li>
                  Surgical technique used (laparoscopic vs. hysteroscopic vs.
                  open).
                </li>
                <li>
                  Overall health and fitness level before surgery.
                </li>
                <li>
                  Age and any pre-existing medical conditions (like diabetes)
                  that can affect wound healing.
                </li>
                <li>
                  Post-surgical complications, if any occur, such as infection
                  or excessive bleeding.
                </li>
                <li>
                  How closely post-operative care instructions are followed
                  (rest, wound care, activity restrictions).
                </li>
                <li>
                  Individual pain tolerance and healing response, which
                  naturally varies between patients.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tips for a Smoother, Faster Fibroid Surgery Recovery
              </h2>

              <p className="mb-4 text-gray-700">
                Following these general guidelines can support a smoother
                recovery process:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow all post-surgery instructions given by your surgeon
                  regarding activity, diet, and wound care.
                </li>
                <li>
                  Prioritize rest during the first week, even if you start
                  feeling better sooner than expected.
                </li>
                <li>
                  Avoid heavy lifting (including children or heavy bags) until
                  your surgeon clears you.
                </li>
                <li>
                  Stay hydrated and eat a balanced, fiber-rich diet to support
                  healing and avoid constipation, which can strain the surgical
                  site.
                </li>
                <li>
                  Take short, gentle walks as advised, since light movement
                  supports circulation and reduces blood clot risk.
                </li>
                <li>
                  Watch for warning signs — fever, heavy bleeding, worsening
                  pain, or wound discharge — and contact your doctor immediately
                  if these occur.
                </li>
                <li>
                  Attend all follow-up appointments so your surgeon can monitor
                  healing and clear you for each stage of activity.
                </li>
                <li>
                  Arrange help at home for the first week or two, especially for
                  household chores and childcare.
                </li>
                <li>
                  Avoid driving until you can comfortably move and react without
                  pain, generally after the first 1–2 weeks depending on the
                  surgery type.
                </li>
                <li>
                  Be patient with internal healing — feeling fine externally
                  doesn&apos;t always mean internal tissue has fully healed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Can You Try to Conceive After Fibroid Surgery?
              </h2>

              <p className="mb-4 text-gray-700">
                For women who underwent myomectomy specifically to preserve or
                improve fertility, timing pregnancy attempts matters:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most surgeons recommend waiting 3 to 6 months after
                  myomectomy before trying to conceive, allowing the uterine
                  wall to heal properly.
                </li>
                <li>
                  The exact waiting period depends on how deep the fibroid
                  removal went into the uterine muscle.
                </li>
                <li>
                  In some cases involving significant uterine wall involvement,
                  doctors may recommend delivery by C-section in a future
                  pregnancy to reduce the risk of uterine rupture during labor.
                </li>
                <li>
                  Always confirm your individual timeline and delivery plan with
                  your surgeon based on your specific surgery details.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Fibroid Surgery Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Since recovery time is directly influenced by surgical technique
                and skill, choosing the right surgeon is essential. Look for:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Experience with laparoscopic and hysteroscopic myomectomy, not
                  just open surgery.
                </li>
                <li>
                  Advanced imaging capability (ultrasound, sometimes MRI) to
                  properly map fibroid size, number, and location before
                  surgery.
                </li>
                <li>
                  A clear recommendation on which technique suits your case,
                  with reasoning explained.
                </li>
                <li>
                  Transparent discussion of expected recovery time based on your
                  specific fibroid profile.
                </li>
                <li>
                  Fertility-focused surgical approach, if preserving or
                  improving fertility is your goal.
                </li>
                <li>
                  Post-surgical support and monitoring, including clear guidance
                  on activity restrictions.
                </li>
                <li>
                  Positive patient experiences, particularly regarding recovery
                  and communication quality.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women researching fibroid surgery recovery time in
                Moradabad, Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a relevant local specialist to consider.
              </p>

              <p className="mb-4 text-gray-700">
                Here&apos;s an analysis of what her website offers:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  She is presented as a leading gynaecologist in Moradabad, with
                  a strong focus on laparoscopic and minimally invasive
                  gynaecological surgery.
                </li>
                <li>
                  Her clinic, Dr. Priyanka Gynaec, explicitly lists
                  &quot;Laparoscopic Myomectomy&quot; as a service — directly
                  matching fibroid removal surgery, along with &quot;Diagnostic
                  Hysteroscopy,&quot; which is relevant for cavity-based fibroid
                  evaluation.
                </li>
                <li>
                  The clinic is equipped with 3D laparoscopic technology,
                  AI-based imaging, and advanced ultrasound, which supports both
                  accurate pre-surgical fibroid mapping and a technique likely
                  to support faster recovery compared to open surgery.
                </li>
                <li>
                  Other listed services, including Laparoscopic Hysterectomy and
                  Fertility & IVF treatment, suggest broad experience in uterine
                  and reproductive surgery.
                </li>
                <li>
                  The site&apos;s emphasis on fertility-preserving, minimally
                  invasive techniques aligns with what most women look for when
                  researching faster fibroid surgery recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Details of Dr. Priyanka Gynaec, Moradabad
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
                      <p className="font-semibold">Call</p>
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
                      <p className="font-semibold">Clinic Address</p>
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask About Recovery Before Your Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on my fibroid size and location, which surgical
                  technique do you recommend?
                </li>
                <li>
                  What is my expected hospital stay and overall recovery
                  timeline?
                </li>
                <li>
                  When can I safely return to work, exercise, and driving?
                </li>
                <li>
                  If I&apos;m planning pregnancy, how long should I wait after
                  surgery to try conceiving?
                </li>
                <li>
                  Will I need a C-section for future deliveries based on my
                  surgery?
                </li>
                <li>
                  What warning signs during recovery should prompt me to call
                  you immediately?
                </li>
                <li>
                  Are there specific diet or activity guidelines I should follow
                  post-surgery?
                </li>
                <li>
                  What follow-up visits are included in my recovery care plan?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <p className="text-gray-700">
                Fibroid surgery recovery time in Moradabad depends largely on the
                surgical technique chosen — hysteroscopic and laparoscopic
                approaches generally offer significantly faster recovery than
                traditional open surgery. The best way to get an accurate,
                personalized recovery timeline is to have your fibroids properly
                evaluated through imaging, discuss the most suitable surgical
                approach with an experienced gynaecological surgeon, and follow
                post-operative guidance closely for the smoothest possible
                healing.
              </p>
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