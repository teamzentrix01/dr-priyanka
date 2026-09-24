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

export default function MyomectomyScarCareDoctorInMoradabad() {
  const faqs = [
    {
      q: "How long does a myomectomy scar take to heal?",
      a: "Surface healing typically takes 1–2 weeks with laparoscopic surgery, while full scar maturation can take up to a year.",
    },
    {
      q: "Are laparoscopic myomectomy scars smaller than open surgery scars?",
      a: "Yes, laparoscopic incisions are typically just 5–10mm, compared to several centimetres for open surgery.",
    },
    {
      q: "When can I apply scar cream after myomectomy?",
      a: "Most doctors recommend waiting until the incision is fully closed before applying any scar treatment products.",
    },
    {
      q: "Is itching around the scar normal?",
      a: "Yes, mild itching is a normal part of the healing process, though scratching the area should be avoided.",
    },
    {
      q: "When should I worry about my myomectomy scar?",
      a: "Contact your doctor if you notice increasing redness, discharge, fever, or the wound reopening.",
    },
    {
      q: "Can sun exposure affect my scar?",
      a: "Yes, sun exposure can darken new scar tissue, so sun protection is recommended for several months after surgery.",
    },
    {
      q: "Will my myomectomy scar be permanent?",
      a: "Most scars fade significantly over time, with laparoscopic scars often becoming very subtle after several months.",
    },
    {
      q: "Can I massage my scar to help it heal?",
      a: "Yes, once cleared by your doctor, gentle massage can help improve scar flexibility and reduce tightness.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist and laparoscopic surgeon (MS, FMAS) offering laparoscopic myomectomy with structured post-operative and scar care follow-up.",
    },
    {
      q: "Does Dr. Priyanka Pachauri offer follow-up visits after myomectomy?",
      a: "Yes, her practice includes structured follow-up consultations to monitor healing and address any concerns.",
    },
    {
      q: "Does smoking affect myomectomy scar healing?",
      a: "Yes, smoking is known to slow wound healing and can worsen scar appearance.",
    },
    {
      q: "How can I book a consultation for myomectomy recovery in Moradabad?",
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
                Myomectomy Scar Care Doctor in Moradabad: Complete Healing Guide
              </h1>

              <p className="mb-4 text-gray-700">
                After a myomectomy — the surgical removal of uterine fibroids
                while preserving the uterus — proper scar care plays a bigger
                role in recovery than many women realise. Whether the procedure
                was performed laparoscopically through small keyhole incisions
                or through a traditional open approach, how you care for your
                incision in the days and weeks that follow directly affects
                healing speed, infection risk, and the final appearance of your
                scar. This guide covers everything you need to know about
                myomectomy scar care — from the first few days after surgery to
                long-term scar management — along with warning signs that need a
                doctor&apos;s attention.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Your Myomectomy Incision
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic myomectomy</strong> typically involves
                  3–4 small incisions, each around 5–10mm, made in the abdomen.
                </li>
                <li>
                  <strong>Open (abdominal) myomectomy</strong> involves a larger
                  single incision, usually a horizontal cut along the lower
                  abdomen, similar to a C-section scar.
                </li>
                <li>
                  <strong>Hysteroscopic myomectomy</strong> (for submucosal
                  fibroids) involves no external incision at all, since
                  it&apos;s performed through the vagina and cervix.
                </li>
                <li>
                  The type of incision directly affects healing time, scar
                  appearance, and post-operative care needs.
                </li>
                <li>
                  Your surgeon will typically use dissolvable sutures, surgical
                  glue, or skin staples, depending on the technique used.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scar Healing Timeline After Myomectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Days 1–3:</strong> Incisions are covered with
                  dressings; some redness, mild swelling, and tenderness are
                  normal.
                </li>
                <li>
                  <strong>Days 4–7:</strong> Dressings may be changed or
                  removed as advised; the incision begins to close and form a
                  thin scab or scar line.
                </li>
                <li>
                  <strong>Week 2:</strong> Most laparoscopic incisions have
                  visibly closed; dissolvable stitches, if used, begin to
                  dissolve.
                </li>
                <li>
                  <strong>Weeks 3–4:</strong> The scar continues to strengthen
                  internally, even as it looks mostly healed on the surface.
                </li>
                <li>
                  <strong>Months 1–3:</strong> The scar may appear pink,
                  slightly raised, or itchy as it continues remodelling beneath
                  the surface.
                </li>
                <li>
                  <strong>Months 3–12:</strong> The scar gradually fades to a
                  lighter, flatter, less noticeable line, particularly with
                  laparoscopic incisions.
                </li>
                <li>
                  <strong>Beyond 12 months:</strong> Final scar appearance is
                  generally established, though very gradual improvement can
                  continue.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Immediate Post-Surgery Scar Care (First 1–2 Weeks)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Keep the incision clean and dry</strong>, following
                  your surgeon&apos;s specific bathing instructions.
                </li>
                <li>
                  <strong>Avoid soaking the incision</strong> in bathtubs,
                  swimming pools, or hot tubs until fully healed.
                </li>
                <li>
                  <strong>Pat the area dry gently</strong> after washing, rather
                  than rubbing.
                </li>
                <li>
                  <strong>Change dressings as instructed</strong>, and avoid
                  removing them earlier than advised.
                </li>
                <li>
                  <strong>Watch for excessive redness, warmth, or
                  discharge</strong>, which could indicate infection.
                </li>
                <li>
                  <strong>Avoid applying any creams, oils, or ointments</strong>{" "}
                  to the incision unless specifically recommended by your doctor.
                </li>
                <li>
                  <strong>Wear loose, breathable clothing</strong> to avoid
                  friction or pressure on the healing incision.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scar Care in the Following Weeks (2–6 Weeks)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Gently clean the area</strong> with mild soap and
                  water once fully healed on the surface, as advised by your
                  doctor.
                </li>
                <li>
                  <strong>Avoid sun exposure on the scar</strong>, since UV
                  exposure can cause darker, more noticeable scarring.
                </li>
                <li>
                  <strong>Avoid strenuous activity or heavy lifting</strong>, as
                  excessive abdominal strain can affect internal healing and
                  scar quality.
                </li>
                <li>
                  <strong>Watch for itching</strong>, which is a normal part of
                  healing, but avoid scratching the area directly.
                </li>
                <li>
                  <strong>Silicone-based scar sheets or gels</strong>, if
                  recommended by your doctor, can be introduced once the
                  incision has fully closed.
                </li>
                <li>
                  <strong>Gentle scar massage</strong>, once cleared by your
                  doctor, can help improve scar flexibility and reduce tightness.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Long-Term Scar Care (Beyond 6 Weeks)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continue sun protection</strong> on the scar for at
                  least 6–12 months, since new scar tissue is especially prone
                  to darkening.
                </li>
                <li>
                  <strong>Silicone gel or sheeting</strong>, used consistently,
                  can help flatten and soften the scar over time.
                </li>
                <li>
                  <strong>Regular, gentle massage of the scar</strong> can help
                  reduce adhesions and improve tissue mobility.
                </li>
                <li>
                  <strong>Stay hydrated and maintain good nutrition</strong>,
                  since overall skin and tissue health supports better scar
                  healing.
                </li>
                <li>
                  <strong>Avoid smoking</strong>, which is well known to slow
                  wound healing and worsen scar appearance.
                </li>
                <li>
                  <strong>Patience is key</strong> — most scars continue to
                  improve in appearance for up to a year or more after surgery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Laparoscopic Myomectomy Scars Heal Better
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Smaller incisions</strong> — typically just 5–10mm,
                  compared to several centimetres for open surgery.
                </li>
                <li>
                  <strong>Less tissue trauma</strong>, since the surgery is
                  performed with minimally invasive instruments.
                </li>
                <li>
                  <strong>Lower risk of keloid or thick scarring</strong>, due
                  to the smaller wound size.
                </li>
                <li>
                  <strong>Faster surface healing</strong>, often within 1–2
                  weeks for the visible incision.
                </li>
                <li>
                  <strong>Less noticeable final scarring</strong>, with many
                  laparoscopic scars fading to be barely visible after several
                  months.
                </li>
                <li>
                  <strong>Reduced risk of wound complications</strong>, such as
                  infection or delayed healing, compared to larger open
                  incisions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs That Need a Doctor&apos;s Attention
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor promptly if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Increasing redness, warmth, or swelling around the incision.
                </li>
                <li>
                  Pus or unusual discharge from the wound.
                </li>
                <li>
                  Fever or chills, which could indicate a wound or internal
                  infection.
                </li>
                <li>
                  The incision reopening or separating at any point.
                </li>
                <li>
                  Severe or worsening pain at the incision site, rather than
                  gradual improvement.
                </li>
                <li>
                  A foul odour coming from the wound.
                </li>
                <li>
                  Excessive or unusual bleeding from the incision site.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Scar-Related Concerns After Myomectomy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Will my scar be visible in swimwear or
                  clothing?&quot;</strong> — Laparoscopic scars are generally
                  small and well placed, often barely noticeable once fully
                  healed.
                </li>
                <li>
                  <strong>&quot;Can I use scar creams right away?&quot;</strong>{" "}
                  — Most doctors recommend waiting until the wound is fully
                  closed before applying any scar treatment products.
                </li>
                <li>
                  <strong>&quot;Why is my scar itchy?&quot;</strong> — Mild
                  itching is a normal part of the healing and tissue remodelling
                  process.
                </li>
                <li>
                  <strong>&quot;Will my scar ever fully disappear?&quot;</strong>{" "}
                  — Most scars fade significantly but may remain as a faint
                  line; laparoscopic scars in particular tend to become very
                  subtle.
                </li>
                <li>
                  <strong>&quot;Can I get a tattoo over my scar later?&quot;</strong>{" "}
                  — This is best discussed with your doctor once the scar is
                  fully matured, usually after 12 months.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What a Good Post-Myomectomy Consultation Should Cover
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Specific scar care instructions tailored to your incision type
                  and technique used.
                </li>
                <li>
                  A realistic healing timeline, including when dressings can be
                  removed and activity resumed.
                </li>
                <li>
                  Guidance on when to introduce scar treatments, such as
                  silicone gel or massage.
                </li>
                <li>
                  Clear warning signs to watch for that need prompt medical
                  attention.
                </li>
                <li>
                  Follow-up appointment scheduling, to monitor healing progress
                  directly.
                </li>
                <li>
                  Answers to any personal concerns about scar appearance or
                  long-term care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Factors That Influence Scar Healing Quality
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Skin type and genetics</strong> — some individuals
                  naturally form thicker or more visible scars than others.
                </li>
                <li>
                  <strong>Nutrition status</strong> — adequate protein and
                  vitamin intake supports faster, better-quality healing.
                </li>
                <li>
                  <strong>Age</strong> — younger skin generally heals slightly
                  faster, though good wound care matters at any age.
                </li>
                <li>
                  <strong>Wound care compliance</strong> — following
                  instructions closely in the first few weeks makes a
                  significant difference.
                </li>
                <li>
                  <strong>Underlying health conditions</strong> — conditions
                  like diabetes can slow wound healing and require closer
                  monitoring.
                </li>
                <li>
                  <strong>Surgical technique</strong> — precise, minimally
                  invasive closure generally results in a neater, less
                  noticeable scar.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Myomectomy Doctor in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women in Moradabad recovering from myomectomy, Dr. Priyanka
                Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced
                Infertility Fellowship) offers thorough surgical care combined
                with clear post-operative guidance. Based on her official
                website, (
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
                  A &quot;Her Health First&quot; philosophy, ensuring patients
                  receive clear guidance at every stage, including recovery and
                  scar care.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy</strong> performed using
                  high-definition 3D laparoscopic technology, which typically
                  results in smaller incisions and better healing outcomes than
                  open surgery.
                </li>
                <li>
                  <strong>Structured follow-up care</strong>, allowing patients
                  to have their healing progress monitored and any concerns
                  addressed promptly.
                </li>
                <li>
                  3D/4D ultrasound imaging used both for pre-operative fibroid
                  assessment and post-operative monitoring where needed.
                </li>
                <li>
                  A comprehensive women&apos;s health practice, ensuring
                  continuity of care from diagnosis through surgery and
                  recovery.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Because scar healing and recovery can vary from person to
                person, personalised, in-person guidance from your treating
                surgeon remains the most reliable source of scar care advice
                specific to your procedure.
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
                Diet and Lifestyle Tips to Support Scar Healing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Eat protein-rich foods</strong> to support tissue
                  repair and wound healing.
                </li>
                <li>
                  <strong>Include vitamin C and zinc-rich foods</strong>, both
                  known to support healthy healing.
                </li>
                <li>
                  <strong>Stay well hydrated</strong>, which supports overall
                  skin and tissue recovery.
                </li>
                <li>
                  <strong>Avoid smoking and limit alcohol</strong>, both of
                  which can slow wound healing.
                </li>
                <li>
                  <strong>Get adequate rest</strong>, since sleep plays an
                  important role in tissue repair.
                </li>
                <li>
                  <strong>Gradually resume gentle movement</strong> as cleared
                  by your doctor, to support healthy circulation to the healing
                  area.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Laparoscopic myomectomy generally results in smaller,
                  better-healing scars than open surgery.
                </li>
                <li>
                  Proper wound care in the first few weeks significantly affects
                  final scar appearance.
                </li>
                <li>
                  Sun protection and silicone-based treatments, once cleared by
                  your doctor, can improve long-term scar appearance.
                </li>
                <li>
                  Warning signs like redness, discharge, or fever should never
                  be ignored and need prompt medical attention.
                </li>
                <li>
                  Scar healing continues for up to a year, so patience is an
                  important part of the process.
                </li>
                <li>
                  Personalised guidance from your surgeon remains the most
                  reliable source of scar care advice.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Proper scar care after myomectomy plays a meaningful role in how
                smoothly you heal and how your final scar looks and feels. From
                simple first-week wound care to long-term sun protection and
                scar treatment, a little consistent attention goes a long way —
                especially with laparoscopic myomectomy, where small, well-placed
                incisions already give you a head start toward minimal scarring.
                If you have questions or concerns about your healing progress at
                any stage, don&apos;t hesitate to reach out to your surgeon —
                proper follow-up care is just as important as the surgery
                itself.
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