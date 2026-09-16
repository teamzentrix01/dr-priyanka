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

export default function WomensWellnessClinic() {
  const faqs = [
    {
      q: "What services does a comprehensive women's wellness clinic typically offer?",
      a: "Services generally span adolescent gynaecology, menstrual health, PCOS management, fertility and IVF care, pregnancy monitoring, and menopause management.",
    },
    {
      q: "Do I need a referral to visit a women's wellness clinic?",
      a: "No, women can typically book a consultation directly for any concern without needing a referral.",
    },
    {
      q: "Is this type of clinic suitable for teenagers?",
      a: "Yes, adolescent gynaecology is a core part of comprehensive women's wellness care, handled with age-appropriate sensitivity.",
    },
    {
      q: "Can I get fertility treatment and pregnancy care at the same clinic?",
      a: "Yes, comprehensive clinics typically support the full journey from fertility evaluation through pregnancy and delivery-related care.",
    },
    {
      q: "Is menopause care included in a women's wellness clinic?",
      a: "Yes, menopause management, including hormone therapy consultation, is a standard part of comprehensive women's health services.",
    },
    {
      q: "How is a wellness clinic different from a standard gynaecology clinic?",
      a: "A wellness clinic typically offers a broader, more integrated range of services across every life stage, rather than focusing narrowly on one area.",
    },
    {
      q: "Are consultations for sensitive topics kept confidential?",
      a: "Yes, all consultations, regardless of topic, are handled with full medical confidentiality and professionalism.",
    },
    {
      q: "How do I know which service I need for my specific concern?",
      a: "You don't need to know in advance — describing your concern during a consultation allows the doctor to guide you toward the appropriate evaluation or treatment path.",
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
                Women&apos;s Wellness Clinic in Moradabad: Comprehensive Care
                for Every Life Stage
              </h1>

              <p className="mb-4 text-gray-700">
                A woman&apos;s health needs change dramatically across her
                lifetime — from adolescence and menstrual health, through
                fertility planning and pregnancy, to menopause and beyond. Most
                healthcare settings address these stages in fragments, often
                requiring women to seek out different providers as their needs
                evolve.
              </p>

              <p className="text-gray-700">
                A true women&apos;s wellness clinic takes a different approach:
                comprehensive, continuous care under one roof, with a provider
                who understands the full arc of a woman&apos;s reproductive and
                hormonal health. This guide explains what a genuine
                women&apos;s wellness clinic offers and how this approach
                benefits women in Moradabad at every life stage.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Clinical Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A women&apos;s wellness clinic addresses the full spectrum of
                  reproductive and hormonal health — not just isolated symptoms
                  or single life stages
                </li>
                <li>
                  Continuity of care, with one trusted provider across multiple
                  life stages, leads to more accurate diagnosis and more
                  personalised treatment over time
                </li>
                <li>
                  Comprehensive clinics combine clinical expertise with advanced
                  diagnostic technology, from ultrasound imaging to hormonal
                  testing and fertility assessment
                </li>
                <li>
                  Confidential, judgement-free consultation is central to
                  effective care, particularly for sensitive topics many women
                  hesitate to raise elsewhere
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes a Women&apos;s Wellness Clinic Different
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>It addresses every life stage under one roof.</strong>{" "}
                  Rather than requiring separate providers for adolescent
                  concerns, fertility treatment, pregnancy care, and menopause
                  management, a comprehensive clinic provides continuity across
                  a woman&apos;s entire reproductive lifespan.
                </li>
                <li>
                  <strong>It treats women&apos;s health holistically, not just
                  symptom by symptom.</strong> Hormonal health, reproductive
                  health, and general wellbeing are interconnected, and a
                  wellness-focused approach considers these connections rather
                  than treating each complaint in isolation.
                </li>
                <li>
                  <strong>It combines clinical expertise with modern diagnostic
                  technology.</strong> Advanced tools — ultrasound, hormonal
                  testing, fertility assessment technology — support more
                  accurate, timely diagnosis across every service area.
                </li>
                <li>
                  <strong>It prioritises confidentiality and comfort.</strong>{" "}
                  Many concerns women bring to a gynaecologist are sensitive by
                  nature, and a wellness-focused clinic is built around making
                  every conversation comfortable and judgement-free.
                </li>
                <li>
                  <strong>It builds a long-term health record.</strong> Seeing
                  the same provider across years and life stages means changes
                  in health are noticed and understood in proper context, rather
                  than each visit starting from scratch.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comprehensive Services Under One Roof
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Adolescent gynaecology and puberty concerns.</strong>{" "}
                  From delayed puberty evaluation to guidance on menstrual
                  health during the teenage years, adolescent care is treated
                  with the sensitivity and age-appropriate communication this
                  life stage requires.
                </li>
                <li>
                  <strong>Menstrual health and cycle-related disorders.</strong>{" "}
                  Irregular periods, heavy bleeding, painful periods, and other
                  menstrual concerns are evaluated and managed with a focus on
                  identifying the underlying cause, not just masking symptoms.
                </li>
                <li>
                  <strong>PCOS and hormonal imbalance management.</strong>{" "}
                  Comprehensive evaluation and management of PCOS, thyroid
                  disorders, and their overlap, including weight management
                  support and diet counseling tailored to each patient&apos;s
                  hormonal profile.
                </li>
                <li>
                  <strong>Fertility evaluation and treatment.</strong> From
                  semen analysis and ovulation assessment to IUI and
                  coordination with IVF services, fertility care addresses both
                  partners as part of a complete evaluation.
                </li>
                <li>
                  <strong>Fertility preservation.</strong> For women facing
                  medical treatments that could affect future fertility, or
                  those choosing to delay childbearing electively, egg freezing
                  and related preservation options are available.
                </li>
                <li>
                  <strong>Pregnancy care and advanced sonography.</strong>{" "}
                  Complete prenatal care, including trimester-specific
                  ultrasound scans and advanced 3D/4D imaging, supports a
                  well-monitored, confident pregnancy journey.
                </li>
                <li>
                  <strong>Painful intercourse and sexual health concerns.</strong>{" "}
                  These sensitive but common concerns are evaluated thoroughly
                  and treated with appropriate medical care, addressed with the
                  same clinical seriousness as any other gynaecological symptom.
                </li>
                <li>
                  <strong>Menopause management.</strong> From symptom relief to
                  hormone replacement therapy consultation and long-term bone
                  and cardiovascular health guidance, menopause is managed as a
                  life stage requiring ongoing, personalised support.
                </li>
                <li>
                  <strong>Preventive gynaecological checkups.</strong> Regular
                  health checkups, including cervical screening and pelvic
                  health assessment, support early detection and long-term
                  wellness at every age.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Continuity of Care Matters So Much for Women&apos;s Health
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Patterns become visible over time.</strong> A provider
                  who has seen a patient through adolescence, reproductive
                  years, and beyond is better positioned to notice meaningful
                  changes than one seeing a patient for the first time with each
                  new concern.
                </li>
                <li>
                  <strong>Trust improves the accuracy of every
                  consultation.</strong> Women are more likely to disclose
                  sensitive symptoms honestly when they have an established,
                  comfortable relationship with their provider, directly
                  improving diagnostic accuracy.
                </li>
                <li>
                  <strong>Treatment plans can evolve intelligently.</strong> A
                  provider familiar with a patient&apos;s full history can
                  adjust treatment thoughtfully as circumstances change, rather
                  than starting from an incomplete picture each time.
                </li>
                <li>
                  <strong>It reduces the burden of repeating history.</strong>{" "}
                  Women don&apos;t need to re-explain their full reproductive
                  and health history at every new provider, saving time and
                  reducing the chance of important details being missed.
                </li>
                <li>
                  <strong>It supports better long-term outcomes.</strong>{" "}
                  Conditions like PCOS, endometriosis, or early menopausal
                  changes are generally managed more effectively with a provider
                  who understands the full context of a woman&apos;s health
                  journey.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Technology Behind Comprehensive Women&apos;s Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Advanced 3D/4D ultrasound imaging.</strong> This
                  supports detailed pregnancy monitoring, structural assessment,
                  and, when appropriate, a memorable prenatal experience for
                  expecting families.
                </li>
                <li>
                  <strong>AI-powered semen analysis and DNA integrity
                  testing.</strong> This provides more accurate, consistent male
                  fertility assessment as part of a complete couple&apos;s
                  fertility evaluation.
                </li>
                <li>
                  <strong>Time-lapse embryo monitoring technology.</strong> For
                  patients undergoing IVF, this allows continuous embryo
                  observation without disturbing development, supporting more
                  informed embryo selection.
                </li>
                <li>
                  <strong>Comprehensive hormonal and metabolic testing.</strong>{" "}
                  From thyroid panels to insulin resistance markers, accurate
                  lab testing underpins diagnosis across menstrual, PCOS,
                  fertility, and menopausal care.
                </li>
                <li>
                  <strong>Diagnostic and operative laparoscopy.</strong>{" "}
                  Minimally invasive surgical techniques support both diagnosis
                  and treatment of conditions like endometriosis, fibroids, and
                  ovarian cysts with reduced recovery time.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should Consider a Comprehensive Women&apos;s Wellness Clinic
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Women looking for a long-term healthcare
                  relationship.</strong> Rather than seeking a new provider for
                  every new concern, many women prefer establishing care with a
                  clinic that can support them across life stages.
                </li>
                <li>
                  <strong>Women managing multiple, interconnected health
                  concerns.</strong> Conditions like PCOS often involve
                  menstrual, metabolic, and fertility considerations together,
                  benefiting from a provider who addresses all of these as part
                  of one coordinated approach.
                </li>
                <li>
                  <strong>Couples navigating fertility challenges.</strong>{" "}
                  Comprehensive fertility evaluation, addressing both partners
                  together, is more efficient and effective than fragmented,
                  separate care.
                </li>
                <li>
                  <strong>Women approaching or navigating menopause.</strong> A
                  provider who has supported a woman through earlier reproductive
                  years is well-positioned to guide her through this transition
                  with full context.
                </li>
                <li>
                  <strong>Anyone who has felt rushed or dismissed
                  elsewhere.</strong> A wellness-focused clinic prioritises
                  taking the time needed to properly understand and address each
                  concern, rather than moving through a checklist quickly.
                </li>
                <li>
                  <strong>Adolescents and their families seeking sensitive,
                  age-appropriate care.</strong> Parents looking for a provider
                  experienced in handling teenage health concerns with
                  appropriate confidentiality and communication style.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect When You Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A thorough initial consultation.</strong> Your first
                  visit typically involves a comprehensive history, allowing the
                  doctor to understand your full health picture before
                  recommending any specific evaluation or treatment.
                </li>
                <li>
                  <strong>A comfortable, private environment.</strong> Every
                  conversation, examination, and test is handled with full
                  confidentiality and professionalism.
                </li>
                <li>
                  <strong>Clear communication throughout.</strong> Findings,
                  recommendations, and next steps are explained in plain
                  language, ensuring you leave every visit with clarity rather
                  than confusion.
                </li>
                <li>
                  <strong>Coordinated, ongoing care.</strong> Whether you need a
                  single consultation or an extended treatment plan, your care
                  is managed cohesively rather than as disconnected, one-off
                  visits.
                </li>
                <li>
                  <strong>Respect for your time and comfort.</strong>{" "}
                  Appointments are structured to allow adequate time for
                  discussion and examination, rather than rushing through a
                  fixed time slot.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Women&apos;s Wellness Clinics
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> &quot;A wellness clinic is only for
                  pregnancy care.&quot;{" "}
                  <strong>Fact:</strong> Comprehensive women&apos;s wellness
                  spans adolescent health through menopause, with pregnancy
                  being just one part of a much broader scope.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;I need to see a different
                  specialist for every different concern.&quot;{" "}
                  <strong>Fact:</strong> Many conditions, from PCOS to fertility
                  to menopause, can be comprehensively managed by a single
                  experienced gynaecologist with the right training and
                  technology.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Wellness clinics are more
                  expensive than seeing individual specialists separately.&quot;{" "}
                  <strong>Fact:</strong> Coordinated care under one provider
                  often reduces the cost and time burden of navigating multiple
                  separate specialists for interconnected concerns.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Sensitive topics are
                  uncomfortable to discuss even at a specialised clinic.&quot;{" "}
                  <strong>Fact:</strong> A genuinely wellness-focused clinic is
                  specifically designed to make these conversations comfortable,
                  private, and judgement-free.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;Younger women or those not
                  currently pregnant don&apos;t need a relationship with a
                  women&apos;s health provider.&quot;{" "}
                  <strong>Fact:</strong> Establishing care early, well before
                  pregnancy or menopause become relevant, supports better
                  long-term health outcomes.
                </li>
                <li>
                  <strong>Myth:</strong> &quot;All gynaecology clinics offer the
                  same level of service.&quot;{" "}
                  <strong>Fact:</strong> The range of services, technology, and
                  continuity of care can vary considerably between providers,
                  making the choice of clinic genuinely significant.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka&apos;s Women&apos;s Wellness Clinic in
                Moradabad
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>A gold-medallist gynaecologist with broad, integrated
                  expertise.</strong> Dr. Priyanka Pachauri&apos;s training
                  spans gynaecology, laparoscopic surgery, and fertility care,
                  allowing a genuinely comprehensive approach under one provider.
                </li>
                <li>
                  <strong>A full spectrum of services addressing every life
                  stage.</strong> From adolescent health through menopause,
                  patients can build a long-term relationship with a single
                  trusted provider.
                </li>
                <li>
                  <strong>Advanced diagnostic and treatment technology.</strong>{" "}
                  The clinic is equipped with modern ultrasound imaging,
                  fertility assessment tools, and laparoscopic surgical
                  capability.
                </li>
                <li>
                  <strong>A confidential, patient-first approach to every
                  consultation.</strong> Every visit, regardless of the topic,
                  is handled with the privacy and respect sensitive health
                  conversations deserve.
                </li>
                <li>
                  <strong>A genuine focus on education alongside treatment.</strong>{" "}
                  Patients leave consultations with a clear understanding of
                  their condition and the reasoning behind any recommended
                  treatment, not just a prescription.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gold-medallist gynaecologist and
                laparoscopic surgeon in Moradabad, offering comprehensive
                women&apos;s health services spanning adolescent gynaecology,
                menstrual health, PCOS and hormonal management, fertility and
                IVF care, pregnancy monitoring, and menopause management. Every
                consultation is approached with thoroughness, clear
                communication, and genuine attention to each patient&apos;s
                individual health journey.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you&apos;re seeking adolescent health guidance,
                fertility support, pregnancy care, or menopause management, a
                comprehensive women&apos;s wellness clinic offers continuity and
                expertise across every stage of your health journey.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist, Laparoscopic Surgeon & Fertility
                        Specialist (MBBS, MS)
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
                        Pradesh, 244001
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
                Frequently Asked Questions
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