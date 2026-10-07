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

export default function DoctorForUterusCystMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a uterus cyst in Moradabad?",
      a: "A gynaecologist. Dr. Priyanka Pachauri diagnoses and treats cysts in Moradabad.",
    },
    {
      q: "Is a cyst in the uterus dangerous?",
      a: "Most are benign, but they should be evaluated. Emergency signs need urgent care.",
    },
    {
      q: "Do all cysts need surgery?",
      a: "No. Small, simple cysts are often just monitored.",
    },
    {
      q: "Which test detects a cyst?",
      a: "An ultrasound, sometimes with blood tests or an MRI.",
    },
    {
      q: "Can a cyst go away on its own?",
      a: "Yes, functional cysts often disappear within 1–3 cycles.",
    },
    {
      q: "What is a chocolate cyst?",
      a: "An ovarian cyst filled with old blood, caused by endometriosis.",
    },
    {
      q: "Can I get pregnant with a cyst?",
      a: "Most women with cysts can, and treatment can improve the chances.",
    },
    {
      q: "What is laparoscopic cystectomy?",
      a: "Keyhole surgery that removes the cyst while saving the ovary.",
    },
    {
      q: "When is a cyst an emergency?",
      a: "With sudden severe pain, fever, vomiting or fainting.",
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
                Doctor for Uterus Cyst in Moradabad: Types, Symptoms, Tests &
                Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;Your scan shows a cyst.&quot; Few sentences in a report
                cause more worry. Many women immediately fear the worst: Is it
                cancer? Will I need surgery? Can I still have children?
              </p>

              <p className="mb-4 text-gray-700">
                Please take a breath. Most cysts are not cancer, and many need
                no surgery at all. Many disappear on their own, and even those
                that need treatment can often be removed with keyhole surgery
                that protects the ovary and future fertility.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what a &quot;uterus cyst&quot; really means,
                the types, symptoms, tests and treatment, and how to consult Dr.
                Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Do People Mean by &quot;Uterus Cyst&quot;?
              </h2>

              <p className="mb-4 text-gray-700">
                The phrase is very common but not exact. In most cases, women
                use it for cysts found near or around the uterus. Medically,
                they usually fall into these groups:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ovarian cysts:</strong> by far the most common. The
                  ovaries sit on either side of the uterus, so scan reports and
                  everyday language often blur the two.
                </li>
                <li>
                  <strong>Cervical (Nabothian) cysts:</strong> tiny harmless
                  cysts on the mouth of the uterus.
                </li>
                <li>
                  <strong>Cysts inside the uterine wall:</strong> seen with
                  adenomyosis.
                </li>
                <li>
                  <strong>Endometriomas:</strong> ovarian cysts caused by
                  endometriosis, sometimes called &quot;chocolate cysts&quot;.
                </li>
                <li>
                  <strong>Growths mistaken for cysts:</strong> fibroids and
                  polyps, which are solid rather than fluid-filled.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A proper scan and examination tell you exactly which one you
                have, and that decides the treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Types of Cysts Explained
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Functional Ovarian Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The most common type, linked to the normal monthly cycle.
                </li>
                <li>
                  <strong>Follicular cyst:</strong> the egg sac does not open
                  and keeps filling with fluid.
                </li>
                <li>
                  <strong>Corpus luteum cyst:</strong> the sac reseals after
                  releasing the egg.
                </li>
                <li>
                  Usually harmless, and most vanish within 1–3 cycles.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. PCOS-Related Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Many small follicles line the ovary, giving a
                  &quot;polycystic&quot; look on scan.
                </li>
                <li>
                  Not true single cysts, but a sign of irregular ovulation.
                </li>
                <li>
                  Often comes with irregular periods, acne and weight gain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Endometriomas (&quot;Chocolate Cysts&quot;)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Caused by endometriosis.</li>
                <li>Filled with old, dark blood.</li>
                <li>
                  Can cause severe period pain, pain during intercourse and
                  reduced fertility.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Dermoid Cysts (Mature Teratomas)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Contain tissue such as hair, fat or skin.</li>
                <li>Usually benign but do not go away on their own.</li>
                <li>Can grow large or twist, so they are often removed.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Cystadenomas
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fluid-filled growths on the surface of the ovary.</li>
                <li>Can grow quite large.</li>
                <li>Usually benign, but need monitoring or removal.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Nabothian Cysts (Cervix)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Small, smooth, harmless bumps on the cervix.</li>
                <li>Usually need no treatment.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Adenomyotic Cysts
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small blood-filled spaces inside the uterine wall in
                  adenomyosis.
                </li>
                <li>Cause heavy, painful periods.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Malignant Ovarian Growths (Uncommon)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A small number of ovarian masses are cancerous.</li>
                <li>
                  Risk is higher after menopause, or when a mass looks complex
                  on scan.
                </li>
                <li>Early detection makes a big difference.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Symptoms of a Cyst
              </h2>

              <p className="mb-4 text-gray-700">
                Many cysts cause no symptoms and are found by chance on a scan.
                When symptoms appear, they may include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dull or sharp pain in the lower abdomen or pelvis, often on
                  one side.
                </li>
                <li>
                  Feeling of heaviness or pressure in the pelvis.
                </li>
                <li>Bloating or a swollen lower belly.</li>
                <li>Irregular, delayed or painful periods.</li>
                <li>Pain during intercourse.</li>
                <li>
                  Frequent urination or difficulty emptying the bladder.
                </li>
                <li>Constipation or pain during bowel movements.</li>
                <li>Backache or thigh pain.</li>
                <li>Nausea or a feeling of fullness after small meals.</li>
                <li>Difficulty in getting pregnant.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flag Signs: Emergency Care Needed
              </h2>

              <p className="mb-4 text-gray-700">
                Go to the hospital immediately if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sudden, severe pelvic or abdominal pain.
                </li>
                <li>Pain with fever or vomiting.</li>
                <li>Fainting, dizziness or a fast heartbeat.</li>
                <li>
                  Pain with signs of shock, such as cold, clammy skin.
                </li>
                <li>Severe pain during pregnancy.</li>
                <li>Heavy bleeding along with pain.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                These can mean a ruptured cyst or ovarian torsion (twisting of
                the ovary), which need urgent treatment to save the ovary.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Causes Cysts?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Normal ovulation cycle: functional cysts form as part of a
                  regular cycle.
                </li>
                <li>
                  Hormonal imbalance, including PCOS and thyroid problems.
                </li>
                <li>Endometriosis.</li>
                <li>Pelvic infection.</li>
                <li>
                  Previous ovarian cysts, which raise the chance of new ones.
                </li>
                <li>
                  Fertility medicines that stimulate the ovaries.
                </li>
                <li>
                  Pregnancy, where a corpus luteum cyst is common early on.
                </li>
                <li>Age and family history, for some types.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Often, no single clear cause can be found.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Are Cysts Diagnosed?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: History and Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Details of your periods, pain and other symptoms.
                </li>
                <li>
                  Abdominal and pelvic examination when appropriate.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic or transvaginal ultrasound is the main test.
                </li>
                <li>
                  Shows the size, side, shape and contents of the cyst.
                </li>
                <li>
                  3D/4D ultrasound gives extra detail when needed.
                </li>
                <li>
                  Helps tell simple, fluid-filled cysts from complex ones.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Blood Tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy test to rule out ectopic pregnancy.
                </li>
                <li>Haemoglobin and other basic tests.</li>
                <li>
                  CA-125 in selected cases, mainly in women past menopause or
                  with a suspicious scan (it can also be raised in benign
                  conditions such as endometriosis, so it is interpreted with
                  the scan).
                </li>
                <li>Hormone tests if PCOS is suspected.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Further Imaging If Needed
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>MRI or CT scan for complex cysts.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Laparoscopy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A camera check that also allows treatment in the same sitting.
                </li>
                <li>
                  Used when a cyst is large, painful, persistent or unclear.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Do All Cysts Need Treatment?
              </h2>

              <p className="mb-4 text-gray-700">
                No. The plan depends on the type, size, symptoms, your age and
                your fertility goals.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Often Only Watching Is Needed
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Small (usually under 5 cm), simple, fluid-filled cysts.
                </li>
                <li>No symptoms.</li>
                <li>
                  Usually repeated on ultrasound after 1–3 months to see if it
                  shrinks.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medicines
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Painkillers for discomfort.</li>
                <li>
                  Hormonal treatment to regulate cycles and reduce recurrence in
                  some women.
                </li>
                <li>
                  Treatment of PCOS or thyroid problems where present.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Surgery May Be Advised When
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  The cyst is larger than about 5–7 cm or is growing.
                </li>
                <li>It persists beyond a few cycles.</li>
                <li>It causes ongoing pain or pressure.</li>
                <li>It looks complex or suspicious on scan.</li>
                <li>
                  It is an endometrioma causing pain or affecting fertility.
                </li>
                <li>It is a dermoid or cystadenoma.</li>
                <li>It has twisted or ruptured.</li>
                <li>It is found after menopause.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Laparoscopic Cystectomy: Removing the Cyst, Saving the Ovary
              </h2>

              <p className="mb-4 text-gray-700">
                The cyst is removed through 3 or 4 tiny cuts using a
                high-definition 3D camera. The surgeon peels the cyst away from
                the ovary, preserving healthy ovarian tissue. Done under general
                anaesthesia. Usually takes about 1 hour.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Benefits
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fertility-friendly:</strong> protects the ovary and
                  egg reserve as far as possible.
                </li>
                <li>Smaller cuts and less scarring.</li>
                <li>Less pain than open surgery.</li>
                <li>Shorter stay, often 1–2 days.</li>
                <li>Faster return to daily life.</li>
                <li>Clear, magnified view for precision.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Limits
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Not suitable for every case, such as suspected cancer needing
                  a different approach.
                </li>
                <li>
                  Rarely, a switch to open surgery is needed for safety.
                </li>
                <li>
                  New cysts can form in the future in some women.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cysts and Fertility
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Most simple cysts do not affect fertility.
                </li>
                <li>
                  PCOS can reduce ovulation but usually responds well to
                  treatment.
                </li>
                <li>
                  Endometriomas may reduce egg reserve, so timing and treatment
                  need careful planning.
                </li>
                <li>
                  Surgery can sometimes lower egg reserve slightly, so the
                  technique and expertise matter.
                </li>
                <li>
                  If you are trying to conceive, tell your doctor early.
                </li>
                <li>
                  Options range from ovulation induction and IUI to IVF where
                  required.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cysts in Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cysts found early in pregnancy are often a normal corpus
                  luteum cyst that disappears by itself.
                </li>
                <li>
                  Larger or complex cysts are monitored with scans.
                </li>
                <li>
                  Surgery during pregnancy is only done when necessary and is
                  usually planned for the second trimester.
                </li>
                <li>
                  Sudden severe pain in pregnancy needs urgent care.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Cysts After Menopause
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cysts are less common after menopause but need closer
                  attention.
                </li>
                <li>
                  Even simple cysts should be followed up carefully.
                </li>
                <li>
                  Persistent or complex cysts are evaluated with scans and blood
                  tests, and often removed.
                </li>
                <li>
                  Do not ignore bloating, pelvic pain or feeling full quickly
                  after menopause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Cyst Surgery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Hospital
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain relief and a light meal after recovery from anaesthesia.
                </li>
                <li>
                  You are helped to walk on the same or next day.
                </li>
                <li>Discharge is usually in 1–2 days.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                At Home
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rest well for the first few days.</li>
                <li>Walk short distances every day.</li>
                <li>Keep wounds clean and dry.</li>
                <li>
                  Eat fibre-rich food and drink plenty of water.
                </li>
                <li>Take medicines exactly as prescribed.</li>
                <li>
                  Avoid heavy lifting for about 2–4 weeks, as advised.
                </li>
                <li>Return to desk work in about 1 week for most patients.</li>
                <li>
                  Avoid intercourse until your doctor confirms healing.
                </li>
                <li>
                  Attend the follow-up visit and collect the report of the
                  removed cyst.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Call Your Doctor If You Have
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever or chills.</li>
                <li>Heavy bleeding.</li>
                <li>Severe or increasing pain.</li>
                <li>Redness, swelling or pus at a wound.</li>
                <li>Swelling or pain in one leg.</li>
                <li>Chest pain or breathlessness.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Tips to Reduce the Chance of New Cysts
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Maintain a healthy weight.</li>
                <li>
                  Eat balanced meals with whole grains, vegetables, fruit, dal
                  and healthy fats.
                </li>
                <li>
                  Exercise regularly, about 30 minutes on most days.
                </li>
                <li>Manage stress and sleep 7–8 hours.</li>
                <li>Treat PCOS or thyroid problems as advised.</li>
                <li>
                  Keep regular follow-ups if you have a history of cysts.
                </li>
                <li>Avoid tobacco.</li>
                <li>Do not ignore new pain or bloating.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Cysts
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> A cyst always means cancer.{" "}
                  <strong>Fact:</strong> Most cysts are benign.
                </li>
                <li>
                  <strong>Myth:</strong> Every cyst needs surgery.{" "}
                  <strong>Fact:</strong> Many are watched and vanish on their
                  own.
                </li>
                <li>
                  <strong>Myth:</strong> Removing a cyst means removing the
                  ovary or uterus. <strong>Fact:</strong> Cystectomy is designed
                  to save the ovary.
                </li>
                <li>
                  <strong>Myth:</strong> A woman with a cyst cannot get
                  pregnant. <strong>Fact:</strong> Most women with cysts can
                  conceive.
                </li>
                <li>
                  <strong>Myth:</strong> Herbal remedies dissolve all cysts.{" "}
                  <strong>Fact:</strong> Unproven remedies waste time and can
                  delay proper care.
                </li>
                <li>
                  <strong>Myth:</strong> No pain means no problem.{" "}
                  <strong>Fact:</strong> Some cysts are silent but still need
                  follow-up.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your symptoms and
                  worries.
                </li>
                <li>
                  A review of your scan report and previous tests.
                </li>
                <li>An ultrasound if needed.</li>
                <li>
                  A clear explanation of the type of cyst and what it means.
                </li>
                <li>
                  A plan: watch, medicines or surgery, with alternatives
                  discussed openly.
                </li>
                <li>Time to ask any question.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Please bring your previous ultrasound reports and images, blood
                tests and prescriptions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation with Dr. Priyanka Pachauri
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
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

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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
