import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";


export default function VaginalItchingHomeRemedies() {
  const faqs = [
    {
      q: "What is the best home remedy for vaginal itching?",
      a: "A cool compress, loose cotton underwear and gentle washing with plain water are the safest first steps.",
    },
    {
      q: "How can I stop vaginal itching fast at home?",
      a: "Apply a cool compress to the outer area, keep it dry and avoid scented products. Persistent itching needs a doctor's check.",
    },
    {
      q: "Is it safe to put curd or garlic inside the vagina?",
      a: "No. This can irritate the tissue and worsen infection. Eating curd is fine, but do not insert it.",
    },
    {
      q: "Can home remedies cure a yeast infection?",
      a: "They may soothe symptoms, but infections usually need proper medicine after diagnosis.",
    },
    {
      q: "Is vaginal itching normal during pregnancy?",
      a: "It is common, but do not self-treat. Consult your gynaecologist for safe care.",
    },
    {
      q: "When should I see a doctor for vaginal itching?",
      a: "If itching lasts over 3–4 days, keeps returning, or comes with odour, discharge, sores or pain.",
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
                Vaginal Itching Home Remedies: Safe Relief, What to Avoid &amp;
                When to See a Doctor
              </h1>


              <p className="mb-4 text-gray-700">
                Itching in the private area is uncomfortable, distracting and
                often embarrassing. Many women reach for a home remedy first,
                and for mild irritation, simple home care can genuinely help.
              </p>


              <p className="mb-4 text-gray-700">
                But not every remedy you read online is safe. Some can make
                itching worse or hide an infection that needs treatment. This
                guide explains which home remedies are reasonable, which ones to
                skip, and when it is time to see a gynaecologist.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Does Vaginal Itching Happen?
              </h2>


              <p className="mb-4 text-gray-700">
                Understanding the cause helps you choose the right remedy.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Yeast infection:</strong> thick white discharge and
                  intense itching
                </li>
                <li>
                  <strong>Bacterial vaginosis:</strong> thin grey discharge with
                  a fishy smell
                </li>
                <li>
                  <strong>Irritation or allergy:</strong> from soaps, intimate
                  washes, wipes, pads or detergents
                </li>
                <li>
                  <strong>Sweat and moisture:</strong> tight or synthetic
                  clothing, especially in humid weather
                </li>
                <li>
                  <strong>Hormonal changes:</strong> pregnancy, breastfeeding,
                  periods and menopause
                </li>
                <li>
                  <strong>Skin conditions:</strong> eczema, psoriasis or lichen
                  sclerosus
                </li>
                <li>
                  <strong>Sexually transmitted infections:</strong> such as
                  trichomoniasis or herpes
                </li>
                <li>
                  <strong>Diabetes:</strong> high blood sugar encourages yeast
                  growth
                </li>
                <li>
                  <strong>Antibiotics:</strong> can disturb healthy vaginal
                  bacteria
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Important: Home Remedies Have Limits
              </h2>


              <p className="mb-4 text-gray-700">
                Be honest with yourself about what home care can do.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Home remedies soothe symptoms, but they do not treat
                  infections
                </li>
                <li>
                  Mild itching from sweat or irritation often settles in 1–3
                  days with simple care
                </li>
                <li>An infection will usually not clear up on its own</li>
                <li>
                  Guessing the cause wrongly can delay proper treatment
                </li>
                <li>
                  If itching does not improve in a few days, get examined
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Home Remedies for Vaginal Itching
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Cool Compress
              </h3>
              <p className="mb-2 text-gray-700">
                The simplest and safest first step.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Wrap ice or a cold pack in a clean, thin cloth
                </li>
                <li>
                  Place it on the outer area for 5–10 minutes
                </li>
                <li>Never put ice directly on the skin</li>
                <li>Repeat a few times a day when itching flares up</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Plain Lukewarm Water Wash
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Wash the outer genital area once or twice a day
                </li>
                <li>
                  Use plain water, or a mild, fragrance-free cleanser on the
                  outer skin only
                </li>
                <li>Pat dry gently with a clean cotton towel</li>
                <li>Do not scrub, and never wash inside the vagina</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Lukewarm Sitz Bath
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sit in a clean tub of shallow lukewarm water for 10–15 minutes
                </li>
                <li>
                  Do not add bubble bath, scented oils or antiseptic liquids
                </li>
                <li>Dry the area well afterwards</li>
                <li>
                  Avoid very hot water, which can dry and irritate the skin
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Oatmeal (Colloidal Oatmeal) Bath
              </h3>
              <p className="mb-2 text-gray-700">
                Oatmeal is widely used to calm itchy skin.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Add plain colloidal oatmeal to lukewarm bath water, as per
                  pack directions
                </li>
                <li>Soak for 10–15 minutes</li>
                <li>Rinse and pat dry</li>
                <li>Stop if you notice any increase in irritation</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Wear Breathable Cotton Underwear
              </h3>
              <p className="mb-2 text-gray-700">
                This is one of the most effective habits.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose soft, loose cotton underwear</li>
                <li>Change it daily, or sooner if damp</li>
                <li>
                  Avoid synthetic fabrics, thongs and very tight clothing
                </li>
                <li>Wash with mild detergent and dry fully in sunlight</li>
                <li>
                  Consider sleeping without underwear to let the skin breathe
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Keep the Area Dry
              </h3>
              <p className="mb-2 text-gray-700">
                Moisture feeds yeast and bacteria.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Change out of wet swimwear or sweaty gym clothes quickly
                </li>
                <li>Dry the area after bathing</li>
                <li>Change sanitary pads every 4–6 hours</li>
                <li>Choose unscented pads and tampons</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Pure Aloe Vera Gel (External Skin Only)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Choose 100% pure gel with no fragrance, alcohol or colour
                </li>
                <li>Patch test on your inner forearm first</li>
                <li>
                  Apply a thin layer only on irritated outer skin, never inside
                  the vagina
                </li>
                <li>Stop if burning, redness or rash appears</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Coconut Oil (External Skin Only, With Caution)
              </h3>
              <p className="mb-2 text-gray-700">
                Some women use virgin coconut oil on dry, irritated outer skin.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Use only on the outer vulval skin, in a very small amount
                </li>
                <li>Do a patch test first</li>
                <li>
                  Oils can weaken latex condoms, so avoid using them before
                  intercourse
                </li>
                <li>
                  Skip it if your skin gets more irritated, or if infection is
                  suspected
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Curd and Probiotic Foods in Your Diet
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eating plain curd or yogurt with live cultures is generally
                  safe
                </li>
                <li>
                  It may support healthy gut and vaginal bacteria, although proof
                  for treating itching is limited
                </li>
                <li>Do not apply curd inside the vagina</li>
                <li>It is a supportive habit, not a cure</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Drink Water and Eat Balanced Meals
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Stay well hydrated</li>
                <li>
                  Reduce excess sugar if you often get yeast infections
                </li>
                <li>Include vegetables, fruit, whole grains and protein</li>
                <li>Keep blood sugar controlled if you are diabetic</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Rest, Sleep and Stress Control
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Stress and poor sleep can weaken immunity</li>
                <li>Try light walking, yoga or breathing exercises</li>
                <li>Aim for 7–8 hours of sleep</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care for Itching at Night
              </h2>


              <p className="mb-4 text-gray-700">
                Itching often feels worse at night because there are fewer
                distractions.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Apply a cool compress before bed</li>
                <li>Wear loose cotton night clothes</li>
                <li>Avoid heavy blankets that trap heat</li>
                <li>Keep nails short so scratching does less damage</li>
                <li>Avoid spicy, sugary meals late in the evening</li>
                <li>Do not use scented products before sleep</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Home Care for Itching During Periods
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Change pads frequently, and choose unscented ones
                </li>
                <li>Try a different pad brand if you suspect an allergy</li>
                <li>Wash gently and dry thoroughly</li>
                <li>
                  Consider cotton pads or a menstrual cup if suitable for you
                </li>
                <li>Avoid scented panty liners</li>
                <li>
                  Note whether itching comes at the same point every cycle, and
                  mention it to your doctor
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Remedies and Habits to AVOID
              </h2>


              <p className="mb-4 text-gray-700">
                Some popular &quot;natural&quot; tips can do real harm.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Douching:</strong> removes protective bacteria and
                  raises infection risk
                </li>
                <li>
                  <strong>Inserting garlic, curd, vinegar, tea tree oil or
                  turmeric paste into the vagina:</strong> can burn delicate
                  tissue and worsen infection
                </li>
                <li>
                  <strong>Apple cider vinegar baths or washes:</strong> may
                  irritate the skin
                </li>
                <li>
                  <strong>Scented intimate washes, powders, sprays and wipes:</strong>{" "}
                  common triggers for itching
                </li>
                <li>
                  <strong>Harsh soaps and antiseptic liquids:</strong> upset the
                  natural balance
                </li>
                <li>
                  <strong>Boric acid capsules without a doctor&apos;s advice:</strong>{" "}
                  unsafe in pregnancy and toxic if swallowed
                </li>
                <li>
                  <strong>Scratching:</strong> damages the skin and can lead to
                  infection
                </li>
                <li>
                  <strong>Hair removal creams or razors on irritated skin:</strong>{" "}
                  can inflame it further
                </li>
                <li>
                  <strong>Repeated use of antifungal creams without a
                  diagnosis:</strong> can mask the real problem
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hygiene Habits That Prevent Itching
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Wipe from front to back</li>
                <li>Wash the outer area daily, no more</li>
                <li>Use mild, fragrance-free laundry detergent</li>
                <li>Avoid sharing towels and underwear</li>
                <li>Urinate after intercourse</li>
                <li>Change out of damp clothing promptly</li>
                <li>
                  Use protection and maintain good sexual hygiene
                </li>
                <li>Take antibiotics only when prescribed</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Home Remedies Are NOT Enough
              </h2>


              <p className="mb-4 text-gray-700">See a gynaecologist if you notice:</p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Itching lasting more than 3–4 days despite home care
                </li>
                <li>Itching that keeps coming back</li>
                <li>Thick white, grey, green or yellow discharge</li>
                <li>A foul or fishy odour</li>
                <li>Burning while urinating</li>
                <li>Sores, blisters, lumps or white patches</li>
                <li>Pelvic pain or fever</li>
                <li>Itching during pregnancy</li>
                <li>
                  Itching after menopause, or any bleeding after menopause
                </li>
                <li>Itching with diabetes or weak immunity</li>
                <li>Any itching after a new sexual partner</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Situations: Take Extra Care
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                During Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeast infections are more common due to hormonal changes
                </li>
                <li>
                  Avoid all herbal, oil or medicated treatments without medical
                  advice
                </li>
                <li>
                  Gentle cotton wear and cool compresses are usually safe
                </li>
                <li>
                  Consult your gynaecologist early, since some medicines are not
                  suitable in pregnancy
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                After Menopause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dryness from low estrogen is a common cause
                </li>
                <li>
                  Home moisturisers may help, but check with your doctor about
                  suitable ones
                </li>
                <li>
                  Doctor-prescribed options can give better relief
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Girls and Teenagers
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Poor hygiene, tight clothes or infections may be the cause
                </li>
                <li>
                  Avoid creams or oils without medical advice
                </li>
                <li>Seek a doctor&apos;s opinion if itching persists</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at a Gynaecology Visit
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your symptoms and
                  habits
                </li>
                <li>
                  A gentle examination of the outer and inner area
                </li>
                <li>A swab test, if needed, to find the cause</li>
                <li>Urine or blood sugar tests in some cases</li>
                <li>A clear treatment plan, with advice on prevention</li>
                <li>Follow-up, if the problem keeps recurring</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Gynaec in Moradabad?
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers women&apos;s health care built on the
                &quot;Her Health First&quot; philosophy, with a listening-first
                approach.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Private, judgement-free consultations for sensitive problems
                </li>
                <li>
                  Accurate diagnosis, so you get the right treatment the first
                  time
                </li>
                <li>
                  Expert care for infections, PCOS, menstrual disorders and
                  hormonal concerns
                </li>
                <li>
                  Care at every stage: teenage, pregnancy and menopause
                </li>
                <li>Advanced diagnostic facilities</li>
                <li>
                  A &quot;Her Health First&quot; approach that puts your comfort
                  and choices first
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                For mild vaginal itching, a cool compress, cotton underwear,
                gentle washing and keeping the area dry can bring real relief.
                Good habits also lower the chance of itching coming back.
              </p>


              <p className="text-gray-700">
                But home remedies only soothe. They do not cure infections, and
                some popular &quot;natural&quot; tips can cause harm. If itching
                lasts more than a few days, keeps returning, or comes with
                discharge, odour, sores or pain, please see a gynaecologist.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation
              </h2>


              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                      <p className="text-sm text-gray-700">
                        Fertility • Maternity • 3D Laparoscopy
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
