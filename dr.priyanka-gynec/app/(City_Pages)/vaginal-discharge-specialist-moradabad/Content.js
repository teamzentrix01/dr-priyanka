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

export default function VaginalDischargeSpecialist() {
  const faqs = [
    {
      q: "Is vaginal discharge always a sign of infection?",
      a: "No, discharge is a normal bodily function; only certain changes in color, odor, or consistency indicate a problem.",
    },
    {
      q: "Who can I consult for vaginal discharge concerns in Moradabad?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers confidential evaluation and treatment for discharge-related concerns.",
    },
    {
      q: "What does yellow or green discharge usually indicate?",
      a: "It can indicate an infection, such as an STI or bacterial infection, and should be evaluated promptly.",
    },
    {
      q: "What's the difference between a yeast infection and bacterial vaginosis?",
      a: "Yeast infections are caused by fungal overgrowth, while bacterial vaginosis is caused by a bacterial imbalance — they require different treatments.",
    },
    {
      q: "Can abnormal discharge be treated quickly?",
      a: "Yes, most causes, once properly diagnosed, respond well to appropriate treatment within a short period.",
    },
    {
      q: "Should I be tested for STIs if I notice unusual discharge?",
      a: "It depends on your symptoms and risk factors — your doctor can advise whether STI testing is appropriate.",
    },
    {
      q: "How do I book a consultation?",
      a: "You can call +91 90797 65578, message on WhatsApp at +91 89796 70705, or book through the clinic website.",
    },
    {
      q: "Where is the clinic located?",
      a: "The clinic is located at A2, near Old Roadways, Gandhi Nagar, Moradabad.",
    },
    {
      q: "Is douching recommended for vaginal hygiene?",
      a: "No, douching can disrupt the natural vaginal balance and increase the risk of infection.",
    },
    {
      q: "Is it normal to feel embarrassed discussing this with a doctor?",
      a: "It's a common feeling, but discharge concerns are one of the most routine reasons women see a gynaecologist, and doctors address them professionally.",
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
                Vaginal Discharge Specialist in Moradabad: When to Worry and
                When It&apos;s Normal
              </h1>

              <p className="mb-4 text-gray-700">
                Vaginal discharge is a completely normal part of a
                woman&apos;s reproductive health, yet many women feel uncertain
                about what&apos;s typical and what might signal an underlying
                issue. This uncertainty, combined with hesitation to discuss
                such a personal topic, often leads women to either ignore
                concerning symptoms or worry unnecessarily about normal
                variations.
              </p>

              <p className="text-gray-700">
                Understanding the difference — and knowing when to see a doctor
                — is an important part of taking care of your intimate health.
                This article explains what counts as normal discharge, the
                common causes of abnormal discharge, when to seek treatment, and
                why Dr. Priyanka Pachauri offers confidential, judgment-free
                care for vaginal discharge concerns in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Normal Vaginal Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discharge is a normal, healthy function that helps keep the
                  vagina clean and protected from infection
                </li>
                <li>
                  Consistency and amount change throughout the menstrual cycle,
                  becoming thinner and more abundant around ovulation, and
                  thicker at other times
                </li>
                <li>
                  Typical discharge is usually clear to milky white, without a
                  strong or unpleasant odor
                </li>
                <li>
                  Discharge can also change during pregnancy, with hormonal
                  birth control use, or during breastfeeding, as hormone levels
                  shift
                </li>
                <li>
                  Some daily variation is completely normal and doesn&apos;t
                  necessarily indicate a problem
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Signs of Abnormal Vaginal Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Change in color, such as yellow, green, gray, or discharge
                  with visible blood outside of your period
                </li>
                <li>
                  Strong, unpleasant, or fishy odor, which often signals an
                  underlying infection
                </li>
                <li>
                  Change in consistency, such as unusually thick, clumpy, or
                  frothy discharge
                </li>
                <li>
                  Increased amount that&apos;s noticeably different from your
                  usual pattern
                </li>
                <li>
                  Accompanying symptoms, such as itching, burning, redness, or
                  swelling
                </li>
                <li>
                  Pain during urination or intercourse, occurring alongside
                  changes in discharge
                </li>
                <li>
                  Discharge accompanied by pelvic pain or fever, which may
                  indicate a more significant infection
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Causes of Abnormal Vaginal Discharge
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Yeast Infections
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Caused by an overgrowth of naturally occurring yeast
                      (usually Candida)
                    </li>
                    <li>
                      Typically presents as thick, white, clumpy discharge,
                      often described as resembling cottage cheese
                    </li>
                    <li>
                      Commonly accompanied by itching, burning, and redness
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Bacterial Vaginosis (BV)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Caused by an imbalance in the normal bacteria present in
                      the vagina
                    </li>
                    <li>
                      Often presents as thin, grayish-white discharge with a
                      distinct fishy odor, particularly noticeable after
                      intercourse
                    </li>
                    <li>
                      One of the most common causes of abnormal discharge in
                      women of reproductive age
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Sexually Transmitted Infections (STIs)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Certain STIs, such as chlamydia, gonorrhea, or
                      trichomoniasis, can cause changes in discharge color,
                      consistency, and odor
                    </li>
                    <li>
                      May be accompanied by pelvic pain, burning during
                      urination, or discomfort during intercourse
                    </li>
                    <li>
                      Requires prompt testing and treatment, along with partner
                      notification and treatment where relevant
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Cervicitis
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Inflammation of the cervix, which can be caused by
                      infection or, less commonly, irritation from certain
                      products
                    </li>
                    <li>
                      Can cause increased discharge, sometimes with spotting
                      between periods or after intercourse
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Pelvic Inflammatory Disease (PID)
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      A more serious infection affecting the reproductive
                      organs, often resulting from untreated STIs
                    </li>
                    <li>
                      Can cause abnormal discharge along with pelvic pain,
                      fever, and, if untreated, longer-term fertility
                      complications
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Irritation or Allergic Reactions
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Can result from scented soaps, douches, certain fabrics,
                      or hygiene products
                    </li>
                    <li>
                      Typically causes irritation, redness, or mild discharge
                      changes without a strong odor or infection-related
                      symptoms
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Doctor for Vaginal Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Discharge with an unusual color, consistency, or strong odor
                  that&apos;s different from your normal pattern
                </li>
                <li>
                  Discharge accompanied by itching, burning, or irritation
                </li>
                <li>
                  Pain during urination or intercourse alongside changes in
                  discharge
                </li>
                <li>
                  Discharge accompanied by fever, pelvic pain, or general
                  feeling of being unwell
                </li>
                <li>
                  Discharge that doesn&apos;t improve with basic over-the-counter
                  treatment, if attempted
                </li>
                <li>
                  Any concern about possible exposure to a sexually transmitted
                  infection
                </li>
                <li>
                  Discharge changes that are new, persistent, or significantly
                  different from what you&apos;re used to
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Vaginal Discharge Issues Are Diagnosed
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed symptom history, including when symptoms started,
                  their characteristics, and any associated factors
                </li>
                <li>
                  Pelvic examination, allowing the doctor to directly assess the
                  discharge and surrounding tissue
                </li>
                <li>
                  Vaginal swab testing, used to identify the specific cause,
                  whether it&apos;s a yeast infection, bacterial vaginosis, or
                  an STI
                </li>
                <li>
                  STI screening, recommended when sexually transmitted infection
                  is a possibility based on symptoms or risk factors
                </li>
                <li>
                  pH testing, sometimes used to help distinguish between
                  different types of vaginal infections
                </li>
                <li>
                  Additional testing, such as blood tests or imaging, in more
                  complex or persistent cases
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options for Abnormal Vaginal Discharge
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Yeast Infections
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Antifungal medications, available as creams,
                      suppositories, or oral tablets depending on severity
                    </li>
                    <li>
                      Avoiding factors that can contribute to recurrence, such
                      as unnecessary antibiotic use or tight, non-breathable
                      clothing
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Bacterial Vaginosis
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Antibiotic treatment, typically prescribed as oral
                      medication or vaginal gel
                    </li>
                    <li>
                      Avoiding douching, which can disrupt the natural vaginal
                      balance and increase recurrence risk
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For STIs
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Specific antibiotic or antiviral treatment depending on
                      the identified infection
                    </li>
                    <li>
                      Partner testing and treatment, when relevant, to prevent
                      reinfection
                    </li>
                    <li>
                      Follow-up testing to confirm the infection has cleared,
                      when appropriate
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Cervicitis or PID
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-gray-700">
                    <li>
                      Antibiotic treatment tailored to the underlying cause
                    </li>
                    <li>
                      Closer monitoring and follow-up, particularly for PID,
                      given its potential impact on future fertility if
                      untreated
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventive Tips for Vaginal Health
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Avoid douching, which can disrupt the natural balance of
                  bacteria in the vagina
                </li>
                <li>
                  Choose breathable, cotton underwear and avoid staying in damp
                  clothing for extended periods
                </li>
                <li>
                  Practice good hygiene without overusing scented products,
                  which can cause irritation
                </li>
                <li>
                  Wipe front to back after using the bathroom to reduce the risk
                  of bacterial transfer
                </li>
                <li>
                  Practice safe sex, including barrier methods, to reduce the
                  risk of sexually transmitted infections
                </li>
                <li>
                  Attend regular gynaecological check-ups, even without
                  symptoms, to support overall reproductive health
                </li>
                <li>
                  Avoid unnecessary antibiotic use, which can disrupt the
                  natural balance of vaginal bacteria and increase the risk of
                  yeast infections
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Confidential, Judgment-Free Care Matters
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many women delay seeking treatment out of embarrassment,
                  allowing infections to worsen or symptoms to persist longer
                  than necessary
                </li>
                <li>
                  A comfortable, non-judgmental consultation encourages honest
                  symptom reporting, which leads to more accurate diagnosis
                </li>
                <li>
                  Privacy and discretion matter significantly for a topic many
                  women consider deeply personal
                </li>
                <li>
                  A doctor who normalizes these conversations helps reduce the
                  stigma that often prevents women from seeking timely care
                </li>
                <li>
                  Prompt treatment generally leads to faster symptom relief and
                  reduces the risk of complications from untreated infections
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Vaginal Discharge Specialist in
                Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) offers confidential,
                thorough evaluation and treatment for vaginal discharge concerns
                as part of her comprehensive gynaecological practice in
                Moradabad. According to her official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , her approach to care is particularly well-suited to sensitive
                concerns like this:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A &quot;Her Health First&quot; philosophy, ensuring symptoms
                  are discussed openly and treated with clinical seriousness
                  rather than embarrassment
                </li>
                <li>
                  Comprehensive gynaecological evaluation, allowing
                  discharge-related concerns to be assessed alongside overall
                  reproductive health
                </li>
                <li>
                  A judgment-free, private consultation environment, important
                  for women who may feel hesitant discussing intimate symptoms
                </li>
                <li>
                  Access to appropriate diagnostic testing, supporting accurate
                  identification of the underlying cause
                </li>
                <li>
                  Clear explanation of treatment options, ensuring patients
                  understand their diagnosis and how to prevent recurrence going
                  forward
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Patient testimonials on the website consistently describe
                feeling comfortable and respected throughout their consultations
                — a quality that matters enormously when discussing symptoms
                that can otherwise feel embarrassing to bring up. The clinic is
                located in Gandhi Nagar, Moradabad, making it accessible to
                women across the city seeking confidential, prompt evaluation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Being prepared can help make the appointment more efficient and
                less stressful:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note when the discharge changes started, and whether they came
                  on suddenly or gradually
                </li>
                <li>
                  Describe the color, consistency, and odor as specifically as
                  you can, since these details help guide diagnosis
                </li>
                <li>
                  Mention any associated symptoms, such as itching, burning, or
                  pain during urination or intercourse
                </li>
                <li>
                  Think about recent changes, such as new soaps, products,
                  medications, or antibiotic use, which could be contributing
                  factors
                </li>
                <li>
                  Be honest about your sexual history and any recent new
                  partners, if relevant, since this helps guide appropriate
                  testing
                </li>
                <li>
                  Note your menstrual cycle timing, since discharge patterns can
                  naturally vary throughout the month
                </li>
                <li>
                  Write down any questions, including concerns about recurrence
                  or prevention going forward
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recurrent Vaginal Infections: What to Know
              </h2>

              <p className="mb-4 text-gray-700">
                Some women experience repeated episodes of yeast infections or
                bacterial vaginosis, which can be frustrating to manage:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Recurrent infections may point to an underlying factor, such
                  as uncontrolled diabetes, hormonal changes, or certain
                  lifestyle habits
                </li>
                <li>
                  A doctor can help identify patterns, such as timing related to
                  antibiotic use, menstrual cycle, or specific triggers
                </li>
                <li>
                  Treatment for recurrent infections may differ from a single
                  episode, sometimes involving longer treatment courses or
                  preventive strategies
                </li>
                <li>
                  Partner evaluation may be relevant in certain recurring cases,
                  depending on the specific type of infection
                </li>
                <li>
                  Lifestyle adjustments, such as clothing choices, hygiene
                  product changes, or dietary factors, are often discussed as
                  part of managing recurrence
                </li>
                <li>
                  Persistence in seeking proper evaluation matters, since
                  self-treating recurrent infections without professional
                  guidance can sometimes mask an underlying issue that needs
                  addressing
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Vaginal Discharge
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;All discharge is a sign of
                  infection.&quot;{" "}
                  <strong>Fact:</strong> Discharge is a normal, healthy bodily
                  function, and only certain changes indicate a problem.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Yeast infections and bacterial
                  vaginosis are the same thing.&quot;{" "}
                  <strong>Fact:</strong> They&apos;re different conditions
                  caused by different organisms, requiring different treatments.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Vaginal discharge issues always
                  mean an STI.&quot;{" "}
                  <strong>Fact:</strong> While STIs can cause abnormal
                  discharge, many common causes, like yeast infections, are
                  unrelated to sexual activity.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Douching helps keep things clean
                  and prevents infections.&quot;{" "}
                  <strong>Fact:</strong> Douching can actually disrupt the
                  natural vaginal balance and increase the risk of infection.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;It&apos;s too embarrassing to
                  bring up with a doctor.&quot;{" "}
                  <strong>Fact:</strong> Vaginal discharge concerns are one of
                  the most common reasons women visit a gynaecologist, and a
                  good doctor addresses them professionally and without
                  judgment.
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
                        Gynaecologist & Women&apos;s Health Specialist (MBBS, MS)
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