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

export default function BachchaGirneKaIlaj() {
  const faqs = [
    {
      q: "Bachcha girna kya hota hai?",
      a: "20 hafte se pehle pregnancy ka khud-ba-khud khatam ho jaana. Ise miscarriage kehte hain.",
    },
    {
      q: "Bachcha girne ka sabse common karan kya hai?",
      a: "Shuruaati hafton mein baby ke chromosomes ki problem. Ismein mahila ki galti nahi hoti.",
    },
    {
      q: "Kya pregnancy mein bleeding ka matlab miscarriage hai?",
      a: "Hamesha nahi. Lekin har bleeding par doctor ko dikhana zaroori hai.",
    },
    {
      q: "Kya miscarriage se bacha ja sakta hai?",
      a: "Kuch karan roke ja sakte hain, jaise thyroid ya cervix ki problem. Chromosome ke karan wale miscarriage nahi.",
    },
    {
      q: "Miscarriage ke baad ilaj kya hota hai?",
      a: "Situation ke hisaab se wait and watch, dawaiyan ya chhoti procedure. Doctor decide karti hain.",
    },
    {
      q: "Agli pregnancy kab plan karein?",
      a: "Doctor ki salah se, sharir aur mann theek hone ke baad. Pehle jaanch karana behtar hai.",
    },
    {
      q: "Baar-baar miscarriage ho to kya karein?",
      a: "2 ya usse zyada loss ke baad jaanch karayein. Karan milne par ilaj ho sakta hai.",
    },
    {
      q: "Kya gharelu nuskhon se bachcha girna ruk sakta hai?",
      a: "Nahi. Sahi jaanch aur doctor ki dekhbhaal zaroori hai.",
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
                Bachcha Girne Ka Ilaj: Karan, Lakshan Aur Sahi Treatment (Doctor,
                Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy ki khushi ke beech achanak bleeding ya dard shuru ho
                jaye, to dar lagna swabhavik hai. Aur agar bachcha gir jaye, to
                mann mein kai sawaal aate hain: &quot;Meri kya galti
                thi?&quot;, &quot;Dobara hoga to?&quot;, &quot;Kya ab pregnancy
                kabhi nahi tikegi?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Sabse pehle yeh baat samajh lein: miscarriage bahut mahilaon ke
                saath hota hai, aur zyada-tar cases mein yeh mahila ki kisi
                galti ki wajah se nahi hota. Pregnancy ke shuruaati hafton mein
                aksar baby ke chromosomes ki problem iska karan hoti hai, jise
                rokna aapke haath mein nahi tha.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Miscarriage kya hota hai aur iske types</li>
                <li>Bachcha girne ke karan aur lakshan</li>
                <li>Kab turant doctor ko dikhayein</li>
                <li>Jaanch aur ilaj ke options</li>
                <li>Baar-baar miscarriage mein kya karein</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Miscarriage Kya Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Miscarriage ka matlab hai pregnancy ka 20 hafte se pehle
                  khud-ba-khud khatam ho jaana.
                </li>
                <li>
                  Isse aam bhasha mein &quot;bachcha girna&quot;, &quot;pregnancy
                  girna&quot; ya &quot;abortion&quot; (spontaneous) bhi kehte
                  hain.
                </li>
                <li>
                  Zyada-tar miscarriage pehle 12 hafte (first trimester) mein
                  hote hain.
                </li>
                <li>
                  Aam taur par, pehchani hui pregnancies mein se lagbhag 10-20
                  percent miscarriage mein khatam ho jaati hain. Asli number
                  isse zyada ho sakta hai, kyunki kai mahilaon ko pregnancy ka
                  pata hi nahi chalta.
                </li>
                <li>
                  Ek baar miscarriage hone ka matlab yeh nahi ki aapko dobara
                  hoga. Zyada-tar mahilayein agli pregnancy mein healthy baby ko
                  janam deti hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Miscarriage Ke Alag-Alag Prakar
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Threatened miscarriage:</strong> Bleeding hoti hai,
                  lekin cervix band hai aur baby ki dhadkan dikhti hai. Kai
                  cases mein pregnancy aage chalti hai.
                </li>
                <li>
                  <strong>Inevitable miscarriage:</strong> Bleeding ke saath
                  cervix khul chuka hai, aur miscarriage rukna mushkil hota hai.
                </li>
                <li>
                  <strong>Incomplete miscarriage:</strong> Pregnancy ka kuch
                  hissa bahar aa gaya hai, aur kuch andar reh gaya hai.
                </li>
                <li>
                  <strong>Complete miscarriage:</strong> Poora pregnancy tissue
                  bahar aa gaya hai.
                </li>
                <li>
                  <strong>Missed miscarriage:</strong> Baby ki dhadkan band ho
                  chuki hoti hai, lekin bleeding ya dard nahi hota. Yeh aksar
                  ultrasound mein pakda jaata hai.
                </li>
                <li>
                  <strong>Septic miscarriage:</strong> Infection ke saath
                  miscarriage. Yeh emergency hai.
                </li>
                <li>
                  <strong>Recurrent pregnancy loss:</strong> Baar-baar (aam taur
                  par 2 ya usse zyada) pregnancy loss.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachcha Girne Ke Lakshan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yoni se bleeding: halki spotting se lekar zyada khoon tak.
                </li>
                <li>
                  Pet ke neeche dard ya marod, periods jaisa.
                </li>
                <li>Kamar ke neeche dard.</li>
                <li>Yoni se tissue ya clots nikalna.</li>
                <li>Paani ya peela-safed discharge.</li>
                <li>
                  Pregnancy ke lakshan achanak kam ho jaana, jaise ulti aana ya
                  chhati mein bhaari-pan kam hona (yeh akela lakshan pakka nahi
                  hota).
                </li>
                <li>Chakkar, kamzori ya bukhar.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ya Hospital Jayein? (Red Flags)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut zyada bleeding, jaise ek ghante mein pad poora bhig
                  jaye.
                </li>
                <li>Bade clots aana.</li>
                <li>Tez pet dard, khaaskar ek taraf.</li>
                <li>
                  Chakkar, behoshi ya kaandhe mein dard (ectopic pregnancy ka
                  sign ho sakta hai).
                </li>
                <li>Tez bukhar ya kaanpna.</li>
                <li>Badbudar discharge.</li>
                <li>
                  Pregnancy test positive ho aur saath mein dard ya bleeding ho.
                </li>
                <li>Saans phoolna ya dil ki dhadkan tez hona.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Emergency mein der na karein.</strong> Turant apni doctor
                ya nazdeeki hospital jayein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachcha Girne Ke Main Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Baby ke chromosomes ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh pehle 3 mahine ke miscarriage ka sabse bada karan mana
                  jaata hai.
                </li>
                <li>
                  Fertilization ke waqt hi chromosomes mein gadbad ho jaati hai.
                </li>
                <li>
                  Isme mahila ya partner ki koi galti nahi hoti.
                </li>
                <li>
                  Umar badhne ke saath iska risk badhta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Bachedani ki banawat mein problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ke andar septum (deewar), fibroid ya polyp.
                </li>
                <li>Bachedani ke andar chipkav (adhesions).</li>
                <li>
                  Cervix ka kamzor hona (cervical insufficiency), jisme aksar
                  3rd-4th mahine ke baad bina dard ke miscarriage hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Thyroid ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid ka kam ya zyada hona pregnancy ko affect kar sakta
                  hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Diabetes ka control mein na hona
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood sugar zyada rehne se risk badhta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. PCOS aur hormonal problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormonal imbalance kai cases mein miscarriage ke risk se juda
                  hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Autoimmune aur clotting ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Antiphospholipid Syndrome (APS) ek bimari hai jisme khoon
                  jamne ki pravritti badh jaati hai. Yeh baar-baar miscarriage
                  ka ek pehchana hua karan hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch infections, jaise tez bukhar wale infection, pregnancy ke
                  liye khatarnak ho sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Umar
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  35 saal ke baad miscarriage ka risk badhta hai, aur 40 ke baad
                  aur zyada.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Lifestyle ke karan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Smoking, tambaku, sharaab.</li>
                <li>Bahut zyada caffeine.</li>
                <li>Bahut zyada ya bahut kam weight.</li>
                <li>Nashile padarth.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Kuch dawaiyan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch dawaiyan pregnancy mein surakshit nahi hoti. Isliye
                  pregnancy mein koi bhi dawa bina doctor ki salah ke na lein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Pehle ki surgeries ya problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Purani bachedani ki surgery ya chipkav.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Ajnat karan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kai baar poori jaanch ke baad bhi koi saaf karan nahi milta.
                  Isme bhi kai mahilayein agli pregnancy mein safal hoti hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Nahi Karta Miscarriage? (Aam Galatfahmiyan)
              </h2>

              <p className="mb-4 text-gray-700">
                Ye baatein aam taur par miscarriage ka karan nahi maani jaati:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Halki exercise ya normal kaam karna.</li>
                <li>Ek baar gir jaana ya halki chot lagna.</li>
                <li>Intercourse karna (normal pregnancy mein).</li>
                <li>Zyada ya kam khaana ek din ka.</li>
                <li>Kaam ka tension ya normal stress.</li>
                <li>Bahut khushi ya gussa mehsoos karna.</li>
                <li>Kisi ki nazar lagna ya jaadu-tona.</li>
                <li>Gynaecologist ke paas jaana ya ultrasound karwana.</li>
                <li>
                  Garam cheezein khana (papaya ya pineapple ka pakka saboot nahi
                  hai, normal matra mein).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jaanch Kaise Hoti Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Bleeding ya dard mein doctor ye jaanch suggest kar sakti hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history aur examination:</strong> LMP,
                  bleeding, dard aur purani pregnancy.
                </li>
                <li>
                  <strong>Urine ya blood pregnancy test (beta-hCG):</strong>{" "}
                  Pregnancy hormone ka level.
                </li>
                <li>
                  <strong>TVS (Transvaginal Ultrasound):</strong> Baby ki jagah,
                  dhadkan aur pregnancy tissue dekhne ke liye.
                </li>
                <li>
                  <strong>CBC (Hemoglobin):</strong> Bleeding se anemia ka pata
                  lagane ke liye.
                </li>
                <li>
                  <strong>Blood group aur Rh factor:</strong> Rh negative ho to
                  doctor ek injection (anti-D) suggest kar sakti hain.
                </li>
                <li>
                  <strong>Infection ki jaanch:</strong> Bukhar ya discharge ho
                  to.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachcha Girne Ka Ilaj: Situation Ke Hisaab Se
              </h2>

              <p className="mb-4 text-gray-700">
                Har case ka ilaj alag hota hai. Yeh sirf general jaankari hai.
                Ilaj doctor ki jaanch ke baad hi tay hoga.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Threatened miscarriage (bleeding, lekin dhadkan hai)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor ki salah se aaram karein.</li>
                <li>
                  Aam taur par bed rest ka pukka fayda prove nahi hai. Doctor
                  jaisa bataayein, waisa karein.
                </li>
                <li>
                  Zaroorat par progesterone jaisi dawaiyan doctor apne hisaab se
                  de sakti hain.
                </li>
                <li>
                  Follow-up ultrasound se dhadkan aur growth dekhi jaati hai.
                </li>
                <li>Rh negative ho to anti-D injection.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Complete miscarriage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Agar ultrasound mein sab kuch bahar aa gaya dikhe, to aksar
                  sirf follow-up aur dekhbhaal kaafi hoti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Incomplete ya missed miscarriage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor 3 options par baat karti hain:</li>
                <li>
                  <strong>Wait and watch (expectant):</strong> Sharir ko apne
                  aap tissue bahar nikalne ka time dena. Ismein bleeding kai din
                  chal sakti hai.
                </li>
                <li>
                  <strong>Dawaiyon se ilaj (medical):</strong> Doctor ki di hui
                  dawaiyan tissue ko bahar nikalne mein madad karti hain. Yeh
                  sirf doctor ki nigrani mein lein.
                </li>
                <li>
                  <strong>Chhoti procedure (surgical):</strong> Bachedani se
                  tissue saaf karna (jaise suction evacuation ya D&C). Yeh
                  anesthesia ke saath hoti hai aur aam taur par short procedure
                  hai.
                </li>
                <li>
                  Kaunsa option best hai, yeh bleeding, infection, ultrasound aur
                  aapki pasand par depend karta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Septic miscarriage (infection ke saath)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Turant hospital mein antibiotics aur bachedani saaf karne ki
                  procedure.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Cervical insufficiency
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Agle pregnancy mein cerclage (cervix par tanka) jaisa option
                  doctor suggest kar sakti hain.
                </li>
                <li>Ultrasound se cervix ki lambai dekhi jaati hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Bachedani ki problem (septum, polyp, fibroid, adhesions)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic Hysteroscopy se andar dekha jaata hai.
                </li>
                <li>
                  Hysteroscopic procedure se septum, polyp ya chipkav theek kiye
                  ja sakte hain.
                </li>
                <li>
                  Fibroid ke liye zaroorat par Laparoscopic Myomectomy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Thyroid, diabetes aur PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid ki dawa aur blood sugar ka control.</li>
                <li>
                  Pregnancy plan karne se pehle inko theek karna behtar hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. APS ya clotting ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Specialist ki salah se blood thinner aur monitoring.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Chromosome ki problem ka shak
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Zaroorat par genetic jaanch ya counselling.
                </li>
                <li>
                  Fertility treatment mein kuch cases mein embryo ki jaanch ka
                  option hota hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Miscarriage Ke Baad Kya Dhyan Rakhein?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Sharirik dekhbhaal
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctor ki di hui dawaiyan aur follow-up poori karein.
                </li>
                <li>
                  Bleeding aam taur par 1-2 hafte chalti hai. Zyada ya badbudar
                  ho to doctor ko dikhayein.
                </li>
                <li>
                  Aaram karein, lekin halki walking bhi karein.
                </li>
                <li>
                  Iron, protein aur paani wali diet lein: dal, ande, palak,
                  chukandar, fruits.
                </li>
                <li>
                  Intercourse aur tampon jaisi cheezein doctor ki ijaazat ke baad
                  shuru karein.
                </li>
                <li>
                  Periods aam taur par 4-6 hafte mein wapas aate hain.
                </li>
                <li>
                  Agli pregnancy ka plan doctor se poochkar banayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Mansik dekhbhaal
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dukh, gussa ya khalipan mehsoos karna swabhavik hai.
                </li>
                <li>
                  Apne partner se khulkar baat karein. Yeh dono ka nuksan hai.
                </li>
                <li>
                  Zaroorat ho to counsellor ya support group se baat karein.
                </li>
                <li>
                  Bahut zyada udaasi, neend ya bhookh ki dikkat lambe time tak
                  rahe to doctor ko batayein.
                </li>
                <li>Khud ko doshi na thehrayein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Agli Pregnancy Kab Plan Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut se cases mein doctor 1-2 normal periods ke baad plan
                  karne ko kehti hain, jab sharir aur mann dono taiyar hon.
                </li>
                <li>
                  Kai mahilayein jaldi conceive bhi kar leti hain, aur zyada-tar
                  cases mein sab theek rehta hai. Phir bhi doctor ki salah se hi
                  plan karein.
                </li>
                <li>
                  Plan karne se pehle jaanch aur preconception counselling
                  karayein.
                </li>
                <li>
                  Folic acid doctor ki salah se shuru karein.
                </li>
                <li>
                  Thyroid, sugar aur weight ko control mein laayein.
                </li>
                <li>Smoking, sharaab aur zyada caffeine chhodein.</li>
                <li>
                  Pregnancy hote hi jaldi doctor ko dikhayein aur early scan
                  karayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Baar-Baar Miscarriage Ho To Kya Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aam taur par 2 ya usse zyada pregnancy loss hone par jaanch
                  karana behtar hai.
                </li>
                <li>Jaanch aam taur par ye hoti hain:</li>
                <li>Thyroid aur blood sugar test.</li>
                <li>
                  APS aur clotting ki jaanch (doctor ki salah se).
                </li>
                <li>
                  Hormone tests, jaise prolactin.
                </li>
                <li>
                  3D ultrasound aur hysteroscopy se bachedani ki banawat.
                </li>
                <li>
                  Husband ka semen analysis (sperm ki quality bhi kai baar role
                  nibhati hai).
                </li>
                <li>
                  Karyotype (chromosome test) kuch cases mein.
                </li>
                <li>Infection ki jaanch.</li>
                <li>
                  Kai cases mein karan mil jaata hai aur ilaj ho sakta hai.
                </li>
                <li>
                  Kai cases mein poori jaanch ke baad bhi karan nahi milta. Fir
                  bhi sahi dekhbhaal aur early monitoring se agli pregnancy mein
                  achhe chances hote hain.
                </li>
                <li>Result har case mein alag hota hai.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Mein Miscarriage Ka Risk Kam Karne Ke Upay
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy se pehle aur pregnancy mein regular check-up
                  karayein.
                </li>
                <li>
                  Folic acid aur zaroori supplements doctor ki salah se lein.
                </li>
                <li>Thyroid aur diabetes ko control mein rakhein.</li>
                <li>Balanced diet, paani aur achhi neend.</li>
                <li>Halki exercise, doctor ki salah se.</li>
                <li>
                  Bleeding ya dard par turant doctor ko dikhayein.
                </li>
                <li>Shuruaati scan zaroor karayein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Smoking, sharaab aur tambaku bilkul na karein.</li>
                <li>
                  Bina doctor ki salah koi bhi dawa, herbal ya nuskha na lein.
                </li>
                <li>
                  Bhaari saman ya bahut thakaane wala kaam jaldi-jaldi na karein.
                </li>
                <li>
                  Bleeding ko &quot;normal&quot; samajhkar na taalein.
                </li>
                <li>
                  Jhaad-phoonk ya anjaan logon ki salah par ilaj na karwayein.
                </li>
                <li>Bahut zyada caffeine na lein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Dr. Priyanka Gynaec, Moradabad
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
                FAQ (Short Answers)
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
