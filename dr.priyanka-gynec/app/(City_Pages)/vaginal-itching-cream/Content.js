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

export default function VaginalItchingCream() {
  const faqs = [
    {
      q: "Which cream is best for vaginal itching?",
      a: "It depends on the cause. Antifungal creams suit yeast infections, but other causes need different treatment.",
    },
    {
      q: "Can I use antifungal cream without a prescription?",
      a: "Only if you have had a confirmed yeast infection before. Otherwise, see a doctor first.",
    },
    {
      q: "Can I use hydrocortisone cream on the vagina?",
      a: "It may be used briefly on irritated outer skin, but not inside, and not if infection is suspected.",
    },
    {
      q: "Is vaginal itching cream safe in pregnancy?",
      a: "Not all are. Consult your gynaecologist before using any cream or applicator during pregnancy.",
    },
    {
      q: "How long does vaginal itching cream take to work?",
      a: "Mild relief may come in a day or two. Follow the full course, and see a doctor if there is no improvement.",
    },
    {
      q: "Why is the cream not working for my itching?",
      a: "The cause may not be yeast. It could be BV, allergy, dryness or a skin condition that needs a different treatment.",
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
                Vaginal Itching Cream: Types, How to Use Safely &amp; When a
                Cream Won&apos;t Help
              </h1>

              <p className="mb-4 text-gray-700">
                When itching strikes, a cream feels like the quickest fix. Many
                women buy one from the nearest pharmacy without a prescription.
                Sometimes that works. Often it does not, because the cream may
                not match the cause.
              </p>

              <p className="text-gray-700">
                This guide explains the common types of creams, how to use them
                safely, and when you should avoid them or see a gynaecologist
                instead.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First, the Key Point: A Cream Treats the Cause, Not Just the
                Itch
              </h2>

              <p className="mb-4 text-gray-700">
                Vaginal itching has many causes, and each one needs a different
                treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A yeast infection responds to antifungal medicine</li>
                <li>
                  Bacterial vaginosis needs antibiotics, so an antifungal cream
                  will not work
                </li>
                <li>
                  An allergy or irritation needs the trigger removed, plus a
                  soothing or mild steroid cream for a short time
                </li>
                <li>
                  Menopausal dryness may need a moisturiser or an estrogen cream
                  prescribed by a doctor
                </li>
                <li>
                  STIs such as trichomoniasis need specific medicines, and the
                  partner must be treated too
                </li>
                <li>
                  Using the wrong cream can delay recovery and sometimes make
                  symptoms worse
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Types of Creams Used for Vaginal Itching
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Antifungal Creams (For Yeast Infection)
                  </h3>
                  <p className="mb-2 text-gray-700">
                    These are the most commonly used creams.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Contain medicines such as clotrimazole, miconazole,
                      econazole or fluconazole-type agents (the exact choice is
                      up to your doctor or pharmacist)
                    </li>
                    <li>
                      Work only when the itching is caused by Candida yeast
                    </li>
                    <li>
                      Often available as a cream with an applicator, vaginal
                      tablets or pessaries
                    </li>
                    <li>
                      Used for a few days up to a week, depending on the product
                    </li>
                    <li>
                      Typical signs they suit: thick white discharge, itching,
                      burning, redness
                    </li>
                  </ul>
                  <p className="mt-2 font-semibold text-gray-900">Important:</p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Always follow the leaflet or your doctor&apos;s
                      instructions on the course length
                    </li>
                    <li>Finish the full course even if itching improves early</li>
                    <li>
                      Some are oil-based and can weaken latex condoms
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Mild Steroid Creams (For Irritation or Dermatitis)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Such as low-strength hydrocortisone creams</li>
                    <li>
                      Reduce redness and itching from allergy, eczema or contact
                      dermatitis
                    </li>
                    <li>
                      For short use on outer skin only, unless a doctor says
                      otherwise
                    </li>
                    <li>Not for use inside the vagina</li>
                    <li>
                      Not suitable if an infection is present, as they can mask
                      or worsen it
                    </li>
                    <li>Long-term or repeated use can thin the skin</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Combination Creams
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Contain an antifungal plus a mild steroid</li>
                    <li>
                      Used by some doctors for short periods when there is both
                      infection and inflammation
                    </li>
                    <li>
                      Should be used only on medical advice, because of the
                      steroid component
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Antibiotic Creams or Gels (For Bacterial Vaginosis)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Contain medicines such as metronidazole or clindamycin
                    </li>
                    <li>Prescribed by a doctor after confirming BV</li>
                    <li>Used for a set number of days as directed</li>
                    <li>
                      Not the same as antifungal creams, and they will not treat
                      yeast
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Estrogen Creams (For Menopausal Dryness)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Low-dose vaginal estrogen can treat dryness, thinning and
                      itching after menopause
                    </li>
                    <li>Available only on prescription</li>
                    <li>
                      Not suitable for every woman, so a doctor must check your
                      history first
                    </li>
                    <li>Usually shows effect over a few weeks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Moisturisers and Soothing Barrier Creams
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Fragrance-free vaginal moisturisers can help dryness
                    </li>
                    <li>
                      Plain barrier creams can protect irritated outer skin
                    </li>
                    <li>
                      They soothe symptoms but do not treat infections
                    </li>
                    <li>
                      Choose products that are free of perfume, dyes and alcohol
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    7. Anaesthetic or &quot;Numbing&quot; Creams
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Some products contain a numbing agent such as lidocaine
                    </li>
                    <li>
                      They give short-term relief but can cause allergic
                      reactions in some women
                    </li>
                    <li>
                      Not a good long-term solution, and not advised without a
                      doctor&apos;s guidance
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Cream for Which Cause? A Quick Guide
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thick white discharge + itching: often an antifungal cream or
                  pessary
                </li>
                <li>
                  Thin grey discharge + fishy smell: antibiotic treatment
                  prescribed by a doctor
                </li>
                <li>
                  Itching after a new soap or pad, with no discharge: stop the
                  irritant, and use a soothing cream for a short time
                </li>
                <li>
                  Dryness and itching after menopause: moisturiser or
                  doctor-prescribed estrogen cream
                </li>
                <li>
                  Blisters or sores: needs medical diagnosis, not a self-bought
                  cream
                </li>
                <li>
                  White, thin patches of skin: needs a doctor&apos;s assessment,
                  because it can be a chronic skin condition
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is a guide, not a diagnosis. Only an examination or test
                can confirm the cause.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Apply Vaginal Itching Cream Safely
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Creams With an Applicator
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Wash your hands first</li>
                    <li>Read the leaflet before you start</li>
                    <li>Lie down comfortably with knees bent</li>
                    <li>
                      Insert the applicator gently and release the cream as
                      directed
                    </li>
                    <li>Wash the applicator or dispose of it as instructed</li>
                    <li>
                      Many women prefer to use it at bedtime, to avoid leakage
                    </li>
                    <li>
                      Wear a panty liner if needed (unscented)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    For Creams on the Outer Skin
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Wash and dry the area gently</li>
                    <li>Apply a thin layer only to the itchy outer skin</li>
                    <li>
                      Do not apply inside the vagina unless the product is made
                      for that
                    </li>
                    <li>Wash your hands afterwards</li>
                    <li>Avoid bandages or tight clothing over the area</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    General Rules
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Follow the exact course length on the pack or your
                      doctor&apos;s prescription
                    </li>
                    <li>Do not use more than recommended</li>
                    <li>
                      Avoid intercourse during treatment, or use protection as
                      advised
                    </li>
                    <li>
                      Avoid tampons and menstrual cups if the leaflet says so
                    </li>
                    <li>
                      Stop and seek help if you feel burning, swelling or rash
                      after applying
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Side Effects to Watch For
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild burning or stinging right after application</li>
                <li>Redness, swelling or rash (a possible allergy)</li>
                <li>Increased itching</li>
                <li>
                  Vaginal discharge from the cream itself, which is usually
                  harmless
                </li>
              </ul>

              <p className="mb-2 mt-4 font-semibold text-gray-900">
                Stop using the cream and see a doctor if:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning becomes severe</li>
                <li>
                  You develop hives, swelling or breathing difficulty (an
                  emergency)
                </li>
                <li>Symptoms are worse after a few days</li>
                <li>Symptoms do not improve in the expected time</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When NOT to Use a Cream Without Medical Advice
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  During pregnancy: some medicines and applicators are not
                  suitable
                </li>
                <li>If it is your first episode of vaginal itching</li>
                <li>
                  If you have a foul odour, which may mean bacterial vaginosis
                </li>
                <li>If you have a fever, pelvic pain or abnormal bleeding</li>
                <li>If you have sores, blisters or lumps</li>
                <li>
                  If there is a risk of an STI, for example, a new partner
                </li>
                <li>
                  If you are a teenager or young girl, unless advised by a
                  doctor
                </li>
                <li>
                  If you have diabetes, since infections may need a longer
                  course
                </li>
                <li>If your symptoms keep returning</li>
                <li>
                  If you recently used another cream and it did not work
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Cream May Not Work
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The cause was not a yeast infection</li>
                <li>The infection was resistant or only partly treated</li>
                <li>The course was stopped too early</li>
                <li>The partner was not treated when needed</li>
                <li>
                  An allergy to a product (or the cream itself) keeps the
                  itching going
                </li>
                <li>
                  A skin condition such as lichen sclerosus is the real problem
                </li>
                <li>
                  Diabetes or hormonal imbalance is feeding the infection
                </li>
                <li>
                  The itching is from dryness, which needs a moisturiser, not an
                  antifungal
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If itching returns after treatment, or you have four or more
                episodes in a year, a doctor should investigate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Self-Care Tips While Using a Cream
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear loose, breathable cotton underwear</li>
                <li>Avoid scented soaps, intimate washes, wipes and powders</li>
                <li>Do not douche</li>
                <li>Keep the area clean and dry</li>
                <li>Change pads frequently</li>
                <li>Avoid scratching</li>
                <li>
                  Reduce excess sugar if you often get yeast infections
                </li>
                <li>
                  Keep blood sugar under control if you have diabetes
                </li>
              </ul>

              <p className="mb-2 mt-4 font-semibold text-gray-900">
                What to Avoid
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Buying creams based on friends&apos; advice or online ads
                </li>
                <li>Using old leftover creams from previous infections</li>
                <li>
                  Applying a steroid cream for days without a diagnosis
                </li>
                <li>
                  Using &quot;herbal&quot; or unlabelled creams of unknown
                  ingredients
                </li>
                <li>
                  Inserting home mixtures such as garlic, curd or vinegar
                </li>
                <li>Mixing several creams at once</li>
                <li>Ignoring itching that does not settle in a few days</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Book a consultation if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Itching for more than 3–4 days despite treatment</li>
                <li>Itching that returns again and again</li>
                <li>Green, yellow, grey or foul-smelling discharge</li>
                <li>Sores, blisters, white patches or lumps</li>
                <li>Burning while urinating or pain during sex</li>
                <li>Pelvic pain, fever or bleeding between periods</li>
                <li>Itching in pregnancy</li>
                <li>Itching after menopause</li>
                <li>Itching along with diabetes</li>
              </ul>

              <h3 className="mb-2 mt-6 font-semibold text-gray-900">
                What a Doctor Does Differently
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A private, respectful conversation</li>
                <li>A gentle examination and, if needed, a swab test</li>
                <li>
                  A clear diagnosis, so you get the right cream or tablet
                </li>
                <li>
                  A safe option if you are pregnant or breastfeeding
                </li>
                <li>A plan to stop the itching from returning</li>
                <li>A treatment for your partner when needed</li>
                <li>Follow-up for recurrent problems</li>
              </ul>

              <p className="mt-4 text-gray-700">
                You can also read our guides on vaginal itching causes, vaginal
                itching treatment and vaginal itching home remedies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Private, judgement-free consultations for sensitive concerns</li>
                <li>Careful diagnosis before any treatment</li>
                <li>
                  Expert care for infections, PCOS, menstrual disorders and
                  hormonal concerns
                </li>
                <li>
                  Support at every stage: teenage, pregnancy and menopause
                </li>
                <li>Advanced diagnostic facilities</li>
                <li>
                  A &quot;Her Health First&quot; approach that puts your comfort
                  first
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A vaginal itching cream can help, but only when it matches the
                cause. An antifungal works for yeast, an antibiotic for
                bacterial vaginosis, and a moisturiser or estrogen for menopausal
                dryness. The wrong cream wastes time and can make things worse.
              </p>

              <p className="text-gray-700">
                If this is your first episode, you are pregnant, or itching does
                not settle in a few days, please see a gynaecologist before
                reaching for another tube.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                📍 Book Your Consultation
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec: Fertility • Maternity • 3D Laparoscopy
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>
                        Dr. Priyanka Gynaec – Fertility • Maternity • 3D
                        Laparoscopy
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
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