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

export default function PeriodsMeinZyadaDardHoRahaHaiKabDikhayeinDoctorKo() {
  const faqs = [
    {
      q: "Periods mein bahut zyada dard hona normal hai kya?",
      a: "Halka-moderate cramping common hai, lekin severe pain jo daily life disturb kare woh normal nahi hai — iska proper evaluation zaroori hai.",
    },
    {
      q: "Primary aur secondary dysmenorrhea mein kya farak hai?",
      a: "Primary dysmenorrhea typical menstrual cramping hai bina kisi underlying cause ke; secondary dysmenorrhea endometriosis, fibroids ya adenomyosis jaisi condition ki wajah se hoti hai.",
    },
    {
      q: "Kya severe period pain endometriosis ka sign ho sakta hai?",
      a: "Haan. Endometriosis severe, worsening period pain ke sabse common causes mein se ek hai, aur ispe proper examination aur imaging se hi diagnose hota hai.",
    },
    {
      q: "Period pain ke liye gynaecologist ko kab dikhana chahiye?",
      a: "Agar pain aapke daily routine ko rok de, over-the-counter medication se theek na ho, 2-3 din se zyada rahe, ya heavy bleeding/fever ke saath ho, toh gynaecologist ko consult karna chahiye.",
    },
    {
      q: "Severe period pain ka cause kaise diagnose hota hai?",
      a: "Detailed symptom history, pelvic examination, ultrasound imaging, aur kuch select cases mein diagnostic laparoscopy se.",
    },
    {
      q: "Kya Dr. Priyanka Gynaec fibroids ya endometriosis ki wajah se hone wale period pain ka treatment karti hain?",
      a: "Haan — clinic in conditions ko directly diagnose aur treat karti hai, zaroorat padne pe advanced 3D laparoscopic surgery ke saath.",
    },
    {
      q: "Kya period pain bina surgery ke treat ho sakta hai?",
      a: "Aksar, haan. Bahut se cases scheduled pain medication, hormonal treatment aur lifestyle changes se hi theek ho jaate hain; surgery tab consider hoti hai jab structural cause ko directly treat karna zaroori ho.",
    },
    {
      q: "Kya period pain treat karwane se fertility affect hogi?",
      a: "Endometriosis ya fibroids jaisi conditions ko properly diagnose aur treat karna usually fertility ke liye protective hota hai, kyunki untreated conditions se long-term issues hone ka chance zyada hota hai.",
    },
    {
      q: "Moradabad mein Dr. Priyanka ke saath consultation kaise book karein?",
      a: "Clinic ko directly WhatsApp ya call kariye, ya upar diye gaye Gandhi Nagar address pe in-person visit kariye.",
    },
    {
      q: "Appointment se pehle kya track karna chahiye?",
      a: "Har cycle mein apne pain ki timing, severity aur duration, bleeding pattern aur baaki symptoms note kariye — isse accurate diagnosis mein help milti hai.",
    },
    {
      q: "Kya recently start hua period pain worry karne wali baat hai?",
      a: "Naya ya newly severe period pain, especially mid-20s ke baad, underlying cause hone ka chance zyada hota hai aur isse check karwana chahiye.",
    },
    {
      q: "Kya period pain aur PMS same cheez hai?",
      a: "Nahi. PMS mein period se pehle mood changes aur bloating jaise symptoms hote hain, jabki period pain (dysmenorrhea) period ke dauran hone wali cramping hai — dono overlap kar sakte hain lekin same nahi hain.",
    },
    {
      q: "Kya copper IUD se periods zyada painful ho sakte hain?",
      a: "Haan, kuch women ko copper IUD lagwane ke baad heavier bleeding aur zyada cramping hoti hai, especially pehle kuch cycles mein — agar yeh settle na ho toh apni gynaecologist ko zaroor batayein.",
    },
    {
      q: "Kya period pain ka matlab hamesha kuch seriously wrong hai?",
      a: "Nahi — zyadatar period pain primary dysmenorrhea hoti hai bina kisi serious underlying cause ke, lekin agar pain severe ya disruptive hai toh secondary causes rule out karna zaroori hai.",
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
                Periods Mein Zyada Dard Ho Raha Hai Kab Dikhayein Doctor Ko
                (Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Periods ke time thoda dard hona normal hai, lekin agar dard itna
                zyada ho ki aap office, college ya apna daily kaam bhi na kar
                payein, toh yeh sirf &quot;normal cramps&quot; nahi hai — yeh
                body ka signal hai ki kuch check karwana zaroori hai. Dr.
                Priyanka Pachauri, Dr. Priyanka Gynaec, Moradabad mein aksar
                aisi mahilayein dekhti hain jo saalon se bahut zyada period pain
                jhel rahi hoti hain, aur unhe pata hi nahi hota ki yeh
                endometriosis, fibroids ya adenomyosis jaisi treatable condition
                ki wajah se ho sakta hai. Period pain ka medical naam hai
                dysmenorrhea, aur yeh samajhna ki aapka dard &quot;normal&quot;
                hai ya &quot;red flag&quot;, sahi relief paane ka pehla step
                hai. Yeh guide aapko batayegi normal aur abnormal period pain
                mein farak, iske common causes, kaun se warning signs pe doctor
                ko dikhana zaroori hai, aur Dr. Priyanka Gynaec Moradabad mein
                diagnosis aur treatment kaise karti hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dysmenorrhea (Period Pain) Kya Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dysmenorrhea period pain ka medical term hai — halka cramping
                  se lekar itna severe pain jo daily life disturb kar de.
                </li>
                <li>
                  Period ke pehle 1-2 din halka-moderate cramping hona common
                  hai aur usually worry ki baat nahi.
                </li>
                <li>
                  Yeh pain prostaglandins naam ke hormone-like substances ki
                  wajah se hota hai, jo uterus ko contract karwate hain.
                </li>
                <li>
                  Dysmenorrhea do types mein baata jata hai — primary aur
                  secondary — aur yeh pata hona sahi treatment decide karta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Period Pain Aur PMS Mein Farak
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PMS (premenstrual syndrome) period aane se pehle hota hai —
                  mood changes, bloating, fatigue jaise symptoms ke saath.
                </li>
                <li>
                  Period pain (dysmenorrhea) specifically wo cramping hai jo
                  period ke dauran hoti hai.
                </li>
                <li>
                  Dono aksar overlap karte hain, lekin period ke time severe
                  cramping PMS ke general symptoms se alag concern hai.
                </li>
                <li>
                  Agar pain hi sabse zyada disturb kar raha ho, mood ya bloating
                  nahi, toh yeh dysmenorrhea ki taraf point karta hai jise alag
                  se check karwana chahiye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Primary vs Secondary Dysmenorrhea
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Primary Dysmenorrhea
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sabse common type, usually periods start hone ke 1-2 saal ke
                  andar shuru hoti hai.
                </li>
                <li>
                  Kisi underlying condition ki wajah se nahi, sirf prostaglandins
                  ki wajah se hoti hai.
                </li>
                <li>
                  Usually 2-3 din mein apne aap improve ho jaati hai.
                </li>
                <li>
                  Scheduled NSAIDs, heat therapy aur light exercise se achha
                  respond karti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Secondary Dysmenorrhea
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kisi underlying reproductive health condition ki wajah se
                  hoti hai.
                </li>
                <li>
                  Aksar life mein baad mein shuru hoti hai, ya periods start
                  hone ke saalon baad.
                </li>
                <li>
                  Cycle mein jaldi start hoti hai aur normal cramps se zyada der
                  tak rehti hai.
                </li>
                <li>
                  Time ke saath behtar hone ki jagah aksar worse hoti jaati hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Severe Period Pain Ke Common Causes
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Endometriosis</strong> – uterus ke bahar uterine lining
                  jaisa tissue grow hota hai, severe aur worsening period pain ka
                  bada cause.
                </li>
                <li>
                  <strong>Uterine fibroids</strong> – non-cancerous growths jo
                  heavy bleeding aur pressure-related pain de sakte hain.
                </li>
                <li>
                  <strong>Adenomyosis</strong> – uterine lining ka tissue uterus
                  ki muscular wall ke andar grow hone lagta hai.
                </li>
                <li>
                  <strong>Pelvic Inflammatory Disease (PID)</strong> –
                  reproductive organs ka infection, aksar pain, fever aur
                  unusual discharge ke saath.
                </li>
                <li>
                  <strong>Ovarian cysts</strong> – fluid-filled sacs jo pain de
                  sakte hain, especially agar rupture ya twist ho jayein.
                </li>
                <li>
                  <strong>Copper IUD</strong> – kuch mahilaon mein heavier aur
                  zyada painful periods ka cause ban sakta hai, especially
                  insertion ke pehle kuch mahino mein.
                </li>
                <li>
                  Kabhi-kabhi sudden period-jaisa pain pregnancy-related
                  emergency ka sign bhi ho sakta hai, jise turant check karwana
                  chahiye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Different Life Stages Mein Period Pain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Teenage years mein:</strong> cramps usually periods
                  start hone ke 1-2 saal baad shuru hoti hain aur primary
                  dysmenorrhea hoti hai, lekin severe pain is age mein bhi check
                  karwana chahiye.
                </li>
                <li>
                  <strong>20s aur 30s mein:</strong> yahi wo time hai jab
                  endometriosis, fibroids ya adenomyosis jaise secondary causes
                  pehli baar dikhte ya worsen hote hain.
                </li>
                <li>
                  <strong>Perimenopause ke paas:</strong> cycle length change
                  hone lagti hai aur heavier, zyada painful periods hone lagte
                  hain jab hormone levels shift karte hain, aur fibroids ya
                  adenomyosis common ho jaate hain.
                </li>
                <li>
                  Har stage pe, naya ya worsening pain jo aapke liye unusual ho,
                  use &quot;bas age hai&quot; ya &quot;bas stress hai&quot; bol
                  ke ignore nahi karna chahiye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags: Kab Period Pain Ke Liye Doctor Dikhana Zaroori Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pain itna severe ho ki office, college ya apna routine kaam
                  bhi na ho paaye.
                </li>
                <li>
                  Over-the-counter pain relievers se koi khaas fark na pade.
                </li>
                <li>
                  Cramps jo 2-3 din se zyada rahein.
                </li>
                <li>
                  Heavy bleeding — har ghante pad ya tampon change karna pade,
                  kai ghanto tak.
                </li>
                <li>
                  Pain jo period ke alawa bhi ho, sirf period ke dauran nahi.
                </li>
                <li>
                  Fever ya unusual vaginal discharge pain ke saath.
                </li>
                <li>
                  Fainting, dizziness ya lightheadedness.
                </li>
                <li>
                  Pain jo lower back, hips ya thighs tak jaaye.
                </li>
                <li>
                  Intercourse ke time pain.
                </li>
                <li>
                  Naya ya worsening severe pain, especially agar mid-20s ke baad
                  start ho.
                </li>
                <li>
                  Cramps ke saath nausea, vomiting ya diarrhoea.
                </li>
                <li>
                  Cramps jo cycle-dar-cycle dheere-dheere zyada intense hote jaa
                  rahe hon.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Urgent Care Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sudden, severe abdominal pain jo aapke usual cramps se alag
                  ho.
                </li>
                <li>
                  Fever ke saath infection ke signs.
                </li>
                <li>
                  Heavy bleeding ke saath fainting ya severe dizziness.
                </li>
                <li>
                  Inme se koi bhi combination ho toh ise urgent samjhein, ghar pe
                  wait mat kariye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Severe Period Pain Kaise Diagnose Hota Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aapke symptoms, cycle pattern aur pain timing ki detailed
                  history.
                </li>
                <li>
                  Tenderness, masses ya abnormalities check karne ke liye pelvic
                  examination.
                </li>
                <li>
                  Fibroids, cysts ya adenomyosis dekhne ke liye 3D/4D ultrasound
                  imaging.
                </li>
                <li>
                  Kuch cases mein diagnostic laparoscopy, especially jab
                  endometriosis suspect ho lekin scan pe dikhe na.
                </li>
                <li>
                  Zaroorat padne pe blood tests, doosre contributing factors
                  rule out karne ke liye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Painful Periods Ke Treatment Options
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Primary dysmenorrhea ke liye scheduled NSAIDs (as-needed ki
                  jagah fixed timing pe), heat therapy aur light exercise ke
                  saath.
                </li>
                <li>
                  Hormonal treatment, jaise birth control, cycles regulate karne
                  aur pain kam karne ke liye, jahan appropriate ho.
                </li>
                <li>
                  Secondary dysmenorrhea ke liye underlying condition ka
                  targeted treatment — jaise endometriosis ke liye laparoscopic
                  excision ya fibroids ke liye myomectomy.
                </li>
                <li>
                  Aapki specific diagnosis ke hisaab se personalised treatment
                  plan, ek-jaisa sabke liye approach nahi.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Period Pain Kam Karne Ke Simple Self-Care Steps
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lower abdomen pe heating pad ya hot water bottle lagana
                  uterine muscles relax karta hai aur cramping kam karta hai.
                </li>
                <li>
                  Halki movement, jaise walking ya light stretching, complete bed
                  rest se zyada help karti hai.
                </li>
                <li>
                  Achhi hydration aur excess salt-caffeine kam karna
                  bloating-related discomfort mein help karta hai.
                </li>
                <li>
                  Adequate sleep body ko pain aur inflammation manage karne mein
                  support karti hai.
                </li>
                <li>
                  Yeh steps primary dysmenorrhea ke medical treatment ke saath
                  achhe se kaam karte hain, lekin agar pain severe ya worsening
                  hai toh evaluation ka substitute nahi hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Period Pain Ke Baare Mein Common Myths
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> Period pain hamesha jhelna hi padta hai.{" "}
                  <strong>Fact:</strong> severe pain ka aksar specific, treatable
                  cause hota hai.
                </li>
                <li>
                  <strong>Myth:</strong> Sirf badi umar ki women ko endometriosis
                  jaisi conditions hoti hain. <strong>Fact:</strong> yeh commonly
                  teenage years ya twenties mein hi shuru hoti hai.
                </li>
                <li>
                  <strong>Myth:</strong> Doctor sirf birth control hi suggest
                  karega. <strong>Fact:</strong> treatment personalised hota hai
                  — lifestyle changes, targeted medication, ya sirf zaroorat
                  padne pe surgery.
                </li>
                <li>
                  <strong>Myth:</strong> Painkillers kaam na karein toh kuch aur
                  nahi ho sakta. <strong>Fact:</strong> iska matlab usually yeh
                  hai ki underlying cause ki proper diagnosis aur targeted
                  treatment chahiye, strong painkillers nahi.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Severe Period Pain Ko Aise Hi &quot;Jhelna&quot; Kyu Nahi Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut si women ko bola jaata hai ki period pain &quot;bas
                  normal hai,&quot; jiski wajah se woh saalon tak care lena delay
                  kar deti hain.
                </li>
                <li>
                  Undiagnosed conditions jaise endometriosis time ke saath
                  progress kar sakti hain aur kabhi-kabhi fertility ko bhi
                  affect kar sakti hain.
                </li>
                <li>
                  Severe period pain ke almost har underlying cause ke liye
                  effective, well-established treatments available hain.
                </li>
                <li>
                  Early, accurate diagnosis ka matlab usually simpler, zyada
                  effective treatment hota hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Period Pain Ke Liye Dr. Priyanka Gynaec Kyu
                Choose Karein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Genuinely empathetic, &quot;Her Health First&quot; approach jo
                  pehli visit se hi aapke pain ko seriously leti hai.
                </li>
                <li>
                  Diagnosis aur treatment dono ke liye ek hi jagah 3D/4D
                  ultrasound aur advanced 3D laparoscopic capability.
                </li>
                <li>
                  Gold-medal academic credentials aur international fellowship
                  training, endometriosis care mein specific expertise ke saath.
                </li>
                <li>
                  Continuity of care — first consultation se treatment aur
                  follow-up tak wahi doctor aur team.
                </li>
                <li>
                  Sensitive symptoms openly aur honestly discuss karne ke liye
                  private, judgement-free space.
                </li>
                <li>
                  Fertility, pregnancy aur general gynaecological health jaisi
                  related concerns ke liye bhi same roof ke neeche support.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Apni Consultation Book Karein
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

              <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>💬 WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    +91 89796 70705
                  </a>{" "}
                  — question puchne ya slot book karne ka sabse fast tareeka.
                </li>
                <li>
                  <strong>📞 Call:</strong>{" "}
                  <a
                    href="tel:+919079765578"
                    className="text-blue-600 hover:underline"
                  >
                    +91 90797 65578
                  </a>
                </li>
                <li>
                  <strong>📍 Clinic Address:</strong> A2, near Old Roadways,
                  Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.
                </li>
                <li>
                  <strong>✉️ Email:</strong>{" "}
                  <a
                    href="mailto:drpriyanka@gynaecologistmoradabad.com"
                    className="text-blue-600 hover:underline"
                  >
                    drpriyanka@gynaecologistmoradabad.com
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                FAQs (Frequently Asked Questions)
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
