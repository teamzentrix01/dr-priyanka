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

export default function GenitalWartRemovalDoctor() {
  const faqs = [
    {
      q: "Are genital warts dangerous?",
      a: "Genital warts themselves are caused by low-risk HPV and are not cancerous, but a doctor should confirm the diagnosis to rule out other conditions.",
    },
    {
      q: "Can genital warts go away on their own?",
      a: "Some small warts may resolve without treatment, but most require in-clinic treatment for complete and faster clearance.",
    },
    {
      q: "Is genital wart removal painful?",
      a: "Most in-clinic procedures use local anaesthesia and cause only mild, short-lived discomfort during recovery.",
    },
    {
      q: "How many sessions are needed to remove genital warts completely?",
      a: "This varies by treatment type and wart size — some clear in one session, while others need multiple visits over a few weeks.",
    },
    {
      q: "Can I get pregnant if I have had genital warts?",
      a: "Yes, genital warts do not typically affect fertility, though your doctor may recommend treatment before delivery in some cases.",
    },
    {
      q: "Will genital warts come back after treatment?",
      a: "Recurrence is possible since the HPV virus can remain dormant, so regular follow-up is recommended to catch it early.",
    },
    {
      q: "Does the HPV vaccine help if I already have genital warts?",
      a: "The vaccine does not treat existing warts but can help protect against other HPV strains you have not yet been exposed to.",
    },
    {
      q: "Is it safe to have sex during genital wart treatment?",
      a: "It is best to avoid intercourse until the treated area is fully healed and your doctor confirms it is safe to resume.",
    },
    {
      q: "Are genital warts the same as HPV that causes cervical cancer?",
      a: "No, genital warts are usually caused by low-risk HPV types, while cervical cancer is linked to different, high-risk HPV types — though both should be checked.",
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
                Genital Wart Removal Doctor in Moradabad: Complete Patient Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Discovering an unusual bump or growth in the genital area can
                feel worrying and embarrassing, but genital warts are a common,
                treatable condition. If you are searching for an experienced
                genital wart removal doctor in Moradabad, this guide explains
                what genital warts are, how they are diagnosed, and the
                treatment options available — with expert gynaecological
                guidance from Dr. Priyanka Pachauri, a trusted women&apos;s
                health specialist in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Are Genital Warts?
              </h2>

              <p className="mb-4 text-gray-700">
                Genital warts, medically known as condylomata acuminata, are
                small, flesh-coloured growths that appear on or around the
                genital area.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Caused by certain strains of the Human Papillomavirus (HPV)
                </li>
                <li>
                  Usually appear as soft, skin-coloured or greyish bumps
                </li>
                <li>
                  Can occur singly or in clusters resembling a small cauliflower
                </li>
                <li>
                  May appear on the vulva, vagina, cervix, groin, or around the
                  anus
                </li>
                <li>
                  Range in size from a few millimetres to several centimetres
                </li>
                <li>
                  Some warts are visible externally, while others may be
                  internal and detected only during examination
                </li>
                <li>
                  Usually painless, though some women experience itching, mild
                  bleeding, or discomfort
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Causes Genital Warts?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Caused primarily by low-risk HPV types, most commonly HPV 6
                  and HPV 11
                </li>
                <li>
                  Spread through skin-to-skin genital contact, including
                  vaginal, anal, and sometimes oral contact
                </li>
                <li>
                  Can take weeks to months to appear after exposure to the virus
                </li>
                <li>
                  Risk increases with multiple sexual partners or unprotected
                  intercourse
                </li>
                <li>
                  Weakened immunity can make warts more likely to develop or
                  persist
                </li>
                <li>
                  Smoking has been linked to a higher risk of HPV-related skin
                  changes
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                It is important to know that low-risk HPV types causing warts
                are different from high-risk HPV types (like HPV 16 and 18)
                linked to cervical cancer — though both should be evaluated by a
                doctor.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of Genital Warts
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small, soft, flesh-coloured or greyish bumps in the genital
                  area
                </li>
                <li>
                  Growths that appear alone or in a cluster
                </li>
                <li>
                  Itching or mild irritation around the affected area
                </li>
                <li>
                  Occasional light bleeding, especially after intercourse
                </li>
                <li>
                  Discomfort or a feeling of dampness in the genital region
                </li>
                <li>
                  In some cases, no visible symptoms at all — detected only
                  during a routine gynaecological exam
                </li>
                <li>
                  Unusual vaginal discharge in some women
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If you notice any of these signs, it is important not to
                self-diagnose or self-treat, as several skin conditions can
                resemble genital warts. A proper gynaecological examination is
                essential for an accurate diagnosis.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Are Genital Warts Diagnosed?
              </h2>

              <p className="mb-4 text-gray-700">
                A thorough evaluation by a gynaecologist typically includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed medical and sexual history discussion in a
                  confidential setting
                </li>
                <li>
                  Visual examination of the external genital area
                </li>
                <li>
                  Speculum examination to check the vaginal walls and cervix, if
                  needed
                </li>
                <li>
                  Pap smear or HPV testing to check for high-risk HPV strains
                  and cervical changes
                </li>
                <li>
                  Colposcopy (magnified examination) in cases where warts are
                  near the cervix or difficult to assess visually
                </li>
                <li>
                  Biopsy in rare cases, if the growth looks unusual and needs
                  confirmation
                </li>
                <li>
                  Screening for other sexually transmitted infections, since
                  they can sometimes occur together
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Genital Wart Removal Treatment Options
              </h2>

              <p className="mb-4 text-gray-700">
                There is no single &quot;best&quot; treatment — the right option
                depends on the number, size, and location of warts, along with
                the patient&apos;s overall health. Common treatment approaches
                include:
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Topical Medications
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Prescription creams or solutions applied directly to the warts
                </li>
                <li>
                  Work by helping the body&apos;s immune system fight the
                  HPV-infected tissue
                </li>
                <li>
                  Typically used over several weeks under medical supervision
                </li>
                <li>
                  Not suitable for internal or cervical warts
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Cryotherapy (Freezing Treatment)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Liquid nitrogen is used to freeze and destroy wart tissue
                </li>
                <li>
                  Performed in-clinic with minimal discomfort
                </li>
                <li>
                  May require multiple sessions for complete clearance
                </li>
                <li>
                  Suitable for smaller, external warts
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Electrocautery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uses controlled heat to burn off wart tissue precisely
                </li>
                <li>
                  Performed under local anaesthesia
                </li>
                <li>
                  Effective for warts that have not responded to topical
                  treatment
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Laser Removal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uses a focused laser beam to destroy wart tissue with
                  precision
                </li>
                <li>
                  Suitable for larger or widespread warts
                </li>
                <li>
                  Minimal scarring and quick healing in most cases
                </li>
                <li>
                  Often preferred for warts in sensitive or hard-to-reach areas
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Surgical Excision
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Warts are carefully cut away with margins of healthy tissue
                </li>
                <li>
                  Recommended for large, thick, or stubborn warts
                </li>
                <li>
                  Performed under local or general anaesthesia depending on
                  extent
                </li>
                <li>
                  Provides a tissue sample for biopsy confirmation if needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Genital Wart Removal Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  An initial consultation to confirm diagnosis and discuss the
                  most suitable treatment
                </li>
                <li>
                  A clear explanation of the chosen procedure, expected
                  sessions, and aftercare
                </li>
                <li>
                  Treatment performed in a clean, private, and comfortable
                  clinical setting
                </li>
                <li>
                  Local anaesthesia used where needed to minimise discomfort
                </li>
                <li>
                  Most in-clinic procedures take only a short time to complete
                </li>
                <li>
                  Follow-up visits scheduled to monitor healing and check for
                  recurrence
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Genital Wart Removal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild soreness, redness, or swelling is common for a few days
                  after treatment
                </li>
                <li>
                  Most women can resume normal daily activities within 24–48
                  hours
                </li>
                <li>
                  Avoid sexual intercourse until the treated area has fully
                  healed, as advised by your doctor
                </li>
                <li>
                  Keep the area clean and dry to prevent infection
                </li>
                <li>
                  Avoid tight clothing that may irritate the healing skin
                </li>
                <li>
                  Follow-up appointments help confirm complete healing and check
                  for new wart formation
                </li>
                <li>
                  Full healing typically takes one to a few weeks, depending on
                  the treatment method used
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can Genital Warts Come Back After Treatment?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Treatment removes the visible warts, but the HPV virus can
                  remain dormant in the body
                </li>
                <li>
                  Warts may occasionally recur, especially if immunity is low
                </li>
                <li>
                  Regular follow-up visits help catch and treat any recurrence
                  early
                </li>
                <li>
                  Maintaining a healthy immune system through good nutrition and
                  lifestyle supports long-term control
                </li>
                <li>
                  Practising safe sexual habits reduces the risk of reinfection
                  or spreading HPV to a partner
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Prevention Tips for Genital Warts and HPV
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  HPV vaccination is highly effective in preventing the strains
                  that most commonly cause genital warts
                </li>
                <li>
                  Using condoms consistently reduces (though does not eliminate)
                  the risk of HPV transmission
                </li>
                <li>
                  Limiting the number of sexual partners lowers exposure risk
                </li>
                <li>
                  Regular gynaecological check-ups help with early detection and
                  treatment
                </li>
                <li>
                  Avoid sharing personal items that may carry infection risk
                </li>
                <li>
                  Open communication with partners about sexual health supports
                  early detection and treatment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Genital Warts vs Other Genital Skin Conditions: Know the
                Difference
              </h2>

              <p className="mb-4 text-gray-700">
                Since several conditions can look similar to genital warts, an
                accurate diagnosis matters. Here&apos;s how doctors typically
                differentiate:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Genital warts:</strong> Soft, flesh-coloured, often
                  clustered, caused by HPV
                </li>
                <li>
                  <strong>Molluscum contagiosum:</strong> Small, dome-shaped
                  bumps with a central dimple, caused by a different virus
                </li>
                <li>
                  <strong>Skin tags:</strong> Soft, harmless flaps of skin
                  unrelated to any infection
                </li>
                <li>
                  <strong>Vaginal cysts:</strong> Fluid-filled lumps, usually
                  smooth and non-clustered
                </li>
                <li>
                  <strong>Herpes sores:</strong> Painful, fluid-filled blisters
                  that break open, unlike the typically painless warts
                </li>
                <li>
                  <strong>Ingrown hairs or folliculitis:</strong> Small, tender
                  bumps often near hair follicles, unrelated to HPV
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Because these conditions require very different treatments, a
                proper clinical examination is the only reliable way to know
                exactly what you are dealing with.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Wellbeing: You Are Not Alone
              </h2>

              <p className="mb-4 text-gray-700">
                A genital wart diagnosis can bring feelings of anxiety,
                embarrassment, or worry about relationships — but it is important
                to remember:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Genital warts are extremely common, affecting a large
                  proportion of sexually active adults at some point
                </li>
                <li>
                  HPV infection does not reflect anything about a
                  person&apos;s character or choices
                </li>
                <li>
                  Treatment is straightforward, private, and highly effective
                </li>
                <li>
                  A supportive, non-judgemental doctor-patient relationship
                  makes a significant difference in comfort during diagnosis and
                  treatment
                </li>
                <li>
                  Open conversations with your doctor about concerns, questions,
                  or fears are always welcomed and kept confidential
                </li>
                <li>
                  Most women go on to have completely normal sexual and
                  reproductive health after treatment
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult a Gynaecologist Instead of Self-Treating?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Not every genital bump is a wart — conditions like molluscum
                  contagiosum, skin tags, or cysts can look similar
                </li>
                <li>
                  Self-medication with over-the-counter wart creams meant for
                  hands and feet can harm sensitive genital skin
                </li>
                <li>
                  A gynaecologist can rule out other conditions, including
                  precancerous changes, through proper examination
                </li>
                <li>
                  Professional in-clinic treatments are safer, more precise, and
                  reduce the chance of scarring
                </li>
                <li>
                  A doctor can guide you on HPV testing, vaccination, and
                  partner communication with confidentiality and sensitivity
                </li>
                <li>
                  Ongoing gynaecological follow-up ensures complete healing and
                  lowers recurrence risk
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Genital Health Concerns in
                Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a highly experienced Obstetrician,
                Gynaecologist & IVF Specialist in Moradabad, known for combining
                clinical precision with a compassionate, judgement-free approach
                to sensitive women&apos;s health concerns.
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
                  Comprehensive gynaecological evaluation for genital skin
                  concerns, including warts, cysts, and infections
                </li>
                <li>
                  Access to advanced diagnostic tools including colposcopy and
                  Pap smear testing
                </li>
                <li>
                  Private, confidential consultations for sensitive concerns
                </li>
                <li>
                  Known for taking time to explain diagnosis and treatment
                  options clearly, without judgement
                </li>
                <li>
                  Trusted by women across Moradabad and nearby Uttar Pradesh for
                  empathetic, thorough gynaecological care
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri for Genital Wart Evaluation in
                Moradabad
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