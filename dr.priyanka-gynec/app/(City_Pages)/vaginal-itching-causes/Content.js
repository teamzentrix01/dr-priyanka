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

export default function VaginalItchingCauses() {
  const faqs = [
    {
      q: "What is the most common cause of vaginal itching?",
      a: "Yeast infection and bacterial vaginosis are the most common causes, followed by irritation from soaps, pads and tight clothing.",
    },
    {
      q: "Can vaginal itching happen without discharge?",
      a: "Yes. Allergies, dryness, skin conditions and menopause can cause itching without any discharge.",
    },
    {
      q: "Why does vaginal itching get worse at night?",
      a: "Fewer distractions, warmth and infections like scabies or lice can make itching feel stronger at night.",
    },
    {
      q: "Can diabetes cause vaginal itching?",
      a: "Yes. High blood sugar encourages yeast growth, so recurrent itching should prompt a sugar check.",
    },
    {
      q: "Is vaginal itching a sign of an STI?",
      a: "Sometimes. Trichomoniasis, herpes and other STIs can cause itching, so testing is wise if you are at risk.",
    },
    {
      q: "When should I see a doctor for vaginal itching?",
      a: "If it lasts several days, keeps returning, or comes with odour, unusual discharge, sores or pain.",
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
                Vaginal Itching Causes: Why It Happens, Symptoms &amp; When to
                See a Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                Almost every woman experiences vaginal itching at some point. It
                can feel worrying, and many women are unsure whether it is
                something minor or a sign of infection.
              </p>

              <p className="text-gray-700">
                The truth is that there are many possible causes. Some are
                simple, like a new soap or tight clothing. Others, such as
                infections or hormonal changes, need medical treatment. This
                guide explains the most common causes, how to spot clues, and
                when to see a gynaecologist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does Vaginal Itching Feel Like?
              </h2>

              <p className="mb-4 text-gray-700">
                Vaginal itching (pruritus vulvae) is an irritating urge to
                scratch the vagina or the skin around it (the vulva).
              </p>

              <p className="mb-4 text-gray-700">It may appear with:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Burning or stinging</li>
                <li>Redness or swelling</li>
                <li>Soreness or rawness</li>
                <li>Dryness</li>
                <li>Unusual discharge</li>
                <li>Unpleasant odour</li>
                <li>Pain while passing urine</li>
                <li>Pain during intercourse</li>
                <li>Tiny cracks, bumps or white patches on the skin</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Is Vaginal Itching Normal?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild, short-lived itching can happen from sweat, friction or a
                  new product
                </li>
                <li>
                  Itching that settles within a day or two is usually not
                  serious
                </li>
                <li>
                  Itching that lasts, returns or comes with other symptoms is
                  not something to ignore
                </li>
                <li>
                  Persistent itching is a sign that your body needs attention,
                  not a &quot;normal&quot; part of being a woman
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Causes of Vaginal Itching
              </h2>

              <h3 className="mb-2 font-semibold text-gray-900">
                A. Infections
              </h3>

              <p className="mb-4 text-gray-700">
                Infections are the most common medical causes.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">
                    1. Vaginal Yeast Infection (Candidiasis)
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Caused by an overgrowth of Candida fungus</li>
                    <li>
                      Thick, white, odourless discharge, often like cottage
                      cheese
                    </li>
                    <li>
                      Intense itching and burning, with redness and swelling
                    </li>
                    <li>
                      More likely with antibiotics, diabetes, pregnancy and weak
                      immunity
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">
                    2. Bacterial Vaginosis (BV)
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Caused by an imbalance of natural vaginal bacteria</li>
                    <li>Thin, grey or white discharge</li>
                    <li>
                      A strong &quot;fishy&quot; smell, especially after sex
                    </li>
                    <li>Itching may be mild or absent</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">
                    3. Trichomoniasis
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A sexually transmitted infection caused by a parasite
                    </li>
                    <li>
                      Yellow-green, frothy discharge with a foul smell
                    </li>
                    <li>Itching, burning and pain while urinating</li>
                    <li>Partners need treatment too</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">
                    4. Other Sexually Transmitted Infections
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Genital herpes can cause painful blisters and sores</li>
                    <li>Genital warts can cause itching and small growths</li>
                    <li>
                      Chlamydia and gonorrhoea sometimes cause discharge and
                      irritation
                    </li>
                    <li>
                      Many STIs have no obvious symptoms, so testing matters
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">
                    5. Pubic Lice and Scabies
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Tiny parasites that cause intense itching of genital skin
                    </li>
                    <li>Often worse at night</li>
                    <li>Spread through close contact or shared items</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-gray-900">
                    6. Urinary Tract Infection (UTI)
                  </h4>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Mostly causes burning urine and frequent urination
                    </li>
                    <li>Can cause irritation around the vulva</li>
                    <li>Sometimes mistaken for a vaginal infection</li>
                  </ul>
                </div>
              </div>

              <h3 className="mb-2 mt-8 font-semibold text-gray-900">
                B. Allergies and Irritants
              </h3>

              <p className="mb-4 text-gray-700">
                Your skin may react to something you use every day.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Soaps, body washes and bubble baths</li>
                <li>Intimate washes, wipes, sprays and powders</li>
                <li>Scented sanitary pads, tampons and panty liners</li>
                <li>Laundry detergents and fabric softeners</li>
                <li>Condoms (latex), lubricants and spermicides</li>
                <li>Hair removal creams, razors and waxing</li>
                <li>Dyes in underwear or toilet paper</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Clues: itching starts soon after a new product, with redness and
                no unusual discharge.
              </p>

              <h3 className="mb-2 mt-8 font-semibold text-gray-900">
                C. Hormonal Changes
              </h3>

              <p className="mb-4 text-gray-700">
                Estrogen keeps vaginal tissue moist, thick and healthy. When it
                changes, itching can follow.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Menopause and perimenopause:</strong> low estrogen
                  causes dryness and thinning (atrophic vaginitis)
                </li>
                <li>
                  <strong>Pregnancy:</strong> hormonal shifts raise the risk of
                  yeast infection
                </li>
                <li>
                  <strong>Breastfeeding:</strong> estrogen levels drop
                  temporarily
                </li>
                <li>
                  <strong>Menstrual cycle:</strong> pH changes before or after
                  periods can cause itching
                </li>
                <li>
                  <strong>Birth control pills or hormonal devices:</strong> may
                  change vaginal balance in some women
                </li>
                <li>
                  <strong>PCOS and other hormone problems:</strong> may be
                  linked to recurrent infections
                </li>
              </ul>

              <h3 className="mb-2 mt-8 font-semibold text-gray-900">
                D. Skin Conditions
              </h3>

              <p className="mb-4 text-gray-700">
                Skin disease can affect the genital area just like anywhere
                else.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Eczema (atopic dermatitis):</strong> dry, red, itchy
                  patches
                </li>
                <li>
                  <strong>Contact dermatitis:</strong> a reaction to an irritant
                  or allergen
                </li>
                <li>
                  <strong>Psoriasis:</strong> red, scaly patches, sometimes
                  smooth and shiny in the genital area
                </li>
                <li>
                  <strong>Lichen sclerosus:</strong> thin, white, wrinkled
                  patches with severe itching, which needs long-term care
                </li>
                <li>
                  <strong>Lichen planus:</strong> can cause painful, itchy areas
                  and erosions
                </li>
              </ul>

              <h3 className="mb-2 mt-8 font-semibold text-gray-900">
                E. Lifestyle and Hygiene Factors
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tight, synthetic or wet clothing: traps moisture and heat</li>
                <li>Over-washing or douching: removes protective bacteria</li>
                <li>Poor hygiene or infrequent pad changes</li>
                <li>Wiping back to front after using the toilet</li>
                <li>Staying in sweaty gym wear or wet swimsuits</li>
                <li>Friction from cycling, sex or tight jeans</li>
                <li>Hot, humid weather</li>
              </ul>

              <h3 className="mb-2 mt-8 font-semibold text-gray-900">
                F. Medical Conditions and Medicines
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Diabetes:</strong> extra sugar in the body encourages
                  yeast growth
                </li>
                <li>
                  <strong>Weak immunity:</strong> from illness, steroids or
                  other conditions
                </li>
                <li>
                  <strong>Antibiotics:</strong> can kill healthy bacteria along
                  with harmful ones
                </li>
                <li>Long-term steroid use</li>
                <li>
                  <strong>Chemotherapy or radiation:</strong> can cause dryness
                  and irritation
                </li>
                <li>
                  <strong>Anaemia or iron deficiency:</strong> sometimes linked
                  to generalised itching
                </li>
                <li>
                  <strong>Liver or kidney disease:</strong> can cause itching
                  all over the body, including the genital area
                </li>
              </ul>

              <h3 className="mb-2 mt-8 font-semibold text-gray-900">
                G. Stress and Emotional Factors
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Long-term stress can weaken immunity and disturb hormones
                </li>
                <li>Anxiety can make itching feel stronger</li>
                <li>
                  Scratching creates a cycle: more itching, more scratching,
                  more irritation
                </li>
                <li>
                  Stress itself rarely causes vaginal itching alone, but it can
                  make other causes worse
                </li>
              </ul>

              <h3 className="mb-2 mt-8 font-semibold text-gray-900">
                H. Rare but Serious Causes
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Vulvar precancer or cancer: a rare cause of long-lasting
                  itching with a lump, ulcer or skin change
                </li>
                <li>
                  These are uncommon, but they are one reason persistent itching
                  should never be ignored
                </li>
                <li>Early checks make treatment simpler</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Clues That Help Point to the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                These are hints only. Only an examination or test can confirm
                the cause.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Thick white, curd-like discharge: often yeast</li>
                <li>
                  Thin grey discharge with fishy smell: often bacterial
                  vaginosis
                </li>
                <li>
                  Yellow-green frothy discharge: may suggest trichomoniasis
                </li>
                <li>
                  Itching without any discharge: may suggest allergy, dryness or
                  a skin condition
                </li>
                <li>
                  Itching after new soap, pad or wash: often irritant or allergy
                </li>
                <li>Blisters or painful sores: may suggest herpes</li>
                <li>
                  Itching with burning during urination: may suggest a urinary
                  infection
                </li>
                <li>
                  Itching mainly at night: may suggest lice, scabies or simple
                  lack of distraction
                </li>
                <li>
                  White, thin skin patches: may suggest lichen sclerosus
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Vaginal Itching in Different Life Stages
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    In Teenagers and Young Girls
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Tight clothing, poor hygiene, soap irritation</li>
                    <li>Threadworms in young children</li>
                    <li>Early yeast infections</li>
                    <li>
                      Always seek a doctor&apos;s opinion rather than using
                      strong creams
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    During Reproductive Years
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Infections, hormonal changes from the pill, period
                      products
                    </li>
                    <li>Sexual activity and new partners</li>
                    <li>Recurrent yeast infection or BV</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    During Pregnancy
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Increased glycogen and hormones favour yeast</li>
                    <li>Increased discharge and sweating</li>
                    <li>
                      Avoid self-medication. Some medicines are unsuitable in
                      pregnancy
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    After Menopause
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Low estrogen causes dryness and thinning</li>
                    <li>
                      Increased risk of skin conditions such as lichen sclerosus
                    </li>
                    <li>
                      Any bleeding after menopause needs prompt evaluation
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Itching Keep Coming Back?
              </h2>

              <p className="mb-4 text-gray-700">
                Recurrent itching usually has a reason.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>An infection that was not fully treated</li>
                <li>Wrong self-treatment without a proper diagnosis</li>
                <li>Uncontrolled blood sugar or diabetes</li>
                <li>A partner who has not been treated</li>
                <li>A hidden allergy to a daily product</li>
                <li>A skin condition mistaken for infection</li>
                <li>Hormonal imbalance</li>
                <li>Frequent antibiotic use</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Four or more infections in a year are considered recurrent and
                need a proper investigation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">Do not wait if you notice:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Itching lasting more than a few days</li>
                <li>Itching that keeps returning</li>
                <li>Thick, foul-smelling, green, yellow or grey discharge</li>
                <li>Sores, blisters, lumps or white patches</li>
                <li>Pain while urinating or during sex</li>
                <li>Pelvic pain or fever</li>
                <li>
                  Bleeding between periods, after sex or after menopause
                </li>
                <li>Itching during pregnancy</li>
                <li>Itching with diabetes or low immunity</li>
                <li>A new sexual partner or any risk of an STI</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Doctors Find the Cause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private conversation about symptoms, habits and products you
                  use
                </li>
                <li>A gentle examination of the vulva and vagina</li>
                <li>
                  A swab of the discharge to test for yeast, bacteria or
                  parasites
                </li>
                <li>A vaginal pH check where needed</li>
                <li>Urine tests if a UTI is suspected</li>
                <li>Blood sugar checks, especially in recurrent cases</li>
                <li>STI screening when appropriate</li>
                <li>
                  A small skin biopsy only if a chronic skin condition or
                  unusual patch is suspected
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Reduce Your Risk
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose breathable cotton underwear</li>
                <li>Avoid douching, scented washes and wipes</li>
                <li>Change pads and wet clothes often</li>
                <li>Wipe front to back</li>
                <li>Control blood sugar if you have diabetes</li>
                <li>Take antibiotics only when prescribed</li>
                <li>Use protection during intercourse</li>
                <li>Keep up with regular gynaecology check-ups</li>
              </ul>

              <p className="mt-4 text-gray-700">
                For detailed care steps, you can read our guides on vaginal
                itching treatment and vaginal itching home remedies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Private, judgement-free consultations for sensitive concerns</li>
                <li>Careful diagnosis, so you do not have to guess the cause</li>
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
                Vaginal itching can come from many sources: infections,
                allergies, hormonal changes, skin conditions, diabetes or simple
                daily habits. Because the causes are so different, the right
                treatment depends on finding the real reason, not guessing.
              </p>

              <p className="text-gray-700">
                If your itching is mild and short-lived, gentle care may be
                enough. If it lasts, returns, or comes with discharge, odour,
                sores or pain, please consult a gynaecologist.
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
