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

export default function BachedaniMeinPaniKaIlajMoradabad() {
  const faqs = [
    {
      q: "Bachedani mein pani hona kya hota hai?",
      a: "Bachedani ya uske aas-paas fluid dikhna. Yeh normal bhi ho sakta hai aur kisi problem ka signal bhi.",
    },
    {
      q: "Kya bachedani mein pani khatarnak hai?",
      a: "Hamesha nahi. Karan ke hisaab se risk badalta hai, isliye jaanch zaroori hai.",
    },
    {
      q: "Bachedani mein pani ke lakshan kya hain?",
      a: "Pelvic dard, irregular periods, discharge, bukhar ya pregnancy na hona. Kai baar koi lakshan nahi hota.",
    },
    {
      q: "Kya isse pregnancy mein dikkat ho sakti hai?",
      a: "Haan, khaaskar tube ka pani (hydrosalpinx) conceive karne mein rukavat bana sakta hai.",
    },
    {
      q: "Kya yeh apne aap theek ho jaata hai?",
      a: "Normal ya physiological fluid aksar khud theek ho jaata hai. Infection ya blockage mein ilaj chahiye.",
    },
    {
      q: "Iski jaanch kaise hoti hai?",
      a: "TVS ultrasound, 3D/4D scan, HSG, hysteroscopy, laparoscopy aur blood tests se.",
    },
    {
      q: "Kya operation zaroori hota hai?",
      a: "Har case mein nahi. Kai cases dawa se theek hote hain, kuch mein laparoscopy ya hysteroscopy chahiye hoti hai.",
    },
    {
      q: "Kya gharelu nuskhon se pani nikal jaata hai?",
      a: "Nahi. Nuskhon se blockage ya infection theek hone ka pukka saboot nahi hai.",
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
                Bachedani Mein Pani Ka Ilaj Moradabad: Karan, Lakshan Aur Sahi
                Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Kya aapki ultrasound report mein &quot;fluid in uterus&quot;,
                &quot;free fluid in pelvis&quot; ya &quot;hydrosalpinx&quot; likha
                aaya hai? Kya aap sochkar pareshan hain ki bachedani mein pani
                ka ilaj Moradabad mein kahan aur kaise hoga? Bahut si mahilayein
                yeh report dekhkar ghabra jaati hain.
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki &quot;bachedani mein pani&quot; kisi ek bimari
                ka naam nahi hai. Yeh ek finding hai, jo alag-alag wajah se ho
                sakti hai. Kabhi yeh bilkul normal hota hai. Kabhi yeh infection,
                blockage, cyst ya hormonal problem ka signal hota hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bachedani mein pani ka matlab kya hota hai</li>
                <li>Iske main karan aur lakshan</li>
                <li>Kaunsi jaanch zaroori hai</li>
                <li>Kaunsa ilaj kab kaam aata hai</li>
                <li>Moradabad mein sahi doctor tak kaise pahunchein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Pani Kya Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Aam bolchal mein &quot;bachedani mein pani&quot; kai alag cheezon
                ke liye bola jaata hai. Isliye report ka exact naam samajhna
                zaroori hai.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fluid in endometrial cavity:</strong> Bachedani ke
                  andar ki jagah mein pani ya fluid jama hona.
                </li>
                <li>
                  <strong>Hydrosalpinx:</strong> Fallopian tube band hokar usme
                  pani bhar jaana. Log ise aksar &quot;bachedani ka pani&quot;
                  samajh lete hain.
                </li>
                <li>
                  <strong>Free fluid in pelvis / Pouch of Douglas:</strong>
                  Bachedani ke peeche ya aas-paas pelvis mein thoda pani hona.
                </li>
                <li>
                  <strong>Ovarian cyst ya follicles:</strong> Ovary mein pani se
                  bhari thailiyan, jo PCOS/PCOD mein common hain.
                </li>
                <li>
                  <strong>Hematometra / Pyometra:</strong> Bachedani mein khoon
                  ya peep (pus) jama hona.
                </li>
                <li>
                  <strong>Pregnancy se juda fluid:</strong> Sac ke aas-paas
                  collection ya subchorionic fluid.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Zaroori baat:</strong> Ovulation ke baad kai mahilaon
                mein thoda free fluid dikhna normal ho sakta hai. Har report mein
                &quot;fluid&quot; ka matlab bimari nahi hota. Sirf jaanch ke baad
                hi pata chalta hai ki ilaj chahiye ya nahi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Pani Ke Main Karan
              </h2>

              <p className="mb-4 text-gray-700">
                Ilaj cause par depend karta hai, isliye pehle karan samajhna
                zaroori hai.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Infection (PID aur Endometritis)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani, tubes ya ovaries mein bacteria ka infection.
                </li>
                <li>
                  Safai ki kami, unsafe intercourse ya delivery/abortion ke baad
                  infection ho sakta hai.
                </li>
                <li>Isse pani ya peep bhar sakti hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Fallopian tube ka blockage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Purane infection ya TB ke baad tube ka munh band ho jaata hai.
                </li>
                <li>
                  Tube ke andar ka fluid bahar nahi nikal pata, jisse
                  hydrosalpinx banta hai.
                </li>
                <li>Yeh infertility ka ek bada karan hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Cervix ka sankra hona (Cervical Stenosis)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cervix ka rasta tang ya band hone par bachedani ka fluid ya
                  khoon bahar nahi nikalta.
                </li>
                <li>
                  Yeh surgery, infection ya menopause ke baad ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Polyp aur Fibroid
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ke andar polyp ya fibroid natural drainage ko rok
                  sakte hain.
                </li>
                <li>Inse abnormal bleeding aur fluid dono ho sakte hain.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ke bahar endometrial tissue hone se pelvis mein
                  fluid aur cyst (chocolate cyst) ban sakte hain.
                </li>
                <li>Peedadayak periods iska mukhya lakshan hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. PCOS/PCOD
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovaries mein kai chhote follicles (pani ki thailiyan) dikhte
                  hain.
                </li>
                <li>
                  Periods irregular hote hain aur conceive karne mein dikkat aa
                  sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Ovarian cyst ka phatna ya leak hona
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cyst leak ya rupture hone par pelvis mein pani ya khoon dikh
                  sakta hai.
                </li>
                <li>Achanak tez dard iska common lakshan hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Ectopic pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy bachedani ke bahar tube mein ho to pelvis mein fluid
                  ya khoon jama ho sakta hai.
                </li>
                <li>Yeh emergency ho sakti hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Hormonal treatment ya IVF stimulation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fertility injections ke baad kabhi-kabhi OHSS mein pelvis ya
                  pet mein pani aa jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Menopause ke baad badlav
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Post-menopausal mahilaon mein bachedani ke andar fluid dikhe
                  to jaanch zaroori hai.
                </li>
                <li>
                  Kabhi-kabhi iske peeche endometrial ya cervical problem hoti
                  hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Pani Ke Lakshan
              </h2>

              <p className="mb-4 text-gray-700">
                Kai baar koi lakshan nahi hota aur pani sirf ultrasound mein
                pakda jaata hai. Fir bhi ye signs dhyan se dekhein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pet ke neeche ya pelvis mein dard ya bhaari-pan.
                </li>
                <li>
                  Periods irregular hona, ya bahut zyada ya bahut kam bleeding.
                </li>
                <li>Periods ke beech mein spotting.</li>
                <li>
                  Safed, peela ya badbudar discharge (white discharge).
                </li>
                <li>Intercourse ke time dard.</li>
                <li>Kamar dard jo aaram karne par bhi kam na ho.</li>
                <li>Pet phoolna ya bloating.</li>
                <li>Bukhar ya kaanpna (infection ka sign).</li>
                <li>Peshab mein jalan ya baar-baar peshab aana.</li>
                <li>
                  Kai mahine ya saal koshish ke baad bhi pregnancy na hona.
                </li>
                <li>Menopause ke baad bleeding ya discharge.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ke Paas Jayein? (Red Flags)
              </h2>

              <p className="mb-4 text-gray-700">
                Neeche diye lakshan mein der na karein, turant gynaecologist ya
                emergency mein dikhayein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Achanak bahut tez pet dard.</li>
                <li>Bahut zyada bleeding, chakkar aana ya behoshi.</li>
                <li>Tez bukhar ke saath pelvic dard.</li>
                <li>
                  Pregnancy test positive hone ke saath dard ya spotting.
                </li>
                <li>Bahut badbudar discharge.</li>
                <li>Menopause ke baad kisi bhi tarah ki bleeding.</li>
                <li>Pet ka achanak phool jaana ya saans phoolna.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Pani Ki Jaanch Kaise Hoti Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Sahi diagnosis hi sahi ilaj ki chaabi hai. Aam taur par yeh
                jaanch ki jaati hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history aur examination:</strong> Periods,
                  pregnancy, purani surgery, discharge aur dard ki jaankari.
                </li>
                <li>
                  <strong>Transvaginal Sonography (TVS):</strong> Bachedani,
                  tubes aur ovaries ko clearly dekhne ke liye sabse common test.
                </li>
                <li>
                  <strong>3D/4D Ultrasound:</strong> Bachedani ki shape aur andar
                  ki cheezein zyada detail mein dikhata hai.
                </li>
                <li>
                  <strong>HSG (Hysterosalpingography):</strong> Tubes khule hain
                  ya band, yeh dekhne ke liye, khaaskar infertility mein.
                </li>
                <li>
                  <strong>Diagnostic Hysteroscopy:</strong> Camera se bachedani
                  ke andar seedha dekhna.
                </li>
                <li>
                  <strong>Diagnostic Laparoscopy:</strong> Pet ke andar ki pelvic
                  problem ko camera se dekhna.
                </li>
                <li>
                  <strong>Blood tests:</strong> CBC, infection markers, hormone
                  tests aur zaroorat par hCG.
                </li>
                <li>
                  <strong>Pap smear, culture ya biopsy:</strong> Infection ya
                  cell changes ke liye.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Ultrasound report saath layein. Ye bhi note
                karein ki scan periods ke kaunse din hua tha, kyunki isse fluid
                ka matlab badal sakta hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Mein Pani Ka Ilaj: Cause Ke Hisaab Se
              </h2>

              <p className="mb-4 text-gray-700">
                Har case ka ilaj alag hota hai. Yeh sirf general jaankari hai.
                Aapka treatment doctor ki jaanch ke baad hi tay hoga.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar report normal ya physiological fluid dikhaye
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Aksar kisi ilaj ki zaroorat nahi hoti.</li>
                <li>Doctor follow-up scan bol sakte hain.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar infection (PID) ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor ke bataye antibiotics ka poora course lena.</li>
                <li>Zaroorat par partner ka bhi ilaj.</li>
                <li>
                  Bina doctor ki salah ke kisi bhi dawa ko beech mein band na
                  karein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar cervix sankra ho ya fluid nikal na raha ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chhoti procedure se rasta khola ja sakta hai.</li>
                <li>Sath mein fluid ka nikaas aur jaanch.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar polyp ya fibroid karan ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hysteroscopic Polypectomy:</strong> Bina cut ke polyp
                  nikalna.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy:</strong> Bachedani bachakar
                  fibroid nikalna.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar hydrosalpinx ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tube ko dekhkar doctor decide karte hain ki tube kholna hai,
                  hatana hai ya band karna hai.
                </li>
                <li>
                  Infertility mein tube ka pani IVF ki success par asar daal
                  sakta hai, isliye IVF se pehle iska ilaj kai cases mein zaroori
                  hota hai.
                </li>
                <li>
                  Laparoscopic (keyhole) surgery mein chhote cuts lagte hain aur
                  recovery tez hoti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar endometriosis ya chocolate cyst ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dawaiyan ya hormonal therapy.</li>
                <li>
                  Zaroorat par 3D laparoscopic surgery se cyst ya endometriosis
                  ko nikalna.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar PCOS/PCOD ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight management, exercise aur diet.</li>
                <li>Periods regulate karne ki dawaiyan.</li>
                <li>Conceive karna ho to ovulation induction.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar ovarian cyst ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chhoti simple cyst aksar observation par rehti hain.
                </li>
                <li>
                  Badi ya complex cyst ke liye Laparoscopic Cystectomy, jisme
                  fertility bachane par zor diya jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar ectopic pregnancy ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Turant medical care zaroori hai.</li>
                <li>Dawa ya surgery, jo situation par depend karta hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agar menopause ke baad fluid ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Detailed jaanch, aksar hysteroscopy aur biopsy ke saath.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hydrosalpinx (Tube Mein Pani) Aur Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kaafi mahilayein jinhe pregnancy nahi ho rahi, unki report
                  mein tube mein pani nikalta hai.
                </li>
                <li>
                  Tube mein fluid embryo ke liye bachedani ka mahaul kharab kar
                  sakta hai.
                </li>
                <li>Natural conception mushkil ho sakti hai.</li>
                <li>
                  IVF mein bhi tube ka fluid success chance ko kam kar sakta hai.
                </li>
                <li>
                  Isliye fertility specialist aksar IVF se pehle tube ko dekhne
                  ki salah dete hain.
                </li>
                <li>
                  Kuch cases mein tube ko hatana ya block karna better hota hai.
                </li>
                <li>
                  Sahi decision ke liye pehle AMH, husband ka semen analysis aur
                  age dekhi jaati hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Mein Bachedani Ke Aas-Paas Pani
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy ke shuruaati hafton mein fluid ya collection dikhna
                  common hai, lekin har baar dar ki baat nahi.
                </li>
                <li>
                  <strong>Subchorionic collection:</strong> Kai cases mein aaram
                  aur follow-up se theek ho jaata hai.
                </li>
                <li>
                  <strong>Spotting ke saath dard:</strong> Doctor ko turant
                  dikhayein.
                </li>
                <li>
                  <strong>Empty sac ke saath fluid:</strong> Ectopic pregnancy
                  rule out karna zaroori hota hai.
                </li>
                <li>
                  Bed rest ka fayda har case mein prove nahi hota, doctor ki
                  advice par chalein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ghar Par Kya Dhyan Rakhein? (Do&apos;s aur Don&apos;ts)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Report aur dawaiyan sambhal kar rakhein.</li>
                <li>Doctor ka bataya hua poora course complete karein.</li>
                <li>Intimate hygiene ka dhyan rakhein.</li>
                <li>Cotton ke saaf undergarments pehnein.</li>
                <li>
                  Balanced diet lein: hari sabziyan, dal, fruits, protein.
                </li>
                <li>Paani achhe se piyein.</li>
                <li>Halki exercise ya walking karein.</li>
                <li>Periods ki dates aur lakshan ek diary mein note karein.</li>
                <li>Follow-up scan time par karayein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bina doctor ke antibiotics ya painkillers na lein.</li>
                <li>Douching (andar se dhona) na karein.</li>
                <li>Report ko dekhkar khud diagnose na karein.</li>
                <li>
                  Jhaad-phoonk ya bina jaanch ke nuskhon mein time waste na
                  karein.
                </li>
                <li>
                  Discharge ya dard ko &quot;normal&quot; samajhkar mahino tak
                  na taalein.
                </li>
                <li>
                  Periods ke dauran ya infection mein unsafe intercourse na
                  karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Gharelu Nuskhe Kaam Karte Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Haldi doodh, ajwain ya kadha jaise nuskhe general wellness ke
                  liye ho sakte hain, lekin hydrosalpinx, cyst ya blockage ko
                  nuskhe se theek karne ka koi pukka saboot nahi hai.
                </li>
                <li>
                  Nuskhon par depend karne se asli problem badh sakti hai.
                </li>
                <li>
                  Infection ya tube ke damage ka ilaj jitni jaldi, utna better.
                </li>
                <li>
                  Aayurvedic ya kisi bhi dawa se pehle gynaecologist ko
                  bataayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Bachedani Mein Pani Dobara Aa Sakta Hai? Bachav Kaise Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Agar asli karan (infection, polyp, blockage) ka ilaj na ho to
                  pani wapas aa sakta hai.
                </li>
                <li>
                  Periodic check-up karayein, khaaskar agar PCOS, endometriosis
                  ya purana PID ho.
                </li>
                <li>
                  Delivery ya abortion ke baad infection ke lakshan ko ignore na
                  karein.
                </li>
                <li>Safe sex practices apnayein.</li>
                <li>Regular exercise aur healthy weight rakhein.</li>
                <li>
                  40 ke baad ya menopause ke paas periods mein badlav ho to
                  jaanch karayein.
                </li>
                <li>
                  Pap smear aur pelvic exam doctor ki salah par karayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Dr. Priyanka Pachauri Se Ilaj Kyun?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec Moradabad ka ek women&apos;s health aur
                fertility centre hai. Website ke mutabik yahan yeh suvidhayein
                hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dr. Priyanka Pachauri jinhe laparoscopy, fertility treatment
                  aur endometriosis care mein pehchan hasil hai.
                </li>
                <li>
                  High-definition 3D Laparoscopic Surgery (keyhole surgery).
                </li>
                <li>3D aur 4D ultrasound (Voluson machine).</li>
                <li>
                  Diagnostic Hysteroscopy aur Hysteroscopic Polypectomy.
                </li>
                <li>
                  Laparoscopic Cystectomy, Myomectomy aur Hysterectomy.
                </li>
                <li>Endometriosis Surgery.</li>
                <li>
                  Fertility aur IVF treatment, AI-based semen analysis aur
                  time-lapse embryo monitoring ke saath.
                </li>
                <li>Pregnancy, Antenatal aur Normal Delivery care.</li>
                <li>
                  Paediatric care (bacchon ke liye vaccination aur newborn care).
                </li>
                <li>
                  &quot;Her Health First&quot; approach: pehle aapki baat suni
                  jaati hai, phir treatment plan banta hai.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Aapko kya fayda milta hai
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek hi jagah jaanch, ultrasound aur surgery ki suvidha.
                </li>
                <li>
                  Camera-based (laparoscopy/hysteroscopy) treatment mein chhote
                  cuts aur aam taur par tez recovery.
                </li>
                <li>Fertility bachane par focus.</li>
                <li>Har visit par continuity of care.</li>
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