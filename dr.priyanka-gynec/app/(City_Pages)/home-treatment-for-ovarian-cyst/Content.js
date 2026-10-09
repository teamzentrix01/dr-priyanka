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


export default function HomeTreatmentForOvarianCyst() {
  const faqs = [
    {
      q: "Can an ovarian cyst go away on its own?",
      a: "Yes. Many small functional cysts disappear within one to three menstrual cycles.",
    },
    {
      q: "Can home remedies dissolve an ovarian cyst?",
      a: "No home remedy has been proven to dissolve a cyst.",
    },
    {
      q: "What can I do at home for cyst pain?",
      a: "Gentle heat, rest and a doctor-approved painkiller may ease discomfort.",
    },
    {
      q: "Does diet help ovarian cysts?",
      a: "A balanced diet supports hormone health, especially in PCOS, but it does not cure cysts.",
    },
    {
      q: "Are herbal remedies safe?",
      a: "Not always. Some herbs affect hormones, so ask your doctor first.",
    },
    {
      q: "When is home care not enough?",
      a: "For large, painful or persistent cysts, dermoids, endometriomas and any emergency signs.",
    },
    {
      q: "What symptoms mean I should go to the hospital?",
      a: "Sudden severe pain, fainting, vomiting with pain, fever or heavy bleeding.",
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
                Home Treatment for Ovarian Cyst: Safe Self-Care, Myths and When
                to See a Doctor
              </h1>


              <p className="mb-4 text-gray-700">
                When a scan shows an ovarian cyst, many women ask the same
                question: &quot;Can I treat this at home?&quot; It is a natural
                wish. Nobody wants surgery or medicines unless they truly need
                them. The honest answer has two parts.
              </p>


              <p className="mb-4 text-gray-700">
                First, many ovarian cysts disappear by themselves, so doctors
                often advise simply watching them. Second, no home remedy has
                been proven to dissolve or shrink a cyst, and some popular
                online claims can delay proper care. What home care can do is
                ease discomfort, support your overall health and help you spot
                warning signs early.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First, Understand What You Are Treating
              </h2>


              <p className="mb-4 text-gray-700">
                An ovarian cyst is a fluid-filled sac on or inside an ovary. Not
                all cysts are the same, and the type decides what is appropriate.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Functional cysts (most common):
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Linked to the normal menstrual cycle</li>
                <li>Often resolve within one to three cycles</li>
                <li>Usually managed by observation</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometrioma (chocolate cyst):
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Linked with endometriosis</li>
                <li>Does not usually go away on its own</li>
                <li>Often needs medical or surgical care</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Dermoid cyst:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Contains tissue such as hair or fat</li>
                <li>Does not disappear on its own</li>
                <li>Usually removed surgically</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Cystadenoma:
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Can grow large</li>
                <li>Usually needs removal</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS ovaries:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Many small follicles rather than true cysts</li>
                <li>Managed mainly through lifestyle and hormonal care</li>
              </ul>


              <p className="text-gray-700">
                <strong>Key point:</strong> home care may be reasonable for a
                small, simple, functional cyst under medical follow-up. It is
                not a substitute for treatment of pathological cysts.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Honest Truth About Home Remedies
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  No herb, drink, supplement or diet has been proven to dissolve
                  an ovarian cyst.
                </li>
                <li>
                  A cyst that disappears after a home remedy was very likely a
                  functional cyst that would have resolved on its own.
                </li>
                <li>
                  Some products are marketed with strong claims but no reliable
                  evidence.
                </li>
                <li>
                  Some herbal or &quot;detox&quot; products can interfere with
                  hormones or medicines.
                </li>
                <li>
                  Delaying a check-up because of a remedy can allow a problematic
                  cyst to grow or twist.
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                The safest approach: confirm the cyst type with an ultrasound
                first, then use home care only as a supportive measure alongside
                medical advice.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Can Consider Supportive Home Care
              </h2>


              <p className="mb-4 text-gray-700">
                Supportive care may be reasonable if all of the following apply.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  You have had an ultrasound and a doctor has reviewed it
                </li>
                <li>The cyst is small and simple, and likely functional</li>
                <li>Your symptoms are mild</li>
                <li>
                  Your doctor has advised watchful waiting and a repeat scan
                </li>
                <li>You are not pregnant without medical guidance</li>
                <li>You have no emergency warning signs</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Should NOT Rely on Home Care
              </h2>


              <p className="mb-4 text-gray-700">
                See a doctor first, and do not rely on home care alone, if:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The cyst is large, complex or growing</li>
                <li>You have a known endometrioma or dermoid cyst</li>
                <li>Pain is severe, constant or worsening</li>
                <li>You are pregnant or trying to conceive</li>
                <li>You are postmenopausal</li>
                <li>Periods have become very heavy or very irregular</li>
                <li>You have fever, vomiting or dizziness</li>
                <li>You have a family history of ovarian cancer</li>
                <li>The cyst has not resolved after a few cycles</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Home Care Measures for Comfort
              </h2>


              <p className="mb-4 text-gray-700">
                These steps may ease discomfort. They do not treat the cyst
                itself.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Apply Gentle Heat
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Place a warm (not hot) water bag or heating pad on the lower
                  abdomen
                </li>
                <li>Use for 15–20 minutes at a time</li>
                <li>Place a cloth between the heat source and your skin</li>
                <li>Never fall asleep with a heating pad on</li>
                <li>Stop if pain increases or the skin becomes red</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Rest When You Need To
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Listen to your body and avoid pushing through pain</li>
                <li>Take short breaks during the day</li>
                <li>
                  Avoid heavy lifting or intense abdominal exercise if it worsens
                  pain
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Choose Comfortable Positions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lie on your side with a pillow between your knees
                </li>
                <li>
                  Try the child&apos;s pose or gentle knee-to-chest stretch if
                  it feels comfortable
                </li>
                <li>Avoid positions that increase pain or pressure</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Stay Hydrated
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Drink enough water through the day</li>
                <li>
                  Warm water or herbal teas such as ginger or chamomile may feel
                  soothing, though they do not treat the cyst
                </li>
                <li>
                  Limit very sugary and caffeinated drinks if they worsen
                  bloating
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Use Over-the-Counter Pain Relief Carefully
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many women use common painkillers for cramps, but the right
                  medicine and dose depend on your health
                </li>
                <li>
                  Ask your doctor or pharmacist which is safe for you
                </li>
                <li>
                  Do not use painkillers repeatedly to mask worsening pain
                </li>
                <li>
                  Avoid them if you are pregnant or have conditions such as
                  ulcers or kidney disease, unless your doctor agrees
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Manage Bloating and Digestion
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Eat smaller, more frequent meals</li>
                <li>Include fibre from vegetables, fruit and whole grains</li>
                <li>Limit gas-forming foods if they bother you</li>
                <li>
                  Avoid constipation, because straining can worsen pelvic
                  discomfort
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Habits That Support Ovarian and Hormonal Health
              </h2>


              <p className="mb-4 text-gray-700">
                These habits help your overall health and may help prevent some
                cysts, especially in women with PCOS. They are supportive, not a
                cure.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Nutrition
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat a balanced diet with:
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Vegetables and fruit</li>
                    <li>
                      Whole grains such as oats, brown rice and millets
                    </li>
                    <li>Pulses and lentils</li>
                    <li>Nuts and seeds</li>
                    <li>Lean protein such as eggs, fish and dairy</li>
                  </ul>
                </li>
                <li>
                  Choose foods with a lower glycaemic load to support steady
                  blood sugar
                </li>
                <li>
                  Include healthy fats such as nuts, seeds and olive or mustard
                  oil in moderation
                </li>
                <li>Limit refined sugar, sweet drinks and ultra-processed foods</li>
                <li>Do not follow extreme diets or &quot;detox&quot; plans</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Weight Management
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Maintain a healthy weight, which helps hormone balance
                </li>
                <li>
                  In women with PCOS, even modest weight loss can improve
                  ovulation and cycle regularity
                </li>
                <li>Avoid crash dieting</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Exercise
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aim for regular, moderate activity such as walking, cycling,
                  swimming or yoga
                </li>
                <li>
                  Strength training two or three times a week can help insulin
                  sensitivity
                </li>
                <li>
                  Avoid intense twisting or high-impact exercise if you have a
                  large cyst or pain, and ask your doctor first
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Stress and Sleep
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Practise breathing exercises, meditation or gentle yoga
                </li>
                <li>Sleep 7–8 hours nightly</li>
                <li>
                  Chronic stress and poor sleep can disturb hormones
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Habits to Avoid
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Smoking and tobacco</li>
                <li>Heavy alcohol use</li>
                <li>Skipping meals or severe calorie restriction</li>
                <li>Unprescribed hormonal or herbal products</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Foods and Remedies Often Promoted Online: What to Know
              </h2>


              <p className="mb-4 text-gray-700">
                Many remedies circulate on social media. Here is an honest
                summary.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Castor oil packs or compresses:</strong>
                  <br />
                  Marketed for cysts, but there is no reliable evidence they
                  shrink them. Applying warmth may feel comforting, nothing
                  more.
                </li>
                <li>
                  <strong>Apple cider vinegar:</strong>
                  <br />
                  No proven effect on cysts. Undiluted vinegar can irritate the
                  throat and teeth.
                </li>
                <li>
                  <strong>Turmeric:</strong>
                  <br />
                  Safe in normal food amounts. High-dose supplements are not
                  proven to treat cysts.
                </li>
                <li>
                  <strong>Ginger tea:</strong>
                  <br />
                  May soothe nausea and cramps. Does not dissolve cysts.
                </li>
                <li>
                  <strong>Flaxseed:</strong>
                  <br />
                  A nutritious food. Not proven to treat cysts.
                </li>
                <li>
                  <strong>Fenugreek, ashwagandha and other herbs:</strong>
                  <br />
                  Evidence for cysts is lacking. Some herbs can affect hormones,
                  blood sugar or blood pressure. Avoid them if you are pregnant
                  or trying to conceive unless your doctor approves.
                </li>
                <li>
                  <strong>&quot;Detox&quot; cleanses and extreme diets:</strong>
                  <br />
                  Not supported by evidence. May cause weakness and hormonal
                  disruption.
                </li>
                <li>
                  <strong>Vaginal steaming or douching:</strong>
                  <br />
                  Not recommended and can cause irritation or infection.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Situation: PCOS
              </h2>


              <p className="mb-4 text-gray-700">
                Many women with PCOS worry about &quot;cysts&quot;. In PCOS, the
                ovaries contain several small, immature follicles.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle is the foundation of PCOS care:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Healthy weight and balanced diet</li>
                <li>Regular exercise</li>
                <li>Good sleep and stress control</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical care is often needed too:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regulating periods</li>
                <li>Managing acne, hair growth and insulin resistance</li>
                <li>Ovulation induction if pregnancy is desired</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Home care helps, but does not replace a gynaecologist&apos;s
                guidance.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Situation: Cysts During Pregnancy
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cysts are common in early pregnancy, often corpus luteum
                  cysts.
                </li>
                <li>Most resolve by themselves.</li>
                <li>
                  Do not use herbs or home remedies without asking your doctor.
                </li>
                <li>
                  Regular scans track the cyst, and treatment is planned if
                  needed.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Monitor Yourself at Home
              </h2>


              <p className="mb-4 text-gray-700">
                If your doctor has advised watching the cyst, keep a simple
                record.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Symptom diary:</strong> note the date, location and
                  intensity of pain
                </li>
                <li>
                  <strong>Period tracker:</strong> record cycle length, flow and
                  spotting
                </li>
                <li>
                  <strong>Bloating and bowel notes:</strong> changes in
                  appetite, bowel habits or urination
                </li>
                <li>
                  <strong>Medicine log:</strong> what you took and when
                </li>
                <li>
                  <strong>Follow-up reminders:</strong> book the repeat scan on
                  time
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Bring the diary to your appointment so your doctor can see
                patterns.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Stop Home Care and Seek Help
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Go to a hospital immediately if you have:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sudden, severe abdominal or pelvic pain</li>
                <li>Pain with fever or vomiting</li>
                <li>Dizziness, fainting or weakness</li>
                <li>Rapid breathing or a fast heartbeat</li>
                <li>Heavy vaginal bleeding</li>
                <li>A very swollen, tender abdomen</li>
              </ul>


              <p className="mb-4 text-gray-700">
                These may indicate a burst cyst or ovarian torsion, which are
                emergencies. Do not try to manage them at home.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                See your gynaecologist soon if:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain is increasing or becoming frequent</li>
                <li>The cyst has not resolved on a repeat scan</li>
                <li>
                  You develop new bloating or pressure that does not go away
                </li>
                <li>Your periods change significantly</li>
                <li>You are trying to conceive and have a known cyst</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Medical Treatment Is Needed
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Observation with repeat scans:</strong> for small,
                  simple cysts
                </li>
                <li>
                  <strong>Medicines:</strong> to relieve symptoms or treat
                  underlying conditions
                </li>
                <li>
                  <strong>Laparoscopic cystectomy:</strong> keyhole surgery for
                  cysts that are large, persistent, painful or of a type that
                  does not resolve on its own
                </li>
                <li>
                  <strong>Fertility-focused planning:</strong> for women who
                  wish to conceive
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Modern laparoscopic surgery removes the cyst through small
                incisions while aiming to preserve healthy ovarian tissue, with
                a short hospital stay and a faster recovery than open surgery.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Myths About Home Treatment of Ovarian Cysts
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> natural remedies can dissolve any cyst.
                  <br />
                  <strong>Fact:</strong> no remedy has been proven to do this.
                </li>
                <li>
                  <strong>Myth:</strong> if the pain settles, the cyst is gone.
                  <br />
                  <strong>Fact:</strong> only a repeat ultrasound can confirm
                  that.
                </li>
                <li>
                  <strong>Myth:</strong> surgery is always avoidable with the
                  right diet.
                  <br />
                  <strong>Fact:</strong> some cysts, such as dermoids and
                  endometriomas, need medical treatment.
                </li>
                <li>
                  <strong>Myth:</strong> herbal means harmless.
                  <br />
                  <strong>Fact:</strong> herbs can interact with medicines and
                  affect hormones.
                </li>
                <li>
                  <strong>Myth:</strong> I can skip the scan if I feel fine.
                  <br />
                  <strong>Fact:</strong> many cysts cause no symptoms but still
                  need follow-up.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec in Moradabad
              </h2>


              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec offers women&apos;s health and fertility care
                under the philosophy &quot;Her Health First&quot;.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic cystectomy:</strong> precision 3D keyhole
                  surgery that removes ovarian cysts while preserving fertility
                </li>
                <li>
                  <strong>3D laparoscopic expertise:</strong> also used for
                  endometriosis surgery, myomectomy and hysterectomy
                </li>
                <li>
                  <strong>3D/4D ultrasound:</strong> detailed imaging to
                  identify the cyst type accurately
                </li>
                <li>
                  <strong>Fertility and IVF services:</strong> for women who
                  need fertility planning alongside cyst care
                </li>
                <li>
                  <strong>Complete journey support:</strong> from diagnosis to
                  treatment, pregnancy care and normal delivery
                </li>
                <li>
                  <strong>Unhurried, empathetic consultations:</strong> your
                  questions about home care are always welcome
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation Today
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
                Frequently Asked Questions (FAQ)
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
