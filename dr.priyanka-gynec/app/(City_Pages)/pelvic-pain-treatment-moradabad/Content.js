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
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PelvicPainMoradabad() {
  const faqs = [
    {
      q: "What are the most common causes of pelvic pain in women?",
      a: "Common causes include endometriosis, ovarian cysts, pelvic inflammatory disease, fibroids, and urinary tract infections.",
    },
    {
      q: "When should chronic pelvic pain be evaluated by a doctor?",
      a: "Pain lasting six months or longer, or pain that disrupts daily activities, should always be evaluated by a Gynaecologist.",
    },
    {
      q: "Can pelvic pain be a sign of an emergency?",
      a: "Yes, sudden severe pain, especially with fever, fainting, or heavy bleeding, may indicate a medical emergency requiring immediate attention.",
    },
    {
      q: "Is laparoscopic surgery used to treat pelvic pain?",
      a: "Yes, laparoscopic surgery is commonly used to diagnose and treat conditions like endometriosis, ovarian cysts, and fibroids causing pelvic pain.",
    },
    {
      q: "Can pelvic inflammatory disease be cured completely?",
      a: "Yes, with prompt antibiotic treatment, PID can be effectively treated, though delayed treatment may lead to complications.",
    },
    {
      q: "Is pelvic pain always related to the reproductive organs?",
      a: "No, pelvic pain can also arise from the urinary tract, digestive system, or pelvic floor muscles.",
    },
    {
      q: "Does endometriosis always require surgery?",
      a: "Not always; treatment depends on symptom severity and may include hormonal therapy, with surgery reserved for more significant cases.",
    },
    {
      q: "How can I book a consultation for pelvic pain treatment in Moradabad?",
      a: "You can call or WhatsApp the clinic directly using the contact details above to schedule a consultation and evaluation.",
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
                Pelvic Pain Treatment in Moradabad – Expert Care by Dr. Priyanka Gynaec
              </h1>

              <p className="text-gray-700 mb-4">
                Pelvic pain is one of the most common yet often overlooked health concerns among women, ranging from mild, occasional discomfort to severe, persistent pain that disrupts daily life. Because pelvic pain can stem from many different causes, ranging from the reproductive organs to the digestive or urinary system, accurate diagnosis is essential for effective treatment. Dr. Priyanka Gynaec offers expert pelvic pain treatment in Moradabad, combining detailed diagnostic evaluation with advanced treatment options to help women find lasting relief and understand what is truly causing their discomfort.
              </p>

              <p className="text-gray-700">
                This detailed guide explains the possible causes of pelvic pain, when it should be evaluated, how it is diagnosed, and the treatment options available in Moradabad.
              </p>
            </div>

            {/* Section 2 — What Is Pelvic Pain? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Pelvic Pain?
              </h2>

              <p className="text-gray-700 mb-4">
                Pelvic pain refers to discomfort or pain felt in the lower abdomen, below the belly button, between the hip bones. It can be sharp, dull, constant, or intermittent, and may occur on one side or both sides of the pelvis. Pelvic pain is generally classified into two categories:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Acute Pelvic Pain:</strong> Sudden, severe pain that comes on quickly and often requires prompt medical attention.</li>
                <li><strong>Chronic Pelvic Pain:</strong> Persistent pain lasting six months or longer, which may be constant or come and go, often requiring a more detailed evaluation to identify the underlying cause.</li>
              </ul>

              <p className="text-gray-700">
                Because the pelvic region houses the reproductive organs, bladder, and parts of the digestive system, pelvic pain can originate from a wide range of sources, making a thorough evaluation essential for proper treatment.
              </p>
            </div>

            {/* Section 3 — Common Causes of Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Common Causes of Pelvic Pain
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gynaecological Causes
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Endometriosis:</strong> A condition where tissue similar to the uterine lining grows outside the uterus, often causing chronic, severe pelvic pain, particularly during periods.</li>
                <li><strong>Ovarian Cysts:</strong> Fluid-filled sacs on the ovaries that can cause pain, especially if they rupture or twist.</li>
                <li><strong>Pelvic Inflammatory Disease (PID):</strong> An infection of the reproductive organs, often caused by untreated sexually transmitted infections, leading to pain and, if untreated, potential fertility complications.</li>
                <li><strong>Uterine Fibroids:</strong> Non-cancerous growths in the uterus that can cause pelvic pressure and pain, particularly if they are large.</li>
                <li><strong>Adenomyosis:</strong> A condition where the uterine lining grows into the muscular wall of the uterus, causing pain and heavy periods.</li>
                <li><strong>Ovarian Torsion:</strong> A medical emergency where the ovary twists on its supporting ligaments, cutting off blood supply and causing sudden, severe pain.</li>
                <li><strong>Ectopic Pregnancy:</strong> A pregnancy that implants outside the uterus, most commonly in the fallopian tube, which can cause severe pain and requires immediate medical attention.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Non-Gynaecological Causes
              </h3>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Urinary Tract Infections:</strong> Infections of the bladder or urinary tract can cause pelvic discomfort along with urinary symptoms.</li>
                <li><strong>Irritable Bowel Syndrome (IBS):</strong> A digestive condition that can cause pelvic and lower abdominal pain, often linked to bowel habits.</li>
                <li><strong>Musculoskeletal Issues:</strong> Pelvic floor muscle tension or strain can also contribute to chronic pelvic discomfort.</li>
                <li><strong>Interstitial Cystitis:</strong> A chronic bladder condition causing pelvic pain and urinary urgency.</li>
              </ul>

              <p className="text-gray-700">
                Given this wide range of potential causes, a comprehensive evaluation by an experienced Gynaecologist is essential to identify the true source of the pain and guide appropriate treatment.
              </p>
            </div>

            {/* Section 4 — Warning Signs That Require Immediate Medical Attention */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs That Require Immediate Medical Attention
              </h2>

              <p className="text-gray-700 mb-4">
                While chronic pelvic pain often warrants a scheduled evaluation, certain symptoms require urgent medical care:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Sudden, severe pelvic pain, especially on one side</li>
                <li>Pain accompanied by fever or chills</li>
                <li>Heavy vaginal bleeding along with pain</li>
                <li>Pain accompanied by fainting, dizziness, or feeling unwell</li>
                <li>Pain during pregnancy, particularly in early pregnancy</li>
                <li>Severe pain that comes on suddenly and worsens rapidly</li>
              </ul>

              <p className="text-gray-700">
                These symptoms may indicate conditions such as ovarian torsion, ectopic pregnancy, or a ruptured ovarian cyst, all of which require prompt medical evaluation.
              </p>
            </div>

            {/* Section 5 — How Is Pelvic Pain Diagnosed? */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Pelvic Pain Diagnosed?
              </h2>

              <p className="text-gray-700 mb-4">
                At Dr. Priyanka Gynaec, diagnosing the cause of pelvic pain begins with a detailed medical history, including the nature, timing, and pattern of the pain, followed by a thorough pelvic examination. Depending on the suspected cause, further evaluation may include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li><strong>Pelvic Ultrasound:</strong> To examine the uterus, ovaries, and surrounding structures for cysts, fibroids, or other abnormalities</li>
                <li><strong>Blood Tests:</strong> To check for infection, inflammation, or pregnancy-related causes</li>
                <li><strong>Urine Tests:</strong> To rule out urinary tract infections as a cause of pain</li>
                <li><strong>Diagnostic Laparoscopy:</strong> A minimally invasive procedure to directly visualize the pelvic organs, particularly useful in diagnosing conditions like endometriosis that may not be visible on imaging alone</li>
                <li><strong>Hysteroscopy:</strong> In select cases, to examine the inside of the uterus for structural causes of pain</li>
                <li><strong>MRI:</strong> In complex cases, for more detailed imaging of the pelvic structures</li>
              </ul>

              <p className="text-gray-700">
                This thorough diagnostic approach ensures that treatment is targeted at the actual underlying cause rather than simply managing symptoms.
              </p>
            </div>

            {/* Section 6 — Treatment Options for Pelvic Pain in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Treatment Options for Pelvic Pain in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment for pelvic pain depends entirely on the underlying cause identified during evaluation. Dr. Priyanka Gynaec offers a comprehensive range of treatment options tailored to each diagnosis.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Medical Management
              </h3>

              <p className="text-gray-700 mb-3">
                For many causes of pelvic pain, medication is the first line of treatment, including:
              </p>

              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Pain-relief medication to manage discomfort</li>
                <li>Hormonal therapy to manage conditions like endometriosis or adenomyosis</li>
                <li>Antibiotics for pelvic inflammatory disease or urinary tract infections</li>
                <li>Medications to manage underlying conditions like IBS, when relevant</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Laparoscopic Surgery
              </h3>

              <p className="text-gray-700 mb-3">
                For conditions like endometriosis, ovarian cysts, or fibroids that do not respond to medical management, advanced 3D laparoscopic surgery offers a minimally invasive solution. Benefits of this approach include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-6 list-disc pl-5">
                <li>Smaller incisions and minimal scarring</li>
                <li>Reduced blood loss and post-operative pain</li>
                <li>Shorter hospital stay and faster recovery</li>
                <li>Precise removal or treatment of the underlying cause while preserving healthy tissue and fertility whenever possible</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Treatment for Ovarian Cysts
              </h3>

              <p className="text-gray-700 mb-4">
                Depending on the size and nature of the cyst, treatment may range from watchful monitoring for small, simple cysts to laparoscopic removal for larger or persistent cysts, especially if they are causing significant pain.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Management of Endometriosis
              </h3>

              <p className="text-gray-700 mb-4">
                Endometriosis treatment is highly individualized and may include hormonal therapy to manage symptoms, laparoscopic surgery to remove endometrial tissue, or a combination of both, depending on the severity of the condition and the patient&apos;s fertility goals.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Treatment for Pelvic Inflammatory Disease
              </h3>

              <p className="text-gray-700 mb-4">
                PID is treated promptly with appropriate antibiotics to clear the infection and prevent long-term complications such as chronic pelvic pain or fertility issues.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Emergency Surgical Care
              </h3>

              <p className="text-gray-700 mb-4">
                In cases of ovarian torsion, ruptured ectopic pregnancy, or other surgical emergencies, prompt surgical intervention is essential to prevent serious complications and preserve reproductive organs whenever possible.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Pelvic Floor Therapy
              </h3>

              <p className="text-gray-700">
                For pelvic pain related to musculoskeletal causes or pelvic floor muscle tension, targeted pelvic floor exercises and physical therapy can provide significant relief.
              </p>
            </div>

            {/* Section 7 — The Importance of Not Ignoring Pelvic Pain */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                The Importance of Not Ignoring Pelvic Pain
              </h2>

              <p className="text-gray-700">
                Many women delay seeking treatment for pelvic pain, assuming it is a normal part of being a woman or something they simply have to live with. This delay can allow underlying conditions like endometriosis or pelvic inflammatory disease to progress, potentially leading to complications such as chronic pain, fertility challenges, or, in emergency situations, serious risk to reproductive organs. Seeking timely evaluation ensures that the underlying cause is identified early and treated effectively.
              </p>
            </div>

            {/* Section 8 — Why Choose Dr. Priyanka Gynaec for Pelvic Pain Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka Gynaec for Pelvic Pain Treatment in Moradabad?
              </h2>

              <p className="text-gray-700 mb-4">
                Women across Moradabad trust Dr. Priyanka Gynaec for pelvic pain evaluation and treatment because of a thorough, patient-first approach backed by advanced medical technology. Key reasons include:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Comprehensive diagnostic evaluation to accurately identify the cause of pelvic pain</li>
                <li>Expertise in advanced 3D laparoscopic surgery for conditions like endometriosis, cysts, and fibroids</li>
                <li>Personalized treatment plans based on the specific diagnosis and the patient&apos;s overall health goals</li>
                <li>A compassionate, judgment-free environment where women feel comfortable discussing their symptoms</li>
                <li>Prompt recognition and management of emergency conditions when needed</li>
                <li>Continuity of care from diagnosis through treatment and follow-up</li>
              </ul>
            </div>

            {/* Section 9 — Living with Chronic Pelvic Pain: Coping Strategies */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Living with Chronic Pelvic Pain: Coping Strategies
              </h2>

              <p className="text-gray-700 mb-4">
                While seeking proper medical treatment, women dealing with chronic pelvic pain can also benefit from:
              </p>

              <ul className="text-gray-700 space-y-2 mb-4 list-disc pl-5">
                <li>Keeping a symptom diary to track pain patterns and potential triggers</li>
                <li>Applying heat therapy to the lower abdomen for symptomatic relief</li>
                <li>Practicing relaxation techniques to manage stress, which can worsen pain perception</li>
                <li>Maintaining open communication with the treating doctor about symptom changes</li>
                <li>Joining support groups or counselling, particularly for chronic conditions like endometriosis</li>
              </ul>
            </div>

            {/* Section 10 — Speciality & Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Speciality &amp; Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                <strong>Speciality:</strong> Gynaecology, Pelvic Pain &amp; Endometriosis Management, Advanced 3D Laparoscopy, Fertility &amp; IVF, Pregnancy &amp; Maternity Care, Paediatrics
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Contact &amp; Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh, 244001
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
                          href="mailto:contact@drpriyankaGynaec.com"
                          className="hover:underline"
                        >
                          contact@drpriyankaGynaec.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.gynaecologistmoradabad.com/"
                        className="hover:underline text-black"
                      >
                        https://www.gynaecologistmoradabad.com/
                      </a>
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

              <p className="text-gray-700 mt-6">
                If you are experiencing persistent or severe pelvic pain, do not ignore it. Book a consultation with Dr. Priyanka Gynaec in Moradabad today for a thorough evaluation and effective, personalized treatment.
              </p>
            </div>

            {/* Section 11 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions (FAQs)
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