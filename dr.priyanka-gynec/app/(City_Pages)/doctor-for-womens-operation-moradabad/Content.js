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

export default function DoctorForWomensOperationMoradabad() {
  const faqs = [
    {
      q: "Which doctor should I see for a women's operation in Moradabad?",
      a: "A gynaecologist trained in laparoscopy. Dr. Priyanka Pachauri offers keyhole and hysteroscopic surgery in Moradabad.",
    },
    {
      q: "What is laparoscopic surgery?",
      a: "Surgery through tiny cuts using a camera, with less pain and faster recovery.",
    },
    {
      q: "Does every gynaecological problem need an operation?",
      a: "No. Many are treated with medicines or monitoring first.",
    },
    {
      q: "Which operations preserve fertility?",
      a: "Hysteroscopy, cystectomy, myomectomy and endometriosis excision are designed to.",
    },
    {
      q: "How long is the hospital stay?",
      a: "Usually 1–2 days for most keyhole operations.",
    },
    {
      q: "Is surgery painful?",
      a: "You are asleep during surgery, and pain afterwards is managed with medicines.",
    },
    {
      q: "When can I return to work?",
      a: "Often within 1–3 weeks, depending on the operation.",
    },
    {
      q: "When can I resume married life?",
      a: "Usually after 4–8 weeks, once your doctor confirms healing.",
    },
    {
      q: "Can I take a second opinion?",
      a: "Yes, and it is encouraged for major operations.",
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
                Doctor for Women&apos;s Operation in Moradabad: Types of
                Surgery, Safety & Recovery
              </h1>

              <p className="mb-4 text-gray-700">
                Hearing that you need an operation can be frightening. Questions
                come quickly: Is surgery really needed? Is there another way?
                Will it hurt? How long before I can return to my family, my work
                and my routine?
              </p>

              <p className="mb-4 text-gray-700">
                The reassuring truth is that modern gynaecological surgery is
                very different from the past. Many operations that once needed a
                large cut and a week in hospital are now done through tiny
                keyhole cuts or with no cut at all, with a much quicker
                recovery.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains the common women&apos;s operations, when
                they are needed, how to prepare, what recovery looks like and
                how to consult Dr. Priyanka Pachauri in Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is a &quot;Women&apos;s Operation&quot;?
              </h2>

              <p className="mb-4 text-gray-700">
                The phrase covers surgeries on the female reproductive system.
                These include operations on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The uterus (womb).</li>
                <li>The ovaries and fallopian tubes.</li>
                <li>The cervix and vagina.</li>
                <li>
                  The pelvic floor, which holds these organs in place.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                A gynaecologist who is trained in laparoscopy (keyhole surgery)
                and hysteroscopy can treat most of these conditions with
                minimally invasive methods.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Three Ways Surgery Can Be Done
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Hysteroscopy (no cuts)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A thin camera passes through the vagina into the uterus.
                </li>
                <li>
                  Used to look inside the uterus and treat problems there.
                </li>
                <li>Usually a short procedure with quick recovery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Laparoscopy (keyhole surgery)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A camera and fine instruments enter through 3 or 4 tiny cuts
                  in the belly.
                </li>
                <li>
                  The surgeon works while watching a magnified 3D screen.
                </li>
                <li>Less pain and a faster return to normal life.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Open surgery
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A larger cut in the lower belly.</li>
                <li>
                  Needed in some complex cases, such as very large growths or
                  certain cancers.
                </li>
                <li>Recovery takes longer.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                The right method depends on your condition, and your surgeon
                will explain the choice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Women&apos;s Operations
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Diagnostic Hysteroscopy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A camera check of the inside of the uterus.
                </li>
                <li>
                  Used for abnormal bleeding, repeated miscarriage, infertility
                  or an unclear scan.
                </li>
                <li>Often done as a day-care procedure.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Hysteroscopic Polypectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes uterine polyps without any cut.
                </li>
                <li>
                  Polyps can cause irregular bleeding and reduce fertility.
                </li>
                <li>Quick procedure with a short recovery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Laparoscopic Ovarian Cystectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes ovarian cysts while preserving the ovary.
                </li>
                <li>
                  Advised for large, persistent, painful or suspicious cysts.
                </li>
                <li>Helps protect fertility.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Laparoscopic Myomectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes uterine fibroids while keeping the uterus.
                </li>
                <li>
                  Suitable for women who want to preserve fertility or the womb.
                </li>
                <li>Relieves heavy bleeding, pain and pressure.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Laparoscopic Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes the uterus when other treatments have not worked or
                  are not suitable.
                </li>
                <li>
                  Used for large fibroids, uncontrolled bleeding, adenomyosis,
                  prolapse or cancer.
                </li>
                <li>
                  Keyhole surgery usually means a shorter hospital stay and
                  faster recovery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Endometriosis Surgery
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Removes endometriosis deposits and scar tissue by laparoscopy.
                </li>
                <li>Relieves pelvic pain and can improve fertility.</li>
                <li>Done with a magnified 3D view for precision.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Sacrocolpopexy (Prolapse Repair)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Repairs uterine or vaginal vault prolapse using keyhole
                  surgery.
                </li>
                <li>Restores support to the pelvic organs.</li>
                <li>
                  Helps with heaviness, urinary problems and discomfort.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Laparoscopic Sterilization
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Permanent family planning by blocking the fallopian tubes.
                </li>
                <li>A short day-care procedure through tiny cuts.</li>
                <li>
                  Suitable only for women who are sure they do not want more
                  children.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Tubal Surgery and Adhesion Removal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Treats blocked tubes or pelvic adhesions in selected cases.
                </li>
                <li>May improve chances of natural conception.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Other Procedures
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Dilatation and curettage (D&C):</strong> removes
                  tissue from the uterus for diagnosis or treatment.
                </li>
                <li>Cervical procedures for abnormal cells.</li>
                <li>
                  Treatment of ectopic pregnancy by keyhole surgery in stable
                  patients.
                </li>
                <li>
                  Caesarean section for delivery, when medically needed.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Is an Operation Really Needed?
              </h2>

              <p className="mb-4 text-gray-700">
                Surgery is usually advised when:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Medicines have not worked for heavy bleeding, pain or growths.
                </li>
                <li>
                  A growth is large, growing fast or looks suspicious on a scan.
                </li>
                <li>
                  Symptoms affect daily life, such as constant pain, anaemia or
                  pressure.
                </li>
                <li>
                  Fertility is affected by a treatable structural problem.
                </li>
                <li>
                  Prolapse is causing discomfort that exercise or devices cannot
                  fix.
                </li>
                <li>
                  A diagnosis is needed and a scan cannot give it.
                </li>
                <li>
                  An emergency arises, such as a twisted cyst or ectopic
                  pregnancy.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Many conditions are first treated with medicines or monitoring.
                Surgery is not the first step for everyone.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Agreeing to Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                A good doctor welcomes these questions.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Why is surgery needed in my case?</li>
                <li>
                  Are there alternatives, such as medicines or waiting?
                </li>
                <li>
                  Is a keyhole or hysteroscopic method possible?
                </li>
                <li>Will this affect my ability to have children?</li>
                <li>What are the risks and expected results?</li>
                <li>
                  How long will I stay in hospital and how long is recovery?
                </li>
                <li>What will the total cost be, and what does it include?</li>
                <li>May I take a second opinion?</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A second opinion is always reasonable, especially for major
                operations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Benefits of Keyhole (Laparoscopic) Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Smaller cuts and minimal scarring.</li>
                <li>Less pain after surgery.</li>
                <li>
                  Shorter hospital stay, often 1–2 days.
                </li>
                <li>Faster return to daily life.</li>
                <li>Lower risk of wound infection.</li>
                <li>Less blood loss in most cases.</li>
                <li>Clear, magnified 3D view for the surgeon.</li>
                <li>
                  Better outcomes for fertility-sparing procedures.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Limits
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Not suitable for every patient or every condition.
                </li>
                <li>
                  Occasionally a switch to open surgery is needed for safety.
                </li>
                <li>It needs an experienced laparoscopic surgeon.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Risks to Know About
              </h2>

              <p className="mb-4 text-gray-700">
                All surgery has some risk. For gynaecological operations,
                possible risks include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding.</li>
                <li>Infection.</li>
                <li>
                  Injury to nearby organs such as the bladder or bowel
                  (uncommon).
                </li>
                <li>Blood clots in the legs.</li>
                <li>Reaction to anaesthesia.</li>
                <li>Scar tissue formation.</li>
                <li>Need for further treatment in some cases.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A careful evaluation, an experienced surgeon and good aftercare
                reduce these risks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your Operation
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Before the Day
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complete all tests advised by your doctor: blood tests,
                  ultrasound, ECG or others.
                </li>
                <li>Correct anaemia so recovery is smoother.</li>
                <li>
                  Share your medical history, allergies and current medicines.
                </li>
                <li>
                  Ask about stopping blood thinners or other medicines.
                </li>
                <li>Stop smoking and tobacco to help wound healing.</li>
                <li>Follow fasting instructions exactly.</li>
                <li>Arrange help at home for the first few weeks.</li>
                <li>
                  Pack a hospital bag: reports, comfortable loose clothes,
                  sanitary pads and toiletries.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                On the Day
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bathe and keep the belly clean.</li>
                <li>Remove jewellery, nail polish and contact lenses.</li>
                <li>Bring your consent papers and ID.</li>
                <li>Keep a family member with you.</li>
                <li>
                  Stay calm, and share any last worries with your doctor.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens During Surgery
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Anaesthesia:</strong> general anaesthesia for most
                  keyhole procedures, or spinal for some.
                </li>
                <li>
                  <strong>Positioning and cleaning:</strong> you are prepared in
                  a sterile theatre.
                </li>
                <li>
                  <strong>Surgery:</strong> the operation is done through tiny
                  cuts or through the natural passage.
                </li>
                <li>
                  <strong>Closing:</strong> small stitches are placed, often
                  dissolvable.
                </li>
                <li>
                  <strong>Recovery room:</strong> the team monitors your
                  breathing, pulse and comfort.
                </li>
                <li>
                  <strong>Return to the ward:</strong> you are reunited with
                  your family once you are stable.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery After Surgery
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Hospital
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pain relief and medicines are given as needed.</li>
                <li>
                  You are helped to sit up and walk on the same or next day.
                </li>
                <li>Light food starts when you are comfortable.</li>
                <li>
                  Wounds, bleeding and vital signs are checked regularly.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                At Home
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Rest well and accept help with chores.</li>
                <li>
                  Walk short distances daily to help circulation and prevent
                  clots.
                </li>
                <li>Keep wounds clean and dry.</li>
                <li>
                  Eat fibre-rich food and drink plenty of water to avoid
                  constipation.
                </li>
                <li>Take medicines exactly as prescribed.</li>
                <li>
                  Avoid heavy lifting and strenuous exercise until your doctor
                  allows.
                </li>
                <li>
                  Avoid intercourse until your doctor confirms healing.
                </li>
                <li>
                  Expect mild spotting for a few days to weeks, depending on the
                  surgery.
                </li>
                <li>Attend every follow-up visit, and collect your reports.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Typical Timelines (Approximate, Varies by Surgery)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hysteroscopy:</strong> return to routine within a day
                  or two.
                </li>
                <li>
                  <strong>Laparoscopic cystectomy or sterilization:</strong>{" "}
                  about 1 week.
                </li>
                <li>
                  <strong>Laparoscopic myomectomy or hysterectomy:</strong>{" "}
                  about 2–6 weeks.
                </li>
                <li>
                  <strong>Prolapse repair:</strong> about 4–6 weeks, with longer
                  restrictions on heavy lifting.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Your doctor will give a timeline suited to your operation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs After Surgery
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor promptly if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fever or chills.</li>
                <li>
                  Heavy bleeding, or soaking a pad in an hour.
                </li>
                <li>Foul-smelling discharge.</li>
                <li>Severe or increasing pain.</li>
                <li>
                  Redness, swelling or pus at a wound.
                </li>
                <li>Swelling or pain in one leg.</li>
                <li>Chest pain or breathlessness.</li>
                <li>Difficulty passing urine or stools.</li>
                <li>Persistent vomiting.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Will the Operation Affect My Fertility, Hormones or Married
                Life?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fertility:</strong> fertility-preserving surgery, such
                  as cystectomy, myomectomy and hysteroscopy, is designed to
                  protect your chances of pregnancy. Hysterectomy and
                  sterilization end fertility.
                </li>
                <li>
                  <strong>Hormones:</strong> if your ovaries are kept, your
                  hormone levels usually continue as before. Removing both
                  ovaries causes menopause.
                </li>
                <li>
                  <strong>Married life:</strong> most women return to normal
                  intimacy after healing, usually 4–8 weeks, depending on the
                  surgery. Many feel better because pain and bleeding are gone.
                </li>
                <li>
                  <strong>Emotional health:</strong> it is normal to feel
                  anxious before or low after surgery, so talk openly with your
                  doctor and family.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Dr. Priyanka Pachauri for Women&apos;s Operations in
                Moradabad?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad known for
                empathetic, listening-first care. The clinic combines warm
                patient support with advanced 3D laparoscopic technology.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Honest advice:</strong> surgery is recommended only
                  when it is needed.
                </li>
                <li>
                  <strong>Advanced 3D laparoscopy:</strong> high-definition
                  keyhole surgery for many conditions.
                </li>
                <li>
                  <strong>Hysteroscopy services:</strong> scar-free evaluation
                  and treatment inside the uterus.
                </li>
                <li>
                  <strong>Fertility-preserving approach:</strong> operations are
                  planned with your future in mind.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> 3D and 4D ultrasound for
                  accurate diagnosis before surgery.
                </li>
                <li>
                  <strong>Complete care under one roof:</strong> diagnosis,
                  surgery and follow-up with the same team.
                </li>
                <li>
                  <strong>Wide surgical range:</strong> cysts, fibroids,
                  endometriosis, prolapse, hysterectomy and sterilization.
                </li>
                <li>
                  <strong>Second-opinion friendly:</strong> you are welcome to
                  ask questions and take your time.
                </li>
                <li>
                  <strong>Location:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad.
                </li>
                <li>
                  <strong>Easy booking:</strong> call, WhatsApp or email.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Women&apos;s Operations
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Every gynaecological problem needs
                  surgery. <strong>Fact:</strong> Many are managed with
                  medicines or monitoring.
                </li>
                <li>
                  <strong>Myth:</strong> Surgery makes a woman weak.{" "}
                  <strong>Fact:</strong> Most women feel stronger once the
                  problem is solved.
                </li>
                <li>
                  <strong>Myth:</strong> Keyhole surgery is not a real
                  operation. <strong>Fact:</strong> It is a full surgery done
                  through small cuts, with less pain and quicker recovery.
                </li>
                <li>
                  <strong>Myth:</strong> Removing a fibroid or cyst means
                  removing the uterus or ovary. <strong>Fact:</strong>{" "}
                  Myomectomy and cystectomy are designed to preserve them.
                </li>
                <li>
                  <strong>Myth:</strong> You cannot have a baby after any
                  gynaecological surgery. <strong>Fact:</strong> Many women
                  conceive after fertility-preserving operations.
                </li>
                <li>
                  <strong>Myth:</strong> Delaying surgery is always safe.{" "}
                  <strong>Fact:</strong> Some conditions worsen with time, so
                  timely advice matters.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your Surgical Consultation
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A private, respectful conversation about your symptoms and
                  worries.
                </li>
                <li>
                  A review of your scans, reports and earlier treatment.
                </li>
                <li>
                  A clear explanation of the diagnosis and whether surgery is
                  needed.
                </li>
                <li>
                  A discussion of alternatives, risks, recovery and cost.
                </li>
                <li>
                  Time to decide comfortably, with family involved if you wish.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Consultation with Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Whether you have been advised an operation or simply want a
                second opinion, we will explain your options clearly and kindly.
              </p>

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
