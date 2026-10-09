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

export default function VaginalItchingReliefTablets() {
  const faqs = [
    {
      q: "Which tablet is best for vaginal itching?",
      a: "It depends on the cause. Antifungals treat yeast, antibiotics treat BV, and antihistamines help only allergic itching.",
    },
    {
      q: "Can I take an antifungal tablet without a prescription?",
      a: "It is not advised. Many are prescription medicines, and the wrong choice can delay proper treatment.",
    },
    {
      q: "Are vaginal itching tablets safe in pregnancy?",
      a: "Not all are. Never take any tablet or pessary in pregnancy without your gynaecologist's advice.",
    },
    {
      q: "Can I drink alcohol while taking antibiotic tablets for infection?",
      a: "Avoid it. Alcohol with some antibiotics can cause severe nausea and vomiting.",
    },
    {
      q: "How quickly do itching tablets work?",
      a: "Some give relief in 1–3 days, but you must finish the full course. See a doctor if there is no improvement.",
    },
    {
      q: "Why is my itching coming back after tablets?",
      a: "The cause may be different, the course incomplete, the partner untreated, or diabetes or an allergy may be involved.",
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
                Vaginal Itching Relief Tablets: Types, Safety &amp; When to See
                a Doctor
              </h1>

              <p className="mb-4 text-gray-700">
                When itching is constant, many women look for a quick tablet to
                make it stop. Some tablets do help, but only when they match the
                cause. The wrong tablet may do nothing, delay recovery, or cause
                side effects.
              </p>

              <p className="text-gray-700">
                This guide explains the main types of tablets used for vaginal
                itching, what each one is for, and the safety rules that matter.
                It is for understanding only. A doctor must choose and prescribe
                the right medicine for you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why There Is No Single &quot;Itching Tablet&quot;
              </h2>

              <p className="mb-4 text-gray-700">
                Vaginal itching is a symptom, not a disease. The tablet depends
                on the cause.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Yeast infection: needs an antifungal</li>
                <li>
                  Bacterial vaginosis: needs an antibiotic, and an antifungal
                  will not work
                </li>
                <li>
                  Trichomoniasis: needs a specific antiparasitic medicine, and
                  the partner must be treated too
                </li>
                <li>
                  Allergy or irritation: may need an antihistamine and removal
                  of the trigger
                </li>
                <li>
                  Menopausal dryness: needs a moisturiser or doctor-prescribed
                  estrogen
                </li>
                <li>
                  Skin conditions: may need specialised creams, not tablets
                </li>
                <li>
                  Diabetes-related infections: need sugar control along with
                  treatment
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Taking a tablet without knowing the cause is a guess, and
                guesses often fail.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Main Types of Tablets Used for Vaginal Itching
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Oral Antifungal Tablets (For Yeast Infection)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Taken by mouth, often as a single dose or a short course
                    </li>
                    <li>Work from inside the body against Candida yeast</li>
                    <li>
                      Suit symptoms such as thick white discharge, itching and
                      burning
                    </li>
                    <li>
                      Usually prescription medicines, and the doctor decides the
                      dose and duration
                    </li>
                    <li>
                      Take longer to start working than a cream, but are
                      convenient for many women
                    </li>
                  </ul>
                  <p className="mt-2 font-semibold text-gray-900">
                    Important cautions:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Not recommended in pregnancy unless your doctor
                      specifically advises
                    </li>
                    <li>
                      Can interact with other medicines, including some for
                      blood pressure, cholesterol and blood thinners
                    </li>
                    <li>Can affect the liver in rare cases</li>
                    <li>May cause nausea, headache or stomach upset</li>
                    <li>Tell your doctor about all medicines you take</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Vaginal Tablets and Pessaries (Antifungal)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Small tablets or soft capsules inserted into the vagina,
                      usually at bedtime
                    </li>
                    <li>
                      Contain antifungal ingredients such as clotrimazole
                    </li>
                    <li>Work directly at the site of infection</li>
                    <li>Often come with an applicator</li>
                    <li>
                      Courses are usually from one to several days, as per the
                      pack or doctor
                    </li>
                  </ul>
                  <p className="mt-2 font-semibold text-gray-900">
                    Good to know:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Wash your hands before and after</li>
                    <li>
                      Expect some leakage, so use an unscented panty liner
                    </li>
                    <li>Some products can weaken latex condoms</li>
                    <li>
                      Complete the full course even if itching improves early
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Antibiotic Tablets (For Bacterial Vaginosis and Some
                    Infections)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Prescribed after a doctor confirms bacterial vaginosis or
                      trichomoniasis
                    </li>
                    <li>
                      Common ingredients include metronidazole and tinidazole
                    </li>
                    <li>Taken for a set number of days</li>
                    <li>
                      Never use leftover antibiotics from an old prescription
                    </li>
                  </ul>
                  <p className="mt-2 font-semibold text-gray-900">
                    Important cautions:
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Avoid alcohol during and after the course, as advised by
                      your doctor, because it can cause severe nausea and
                      vomiting
                    </li>
                    <li>
                      May cause a metallic taste, nausea or stomach upset
                    </li>
                    <li>
                      Complete the whole course, even if you feel better
                    </li>
                    <li>
                      In trichomoniasis, your partner must be treated as well to
                      prevent reinfection
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Antihistamine Tablets (For Allergy-Related Itching)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Reduce itching caused by an allergic reaction</li>
                    <li>
                      May help when itching comes from a reaction to soap, pads,
                      latex or detergent
                    </li>
                    <li>Do not treat infections</li>
                    <li>
                      Some cause drowsiness, so be careful with driving or work
                      that needs alertness
                    </li>
                    <li>
                      Use only for short periods unless a doctor advises
                      otherwise
                    </li>
                  </ul>
                  <p className="mt-2 text-gray-700">
                    Note: an antihistamine may hide the itching while the real
                    cause continues.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Hormonal Treatment (For Menopausal Itching)
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Dryness and thinning after menopause often respond to
                      estrogen
                    </li>
                    <li>It may come as a vaginal tablet, ring or cream</li>
                    <li>
                      Prescription only, after a doctor checks your history
                    </li>
                    <li>Not suitable for every woman</li>
                    <li>Improvement usually takes a few weeks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    6. Probiotic Tablets or Capsules
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Marketed to support healthy vaginal bacteria
                    </li>
                    <li>
                      Evidence for treating or preventing itching is limited and
                      mixed
                    </li>
                    <li>
                      Generally considered low-risk for healthy women
                    </li>
                    <li>
                      Not a replacement for antifungal or antibiotic treatment
                    </li>
                    <li>
                      Ask your doctor before using them during pregnancy or with
                      weak immunity
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    7. Painkillers and Sedatives
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Ordinary painkillers do not stop itching</li>
                    <li>
                      Sleeping tablets or sedatives may help you sleep but do
                      not treat the cause
                    </li>
                    <li>Avoid taking them without advice</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Tablet for Which Cause? A Simple Overview
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thick white discharge with itching: antifungal tablet or
                  pessary
                </li>
                <li>
                  Thin grey discharge with fishy smell: antibiotic prescribed by
                  a doctor
                </li>
                <li>
                  Yellow-green frothy discharge: antiparasitic medicine, plus
                  treatment of the partner
                </li>
                <li>
                  Itching without discharge after a new product: remove the
                  trigger, and a doctor may suggest an antihistamine
                </li>
                <li>
                  Dryness after menopause: moisturiser or prescription estrogen
                </li>
                <li>
                  Blisters or sores: needs medical diagnosis and specific
                  treatment
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                This is an overview, not a diagnosis. Only an examination or
                test can confirm the cause.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Oral Tablet vs Vaginal Tablet vs Cream: How They Differ
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Oral tablets: convenient, no mess, work from inside, but carry
                  more medicine interaction risk
                </li>
                <li>
                  Vaginal tablets or pessaries: act directly, fewer body-wide
                  effects, but can leak and need an applicator
                </li>
                <li>
                  Creams: good for outer itching and swelling, often used
                  alongside other forms
                </li>
                <li>
                  Your doctor may combine them, for example, an oral tablet plus
                  an outer cream for quick relief
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety Rules Before You Take Any Tablet
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Get a diagnosis first, especially for a first episode</li>
                <li>
                  Tell your doctor if you are pregnant, trying to conceive or
                  breastfeeding
                </li>
                <li>Share your list of current medicines and supplements</li>
                <li>Mention any liver, kidney or heart condition</li>
                <li>Mention allergies to any medicine</li>
                <li>Follow the exact course length</li>
                <li>Do not share tablets with friends or relatives</li>
                <li>Do not use old, leftover or expired tablets</li>
                <li>Do not combine several medicines at once</li>
              </ul>

              <h3 className="mb-2 mt-6 font-semibold text-gray-900">
                Who Should NOT Self-Medicate
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnant women: several tablets are unsuitable, and untreated
                  infection can affect the pregnancy
                </li>
                <li>
                  Breastfeeding mothers: some medicines pass into milk
                </li>
                <li>Teenagers and girls: need a doctor&apos;s opinion first</li>
                <li>
                  Women with diabetes: infections may need a longer or different
                  course
                </li>
                <li>
                  Women on blood thinners, statins or other long-term medicines
                </li>
                <li>Women with liver or kidney disease</li>
                <li>Anyone with a first-ever episode</li>
                <li>Women with recurring itching</li>
                <li>Anyone at risk of an STI</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Possible Side Effects
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Oral antifungals:
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Nausea, stomach upset, headache</li>
                    <li>Rare liver effects or skin reactions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Antibiotics:
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Nausea, metallic taste, diarrhoea</li>
                    <li>Severe reaction if combined with alcohol</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Antihistamines:
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Drowsiness, dry mouth, dizziness</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Vaginal tablets:
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>Mild burning, irritation or leakage</li>
                  </ul>
                </div>
              </div>

              <p className="mb-2 mt-6 font-semibold text-gray-900">
                Seek urgent help if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Swelling of the lips, face or throat</li>
                <li>Difficulty breathing</li>
                <li>Severe rash or hives</li>
                <li>Yellowing of the skin or eyes</li>
                <li>Severe stomach pain</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Tablet May Not Work
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The cause was not what you assumed</li>
                <li>
                  A mixed infection (for example, yeast plus BV) is present
                </li>
                <li>The course was too short or stopped early</li>
                <li>The partner was not treated when needed</li>
                <li>A resistant organism is involved</li>
                <li>
                  An allergy or skin condition is the real problem
                </li>
                <li>
                  Diabetes or hormonal imbalance keeps the infection returning
                </li>
                <li>
                  The itching is from dryness, which tablets for infection will
                  not fix
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                If itching returns after treatment, or you have four or more
                episodes in a year, a doctor should look deeper.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Supporting Habits While You Take Treatment
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Wear loose, breathable cotton underwear</li>
                <li>Avoid scented soaps, washes, wipes and powders</li>
                <li>Do not douche</li>
                <li>Keep the area clean and dry</li>
                <li>Change pads often</li>
                <li>
                  Avoid intercourse during treatment, or follow your
                  doctor&apos;s advice on protection
                </li>
                <li>Control blood sugar if you have diabetes</li>
                <li>Reduce excess sugar if yeast infections recur</li>
                <li>Stay hydrated and sleep well</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to See a Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">Do not wait if you notice:</p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Itching for more than 3–4 days despite home care</li>
                <li>A first episode of vaginal itching</li>
                <li>Foul-smelling, green, yellow or grey discharge</li>
                <li>Sores, blisters, lumps or white patches</li>
                <li>Burning while urinating or pain during sex</li>
                <li>Pelvic pain, fever or abnormal bleeding</li>
                <li>Itching during pregnancy</li>
                <li>Itching after menopause</li>
                <li>Itching that keeps coming back</li>
                <li>A new sexual partner or possible STI exposure</li>
              </ul>

              <h3 className="mb-2 mt-6 font-semibold text-gray-900">
                What Happens at a Consultation
              </h3>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A private, respectful discussion</li>
                <li>A gentle examination</li>
                <li>A swab test or other tests if needed</li>
                <li>A clear diagnosis, so the treatment is correct</li>
                <li>
                  A safe medicine choice that fits your health, pregnancy status
                  and other medicines
                </li>
                <li>Advice for your partner when needed</li>
                <li>
                  A plan to prevent recurrence, and a follow-up visit
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                You can also read our guides on vaginal itching causes, vaginal
                itching treatment, vaginal itching home remedies and vaginal
                itching cream.
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
                Tablets can bring real relief from vaginal itching, but only the
                right tablet for the right cause. Antifungals treat yeast,
                antibiotics treat BV and trichomoniasis, and antihistamines only
                help allergic itching. Taking the wrong one wastes time and may
                cause side effects.
              </p>

              <p className="text-gray-700">
                If this is your first episode, you are pregnant, or the itching
                does not settle quickly, please see a gynaecologist before
                starting any tablet.
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