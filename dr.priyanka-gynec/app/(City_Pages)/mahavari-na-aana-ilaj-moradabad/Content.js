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

export default function MahavariNaAanaIlaj() {
  const faqs = [
    {
      q: "Mahavari na aana kya hota hai?",
      a: "Yeh amenorrhea hai, jisme periods kabhi shuru hi nahi hote (primary) ya pehle regular hone ke baad ruk jate hain (secondary).",
    },
    {
      q: "Moradabad mein mahavari na aane ka ilaj kaun karta hai?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) is condition ke liye comprehensive diagnosis aur treatment offer karti hain.",
    },
    {
      q: "Mahavari na aane ke common karan kya hain?",
      a: "PCOD, thyroid dysfunction, excessive weight loss ya gain, chronic stress, aur elevated prolactin levels common causes hain.",
    },
    {
      q: "Kab doctor se consult karna chahiye agar periods na aayein?",
      a: "Agar lagatar 3 mahine ya usse zyada samay tak periods na aayein (pregnancy ke alawa), to evaluation zaroori hai.",
    },
    {
      q: "Kya mahavari na aana fertility ko affect karta hai?",
      a: "Haan, kyunki ovulation nahi ho rahi hoti, lekin underlying cause ka treatment aksar fertility improve kar sakta hai.",
    },
    {
      q: "Kya mahavari na aana treatable hai?",
      a: "Zyadatar underlying causes treatable hain, aur proper evaluation ke baad periods wapas normal ho sakte hain.",
    },
    {
      q: "Kaun se tests amenorrhea diagnose karne ke liye kiye jate hain?",
      a: "Hormonal blood tests, pelvic ultrasound, aur pregnancy test commonly use kiye jate hain.",
    },
    {
      q: "Kya 15 saal ki age tak periods na aana chinta ki baat hai?",
      a: "Haan, agar 15-16 saal ki age tak pehli mahavari na aayi ho, to evaluation recommend ki jati hai.",
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
                Mahavari Na Aana Ilaj: Moradabad Mein Complete Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Mahavari (periods) ka na aana ek aisi problem hai jo bahut si
                mahilaon aur ladkiyon ko pareshaan karti hai, lekin sharam ya
                galat jaankari ki wajah se kai log isko discuss karne se
                hichkichate hain. Kuch mahine periods miss hona kabhi-kabhi
                normal ho sakta hai, lekin lambe samay tak periods na aana ek
                underlying hormonal ya health issue ka signal ho sakta hai jise
                ignore nahi karna chahiye. Is article mein hum samjhenge ki
                mahavari na aane ke kya karan hote hain, kab doctor se consult
                karna zaroori hai, aur Moradabad mein Dr. Priyanka Pachauri is
                problem ka ilaj kaise karti hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahavari Na Aana (Amenorrhea) Kya Hota Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Amenorrhea ka matlab hai mahavari ka na aana, ya to kabhi shuru
                  hi na hona ya phir shuru hone ke baad ruk jana.
                </li>
                <li>
                  Iske do main types hote hain — primary amenorrhea aur secondary
                  amenorrhea.
                </li>
                <li>
                  Yeh koi bimari nahi, balki ek symptom hai, jo kisi underlying
                  hormonal ya health condition ki taraf ishara karta hai.
                </li>
                <li>
                  Pregnancy ke alawa, agar 3 mahine ya usse zyada samay tak
                  periods na aayein, to yeh medically evaluate karwana chahiye.
                </li>
                <li>
                  Timely diagnosis se underlying cause identify ho sakta hai aur
                  effective treatment shuru kiya ja sakta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Primary Amenorrhea Kya Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Primary amenorrhea tab kaha jata hai jab kisi ladki ki age
                  15-16 saal ho jati hai aur usko kabhi bhi pehli mahavari
                  (menarche) nahi aayi hoti.
                </li>
                <li>
                  Iske common causes mein shamil hain genetic factors, hormonal
                  imbalance, ya reproductive organs ki structural abnormalities.
                </li>
                <li>
                  Kuch cases mein delayed puberty bhi ek reason ho sakta hai,
                  jisko proper evaluation ke baad samjha ja sakta hai.
                </li>
                <li>
                  Early evaluation important hai taaki underlying cause jaldi
                  identify ho aur appropriate treatment start ho sake.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Secondary Amenorrhea Kya Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Secondary amenorrhea tab hota hai jab kisi woman ki pehle
                  regular periods aati thin, lekin ab lagatar 3 mahine ya usse
                  zyada samay tak nahi aa rahi.
                </li>
                <li>
                  Yeh primary amenorrhea se zyada common hai aur iske kai
                  possible causes ho sakte hain.
                </li>
                <li>
                  Pregnancy sabse common aur natural cause hai, isliye sabse
                  pehle isko rule out karna zaroori hai.
                </li>
                <li>
                  Iske alawa bhi kai medical aur lifestyle-related causes ho
                  sakte hain jo evaluation ke zariye identify kiye ja sakte
                  hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahavari Na Aane Ke Common Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>PCOD/PCOS</strong>, jo ovulation ko disrupt karta hai
                  aur periods ko irregular ya completely absent bana sakta hai.
                </li>
                <li>
                  <strong>Thyroid dysfunction</strong>, chahe underactive ho ya
                  overactive, dono hi menstrual cycle ko significantly affect
                  kar sakte hain.
                </li>
                <li>
                  <strong>Elevated prolactin levels</strong>, jo ovulation aur
                  menstrual cycle ko disrupt kar sakte hain.
                </li>
                <li>
                  <strong>Premature ovarian insufficiency</strong>, jisme ovaries
                  expected age se pehle hi normally function karna band kar deti
                  hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Aur Physical Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Excessive weight loss ya bahut kam body weight</strong>,
                  jo hormone production ko affect karta hai.
                </li>
                <li>
                  <strong>Excessive exercise</strong>, khaaskar competitive
                  athletes mein common.
                </li>
                <li>
                  <strong>Chronic stress</strong>, jo hypothalamus ko affect kar
                  sakta hai, jo reproductive hormones ko regulate karta hai.
                </li>
                <li>
                  <strong>Sudden ya significant weight gain</strong>, jo
                  hormonal balance ko disrupt kar sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural Causes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Uterine scarring ya adhesions (Asherman&apos;s
                  Syndrome)</strong>, aksar previous surgery ya infection se
                  related.
                </li>
                <li>
                  <strong>Congenital reproductive tract abnormalities</strong>,
                  jo primary amenorrhea mein zyada relevant hoti hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Other Causes
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Certain medications</strong>, jaise kuch contraceptives
                  ya other prescription drugs.
                </li>
                <li>
                  <strong>Perimenopause</strong>, un women mein jo menopause ke
                  transition phase mein hoti hain.
                </li>
                <li>
                  <strong>Chronic illnesses</strong>, jo overall hormonal balance
                  ko affect kar sakti hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kin Symptoms Ko Ignore Nahi Karna Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lagatar 3 mahine ya usse zyada samay tak periods na aana
                  (pregnancy ke alawa).
                </li>
                <li>
                  15-16 saal ki age tak pehli mahavari na aana.
                </li>
                <li>
                  Excess facial ya body hair, ya acne, jo hormonal imbalance ka
                  sign ho sakta hai.
                </li>
                <li>
                  Sudden weight changes periods na aane ke saath.
                </li>
                <li>
                  Headaches ya vision changes, jo kabhi-kabhi elevated prolactin
                  levels se related ho sakte hain.
                </li>
                <li>
                  Excessive fatigue ya energy levels mein badlaav.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diagnosis Kaise Hoti Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed medical aur menstrual history</strong>, cycle
                  pattern aur symptoms samajhne ke liye.
                </li>
                <li>
                  <strong>Physical examination</strong>, kisi bhi visible signs
                  jaise excess hair growth ya other symptoms check karne ke
                  liye.
                </li>
                <li>
                  <strong>Pregnancy test</strong>, sabse pehle isko rule out
                  karne ke liye.
                </li>
                <li>
                  <strong>Hormonal blood tests</strong>, thyroid, prolactin, LH,
                  FSH, aur other relevant hormones check karne ke liye.
                </li>
                <li>
                  <strong>Pelvic ultrasound</strong>, ovaries aur uterus ki
                  structure evaluate karne ke liye.
                </li>
                <li>
                  <strong>Additional tests</strong>, agar structural ya genetic
                  causes suspect ho, jaise MRI ya specific genetic testing.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahavari Na Aane Ke Treatment Options
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Underlying Cause Ka Treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOD/PCOS ke liye, hormonal medications aur lifestyle changes
                  ke through cycle regulate kiya jata hai.
                </li>
                <li>
                  Thyroid dysfunction ke liye, appropriate medication se thyroid
                  levels correct kiye jate hain, jo aksar kuch mahinon mein
                  periods wapas la deta hai.
                </li>
                <li>
                  Elevated prolactin ke liye, specific medications se levels
                  normalize kiye jate hain.
                </li>
                <li>
                  Weight-related causes ke liye, guided nutrition aur healthy
                  weight management approach recommend kiya jata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Modifications
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Balanced nutrition, adequate calories aur nutrients ke saath.
                </li>
                <li>
                  Moderate, sustainable exercise, extreme workout routines avoid
                  karke agar wahi cause ho.
                </li>
                <li>
                  Stress management techniques, jaise relaxation ya mindfulness
                  practices.
                </li>
                <li>
                  Adequate sleep, jo overall hormonal balance ke liye important
                  hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Structural Issues Ka Treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hysteroscopic treatment, agar uterine adhesions (Asherman&apos;s
                  Syndrome) identify hoti hain.
                </li>
                <li>
                  Surgical evaluation, agar structural abnormalities primary
                  amenorrhea ka cause hon.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Long-Term Monitoring
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular follow-up, treatment ke response ko monitor karne ke
                  liye.
                </li>
                <li>
                  Periodic reassessment, kyunki underlying causes aur symptoms
                  samay ke saath change ho sakte hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahavari Na Aane Ka Fertility Par Asar
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Amenorrhea ka matlab hai ki ovulation nahi ho rahi, jisse
                  naturally conceive karna mushkil ho sakta hai.
                </li>
                <li>
                  Underlying cause ka treatment aksar ovulation aur regular
                  cycles wapas la sakta hai, jisse fertility improve hoti hai.
                </li>
                <li>
                  Agar aap pregnancy plan kar rahi hain aur periods irregular ya
                  absent hain, to early evaluation strongly recommend ki jati
                  hai.
                </li>
                <li>
                  Fertility-focused treatment, jaise ovulation induction, kuch
                  cases mein recommend ki ja sakti hai underlying cause address
                  karne ke saath.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Moradabad Mein Mahavari Na Aane Ka Ilaj
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) Moradabad mein
                mahavari na aane (amenorrhea) ke liye comprehensive diagnosis
                aur treatment offer karti hain, apni gynaecological practice ke
                hisse ke roop mein. Unki official website (
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
                  <strong>Menstrual disorder aur hormonal health management</strong>,
                  jo unki clinical practice ka core part hai.
                </li>
                <li>
                  <strong>Advanced diagnostic imaging</strong>, Voluson E22
                  3D/4D ultrasound machine sameet, ovarian appearance aur uterine
                  structure evaluate karne ke liye.
                </li>
                <li>
                  <strong>Fertility evaluation aur IVF services</strong>, un
                  women ke liye relevant jinhe amenorrhea ke saath conceive
                  karne mein difficulty ho rahi ho.
                </li>
                <li>
                  Ek <strong>&quot;Her Health First&quot; approach</strong>,
                  jisse symptoms — including inki emotional impact — ko patience
                  ke saath address kiya jata hai, minor issue maan kar ignore
                  nahi kiya jata.
                </li>
                <li>
                  <strong>Educational resources</strong>, unki clinic ki website
                  par PCOS aur infertility jaise topics par blog content bhi
                  available hai.
                </li>
                <li>
                  Website par diye gaye patient testimonials consistently yeh
                  batate hain ki patients apne consultations ke dauran
                  comfortable aur well-guided feel karte hain — jo ek aisi
                  condition ke liye bahut important hai jise aksar long-term
                  management ki zaroorat hoti hai. Clinic Gandhi Nagar, Moradabad
                  mein located hai, jisse yeh city bhar ki mahilaon ke liye
                  easily accessible hai jo mahavari na aane ki problem ke
                  evaluation aur treatment ke liye consult karna chahti hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Ki Preparation Kaise Karein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Apni last normal mahavari kab aayi thi, yeh note karein.
                </li>
                <li>
                  Kisi bhi associated symptoms ko track karein, jaise weight
                  changes, hair growth, ya acne.
                </li>
                <li>
                  Family history note karein, jaise PCOD, thyroid conditions, ya
                  early menopause.
                </li>
                <li>
                  Koi bhi current medications ya supplements list karein jo aap
                  le rahi hain.
                </li>
                <li>
                  Apna stress level aur lifestyle changes discuss karne ke liye
                  ready rahein, jo recent months mein hue hon.
                </li>
                <li>
                  Apne questions pehle se likh lein, taaki consultation ke
                  dauran kuch bhool na jayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Long-Term Management Ke Liye Kya Important Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular follow-up visits treatment ke response ko track karne
                  ke liye zaroori hain.
                </li>
                <li>
                  Apne symptoms ka record rakhein, jaise cycle pattern, weight
                  changes, ya koi naya symptom.
                </li>
                <li>
                  Treatment plan ko consistently follow karein, chahe woh
                  lifestyle changes ho ya medication.
                </li>
                <li>
                  Apne doctor ko koi bhi naye symptoms turant batayein, treatment
                  adjust karne mein madad milegi.
                </li>
                <li>
                  Patience rakhein, kyunki hormonal treatment ka asar dikhne mein
                  kuch mahine lag sakte hain.
                </li>
                <li>
                  Apni overall health ka bhi dhyan rakhein, kyunki reproductive
                  health directly overall wellbeing se connected hoti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths Mahavari Na Aane Ke Baare Mein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Kuch mahine periods miss hona koi baat nahi
                  hai.&quot;</strong> Occasional delay normal ho sakta hai, lekin
                  3 mahine se zyada absence evaluate karwani chahiye.
                </li>
                <li>
                  <strong>&quot;Periods na aana sirf weight ki wajah se hota
                  hai.&quot;</strong> Weight ek factor ho sakta hai, lekin PCOD,
                  thyroid, aur stress jaise kai other causes bhi common hain.
                </li>
                <li>
                  <strong>&quot;Amenorrhea ka matlab hamesha infertility hota
                  hai.&quot;</strong> Underlying cause ka treatment aksar ovulation
                  aur fertility ko wapas normal kar sakta hai.
                </li>
                <li>
                  <strong>&quot;Yeh sirf ek cosmetic ya minor issue hai.&quot;</strong>{" "}
                  Amenorrhea aksar ek underlying hormonal ya health condition ka
                  signal hota hai jise properly evaluate karna zaroori hai.
                </li>
                <li>
                  <strong>&quot;Doctor se yeh discuss karna bahut embarrassing
                  hai.&quot;</strong> Yeh ek bahut common gynaecological concern
                  hai, aur ek accha doctor isko professionally aur bina judgment
                  ke address karega.
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
