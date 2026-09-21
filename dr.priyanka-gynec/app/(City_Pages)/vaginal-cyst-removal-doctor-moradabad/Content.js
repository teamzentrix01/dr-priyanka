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

export default function VaginalCystRemovalDoctor() {
  const faqs = [
    {
      q: "Are vaginal cysts dangerous?",
      a: "Most vaginal cysts are benign and harmless, but any new or changing lump should be evaluated by a doctor to confirm the diagnosis.",
    },
    {
      q: "Can a vaginal cyst go away on its own?",
      a: "Small, symptom-free cysts can remain stable for years without treatment, but infected or painful cysts usually need medical intervention.",
    },
    {
      q: "Is vaginal cyst removal painful?",
      a: "Most procedures use local anaesthesia and cause only mild, short-lived discomfort during recovery.",
    },
    {
      q: "What is a Bartholin's cyst and how is it treated?",
      a: "It is a common cyst near the vaginal opening, treated with warm compresses, drainage, marsupialisation, or excision depending on severity.",
    },
    {
      q: "How long does recovery take after vaginal cyst removal?",
      a: "Most women resume normal activities within a few days to a week, with full healing in a few weeks.",
    },
    {
      q: "Can vaginal cysts come back after treatment?",
      a: "Recurrence is possible, especially after simple drainage, but complete surgical excision significantly lowers this risk.",
    },
    {
      q: "Will a vaginal cyst affect my fertility or pregnancy?",
      a: "Most vaginal cysts do not affect fertility, though large or infected cysts should be treated before pregnancy or delivery when possible.",
    },
    {
      q: "When should I see a doctor urgently for a vaginal cyst?",
      a: "Seek urgent care if you notice severe pain, rapid swelling, fever, or pus-like discharge, as these may indicate an infected cyst.",
    },
    {
      q: "Is it safe to have sex during vaginal cyst treatment?",
      a: "It is best to avoid intercourse until the treated area is fully healed and your doctor confirms it is safe to resume.",
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
                Vaginal Cyst Removal Doctor in Moradabad: Complete Patient Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Finding a lump or swelling in the vaginal area can be alarming,
                but vaginal cysts are a common and usually harmless
                gynaecological finding. If you are searching for an experienced
                vaginal cyst removal doctor in Moradabad, this guide explains
                the types of vaginal cysts, how they are diagnosed, and the
                treatment options available — with expert insight from Dr.
                Priyanka Pachauri, a trusted gynaecologist and laparoscopic
                surgeon in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a Vaginal Cyst?
              </h2>

              <p className="mb-4 text-gray-700">
                A vaginal cyst is a small, fluid-filled sac that develops in or
                around the vaginal wall or nearby glands.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Usually benign (non-cancerous) in nature
                </li>
                <li>
                  Can range from tiny, unnoticeable lumps to larger,
                  uncomfortable swellings
                </li>
                <li>
                  May be present for years without causing symptoms
                </li>
                <li>
                  Often discovered incidentally during a routine gynaecological
                  examination
                </li>
                <li>
                  Rarely linked to cancer, though any new or changing lump
                  should always be evaluated
                </li>
                <li>
                  Can occur at any age, though some types are more common after
                  childbirth or during reproductive years
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Types of Vaginal Cysts
              </h2>

              <p className="mb-4 text-gray-700">
                Understanding the type of cyst helps determine the right
                treatment approach:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Bartholin&apos;s Cyst
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Forms when the Bartholin&apos;s glands near the vaginal
                  opening become blocked
                </li>
                <li>
                  One of the most common types of vaginal cysts
                </li>
                <li>
                  Can become infected, leading to a painful abscess requiring
                  urgent treatment
                </li>
                <li>
                  Usually appears as a swelling on one side of the vaginal
                  opening
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Gartner&apos;s Duct Cyst
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Develops from leftover embryonic tissue along the side wall of
                  the vagina
                </li>
                <li>
                  Usually small and symptom-free, often discovered during a
                  routine exam
                </li>
                <li>
                  Rarely requires treatment unless it grows large or becomes
                  symptomatic
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Vaginal Inclusion Cyst
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Commonly develops after childbirth or vaginal surgery,
                  including episiotomy repair
                </li>
                <li>
                  Forms when tissue becomes trapped beneath the vaginal skin
                  surface
                </li>
                <li>
                  Usually small, firm, and painless
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Mucous Cyst
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Filled with mucus-like fluid, often found on the vaginal wall
                </li>
                <li>
                  Generally harmless and only treated if causing discomfort
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Müllerian Cyst
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Arises from remnants of embryonic reproductive tissue
                </li>
                <li>
                  Usually located on the front or side wall of the vagina
                </li>
                <li>
                  Typically monitored unless symptomatic
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Causes Vaginal Cysts?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blockage of glands near the vaginal opening, especially the
                  Bartholin&apos;s glands
                </li>
                <li>
                  Leftover embryonic tissue that persists into adulthood
                </li>
                <li>
                  Trauma or tissue trapping during childbirth or vaginal surgery
                </li>
                <li>
                  Episiotomy or perineal tear repair complications
                </li>
                <li>
                  Chronic irritation or minor injury to the vaginal wall
                </li>
                <li>
                  In rare cases, infection contributing to gland blockage and
                  cyst formation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms That May Indicate a Vaginal Cyst
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A noticeable lump or swelling in or around the vaginal wall or
                  opening
                </li>
                <li>
                  Discomfort or pressure during sitting, walking, or
                  intercourse
                </li>
                <li>
                  Pain, redness, or warmth around the area if the cyst becomes
                  infected
                </li>
                <li>
                  A feeling of fullness or a foreign-body sensation in the
                  vagina
                </li>
                <li>
                  Occasional discharge if the cyst is infected or ruptures
                </li>
                <li>
                  Fever and increasing pain, which may indicate an abscess
                  requiring urgent care
                </li>
                <li>
                  In many cases, no symptoms at all — discovered only during a
                  gynaecological exam
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you notice a new lump, swelling, or persistent discomfort,
                avoid self-diagnosing or attempting to drain it at home, as this
                can lead to infection or delayed proper treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Are Vaginal Cysts Diagnosed?
              </h2>

              <p className="mb-4 text-gray-700">
                A thorough evaluation by a gynaecologist typically includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed medical history and discussion of symptoms
                </li>
                <li>
                  Visual and physical pelvic examination to assess the
                  cyst&apos;s size, location, and tenderness
                </li>
                <li>
                  Assessment for signs of infection, such as redness, warmth, or
                  abscess formation
                </li>
                <li>
                  Pelvic ultrasound to confirm the cyst&apos;s nature and rule
                  out other conditions
                </li>
                <li>
                  Biopsy in rare cases where the growth appears unusual or does
                  not match a typical cyst pattern
                </li>
                <li>
                  Screening for infection if the cyst appears inflamed or is
                  causing significant pain
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Vaginal Cyst Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                The right treatment depends on the cyst&apos;s size, type,
                symptoms, and whether infection is present.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Watchful Waiting
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small, symptom-free cysts often require no treatment at all
                </li>
                <li>
                  Regular monitoring during routine gynaecological check-ups is
                  usually sufficient
                </li>
                <li>
                  Many cysts remain stable for years without causing any
                  problems
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Warm Sitz Baths
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Used for mild Bartholin&apos;s cyst discomfort
                </li>
                <li>
                  Can help small cysts drain naturally and reduce swelling
                </li>
                <li>
                  A simple, non-invasive first step for mild cases
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Incision and Drainage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed for painful or infected cysts, especially
                  Bartholin&apos;s abscesses
                </li>
                <li>
                  Provides quick relief from pressure and pain
                </li>
                <li>
                  May be combined with a small drainage catheter to reduce
                  recurrence risk
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Marsupialisation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A minor surgical procedure that creates a permanent small
                  opening to prevent the cyst from re-forming
                </li>
                <li>
                  Commonly used for recurrent Bartholin&apos;s cysts
                </li>
                <li>
                  Performed under local or short general anaesthesia as a
                  day-care procedure
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Complete Surgical Excision
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recommended for persistent, large, or recurrent cysts
                </li>
                <li>
                  Removes the entire cyst along with its lining to prevent
                  recurrence
                </li>
                <li>
                  Performed under local or general anaesthesia depending on size
                  and location
                </li>
                <li>
                  Provides a tissue sample for further evaluation if needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Vaginal Cyst Removal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An initial consultation to confirm diagnosis and discuss the
                  most suitable treatment approach
                </li>
                <li>
                  Clear explanation of the chosen procedure, anaesthesia used,
                  and expected recovery
                </li>
                <li>
                  Treatment performed in a clean, private, and comfortable
                  clinical setting
                </li>
                <li>
                  Most in-clinic procedures are completed relatively quickly,
                  often as day-care surgery
                </li>
                <li>
                  Local anaesthesia is used for minor procedures, while larger
                  or complex cysts may need general anaesthesia
                </li>
                <li>
                  Follow-up visits scheduled to monitor healing and confirm
                  complete resolution
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Vaginal Cyst Removal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild soreness, swelling, or bruising is common for a few days
                  after the procedure
                </li>
                <li>
                  Most women resume normal daily activities within a few days to
                  a week
                </li>
                <li>
                  Avoid sexual intercourse until the area has fully healed, as
                  advised by your doctor
                </li>
                <li>
                  Keep the area clean and dry to support healing and prevent
                  infection
                </li>
                <li>
                  Avoid tight clothing that may irritate the treated area during
                  recovery
                </li>
                <li>
                  Warm sitz baths may be recommended to ease discomfort and
                  support healing
                </li>
                <li>
                  Attend all follow-up appointments to confirm complete healing
                  and check for recurrence
                </li>
                <li>
                  Full healing typically takes one to a few weeks depending on
                  the procedure performed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can Vaginal Cysts Come Back After Treatment?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Simple drainage carries a higher chance of recurrence than
                  complete surgical excision
                </li>
                <li>
                  Marsupialisation significantly reduces the recurrence rate for
                  Bartholin&apos;s cysts
                </li>
                <li>
                  Complete excision offers the lowest recurrence risk since the
                  entire cyst lining is removed
                </li>
                <li>
                  Regular follow-up visits help catch and treat any recurrence
                  early
                </li>
                <li>
                  Practising good hygiene and prompt treatment of any gland
                  irritation can help reduce future risk
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventing Vaginal Cysts
              </h2>

              <p className="mb-4 text-gray-700">
                While not all cysts can be prevented, especially those linked to
                embryonic tissue, some simple habits can reduce risk and support
                early detection:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Practice good genital hygiene to reduce gland blockage and
                  irritation
                </li>
                <li>
                  Attend regular gynaecological check-ups so cysts are found
                  early, before they grow or become symptomatic
                </li>
                <li>
                  Seek prompt treatment for any vaginal irritation, infection,
                  or gland swelling
                </li>
                <li>
                  Discuss any concerns after childbirth or vaginal surgery with
                  your doctor during follow-up visits
                </li>
                <li>
                  Avoid tight, non-breathable underwear that can contribute to
                  irritation and blocked glands
                </li>
                <li>
                  Stay attentive to any new lump or change in the vaginal area
                  and get it checked rather than waiting
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Living With a Diagnosed Cyst: What Patients Should Know
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A confirmed, small, symptom-free cyst does not always require
                  immediate treatment
                </li>
                <li>
                  Your doctor will guide you on how often to monitor it during
                  routine visits
                </li>
                <li>
                  Most women with small, stable cysts live completely normal
                  lives without any complications
                </li>
                <li>
                  If the cyst grows, becomes painful, or shows signs of
                  infection, treatment can be arranged promptly
                </li>
                <li>
                  Keeping track of any changes in size, pain, or appearance
                  helps your doctor decide the right time for intervention
                </li>
                <li>
                  Open communication with your gynaecologist ensures you always
                  know the current status and next steps for your specific case
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See a Doctor Urgently?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sudden, severe pain in the vaginal area
                </li>
                <li>
                  Rapid swelling accompanied by redness, warmth, or fever
                </li>
                <li>
                  Pus-like or foul-smelling discharge from the swollen area
                </li>
                <li>
                  Difficulty sitting, walking, or performing daily activities due
                  to pain
                </li>
                <li>
                  A lump that grows quickly or changes in appearance
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                These symptoms may indicate an infected cyst or abscess
                requiring prompt medical attention rather than home care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult a Gynaecologist Instead of Self-Treating?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Not every genital lump is a simple cyst — some conditions
                  require different treatment entirely
                </li>
                <li>
                  Attempting to drain or pop a cyst at home can lead to
                  infection or scarring
                </li>
                <li>
                  A gynaecologist can accurately distinguish between cysts,
                  abscesses, and other growths through proper examination
                </li>
                <li>
                  Professional in-clinic treatment reduces the risk of
                  complications and recurrence
                </li>
                <li>
                  Ongoing follow-up ensures complete healing and addresses any
                  concerns promptly and confidentially
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Vaginal Cyst Treatment in
                Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced Obstetrician,
                Gynaecologist & IVF Specialist in Moradabad, known for her
                precise, compassionate approach to diagnosing and treating
                gynaecological conditions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  MS (O&G), FMAS, Advanced Infertility Fellowship
                </li>
                <li>
                  Co-leads Shree Advanced Urogynae Clinic, Moradabad
                </li>
                <li>
                  Consultant at Ujala Cygnus BrightStar Hospital
                </li>
                <li>
                  Comprehensive gynaecological evaluation for vaginal lumps,
                  cysts, and related concerns
                </li>
                <li>
                  Skilled in advanced laparoscopic and minor gynaecological
                  surgical procedures
                </li>
                <li>
                  Access to advanced diagnostic tools including pelvic ultrasound
                  for accurate assessment
                </li>
                <li>
                  Known for taking time to explain diagnosis and treatment
                  options clearly, without judgement
                </li>
                <li>
                  Trusted by women across Moradabad and nearby Uttar Pradesh for
                  confidential, thorough gynaecological care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri for Vaginal Cyst Evaluation in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                If you have noticed a lump, swelling, or discomfort in the
                vaginal area, don&apos;t delay — book a confidential
                consultation for accurate diagnosis and safe treatment.
              </p>

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