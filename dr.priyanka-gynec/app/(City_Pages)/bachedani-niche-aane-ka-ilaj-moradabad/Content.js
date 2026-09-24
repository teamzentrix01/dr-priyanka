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

export default function BachedaniNicheAaneKaIlaj() {
  const faqs = [
    {
      q: "Bachedani niche aana kya hota hai?",
      a: "Yeh uterine prolapse hai, ek condition jisme bachedani apni normal position se neeche khisak jati hai kyunki pelvic support structures kamzor ho jati hain.",
    },
    {
      q: "Moradabad mein uterine prolapse ka ilaj kaun karta hai?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) uterine prolapse ke liye evaluation aur treatment, sacrocolpopexy sameet, offer karti hain.",
    },
    {
      q: "Kya uterine prolapse ka ilaj bina surgery ke ho sakta hai?",
      a: "Haan, mild cases aksar pelvic floor exercises, pessary devices, ya lifestyle changes se theek response karte hain.",
    },
    {
      q: "Sacrocolpopexy kya hai?",
      a: "Yeh ek advanced keyhole surgical procedure hai jo uterine ya vaginal vault prolapse ko repair karne ke liye use hoti hai.",
    },
    {
      q: "Uterine prolapse ka karan kya hai?",
      a: "Common causes mein vaginal childbirth, menopause, chronic straining, obesity, aur age-related tissue changes shamil hain.",
    },
    {
      q: "Kya uterine prolapse dangerous hai?",
      a: "Yeh life-threatening nahi hai, lekin agar ilaj na kiya jaye to comfort aur quality of life par significantly asar daal sakta hai.",
    },
    {
      q: "Kya bacche hone ke baad uterine prolapse common hai?",
      a: "Haan, vaginal childbirth uterine prolapse ke sabse common contributing factors mein se ek hai.",
    },
    {
      q: "Kya clinic minimally invasive surgical treatment offer karti hai?",
      a: "Haan, prolapse repair ke liye laparoscopic sacrocolpopexy sameet.",
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
                Bachedani Niche Aane Ka Ilaj: Moradabad Mein Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Bachedani niche aana, jise medical language mein uterine prolapse
                kehte hain, bahut si mahilayen face karti hain, lekin sharam ya
                galat soch ki wajah se isko openly discuss nahi karti. Kai log
                sochte hain ki yeh sirf umar badhne ya bacche hone ke baad
                natural hi hota hai aur isko sirf sehna padta hai. Lekin
                reality mein, bachedani niche aane ki problem ek
                well-understood aur highly treatable condition hai — iske liye
                simple exercises se lekar advanced minimally invasive surgery
                tak, kai options available hain. Is article mein hum samjhenge
                ki yeh problem kyun hoti hai, iske symptoms kya hain, aur
                Moradabad mein Dr. Priyanka Pachauri is condition ka ilaj kaise
                karti hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Niche Aana Kya Hota Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterine prolapse tab hota hai jab bachedani apni normal
                  position se neeche khisak jati hai, aur vaginal channel ke
                  andar ya kabhi-kabhi bahar tak aa jati hai.
                </li>
                <li>
                  Yeh tab hota hai jab pelvic floor ki muscles aur ligaments, jo
                  bachedani ko support karti hain, kamzor ya stretch ho jati
                  hain.
                </li>
                <li>
                  Yeh ek common condition hai, khaaskar un mahilaon mein jinki
                  vaginal delivery hui ho ya jo menopause ke stage se guzar rahi
                  hon.
                </li>
                <li>
                  Severity alag-alag ho sakti hai — mild cases mein bachedani
                  thodi si neeche aati hai, aur severe cases mein poori tarah
                  vaginal opening ke bahar aa sakti hai.
                </li>
                <li>
                  Yeh life-threatening condition nahi hai, lekin agar ilaj na
                  kiya jaye to daily activities aur quality of life par asar
                  daal sakti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Uterine Prolapse Ke Grades
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Grade 1 (Mild):</strong> Bachedani thodi si neeche
                  aati hai lekin upper vaginal channel ke andar hi rehti hai.
                </li>
                <li>
                  <strong>Grade 2 (Moderate):</strong> Bachedani aur neeche
                  aati hai, vaginal opening ke kareeb ya usi par pahunch jati
                  hai.
                </li>
                <li>
                  <strong>Grade 3 (Severe):</strong> Bachedani ka kuch hissa
                  vaginal opening se bahar nikal aata hai.
                </li>
                <li>
                  <strong>Grade 4 (Complete/Procidentia):</strong> Bachedani
                  poori tarah vaginal opening ke bahar aa jati hai.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Apne specific grade ko samajhna treatment plan decide karne mein
                madad karta hai — mild cases conservative treatment se theek ho
                sakte hain, jabki advanced cases mein surgery ki zaroorat pad
                sakti hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Niche Aane Ke Common Karan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Vaginal delivery</strong>, khaaskar agar labor lamba
                  raha ho, multiple deliveries hui hon, baby ka weight zyada
                  raha ho, ya forceps/vacuum ka use hua ho.
                </li>
                <li>
                  <strong>Menopause</strong>, kyunki estrogen level kam hone se
                  pelvic tissues ki strength aur elasticity kam ho jati hai.
                </li>
                <li>
                  <strong>Chronic constipation aur zor lagana</strong>, jo
                  pelvic floor par baar-baar pressure daalta hai.
                </li>
                <li>
                  <strong>Obesity</strong>, jo pelvic structures par overall
                  pressure badhata hai.
                </li>
                <li>
                  <strong>Chronic khansi</strong>, jaise smoking-related lung
                  conditions se.
                </li>
                <li>
                  <strong>Lambe samay tak heavy lifting</strong>, khaaskar galat
                  technique ke saath.
                </li>
                <li>
                  <strong>Age-related tissue changes</strong>, jo naturally
                  muscle strength aur elasticity kam karte hain.
                </li>
                <li>
                  <strong>Genetic factors</strong>, kyunki kuch mahilaon ki
                  connective tissue naturally kamzor hoti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Uterine Prolapse Ke Common Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic area mein bhaari-pan ya pressure mehsoos hona, jaise
                  kuch neeche gir raha ho.
                </li>
                <li>
                  Vaginal opening par ek visible ya mehsoos hone wala bulge, jo
                  advanced cases mein zyada noticeable hota hai.
                </li>
                <li>
                  Lower back pain, jo lambe samay tak khade rehne se badh sakta
                  hai.
                </li>
                <li>
                  Intercourse ke dauran discomfort ya pain.
                </li>
                <li>
                  Urinary symptoms, jaise leakage, urgency, ya bladder poori
                  tarah empty na hona.
                </li>
                <li>
                  Bowel-related symptoms, jaise kuch cases mein poori tarah
                  bowel movement na ho pana.
                </li>
                <li>
                  Symptoms din bhar mein badh sakte hain, khaaskar lambe samay
                  khade rehne se, aur letne par kuch aaraam milta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnosis Kaise Hoti Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed symptom history</strong>, ki symptoms kab se
                  hain aur daily life par kya asar dal rahe hain.
                </li>
                <li>
                  <strong>Pelvic examination</strong>, jisse doctor prolapse ka
                  grade aur related pelvic floor concerns assess karte hain.
                </li>
                <li>
                  <strong>Straining ya khade hone ke dauran assessment</strong>,
                  kyunki abdominal pressure badhne par prolapse zyada clearly
                  dikh sakta hai.
                </li>
                <li>
                  <strong>Pelvic ultrasound</strong>, kuch cases mein, related
                  pelvic organ support structures evaluate karne ke liye.
                </li>
                <li>
                  <strong>Associated symptoms ka evaluation</strong>, jaise
                  urinary ya bowel-related concerns, jo aksar uterine prolapse
                  ke saath aate hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Niche Aane Ke Non-Surgical Treatment Options
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pelvic Floor Exercises (Kegels)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic floor muscles ko strengthen karna bachedani ko support
                  karne aur mild prolapse symptoms kam karne mein madad kar
                  sakta hai.
                </li>
                <li>
                  Grade 1 (mild) prolapse ke liye sabse effective, aur risk mein
                  rehne wali mahilaon ke liye preventive measure ke taur par bhi.
                </li>
                <li>
                  Consistent aur sahi tareeke se practice karna zaroori hai
                  taaki meaningful improvement dikhe.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pessary Devices
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek supportive device jo vagina mein daala jata hai taaki
                  bachedani ko zyada normal position mein rakha ja sake.
                </li>
                <li>
                  Ek non-surgical option, un mahilaon ke liye useful jo surgery
                  ke liye good candidate nahi hain ya surgery avoid/delay karna
                  chahti hain.
                </li>
                <li>
                  Periodic follow-up ki zaroorat hoti hai proper fitting,
                  cleaning aur monitoring ke liye.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Modifications
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Weight management, pelvic structures par overall pressure kam
                  karne ke liye.
                </li>
                <li>
                  Chronic constipation ka ilaj, adequate fiber, hydration aur
                  excessive straining avoid karke.
                </li>
                <li>
                  Chronic khansi ka jaldi ilaj, khaaskar agar smoking ya
                  respiratory condition se related ho.
                </li>
                <li>
                  Galat technique se heavy lifting avoid karna, jo prolapse
                  symptoms ko badha sakta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Uterine Prolapse Ke Surgical Treatment Options
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Sacrocolpopexy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek advanced surgical procedure jo uterine ya vaginal vault
                  prolapse ko repair karti hai, aksar minimally invasive
                  laparoscopic technique se performed.
                </li>
                <li>
                  Bachedani ya vaginal vault ko support karna involve karta hai,
                  surgical mesh use karke jo pelvis ki ek stable structure se
                  attach kiya jata hai.
                </li>
                <li>
                  Generally strong aur durable results deta hai, khaaskar zyada
                  significant prolapse cases ke liye.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Vaginal Hysterectomy With Repair
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch cases mein, khaaskar un mahilaon ke liye jinki family
                  complete ho chuki hai, bachedani nikalna aur pelvic floor
                  repair karna recommend kiya ja sakta hai.
                </li>
                <li>
                  Prolapse ko directly address karta hai us organ ko remove
                  karke jo neeche aa gaya hai, saath hi surrounding support
                  structures ko strengthen karke.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Minimally Invasive Laparoscopic Approaches
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Generally chhote incisions, kam post-operative pain, aur
                  faster recovery traditional open surgery ke comparison mein.
                </li>
                <li>
                  Suitable candidates ke liye increasingly preferred approach
                  surgical prolapse repair ke liye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Timely Treatment Kyun Zaroori Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ilaj na kiye jane par prolapse progressively worsen ho sakta
                  hai, khaaskar agar chronic straining jaise contributing factors
                  address na kiye jayein.
                </li>
                <li>
                  Early treatment, khaaskar pelvic floor exercises jaise
                  conservative options ke saath, aksar advanced prolapse ko baad
                  mein address karne se zyada simple aur effective hota hai.
                </li>
                <li>
                  Proper treatment ke baad quality of life mein significant
                  improvement dikhta hai, discomfort se relief aur daily
                  activities mein confidence badhne ke roop mein.
                </li>
                <li>
                  Sharam ki wajah se ilaj delay karna sirf un symptoms ko lamba
                  karta hai jo, zyadatar cases mein, bahut treatable hote hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Moradabad Mein Uterine Prolapse Ka Ilaj
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) Moradabad mein apni
                gynaecological practice ke hisse ke roop mein bachedani niche
                aane ki samasya (uterine prolapse) ke liye comprehensive
                evaluation aur treatment offer karti hain. Unki official website
                (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ) ke according, unki relevant services mein shamil hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Sacrocolpopexy</strong>, jo unki specialized
                  procedures mein explicitly list ki gayi hai, jise uterine aur
                  vaginal vault prolapse ke liye advanced keyhole repair bataya
                  gaya hai.
                </li>
                <li>
                  <strong>High-Definition 3D Laparoscopic Surgery</strong>, jo
                  prolapse repair ke liye precise, minimally invasive treatment
                  support karti hai.
                </li>
                <li>
                  <strong>Postnatal care</strong>, jo bachche hone ke baad early
                  pelvic floor concerns ko identify aur address karne ka
                  opportunity deti hai, unke progress karne se pehle.
                </li>
                <li>
                  Ek <strong>&quot;Her Health First&quot; approach</strong>,
                  jisse symptoms jaise bhaari-pan ya visible bulge ko openly
                  discuss kiya jata hai aur seriously liya jata hai, na ki bacche
                  hone ya umar badhne ka normal part maan kar ignore kiya jata
                  hai.
                </li>
                <li>
                  <strong>Comprehensive gynaecological care</strong>, jisse
                  conservative aur surgical, dono treatment options individual
                  severity aur preferences ke hisaab se discuss kiye ja sakte
                  hain.
                </li>
                <li>
                  Website par diye gaye patient testimonials consistently yeh
                  batate hain ki patients sensitive concerns discuss karte waqt
                  comfortable feel karte hain aur treatment options ki clear
                  explanation milti hai — jo ek aisi condition ke liye bahut
                  zaroori hai jise zyadatar mahilayen mention karne mein
                  hichkichati hain. Clinic Gandhi Nagar, Moradabad mein located
                  hai, jisse yeh city bhar ki mahilaon ke liye easily accessible
                  hai jo uterine prolapse ke evaluation aur treatment ke liye
                  consult karna chahti hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pelvic Health Ke Liye Preventive Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pelvic floor exercises regularly practice karein, khaaskar
                  pregnancy ke dauran aur baad mein.
                </li>
                <li>
                  Healthy body weight maintain karein, pelvic structures par
                  excess pressure kam karne ke liye.
                </li>
                <li>
                  Chronic constipation manage karein adequate fiber, hydration
                  aur excessive straining avoid karke.
                </li>
                <li>
                  Chronic khansi ka jaldi ilaj karayein, khaaskar agar smoking
                  ya respiratory condition se related ho.
                </li>
                <li>
                  Galat technique se heavy lifting avoid karein, jo pelvic floor
                  muscles par unnecessary strain daalta hai.
                </li>
                <li>
                  Postpartum aur regular gynaecological check-ups attend karein,
                  taaki koi bhi pelvic floor concern early stage mein raise kiya
                  ja sake.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Niche Aana Ke Baare Mein Common Myths
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Uterine prolapse sirf older women ko hota
                  hai.&quot;</strong> Yeh kisi bhi umar mein ho sakta hai,
                  khaaskar childbirth ke baad, aur sirf umar ki wajah se ignore
                  nahi karna chahiye.
                </li>
                <li>
                  <strong>&quot;Yeh bacche hone ka normal part hai aur ilaj
                  nahi ho sakta.&quot;</strong> Effective treatments, exercises
                  se lekar surgery tak, available hain aur symptoms mein
                  significant improvement la sakte hain.
                </li>
                <li>
                  <strong>&quot;Surgery hi sirf ek treatment option hai.&quot;</strong>{" "}
                  Mild se moderate cases aksar non-surgical options jaise pelvic
                  floor exercises ya pessary devices se theek response karte
                  hain.
                </li>
                <li>
                  <strong>&quot;Doctor se yeh discuss karna bahut embarrassing
                  hai.&quot;</strong> Uterine prolapse ek common, medically
                  recognized condition hai, aur ek accha doctor isko
                  professionally aur bina judgment ke address karega.
                </li>
                <li>
                  <strong>&quot;Prolapse surgery hamesha major, invasive
                  procedures involve karti hai.&quot;</strong> Aaj kal ke zyadatar
                  prolapse repairs, sacrocolpopexy sameet, minimally invasive
                  laparoscopic techniques se perform kiye ja sakte hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Information – Apna Appointment Book Karein
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
