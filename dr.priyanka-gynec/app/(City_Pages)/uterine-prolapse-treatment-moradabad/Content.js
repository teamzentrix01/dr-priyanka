import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function UterineProlapseMoradabad() {
  const faqs = [
    {
      q: "What is the best treatment for uterine prolapse?",
      a: "There is no single best treatment for every woman. Mild prolapse may be managed with pelvic floor exercises or a pessary, while symptomatic or advanced prolapse may require surgery. Treatment depends on the individual case.",
    },
    {
      q: "Can uterine prolapse be treated without surgery?",
      a: "Yes. Depending on the severity, non-surgical options such as pelvic floor exercises, a vaginal pessary, and lifestyle measures may help manage symptoms.",
    },
    {
      q: "Is uterine prolapse completely curable?",
      a: "Prolapse can often be effectively managed, and surgery can restore pelvic support in appropriate cases. However, recurrence is possible, so follow-up and appropriate postoperative care are important.",
    },
    {
      q: "Can a prolapsed uterus be treated without removing the uterus?",
      a: "In selected women, uterus-preserving procedures may be considered. Whether this is possible depends on the type and severity of prolapse and the patient's individual circumstances.",
    },
    {
      q: "What is laparoscopic sacrocolpopexy?",
      a: "Laparoscopic sacrocolpopexy is a minimally invasive surgical procedure used to restore support to prolapsed pelvic structures. A surgical mesh may be used as part of the repair.",
    },
    {
      q: "Is laparoscopic surgery suitable for every woman with prolapse?",
      a: "No. The choice of surgical approach depends on the patient's anatomy, type and severity of prolapse, previous surgeries, medical conditions, and other factors.",
    },
    {
      q: "Can uterine prolapse cause urinary problems?",
      a: "Yes. Pelvic organ prolapse can sometimes affect bladder function and may cause urinary leakage, difficulty emptying the bladder, or other urinary symptoms.",
    },
    {
      q: "Can uterine prolapse cause constipation?",
      a: "Yes. Prolapse involving the rectum or other pelvic structures can contribute to difficulty passing stool or a feeling of incomplete bowel emptying.",
    },
    {
      q: "Can uterine prolapse happen after childbirth?",
      a: "Yes. Pregnancy and childbirth can weaken or stretch pelvic floor support structures, increasing the risk of pelvic organ prolapse.",
    },
    {
      q: "Can uterine prolapse affect sexual activity?",
      a: "It can. Some women experience discomfort, pressure, or other symptoms during sexual intercourse. Treatment may help address symptoms depending on the underlying condition.",
    },
    {
      q: "How long does recovery take after prolapse surgery?",
      a: "Recovery depends on the type of operation and the patient's individual health. Your surgeon will provide specific instructions regarding work, exercise, lifting, and sexual activity.",
    },
    {
      q: "When should I see a doctor for uterine prolapse?",
      a: "You should consider a gynaecological consultation if you notice a vaginal bulge, pelvic pressure, urinary or bowel difficulties, or symptoms that interfere with your daily activities.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Uterine Prolapse Treatment in Moradabad – Diagnosis, Treatment & Surgical Care
              </h1>

              <p className="text-gray-700 mb-4">
                Feeling a bulge or pressure in the vagina, difficulty passing urine, lower pelvic discomfort, or a sensation that something is coming down may be signs of uterine prolapse. Although pelvic organ prolapse can affect a woman's daily activities and comfort, effective treatment options are available depending on the severity of the condition.
              </p>

              <p className="text-gray-700">
                If you are searching for uterine prolapse treatment in Moradabad, Dr. Priyanka Pachauri provides gynaecological consultation and treatment planning for women experiencing uterine prolapse and other pelvic floor problems.
              </p>
            </div>

            {/* Section 2 — What Is Uterine Prolapse */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Uterine Prolapse?
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine prolapse occurs when the muscles, ligaments, and connective tissues supporting the uterus become weakened, allowing the uterus to move downward into the vagina.
              </p>

              <p className="text-gray-700 mb-4">
                Uterine prolapse is one form of pelvic organ prolapse. Other pelvic organs can also be affected, including:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Bladder – cystocele</li>
                <li>Rectum – rectocele</li>
                <li>Top of the vagina – vaginal vault prolapse</li>
              </ul>

              <p className="text-gray-700">
                The condition can range from mild prolapse with few symptoms to advanced prolapse where the uterus or vaginal tissue reaches or extends outside the vaginal opening. Because different pelvic organs can be involved at the same time, a proper gynaecological examination is important before deciding on treatment.
              </p>
            </div>

            {/* Section 3 — Symptoms of Uterine Prolapse */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Symptoms of Uterine Prolapse
              </h2>

              <p className="text-gray-700 mb-4">
                The symptoms of uterine prolapse can vary according to the severity and type of prolapse.
              </p>

              <p className="text-gray-700 mb-4">
                Common symptoms include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Feeling of pressure or heaviness in the pelvis</li>
                <li>A sensation that something is coming down or out of the vagina</li>
                <li>A bulge that can be felt or seen near the vaginal opening</li>
                <li>Lower backache or pelvic discomfort</li>
                <li>Difficulty starting urination</li>
                <li>Feeling that the bladder has not completely emptied</li>
                <li>Urinary leakage</li>
                <li>Frequent urinary symptoms</li>
                <li>Difficulty passing stool</li>
                <li>Constipation or straining</li>
                <li>Discomfort during sexual intercourse</li>
                <li>Vaginal irritation or discomfort</li>
              </ul>

              <p className="text-gray-700">
                Some women notice that symptoms become worse after prolonged standing, walking, lifting, or physical activity and improve when lying down. If you notice a vaginal bulge or persistent pelvic pressure, a gynaecological examination can help determine whether prolapse is present.
              </p>
            </div>

            {/* Section 4 — What Causes Uterine Prolapse */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Causes Uterine Prolapse?
              </h2>

              <p className="text-gray-700 mb-4">
                Uterine prolapse usually develops because the structures supporting the pelvic organs become stretched or weakened.
              </p>

              <p className="text-gray-700 mb-4">
                Several factors can increase the risk, including:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Pregnancy and Childbirth
                  </h3>
                  <p className="text-gray-700">
                    Pregnancy and vaginal childbirth can place significant stress on the pelvic floor. Multiple deliveries, prolonged labor, or difficult deliveries may increase the risk of pelvic floor weakness.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Age and Menopause
                  </h3>
                  <p className="text-gray-700">
                    Pelvic support tissues can become weaker with age. Reduced estrogen levels after menopause can also affect the tissues supporting the pelvic organs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Chronic Constipation
                  </h3>
                  <p className="text-gray-700">
                    Repeated straining during bowel movements can increase pressure on the pelvic floor over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Chronic Cough
                  </h3>
                  <p className="text-gray-700">
                    Long-term coughing can repeatedly increase pressure inside the abdomen and contribute to pelvic floor stress.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Heavy Lifting
                  </h3>
                  <p className="text-gray-700">
                    Frequent heavy lifting and activities involving repeated straining may increase pressure on weakened pelvic support structures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Increased Body Weight
                  </h3>
                  <p className="text-gray-700">
                    Being overweight can place additional pressure on the pelvic floor.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Previous Pelvic Surgery
                  </h3>
                  <p className="text-gray-700">
                    Previous pelvic surgery can sometimes affect the supporting structures of the pelvic organs.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mt-4">
                Some women can develop prolapse even without having all of these risk factors.
              </p>
            </div>

            {/* Section 5 — Different Stages of Uterine Prolapse */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Different Stages of Uterine Prolapse
              </h2>

              <p className="text-gray-700 mb-4">
                Doctors commonly describe pelvic organ prolapse using a staging system based on how far the affected organ has descended.
              </p>

              <p className="text-gray-700 mb-4">
                In simple terms, prolapse may be described as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li><strong>Mild prolapse:</strong> The uterus has descended but remains well inside the vagina.</li>
                <li><strong>Moderate prolapse:</strong> The uterus has moved closer to the vaginal opening.</li>
                <li><strong>Advanced prolapse:</strong> The uterus or vaginal tissue reaches or extends beyond the vaginal opening.</li>
              </ul>

              <p className="text-gray-700">
                The exact stage should be determined during a clinical examination rather than by symptoms alone.
              </p>
            </div>

            {/* Section 6 — How Is Uterine Prolapse Diagnosed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Uterine Prolapse Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                Diagnosis generally begins with a detailed discussion about symptoms and medical history.
              </p>

              <p className="text-gray-700 mb-4">
                Your gynaecologist may ask about:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Previous pregnancies and deliveries</li>
                <li>Menopausal status</li>
                <li>Urinary symptoms</li>
                <li>Bowel problems</li>
                <li>Pelvic pain or pressure</li>
                <li>Sexual discomfort</li>
                <li>Previous pelvic operations</li>
                <li>Duration and progression of symptoms</li>
              </ul>

              <p className="text-gray-700 mb-4">
                A pelvic examination is usually an important part of diagnosis. The doctor may ask you to cough or bear down during the examination to assess the movement of the pelvic organs.
              </p>

              <p className="text-gray-700">
                Additional investigations may be recommended when clinically required, particularly if there are urinary, bowel, bleeding, or other associated symptoms. The purpose of evaluation is not only to identify uterine prolapse but also to determine whether the bladder, rectum, or other pelvic support structures are involved.
              </p>
            </div>

            {/* Section 7 — Uterine Prolapse Treatment Options */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Uterine Prolapse Treatment Options in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The best uterine prolapse treatment in Moradabad depends on the severity of prolapse, symptoms, age, general health, previous treatment, and personal preferences.
              </p>

              <p className="text-gray-700 mb-4">
                Treatment can be broadly divided into conservative and surgical approaches.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Pelvic Floor Exercises
                  </h3>
                  <p className="text-gray-700">
                    Pelvic floor muscle exercises, commonly known as Kegel exercises, can help strengthen the muscles supporting the pelvic organs. They may be useful for women with mild prolapse or as part of a broader pelvic floor management plan. Correct technique is important. Your doctor or pelvic floor specialist can guide you regarding appropriate exercises. Exercises may improve symptoms, but they do not physically reposition an advanced prolapse.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Vaginal Pessary
                  </h3>
                  <p className="text-gray-700 mb-2">
                    A vaginal pessary is a removable device placed inside the vagina to support the pelvic organs. A pessary may be considered for women who:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Have symptoms but want to avoid surgery</li>
                    <li>Are not currently suitable for surgery</li>
                    <li>Want to delay surgery</li>
                    <li>Prefer a non-surgical treatment option</li>
                  </ul>
                  <p className="text-gray-700">
                    Different types and sizes of pessaries are available. Proper fitting and follow-up are important.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Lifestyle and Pelvic Floor Care
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Lifestyle measures may help reduce pressure on the pelvic floor and manage symptoms. Your doctor may recommend:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Treating chronic constipation</li>
                    <li>Avoiding unnecessary straining</li>
                    <li>Managing chronic cough</li>
                    <li>Maintaining a healthy body weight</li>
                    <li>Using correct techniques for lifting</li>
                    <li>Continuing appropriate pelvic floor exercises</li>
                  </ul>
                  <p className="text-gray-700">
                    These measures may be particularly useful alongside other treatment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Vaginal Prolapse Surgery
                  </h3>
                  <p className="text-gray-700">
                    Women with significant symptoms or advanced prolapse may require surgery. The exact operation depends on the organs involved and whether the uterus is to be preserved. One possible approach is vaginal surgery, which may involve removal of the uterus when medically appropriate along with repair of weakened vaginal support structures.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Laparoscopic Hysteropexy
                  </h3>
                  <p className="text-gray-700">
                    Women who wish to preserve their uterus may, in selected cases, be considered for a uterus-preserving procedure such as laparoscopic hysteropexy. The aim is to restore support to the uterus without removing it. Whether this procedure is suitable depends on the patient's age, symptoms, prolapse characteristics, fertility plans, general health, and surgical assessment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Laparoscopic Sacrocolpopexy
                  </h3>
                  <p className="text-gray-700">
                    Laparoscopic sacrocolpopexy is a minimally invasive procedure used to provide support to the vagina and, in selected cases, the uterus depending on the surgical plan. During sacrocolpopexy, a surgical mesh may be used to provide support to the vaginal or pelvic structures by attaching them to strong supporting tissue near the sacrum. The procedure is generally considered for selected women with pelvic organ prolapse. Because mesh-related complications can occur, the benefits, alternatives, and potential risks should be discussed carefully with the surgeon before surgery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Laparoscopic Hysterectomy With Prolapse Repair
                  </h3>
                  <p className="text-gray-700">
                    When removal of the uterus is medically appropriate, a hysterectomy may sometimes be performed using a minimally invasive laparoscopic approach along with pelvic support repair. This may be considered in selected women with uterine prolapse who have completed their family or do not wish to preserve the uterus. A hysterectomy permanently removes the ability to carry a pregnancy, so the decision should be made after discussing alternatives and reproductive plans with your doctor.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 — Uterus-Preserving Prolapse Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Uterus-Preserving Prolapse Treatment
              </h2>

              <p className="text-gray-700 mb-4">
                Not every woman with uterine prolapse needs to have her uterus removed.
              </p>

              <p className="text-gray-700 mb-4">
                For women who want to preserve the uterus, appropriate cases may be evaluated for uterus-preserving treatment.
              </p>

              <p className="text-gray-700 mb-4">
                The decision depends on:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Severity of prolapse</li>
                <li>Uterine health</li>
                <li>Age</li>
                <li>Symptoms</li>
                <li>Previous pregnancies and surgeries</li>
                <li>Future pregnancy plans</li>
                <li>Other pelvic organ problems</li>
                <li>Overall health</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A consultation with a gynaecologist can help you understand whether uterus-preserving treatment is an option in your case.
              </p>
            </div>

            {/* Section 9 — When Is Surgery Recommended */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Is Surgery Recommended for Uterine Prolapse?
              </h2>

              <p className="text-gray-700 mb-4">
                Surgery is not automatically required for every case of prolapse.
              </p>

              <p className="text-gray-700 mb-4">
                It may be considered when:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Symptoms significantly affect daily life</li>
                <li>The prolapse is advanced</li>
                <li>Conservative treatment has not provided adequate relief</li>
                <li>There are associated bladder or bowel problems</li>
                <li>The prolapse is causing significant discomfort</li>
                <li>The patient prefers surgical treatment after understanding the options</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The decision should be individualized after examination and discussion of the expected benefits and risks.
              </p>
            </div>

            {/* Section 10 — What Happens During Laparoscopic Prolapse Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Happens During Laparoscopic Prolapse Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                When laparoscopic surgery is selected, the procedure is generally performed under anesthesia through small abdominal incisions.
              </p>

              <p className="text-gray-700 mb-4">
                The surgeon uses a laparoscopic camera to view the pelvic structures and specialized instruments to perform the planned repair.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the procedure, surgery may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Restoring pelvic support</li>
                <li>Repairing prolapsed structures</li>
                <li>Supporting the vaginal apex</li>
                <li>Preserving or removing the uterus where appropriate</li>
              </ul>

              <p className="text-gray-700">
                The exact procedure and duration vary according to the type and severity of prolapse. Before surgery, your doctor should explain the planned procedure, alternatives, potential complications, expected hospital stay, and recovery.
              </p>
            </div>

            {/* Section 11 — Recovery After Uterine Prolapse Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Uterine Prolapse Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery depends on the procedure performed and the patient's overall health.
              </p>

              <p className="text-gray-700 mb-4">
                After surgery, you may be advised to:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Walk gently as recommended</li>
                <li>Take prescribed medicines</li>
                <li>Keep surgical wounds clean</li>
                <li>Avoid heavy lifting during the advised recovery period</li>
                <li>Avoid strenuous exercise until cleared</li>
                <li>Attend follow-up appointments</li>
                <li>Follow instructions regarding sexual activity and vaginal care</li>
                <li>Prevent constipation and excessive straining</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Do not compare your recovery directly with another patient's recovery. The timeline can vary considerably between different prolapse procedures.
              </p>
            </div>

            {/* Section 12 — Can Uterine Prolapse Be Prevented */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Uterine Prolapse Be Prevented?
              </h2>

              <p className="text-gray-700 mb-4">
                Not every case of prolapse can be prevented, but maintaining pelvic floor health may help reduce risk or manage symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                Helpful measures may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Performing appropriate pelvic floor exercises</li>
                <li>Maintaining a healthy weight</li>
                <li>Avoiding unnecessary heavy lifting</li>
                <li>Treating chronic constipation</li>
                <li>Managing chronic cough</li>
                <li>Avoiding repeated straining</li>
                <li>Seeking medical advice when pelvic symptoms develop</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Women who have recently given birth or are experiencing symptoms around menopause may also benefit from discussing pelvic floor health with their gynaecologist.
              </p>
            </div>

            {/* Section 13 — Uterine Prolapse and Future Pregnancy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Uterine Prolapse and Future Pregnancy
              </h2>

              <p className="text-gray-700">
                Women who are planning another pregnancy should discuss this with their doctor before choosing prolapse surgery. Some treatments are intended to preserve the uterus, while other procedures involve hysterectomy and therefore permanently prevent future pregnancy. Pregnancy after prolapse treatment may require individualized medical planning. If future fertility is important to you, tell your gynaecologist before treatment is selected.
              </p>
            </div>

            {/* Section 14 — Why Consult Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Consult Dr. Priyanka for Uterine Prolapse Treatment in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecological consultation and treatment planning for women with pelvic and reproductive health concerns in Moradabad.
              </p>

              <p className="text-gray-700 mb-4">
                For women experiencing symptoms of uterine prolapse, consultation can help determine:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Whether prolapse is present</li>
                <li>The severity of the condition</li>
                <li>Whether other pelvic organs are involved</li>
                <li>Whether non-surgical treatment may be appropriate</li>
                <li>Whether surgery should be considered</li>
                <li>Whether uterus preservation is possible</li>
                <li>Which surgical approach may be suitable</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The focus is on selecting treatment according to the individual patient's condition rather than using the same treatment for every woman.
              </p>
            </div>

            {/* Section 15 — Book a Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Uterine Prolapse Treatment in Moradabad – Book a Consultation
              </h2>

              <p className="text-gray-700 mb-4">
                If you have symptoms such as a vaginal bulge, pelvic pressure, urinary difficulties, or a feeling that something is coming down, do not assume that these symptoms are simply a normal part of aging or childbirth.
              </p>

              <p className="text-gray-700 mb-4">
                A gynaecological evaluation can help identify the cause and explain available treatment options.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 16 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions About Uterine Prolapse
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}