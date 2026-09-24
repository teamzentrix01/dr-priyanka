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

export default function PostLaparoscopyDietAdvice() {
  const faqs = [
    {
      q: "What should I eat immediately after laparoscopic surgery?",
      a: "Start with clear liquids like water and clear soups, then gradually progress to soft, easily digestible foods.",
    },
    {
      q: "Why do I feel bloated after laparoscopy?",
      a: "Bloating is common due to the gas used during the procedure and usually improves within a few days.",
    },
    {
      q: "What foods help with post-surgery constipation?",
      a: "Fibre-rich foods, adequate hydration, and gentle movement can help prevent and relieve constipation after surgery.",
    },
    {
      q: "Can I eat spicy food after laparoscopic surgery?",
      a: "It's best to avoid spicy and oily foods in the initial recovery period, as they can irritate the digestive system.",
    },
    {
      q: "How much protein do I need during recovery?",
      a: "Adequate protein from sources like eggs, lentils, and lean meats supports tissue healing after surgery.",
    },
    {
      q: "When can I return to a normal diet after laparoscopy?",
      a: "Most women can gradually return to a normal, balanced diet within 2–4 weeks, as tolerated and cleared by their doctor.",
    },
    {
      q: "Should I avoid alcohol after laparoscopic surgery?",
      a: "Yes, alcohol should be avoided during the initial recovery period and while taking pain medication.",
    },
    {
      q: "Do I need iron supplements after surgery?",
      a: "This depends on your individual case, particularly if there was surgical blood loss; your doctor will advise if needed.",
    },
    {
      q: "Who is Dr. Priyanka Pachauri?",
      a: "Dr. Priyanka Pachauri is a Moradabad-based gynaecologist and laparoscopic surgeon (MS, FMAS) offering laparoscopic surgery with structured post-operative recovery guidance.",
    },
    {
      q: "Does Dr. Priyanka Pachauri provide diet advice after surgery?",
      a: "Yes, her practice includes follow-up consultations where recovery topics, including diet and digestive symptoms, can be discussed.",
    },
    {
      q: "Can diet affect how fast my incision heals?",
      a: "Yes, adequate protein, vitamin C, and zinc intake all support faster, better-quality wound healing.",
    },
    {
      q: "How can I book a consultation for post-surgery diet guidance in Moradabad?",
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
                Post Laparoscopy Diet Advice: A Doctor&apos;s Guide to Recovery
                Nutrition
              </h1>

              <p className="mb-4 text-gray-700">
                Recovering well after laparoscopic surgery isn&apos;t just about
                rest and wound care — what you eat in the days and weeks
                afterward plays a real role in how smoothly your body heals. A
                well-planned post-laparoscopy diet can support tissue repair,
                reduce common post-surgical discomforts like bloating and
                constipation, and help restore your energy levels faster. This
                guide brings together practical, doctor-informed diet advice for
                the different stages of recovery after laparoscopic gynaecological
                surgery.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Diet Matters After Laparoscopic Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Supports tissue healing</strong> — adequate protein
                  and key nutrients are essential for wound repair.
                </li>
                <li>
                  <strong>Reduces bloating and gas discomfort</strong> — common
                  after laparoscopy due to the gas used during the procedure.
                </li>
                <li>
                  <strong>Prevents constipation</strong> — a frequent
                  post-surgical issue linked to reduced activity and pain
                  medication.
                </li>
                <li>
                  <strong>Restores energy levels</strong> — balanced nutrition
                  helps counter the fatigue common in the first week.
                </li>
                <li>
                  <strong>Supports immune function</strong> — good nutrition
                  helps lower the risk of post-operative infection.
                </li>
                <li>
                  <strong>Aids in managing anaemia</strong>, if present,
                  particularly relevant for women who had heavy bleeding before
                  surgery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Immediately After Surgery (Day 1)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Start with clear liquids</strong> — water, coconut
                  water, clear soups, and diluted juices, as advised by your
                  medical team.
                </li>
                <li>
                  <strong>Progress gradually to soft, easily digestible
                  foods</strong> once you tolerate liquids well.
                </li>
                <li>
                  <strong>Avoid heavy, greasy, or spicy foods</strong> on the
                  first day, as your digestive system may still be settling
                  after anaesthesia.
                </li>
                <li>
                  <strong>Small, frequent sips</strong> are often better
                  tolerated than large amounts of liquid at once.
                </li>
                <li>
                  <strong>Follow your hospital&apos;s specific post-anaesthesia
                  dietary instructions</strong>, since timing can vary by
                  individual case.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet in the First Week After Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Light, easily digestible meals</strong> — khichdi,
                  soups, boiled vegetables, and simple dals are generally well
                  tolerated.
                </li>
                <li>
                  <strong>High-fibre foods</strong> — whole grains, fruits, and
                  vegetables to help prevent constipation, a common
                  post-surgical issue.
                </li>
                <li>
                  <strong>Protein-rich foods</strong> — eggs, lentils, paneer,
                  and lean meats to support wound healing.
                </li>
                <li>
                  <strong>Plenty of fluids</strong> — water, herbal teas, and
                  clear soups to stay well hydrated.
                </li>
                <li>
                  <strong>Small, frequent meals</strong> rather than large ones,
                  which can feel more comfortable on a healing abdomen.
                </li>
                <li>
                  <strong>Avoid carbonated drinks</strong>, which can worsen
                  post-laparoscopy bloating from residual gas.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods That Support Healing
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Lean proteins</strong> — chicken, fish, eggs, paneer,
                  tofu, and lentils to support tissue repair.
                </li>
                <li>
                  <strong>Iron-rich foods</strong> — leafy greens, beans, and
                  lean meats, especially helpful if surgery involved blood loss.
                </li>
                <li>
                  <strong>Vitamin C-rich foods</strong> — citrus fruits,
                  tomatoes, and bell peppers, which support collagen formation
                  and healing.
                </li>
                <li>
                  <strong>Zinc-rich foods</strong> — nuts, seeds, and whole
                  grains, known to support wound healing.
                </li>
                <li>
                  <strong>Fibre-rich foods</strong> — fruits, vegetables, and
                  whole grains to support healthy digestion and prevent
                  constipation.
                </li>
                <li>
                  <strong>Probiotic foods</strong> — yogurt and curd, which can
                  help support gut health, particularly if antibiotics were
                  prescribed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods to Avoid or Limit After Laparoscopy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Spicy and oily foods</strong> — can irritate the
                  digestive system during the initial recovery period.
                </li>
                <li>
                  <strong>Carbonated beverages</strong> — can worsen bloating
                  caused by residual gas from the laparoscopic procedure.
                </li>
                <li>
                  <strong>Excess caffeine</strong> — can contribute to
                  dehydration and may affect sleep during recovery.
                </li>
                <li>
                  <strong>Alcohol</strong> — should be avoided entirely during
                  the initial recovery period and while taking pain medication.
                </li>
                <li>
                  <strong>Highly processed or sugary foods</strong> — offer
                  limited nutritional support for healing.
                </li>
                <li>
                  <strong>Foods known to cause personal bloating or gas</strong>{" "}
                  — such as certain legumes or cruciferous vegetables, if
                  you&apos;re sensitive to them, especially in the first week.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Managing Common Post-Laparoscopy Digestive Issues Through Diet
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bloating and Gas
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat smaller, more frequent meals rather than large portions.
                </li>
                <li>
                  Avoid carbonated drinks and chewing gum, which can introduce
                  more air into the digestive system.
                </li>
                <li>
                  Gentle walking, as cleared by your doctor, can help ease
                  trapped gas discomfort.
                </li>
                <li>
                  Warm fluids, like herbal teas, can sometimes help relieve
                  bloating.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Constipation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Increase fibre intake gradually through fruits, vegetables,
                  and whole grains.
                </li>
                <li>
                  Stay well hydrated, since fluids work alongside fibre to
                  support regular bowel movements.
                </li>
                <li>
                  Gentle movement, once approved, can help stimulate normal
                  digestion.
                </li>
                <li>
                  Avoid excessive straining, and speak to your doctor if
                  constipation persists, as a mild laxative may be recommended.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Loss of Appetite
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small, nutrient-dense meals are often easier to manage than
                  large plates of food.
                </li>
                <li>
                  Nutrient-rich smoothies or soups can help meet nutritional
                  needs when appetite is low.
                </li>
                <li>
                  Eating on a schedule, even in small amounts, can help
                  gradually restore normal appetite.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet Recommendations by Recovery Week
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Week 1
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Focus on light, easily digestible meals with adequate protein
                  and fluids.
                </li>
                <li>
                  Prioritise fibre and hydration to prevent constipation.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Week 2–3
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gradually reintroduce a wider variety of foods as digestion
                  normalises.
                </li>
                <li>
                  Continue emphasising protein and iron-rich foods to support
                  ongoing healing.
                </li>
                <li>
                  Maintain good hydration and limit processed foods.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Week 4 and Beyond
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Return to a balanced, regular diet, as tolerated and cleared
                  by your doctor.
                </li>
                <li>
                  Continue iron and protein focus if anaemia was present before
                  or after surgery.
                </li>
                <li>
                  Maintain healthy eating habits as part of long-term recovery
                  and overall wellbeing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Dietary Considerations for Specific Procedures
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>After myomectomy or hysterectomy</strong> — iron-rich
                  foods are especially important if there was surgical blood
                  loss.
                </li>
                <li>
                  <strong>After fertility-related laparoscopic surgery</strong>{" "}
                  — a balanced, nutrient-dense diet supports overall reproductive
                  health during recovery.
                </li>
                <li>
                  <strong>If you have diabetes</strong> — blood sugar monitoring
                  and dietary adjustments should continue as advised, since
                  healing can be affected by unstable blood sugar.
                </li>
                <li>
                  <strong>If you&apos;re anaemic</strong> — your doctor may
                  recommend iron supplementation alongside dietary changes for
                  faster recovery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When to Consult Your Doctor About Diet After Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Persistent nausea or vomiting preventing you from eating or
                  drinking adequately.
                </li>
                <li>
                  Severe or worsening bloating that doesn&apos;t improve with
                  simple measures.
                </li>
                <li>
                  Constipation lasting more than a few days, despite dietary
                  changes.
                </li>
                <li>
                  Signs of dehydration, such as reduced urination or dizziness.
                </li>
                <li>
                  Unexplained weight loss or prolonged loss of appetite during
                  recovery.
                </li>
                <li>
                  Uncertainty about specific dietary restrictions, particularly
                  if you have other health conditions like diabetes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hydration Guidelines During Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aim for consistent fluid intake throughout the day rather than
                  large amounts at once.
                </li>
                <li>
                  Water remains the best default choice, supplemented with
                  coconut water or clear soups as needed.
                </li>
                <li>
                  Herbal teas, such as ginger or chamomile, can help soothe
                  digestion and support relaxation during recovery.
                </li>
                <li>
                  Limit sugary drinks, which offer little nutritional benefit
                  during the healing process.
                </li>
                <li>
                  Monitor urine colour as a simple indicator of hydration status
                  — pale yellow generally indicates adequate fluid intake.
                </li>
                <li>
                  Increase fluids further if you experience any fever or
                  increased fluid loss during recovery, and inform your doctor
                  if this persists.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods to Reintroduce Gradually
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Dairy products</strong>, if well tolerated, can be
                  reintroduced gradually after the first few days.
                </li>
                <li>
                  <strong>Nuts and seeds</strong>, in moderate amounts, offer
                  healthy fats and additional protein as digestion normalises.
                </li>
                <li>
                  <strong>Whole fruits with skin</strong>, once fibre tolerance
                  improves, add valuable nutrients and natural sweetness.
                </li>
                <li>
                  <strong>Slightly heavier meals</strong>, gradually introduced
                  from week two onward as appetite and digestion stabilise.
                </li>
                <li>
                  <strong>Home-cooked meals</strong> are generally preferable to
                  outside or packaged food during the sensitive recovery period.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Laparoscopic Surgeon Offering Recovery
                Guidance in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                For women in Moradabad recovering from laparoscopic gynaecological
                surgery, Dr. Priyanka Pachauri (MS in Obstetrics & Gynaecology,
                FMAS, Advanced Infertility Fellowship) offers thorough surgical
                care paired with practical post-operative guidance, including
                recovery nutrition. Based on her official website, (
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
                  A &quot;Her Health First&quot; philosophy that emphasises
                  clear, practical guidance at every stage of care, including
                  recovery.
                </li>
                <li>
                  <strong>High-definition 3D laparoscopic technology</strong>,
                  used across procedures like myomectomy, cystectomy, and
                  hysterectomy, generally resulting in faster, smoother
                  recovery.
                </li>
                <li>
                  <strong>Structured follow-up consultations</strong>, where
                  recovery concerns, including diet and digestive symptoms, can
                  be discussed directly.
                </li>
                <li>
                  A comprehensive women&apos;s health practice, covering
                  fertility care, pregnancy support, and gynaecological surgery,
                  allowing continuity of guidance throughout your recovery
                  journey.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Since post-laparoscopy diet needs can vary depending on the
                specific procedure, individual health conditions, and how your
                body responds to surgery, personalised advice from your treating
                surgeon remains the most reliable guide for your recovery
                nutrition.
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
                Practical Meal Ideas for Early Recovery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Breakfast:</strong> Vegetable poha, boiled eggs, or a
                  light vegetable dalia with a glass of warm water.
                </li>
                <li>
                  <strong>Lunch:</strong> Khichdi with dal, steamed vegetables,
                  and a small portion of curd.
                </li>
                <li>
                  <strong>Snacks:</strong> Fresh fruit, soaked nuts, or a light
                  vegetable soup.
                </li>
                <li>
                  <strong>Dinner:</strong> Light dal with rice or roti, along
                  with well-cooked, easy-to-digest vegetables.
                </li>
                <li>
                  <strong>Throughout the day:</strong> Regular sips of water,
                  coconut water, or herbal tea to stay well hydrated.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Key Takeaways
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Start with light, easily digestible foods and gradually
                  progress to a normal diet as tolerated.
                </li>
                <li>
                  Protein, iron, and fibre are the key nutritional priorities
                  during early recovery.
                </li>
                <li>
                  Avoid spicy, oily, carbonated, and processed foods in the
                  initial days after surgery.
                </li>
                <li>
                  Small, frequent meals are generally more comfortable than
                  large portions.
                </li>
                <li>
                  Persistent digestive symptoms — like severe bloating or
                  constipation — should be discussed with your doctor.
                </li>
                <li>
                  Diet needs vary by procedure and individual health, so
                  personalised guidance is valuable.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A thoughtful, well-planned diet after laparoscopic surgery can
                make a real difference in how comfortable and smooth your
                recovery feels. Starting with light, easily digestible foods and
                gradually building back to a balanced diet — with a focus on
                protein, iron, and fibre — supports healing while helping manage
                common post-surgical issues like bloating and constipation.
                Since individual needs vary depending on the specific procedure
                and your overall health, following your surgeon&apos;s
                personalised advice, alongside these general guidelines, offers
                the most reliable path to a smooth recovery.
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
