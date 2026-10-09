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

export default function VaginalItchingTreatmentCost() {
  const faqs = [
    {
      q: "How much does vaginal itching treatment cost?",
      a: "It depends on the cause, tests and medicines needed. Call or WhatsApp the clinic for current fees.",
    },
    {
      q: "Is a swab test always needed?",
      a: "No. Your doctor decides after examination. Tests are done only when they help find the exact cause.",
    },
    {
      q: "Is it cheaper to buy cream from a pharmacy?",
      a: "Not always. The wrong cream wastes money and may delay recovery, so a correct diagnosis often costs less overall.",
    },
    {
      q: "Does health insurance cover gynaecology consultation?",
      a: "Some policies cover OPD visits and tests. Check with your insurer or employer.",
    },
    {
      q: "Will I need to pay for my partner's treatment too?",
      a: "Only if your infection is sexually transmitted or keeps recurring. Your doctor will advise.",
    },
    {
      q: "Can I ask about fees before booking?",
      a: "Yes. You can call or WhatsApp the clinic for fee details and visit estimates.",
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
                Vaginal Itching Treatment Cost: What Affects the Price &amp; How
                to Plan
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;How much will it cost?&quot; is one of the first questions
                women ask, and one of the last they feel comfortable asking out
                loud. It is a fair question. Knowing what to expect helps you
                decide without worry.
              </p>

              <p className="text-gray-700">
                Here is the honest answer: the cost of treating vaginal itching
                depends on the cause, the tests needed and the medicine
                prescribed. For many women, treatment is simple and affordable.
                This guide explains what drives the cost, what is usually
                included, and how to avoid paying more than you need to.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why There Is No Fixed Price
              </h2>

              <p className="mb-4 text-gray-700">
                Vaginal itching is a symptom, not one disease. A woman with a
                simple irritation and a woman with a recurring infection need
                very different care.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A simple irritation may need only a change of products and a
                  short course of soothing medicine
                </li>
                <li>
                  A first yeast infection usually needs a short antifungal
                  course
                </li>
                <li>Bacterial vaginosis needs an antibiotic course</li>
                <li>
                  STIs may need tests, medicines for you, and treatment for your
                  partner
                </li>
                <li>
                  Recurrent infections need deeper investigation and a longer
                  plan
                </li>
                <li>
                  Menopausal dryness or skin conditions may need long-term care
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                So the total cost is the sum of a few parts, and each
                woman&apos;s total is different.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Main Parts of the Cost
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    1. Consultation Fee
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>The doctor&apos;s fee for examination and advice</li>
                    <li>Varies by doctor, experience, clinic and city</li>
                    <li>
                      A follow-up visit may cost less than the first visit, or
                      may be included for a set period (ask the clinic)
                    </li>
                    <li>
                      Private consultations in smaller cities are generally
                      lower than in metro cities
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    2. Examination
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A gentle clinical examination is usually part of the
                      consultation
                    </li>
                    <li>It often does not carry a separate charge</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    3. Diagnostic Tests (If Needed)
                  </h3>
                  <p className="mb-2 text-gray-700">
                    Not every woman needs every test.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Vaginal swab or discharge test: to identify yeast,
                      bacteria or parasites
                    </li>
                    <li>
                      Vaginal pH check: a quick test, often done in the clinic
                    </li>
                    <li>Urine test: if a urinary infection is suspected</li>
                    <li>
                      Blood sugar test: especially for recurrent yeast
                      infections
                    </li>
                    <li>
                      STI screening: if there is a risk or suggestive symptoms
                    </li>
                    <li>
                      Pap smear or other tests: if your routine screening is due
                    </li>
                    <li>
                      Skin biopsy: rarely, only if a chronic skin condition or
                      unusual patch is suspected
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    4. Medicines
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Antifungal creams, vaginal tablets or oral tablets for
                      yeast infection
                    </li>
                    <li>
                      Antibiotic tablets or gels for bacterial vaginosis and
                      some other infections
                    </li>
                    <li>
                      Soothing or mild steroid creams for irritation (short
                      term)
                    </li>
                    <li>
                      Vaginal moisturisers or estrogen for menopausal dryness
                    </li>
                    <li>
                      Generic versions are usually much cheaper than branded
                      ones, and are often just as effective
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    5. Follow-Up and Repeat Treatment
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      A review visit to confirm the infection has cleared
                    </li>
                    <li>A repeat swab in some cases</li>
                    <li>A second course if the first was not enough</li>
                    <li>
                      Treatment of the partner where needed, which can add to
                      the total
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Makes the Cost Go Up or Down
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Factors That May Increase the Total
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Recurrent or resistant infections that need several
                      courses
                    </li>
                    <li>Mixed infections, such as yeast plus BV</li>
                    <li>Multiple tests to find an unclear cause</li>
                    <li>
                      STI treatment that also involves your partner
                    </li>
                    <li>
                      Skin conditions needing specialist creams and long
                      follow-up
                    </li>
                    <li>
                      Delay in seeking care, which lets a simple infection
                      become harder to treat
                    </li>
                    <li>
                      Buying branded medicines when generics are available
                    </li>
                    <li>
                      Repeated self-treatment with the wrong products before
                      seeing a doctor
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Factors That May Reduce the Total
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-gray-700">
                    <li>
                      Seeing a doctor early, before the problem worsens
                    </li>
                    <li>
                      A correct diagnosis the first time, so you do not buy
                      several wrong medicines
                    </li>
                    <li>
                      Finishing the full course, so the infection does not
                      return
                    </li>
                    <li>
                      Asking for generic alternatives where suitable
                    </li>
                    <li>
                      Treating the cause, such as diabetes or an irritant
                      product
                    </li>
                    <li>
                      Preventive habits, which reduce repeat visits
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Hidden Cost of Self-Medicating
              </h2>

              <p className="mb-4 text-gray-700">
                It may look cheaper to buy a cream from the pharmacy. Often it
                is not.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The wrong cream means you pay for a product that does not work
                </li>
                <li>
                  Itching continues, so you buy another product, then another
                </li>
                <li>A simple infection can become stubborn or recurrent</li>
                <li>
                  You may lose workdays or sleep from ongoing discomfort
                </li>
                <li>
                  You may eventually need a doctor anyway, with a longer course
                </li>
                <li>
                  In pregnancy or with other conditions, wrong medicines can
                  cause real harm
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Paying for a proper diagnosis once is often cheaper than paying
                for repeated guesses.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Typical Cost by Situation (How to Think About It)
              </h2>

              <p className="mb-4 text-gray-700">
                I have not given rupee amounts, because they vary by clinic,
                city and medicine. Here is how the pieces usually add up:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Mild irritation or allergy:</strong> consultation + a
                  short, low-cost medicine course. Usually the most affordable
                  case.
                </li>
                <li>
                  <strong>First-time yeast infection:</strong> consultation +
                  antifungal medicine, sometimes with a swab. A moderate cost.
                </li>
                <li>
                  <strong>Bacterial vaginosis:</strong> consultation +
                  antibiotic course, sometimes with a swab. A moderate cost.
                </li>
                <li>
                  <strong>STI-related itching:</strong> consultation + tests +
                  medicines, plus treatment for the partner. A higher cost.
                </li>
                <li>
                  <strong>Recurrent infections:</strong> consultation + several
                  tests + a longer treatment plan + follow-up. A higher cost,
                  but treating the root cause saves money over time.
                </li>
                <li>
                  <strong>Menopausal dryness or skin conditions:</strong>{" "}
                  consultation + ongoing medicines and follow-up. The cost is
                  spread over a longer period.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                To get an actual figure for your situation, call or WhatsApp the
                clinic and describe your symptoms briefly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Does Insurance or Any Scheme Cover It?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many health insurance policies do not cover simple outpatient
                  (OPD) consultations, unless you have an OPD add-on
                </li>
                <li>
                  Some corporate or employer health plans cover OPD visits and
                  basic tests
                </li>
                <li>Check your policy or ask your HR or insurer</li>
                <li>
                  Keep your bills, prescription and test reports in case you can
                  claim
                </li>
                <li>
                  Government schemes usually focus on hospital admission rather
                  than OPD gynaecology visits
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Save Money Without Compromising Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do not delay. Early treatment is usually simpler and cheaper.
                </li>
                <li>
                  Avoid trial-and-error with creams and tablets. Get a diagnosis
                  first.
                </li>
                <li>
                  Ask for generic medicines if your doctor says they are
                  suitable.
                </li>
                <li>
                  Complete the entire course, even if you feel better, to
                  prevent relapse.
                </li>
                <li>
                  Bring old prescriptions and reports so tests are not repeated
                  unnecessarily.
                </li>
                <li>
                  Ask whether a follow-up is included in the consultation fee.
                </li>
                <li>
                  Treat your partner when advised, to prevent a repeat
                  infection.
                </li>
                <li>
                  Manage diabetes and hygiene habits, which reduce recurrence.
                </li>
                <li>
                  Ask the clinic for a clear estimate before tests or
                  procedures.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask the Clinic Before You Book
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  What is the consultation fee, and is a follow-up included?
                </li>
                <li>Which tests are likely, and what do they cost?</li>
                <li>
                  Are medicines available at the clinic, or will I buy them from
                  a pharmacy?
                </li>
                <li>Can I get a generic alternative?</li>
                <li>
                  Is my partner&apos;s treatment likely to be needed?
                </li>
                <li>
                  How long will treatment take, and how many visits might I
                  need?
                </li>
                <li>
                  What is the privacy policy for my reports and details?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Cost Should Not Delay Your Visit
              </h2>

              <p className="mb-4 text-gray-700">
                Please do not hold back because of cost if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Itching with a foul smell, or green, yellow or grey discharge
                </li>
                <li>Sores, blisters, lumps or white patches</li>
                <li>Pelvic pain or fever</li>
                <li>
                  Bleeding between periods, after sex or after menopause
                </li>
                <li>Itching during pregnancy</li>
                <li>Itching with diabetes or weak immunity</li>
                <li>A possible STI exposure</li>
                <li>
                  Itching that is severe or does not improve in a few days
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Untreated infections can spread or cause complications, which
                cost more to treat later.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What You Get From a Proper Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A private, respectful conversation</li>
                <li>A gentle examination</li>
                <li>Tests only when they are really needed</li>
                <li>A clear diagnosis, so the treatment is correct</li>
                <li>
                  A medicine plan that suits your health, pregnancy status and
                  budget
                </li>
                <li>
                  Advice on prevention, so the problem does not keep returning
                </li>
                <li>A follow-up plan</li>
              </ul>

              <p className="mt-4 text-gray-700">
                You can also read our guides on vaginal itching causes, vaginal
                itching treatment, vaginal itching home remedies, vaginal
                itching cream and vaginal itching relief tablets.
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
                <li>
                  Easy contact by phone, WhatsApp and email to ask about fees
                  before you visit
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                The cost of vaginal itching treatment depends on the cause, the
                tests you need and the medicines prescribed. For most women, it
                is a short, manageable course. The costliest path is usually the
                long one: repeated self-treatment, delayed care and infections
                that keep returning.
              </p>

              <p className="text-gray-700">
                The best way to control the cost is an early, correct diagnosis.
                If you are unsure about fees, simply call or message the clinic
                and ask. A quick question can save you weeks of discomfort.
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