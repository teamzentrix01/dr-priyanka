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

export default function VaginalItchingSymptoms() {
  const faqs = [
    {
      q: "What are the common symptoms of vaginal itching?",
      a: "Itching, burning, redness, swelling, unusual discharge, odour, soreness and pain during urination or sex.",
    },
    {
      q: "Can vaginal itching happen without discharge?",
      a: "Yes. Allergies, dryness, menopause and skin conditions can cause itching without any discharge.",
    },
    {
      q: "What does yeast infection itching feel like?",
      a: "Intense itching and burning with thick white, curd-like discharge, usually with little smell.",
    },
    {
      q: "Is a fishy smell with itching a warning sign?",
      a: "It often suggests bacterial vaginosis. Get checked rather than self-treating.",
    },
    {
      q: "Which symptoms mean I should see a doctor urgently?",
      a: "Sores, blisters, lumps, fever, severe pain, heavy bleeding or foul discharge in pregnancy.",
    },
    {
      q: "When should I see a doctor for vaginal itching?",
      a: "If it lasts over 3–4 days, keeps returning, or comes with odour, unusual discharge or pain.",
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
                Vaginal Itching Symptoms: Signs to Notice, What They Mean &amp;
                When to See a Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                Vaginal itching rarely comes alone. Along with the urge to
                scratch, you may notice burning, a change in discharge, a smell,
                or changes in the skin. These extra signs are important clues,
                because they help your doctor work out what is going on.
              </p>

              <p className="text-gray-700">
                This guide explains the main symptoms, common symptom patterns
                and when it is important to consult a gynaecologist.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Vaginal Itching?
              </h2>

              <p className="mb-4 text-gray-700">
                Vaginal itching (pruritus vulvae) is an uncomfortable urge to
                scratch the vagina or the skin around it, called the vulva.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  It can affect the inside of the vagina, the outer lips, or
                  both
                </li>
                <li>
                  It may be mild and occasional, or constant and distressing
                </li>
                <li>
                  It can disturb sleep, work, exercise and intimacy
                </li>
                <li>
                  It is a symptom, not a disease, so it always has a cause
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Symptoms of Vaginal Itching
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. The Itching Itself
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>A persistent urge to scratch the genital area</li>
                    <li>Itching that is worse at night or after a bath</li>
                    <li>
                      Itching that comes and goes, or stays constant
                    </li>
                    <li>
                      Mild tickling at first that slowly becomes intense
                    </li>
                    <li>
                      Itching that spreads to the inner thighs or the area
                      around the anus
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Burning and Stinging
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>A burning feeling in the vulva or vagina</li>
                    <li>Stinging when urine touches irritated skin</li>
                    <li>
                      Burning after washing, or after using a pad or soap
                    </li>
                    <li>
                      Soreness that feels like a raw or scraped area
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Redness and Swelling
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Red or pink vulva, sometimes with puffiness</li>
                    <li>Swollen outer lips</li>
                    <li>Skin that looks inflamed or shiny</li>
                    <li>Heat or tenderness when touched</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Changes in Vaginal Discharge
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Discharge can give strong clues.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Thick, white, curd-like discharge: often with a yeast
                      infection
                    </li>
                    <li>
                      Thin, grey or white discharge: often with bacterial
                      vaginosis
                    </li>
                    <li>
                      Yellow-green or frothy discharge: may point to
                      trichomoniasis
                    </li>
                    <li>
                      Increased watery discharge: may be hormonal or infective
                    </li>
                    <li>Blood-tinged discharge: needs medical attention</li>
                    <li>
                      No discharge at all: may suggest allergy, dryness or a
                      skin condition
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Unusual Smell
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A fishy smell, especially after intercourse, often seen
                      with bacterial vaginosis
                    </li>
                    <li>
                      A foul or strong odour, which may indicate infection
                    </li>
                    <li>
                      Yeast infections usually have little or no odour
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Pain and Discomfort
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Pain during urination, often from irritated skin or a
                      urinary infection
                    </li>
                    <li>
                      Pain during intercourse (dyspareunia), from dryness,
                      inflammation or infection
                    </li>
                    <li>
                      Soreness while walking, sitting or exercising
                    </li>
                    <li>Lower abdominal or pelvic discomfort</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    7. Skin Changes
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Small cracks or fissures from scratching</li>
                    <li>Rashes, bumps or blisters</li>
                    <li>White, thin or shiny patches</li>
                    <li>
                      Thickened, leathery skin from long-term scratching
                    </li>
                    <li>Scratch marks, sores or small cuts</li>
                    <li>Dark or light patches of skin</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    8. Dryness
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>A tight, dry feeling in the vagina</li>
                    <li>
                      Itching that is worse with tampons or intercourse
                    </li>
                    <li>
                      Common in perimenopause, menopause and breastfeeding
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptom Patterns and What They May Suggest
              </h2>

              <p className="mb-4 text-gray-700">
                These are hints, not diagnoses. Only an examination or test can
                confirm the cause.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 1: Itching + Thick White Discharge + Burning
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Often suggests a yeast infection</li>
                    <li>Redness and swelling are common</li>
                    <li>Usually little smell</li>
                    <li>
                      More likely after antibiotics, in pregnancy, or with
                      diabetes
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 2: Mild Itching + Thin Grey Discharge + Fishy Smell
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Often suggests bacterial vaginosis</li>
                    <li>Itching may be mild or absent</li>
                    <li>
                      The smell is often stronger after sex or periods
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 3: Itching + Yellow-Green Frothy Discharge + Pain
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>May suggest trichomoniasis</li>
                    <li>
                      Can include burning urine and lower abdominal discomfort
                    </li>
                    <li>
                      Needs medical treatment, and the partner should be treated
                      too
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 4: Itching + Redness but No Discharge
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      May suggest an allergy or irritation from a soap, pad,
                      wash or detergent
                    </li>
                    <li>Often starts soon after a new product</li>
                    <li>
                      Stopping the trigger may bring improvement
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 5: Dryness + Itching + Painful Sex
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      May suggest low estrogen, often after menopause or during
                      breastfeeding
                    </li>
                    <li>
                      Thin, fragile skin and a burning feeling are common
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 6: Itching + White, Thin, Shiny Patches
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      May suggest a chronic skin condition such as lichen
                      sclerosus
                    </li>
                    <li>Itching can be severe, especially at night</li>
                    <li>
                      Needs a doctor&apos;s assessment and long-term care
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 7: Itching + Blisters or Painful Sores
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>May suggest genital herpes</li>
                    <li>
                      May come with tingling, burning, fever or swollen glands
                    </li>
                    <li>Needs prompt medical advice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 8: Intense Itching Worse at Night + Visible Specks
                    or Rash
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>May suggest pubic lice or scabies</li>
                    <li>Spread through close contact or shared items</li>
                    <li>
                      Everyone in close contact may need treatment
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Pattern 9: Itching + Burning While Passing Urine + Frequent
                    Urination
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      May suggest a urinary tract infection or irritation of the
                      vulva
                    </li>
                    <li>Sometimes both problems occur together</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms in Different Life Stages
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    In Teenagers and Young Girls
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Itching, redness or discharge</li>
                    <li>
                      Often due to tight clothes, soap irritation or poor
                      hygiene
                    </li>
                    <li>
                      Threadworms in young children can cause night-time itching
                    </li>
                    <li>
                      Parents should seek a doctor&apos;s opinion rather than
                      using strong creams
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    During Reproductive Years
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Itching linked to periods, new products, or sexual
                      activity
                    </li>
                    <li>
                      Recurrent yeast infection or bacterial vaginosis
                    </li>
                    <li>
                      Symptoms that change through the menstrual cycle
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    During Pregnancy
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Itching and thicker white discharge are common because of
                      hormonal changes
                    </li>
                    <li>Yeast infections occur more often</li>
                    <li>
                      Foul-smelling or coloured discharge needs a prompt check
                    </li>
                    <li>
                      Avoid self-medicating, since some medicines are unsuitable
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    After Menopause
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Dryness, burning, thinning and itching</li>
                    <li>Painful intercourse</li>
                    <li>
                      Urinary urgency or recurrent urinary infections
                    </li>
                    <li>
                      Any bleeding after menopause needs urgent evaluation
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mild vs Concerning Symptoms
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Usually Mild (Often Settle With Simple Care)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Short-lived itching for a day or two</li>
                    <li>No unusual discharge or smell</li>
                    <li>
                      Itching after sweating, a new product or tight clothes
                    </li>
                    <li>
                      Improves quickly once the trigger is removed
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Concerning (Needs a Doctor&apos;s Check)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Itching lasting more than 3–4 days</li>
                    <li>Itching that keeps returning</li>
                    <li>Thick, green, yellow or grey discharge</li>
                    <li>A foul or fishy smell</li>
                    <li>Sores, blisters, lumps or white patches</li>
                    <li>Burning with urination or pain during sex</li>
                    <li>Pelvic pain or fever</li>
                    <li>
                      Bleeding between periods, after sex or after menopause
                    </li>
                    <li>Itching in pregnancy</li>
                    <li>Itching with diabetes or weak immunity</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red-Flag Symptoms: Do Not Wait
              </h2>

              <p className="mb-4 text-gray-700">
                Seek medical care quickly if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Severe pain, swelling or a hot, tender area</li>
                <li>Fever or chills with genital symptoms</li>
                <li>Painful blisters or open sores</li>
                <li>A lump, ulcer or skin patch that does not heal</li>
                <li>Heavy or unexpected bleeding</li>
                <li>Severe pelvic or lower abdominal pain</li>
                <li>Foul discharge during pregnancy</li>
                <li>Symptoms after a possible STI exposure</li>
                <li>Spreading redness or pus</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Symptoms Can Be Confusing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Different conditions can look the same</li>
                <li>
                  Two infections can occur together (for example, yeast plus BV)
                </li>
                <li>
                  Over-the-counter creams can change how symptoms look, and hide
                  the real cause
                </li>
                <li>
                  Some infections, including STIs, may cause few or no symptoms
                </li>
                <li>
                  Scratching itself causes redness and cracks, which can look
                  like infection
                </li>
                <li>Skin conditions can mimic infections</li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is why self-diagnosis often goes wrong, and why a simple
                examination is valuable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keep a Simple Symptom Diary
              </h2>

              <p className="mb-4 text-gray-700">
                Noting your symptoms helps your doctor find the pattern faster.
                Write down:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>When the itching started</li>
                <li>
                  Whether it is worse at night, after periods, or after
                  intercourse
                </li>
                <li>The colour, texture and smell of any discharge</li>
                <li>
                  New soaps, pads, washes, detergents or underwear
                </li>
                <li>Recent antibiotics or other medicines</li>
                <li>Any pain, burning or fever</li>
                <li>
                  Whether you are pregnant, breastfeeding or have diabetes
                </li>
                <li>Anything that makes it better or worse</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens at a Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A private, respectful conversation about your symptoms</li>
                <li>A gentle examination</li>
                <li>A swab test or other tests, if needed</li>
                <li>
                  A clear diagnosis, so the treatment matches the cause
                </li>
                <li>Advice for your partner when needed</li>
                <li>A prevention plan and follow-up</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Simple Steps for Comfort While You Wait for Your Appointment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear loose, breathable cotton underwear</li>
                <li>Avoid scented soaps, washes, wipes and powders</li>
                <li>Do not douche</li>
                <li>Wash the outer area gently with plain water</li>
                <li>Keep the area dry</li>
                <li>Use a cool compress for comfort</li>
                <li>Avoid scratching</li>
                <li>
                  Avoid intercourse until you have been checked, if infection is
                  possible
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                You can also read our guides on vaginal itching causes, vaginal
                itching treatment, vaginal itching home remedies, vaginal
                itching cream, vaginal itching relief tablets and vaginal
                itching treatment cost.
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
                Vaginal itching can come with burning, redness, unusual
                discharge, odour, pain or skin changes. These extra signs help
                point toward the cause, but they cannot confirm it, because many
                conditions look alike.
              </p>

              <p className="text-gray-700">
                Short, mild itching often settles with gentle care. But if
                itching lasts, returns, or comes with discharge, smell, sores,
                pain or bleeding, please see a gynaecologist. Early care is
                usually simpler and more comfortable.
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