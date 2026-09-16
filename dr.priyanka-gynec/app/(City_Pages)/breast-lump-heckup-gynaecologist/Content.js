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

export default function BreastLumpCheckup() {
  const faqs = [
    {
      q: "Should I be worried if I find a breast lump?",
      a: "Not necessarily — most breast lumps are benign, but every lump should be evaluated by a doctor to confirm what it is.",
    },
    {
      q: "Who can I consult for a breast lump checkup in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers thorough breast health evaluation as part of her gynaecological practice.",
    },
    {
      q: "What are common benign causes of breast lumps?",
      a: "Fibroadenomas, cysts, fibrocystic changes, and lipomas are all common benign causes.",
    },
    {
      q: "What tests are used to evaluate a breast lump?",
      a: "Clinical examination, ultrasound, mammography, and sometimes biopsy, depending on the findings.",
    },
    {
      q: "When should I see a doctor about a breast lump?",
      a: "As soon as you notice a new lump, especially if it's hard, irregular, or accompanied by other changes like skin dimpling or discharge.",
    },
    {
      q: "Can breast lumps change with the menstrual cycle?",
      a: "Yes, hormonal fluctuations can cause temporary lumpiness or tenderness, particularly before a period.",
    },
    {
      q: "How do I book a breast checkup appointment?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is breast self-examination enough on its own?",
      a: "No, self-exams are a helpful habit but should be combined with professional evaluation, especially for any new or unusual lump.",
    },
    {
      q: "What happens if further testing is needed after the initial checkup?",
      a: "Your doctor will explain the recommended next steps, which may include additional imaging, biopsy, or referral to a specialist.",
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
                Breast Lump Checkup with a Gynaecologist: What Every Woman
                Should Know
              </h1>

              <p className="mb-4 text-gray-700">
                Finding a lump in the breast can be an unsettling experience,
                often triggering immediate worry about cancer. While that fear
                is completely understandable, it&apos;s important to know that
                the vast majority of breast lumps are not cancerous — many are
                related to normal hormonal changes, benign cysts, or other
                non-cancerous conditions.
              </p>

              <p className="text-gray-700">
                Still, every new or unusual breast lump deserves proper medical
                evaluation, since only a doctor can accurately determine what it
                is and whether further testing is needed. This article explains
                the common causes of breast lumps, when to seek evaluation, what
                a breast lump checkup involves, and why Dr. Priyanka
                Pachauri&apos;s clinic is a trusted resource for breast health
                concerns in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Breast Lump Evaluation Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most breast lumps are benign, but the only way to know for
                  certain is through proper medical evaluation
                </li>
                <li>
                  Early detection of any concerning finding significantly
                  improves outcomes, making timely evaluation important
                  regardless of how minor a lump may seem
                </li>
                <li>
                  Breast tissue naturally changes throughout the menstrual
                  cycle, which can sometimes cause temporary lumpiness that
                  isn&apos;t a cause for concern
                </li>
                <li>
                  A doctor can distinguish between normal variations and
                  findings that need further investigation, something
                  that&apos;s difficult to do through self-examination alone
                </li>
                <li>
                  Peace of mind matters — even when a lump turns out to be
                  harmless, proper evaluation removes uncertainty and anxiety
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Breast Lumps
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Fibroadenomas
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Smooth, firm, and typically painless benign lumps that
                      move easily under the skin
                    </li>
                    <li>
                      Common in younger women, often in their teens, twenties,
                      or thirties
                    </li>
                    <li>
                      Usually don&apos;t require treatment unless they grow
                      significantly or cause discomfort
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Breast Cysts
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Fluid-filled sacs that can feel smooth and sometimes
                      tender, particularly before menstruation
                    </li>
                    <li>
                      Very common and generally benign, though larger or
                      persistent cysts may need drainage or further evaluation
                    </li>
                    <li>
                      Tend to fluctuate in size with the menstrual cycle
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Fibrocystic Breast Changes
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      General lumpiness or nodularity affecting one or both
                      breasts, often related to hormonal fluctuations
                    </li>
                    <li>
                      Can cause tenderness, especially in the days before a
                      period
                    </li>
                    <li>
                      A very common, benign condition affecting a large
                      percentage of women at some point
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Mastitis or Breast Infection
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Painful, red, and warm swelling, most commonly occurring
                      during breastfeeding
                    </li>
                    <li>
                      Can be accompanied by fever and flu-like symptoms
                    </li>
                    <li>
                      Requires prompt treatment, typically with antibiotics if
                      infection is confirmed
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Lipomas
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Soft, benign fatty lumps that can occur in breast tissue
                      as well as elsewhere in the body
                    </li>
                    <li>
                      Generally painless and slow-growing
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Breast Cancer
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Can present as a hard, irregular, painless lump, though
                      not all cancerous lumps look or feel this way
                    </li>
                    <li>
                      May be accompanied by other changes, such as skin
                      dimpling, nipple discharge, or changes in breast shape
                    </li>
                    <li>
                      Requires thorough diagnostic evaluation to confirm or rule
                      out, which is why every new lump should be checked properly
                      rather than assumed to be benign
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That Should Prompt a Breast Checkup
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Any new lump or thickened area in the breast or underarm
                </li>
                <li>
                  A lump that feels hard, irregular, or fixed in place rather
                  than mobile
                </li>
                <li>
                  Changes in breast size, shape, or skin texture, such as
                  dimpling or puckering
                </li>
                <li>
                  Nipple discharge, particularly if it&apos;s bloody or occurs
                  without squeezing
                </li>
                <li>
                  Nipple inversion that&apos;s new and wasn&apos;t present
                  before
                </li>
                <li>
                  Persistent breast pain that doesn&apos;t follow the typical
                  pattern of the menstrual cycle
                </li>
                <li>
                  Redness, warmth, or swelling that doesn&apos;t resolve,
                  especially if accompanied by fever
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How a Breast Lump Checkup Typically Works
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed medical history, including when the lump was noticed,
                  any changes over time, and relevant family history of breast
                  conditions
                </li>
                <li>
                  Clinical breast examination, where the doctor carefully feels
                  the breast and surrounding lymph node areas to assess the
                  lump&apos;s characteristics
                </li>
                <li>
                  Breast ultrasound, often the first imaging test used,
                  particularly useful for evaluating lumps in younger women with
                  denser breast tissue
                </li>
                <li>
                  Mammography, typically recommended for women in certain age
                  groups or when ultrasound findings need further clarification
                </li>
                <li>
                  Fine needle aspiration or biopsy, used when a lump needs
                  tissue-level evaluation to confirm whether it&apos;s benign or
                  requires further treatment
                </li>
                <li>
                  Follow-up monitoring, sometimes recommended for lumps that are
                  likely benign but warrant observation over time
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens After the Evaluation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  If the lump is clearly benign (such as a simple cyst or
                  fibroadenoma), your doctor may recommend monitoring or, in
                  some cases, no treatment at all
                </li>
                <li>
                  If further testing is needed, your doctor will explain what
                  additional imaging or biopsy involves and why it&apos;s
                  recommended
                </li>
                <li>
                  If a concerning finding is identified, your doctor will
                  discuss next steps clearly, which may include referral to a
                  breast specialist or oncologist for further management
                </li>
                <li>
                  Emotional support matters throughout this process, and a good
                  doctor takes time to explain findings and address any anxiety
                  along the way
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Perform a Breast Self-Examination
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choose a consistent time each month, ideally a few days after
                  your period ends, when breast tissue is least likely to be
                  swollen or tender
                </li>
                <li>
                  Visually inspect your breasts in front of a mirror, looking
                  for any changes in shape, size, symmetry, or skin texture
                </li>
                <li>
                  Use the pads of your fingers to feel the breast tissue in a
                  systematic pattern, covering the entire breast and underarm
                  area
                </li>
                <li>
                  Check for any new lumps, thickening, or areas that feel
                  different from the surrounding tissue
                </li>
                <li>
                  Note any changes over time, since comparing to previous months
                  can help identify what&apos;s genuinely new versus a normal,
                  recurring pattern
                </li>
                <li>
                  Remember that self-exams are a helpful habit, not a substitute
                  for professional evaluation, especially if you notice anything
                  unusual
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why See a Gynaecologist for Breast Concerns
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gynaecologists routinely evaluate breast health as part of
                  comprehensive women&apos;s healthcare, alongside reproductive
                  health
                </li>
                <li>
                  They can assess breast changes in the context of your overall
                  hormonal and reproductive health, which can be relevant to
                  certain benign breast conditions
                </li>
                <li>
                  They can guide appropriate next steps, including referral to a
                  breast surgeon or oncologist if further specialized evaluation
                  is needed
                </li>
                <li>
                  A gynaecologist often already knows your broader medical
                  history, allowing for more informed, contextual evaluation
                </li>
                <li>
                  Comfort and continuity — many women prefer discussing a breast
                  concern with a doctor they already trust and have an ongoing
                  relationship with
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Breast Lump Checkup with a Trusted
                Gynaecologist in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers thorough
                women&apos;s health evaluations, including breast concerns, as
                part of her comprehensive gynaecological practice in Moradabad.
                According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her approach to patient care is especially relevant for a
                concern as sensitive as a breast lump:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A &quot;Her Health First&quot; philosophy, ensuring breast
                  concerns are taken seriously and evaluated thoroughly rather
                  than dismissed
                </li>
                <li>
                  Advanced diagnostic imaging capabilities, including a Voluson
                  E22 3D/4D ultrasound machine, useful for initial breast
                  evaluation alongside other diagnostic needs
                </li>
                <li>
                  A calm, supportive consultation style, important for easing
                  the natural anxiety that comes with discovering a breast lump
                </li>
                <li>
                  Coordinated referral for further specialized care, when a
                  finding requires evaluation beyond initial assessment
                </li>
                <li>
                  Comprehensive women&apos;s health services, allowing breast
                  health to be discussed and monitored alongside routine
                  gynaecological care
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently describe
                feeling comfortable, heard, and clearly informed throughout
                their consultations — qualities that matter enormously when
                discussing a concern as sensitive as a breast lump. The clinic
                is located in Gandhi Nagar, Moradabad, making it accessible to
                women across the city seeking prompt, thorough evaluation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Breast Checkup Appointment
              </h2>

              <p className="mb-4 text-gray-700">
                A little preparation can help you get the most out of your
                consultation:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note when you first noticed the lump, along with any changes
                  in size or texture since then
                </li>
                <li>
                  Track the timing relative to your menstrual cycle, since some
                  lumps fluctuate with hormonal changes
                </li>
                <li>
                  Note any other symptoms, such as pain, nipple discharge, or
                  skin changes
                </li>
                <li>
                  Mention any family history of breast or ovarian cancer, since
                  this can influence recommended screening
                </li>
                <li>
                  List any hormonal medications or contraceptives you&apos;re
                  currently using
                </li>
                <li>
                  Write down your questions in advance, so you don&apos;t forget
                  anything important during the appointment
                </li>
                <li>
                  Wear a top that&apos;s easy to remove or lift for the
                  examination, for your own comfort
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Managing Anxiety While Waiting for Results
              </h2>

              <p className="mb-4 text-gray-700">
                Waiting for test results after a breast lump evaluation can be
                one of the most stressful parts of the process. A few things can
                help:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Remind yourself that most lumps are benign, even though
                  it&apos;s natural to feel anxious during the waiting period
                </li>
                <li>
                  Ask your doctor for a realistic timeline on when results will
                  be available, so you know what to expect
                </li>
                <li>
                  Avoid excessive online searching, which can often increase
                  anxiety rather than provide clarity
                </li>
                <li>
                  Lean on support from family or friends during the waiting
                  period, rather than managing the worry alone
                </li>
                <li>
                  Keep any follow-up appointments, even if you&apos;re feeling
                  anxious about what they might reveal — clarity is generally
                  better than prolonged uncertainty
                </li>
                <li>
                  Reach out to your doctor&apos;s clinic if you have questions
                  while waiting, rather than sitting with unanswered concerns
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Breast Lumps
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;Most breast lumps are
                  cancer.&quot;{" "}
                  <strong>Fact:</strong> The majority of breast lumps are
                  benign, though every lump still deserves proper evaluation to
                  confirm this.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;If a lump doesn&apos;t hurt,
                  it&apos;s not serious.&quot;{" "}
                  <strong>Fact:</strong> Painless lumps can sometimes be more
                  concerning than painful ones, so absence of pain shouldn&apos;t
                  be used to rule out the need for evaluation.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Only older women need to worry
                  about breast lumps.&quot;{" "}
                  <strong>Fact:</strong> While risk increases with age, breast
                  lumps can occur in women of any age and should always be
                  evaluated.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Breast self-exams alone are
                  enough to catch problems early.&quot;{" "}
                  <strong>Fact:</strong> Self-exams are a helpful habit, but
                  they should be combined with regular professional evaluation
                  and any recommended screening.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;A previous normal mammogram means
                  you don&apos;t need to check new lumps.&quot;{" "}
                  <strong>Fact:</strong> Any new lump should be evaluated
                  regardless of past normal results, since breast tissue can
                  change over time.
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
                        Gynaecologist & Women&apos;s Health Specialist (MBBS,
                        MS)
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