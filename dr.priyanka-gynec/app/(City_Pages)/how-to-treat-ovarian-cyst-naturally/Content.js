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


export default function HowToTreatOvarianCystNaturally() {
  const faqs = [
    {
      q: "Can ovarian cysts be treated naturally?",
      a: "Small functional cysts often resolve on their own, and lifestyle care eases symptoms. Large, persistent or complex cysts need medical evaluation.",
    },
    {
      q: "How long does an ovarian cyst take to go away?",
      a: "Functional cysts usually disappear within 1–3 menstrual cycles. A repeat scan after 6–8 weeks confirms this.",
    },
    {
      q: "Which foods help with ovarian cysts?",
      a: "Leafy greens, broccoli, berries, whole grains, nuts, seeds and flaxseed support hormone balance. Limit sugar, junk food and processed meat.",
    },
    {
      q: "Does heat help ovarian cyst pain?",
      a: "Yes. A warm compress on the lower abdomen for 15–20 minutes can relax muscles and reduce cramps.",
    },
    {
      q: "Can ovarian cysts affect pregnancy?",
      a: "Some cysts, such as endometriomas, and PCOS-related ovulation problems can affect fertility. Most simple cysts do not.",
    },
    {
      q: "When is surgery needed?",
      a: "Surgery is advised for cysts that are large, growing, painful, complex or persistent. Laparoscopic cystectomy removes the cyst while preserving the ovary.",
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
                How to Treat Ovarian Cyst Naturally: Safe Home Remedies, Diet
                &amp; When to See a Doctor
              </h1>


              <p className="mb-4 text-gray-700">
                Hearing the words &quot;ovarian cyst&quot; on an ultrasound
                report can be scary. The good news is that most ovarian cysts are
                harmless and many disappear without any procedure. Natural care
                can ease symptoms and support your hormonal health while your
                body heals.
              </p>


              <p className="mb-4 text-gray-700">
                Natural methods do not replace medical care. They work best
                alongside proper diagnosis and monitoring by a qualified
                gynaecologist. This guide covers what really helps, what does
                not, and when you should not wait.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is an Ovarian Cyst?
              </h2>


              <p className="mb-4 text-gray-700">
                An ovarian cyst is a fluid-filled sac that forms on or inside an
                ovary. Most women develop at least one cyst in their lifetime,
                often without knowing it.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Common types:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Follicular cyst:</strong> forms when a follicle does
                  not release its egg. It usually resolves in 1–3 months.
                </li>
                <li>
                  <strong>Corpus luteum cyst:</strong> forms after ovulation and
                  often disappears by itself.
                </li>
                <li>
                  <strong>Dermoid cyst:</strong> contains tissue like hair or
                  fat and rarely goes away without surgery.
                </li>
                <li>
                  <strong>Cystadenoma:</strong> forms from ovarian surface cells
                  and can grow large.
                </li>
                <li>
                  <strong>Endometrioma (&quot;chocolate cyst&quot;):</strong>{" "}
                  linked to endometriosis and often causes severe period pain.
                </li>
                <li>
                  <strong>PCOS-related cysts:</strong> many small follicles,
                  usually not true cysts, linked to hormonal imbalance.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Symptoms of an Ovarian Cyst
              </h2>


              <p className="mb-4 text-gray-700">
                Many women feel nothing at all. When symptoms appear, they may
                include:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dull or sharp pain in the lower abdomen or pelvis
                </li>
                <li>Bloating or a feeling of fullness</li>
                <li>Pain during periods or intercourse</li>
                <li>Irregular, delayed or heavy periods</li>
                <li>
                  Frequent urination or difficulty emptying the bladder
                </li>
                <li>Lower back or thigh pain</li>
                <li>Nausea or loss of appetite</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can an Ovarian Cyst Go Away Naturally?
              </h2>


              <p className="mb-4 text-gray-700">
                Yes, in many cases. Functional cysts (follicular and corpus
                luteum) often shrink on their own within a few menstrual cycles.
                Doctors commonly advise &quot;watchful waiting&quot; with a
                repeat ultrasound after 6–8 weeks.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Natural care is suitable when:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The cyst is small (usually under 5 cm)</li>
                <li>It looks simple on ultrasound</li>
                <li>Symptoms are mild</li>
                <li>You are under regular medical follow-up</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Natural care is NOT enough when:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The cyst is large, growing or complex</li>
                <li>It persists beyond 2–3 cycles</li>
                <li>You have severe or sudden pain</li>
                <li>You are past menopause</li>
                <li>
                  You are trying to conceive and the cyst is affecting fertility
                </li>
              </ul>


              <p className="text-gray-700">
                No diet, herb or home remedy has been proven to dissolve a cyst.
                What lifestyle changes can do is relieve discomfort, balance
                hormones and help your body resolve functional cysts.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                10 Natural Ways to Support Ovarian Cyst Care
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Use Heat Therapy for Pain Relief
              </h3>
              <p className="mb-2 text-gray-700">
                Warmth relaxes pelvic muscles and improves blood flow.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Place a hot water bottle or heating pad on your lower abdomen
                  for 15–20 minutes
                </li>
                <li>Use it 2–3 times a day during painful episodes</li>
                <li>Take a warm (not hot) bath to ease cramps</li>
              </ul>
              <p className="mb-6 text-gray-700">
                Do not apply heat if you have fever or sudden, severe pain. Seek
                medical help instead.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Follow an Anti-Inflammatory Diet
              </h3>
              <p className="mb-2 text-gray-700">
                Food will not remove a cyst, but a balanced diet supports hormone
                regulation and reduces inflammation.
              </p>
              <h4 className="mb-1 font-semibold text-gray-800">
                Include more of:
              </h4>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Leafy greens such as spinach, fenugreek (methi) and kale
                </li>
                <li>
                  Cruciferous vegetables such as broccoli, cauliflower and
                  cabbage
                </li>
                <li>Berries, apples, oranges and pomegranate</li>
                <li>Whole grains such as oats, brown rice, millets and whole wheat</li>
                <li>Lentils, beans, chickpeas and sprouts</li>
                <li>
                  Nuts and seeds such as walnuts, flaxseeds and pumpkin seeds
                </li>
                <li>
                  Healthy fats from olive oil, mustard oil in moderation and
                  fatty fish
                </li>
                <li>Turmeric and ginger in everyday cooking</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Reduce Foods That May Worsen Symptoms
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Refined sugar, sweets and sugary drinks</li>
                <li>White bread, maida and processed snacks</li>
                <li>Deep-fried and fast food</li>
                <li>Excess red and processed meat</li>
                <li>Packaged foods high in trans fats</li>
                <li>Too much caffeine and alcohol</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Increase Fibre and Water Intake
              </h3>
              <p className="mb-2 text-gray-700">
                Fibre helps the body clear excess hormones, and good hydration
                reduces bloating and constipation, which can worsen pelvic
                pressure.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Aim for 2–3 litres of water daily</li>
                <li>Eat fibre-rich vegetables and fruits at every meal</li>
                <li>Add 1 tablespoon of ground flaxseed to your diet</li>
                <li>
                  Choose herbal teas such as ginger or peppermint without added
                  sugar
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Maintain a Healthy Weight
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Excess body fat can raise insulin and estrogen levels. This
                  matters especially if your cyst is linked to PCOS.
                </li>
                <li>
                  Even a 5–7% weight loss can improve cycle regularity in women
                  with PCOS
                </li>
                <li>Focus on steady, sustainable changes, not crash diets</li>
                <li>Track your periods to notice improvement</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Exercise Regularly and Gently
              </h3>
              <p className="mb-2 text-gray-700">
                Movement improves insulin sensitivity and reduces stress.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Walk briskly for 30 minutes most days</li>
                <li>Try yoga, swimming or light cycling</li>
                <li>
                  Helpful yoga poses include Bhujangasana (cobra), Baddha
                  Konasana (butterfly) and Child&apos;s pose
                </li>
              </ul>
              <p className="mb-6 text-gray-700">
                Avoid heavy lifting, intense twisting or high-impact workouts if
                you have a large cyst or pain. A big cyst can twist (torsion).
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Manage Stress
              </h3>
              <p className="mb-2 text-gray-700">
                Chronic stress raises cortisol, which can disturb ovulation and
                hormone balance.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Practise deep breathing or meditation for 10 minutes daily</li>
                <li>Try pranayama such as Anulom Vilom</li>
                <li>Spend time outdoors and keep a regular routine</li>
                <li>Talk to someone you trust if you feel anxious</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Prioritise Sleep
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sleep 7–8 hours at a consistent time</li>
                <li>Avoid screens for an hour before bed</li>
                <li>
                  Poor sleep affects insulin, cortisol and reproductive hormones
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Consider Supportive Nutrients (Only After Medical Advice)
              </h3>
              <p className="mb-2 text-gray-700">
                Some nutrients are linked to hormonal health, but the evidence
                for cysts specifically is limited.
              </p>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Vitamin D:</strong> often low in women with PCOS
                </li>
                <li>
                  <strong>Magnesium:</strong> may help with cramps
                </li>
                <li>
                  <strong>Omega-3 fatty acids:</strong> support anti-inflammatory
                  balance
                </li>
                <li>
                  <strong>Inositol:</strong> studied in PCOS for cycle regulation
                </li>
              </ul>
              <p className="mb-6 text-gray-700">
                Always check dosage and safety with your gynaecologist before
                starting any supplement.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Be Careful With Herbal Remedies
              </h3>
              <p className="mb-2 text-gray-700">
                Popular remedies include cinnamon, turmeric, ginger, fenugreek
                and apple cider vinegar. Used as part of normal cooking, they
                are generally safe. However:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  There is no scientific proof that they shrink cysts
                </li>
                <li>
                  Concentrated herbal capsules or &quot;cyst-dissolving&quot;
                  products can interact with medicines or affect hormones
                </li>
                <li>
                  Never replace your scan follow-up with herbal treatment alone
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Avoid When You Have an Ovarian Cyst
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ignoring persistent pain or skipping follow-up scans</li>
                <li>Self-medicating with hormonal pills</li>
                <li>Believing &quot;miracle cure&quot; claims on social media</li>
                <li>
                  Heavy exercise or sudden twisting movements with a large cyst
                </li>
                <li>Smoking and excessive alcohol</li>
                <li>Delaying consultation when you are trying to conceive</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovarian Cyst vs PCOS: Is It the Same?
              </h2>


              <p className="mb-4 text-gray-700">
                They are related but not identical.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ovarian cyst:</strong> one or a few fluid-filled sacs,
                  often temporary
                </li>
                <li>
                  <strong>PCOS:</strong> a hormonal condition with irregular
                  ovulation, often with multiple tiny follicles
                </li>
                <li>
                  PCOS needs long-term lifestyle and medical management
                </li>
                <li>
                  Both can be checked with ultrasound and hormone tests
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: When to See a Doctor Immediately
              </h2>


              <p className="mb-4 text-gray-700">
                Go to a hospital or call your gynaecologist urgently if you
                have:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe lower abdominal pain</li>
                <li>Pain with fever or vomiting</li>
                <li>Dizziness, fainting or rapid breathing</li>
                <li>Heavy, unexpected vaginal bleeding</li>
                <li>Rapidly increasing abdominal swelling</li>
              </ul>


              <p className="mt-4 text-gray-700">
                These can signal cyst rupture or ovarian torsion, which are
                emergencies.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medical Treatment Options
              </h2>


              <p className="mb-4 text-gray-700">
                If natural care and monitoring are not enough, your doctor may
                suggest:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Watchful waiting:</strong> repeat ultrasound after
                  6–8 weeks
                </li>
                <li>
                  <strong>Hormonal medication:</strong> to regulate cycles and
                  prevent new functional cysts
                </li>
                <li>
                  <strong>Pain management:</strong> under medical supervision
                </li>
                <li>
                  <strong>Laparoscopic cystectomy:</strong> keyhole surgery that
                  removes the cyst while preserving the ovary and fertility
                </li>
                <li>
                  <strong>Treatment of the underlying cause:</strong> such as
                  endometriosis or PCOS
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Laparoscopic surgery generally means small incisions, less pain,
                a shorter hospital stay and a faster return to routine than open
                surgery.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Consult Dr. Priyanka in Moradabad?
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers women&apos;s health care built around
                the philosophy &quot;Her Health First&quot;.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3D high-definition laparoscopic surgery for ovarian cysts
                </li>
                <li>
                  Fertility-preserving laparoscopic cystectomy
                </li>
                <li>
                  Expert care for PCOS, endometriosis and menstrual disorders
                </li>
                <li>Advanced 3D/4D ultrasound for accurate diagnosis</li>
                <li>
                  Fertility and IVF support if cysts affect conception
                </li>
                <li>Compassionate guidance at every stage of life</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Many ovarian cysts resolve on their own, and healthy habits can
                make that journey more comfortable. Heat therapy, an
                anti-inflammatory diet, regular exercise, stress control and
                good sleep all help. But no natural remedy replaces a proper
                scan and expert opinion.
              </p>


              <p className="text-gray-700">
                If you have persistent pain, irregular periods, a cyst that is
                not shrinking, or plans to conceive, do not delay your
                consultation.
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
