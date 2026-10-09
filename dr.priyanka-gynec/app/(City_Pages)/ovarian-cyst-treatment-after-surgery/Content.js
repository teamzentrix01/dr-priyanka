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


export default function OvarianCystTreatmentAfterSurgery() {
  const faqs = [
    {
      q: "How long is recovery after laparoscopic ovarian cyst surgery?",
      a: "Many women feel much better within a week and near normal in two to four weeks.",
    },
    {
      q: "Is pain normal after ovarian cyst surgery?",
      a: "Yes. Mild to moderate soreness and shoulder pain are common and should improve.",
    },
    {
      q: "What should I eat after surgery?",
      a: "Light, protein-rich, high-fibre meals with plenty of fluids.",
    },
    {
      q: "When can I go back to work?",
      a: "Often within about a week for desk work, but follow your surgeon's advice.",
    },
    {
      q: "Can an ovarian cyst come back after surgery?",
      a: "Yes, some types can recur, so follow-up scans are important.",
    },
    {
      q: "Can I get pregnant after cyst surgery?",
      a: "Many women do. Discuss timing and ovarian reserve with your doctor.",
    },
    {
      q: "Which symptoms need urgent attention?",
      a: "Fever, severe pain, heavy bleeding, wound discharge or persistent vomiting.",
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
                Ovarian Cyst Treatment After Surgery: Recovery, Follow-Up and
                Long-Term Care
              </h1>


              <p className="mb-4 text-gray-700">
                The surgery is over, and you may feel relieved, tired and a
                little unsure. Many women ask: &quot;How long will I hurt? What
                can I eat? When can I go back to work? Will the cyst come back?
                Can I still get pregnant?&quot;
              </p>


              <p className="mb-4 text-gray-700">
                Care after ovarian cyst surgery matters as much as the operation
                itself. Good aftercare supports healing, prevents complications,
                protects your ovaries and helps you plan the future. This guide
                covers the recovery timeline, daily care, warning signs,
                follow-up, recurrence and fertility.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding Your Surgery
              </h2>


              <p className="mb-4 text-gray-700">
                Most ovarian cysts that need surgery are removed by laparoscopic
                cystectomy.
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>What it is:</strong> removal of the cyst through a few
                  small incisions using a camera and fine instruments
                </li>
                <li>
                  <strong>Goal:</strong> remove the cyst while protecting
                  healthy ovarian tissue
                </li>
                <li>
                  <strong>Common reasons for surgery:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Large or persistent cysts</li>
                    <li>Pain or pressure</li>
                    <li>Endometriomas (chocolate cysts)</li>
                    <li>Dermoid cysts</li>
                    <li>Complex-looking cysts</li>
                  </ul>
                </li>
                <li>
                  <strong>Why recovery is quicker than open surgery:</strong>
                  <ul className="mt-1 list-disc space-y-2 pl-5">
                    <li>Small cuts</li>
                    <li>Less pain</li>
                    <li>Short hospital stay, often one day</li>
                    <li>Faster return to routine</li>
                  </ul>
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                In rarer situations, open surgery or removal of the ovary may be
                needed, and recovery will then be longer.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The First 24 Hours After Surgery
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In the recovery area:
              </h3>
              <p className="mb-2 text-gray-700">
                Staff monitor your blood pressure, pulse and breathing as the
                anaesthesia wears off.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                You may feel:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Drowsy or groggy</li>
                <li>Mild to moderate pain at the incision sites</li>
                <li>Nausea</li>
                <li>Sore throat from the breathing tube</li>
                <li>Shoulder-tip pain from the gas used during laparoscopy</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Care you will receive:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain relief and anti-nausea medicines</li>
                <li>IV fluids until you can drink</li>
                <li>Encouragement to sit up and walk soon after surgery</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Eating and drinking:
              </h3>
              <p className="mb-2 text-gray-700">
                Usually begins with sips of water, then light food once you feel
                steady.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Passing urine:
              </h3>
              <p className="mb-2 text-gray-700">
                You will be asked to pass urine before discharge.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Discharge:
              </h3>
              <p className="text-gray-700">
                Many women go home the same or the next day.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Timeline: What Most Women Experience
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Days 1–3
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Tiredness, soreness and mild bloating are common.</li>
                <li>Shoulder-tip pain often settles within a day or two.</li>
                <li>
                  Light walking around the house helps circulation and
                  digestion.
                </li>
                <li>Rest often, but do not stay in bed all day.</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Days 4–7
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain usually decreases steadily.</li>
                <li>Energy begins to return.</li>
                <li>Many women resume light household work.</li>
                <li>
                  Some return to desk work around this time, depending on the
                  job and the surgeon&apos;s advice.
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Weeks 2–3
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Most women feel close to normal.</li>
                <li>Incision sites look better, and soreness fades.</li>
                <li>
                  Gentle exercise such as walking can increase gradually.
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Weeks 4–6
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Full activity, including exercise and heavier work, is usually
                  allowed.
                </li>
                <li>
                  Your surgeon will confirm when you can resume everything.
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Note: recovery may take longer after endometriosis surgery,
                bilateral cyst removal, large cysts or open surgery.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pain Management at Home
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take medicines exactly as prescribed.</li>
                <li>Do not wait for pain to become severe before taking a dose.</li>
                <li>
                  Use warm (not hot) compresses on the lower abdomen if your
                  doctor approves.
                </li>
                <li>Support your abdomen with a pillow when you cough or sit up.</li>
                <li>Walk regularly, since movement relieves gas pain.</li>
                <li>
                  Avoid unprescribed painkillers, especially if you are on other
                  medicines.
                </li>
                <li>
                  Call your doctor if pain increases after the first few days
                  instead of improving.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Wound Care
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Keep the incisions clean and dry.</li>
                <li>
                  Follow your surgeon&apos;s instructions on when you can
                  shower. Many women can shower within a day or two, but confirm
                  with your doctor.
                </li>
                <li>Pat the area dry. Do not rub.</li>
                <li>
                  Do not apply creams, powders or home remedies to the wounds
                  unless advised.
                </li>
                <li>Wear loose, comfortable clothing.</li>
                <li>Do not pick at dressings or strips.</li>
                <li>
                  Avoid swimming and soaking in a bath until the wounds are
                  fully healed.
                </li>
                <li>
                  If sutures need removal, attend the follow-up visit.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet After Ovarian Cyst Surgery
              </h2>


              <p className="mb-4 text-gray-700">
                Good nutrition helps healing and prevents constipation.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Eat
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Start light:</strong> soups, dal, khichdi, curd rice,
                  fruit and soft chapatis
                </li>
                <li>
                  <strong>Protein for healing:</strong> eggs, lentils, paneer,
                  curd, milk, fish or chicken as per your preference
                </li>
                <li>
                  <strong>Fibre to prevent constipation:</strong> vegetables,
                  fruit, oats and whole grains
                </li>
                <li>
                  <strong>Iron-rich foods:</strong> leafy greens, beetroot,
                  dates, jaggery and pulses
                </li>
                <li>
                  <strong>Vitamin C foods:</strong> citrus fruit, amla and
                  guava, which help iron absorption and wound healing
                </li>
                <li>
                  <strong>Healthy fats:</strong> nuts, seeds and moderate
                  amounts of oil or ghee
                </li>
                <li>
                  <strong>Plenty of fluids:</strong> water, buttermilk, coconut
                  water and soups
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Limit
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Very oily, spicy or heavy food in the first few days
                </li>
                <li>Excess sugar and processed snacks</li>
                <li>Carbonated drinks if they worsen bloating</li>
                <li>Alcohol, especially while on pain medicines</li>
                <li>Smoking and tobacco, which slow healing</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Preventing Constipation
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Drink enough water</li>
                <li>Eat fibre-rich foods</li>
                <li>Walk daily</li>
                <li>Ask your doctor about a gentle stool softener if needed</li>
                <li>Avoid straining</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Activity and Exercise After Surgery
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Safe Early Activities
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Short, gentle walks several times a day</li>
                <li>Light household tasks</li>
                <li>Deep breathing exercises</li>
                <li>Gentle stretching as comfort allows</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Avoid in the First Few Weeks
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy lifting, such as heavy bags or buckets</li>
                <li>Strenuous exercise, running or intense gym workouts</li>
                <li>Abdominal crunches or twisting movements</li>
                <li>Long, uncomfortable travel without breaks</li>
                <li>
                  Driving while taking strong pain medicines or if you cannot
                  react quickly
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Returning to Normal Routine
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Work:</strong> many women return within about a week
                  for desk jobs, with a longer break for physical work, but your
                  surgeon will advise.
                </li>
                <li>
                  <strong>Exercise:</strong> resume gradually and only when your
                  doctor allows.
                </li>
                <li>
                  <strong>Intercourse:</strong> usually advised to wait until
                  the surgeon says it is safe, often a few weeks.
                </li>
                <li>
                  <strong>Travel:</strong> short trips are often fine after the
                  first week or two, with the surgeon&apos;s permission.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Medicines After Surgery
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pain relief:</strong> as prescribed
                </li>
                <li>
                  <strong>Antibiotics:</strong> only if prescribed
                </li>
                <li>
                  <strong>Iron or vitamin supplements:</strong> if advised
                </li>
                <li>
                  <strong>Hormonal medicines:</strong> your doctor may prescribe
                  them to reduce recurrence, particularly after endometrioma
                  surgery, when you are not planning pregnancy right away
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Do not stop or change medicines without asking your doctor.
              </p>


              <p className="text-gray-700">
                Keep the discharge summary and prescription handy for your
                follow-up visit.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Things You May Notice
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mild pain or soreness around the incisions</li>
                <li>Shoulder or upper-back discomfort for a day or two</li>
                <li>Bloating or gas</li>
                <li>Light vaginal spotting for a few days</li>
                <li>Tiredness for a week or more</li>
                <li>A small, firm lump or bruising around an incision</li>
                <li>A slightly changed menstrual cycle for the first month</li>
                <li>Emotional ups and downs after surgery</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Call Your Doctor or Go to the Hospital
              </h2>


              <p className="mb-4 text-gray-700">
                Contact your surgeon immediately, or go to the nearest hospital,
                if you have:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever or chills</li>
                <li>Severe or increasing abdominal pain</li>
                <li>
                  Heavy vaginal bleeding (soaking a pad in about an hour)
                </li>
                <li>
                  Redness, swelling, pus or foul-smelling discharge at an
                  incision
                </li>
                <li>
                  Persistent vomiting or inability to keep fluids down
                </li>
                <li>
                  Difficulty passing urine or burning with urination
                </li>
                <li>
                  Pain, swelling or redness in one leg, or sudden shortness of
                  breath
                </li>
                <li>Severe dizziness or fainting</li>
                <li>A very swollen, hard abdomen</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Do not wait for your next appointment if any of these occur.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Follow-Up Care
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                First review:
              </h3>
              <p className="mb-4 text-gray-700">
                Usually within about one to two weeks, or as your surgeon
                advises.
              </p>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What happens at follow-up:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wound check</li>
                <li>Discussion of recovery and symptoms</li>
                <li>
                  Histopathology report review, which is the laboratory
                  examination of the removed cyst
                </li>
                <li>Advice on the next steps</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Later follow-up:
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Repeat ultrasound after a few weeks or months, depending on
                  the cyst type
                </li>
                <li>
                  Hormonal treatment or fertility planning where relevant
                </li>
              </ul>


              <p className="text-gray-700">
                Keep a record: carry your surgery notes, reports and scans to
                every visit.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Understanding the Histopathology Report
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The removed cyst is sent to the laboratory for examination.
                </li>
                <li>
                  The report confirms the type of cyst, such as functional,
                  endometrioma, dermoid or cystadenoma.
                </li>
                <li>Most reports show benign (non-cancerous) findings.</li>
                <li>
                  If anything unexpected appears, your doctor will explain the
                  next steps clearly.
                </li>
                <li>Never ignore or skip collecting this report.</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Can an Ovarian Cyst Come Back After Surgery?
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Functional cysts:</strong> can form again with future
                  cycles, but are usually harmless.
                </li>
                <li>
                  <strong>Endometriomas:</strong> have a real recurrence risk,
                  so medical follow-up matters.
                </li>
                <li>
                  <strong>Dermoid cysts:</strong> a completely removed dermoid
                  rarely returns in the same place, but a new one can form,
                  including on the other ovary.
                </li>
                <li>
                  <strong>PCOS-related ovaries:</strong> need ongoing lifestyle
                  and medical management.
                </li>
              </ul>


              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Ways to reduce the chance of recurrence:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Attend follow-up scans as advised</li>
                <li>
                  Take hormonal or other medicines if your doctor prescribes
                  them
                </li>
                <li>Maintain a healthy weight</li>
                <li>
                  Manage underlying conditions such as PCOS or endometriosis
                </li>
                <li>Report new pain or symptoms early</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Fertility and Pregnancy After Cyst Surgery
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Laparoscopic cystectomy aims to preserve healthy ovarian
                  tissue, so many women conceive afterwards.
                </li>
                <li>
                  <strong>Timing:</strong> your doctor will advise when to start
                  trying, often after a short recovery period.
                </li>
                <li>
                  <strong>After endometrioma surgery:</strong> the timing can
                  matter, since early pregnancy attempts are sometimes
                  recommended, but individual plans vary.
                </li>
                <li>
                  <strong>Ovarian reserve:</strong> an AMH test may help assess
                  it, particularly after surgery on both ovaries or for large
                  endometriomas.
                </li>
                <li>
                  <strong>If conception is delayed:</strong> options include
                  ovulation induction, IUI or IVF.
                </li>
              </ul>


              <p className="mt-4 text-gray-700">
                Important: discuss your pregnancy plans before surgery and again
                at follow-up.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Recovery
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Feeling tired, anxious or low after surgery is normal.
                </li>
                <li>Talk openly with your family and your doctor.</li>
                <li>Rest without guilt, and accept help with household work.</li>
                <li>Light walks and sunlight can improve your mood.</li>
                <li>If anxiety or low mood continues, seek support.</li>
                <li>Celebrate your recovery milestones.</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Long-Term Habits for Ovarian Health
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Eat a balanced diet with vegetables, fruit, pulses and whole
                  grains.
                </li>
                <li>Maintain a healthy weight.</li>
                <li>Exercise regularly once you are cleared.</li>
                <li>Sleep 7–8 hours.</li>
                <li>Manage stress.</li>
                <li>Avoid smoking and limit alcohol.</li>
                <li>Track your menstrual cycle and note any changes.</li>
                <li>Do not ignore persistent pelvic pain.</li>
                <li>Keep all follow-up appointments.</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Recovery
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> I must stay in bed for weeks.
                  <br />
                  <strong>Fact:</strong> gentle walking helps recovery and is
                  encouraged.
                </li>
                <li>
                  <strong>Myth:</strong> surgery means I cannot have children.
                  <br />
                  <strong>Fact:</strong> laparoscopic cystectomy aims to preserve
                  fertility.
                </li>
                <li>
                  <strong>Myth:</strong> the cyst can never return.
                  <br />
                  <strong>Fact:</strong> some cysts can recur, so follow-up
                  matters.
                </li>
                <li>
                  <strong>Myth:</strong> I do not need a follow-up if I feel
                  fine.
                  <br />
                  <strong>Fact:</strong> reports and scans still need review.
                </li>
                <li>
                  <strong>Myth:</strong> special foods will speed up healing
                  dramatically.
                  <br />
                  <strong>Fact:</strong> a balanced diet, hydration and rest are
                  what matter.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Follow-Up or Consultation Today
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
