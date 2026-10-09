import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function WhatDoesInfertilitySpecialistDo() {
  const faqs = [
    {
      q: "What does an infertility specialist do?",
      a: "They diagnose why you cannot conceive and treat the cause with the simplest effective option.",
    },
    {
      q: "Is an infertility specialist different from a gynaecologist?",
      a: "Yes. A specialist focuses on conception problems and advanced fertility treatment.",
    },
    {
      q: "When should I see an infertility specialist?",
      a: "After 12 months of trying, or 6 months if you are 35 or older.",
    },
    {
      q: "Do they test the man too?",
      a: "Yes. Male factors cause about one-third of infertility cases.",
    },
    {
      q: "Will the specialist recommend IVF immediately?",
      a: "No. A good specialist starts with the simplest effective treatment.",
    },
    {
      q: "What tests do they usually advise?",
      a: "Ultrasound, hormone tests, tubal check and semen analysis.",
    },
    {
      q: "Can they guarantee pregnancy?",
      a: "No. They guide treatment, but no honest doctor can guarantee results.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                What Does an Infertility Specialist Do? A Complete Guide for Couples
              </h1>

              <p className="mb-4 text-gray-700">
                If you have been trying to conceive without success, you may
                have been advised to &quot;see a fertility specialist.&quot; But
                what does that really mean? Many couples imagine a doctor who
                immediately recommends IVF, or one who only treats women.
                Neither is true.
              </p>

              <p className="mb-4 text-gray-700">
                An infertility specialist is a doctor who finds out why
                pregnancy is not happening and helps you overcome it, using the
                simplest effective treatment first. This guide explains the
                role step by step, from the first conversation to treatment and,
                where offered, pregnancy care.
              </p>
            </div>

            {/* Section 2 — What Is an Infertility Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an Infertility Specialist?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A doctor trained to diagnose and treat difficulty in conceiving.</li>
                <li>In India, usually an obstetrician-gynaecologist with additional training or experience in fertility care, IVF or reproductive medicine.</li>
                <li>Often skilled in minimally invasive surgery such as laparoscopy and hysteroscopy.</li>
                <li>Works with the couple, because both partners contribute to fertility.</li>
                <li>May coordinate with other specialists such as urologists, endocrinologists or genetic counsellors.</li>
                <li>Another name for the same role is a fertility specialist or fertility doctor.</li>
              </ul>
            </div>

            {/* Section 3 — Specialist vs Regular Gynaecologist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Infertility Specialist vs Regular Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Many gynaecologists provide basic fertility advice. A specialist
                goes further.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                A General Gynaecologist
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Manages periods, pregnancy, delivery and common women&apos;s health issues</li>
                <li>Can start basic investigations for conception problems</li>
                <li>May refer you when the problem is complex</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                An Infertility Specialist
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Focuses on diagnosing and treating conception problems</li>
                <li>Uses advanced tests and treatments such as ovulation induction, IUI and IVF</li>
                <li>Is experienced in interpreting fertility results for both partners</li>
                <li>Often performs fertility-related surgery</li>
                <li>Plans treatment based on age, ovarian reserve and sperm quality</li>
              </ul>

              <p className="text-gray-700">
                Some doctors are both, offering general gynaecology and fertility
                care under one roof.
              </p>
            </div>

            {/* Section 4 — Core Roles */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does an Infertility Specialist Do? The Core Roles
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Listens and Takes a Detailed History
              </h3>

              <p className="mb-2 text-gray-700">
                The first and most important task is understanding your story.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your menstrual cycle: regularity, flow, pain and spotting</li>
                <li>How long you have been trying</li>
                <li>Previous pregnancies, miscarriages or abortions</li>
                <li>Past surgeries, infections or sexually transmitted diseases</li>
                <li>Medicines, supplements and medical conditions</li>
                <li>Lifestyle: weight, exercise, diet, smoking, alcohol, stress and sleep</li>
                <li>Sexual health and frequency of intercourse</li>
                <li>Your partner&apos;s health, habits and previous reports</li>
                <li>Family history of fertility or genetic conditions</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Why it matters: history often points to the likely cause before
                any test is done.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Examines You
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A general examination, including weight, blood pressure and signs of hormonal imbalance</li>
                <li>A pelvic examination for the woman</li>
                <li>A genital examination for the man, when indicated</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Examination is done with privacy, explanation and consent.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Orders the Right Tests
              </h3>

              <p className="mb-4 text-gray-700">
                A specialist does not order every test for everyone. They choose
                tests that fit your history.
              </p>

              <p className="mb-2 text-gray-700">For the woman:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Transvaginal ultrasound to assess the uterus, ovaries and follicle count</li>
                <li>AMH and other hormone tests to understand ovarian reserve and ovulation</li>
                <li>Thyroid and prolactin tests</li>
                <li>HSG or sonosalpingography to check the fallopian tubes</li>
                <li>Hysteroscopy to look inside the uterus</li>
                <li>Diagnostic laparoscopy when endometriosis or tubal disease is suspected</li>
              </ul>

              <p className="mb-2 text-gray-700">For the man:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Semen analysis</li>
                <li>Advanced sperm testing, including DNA integrity</li>
                <li>Hormone tests or scrotal ultrasound when needed</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Finds the Cause
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Female factor: ovulation disorders, tubal blockage, endometriosis, fibroids, polyps, low ovarian reserve</li>
                <li>Male factor: low sperm count, poor movement, abnormal shape, varicocele, DNA damage</li>
                <li>Combined factors: problems in both partners</li>
                <li>Unexplained infertility: normal tests with no clear reason, which affects 10–15% of couples</li>
              </ul>

              <p className="mb-4 text-gray-700">
                The cause guides every treatment decision.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Treats Underlying Conditions
              </h3>

              <p className="mb-4 text-gray-700">
                Before advanced treatment, the specialist corrects what can be
                corrected.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid disorders and high prolactin</li>
                <li>Diabetes and insulin resistance</li>
                <li>Infections of the pelvis or urinary tract</li>
                <li>Vitamin and iron deficiencies</li>
                <li>PCOS through lifestyle and medical management</li>
                <li>Hormonal imbalances in either partner</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Advises on Lifestyle
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reaching a healthy weight</li>
                <li>Balanced diet and regular exercise</li>
                <li>Stopping smoking and limiting alcohol</li>
                <li>Folic acid before conception</li>
                <li>Managing stress and improving sleep</li>
                <li>Timing intercourse around ovulation</li>
                <li>Avoiding unproven remedies</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Why it matters: these changes cost little and can make a real
                difference.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Prescribes Ovulation Induction
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medicines help the ovaries release an egg regularly.</li>
                <li>Tablets are used first, and injections when needed.</li>
                <li>Follicle-tracking scans monitor the response and time intercourse.</li>
                <li>It is common in PCOS and irregular cycles.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Performs Fertility-Related Surgery
              </h3>

              <p className="mb-4 text-gray-700">
                When a structural problem blocks conception, the specialist may
                treat it.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hysteroscopy: removes polyps, a uterine septum or adhesions without cuts</li>
                <li>Laparoscopic cystectomy: removes ovarian cysts while preserving healthy ovarian tissue</li>
                <li>Laparoscopic myomectomy: removes fibroids while preserving the uterus</li>
                <li>Endometriosis excision: relieves pain and improves the pelvic environment</li>
                <li>Tubal and adhesion surgery: in selected cases</li>
              </ul>

              <p className="mb-4 text-gray-700">
                Benefits: small incisions, less pain and faster recovery
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Offers IUI
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What it is: washed and concentrated sperm is placed in the uterus around ovulation.</li>
                <li>Suitable for: unexplained infertility, mild male factor and some ovulation problems.</li>
                <li>Needs: at least one open fallopian tube and adequate sperm quality.</li>
                <li>Specialist&apos;s role: plan the cycle, monitor ovulation, time the procedure and judge when to stop and move to the next step.</li>
                <li>Reality: success per cycle is commonly about 10–20%, so several cycles may be advised.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Performs IVF and ICSI
              </h3>

              <p className="mb-2 text-gray-700">IVF steps handled by the specialist:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Planning ovarian stimulation</li>
                <li>Monitoring with scans and blood tests</li>
                <li>Timing the trigger injection</li>
                <li>Egg collection under sedation</li>
                <li>Overseeing fertilisation and embryo culture</li>
                <li>Choosing the best embryo and performing the transfer</li>
                <li>Supporting the luteal phase after transfer</li>
              </ul>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>ICSI: a single sperm is injected into each egg, especially useful in male factor infertility.</li>
                <li>Technology: time-lapse embryo monitoring helps observe embryo development without disturbing it.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Plans Frozen Embryo Transfer and Fertility Preservation
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Freezing extra embryos for future attempts</li>
                <li>Preparing the uterus for a frozen embryo transfer</li>
                <li>Egg or embryo freezing for women who wish to delay pregnancy</li>
                <li>Preservation advice before treatments that can affect fertility</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Manages Recurrent Pregnancy Loss
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Looks for causes in couples with two or more miscarriages</li>
                <li>Investigates uterine, hormonal, genetic and clotting factors</li>
                <li>Plans treatment and close monitoring in the next pregnancy</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Supports You Emotionally
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Explains each step in simple language</li>
                <li>Prepares you for both good and difficult outcomes</li>
                <li>Gives honest information about chances</li>
                <li>Recognises stress and can suggest counselling</li>
                <li>Treats you and your partner as equal participants</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Continues Care Into Pregnancy
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Early pregnancy confirmation scan</li>
                <li>Hormonal support in the early weeks, when needed</li>
                <li>Referral or ongoing antenatal care, depending on the clinic</li>
              </ul>

              <p className="text-gray-700">
                Some clinics, including Dr. Priyanka Gynaec, provide antenatal
                services, normal delivery support and newborn care, which keeps
                your care continuous.
              </p>
            </div>

            {/* Section 5 — Typical Journey */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                A Typical Journey With an Infertility Specialist
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Step 1: first consultation, history, examination and ultrasound</li>
                <li>Step 2: basic blood tests and semen analysis</li>
                <li>Step 3: further tests only if required, such as HSG or hysteroscopy</li>
                <li>Step 4: diagnosis and a clear explanation of findings</li>
                <li>Step 5: a personalised plan beginning with the simplest effective option</li>
                <li>Step 6: lifestyle correction and treatment of underlying conditions</li>
                <li>Step 7: ovulation induction or surgery, if indicated</li>
                <li>Step 8: IUI, if suitable</li>
                <li>Step 9: IVF or ICSI, when other options are unlikely to work</li>
                <li>Step 10: pregnancy test, early scans and continued care</li>
              </ul>

              <p className="text-gray-700">
                Many couples conceive in the early steps, long before reaching
                IVF.
              </p>
            </div>

            {/* Section 6 — What a Specialist Does Not Do */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What an Infertility Specialist Does Not Do
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Does not guarantee a pregnancy</li>
                <li>Does not blame one partner</li>
                <li>Should not push IVF when simpler options may work</li>
                <li>Should not order unnecessary tests or treatments</li>
                <li>Should not make you feel judged or rushed</li>
                <li>Does not replace the role of a supportive partner and family</li>
              </ul>
            </div>

            {/* Section 7 — When to See */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See an Infertility Specialist?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Under 35 years: after 12 months of trying without success</li>
                <li>35 years and above: after 6 months</li>
                <li>Over 40: as soon as you plan to conceive</li>
              </ul>

              <p className="mb-4 text-gray-700">Earlier if you have:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular or absent periods</li>
                <li>Severe period or pelvic pain</li>
                <li>PCOS, endometriosis, fibroids or cysts</li>
                <li>Thyroid disease or high prolactin</li>
                <li>Pelvic infection or surgery</li>
                <li>Two or more miscarriages</li>
                <li>A partner with an abnormal semen report</li>
                <li>Failed earlier fertility treatment</li>
              </ul>
            </div>

            {/* Section 8 — First Appointment */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Appointment
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A calm conversation with time for questions</li>
                <li>A physical examination and a gentle ultrasound</li>
                <li>Initial blood tests and a semen analysis</li>
                <li>A clear explanation of the likely causes</li>
                <li>A step-by-step plan with realistic timelines</li>
                <li>An honest discussion of costs and options</li>
                <li>No pressure to begin treatment on the same day</li>
              </ul>

              <p className="mb-4 text-gray-700">Bring with you:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous reports, scans and prescriptions</li>
                <li>HSG, hormone and semen analysis reports</li>
                <li>Your cycle dates and list of current medicines</li>
                <li>Your partner, if possible</li>
                <li>A written list of your questions</li>
              </ul>
            </div>

            {/* Section 9 — How to Tell Good Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Tell You Have Found a Good Infertility Specialist
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>You feel heard and not rushed.</li>
                <li>The doctor explains your diagnosis clearly.</li>
                <li>Both partners are evaluated.</li>
                <li>The plan starts simple and progresses sensibly.</li>
                <li>Costs are discussed openly and given in writing.</li>
                <li>There are no guarantees or pressure tactics.</li>
                <li>The clinic has the facilities to test, treat and monitor properly.</li>
                <li>You feel safe asking any question.</li>
              </ul>
            </div>

            {/* Section 10 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Infertility Specialists
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: a fertility specialist only does IVF. Fact: many treatments are simpler, including lifestyle care, medicines, surgery and IUI.</li>
                <li>Myth: only women need to be tested. Fact: male factors cause about one-third of cases.</li>
                <li>Myth: you should see a specialist only after many years. Fact: early evaluation improves your options.</li>
                <li>Myth: the first visit means starting treatment. Fact: the first visit is for evaluation and planning, and the decisions remain yours.</li>
                <li>Myth: fertility treatment is only for older couples. Fact: specialists help couples of all ages, depending on the cause.</li>
              </ul>
            </div>

            {/* Section 11 — How Dr Priyanka Fits */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Dr. Priyanka Gynaec Fits This Role
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec in Moradabad combines fertility care,
                gynaecological surgery and maternity services under the
                philosophy &quot;Her Health First&quot;.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF services: personalised plans for each couple</li>
                <li>AI-powered semen analysis: includes DNA integrity testing for a deeper male fertility assessment</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>3D laparoscopic surgery: cystectomy, myomectomy and endometriosis surgery that aim to preserve fertility</li>
                <li>Hysteroscopy services: diagnostic hysteroscopy and polyp removal</li>
                <li>3D/4D ultrasound: detailed imaging for fertility evaluation and pregnancy</li>
                <li>Complete journey support: from first consultation to antenatal care, normal delivery and newborn care</li>
                <li>Empathetic consultations: you are listened to before any plan is made</li>
              </ul>
            </div>

            {/* Section 12 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Fertility Consultation Today
              </h2>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 13 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}