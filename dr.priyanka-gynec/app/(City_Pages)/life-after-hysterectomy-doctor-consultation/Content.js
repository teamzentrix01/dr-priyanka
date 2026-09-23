
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

export default function LifeAfterHysterectomy() {
  const faqs = [
    {
      q: "How long does recovery take after a hysterectomy?",
      a: "With laparoscopic surgery, most women return to normal activity within 2–4 weeks, much faster than the 6 weeks needed after open surgery.",
    },
    {
      q: "Will I go into menopause after a hysterectomy?",
      a: "Only if the ovaries are also removed; if they're preserved, natural hormone production continues until natural menopause.",
    },
    {
      q: "Can I still have sex after a hysterectomy?",
      a: "Yes, sexual function is generally well preserved, and many women report improved intimacy after resolving chronic symptoms.",
    },
    {
      q: "How long should I wait before resuming sexual activity?",
      a: "Generally about 6 weeks, to allow complete internal healing, though your doctor will confirm based on your recovery.",
    },
    {
      q: "Will I gain weight after a hysterectomy?",
      a: "Not automatically — weight changes depend more on lifestyle and hormonal factors than on the surgery itself.",
    },
    {
      q: "Do I need hormone replacement therapy after hysterectomy?",
      a: "Only if the ovaries are removed before natural menopause; this is discussed individually with your doctor.",
    },
    {
      q: "Is it normal to feel emotional after a hysterectomy?",
      a: "Yes, some emotional adjustment is common, and support from your doctor, family, or a counsellor can help.",
    },
    {
      q: "Do I still need Pap smears after a hysterectomy?",
      a: "Only if the cervix was preserved, as in a subtotal hysterectomy; otherwise, this is not usually necessary.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist and laparoscopic surgeon (MS, FMAS) offering thorough pre- and post-hysterectomy consultation and care.",
    },
    {
      q: "Does Dr. Priyanka Pachauri offer follow-up care after hysterectomy?",
      a: "Yes, her practice includes structured follow-up consultations covering recovery, hormonal health, and long-term wellbeing.",
    },
    {
      q: "What long-term health checks are needed after hysterectomy?",
      a: "Bone density, cardiovascular health, and regular gynaecological check-ups are generally recommended, especially if ovaries were removed.",
    },
    {
      q: "How can I book a consultation about life after hysterectomy in Moradabad?",
      a: "You can call, message on WhatsApp, email, or visit the clinic's official website to schedule a consultation with Dr. Priyanka Pachauri.",
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
                Life After Hysterectomy: A Doctor Consultation Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Deciding to undergo a hysterectomy is a significant step, but
                many women find that understanding life after the surgery is
                just as important as understanding the procedure itself. From
                physical recovery and hormonal changes to sexual health and
                long-term wellbeing, life after hysterectomy involves several
                areas worth discussing thoroughly with your doctor beforehand.
                This guide walks through what to expect in the weeks, months,
                and years following hysterectomy, and what topics deserve a
                proper doctor consultation both before and after surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Immediate Recovery: The First Few Weeks
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>First 24–48 hours:</strong> Hospital stay, with pain
                  managed through medication; laparoscopic patients typically go
                  home within 1–2 days.
                </li>
                <li>
                  <strong>First week:</strong> Rest at home, with light walking
                  encouraged to support circulation and prevent blood clots.
                </li>
                <li>
                  <strong>Avoid heavy lifting</strong> — generally nothing
                  heavier than a few kilograms during the first 2–4 weeks.
                </li>
                <li>
                  <strong>Mild fatigue and discomfort</strong> are normal during
                  this period and should gradually improve.
                </li>
                <li>
                  <strong>Vaginal discharge or light spotting</strong> can occur
                  for a few weeks and is usually normal, though heavy bleeding
                  should be reported immediately.
                </li>
                <li>
                  <strong>Follow-up appointment</strong>, typically within 2–4
                  weeks, to confirm healing is progressing as expected.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Physical Changes You Can Expect
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Periods stop permanently</strong>, since the uterus
                  responsible for menstruation is removed.
                </li>
                <li>
                  <strong>Pregnancy is no longer possible</strong> after
                  hysterectomy.
                </li>
                <li>
                  <strong>Abdominal bloating or mild swelling</strong> in the
                  initial weeks, which typically resolves as healing progresses.
                </li>
                <li>
                  <strong>Incision site healing</strong>, with laparoscopic
                  incisions generally healing faster and with less visible
                  scarring than open surgery.
                </li>
                <li>
                  <strong>Gradual return of energy levels</strong>, usually
                  improving significantly by 4–6 weeks.
                </li>
                <li>
                  <strong>Bowel and bladder function</strong> typically return
                  to normal within a few weeks, though some women notice minor
                  temporary changes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hormonal Changes: Depends on Whether Ovaries Are Removed
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If Ovaries Are Preserved
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Natural hormone production continues, since the ovaries remain
                  functional.
                </li>
                <li>
                  Natural menopause occurs at the expected age, just without
                  menstrual periods as a marker.
                </li>
                <li>
                  Some women may still experience a slightly earlier menopause
                  than expected, even with ovary preservation, due to changes in
                  blood supply.
                </li>
                <li>
                  Regular hormonal health monitoring is still worthwhile, as
                  advised by your doctor.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If Ovaries Are Removed
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Menopause begins immediately after surgery, regardless of age.
                </li>
                <li>
                  Hot flashes, night sweats, and mood changes can occur
                  suddenly, since hormone levels drop abruptly rather than
                  gradually.
                </li>
                <li>
                  Hormone replacement therapy (HRT) is often discussed,
                  particularly for younger women, to manage symptoms and protect
                  long-term bone and cardiovascular health.
                </li>
                <li>
                  Bone density monitoring becomes more important, given the role
                  of estrogen in maintaining bone strength.
                </li>
                <li>
                  This decision and its management should always be discussed
                  thoroughly with your doctor before surgery, not left as a
                  surprise afterward.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sexual Health and Intimacy After Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sexual function is generally well preserved for most women
                  after hysterectomy.
                </li>
                <li>
                  Some women report improved intimacy, particularly if chronic
                  pain or heavy bleeding was previously affecting their sex
                  life.
                </li>
                <li>
                  Vaginal dryness, particularly if ovaries were removed, can
                  sometimes occur and is manageable with appropriate treatment.
                </li>
                <li>
                  A waiting period of about 6 weeks is generally advised before
                  resuming sexual activity, to allow complete internal healing.
                </li>
                <li>
                  Open communication with your doctor about any changes or
                  concerns in this area is encouraged and should never feel
                  awkward to raise.
                </li>
                <li>
                  Emotional adjustment related to intimacy is normal for some
                  women and can be discussed with your doctor or a counsellor if
                  needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional and Psychological Wellbeing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many women feel significant relief after hysterectomy,
                  particularly if it resolves years of chronic pain or heavy
                  bleeding.
                </li>
                <li>
                  Some women experience a period of emotional adjustment,
                  especially related to the loss of fertility or a sense of
                  change in body image.
                </li>
                <li>
                  Mood changes, particularly if ovaries are removed, can be
                  linked to sudden hormonal shifts and may benefit from medical
                  support.
                </li>
                <li>
                  Support from family, friends, or a counsellor can be valuable
                  during the adjustment period.
                </li>
                <li>
                  Open discussion with your doctor about emotional wellbeing,
                  not just physical recovery, is an important part of
                  comprehensive follow-up care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Long-Term Health Considerations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Bone health monitoring</strong>, particularly
                  important if ovaries were removed before natural menopause.
                </li>
                <li>
                  <strong>Cardiovascular health awareness</strong>, since
                  estrogen has a protective role that changes after ovary
                  removal.
                </li>
                <li>
                  <strong>Continued Pap smear screening</strong>, if the cervix
                  was preserved (as in subtotal hysterectomy).
                </li>
                <li>
                  <strong>Regular gynaecological check-ups</strong>, even
                  without a uterus, to monitor overall pelvic health.
                </li>
                <li>
                  <strong>Weight and lifestyle management</strong>, since
                  hormonal changes can sometimes affect metabolism.
                </li>
                <li>
                  <strong>Pelvic floor health</strong>, since pelvic floor
                  exercises can help maintain support and function long-term.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Doctor Consultation Should Cover Before Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A clear explanation of what type of hysterectomy is being
                  recommended and why.
                </li>
                <li>
                  Discussion of ovary preservation versus removal, and what that
                  means for your specific age and health.
                </li>
                <li>
                  What physical and hormonal changes to expect immediately and
                  in the long term.
                </li>
                <li>
                  Guidance on sexual health and intimacy after recovery.
                </li>
                <li>
                  A realistic recovery timeline tailored to your health and
                  lifestyle.
                </li>
                <li>
                  Emotional support resources, if needed, as part of holistic
                  care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Follow-Up Consultations Should Cover After Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Wound healing and recovery progress, especially at the 2–4
                  week follow-up.
                </li>
                <li>
                  Any new or unusual symptoms, such as pain, discharge, or
                  bleeding.
                </li>
                <li>
                  Hormonal symptoms, if ovaries were removed, and whether
                  treatment adjustments are needed.
                </li>
                <li>
                  Sexual health concerns, openly and without hesitation.
                </li>
                <li>
                  Long-term monitoring plan, including future check-ups and
                  screenings.
                </li>
                <li>
                  Lifestyle guidance, including exercise, diet, and pelvic floor
                  care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Life After Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;You&apos;ll definitely gain weight after
                  hysterectomy&quot;</strong> — Weight changes are not an
                  automatic consequence of the surgery itself; lifestyle factors
                  play a much bigger role.
                </li>
                <li>
                  <strong>&quot;Your sex life will be ruined&quot;</strong> —
                  Most women report preserved or even improved sexual function,
                  especially once chronic symptoms are resolved.
                </li>
                <li>
                  <strong>&quot;You&apos;ll instantly go into menopause no
                  matter what&quot;</strong> — This is only true if the ovaries
                  are also removed; otherwise, natural hormone production
                  continues.
                </li>
                <li>
                  <strong>&quot;Recovery always takes months&quot;</strong> —
                  With laparoscopic surgery, most women return to normal
                  activity within 2–4 weeks.
                </li>
                <li>
                  <strong>&quot;You won&apos;t feel like yourself
                  again&quot;</strong> — Most women report a strong sense of
                  relief and improved quality of life after recovery from
                  chronic symptoms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Support for Long-Term Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Increase protein intake</strong> in the first few
                  weeks to support tissue healing.
                </li>
                <li>
                  <strong>Stay well hydrated</strong> to aid overall recovery
                  and reduce constipation risk after surgery.
                </li>
                <li>
                  <strong>Include calcium and vitamin D-rich foods</strong>,
                  especially important if ovaries were removed, to support bone
                  health.
                </li>
                <li>
                  <strong>Gradually reintroduce exercise</strong>, starting with
                  walking and progressing to more structured activity once
                  cleared by your doctor.
                </li>
                <li>
                  <strong>Limit heavy lifting and strenuous activity</strong>{" "}
                  until fully cleared, even if you feel recovered.
                </li>
                <li>
                  <strong>Prioritise sleep and stress management</strong>, both
                  of which support hormonal balance and overall healing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Hysterectomy Consultation & Follow-Up
                Care in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women in Moradabad seeking guidance on life after
                hysterectomy, Dr. Priyanka Pachauri (MS in Obstetrics &
                Gynaecology, FMAS, Advanced Infertility Fellowship) offers
                thorough pre-surgical counselling and structured post-operative
                follow-up. Based on her official website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), her practice includes:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Co-lead at Shree Advanced Urogynae Clinic and Consultant at
                  Ujala Cygnus BrightStar Hospital.
                </li>
                <li>
                  A &quot;Her Health First&quot; philosophy that emphasises open
                  communication about both physical and emotional aspects of
                  care.
                </li>
                <li>
                  <strong>Total Laparoscopic Hysterectomy (TLH)</strong>,
                  offering faster recovery and a smoother return to daily life
                  compared to open surgery.
                </li>
                <li>
                  High-definition 3D laparoscopic technology, supporting precise
                  surgery and reduced post-operative complications.
                </li>
                <li>
                  Comprehensive women&apos;s health services, including
                  fertility care, antenatal support, and general gynaecological
                  follow-up, allowing continuity of care well beyond the initial
                  surgery.
                </li>
                <li>
                  A patient-first approach where questions about recovery,
                  hormones, and long-term wellbeing are addressed as part of
                  routine consultation, not treated as afterthoughts.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Since life after hysterectomy involves several interconnected
                aspects — physical healing, hormonal changes, emotional
                wellbeing, and long-term health — a thorough, ongoing doctor
                relationship rather than a single appointment is generally the
                most reassuring path forward.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Pachauri — Book Your Consultation
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
                Practical Tips for Adjusting to Life After Hysterectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Follow your surgeon&apos;s activity restrictions closely
                  during the first few weeks, even if you feel well.
                </li>
                <li>
                  Stay physically active with gentle, approved exercise once
                  cleared, to support overall recovery.
                </li>
                <li>
                  Eat a balanced, nutrient-rich diet to support healing and
                  hormonal health.
                </li>
                <li>
                  Track any new symptoms, physical or emotional, to discuss at
                  follow-up visits.
                </li>
                <li>
                  Don&apos;t hesitate to raise sensitive topics, like intimacy
                  or mood changes, with your doctor.
                </li>
                <li>
                  Attend all scheduled follow-ups, even once you&apos;re feeling
                  fully recovered, for long-term monitoring.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Physical recovery after laparoscopic hysterectomy typically
                  takes 2–4 weeks, much faster than open surgery.
                </li>
                <li>
                  Hormonal changes depend heavily on whether the ovaries are
                  preserved or removed.
                </li>
                <li>
                  Sexual function is generally well preserved, and many women
                  report improved intimacy after resolving chronic symptoms.
                </li>
                <li>
                  Emotional wellbeing deserves as much attention as physical
                  healing during recovery.
                </li>
                <li>
                  Long-term follow-up — bone health, cardiovascular monitoring,
                  and continued gynaecological care — remains important for
                  years after surgery.
                </li>
                <li>
                  Open, ongoing doctor consultation is the best way to navigate
                  every stage of life after hysterectomy.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Life after hysterectomy looks different for every woman, shaped
                by the type of procedure, whether the ovaries were preserved, and
                individual health factors. While the physical recovery itself is
                often quicker than expected — especially with laparoscopic
                surgery — understanding the hormonal, emotional, and long-term
                health aspects is just as important for a smooth transition. A
                thorough doctor consultation, both before surgery and through
                ongoing follow-up care, is the most reliable way to navigate
                these changes confidently and get personalised guidance suited
                to your specific situation.
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
