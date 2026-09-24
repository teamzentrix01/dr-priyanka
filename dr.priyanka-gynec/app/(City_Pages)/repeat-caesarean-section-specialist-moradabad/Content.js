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

export default function RepeatCaesareanSectionSpecialistMoradabad() {
  const faqs = [
    {
      q: "Is a repeat C-section riskier than a first one?",
      a: "It generally carries somewhat higher risk due to scar tissue and surgical complexity, though most repeat C-sections are performed safely.",
    },
    {
      q: "How many C-sections can a woman safely have?",
      a: "There's no fixed limit, but risk generally increases with each additional C-section; your doctor can assess your specific situation.",
    },
    {
      q: "Can I have a vaginal birth after a previous C-section?",
      a: "This depends on factors like your previous incision type and pregnancy history; discuss VBAC eligibility directly with your doctor.",
    },
    {
      q: "How much time should I wait between C-sections?",
      a: "Most doctors recommend at least 12–18 months between deliveries to allow adequate healing.",
    },
    {
      q: "What is placenta accreta, and why is it relevant to repeat C-sections?",
      a: "It's a condition where the placenta attaches too deeply into the uterine wall, becoming more likely with each additional C-section.",
    },
    {
      q: "Is recovery different after a repeat C-section?",
      a: "Recovery is generally similar to a first C-section, though some women experience slightly more initial discomfort due to scar tissue.",
    },
    {
      q: "Does gynaecologistmoradabad.com offer care for repeat/high-risk C-section pregnancies?",
      a: "The website lists high-risk pregnancy management as a service; discuss your specific surgical history directly to confirm suitability.",
    },
    {
      q: "Can I combine sterilization with my repeat C-section?",
      a: "Yes, this is often possible and should be discussed and confirmed with your doctor well in advance of your delivery date.",
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
                Repeat Caesarean Section Specialist Moradabad: What Every Mother
                Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                If you&apos;ve already had one caesarean section and are now
                pregnant again, finding the right repeat caesarean section
                specialist in Moradabad becomes especially important. A repeat
                C-section involves additional considerations compared to a
                first-time delivery — from surgical complexity to pregnancy
                spacing and long-term health planning. This guide covers
                everything you need to know about repeat C-sections, the risks
                involved, and how to choose the right specialist for your care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Repeat C-Section Is Different From Your First
              </h2>

              <p className="mb-4 text-gray-700">
                Even if your first C-section went smoothly, a second or
                subsequent one involves distinct considerations:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Scar tissue from the previous surgery</strong> can
                  make the procedure technically more complex for the surgeon.
                </li>
                <li>
                  <strong>Increased surgical time</strong> is common with
                  repeat C-sections, due to the need to carefully navigate
                  previous scar tissue.
                </li>
                <li>
                  <strong>Higher risk of certain complications</strong> compared
                  to a first C-section, which is why experienced surgical
                  judgment matters even more.
                </li>
                <li>
                  <strong>Pregnancy spacing becomes medically relevant</strong>,
                  since inadequate healing time between pregnancies can affect
                  safety.
                </li>
                <li>
                  <strong>Decisions around future fertility</strong> often
                  become part of the conversation, especially by the second or
                  third C-section.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Many C-Sections Can a Woman Safely Have?
              </h2>

              <p className="mb-4 text-gray-700">
                This is one of the most common questions, and while it depends
                on individual circumstances, some general points apply:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>There is no fixed universal limit</strong>, but each
                  additional C-section generally carries somewhat higher risk
                  than the one before.
                </li>
                <li>
                  <strong>Many women safely have two or three C-sections</strong>,
                  with careful monitoring and experienced surgical care.
                </li>
                <li>
                  <strong>Beyond three C-sections</strong>, doctors typically
                  recommend more detailed discussion about risks, since the
                  uterine wall and surrounding tissue have undergone repeated
                  surgical intervention.
                </li>
                <li>
                  <strong>Your specific surgical history</strong>, healing after
                  each procedure, and any complications from previous C-sections
                  all factor into what&apos;s considered safe for you
                  individually.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This decision should always be made through individualized
                discussion with your obstetrician, rather than relying on a
                generic number.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Risks Associated With Repeat C-Sections
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding these risks helps you have informed conversations
                with your doctor:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Placenta accreta spectrum disorders</strong> — a
                  condition where the placenta attaches too deeply into the
                  uterine wall, becoming more likely with each additional
                  C-section, particularly relevant for women with placenta
                  previa in a subsequent pregnancy.
                </li>
                <li>
                  <strong>Increased scar tissue (adhesions)</strong>, which can
                  make surgery more technically challenging and occasionally
                  affect nearby organs like the bladder.
                </li>
                <li>
                  <strong>Longer surgical time</strong> and, in some cases,
                  increased blood loss compared to a first C-section.
                </li>
                <li>
                  <strong>Higher risk of uterine rupture in future
                  pregnancies</strong>, particularly relevant if a vaginal birth
                  were attempted after multiple C-sections.
                </li>
                <li>
                  <strong>Increased risk of needing a hysterectomy during
                  delivery</strong> in rare, severe cases, particularly with
                  conditions like placenta accreta.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                While these risks are real, it&apos;s important to note that the
                majority of repeat C-sections are performed safely, especially
                with experienced surgical teams and proper monitoring throughout
                pregnancy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recommended Pregnancy Spacing After a C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Proper spacing between pregnancies supports better healing and
                lower risk in a repeat C-section:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Most doctors recommend waiting at least 12–18
                  months</strong> between a C-section delivery and the next
                  pregnancy, allowing adequate uterine healing.
                </li>
                <li>
                  <strong>Shorter intervals between pregnancies</strong> have
                  been associated with a higher risk of complications, including
                  uterine rupture and placental issues.
                </li>
                <li>
                  <strong>Individual healing varies</strong>, so your
                  doctor&apos;s specific recommendation for your situation
                  should guide your family planning timeline.
                </li>
                <li>
                  <strong>If you&apos;re planning your next pregnancy</strong>,
                  discussing ideal spacing with your gynaecologist in advance
                  can help you plan more safely.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                VBAC vs. Repeat C-Section: Understanding Your Options
              </h2>

              <p className="mb-4 text-gray-700">
                For some women, a vaginal birth after caesarean (VBAC) may be a
                possibility instead of an automatic repeat C-section. Key
                considerations include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Eligibility for VBAC</strong> depends on factors like
                  the type of uterine incision used previously, the reason for
                  your first C-section, and your current pregnancy&apos;s
                  specific circumstances.
                </li>
                <li>
                  <strong>VBAC carries its own risks</strong>, including a small
                  but serious risk of uterine rupture, which must be weighed
                  against the risks of an additional C-section.
                </li>
                <li>
                  <strong>A trial of labor after caesarean (TOLAC)</strong> may
                  be considered in appropriate cases, under close medical
                  supervision.
                </li>
                <li>
                  <strong>After two or more previous C-sections</strong>, VBAC
                  is generally considered a less common or higher-risk option,
                  and most doctors would recommend a repeat C-section instead.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This decision should always be made together with your
                obstetrician, based on a full review of your specific medical
                and surgical history.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During a Repeat C-Section Pregnancy
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Early Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Confirmation of pregnancy and review of your previous
                  C-section history and any complications.
                </li>
                <li>
                  Discussion of delivery planning early on, given the additional
                  considerations involved.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Second Trimester
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  More detailed imaging, sometimes including specific scans to
                  assess placental location and check for signs of placenta
                  accreta, especially if you&apos;ve had multiple previous
                  C-sections.
                </li>
                <li>
                  Continued monitoring of general pregnancy health alongside
                  these additional assessments.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Third Trimester
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery date planning, typically scheduled slightly earlier
                  than a full-term due date in many repeat C-section cases,
                  based on your doctor&apos;s assessment.
                </li>
                <li>
                  Detailed discussion of the surgical plan, including
                  anaesthesia, potential additional risks, and what to expect on
                  the day.
                </li>
                <li>
                  Preparation for the possibility of additional interventions,
                  in the rare event complications like placenta accreta are
                  identified.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Surgical Experience of a Repeat C-Section
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Surgery time</strong> is often somewhat longer than a
                  first C-section, due to careful navigation of previous scar
                  tissue.
                </li>
                <li>
                  <strong>An experienced surgical team</strong> is especially
                  valuable here, given the added technical complexity.
                </li>
                <li>
                  <strong>Anaesthesia approach</strong> is generally similar to
                  a first C-section, typically spinal or epidural.
                </li>
                <li>
                  <strong>Immediate newborn care</strong> proceeds similarly to
                  a first-time C-section delivery.
                </li>
                <li>
                  <strong>Additional precautions</strong>, such as availability
                  of blood products, may be arranged in advance if there&apos;s
                  any indicated risk of increased bleeding based on your
                  specific history.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After a Repeat C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                Recovery is generally similar to a first C-section, though some
                women report:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Slightly more discomfort initially</strong>, related
                  to the added surgical complexity of navigating scar tissue.
                </li>
                <li>
                  <strong>A similar overall hospital stay</strong>, typically
                  around 3–4 days.
                </li>
                <li>
                  <strong>The same general recovery milestones</strong> — light
                  activity within 1–2 weeks, and fuller recovery by 4–6 weeks.
                </li>
                <li>
                  <strong>Continued monitoring for wound healing</strong>, given
                  the surgery took place through previous scar tissue.
                </li>
                <li>
                  <strong>Follow-up appointments</strong> to confirm healing and
                  discuss any future pregnancy planning, if relevant.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Choosing the Right Repeat Caesarean Section Specialist
              </h2>

              <p className="mb-4 text-gray-700">
                Given the added complexity, choosing an experienced specialist is
                especially important for repeat C-sections:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Specific experience managing multiple C-section
                  cases</strong>, not just first-time deliveries.
                </li>
                <li>
                  <strong>Access to detailed imaging capability</strong>, to
                  properly assess placental location and screen for conditions
                  like placenta accreta.
                </li>
                <li>
                  <strong>Clear, honest communication about your individual
                  risk profile</strong>, based on your surgical history.
                </li>
                <li>
                  <strong>A well-equipped hospital or surgical facility</strong>,
                  with appropriate backup resources in case additional
                  intervention is needed.
                </li>
                <li>
                  <strong>Willingness to discuss VBAC eligibility</strong>, if
                  relevant to your specific case, rather than defaulting
                  automatically to repeat surgery.
                </li>
                <li>
                  <strong>Strong post-surgical follow-up and future pregnancy
                  planning support</strong>.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Repeat C-Section Specialist
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Based on my surgical history, what is my specific risk profile
                  for this pregnancy?
                </li>
                <li>
                  Will you need any additional imaging to check for conditions
                  like placenta accreta?
                </li>
                <li>
                  Is VBAC a realistic option for me, or is a repeat C-section
                  recommended?
                </li>
                <li>
                  How will this surgery differ from my previous C-section(s)?
                </li>
                <li>
                  What additional precautions will be taken given my surgical
                  history?
                </li>
                <li>
                  How many previous C-sections is it generally considered safe
                  to have, based on my specific case?
                </li>
                <li>
                  What should I know about spacing before considering another
                  pregnancy after this one?
                </li>
                <li>
                  What is your personal experience with repeat and multiple
                  C-section deliveries?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women researching a repeat caesarean section specialist in
                Moradabad, Dr. Priyanka Pachauri (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) is a relevant local specialist to consider. Here&apos;s an
                analysis of what her website offers in this context:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Her clinic, Dr. Priyanka Gynaec, explicitly lists antenatal
                  and postnatal care along with high-risk pregnancy management —
                  and a repeat C-section pregnancy is generally considered a
                  higher-risk category requiring closer monitoring, which
                  aligns with this listed service.
                </li>
                <li>
                  The clinic&apos;s use of advanced imaging technology supports
                  the kind of detailed placental assessment often needed in
                  repeat C-section cases, particularly for ruling out conditions
                  like placenta accreta.
                </li>
                <li>
                  Her broader experience in laparoscopic and reconstructive
                  gynaecological surgery reflects surgical skill relevant to
                  navigating the added complexity of repeat abdominal surgery.
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
                Planning for the Future: Sterilization at the Time of a Repeat
                C-Section
              </h2>

              <p className="mb-4 text-gray-700">
                For women who feel their family is complete, this is often a
                relevant conversation to have in advance:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Sterilization (tubal ligation)</strong> can sometimes
                  be performed at the same time as a C-section, avoiding the
                  need for a separate future procedure.
                </li>
                <li>
                  <strong>This decision should be discussed and confirmed well
                  before your delivery date</strong>, as it typically requires
                  informed consent arranged in advance.
                </li>
                <li>
                  <strong>Discuss this option clearly with your doctor</strong>{" "}
                  during your antenatal visits if you&apos;re considering
                  permanent contraception alongside your repeat C-section.
                </li>
                <li>
                  <strong>Alternatively</strong>, if you&apos;re open to future
                  pregnancies, your doctor can guide you on appropriate spacing
                  and monitoring for any future pregnancy.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A repeat caesarean section involves additional considerations
                compared to a first-time delivery — from surgical complexity and
                placental risks to decisions around pregnancy spacing and future
                fertility. Choosing an experienced specialist who can properly
                assess your specific surgical history, discuss all your options
                including VBAC where appropriate, and plan carefully for your
                delivery gives you the best chance at a safe outcome for both
                you and your baby.
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
