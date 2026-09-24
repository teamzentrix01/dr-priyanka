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

export default function ShadiKeBaadPregnancyProblemDoctor() {
  const faqs = [
    {
      q: "Shadi ke kitne time baad doctor se consult karna chahiye agar pregnancy na ho?",
      a: "Agar 1 saal regular try karne ke baad bhi pregnancy na ho (35 se zyada age mein 6 mahine baad), to evaluation recommend ki jati hai.",
    },
    {
      q: "Moradabad mein pregnancy problem ka ilaj kaun karta hai?",
      a: "Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) comprehensive fertility evaluation aur treatment offer karti hain.",
    },
    {
      q: "Pregnancy mein delay ka karan kya ho sakta hai?",
      a: "Female ya male fertility factors, hormonal imbalance, structural issues, ya kabhi-kabhi unexplained causes.",
    },
    {
      q: "Kya sirf female partner ka evaluation kaafi hai?",
      a: "Nahi, fertility issues dono partners mein ho sakte hain, isliye dono ka evaluation zaroori hai.",
    },
    {
      q: "Kya IVF hi ek option hai agar pregnancy nahi ho rahi?",
      a: "Nahi, kai couples simpler treatments se hi conceive kar lete hain, IVF sirf specific cases mein recommend kiya jata hai.",
    },
    {
      q: "PCOD pregnancy ko kaise affect karta hai?",
      a: "PCOD irregular ovulation ka karan ban sakta hai, jisse pregnancy mein delay ho sakta hai, lekin sahi treatment se manage kiya ja sakta hai.",
    },
    {
      q: "Kya dono partners ko saath consultation mein aana chahiye?",
      a: "Haan, agar possible ho to dono partners ka saath aana coordinated evaluation ke liye helpful hota hai.",
    },
    {
      q: "Kya fertility problems hamesha treatable hoti hain?",
      a: "Zyadatar underlying causes treatable hain, aur proper evaluation ke baad successful pregnancy ka chance significantly improve hota hai.",
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
                Shadi Ke Baad Pregnancy Problem Doctor: Moradabad Mein Complete
                Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Shadi ke baad jab couples family planning start karte hain, to
                kuch time tak pregnancy na hona ek bahut common concern ban jata
                hai — aur is topic par family aur samaj ka pressure ise aur bhi
                mushkil bana deta hai. Kai couples confused rehte hain ki kab tak
                wait karna normal hai aur kab doctor se consult karna chahiye.
                Reality yeh hai ki pregnancy mein delay ke kai possible reasons
                ho sakte hain, aur zyadatar cases mein sahi evaluation aur ilaj
                ke baad conception possible hota hai. Is article mein hum
                samjhenge ki shadi ke baad pregnancy problem kyun hoti hai, kab
                doctor se milna chahiye, aur Moradabad mein Dr. Priyanka
                Pachauri is journey mein kaise support karti hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Shadi Ke Baad Pregnancy Mein Delay Kab Normal Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek healthy couple ke liye, regular unprotected intercourse ke
                  ek saal tak pregnancy na hona ek common threshold maana jata
                  hai jiske baad evaluation recommend ki jati hai.
                </li>
                <li>
                  Agar woman ki age 35 se zyada hai, to yeh timeline aksar 6
                  mahine tak kam kar diya jata hai, kyunki age ke saath fertility
                  naturally kam hoti hai.
                </li>
                <li>
                  Shuru ke kuch mahine mein pregnancy na hona zyadatar normal
                  hota hai, aur isse turant infertility ka signal nahi maanna
                  chahiye.
                </li>
                <li>
                  Har cycle mein conception ka chance limited hota hai, even
                  healthy couples ke liye bhi, isliye patience zaroori hai lekin
                  awareness bhi important hai.
                </li>
                <li>
                  Agar koi known medical condition already present hai (jaise
                  irregular periods, PCOD, ya pehle ki koi surgery), to jaldi
                  evaluation better ho sakta hai, poore ek saal wait kiye bina.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Mein Delay Ke Common Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Female Factors
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ovulation problems</strong>, jaise PCOD/PCOS ki wajah
                  se irregular ya absent ovulation.
                </li>
                <li>
                  <strong>Tubal blockage</strong>, jo egg aur sperm ke milne
                  mein rukawat daal sakta hai.
                </li>
                <li>
                  <strong>Endometriosis</strong>, jo pelvic structures ko affect
                  kar sakta hai aur fertility par asar daal sakta hai.
                </li>
                <li>
                  <strong>Uterine abnormalities</strong>, jaise fibroids,
                  polyps, ya uterine septum jo implantation affect kar sakte
                  hain.
                </li>
                <li>
                  <strong>Age-related fertility decline</strong>, khaaskar 35 ki
                  age ke baad.
                </li>
                <li>
                  <strong>Thyroid ya hormonal imbalance</strong>, jo menstrual
                  cycle aur ovulation ko disrupt kar sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Male Factors
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Sperm count ya quality se related issues</strong>, jo
                  pregnancy chances ko significantly affect kar sakte hain.
                </li>
                <li>
                  <strong>Hormonal imbalance in men</strong>, jo sperm
                  production ko affect kar sakta hai.
                </li>
                <li>
                  <strong>Lifestyle factors</strong>, jaise smoking, excessive
                  alcohol, ya stress, jo sperm health par asar daal sakte hain.
                </li>
                <li>
                  <strong>Structural ya medical conditions</strong>, jo sperm
                  delivery ko affect kar sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Combined ya Unexplained Factors
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kai cases mein, dono partners mein mild contributing factors
                  ho sakte hain jo mil kar conception ko mushkil banate hain.
                </li>
                <li>
                  Kuch cases &quot;unexplained infertility&quot; categorize kiye
                  jate hain, jahan detailed evaluation ke baad bhi koi specific
                  cause identify nahi hota, lekin treatment phir bhi effective ho
                  sakta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kin Symptoms Ko Ignore Nahi Karna Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular ya bahut kam frequent periods.
                </li>
                <li>
                  Bahut heavy ya bahut halke periods.
                </li>
                <li>
                  Severe period pain jo daily activities ko affect kare.
                </li>
                <li>
                  Pehle koi pelvic infection ya surgery ka history.
                </li>
                <li>
                  Excess facial ya body hair, ya sudden weight gain (PCOD ke
                  possible signs).
                </li>
                <li>
                  Recurrent miscarriage ka history.
                </li>
                <li>
                  Male partner mein koi known health condition jo fertility ko
                  affect kar sakti ho.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Agar in mein se koi bhi symptom present hai, to poore ek saal
                wait karne ki bajaye jaldi evaluation better hoti hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Evaluation Process Kaisa Hota Hai
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Female Evaluation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed menstrual aur medical history</strong>, cycle
                  pattern aur symptoms samajhne ke liye.
                </li>
                <li>
                  <strong>Hormonal blood tests</strong>, thyroid, prolactin, aur
                  other relevant hormones check karne ke liye.
                </li>
                <li>
                  <strong>Pelvic ultrasound</strong>, ovaries aur uterus ki
                  structure evaluate karne ke liye.
                </li>
                <li>
                  <strong>Tubal patency tests</strong>, yeh check karne ke liye
                  ki fallopian tubes blocked to nahi hain.
                </li>
                <li>
                  <strong>Ovulation tracking</strong>, yeh confirm karne ke liye
                  ki ovulation regularly ho rahi hai ya nahi.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Male Evaluation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Semen analysis</strong>, sperm count, motility, aur
                  morphology check karne ke liye.
                </li>
                <li>
                  <strong>Hormonal testing</strong>, agar semen analysis mein
                  koi concern dikhe.
                </li>
                <li>
                  <strong>Physical examination</strong>, agar koi structural
                  concern suspect ho.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Combined Approach
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dono partners ka evaluation together plan kiya jata hai, taaki
                  accurate aur complete picture mil sake.
                </li>
                <li>
                  Ek doctor jo dono partners ko coordinate kar sake, treatment
                  planning ko zyada efficient banata hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Treatment Options Jab Pregnancy Mein Delay Ho
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lifestyle Aur Basic Interventions
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation tracking aur timing guidance, taaki fertile window
                  ko better samjha ja sake.
                </li>
                <li>
                  Weight management, agar weight fertility ko affect kar raha
                  ho.
                </li>
                <li>
                  Stress management, kyunki chronic stress hormonal balance ko
                  affect kar sakta hai.
                </li>
                <li>
                  Underlying conditions ka treatment, jaise thyroid ya PCOD
                  management.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Medical Treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation induction medications, un women ke liye jinki
                  ovulation irregular ya absent ho.
                </li>
                <li>
                  Hormonal treatment, underlying hormonal imbalances address
                  karne ke liye.
                </li>
                <li>
                  Surgical treatment, agar fibroids, polyps, ya tubal blockage
                  jaisi structural issues identify hoti hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advanced Fertility Treatment
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>IUI (Intrauterine Insemination)</strong>, kuch cases
                  mein recommend ki ja sakti hai.
                </li>
                <li>
                  <strong>IVF (In Vitro Fertilization)</strong>, un couples ke
                  liye jinhe advanced fertility support ki zaroorat ho.
                </li>
                <li>
                  Advanced diagnostic tools, jaise time-lapse embryo monitoring,
                  jo IVF success rates improve karne mein madad kar sakte hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Emotional Support Ki Ahmiyat
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy mein delay emotionally bahut challenging ho sakta
                  hai, khaaskar family aur samaj ke pressure ke saath.
                </li>
                <li>
                  Dono partners alag tareeke se cope kar sakte hain, isliye open
                  communication zaroori hai.
                </li>
                <li>
                  Counseling support kaafi couples ke liye helpful hota hai,
                  medical treatment ke saath-saath.
                </li>
                <li>
                  Doctor se emotional concerns bhi openly discuss karna utna hi
                  important hai jitna physical symptoms discuss karna.
                </li>
                <li>
                  Support system build karna — chahe partner ho, family ho, ya
                  counselor — is journey ko thoda aasan bana sakta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri – Moradabad Mein Pregnancy Problem Ka Ilaj
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri (Dr. Priyanka Gynaec) Moradabad mein
                comprehensive fertility evaluation aur treatment offer karti
                hain, un couples ke liye jinhe shadi ke baad pregnancy mein
                problem ho rahi hai. Unki official website (
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
                  <strong>Fertility evaluation aur IVF services</strong>, GERI
                  time-lapse embryo incubator jaisi advanced technology ke saath.
                </li>
                <li>
                  <strong>AI-powered semen analysis aur DNA integrity
                  testing</strong>, jo male fertility diagnostics ko zyada
                  precise banata hai.
                </li>
                <li>
                  <strong>Advanced diagnostic imaging</strong>, Voluson E22
                  3D/4D ultrasound machine sameet, accurate evaluation ke liye.
                </li>
                <li>
                  <strong>Menstrual disorder aur PCOD/PCOS management</strong>,
                  jo aksar pregnancy mein delay ka underlying cause hote hain.
                </li>
                <li>
                  <strong>Diagnostic aur therapeutic hysteroscopy</strong>,
                  uterine conditions evaluate aur treat karne ke liye jo
                  fertility affect kar sakti hain.
                </li>
                <li>
                  Ek <strong>&quot;Her Health First&quot; approach</strong>,
                  jisse har consultation patient ki story sunne se shuru hoti
                  hai, na ki turant tests ya treatment recommend karne se.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Ki Preparation Kaise Karein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Apni menstrual cycle history note karein, cycle length aur
                  kisi bhi irregularity samet.
                </li>
                <li>
                  Kitne time se try kar rahe hain, yeh clearly note karein.
                </li>
                <li>
                  Koi bhi previous diagnosis ya treatment ka history bring karein,
                  agar ho to.
                </li>
                <li>
                  Dono partners ka lifestyle aur health history discuss karne ke
                  liye ready rahein.
                </li>
                <li>
                  Apne questions pehle se likh lein, taaki consultation ke
                  dauran kuch bhool na jayein.
                </li>
                <li>
                  Dono partners agar possible ho to appointment mein saath
                  aayein, taaki evaluation coordinated ho sake.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Family Aur Samaj Ke Pressure Ko Kaise Handle Karein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Har couple ka timeline different hota hai, isliye doosron ke
                  saath compare karna avoid karein.
                </li>
                <li>
                  Family members ko politely lekin clearly boundaries set karein,
                  especially unsolicited advice ya baar-baar puchhe gaye
                  sawalon ke liye.
                </li>
                <li>
                  Apni medical journey ki details har kisi ke saath share karna
                  zaroori nahi hai, yeh aapka personal decision hai.
                </li>
                <li>
                  Doctor ki guidance par trust karein, na ki family ya friends
                  ke informal suggestions par, jo aksar medically accurate nahi
                  hote.
                </li>
                <li>
                  Ek dusre ka support karein, kyunki yeh journey dono partners
                  ke liye emotionally demanding ho sakti hai.
                </li>
                <li>
                  Yaad rakhein ki fertility ek medical matter hai, na ki kisi
                  ki galti ya kami, isliye guilt ya blame avoid karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Doctor Se Pucchne Wale Important Sawaal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hamari specific situation ke hisaab se, evaluation ka next
                  step kya hona chahiye?
                </li>
                <li>
                  Kya humein turant tests karwane chahiye ya kuch aur mahine
                  wait karna chahiye?
                </li>
                <li>
                  Agar koi specific cause identify hoti hai, to treatment options
                  kya honge?
                </li>
                <li>
                  Treatment shuru karne ke baad success ka realistic timeline
                  kya hai?
                </li>
                <li>
                  Kya lifestyle changes se bhi hamari chances improve ho sakti
                  hain?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths Shadi Ke Baad Pregnancy Problem Ke Baare Mein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Agar 1-2 mahine mein pregnancy nahi hui to kuch
                  galat hai.&quot;</strong> Zyadatar healthy couples ke liye bhi
                  conception mein kuch mahine lag sakte hain, isliye shuru mein
                  wait karna normal hai.
                </li>
                <li>
                  <strong>&quot;Infertility hamesha sirf woman ki problem hoti
                  hai.&quot;</strong> Fertility issues female aur male dono
                  partners mein ho sakte hain, isliye dono ka evaluation zaroori
                  hai.
                </li>
                <li>
                  <strong>&quot;IVF hi sirf ek treatment option hai.&quot;</strong>{" "}
                  Kai couples simpler treatments, jaise ovulation induction ya
                  lifestyle changes, se hi successfully conceive kar lete hain.
                </li>
                <li>
                  <strong>&quot;Fertility problems hamesha permanent hoti
                  hain.&quot;</strong> Zyadatar underlying causes treatable hain,
                  aur sahi evaluation ke baad successful pregnancy possible hoti
                  hai.
                </li>
                <li>
                  <strong>&quot;Stress akela infertility ka karan hota
                  hai.&quot;</strong> Stress hormonal balance ko affect kar
                  sakta hai, lekin zyadatar fertility challenges ke specific
                  medical causes hote hain jinke liye proper diagnosis zaroori
                  hai.
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
