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

export default function LabiaplastyConsultationDoctor() {
  const faqs = [
    {
      q: "Is labiaplasty only a cosmetic procedure?",
      a: "No, many women seek it for functional reasons like discomfort during exercise or intercourse, in addition to aesthetic concerns.",
    },
    {
      q: "Is a consultation confidential?",
      a: "Yes, a proper consultation is private and confidential, focused entirely on your comfort and informed decision-making.",
    },
    {
      q: "Will labiaplasty affect sensation?",
      a: "When performed correctly by an experienced surgeon, natural sensation is generally preserved, though this should be discussed individually.",
    },
    {
      q: "How long is the recovery after labiaplasty?",
      a: "Most women resume light activity within a week, with full healing typically taking 6–8 weeks.",
    },
    {
      q: "Is labiaplasty painful?",
      a: "The procedure is performed under anaesthesia, and post-operative discomfort is generally mild and well managed with medication.",
    },
    {
      q: "Can labiaplasty be combined with childbirth-related repair?",
      a: "In some cases, related concerns can be addressed together, but this depends on individual anatomy and should be discussed during consultation.",
    },
    {
      q: "What is the difference between the trim and wedge techniques?",
      a: "The trim technique removes excess edge tissue, while the wedge technique removes a central section to preserve the natural edge and contour.",
    },
    {
      q: "Do I need surgery, or could my symptoms be treated another way?",
      a: "Not always — a thorough consultation can identify whether your symptoms are better addressed with non-surgical care instead.",
    },
    {
      q: "When can I resume intercourse after labiaplasty?",
      a: "Most doctors advise waiting several weeks until complete healing is confirmed at a follow-up visit.",
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
                Labiaplasty Consultation Doctor in Moradabad: A Complete,
                Private Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Discovering an unusual bump or discomfort related to labial
                size, shape, or symmetry can feel worrying to raise, yet many
                women experience these concerns quietly. If you are looking for
                a trusted labiaplasty consultation doctor in Moradabad, this
                guide walks you through what labiaplasty is, who it may help,
                and what a proper medical evaluation involves, with guidance
                from Dr. Priyanka Pachauri, a gynaecologist in Moradabad known
                for her private, compassionate approach to sensitive
                women&apos;s health concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Labiaplasty?
              </h2>

              <p className="mb-4 text-gray-700">
                Labiaplasty is a surgical procedure that reshapes or reduces the
                labia minora (inner vaginal lips) or, less commonly, the labia
                majora (outer lips).
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Performed for both functional comfort and aesthetic reasons
                </li>
                <li>
                  Aims to reduce excess or asymmetrical labial tissue
                </li>
                <li>
                  Can relieve physical irritation caused by enlarged or uneven
                  labia
                </li>
                <li>
                  Often considered after childbirth, hormonal changes, or with
                  age-related tissue changes
                </li>
                <li>
                  Preserves natural sensation and function when performed
                  correctly
                </li>
                <li>
                  Usually a day-care procedure with a relatively short recovery
                  period
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Do Women Consider Labiaplasty?
              </h2>

              <p className="mb-4 text-gray-700">
                Reasons for seeking a consultation vary widely and are entirely
                personal. Common motivations include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Physical discomfort or chafing during walking, cycling, or
                  exercise
                </li>
                <li>
                  Pain, pulling, or irritation during intercourse
                </li>
                <li>
                  Difficulty maintaining hygiene due to excess or overlapping
                  tissue
                </li>
                <li>
                  Visible bulging or discomfort when wearing fitted clothing or
                  swimwear
                </li>
                <li>
                  Changes in labial size or shape after childbirth
                </li>
                <li>
                  Age-related or hormonal changes affecting labial tissue
                </li>
                <li>
                  Self-consciousness about appearance affecting confidence or
                  intimacy
                </li>
                <li>
                  Recurrent skin irritation, chafing, or minor infections linked
                  to tissue overlap
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                There is no single &quot;right&quot; reason to seek a
                consultation — physical discomfort and personal confidence are
                both valid, legitimate concerns worth discussing with a doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During a Labiaplasty Consultation?
              </h2>

              <p className="mb-4 text-gray-700">
                A proper consultation is private, respectful, and focused
                entirely on your comfort and understanding. It typically
                includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A confidential discussion of your concerns, symptoms, and
                  goals
                </li>
                <li>
                  A gentle physical examination to assess labial anatomy and any
                  related symptoms
                </li>
                <li>
                  Review of your medical history, including childbirth history
                  and any prior pelvic surgery
                </li>
                <li>
                  An honest conversation about whether your concerns are
                  functional, aesthetic, or both
                </li>
                <li>
                  Explanation of all available options — surgical and
                  non-surgical — with realistic expectations
                </li>
                <li>
                  Discussion of risks, recovery, and what results are reasonably
                  achievable
                </li>
                <li>
                  Plenty of time for your questions, without judgement or rushed
                  answers
                </li>
                <li>
                  A clear, individualised recommendation based on your specific
                  anatomy and goals
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who May Benefit from a Labiaplasty Consultation?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women experiencing ongoing physical discomfort linked to
                  labial size or asymmetry
                </li>
                <li>
                  Women who have noticed changes after childbirth that affect
                  comfort or confidence
                </li>
                <li>
                  Women dealing with recurrent irritation or hygiene difficulty
                  due to excess tissue
                </li>
                <li>
                  Women who feel self-conscious in a way that affects intimacy
                  or daily confidence
                </li>
                <li>
                  Women who have researched the topic and want accurate,
                  professional medical guidance rather than online assumptions
                </li>
                <li>
                  Anyone unsure whether their symptoms are &quot;normal&quot;
                  and want reassurance or clarity from a specialist
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Non-Surgical Considerations Before Choosing Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Not every concern requires surgery. A thorough consultation
                should also explore:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Whether symptoms are related to a treatable skin condition or
                  infection rather than anatomy
                </li>
                <li>
                  Whether recent changes are linked to childbirth, hormonal
                  shifts, or simply natural variation in anatomy over time
                </li>
                <li>
                  Use of soft, breathable fabrics and looser clothing to reduce
                  friction-related discomfort
                </li>
                <li>
                  Topical treatments for irritation, dryness, or minor skin
                  changes
                </li>
                <li>
                  Pelvic floor physiotherapy if discomfort is linked to broader
                  pelvic tension
                </li>
                <li>
                  Realistic discussion about what surgery can and cannot change,
                  to support informed decision-making
                </li>
                <li>
                  Time to reflect before committing to any procedure — a good
                  doctor never pressures a decision
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Labiaplasty Techniques: A General Overview
              </h2>

              <p className="mb-4 text-gray-700">
                While exact techniques depend on the surgeon and individual
                anatomy, common approaches include:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Trim Technique
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes excess tissue along the edge of the labia minora
                </li>
                <li>
                  Straightforward technique with predictable results
                </li>
                <li>
                  Commonly used for straightforward tissue reduction
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Wedge Technique
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes a wedge-shaped section of tissue while preserving the
                  natural edge
                </li>
                <li>
                  Aims to maintain a more natural contour and colouring
                </li>
                <li>
                  Often preferred for a more natural-looking result
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Combination Approaches
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Some cases require a tailored combination of techniques
                </li>
                <li>
                  Chosen based on individual anatomy, symptoms, and aesthetic
                  goals
                </li>
                <li>
                  Decided only after a detailed in-person evaluation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect After Labiaplasty Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild swelling, bruising, or discomfort in the first few days
                  is normal
                </li>
                <li>
                  Most women can resume light daily activities within a week
                </li>
                <li>
                  Strenuous exercise, cycling, and sexual activity are typically
                  avoided for several weeks
                </li>
                <li>
                  Following wound care instructions closely supports smooth
                  healing
                </li>
                <li>
                  Full healing and final results are usually visible within 6–8
                  weeks
                </li>
                <li>
                  Follow-up visits help monitor healing and address any concerns
                  promptly
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Tips After Labiaplasty
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Keep the area clean and dry as instructed by your doctor
                </li>
                <li>
                  Wear loose, breathable clothing to reduce friction during
                  healing
                </li>
                <li>
                  Avoid strenuous exercise, cycling, and heavy lifting for the
                  advised recovery period
                </li>
                <li>
                  Avoid sexual intercourse until your doctor confirms complete
                  healing
                </li>
                <li>
                  Use prescribed pain relief as needed and avoid self-medicating
                  beyond advice
                </li>
                <li>
                  Attend all follow-up appointments to monitor healing progress
                </li>
                <li>
                  Watch for warning signs like fever, unusual discharge, or
                  worsening pain, and contact your doctor promptly if these
                  occur
                </li>
                <li>
                  Be patient — some swelling can take a few weeks to fully
                  settle
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Setting Realistic Expectations
              </h2>

              <p className="mb-4 text-gray-700">
                A trustworthy consultation should always help you form realistic,
                honest expectations rather than promising a specific look or
                outcome:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Every woman&apos;s anatomy is different, and there is a wide
                  range of what is medically normal
                </li>
                <li>
                  Results are about comfort and confidence, not matching an
                  idealised or edited image
                </li>
                <li>
                  Swelling and healing can temporarily change appearance before
                  final results settle
                </li>
                <li>
                  Minor natural asymmetry is common and usually not something
                  that needs correction
                </li>
                <li>
                  A good doctor will tell you honestly if surgery is unlikely to
                  meaningfully improve your specific concern
                </li>
                <li>
                  Recovery experiences vary, and your doctor should prepare you
                  for the realistic day-to-day healing process, not just the end
                  result
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions Worth Asking During Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What exactly is causing my discomfort — is it anatomical,
                  hormonal, or related to another condition?
                </li>
                <li>
                  What are all my treatment options, including non-surgical ones?
                </li>
                <li>
                  What technique would be recommended for my specific anatomy,
                  and why?
                </li>
                <li>
                  What results are realistic for my case?
                </li>
                <li>
                  What does the recovery process actually involve, day by day?
                </li>
                <li>
                  What are the possible risks and how are they minimised?
                </li>
                <li>
                  How many follow-up visits will I need, and what do they
                  involve?
                </li>
                <li>
                  What should I do if I notice something unusual during
                  recovery?
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Writing your questions down before the appointment can help you
                feel prepared and ensure nothing important gets missed during
                the conversation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing and Confidence
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It is completely normal to feel nervous or self-conscious
                  discussing this topic, even with a doctor
                </li>
                <li>
                  Many women carry these concerns silently for years before ever
                  raising them
                </li>
                <li>
                  A respectful, unhurried consultation can bring significant
                  emotional relief, regardless of the final decision
                </li>
                <li>
                  Choosing not to proceed with surgery after a consultation is
                  just as valid an outcome as choosing to proceed
                </li>
                <li>
                  The goal of a good consultation is clarity and comfort, not
                  pressure toward any particular choice
                </li>
                <li>
                  You deserve to leave your appointment feeling informed,
                  respected, and unrushed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks and Considerations to Discuss With Your Doctor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Possible bleeding, infection, or scarring at the surgical site
                </li>
                <li>
                  Temporary or, rarely, prolonged changes in sensation
                </li>
                <li>
                  Asymmetry that may require minor revision in some cases
                </li>
                <li>
                  Anaesthesia-related risks, reviewed during pre-surgical
                  evaluation
                </li>
                <li>
                  Importance of realistic expectations discussed clearly before
                  any decision
                </li>
                <li>
                  Value of choosing an experienced gynaecological surgeon to
                  minimise complications
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Judgement-Free Consultation Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Concerns about genital appearance or comfort are common, even
                  though rarely discussed openly
                </li>
                <li>
                  A respectful, private consultation removes the anxiety of
                  feeling &quot;abnormal&quot;
                </li>
                <li>
                  Professional guidance helps separate genuine medical need from
                  unrealistic comparisons often seen online
                </li>
                <li>
                  An experienced gynaecologist can identify if symptoms point to
                  another treatable condition instead
                </li>
                <li>
                  Confidentiality and sensitivity are essential parts of quality
                  care for this topic
                </li>
                <li>
                  You are always in control of the decision — a consultation is
                  about information, not obligation
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for a Labiaplasty Consultation
                in Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced Obstetrician,
                Gynaecologist & IVF Specialist in Moradabad, known for her
                empathetic, private approach to sensitive women&apos;s health
                concerns.
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
                  Comprehensive gynaecological evaluation for comfort, hygiene,
                  and anatomical concerns
                </li>
                <li>
                  Known for taking time to listen without judgement before
                  recommending any option
                </li>
                <li>
                  Provides honest guidance on whether surgical or non-surgical
                  approaches suit your specific concern
                </li>
                <li>
                  Trusted by women across Moradabad and nearby Uttar Pradesh for
                  confidential, respectful gynaecological care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri for a Private Labiaplasty
                Consultation in Moradabad
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