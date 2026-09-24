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

export default function BachedaniMeinSujanKaIlajMoradabadMein() {
  const faqs = [
    {
      q: "\"Bachedani mein sujan\" ka medically kya matlab hota hai?",
      a: "Iska generally matlab hota hai ek enlarged, inflamed, ya thickened uterus, jo kai alag-alag underlying conditions se ho sakta hai.",
    },
    {
      q: "Bachedani mein sujan ke common causes kya hain?",
      a: "Common causes mein adenomyosis, uterine fibroids, endometritis, pelvic inflammatory disease (PID), aur hormonal imbalance shaamil hain.",
    },
    {
      q: "Kya bachedani mein sujan infection ki wajah se ho sakti hai?",
      a: "Haan, endometritis aur PID jaise infections uterine inflammation cause kar sakte hain aur inhe turant antibiotic treatment ki zaroorat hoti hai.",
    },
    {
      q: "Bachedani mein sujan se kaun se symptoms jude hote hain?",
      a: "Common symptoms mein pelvic pain, heavy bleeding, lower abdomen mein pressure, aur infection hone par fever shaamil hai.",
    },
    {
      q: "Bachedani mein sujan ki diagnosis kaise hoti hai?",
      a: "Diagnosis mein typically pelvic exam, ultrasound, aur blood tests shaamil hote hain, aur kuch complex cases mein MRI bhi use hoti hai.",
    },
    {
      q: "Kya bachedani mein sujan ka treatment bina surgery ke ho sakta hai?",
      a: "Haan, kai cases — infections aur mild hormonal causes samet — sirf medication se successfully treat ho jaate hain.",
    },
    {
      q: "Bachedani mein sujan ke liye surgery kab zaroori hoti hai?",
      a: "Surgery, jaise laparoscopic myomectomy ya hysterectomy, tab consider ki jaati hai jab fibroids ya adenomyosis jaise structural causes medical treatment se respond nahi karte.",
    },
    {
      q: "Kya uterine conditions ke liye laparoscopic treatment safe hai?",
      a: "Haan, laparoscopic procedures generally safe hote hain, jisme open surgery ke comparison mein kam pain, minimal scarring, aur faster recovery hoti hai.",
    },
    {
      q: "Dr. Priyanka Pachauri kaun hain?",
      a: "Dr. Priyanka Pachauri Moradabad-based gynaecologist aur laparoscopic surgeon (MS, FMAS) hain jo bachedani mein sujan aur related conditions ki diagnosis aur treatment offer karti hain.",
    },
    {
      q: "Dr. Priyanka Pachauri ki clinic kaun se diagnostic tools use karti hai?",
      a: "Unki clinic 3D/4D ultrasound imaging aur diagnostic hysteroscopy use karti hai bachedani mein sujan ka exact cause identify karne ke liye.",
    },
    {
      q: "Kya adenomyosis bachedani mein sujan cause kar sakta hai?",
      a: "Haan, adenomyosis in mein se sabse common causes mein se ek hai, jisse uterus enlarged, tender, aur thickened ho jaata hai.",
    },
    {
      q: "Moradabad mein uterine swelling treatment ke liye consultation kaise book karein?",
      a: "Aap call, WhatsApp message, email, ya clinic ki official website ke through Dr. Priyanka Pachauri ke saath consultation schedule kar sakti hain.",
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
                Bachedani Mein Sujan Ka Ilaj Moradabad Mein: Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                &quot;Bachedani mein sujan&quot; ek aam problem hai jiske baare
                mein bahut si mahilayein apne gynaecologist se baat karti hain —
                aksar pelvic pain, heavy periods, ya lower abdomen mein pressure
                jaisi feeling ke saath. Medically dekha jaye to yeh symptom kai
                alag-alag underlying conditions ki taraf ishara kar sakta hai,
                aur har ek ka apna treatment approach hota hai. Is guide mein
                hum samjhayenge ki &quot;bachedani mein sujan&quot; ka medical
                matlab kya hota hai, iske common causes kya hain, diagnosis kaise
                hoti hai, aur Moradabad mein iske treatment options kya available
                hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                &quot;Bachedani Mein Sujan&quot; Ka Actual Matlab Kya Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh term generally use hoti hai jab bachedani (uterus)
                  enlarged, inflamed, ya thickened ho — symptoms ya ultrasound
                  se pata chalta hai.
                </li>
                <li>
                  Yeh apne aap mein koi single diagnosis nahi hai, balki ek
                  description hai jo kai alag gynaecological conditions se ho
                  sakti hai.
                </li>
                <li>
                  Bachedani structural growths, hormonal changes, ya
                  infection-related inflammation ki wajah se enlarged dikh
                  sakti hai.
                </li>
                <li>
                  Sahi diagnosis ke liye proper medical evaluation zaroori hai,
                  kyunki treatment diagnosis ke hisaab se kaafi alag hota hai.
                </li>
                <li>
                  Kuch cases sirf medication se theek ho jaate hain, jabki kuch
                  cases mein minimally invasive procedure ki zaroorat pad sakti
                  hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                &quot;Bachedani Mein Sujan&quot; Ke Common Medical Causes
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh tab hota hai jab uterine lining tissue uterus ki muscular
                  wall mein grow karne lagta hai.
                </li>
                <li>
                  Isse bachedani enlarged, tender, aur thickened ho jaati hai.
                </li>
                <li>
                  Aam taur par heavy, painful periods aur chronic pelvic
                  discomfort ka karan banta hai.
                </li>
                <li>
                  Bachedani mein sujan ka sabse common medical explanation in
                  mein se ek hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Uterine Fibroids
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Non-cancerous growths jo uterus ki wall mein banti hain aur
                  bachedani ko significantly enlarge kar sakti hain.
                </li>
                <li>
                  Isse heavy bleeding, pelvic pressure, aur bade cases mein
                  visibly enlarged abdomen ho sakta hai.
                </li>
                <li>
                  Fibroids single ya multiple ho sakte hain, aur size mein bhi
                  kaafi vary karte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Endometritis (Uterus Ka Infection)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterine lining mein inflammation, jo aksar infection ki wajah
                  se hota hai.
                </li>
                <li>
                  Yeh delivery, miscarriage, ya kisi gynaecological procedure ke
                  baad ho sakta hai.
                </li>
                <li>
                  Typically pelvic pain, fever, aur abnormal discharge ke saath
                  present hota hai.
                </li>
                <li>
                  Isme turant medical treatment ki zaroorat hoti hai, usually
                  antibiotics se.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh reproductive organs ka infection hai, jisme uterus bhi
                  shamil ho sakta hai, aksar untreated sexually transmitted
                  infections se related.
                </li>
                <li>
                  Isse uterine aur pelvic inflammation, pain, aur abnormal
                  discharge ho sakta hai.
                </li>
                <li>
                  Agar treat na kiya jaye to long-term complications, jaise
                  fertility problems, ho sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Hormonal Changes Aur Premenstrual Swelling
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mild uterine aur pelvic swelling ovulation ke aas-paas ya
                  period se pehle naturally ho sakti hai, hormonal fluctuation
                  ki wajah se.
                </li>
                <li>
                  Yeh type ki swelling generally temporary hoti hai aur apne aap
                  theek ho jaati hai, lekin agar symptoms persistent ya severe
                  hain to evaluation zaroor karwayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Endometrial Hyperplasia
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Uterine lining ka thickening, jo aksar hormonal imbalance se
                  related hota hai.
                </li>
                <li>
                  Kabhi-kabhi heavy ya irregular bleeding ke saath bhi jud
                  sakta hai.
                </li>
                <li>
                  Especially menopause ke kareeb ya baad mein iske liye
                  monitoring aur treatment zaroori hota hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Sujan Se Jude Common Symptoms
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy ya prolonged menstrual bleeding.
                </li>
                <li>
                  Pelvic pain ya cramping, kabhi-kabhi period ke baad bhi
                  rehna.
                </li>
                <li>
                  Lower abdomen mein pressure ya fullness jaisi feeling.
                </li>
                <li>
                  Intercourse ke dauran pain.
                </li>
                <li>
                  Abnormal vaginal discharge, especially agar infection
                  underlying cause hai.
                </li>
                <li>
                  Fever, agar swelling endometritis ya PID jaise infection se
                  related hai.
                </li>
                <li>
                  Baar-baar urination ya bowel pressure, significant uterine
                  enlargement ke cases mein.
                </li>
                <li>
                  Fatigue aur anaemia ke signs, chronic heavy bleeding ki wajah
                  se.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Gynaecologist Se Kab Milna Chahiye?
              </h2>

              <p className="mb-4 text-gray-700">
                Agar aapko yeh symptoms ho rahe hain to gynaecologist se consult
                karein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Persistent pelvic pain ya pressure jo apne aap theek nahi ho
                  raha.
                </li>
                <li>
                  Heavy ya prolonged periods ke saath pelvic discomfort.
                </li>
                <li>
                  Fever ke saath pelvic pain, jo infection ka signal ho sakta
                  hai jisme turant treatment ki zaroorat ho.
                </li>
                <li>
                  Abnormal vaginal discharge, especially agar usme unpleasant
                  odour ho.
                </li>
                <li>
                  Lower abdomen mein noticeable enlargement bina kisi obvious
                  reason ke.
                </li>
                <li>
                  Intercourse ke dauran pain jo naya ho ya badh raha ho.
                </li>
                <li>
                  Symptoms jo daily activities ya quality of life ko affect kar
                  rahe hon.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Sujan Ki Diagnosis Kaise Hoti Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed medical history</strong> — symptom pattern,
                  menstrual history, aur recent delivery, miscarriage, ya
                  procedures ke baare mein.
                </li>
                <li>
                  <strong>Pelvic examination</strong> — uterus ka size,
                  tenderness, aur overall pelvic health check karne ke liye.
                </li>
                <li>
                  <strong>Pelvic ultrasound (transvaginal ya abdominal)</strong>{" "}
                  — fibroids, adenomyosis, ya structural changes identify karne
                  ka primary tool.
                </li>
                <li>
                  <strong>Blood tests</strong> — infection, anaemia, ya hormonal
                  imbalance check karne ke liye.
                </li>
                <li>
                  <strong>Vaginal ya cervical swab tests</strong> — agar
                  infection suspect ho, to specific organism identify karne ke
                  liye.
                </li>
                <li>
                  <strong>MRI</strong>, kuch complex cases mein, adenomyosis ya
                  large fibroids ki detailed imaging ke liye.
                </li>
                <li>
                  <strong>Endometrial biopsy</strong>, agar endometrial
                  hyperplasia ya abnormal cell changes suspect ho.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Sujan Ke Treatment Options
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Management
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Antibiotics</strong> — endometritis ya PID jaise
                  infections ke liye, typically first-line treatment.
                </li>
                <li>
                  <strong>Anti-inflammatory medication</strong> — pain aur
                  inflammation-related discomfort kam karne ke liye.
                </li>
                <li>
                  <strong>Hormonal therapy</strong> — adenomyosis ya hormonal
                  imbalance se related bleeding aur pain manage karne ke liye.
                </li>
                <li>
                  <strong>Iron supplementation</strong> — chronic heavy bleeding
                  se hone wali anaemia ke liye.
                </li>
                <li>
                  <strong>Tranexamic acid</strong> — jab structural causes
                  identify hote hain to heavy bleeding episodes kam karne ke
                  liye.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Minimally Invasive Aur Surgical Options
              </h3>
              <p className="mb-4 text-gray-700">
                Jab sirf medication kaafi nahi hoti, ya kisi structural cause ko
                more definitive treatment ki zaroorat hoti hai:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Laparoscopic myomectomy</strong> — fibroids ki wajah
                  se significant uterine enlargement ke liye, uterus ko preserve
                  karte hue.
                </li>
                <li>
                  <strong>Hysteroscopic procedures</strong> — uterine cavity ke
                  andar abnormalities evaluate aur treat karne ke liye.
                </li>
                <li>
                  <strong>Laparoscopic hysterectomy</strong> — severe,
                  treatment-resistant cases ke liye, especially adenomyosis
                  mein, jab childbearing complete ho chuki ho.
                </li>
                <li>
                  <strong>Drainage ya surgical management</strong>, rare aur
                  severe infection-related cases mein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Surgery Ki Zaroorat Ho To Minimally Invasive Treatment Kyun
                Better Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Minimal scarring</strong>, sirf 5–10mm ke incisions ke
                  saath.
                </li>
                <li>
                  <strong>Open surgery ke comparison mein kaafi kam
                  post-operative pain</strong>.
                </li>
                <li>
                  <strong>Shorter hospital stay</strong>, aksar day-care
                  procedure ya 24–48 hour admission.
                </li>
                <li>
                  <strong>Faster recovery</strong>, zyaadatar mahilayein 1–3
                  hafton mein normal activity resume kar leti hain.
                </li>
                <li>
                  <strong>Fertility aur healthy tissue ka behtar
                  preservation</strong>, precise, high-definition surgical
                  visualisation ki wajah se.
                </li>
                <li>
                  <strong>Open surgical approaches ke comparison mein infection
                  aur internal adhesions ka kam risk</strong>.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preventive Measures Aur General Uterine Health Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular gynaecological check-ups karwayein, symptoms na hone
                  par bhi, early detection ke liye.
                </li>
                <li>
                  Kisi bhi pelvic infection ka turant treatment karwayein, taaki
                  wo aage badh kar recur na ho.
                </li>
                <li>
                  Safe sexual health measures follow karein, PID jaise
                  infections ka risk kam karne ke liye.
                </li>
                <li>
                  Delivery ya kisi gynaecological procedure ke baad achi hygiene
                  maintain karein.
                </li>
                <li>
                  Persistent pelvic pain ya heavy bleeding ko ignore na karein,
                  kyunki early diagnosis se treatment kam invasive aur zyada
                  effective hota hai.
                </li>
                <li>
                  Kisi bhi gynaecological procedure ke baad advised follow-up
                  zaroor karein, healing monitor karne ke liye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Bachedani Mein Sujan Ka Ilaj Karne Waali
                Doctor, Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Moradabad ki un mahilayon ke liye jo bachedani mein sujan, pain,
                ya related symptoms face kar rahi hain, Dr. Priyanka Pachauri
                (MS in Obstetrics & Gynaecology, FMAS, Advanced Infertility
                Fellowship) diagnosis aur treatment ke liye ek thorough,
                technology-supported approach offer karti hain. Unki official
                website, (
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                ), ke according, unki practice mein shaamil hai:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Shree Advanced Urogynae Clinic ki Co-lead aur Ujala Cygnus
                  BrightStar Hospital mein Consultant.
                </li>
                <li>
                  &quot;Her Health First&quot; philosophy, jisme patients ko
                  unki diagnosis aur treatment options ke baare mein clear
                  explanation milta hai.
                </li>
                <li>
                  <strong>3D/4D ultrasound imaging</strong>, jisse uterus ka
                  size, fibroids, aur adenomyosis-related changes accurately
                  assess ho paate hain.
                </li>
                <li>
                  <strong>High-definition 3D laparoscopic technology</strong>,
                  jo laparoscopic myomectomy aur hysterectomy jaisi procedures
                  ke liye use hoti hai jab surgical treatment zaroori ho.
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy</strong>, jab uterine swelling
                  ke saath abnormal bleeding bhi ho to uterine cavity ko directly
                  examine karne ke liye useful.
                </li>
                <li>
                  Clinic ki meta description mein menstrual disorder treatment ko
                  unki core practice areas mein specifically list kiya gaya
                  hai, gynaecological surgery aur fertility care ke saath.
                </li>
                <li>
                  Ek comprehensive women&apos;s health practice, jisse patients
                  ko diagnosis se treatment tak continuous, coordinated care
                  milti hai.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Kyunki &quot;uterine swelling&quot; kai alag-alag underlying
                conditions se ho sakti hai, isliye proper in-person evaluation —
                ultrasound aur relevant blood tests ke saath — hi exact cause
                identify karne aur aapke liye sahi treatment path decide karne ka
                sabse reliable tarika hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri Se Contact Karein — Apni Consultation Book
                Karein
              </h2>

              <p className="mb-4 text-gray-700">
                Agar aapko uterine swelling ke symptoms ho rahe hain aur aap
                proper evaluation chahti hain, to aap clinic se in tarikon se
                contact kar sakti hain:
              </p>

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

              <p className="mt-4 text-gray-700">
                Aap call ya WhatsApp par message karke consultation book kar
                sakti hain, apne symptoms discuss kar sakti hain, aur samajh
                sakti hain ki aapke liye kaun se diagnostic tests aur treatment
                options sahi hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Zaroori Baatein Jo Jaanna Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  &quot;Bachedani mein sujan&quot; ek general term hai jo
                  adenomyosis, fibroids, ya infection jaisi kai alag conditions
                  ko indicate kar sakti hai.
                </li>
                <li>
                  Ultrasound aur clinical evaluation se accurate diagnosis kisi
                  bhi treatment se pehle zaroori hai.
                </li>
                <li>
                  Endometritis ya PID jaise infections ko complications se
                  bachne ke liye turant antibiotic treatment ki zaroorat hoti
                  hai.
                </li>
                <li>
                  Fibroids ya adenomyosis jaise structural causes ko medical
                  management, ya kuch cases mein minimally invasive surgery, ki
                  zaroorat pad sakti hai.
                </li>
                <li>
                  Laparoscopic treatment options, jab zaroorat ho, traditional
                  open surgery ke comparison mein faster recovery aur kam pain
                  offer karte hain.
                </li>
                <li>
                  Persistent symptoms ka early evaluation overall zyada
                  effective aur kam invasive treatment ki taraf le jaata hai.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                &quot;Bachedani mein sujan&quot;, yaani uterine swelling, ek
                common concern hai jo hormonal fluctuations, fibroids se lekar
                PID ya adenomyosis jaise infections tak, kai alag causes se ho
                sakti hai. Kyunki treatment cause ke hisaab se kaafi alag hota
                hai, isliye pelvic examination, ultrasound, aur relevant blood
                tests ke through proper diagnosis hi sabse pehla aur zaroori
                step hai. Chahe aapka treatment path medication ho, antibiotics
                ho, ya minimally invasive procedure ho, qualified gynaecologist
                se accurate evaluation lene se hi relief ka sabse clear rasta
                milta hai. Agar aapko persistent pelvic pain, heavy bleeding, ya
                bachedani mein sujan ke koi bhi symptoms ho rahe hain, to wait
                na karein — timely evaluation aapke comfort aur long-term health
                dono ke liye real farak laati hai.
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
