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

export default function BestFemaleGynaecologistMoradabad() {
  const faqs = [
    {
      q: "Moradabad me best female gynaecologist kaha milegi?",
      a: "Dr. Priyanka Pachauri Moradabad ki ek well-regarded female gynaecologist hain, jo surgery, fertility, aur pregnancy care mein comprehensive care offer karti hain.",
    },
    {
      q: "Bahut si mahilayein female gynaecologist kyun prefer karti hain?",
      a: "Bahut si mahilayein sensitive health topics discuss karne aur examinations karwane mein female doctor ke saath zyada comfortable feel karti hain.",
    },
    {
      q: "Ek achi female gynaecologist mein kaun si qualifications honi chahiye?",
      a: "MS/MD in Obstetrics & Gynaecology dekhein, saath hi FMAS jaisi certifications jo laparoscopic surgery expertise show karti hain.",
    },
    {
      q: "Kya gender gynaecological care ki quality ko affect karta hai?",
      a: "Zaroori nahi — expertise aur communication style sabse zyada matter karte hain, lekin bahut si mahilayein female doctor ke saath zyada comfortable feel karti hain.",
    },
    {
      q: "Dr. Priyanka Pachauri kaun si services offer karti hain?",
      a: "Unki clinic laparoscopic surgery, fertility aur IVF treatment, pregnancy care, hysteroscopy, aur general gynaecological health services offer karti hai.",
    },
    {
      q: "Kya Dr. Priyanka Pachauri laparoscopic surgery mein experienced hain?",
      a: "Haan, wo FMAS-certified hain aur gynaecological procedures ke liye high-definition 3D laparoscopic technology use karti hain.",
    },
    {
      q: "Kya Dr. Priyanka Pachauri fertility treatment offer karti hain?",
      a: "Haan, unki clinic fertility evaluation aur IVF treatment offer karti hai, jo time-lapse embryo imaging jaisi advanced technology se supported hai.",
    },
    {
      q: "Pehli consultation ke liye kya le jaana chahiye?",
      a: "Apna symptom history, agar koi previous medical records hon to wo, aur puchne ke liye questions ki ek list le jaayein.",
    },
    {
      q: "Kya Dr. Priyanka Pachauri pregnancy care offer karti hain?",
      a: "Haan, unki clinic antenatal care, high-risk pregnancy management, aur normal delivery support offer karti hai.",
    },
    {
      q: "Kya main apni consultation ke dauran sensitive topics comfortably discuss kar sakti hoon?",
      a: "Haan, unka &quot;Her Health First&quot; approach kisi bhi concern ke liye comfortable, respectful space create karne par focus karta hai.",
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
                Moradabad Me Best Female Gynaecologist Kaha Milegi Complete
                Guide
              </h1>

              <p className="mb-4 text-gray-700">
                Bahut si mahilayein specifically female gynaecologist consult
                karna prefer karti hain — chahe wo routine check-up ho, pregnancy
                care ho, fertility treatment ho, ya koi sensitive gynaecological
                concern ho. Ek dusri mahila se apni personal health ki baat
                karne ka comfort, aur bina zyada explain kiye samjhe jaane ka
                reassurance, Moradabad ki bahut si patients ke liye genuinely
                important consideration hoti hai. Is guide mein hum samjhayenge
                ki itni saari mahilayein female gynaecologist kyun prefer karti
                hain, kya dekhna chahiye ek achi doctor mein, aur Moradabad ki
                ek well-regarded option, Dr. Priyanka Pachauri ke baare mein
                bhi bataayenge.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bahut Si Mahilayein Female Gynaecologist Kyun Prefer Karti Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sensitive topics discuss karne mein zyada comfort — jaise
                  menstrual health, sexual concerns, ya fertility issues.
                </li>
                <li>
                  Shared understanding ka feeling, kyunki female doctors ko
                  women&apos;s reproductive health ke bahut se aspects personally
                  familiar hote hain.
                </li>
                <li>
                  Physical examinations ke dauran kam hesitation, jo kuch
                  mahilayon ko female doctor ke saath aasaan lagta hai.
                </li>
                <li>
                  Cultural aur personal preference, especially bahut se Indian
                  households mein jahan women&apos;s healthcare decisions mein
                  family comfort bhi factor karta hai.
                </li>
                <li>
                  Pregnancy aur childbirth care mein zyada confidence, jahan
                  bahut si mahilayein is personal journey mein dusri mahila se
                  guide hona zyada comfortable feel karti hain.
                </li>
                <li>
                  Zyada empathy ka perception, especially PCOS, infertility, ya
                  menopause jaisi conditions ke liye, jinme emotional aur
                  physical dono dimensions hote hain.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Yeh note karna important hai ki bahut si mahilayon ki female
                doctor ke liye strong preference hoti hai, lekin ultimately
                sabse zaroori yeh hai ki aapko aisi gynaecologist mile — chahe
                wo kisi bhi gender ki ho — jiski expertise aur communication
                style aapko genuinely comfortable aur achi tarah se cared for
                mahsoos karwaye.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Female Gynaecologist Mein Kya Dekhna Chahiye?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Strong formal qualifications</strong> — MS ya MD in
                  Obstetrics & Gynaecology, ideally FMAS jaisi additional
                  certification ke saath laparoscopic surgery ke liye.
                </li>
                <li>
                  <strong>Relevant specialisation</strong> jo aapki specific
                  need se match kare, chahe wo fertility ho, high-risk pregnancy
                  ho, ya minimally invasive surgery ho.
                </li>
                <li>
                  <strong>Modern technology tak access</strong>, jaise 3D/4D
                  ultrasound aur advanced laparoscopic equipment.
                </li>
                <li>
                  <strong>Patient-first communication style</strong>, jahan
                  aapke questions aur concerns clearly aur bina judgment ke
                  address kiye jaayein.
                </li>
                <li>
                  <strong>Services ka comprehensive range</strong>, taaki
                  related care ke liye aapko kahin aur refer na hona pade.
                </li>
                <li>
                  <strong>Positive patient experiences aur reputation</strong>,
                  jo reviews aur local community ke word-of-mouth mein reflect
                  hoti hai.
                </li>
                <li>
                  <strong>Convenient clinic location aur hospital
                  affiliation</strong>, especially pregnancy care ya kisi bhi
                  hospital admission wali procedure ke liye important.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Mahilayein Female Gynaecologist Kyun Search Karti
                Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Routine gynaecological check-ups aur screenings.
                </li>
                <li>
                  Irregular, heavy, ya painful periods.
                </li>
                <li>
                  Pregnancy planning, antenatal care, aur delivery.
                </li>
                <li>
                  Fertility difficulties aur IVF consultation.
                </li>
                <li>PCOS diagnosis aur management.</li>
                <li>Fibroids, ovarian cysts, ya endometriosis.</li>
                <li>Menopause-related symptoms aur hormonal changes.</li>
                <li>
                  General reproductive health concerns, jisme sexual health
                  questions bhi shaamil hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ek Well-Rounded Female Gynaecologist Se Kya Services Expect
                Karni Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Comprehensive gynaecological consultations, women&apos;s health
                  ke wide range of concerns ko cover karte hue.
                </li>
                <li>
                  Menstrual disorder diagnosis aur treatment, irregular, heavy,
                  ya painful periods ke liye.
                </li>
                <li>
                  Complete pregnancy care, antenatal visits se lekar delivery
                  aur postnatal support tak.
                </li>
                <li>
                  Fertility evaluation aur IVF treatment, un couples ke liye
                  jinhe conceive karne mein difficulty ho rahi hai.
                </li>
                <li>
                  Laparoscopic aur minimally invasive surgery, fibroids, cysts,
                  aur endometriosis jaisi conditions ke liye.
                </li>
                <li>
                  Hysteroscopy, uterine cavity conditions ki direct examination
                  aur treatment ke liye.
                </li>
                <li>
                  Adolescent aur paediatric gynaecological care, more
                  comprehensive practices mein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Behtar Women&apos;s Healthcare Ko Support Karne Wali Technology
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>3D/4D ultrasound imaging</strong>, jo pregnancy
                  monitoring aur gynaecological diagnosis dono ke liye detailed
                  visualisation deti hai.
                </li>
                <li>
                  <strong>High-definition 3D laparoscopic systems</strong>, jo
                  smaller incisions aur faster recovery ke saath greater surgical
                  precision dete hain.
                </li>
                <li>
                  <strong>Diagnostic aur operative hysteroscopy</strong>, uterine
                  cavity ki direct, minimally invasive examination ke liye.
                </li>
                <li>
                  <strong>Advanced fertility technology</strong>, jaise
                  time-lapse embryo imaging, IVF treatment lene wale couples ke
                  liye.
                </li>
                <li>
                  <strong>AI-assisted diagnostic tools</strong>, jo increasingly
                  zyada accurate fertility aur reproductive assessments support
                  karne ke liye use ho rahe hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Apni Female Gynaecologist Choose Karte Waqt Kya Questions Puchein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Jis area mein mujhe help chahiye, usme aapki specific training
                  aur experience kya hai?
                </li>
                <li>
                  Kya aap khud surgery karte hain, ya procedures ke liye kahin
                  aur refer kiya jaayega?
                </li>
                <li>
                  Diagnosis aur treatment ke liye aapki clinic kaun si technology
                  use karti hai?
                </li>
                <li>
                  Aap diagnosis aur treatment options patients ko typically kaise
                  explain karte hain?
                </li>
                <li>
                  Consultation, procedure, ya delivery ke baad follow-up care ka
                  aapka approach kya hai?
                </li>
                <li>
                  Kisi urgent concern ki situation mein main aap tak kaise
                  pahunch sakti hoon?
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kin Red Flags Se Aware Rehna Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Rushed consultations, jahan questions ko dismiss kar diya
                  jaaye, address nahi kiya jaaye.
                </li>
                <li>
                  Qualifications, experience, ya treatment plans ke baare mein
                  clarity ki kami.
                </li>
                <li>
                  Procedures ya surgery ke liye pressure bina alternatives ka
                  clear explanation diye.
                </li>
                <li>
                  Poor continuity of care, treatment ke baad koi clear follow-up
                  plan na hona.
                </li>
                <li>
                  Outdated equipment, especially surgical ya fertility care ke
                  liye relevant.
                </li>
                <li>
                  Costs ke baare mein limited transparency, jo hamesha upfront
                  clearly discuss hona chahiye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri — Moradabad Ki Trusted Female Gynaecologist
              </h2>

              <p className="mb-4 text-gray-700">
                Moradabad ki un mahilayon ke liye jo specifically ek skilled,
                approachable female gynaecologist dhund rahi hain, Dr. Priyanka
                Pachauri (MS in Obstetrics & Gynaecology, FMAS, Advanced
                Infertility Fellowship) ek well-rounded, technology-supported
                practice offer karti hain. Unki official website,{" "}
                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  gynaecologistmoradabad.com
                </a>
                , ke according, unki practice mein shaamil hai:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Shree Advanced Urogynae Clinic ki Co-lead aur Ujala Cygnus
                  BrightStar Hospital mein Consultant.
                </li>
                <li>
                  <strong>&quot;Her Health First&quot; philosophy</strong>, jo
                  patient comfort, informed choice, aur individualised care par
                  strong focus ko reflect karti hai — aise values jo bahut si
                  mahilayein specifically ek female doctor mein dhundti hain.
                </li>
                <li>
                  High-definition 3D laparoscopic surgical systems, jo
                  myomectomy, cystectomy, aur hysterectomy jaisi procedures ke
                  liye use hote hain.
                </li>
                <li>
                  Ek 3D/4D ultrasound machine, jo pregnancy care aur
                  gynaecological conditions dono ke liye accurate diagnosis
                  support karti hai.
                </li>
                <li>
                  GERI time-lapse embryo imaging aur AI-assisted semen analysis,
                  jo advanced fertility technology mein investment ko reflect
                  karti hai.
                </li>
                <li>
                  Ek broad scope of practice, jisme laparoscopic gynaecological
                  surgery, fertility aur IVF treatment, antenatal aur postnatal
                  care, high-risk pregnancy management, hysteroscopy, aur
                  paediatric care shaamil hai.
                </li>
                <li>
                  Ek patient education-focused blog, jisme PCOS aur infertility,
                  endometriosis treatment, aur trimester ke hisaab se pregnancy
                  care jaise topics cover kiye gaye hain.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Unki practice ka &quot;Her Health First&quot; positioning wahi
                approach reflect karta hai jo bahut si mahilayein specifically
                female gynaecologist mein dhundti hain — carefully sunna aur
                one-size-fits-all approach ki jagah individual ke hisaab se care
                tailor karna.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Apne Visit Ke Dauran Kya Expect Karein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek comfortable, private consultation space, jahan aap openly
                  apne concerns discuss kar sakein.
                </li>
                <li>
                  Ek detailed history-taking process, jo aapke symptoms, medical
                  background, aur personal health goals ko cover kare.
                </li>
                <li>
                  Ek clear, respectful physical examination, jo sirf clinically
                  necessary hone par ki jaaye aur hamesha pehle explain ki jaaye.
                </li>
                <li>
                  Findings aur options ka straightforward explanation, bina
                  unnecessary medical jargon ke.
                </li>
                <li>
                  Questions puchne ki space, bina rushed ya judged feel kiye.
                </li>
                <li>
                  Ek clear next-steps plan, chahe wo further testing ho,
                  treatment ho, ya follow-up visit ho.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Pachauri Se Contact Karein — Apni Consultation Book
                Karein
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        MS (Obstetrics & Gynaecology), FMAS, Advanced Infertility
                        Fellowship
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
                        href="mailto:drpriyanka@gynaecologistmoradabad.com"
                        className="break-all hover:underline"
                      >
                        drpriyanka@gynaecologistmoradabad.com
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
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Comfortable First Visit Ke Liye Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pehle se apne symptoms aur questions likh lein, taaki visit ke
                  dauran kuch important miss na ho.
                </li>
                <li>
                  Previous medical records ya test results, agar aapke paas hain,
                  to unhe bhi saath le jaayein, taaki doctor ko fuller picture
                  mile.
                </li>
                <li>
                  Apne symptoms ke baare mein open aur specific rahein, chahe wo
                  personal ya embarrassing feel hon.
                </li>
                <li>
                  Agar aapko comfortable feel karne mein help milti hai to kisi
                  trusted family member ya friend ko saath le jaayein.
                </li>
                <li>
                  Jab bhi koi diagnosis ya recommendation fully clear na ho to
                  clarification zaroor puchein.
                </li>
                <li>
                  Apna treatment plan aur next steps note kar lein clinic
                  chhodne se pehle, taaki follow-up ke liye clear record rahe.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Local, Trusted Care Kyun Important Hai
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Continuity of care</strong> — same doctor ko time ke
                  saath dekhna aapki health history ki fuller picture banata hai.
                </li>
                <li>
                  <strong>Follow-up visits aasaan hoti hain</strong>, especially
                  pregnancy ya surgery ke baad.
                </li>
                <li>
                  <strong>Local health patterns aur resources ki familiarity</strong>,
                  jo referrals ya emergency situations mein helpful ho sakti hai.
                </li>
                <li>
                  <strong>Travel ka burden kam hota hai</strong>, especially
                  regular check-ups, prenatal visits, ya fertility treatment
                  cycles ke liye valuable.
                </li>
                <li>
                  <strong>Community trust aur reputation</strong>, jo time ke
                  saath consistent, quality care se banti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Zaroori Baatein Jo Yaad Rakhni Chahiye
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut si mahilayein female gynaecologist ko comfort,
                  understanding, aur easy communication ki wajah se prefer karti
                  hain.
                </li>
                <li>
                  Strong qualifications, modern technology, aur patient-first
                  communication style dekhein.
                </li>
                <li>
                  Ek comprehensive practice alag-alag specialists ke multiple
                  referrals ki zaroorat avoid karti hai.
                </li>
                <li>
                  Dr. Priyanka Pachauri Moradabad mein ek well-rounded,
                  technology-supported practice offer karti hain strong
                  patient-comfort philosophy ke saath.
                </li>
                <li>
                  Personal consultation yeh determine karne ka sabse achha tarika
                  hai ki koi doctor aapki specific needs ke liye right fit hai ya
                  nahi.
                </li>
                <li>
                  Convenient contact options — phone, WhatsApp, aur online
                  booking — reach out karna simple aur accessible banate hain.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Moradabad mein best female gynaecologist dhundna strong medical
                qualifications, modern technology tak access, aur — utna hi
                important — aisi communication style ka combination hai jo aapko
                genuinely comfortable aur respected mahsoos karwaye. Chahe aapki
                need routine care ho, pregnancy support ho, fertility treatment
                ho, ya gynaecological surgery ho, sahi doctor ko clear
                explanations, thoughtful follow-up, aur aapki individual
                situation ko samajhne wali practice offer karni chahiye. Dr.
                Priyanka Pachauri ka Moradabad mein comprehensive, &quot;Her
                Health First&quot; approach in bahut si qualities ko reflect
                karta hai. Ultimately, personal consultation hi yeh dekhne ka
                sabse achha tarika hai ki koi particular doctor ki expertise aur
                approach aapke liye sahi fit hai ya nahi.
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