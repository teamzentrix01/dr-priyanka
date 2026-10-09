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

export default function HowToTreatVaginalItching() {
  const faqs = [
    {
      q: "How can I treat vaginal itching quickly?",
      a: "Use a cool compress, wear cotton underwear and avoid scented products. Lasting relief needs treatment of the cause.",
    },
    {
      q: "Can vaginal itching go away on its own?",
      a: "Mild irritation may settle in a day or two. Infections usually need proper treatment.",
    },
    {
      q: "What should I never do for vaginal itching?",
      a: "Do not douche, use scented washes or insert garlic, curd or vinegar. Avoid self-medicating repeatedly.",
    },
    {
      q: "How do I know if I need a doctor?",
      a: "See one if itching lasts over 3–4 days, keeps returning, or comes with odour, unusual discharge, sores or pain.",
    },
    {
      q: "Is it safe to treat vaginal itching during pregnancy at home?",
      a: "Only gentle care such as cool compresses and cotton wear. Always consult your gynaecologist before any medicine.",
    },
    {
      q: "Why does vaginal itching keep coming back?",
      a: "Common reasons are incomplete treatment, wrong medicine, diabetes, allergies or an untreated partner.",
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
                How to Treat Vaginal Itching: A Step-by-Step Guide
              </h1>

              <p className="mb-4 text-gray-700">
                When itching starts, the first thought is usually, &quot;How do
                I make it stop?&quot; The good news is that most vaginal itching
                is treatable, and many women feel better within days once the
                right steps are taken.
              </p>

              <p className="text-gray-700">
                The key is doing things in the right order: calm the itch, avoid
                making it worse, find the cause, and then treat that cause. This
                guide walks you through each step, in plain language.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Short Answer
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Step 1: Soothe the itch safely and remove possible irritants
                </li>
                <li>
                  Step 2: Watch for clues such as discharge, smell, pain or
                  sores
                </li>
                <li>
                  Step 3: If itching lasts more than 3–4 days, or you have
                  warning signs, see a gynaecologist
                </li>
                <li>
                  Step 4: Treat the actual cause, whether yeast, bacteria,
                  allergy, dryness or a skin condition
                </li>
                <li>Step 5: Prevent it from coming back</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Treating the symptom alone rarely works for long. Treating the
                cause does.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 1: Calm the Itch Safely (First 24–48 Hours)
              </h2>

              <p className="mb-4 text-gray-700">
                These steps are safe for most women and may bring quick comfort.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Do This</h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Apply a cool compress (a cloth-wrapped cold pack) on the
                      outer area for 5–10 minutes
                    </li>
                    <li>Wash the outer genital area with plain lukewarm water</li>
                    <li>Pat dry gently with a clean cotton towel</li>
                    <li>Wear loose, breathable cotton underwear</li>
                    <li>Change underwear daily, and sooner if damp</li>
                    <li>
                      Change pads every 4–6 hours, and choose unscented ones
                    </li>
                    <li>Sleep without tight clothing</li>
                    <li>
                      Keep nails short, so accidental scratching does less damage
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Avoid This
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Do not douche. It removes protective bacteria and worsens
                      many infections
                    </li>
                    <li>
                      Skip scented soaps, intimate washes, wipes, sprays and
                      powders
                    </li>
                    <li>Avoid bubble baths and strong antiseptic liquids</li>
                    <li>
                      Do not insert garlic, curd, vinegar, turmeric paste or
                      oils into the vagina
                    </li>
                    <li>Do not scratch hard or rub the area</li>
                    <li>
                      Avoid tight jeans, leggings and synthetic fabric for long
                      hours
                    </li>
                    <li>
                      Avoid intercourse until the cause is clear, if infection
                      is possible
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 2: Look for Clues About the Cause
              </h2>

              <p className="mb-4 text-gray-700">
                Different causes need different treatment, so notice what comes
                with the itching.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thick white, curd-like discharge + burning: often a yeast
                  infection
                </li>
                <li>
                  Thin grey discharge + fishy smell: often bacterial vaginosis
                </li>
                <li>
                  Yellow-green frothy discharge: may suggest trichomoniasis
                </li>
                <li>
                  Itching after a new soap, pad or wash, with no discharge:
                  often irritation or allergy
                </li>
                <li>
                  Dryness and painful sex, especially after menopause: often low
                  estrogen
                </li>
                <li>
                  White, thin, shiny patches: may suggest a skin condition
                </li>
                <li>Blisters or painful sores: may suggest herpes</li>
                <li>
                  Itching with burning urine: may suggest a urinary infection
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                These are hints only. Only an examination or test can confirm
                the cause.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 3: Decide: Home Care or Doctor?
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Home Care May Be Enough If
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Itching is mild and started recently</li>
                    <li>
                      There is no unusual discharge, smell, sores or pain
                    </li>
                    <li>
                      It began after a clear trigger, such as a new product or
                      sweaty clothes
                    </li>
                    <li>
                      It improves within a day or two after removing the trigger
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    See a Gynaecologist If
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Itching lasts more than 3–4 days</li>
                    <li>This is your first episode</li>
                    <li>Itching keeps coming back</li>
                    <li>
                      Discharge is thick, green, yellow, grey or foul-smelling
                    </li>
                    <li>You have sores, blisters, lumps or white patches</li>
                    <li>You have pelvic pain, fever or burning urine</li>
                    <li>
                      There is bleeding between periods, after sex or after
                      menopause
                    </li>
                    <li>You are pregnant or breastfeeding</li>
                    <li>You have diabetes or weak immunity</li>
                    <li>There is any chance of an STI</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 4: Treat the Actual Cause
              </h2>

              <p className="mb-4 text-gray-700">
                The right treatment depends on the cause. A doctor will
                prescribe the correct medicine after examination.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    If It Is a Yeast Infection
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Antifungal medicine, as a vaginal cream or tablet, or an
                      oral tablet
                    </li>
                    <li>
                      A course that may last from one day to about a week, as
                      prescribed
                    </li>
                    <li>
                      Finishing the full course, even if itching improves early
                    </li>
                    <li>Blood sugar control if you have diabetes</li>
                    <li>A longer plan if infections recur</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    If It Is Bacterial Vaginosis
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Antibiotic tablets or vaginal gel, prescribed by a doctor
                    </li>
                    <li>An antifungal will not work for BV</li>
                    <li>
                      Avoiding alcohol with certain antibiotics, as your doctor
                      advises
                    </li>
                    <li>Avoiding douching, which often triggers BV</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    If It Is Trichomoniasis or Another STI
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Specific medicines for the infection</li>
                    <li>
                      Treatment of your partner too, to prevent reinfection
                    </li>
                    <li>
                      Avoiding intercourse until both of you complete treatment
                    </li>
                    <li>Testing for other infections when advised</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    If It Is an Allergy or Irritation
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Identify and stop the trigger, such as a soap, pad, wash,
                      detergent or latex
                    </li>
                    <li>
                      Short use of a soothing or mild steroid cream, only if a
                      doctor advises
                    </li>
                    <li>Switch to fragrance-free products</li>
                    <li>An antihistamine in some cases, as advised</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    If It Is Menopausal Dryness
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Fragrance-free vaginal moisturisers and lubricants
                    </li>
                    <li>
                      Doctor-prescribed low-dose vaginal estrogen, when suitable
                    </li>
                    <li>Regular follow-up</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    If It Is a Skin Condition
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Specific prescription creams</li>
                    <li>
                      A small skin biopsy in selected cases to confirm the
                      diagnosis
                    </li>
                    <li>
                      Long-term follow-up, since some conditions are chronic
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    If It Is Linked to Diabetes or Low Immunity
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Better blood sugar control</li>
                    <li>
                      Treating the infection and the underlying condition
                      together
                    </li>
                    <li>More careful follow-up</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Step 5: Support Healing With Good Habits
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep the area clean and dry</li>
                <li>Wear cotton underwear and loose clothes</li>
                <li>Wipe front to back after using the toilet</li>
                <li>
                  Wash with plain water or a mild, fragrance-free cleanser, on
                  the outer skin only
                </li>
                <li>
                  Change out of wet swimwear or gym clothes quickly
                </li>
                <li>
                  Use unscented pads and tampons, and change them often
                </li>
                <li>Reduce excess sugar if yeast infections recur</li>
                <li>Drink enough water, eat balanced meals and sleep well</li>
                <li>
                  Manage stress, since poor sleep and stress can lower immunity
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Situations
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Treating Vaginal Itching in Pregnancy
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Itching and white discharge are common due to hormonal
                      changes
                    </li>
                    <li>Yeast infections occur more often</li>
                    <li>
                      Do not self-medicate. Some tablets and creams are not
                      suitable in pregnancy
                    </li>
                    <li>
                      Cool compresses and cotton underwear are generally safe
                    </li>
                    <li>See your gynaecologist early for a safe plan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Treating Vaginal Itching After Menopause
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Dryness and thinning are common</li>
                    <li>
                      Do not assume it is &quot;just age&quot;, because
                      treatment works
                    </li>
                    <li>
                      Any bleeding after menopause needs prompt evaluation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Treating Itching in Girls and Teenagers
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Poor hygiene, tight clothing, soap irritation or worms may
                      be responsible
                    </li>
                    <li>Avoid strong creams without a doctor&apos;s advice</li>
                    <li>Seek medical advice if itching continues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Treating Recurrent Itching
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Four or more episodes in a year count as recurrent
                    </li>
                    <li>
                      A doctor may check for diabetes, mixed infections,
                      resistant organisms or skin conditions
                    </li>
                    <li>
                      A longer, structured treatment plan is often needed
                    </li>
                    <li>Partner treatment may be advised</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes That Slow Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Using the wrong medicine because the cause was guessed
                </li>
                <li>Stopping treatment too early</li>
                <li>
                  Using leftover tablets or creams from an old prescription
                </li>
                <li>
                  Applying a steroid cream for days without a diagnosis
                </li>
                <li>Douching or using intimate washes</li>
                <li>Mixing several creams or home mixtures</li>
                <li>Not treating a partner when needed</li>
                <li>Ignoring diabetes or hygiene triggers</li>
                <li>Waiting too long before seeing a doctor</li>
                <li>
                  Scratching, which damages skin and invites infection
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at a Doctor&apos;s Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your symptoms and
                  habits
                </li>
                <li>A gentle examination</li>
                <li>A swab test or other tests, if they are needed</li>
                <li>A clear diagnosis</li>
                <li>
                  A medicine plan that suits your health, pregnancy status and
                  other medicines
                </li>
                <li>Advice for your partner when needed</li>
                <li>
                  A prevention plan and a follow-up visit if symptoms persist
                </li>
              </ul>

              <p className="mb-2 mt-4 font-semibold text-gray-900">
                To make the visit more useful:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Note when the itching started and what makes it better or
                  worse
                </li>
                <li>Mention any new products, medicines or partners</li>
                <li>Bring old prescriptions or reports</li>
                <li>
                  Avoid using creams or douching right before the visit, unless
                  advised
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Long Does Recovery Take?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Simple irritation: often a few days after removing the trigger
                </li>
                <li>
                  Yeast infection: many women improve within a few days of
                  starting treatment
                </li>
                <li>
                  Bacterial vaginosis: often improves within days, with the full
                  course completed
                </li>
                <li>
                  STI-related itching: depends on the infection and treatment of
                  the partner
                </li>
                <li>
                  Menopausal dryness: may take a few weeks of regular treatment
                </li>
                <li>
                  Skin conditions: may need longer, ongoing management
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If there is no improvement within the expected time, go back to
                your doctor rather than trying another product.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prevent Vaginal Itching From Returning
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Avoid douching and scented products</li>
                <li>Choose breathable cotton underwear</li>
                <li>Keep blood sugar under control</li>
                <li>Take antibiotics only when prescribed</li>
                <li>Use protection during intercourse</li>
                <li>Keep the area dry after bathing and exercise</li>
                <li>
                  Use mild laundry detergent and dry underwear fully in sunlight
                </li>
                <li>Go for regular gynaecology check-ups</li>
              </ul>

              <p className="mt-4 text-gray-700">
                You can also read our guides on vaginal itching causes, vaginal
                itching symptoms, vaginal itching home remedies, vaginal itching
                cream, vaginal itching relief tablets and vaginal itching
                treatment cost.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Private, judgement-free consultations for sensitive concerns</li>
                <li>Careful diagnosis before any medicine is prescribed</li>
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
                To treat vaginal itching, calm the itch gently, avoid irritants,
                look for clues, and treat the real cause. Mild itching often
                settles with simple care. Infections, dryness and skin
                conditions need the right medicine, and guessing often delays
                relief.
              </p>

              <p className="text-gray-700">
                If itching lasts more than a few days, keeps returning, or comes
                with discharge, odour, sores, pain or bleeding, please see a
                gynaecologist. The sooner the cause is found, the sooner you can
                feel comfortable again.
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
