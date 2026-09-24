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

export default function PregnancyUltrasoundKarwaniHai() {
  const faqs = [
    {
      q: "Pehla pregnancy ultrasound kab karwana chahiye?",
      a: "Aam taur par 6-9 hafte ke beech, ya doctor ke batane par.",
    },
    {
      q: "Pregnancy mein kitne ultrasound hote hain?",
      a: "Normal pregnancy mein aam taur par 3-4. High-risk mein zyada ho sakte hain.",
    },
    {
      q: "NT scan kab hota hai?",
      a: "11 hafte se 13 hafte 6 din ke beech.",
    },
    {
      q: "Anomaly scan kab karwana chahiye?",
      a: "Aam taur par 18-20 hafte ke beech.",
    },
    {
      q: "Kya ultrasound baby ke liye surakshit hai?",
      a: "Medical zaroorat par kiya gaya scan surakshit mana jaata hai. Bina zaroorat baar-baar na karwayein.",
    },
    {
      q: "Kya scan mein baby ka gender pata chalta hai?",
      a: "Bharat mein gender batana kanooni roop se mana hai (PCPNDT Act).",
    },
    {
      q: "Kya ultrasound ke liye bladder bhara rakhna zaroori hai?",
      a: "Shuruaati abdominal scan mein aksar haan. TVS mein aam taur par khali. Clinic ki salah maanein.",
    },
    {
      q: "Kya 3D/4D scan zaroori hai?",
      a: "Nahi, sabhi ke liye zaroori nahi. Doctor ki salah se karwayein.",
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
                Pregnancy Ultrasound Karwani Hai? Kaunsa Scan Kab Hota Hai
                (Doctor, Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy test positive aaya, aur ab doctor ne kaha &quot;ultrasound
                karwa lijiye.&quot; Ya aap khud sochti hain: pehla scan kab
                karwana chahiye? Kitne scan hote hain? Kya isse baby ko nuksan
                to nahi hoga? Kya ultrasound mein baby ka gender pata chalta
                hai?
              </p>

              <p className="mb-4 text-gray-700">
                Nayi mommies ke mann mein yeh sawaal aam hote hain. Pregnancy
                ultrasound ek surakshit tareeka hai jisse baby ki growth, dhadkan
                aur sehat dekhi jaati hai. Sahi time par sahi scan karwane se kai
                problems pehle hi pakad mein aa jaati hain.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy mein kaun-kaun se ultrasound hote hain</li>
                <li>Har scan kab karwana chahiye</li>
                <li>Taiyari kaise karein</li>
                <li>Safety aur zaroori niyam</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Ultrasound Kya Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ultrasound mein sound waves (dhwani tarangein) ka use hota hai,
                  jo aapko sunai nahi deti.
                </li>
                <li>
                  Yeh waves baby aur bachedani se takra kar wapas aati hain, aur
                  screen par tasveer banati hain.
                </li>
                <li>Ismein X-ray jaisi radiation nahi hoti.</li>
                <li>
                  Doctor medical zaroorat ke hisaab se hi scan suggest karti hain.
                </li>
                <li>
                  Scan aam taur par kuch minute se 30 minute tak chalta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Mein Ultrasound Kyun Zaroori Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy confirm karna aur sahi jagah (bachedani ke andar)
                  dekhna.
                </li>
                <li>Baby ki dhadkan dekhna.</li>
                <li>
                  Kitne baby hain (single ya twins), yeh pata karna.
                </li>
                <li>Due date ka sahi andaza lagana.</li>
                <li>Baby ki growth aur weight par nazar rakhna.</li>
                <li>Placenta ki position dekhna.</li>
                <li>Amniotic fluid (paani) ki matra check karna.</li>
                <li>
                  Baby ke ang aur banawat mein koi problem to nahi, yeh dekhna.
                </li>
                <li>High-risk pregnancy mein extra monitoring.</li>
                <li>
                  Bleeding, dard ya doosri takleef ka karan dhoondhna.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Mein Kaun-Kaun Se Ultrasound Hote Hain?
              </h2>

              <p className="mb-4 text-gray-700">
                Aam taur par ek normal pregnancy mein 3-4 important scans hote
                hain. Doctor aapki condition ke hisaab se kam ya zyada suggest
                kar sakti hain.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Dating aur Viability Scan (6-9 hafte)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy ki jagah confirm karta hai. Isse ectopic pregnancy
                  rule out hoti hai.
                </li>
                <li>Baby ki dhadkan dikhti hai.</li>
                <li>
                  Baby ki umar (dating) aur due date ka andaza lagta hai.
                </li>
                <li>Single ya twin pregnancy pata chalti hai.</li>
                <li>
                  Shuruaati hafton mein aksar TVS (yoni ke raaste) se hota hai,
                  kyunki tasveer saaf aati hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. NT Scan (11 hafte se 13 hafte 6 din)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  NT (Nuchal Translucency) baby ki gardan ke peeche ke fluid ki
                  motai naapta hai.
                </li>
                <li>
                  Aam taur par double marker blood test ke saath karte hain.
                </li>
                <li>
                  Isse Down syndrome jaisi kuch chromosomal problems ka risk dekha
                  jaata hai.
                </li>
                <li>
                  Yeh screening test hai, pakka diagnosis nahi. Risk zyada aaye
                  to aage ki jaanch batayi jaati hai.
                </li>
                <li>
                  Nasal bone aur kuch ang bhi is scan mein dekhe jaate hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Anomaly Scan / Level II Scan (18-20 hafte, aam taur par
                18-22)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh pregnancy ka sabse detailed scan mana jaata hai.
                </li>
                <li>
                  Baby ka sar, dimaag, chehra, dil, phephde, pet, kidney,
                  haath-pair aur reedh dekhi jaati hai.
                </li>
                <li>
                  Placenta ki position, paani ki matra aur cervix ki lambai dekhi
                  jaati hai.
                </li>
                <li>
                  Kai birth defects isse pakde ja sakte hain.
                </li>
                <li>
                  Har problem is scan mein dikhe, yeh zaroori nahi hota, kyunki
                  kuch baatein baad mein bhi saamne aati hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Growth Scan (28-32 hafte)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Baby ka wazan (estimated fetal weight) aur growth check hoti
                  hai.
                </li>
                <li>Placenta aur paani ki matra dekhi jaati hai.</li>
                <li>
                  Baby ki position dekhi jaati hai (sir neeche hai ya nahi).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Late Pregnancy Scan (36 hafte ke baad, zaroorat par)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery se pehle baby ki position, wazan, paani aur placenta
                  ki jaanch.
                </li>
                <li>Delivery ki planning mein madad karta hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Doppler Scan (zaroorat par)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Baby aur placenta mein khoon ke bahaav ki jaanch.
                </li>
                <li>
                  High blood pressure, diabetes, kam growth ya twins jaise
                  high-risk cases mein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Cervical Length Scan (zaroorat par)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cervix ki lambai naapkar time se pehle delivery ka risk dekha
                  jaata hai.
                </li>
                <li>
                  Pehle miscarriage ya preterm delivery ki history mein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. 3D/4D Scan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Baby ki surface ki tasveer aur movement zyada detail mein
                  dikhta hai.
                </li>
                <li>
                  Chehre, hoth aur haath-pair jaise hisson ko dekhne mein madad
                  karta hai.
                </li>
                <li>
                  Yeh har pregnancy mein zaroori nahi hota. Doctor ki salah se
                  hi karwayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ek Nazar Mein: Kaunsa Scan Kab?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>6-9 hafte:</strong> Dating aur viability scan
                </li>
                <li>
                  <strong>11-13 hafte 6 din:</strong> NT scan (double marker ke
                  saath)
                </li>
                <li>
                  <strong>18-20 hafte:</strong> Anomaly scan (Level II)
                </li>
                <li>
                  <strong>28-32 hafte:</strong> Growth scan
                </li>
                <li>
                  <strong>36 hafte ke baad:</strong> Delivery se pehle scan
                  (zaroorat par)
                </li>
                <li>
                  <strong>Kabhi bhi:</strong> Bleeding, dard ya baby ki halchal
                  kam ho to turant scan
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ultrasound Ki Taiyari Kaise Karein?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Shuruaati scan (pehle 12 hafte)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>TVS (Transvaginal):</strong> Aam taur par bladder khali
                  karke jaana hota hai.
                </li>
                <li>
                  <strong>Pet ke raaste (abdominal) scan:</strong> Kai baar
                  bladder bhara rakhna padta hai. Isliye scan se pehle 3-4 glass
                  paani piyein aur peshab na karein.
                </li>
                <li>
                  Clinic mein jo instruction diya jaaye, wahi follow karein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Baad ke scans (anomaly, growth)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aam taur par koi khaas taiyari nahi hoti.
                </li>
                <li>
                  Aaram se kuch khaa-pee kar jaana theek hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Saath layein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Purani ultrasound aur blood reports</li>
                <li>Doctor ki prescription</li>
                <li>Last periods (LMP) ki date</li>
                <li>Chal rahi dawaiyon ki list</li>
                <li>
                  Zaroorat ho to partner ya parivaar ka koi vyakti
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kapde
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ilaqe ke hisaab se dhile aur aaramdayak kapde pehnein, jisse
                  pet ya pelvic scan aasan ho.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Scan Ke Dauran Kya Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Aap bed par letati hain.</li>
                <li>
                  Pet par gel lagaya jaata hai (ya TVS mein patli probe use hoti
                  hai).
                </li>
                <li>
                  Sonographer ya doctor probe ko halke haath se ghumati hain.
                </li>
                <li>
                  Screen par baby dikhta hai. Dhadkan ki awaaz bhi sun sakti
                  hain.
                </li>
                <li>
                  Zaroori tasveerein aur measurements record hote hain.
                </li>
                <li>
                  Dard nahi hota. TVS mein halka discomfort mehsoos ho sakta
                  hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ultrasound Report Mein Kya Likha Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Report mein kai short forms hote hain. Ye common hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>LMP:</strong> Last periods ki date
                </li>
                <li>
                  <strong>GA (Gestational Age):</strong> Pregnancy kitne hafte
                  ki hai
                </li>
                <li>
                  <strong>EDD:</strong> Expected delivery date
                </li>
                <li>
                  <strong>CRL:</strong> Baby ki lambai (shuruaati scan mein)
                </li>
                <li>
                  <strong>BPD, HC, AC, FL:</strong> Sir, pet aur jaangh ki haddi
                  ke naap (growth dekhne ke liye)
                </li>
                <li>
                  <strong>EFW:</strong> Baby ka andaazan wazan
                </li>
                <li>
                  <strong>FHR:</strong> Baby ki dhadkan
                </li>
                <li>
                  <strong>AFI/Liquor:</strong> Paani ki matra
                </li>
                <li>
                  <strong>Placenta:</strong> Kahan hai, aur kya bachedani ke
                  munh ko dhak raha hai (previa)
                </li>
                <li>
                  <strong>Presentation:</strong> Baby ka sir neeche hai
                  (cephalic) ya nahi
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Pregnancy Ultrasound Surakshit Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Medical zaroorat ke hisaab se kiya gaya ultrasound surakshit
                  mana jaata hai.
                </li>
                <li>Ismein radiation nahi hoti.</li>
                <li>
                  Fir bhi bina zaroorat baar-baar ya sirf tasveer ke liye scan
                  karwane se bachein.
                </li>
                <li>
                  Scan sirf training pe rakhe hue, qualified doctor ya
                  sonographer se karwayein.
                </li>
                <li>
                  Aapke mann mein koi shak ho to doctor se poochein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Ultrasound Mein Baby Ka Gender Pata Chalta Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bharat mein kanoon (PCPNDT Act) ke tahat garbh mein pal rahe
                  baby ka ling (ladka ya ladki) batana aur pata karna
                  gair-kanooni hai.
                </li>
                <li>
                  Koi bhi qualified clinic ya doctor ling nahi batati.
                </li>
                <li>
                  Ling jaanchne ya batane par sazaa aur jurmana ho sakta hai.
                </li>
                <li>
                  Kisi bhi vyakti ya clinic dwara paise dekar gender batane ke
                  daave se door rahein.
                </li>
                <li>
                  Baby ka swasthya sabse zaroori hai, ladka ho ya ladki.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ultrasound Ki Seemayein (Limitations)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ultrasound har problem nahi pakad sakta. Kuch baatein baad mein
                  bhi saamne aa sakti hain.
                </li>
                <li>
                  Baby ki position, mother ka weight, kam paani ya placenta ki
                  jagah se tasveer kam saaf aa sakti hai. Kai baar scan dobara
                  karna padta hai.
                </li>
                <li>
                  NT scan sirf risk batata hai, pakka diagnosis nahi.
                </li>
                <li>
                  Baby ke wazan ka andaza thoda upar-neeche ho sakta hai.
                </li>
                <li>
                  Isliye sirf ek scan ke bharose nahi, poore antenatal check-up
                  ke saath dekhna zaroori hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Ultrasound Ya Doctor Ki Zaroorat Hoti Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy mein bleeding, chahe halki ho ya zyada.
                </li>
                <li>Tez pet dard ya ek taraf tez dard.</li>
                <li>
                  Baby ki halchal kam ya bilkul band lagna (baad ke mahino mein).
                </li>
                <li>Paani ka rissna (paani ki thaili phatna).</li>
                <li>Tez bukhar.</li>
                <li>
                  Sar dard, aankhon ke saamne dhundhlapan ya haath-pair mein
                  sujan (blood pressure ka signal).
                </li>
                <li>Chakkar, behoshi ya saans phoolna.</li>
                <li>
                  Pichli pregnancy mein complication ki history ho aur koi bhi
                  naya lakshan aaye.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Emergency mein der na karein.</strong> Turant apni doctor
                ya nazdeeki hospital jayein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                High-Risk Pregnancy Mein Extra Scans
              </h2>

              <p className="mb-4 text-gray-700">
                Aisi situations mein doctor zyada baar scan suggest kar sakti
                hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>35 saal se zyada umar mein pregnancy</li>
                <li>Twins ya triplets</li>
                <li>Diabetes ya high blood pressure</li>
                <li>Thyroid ya kidney ki bimari</li>
                <li>
                  Pehle miscarriage, still birth ya preterm delivery ki history
                </li>
                <li>IVF ya fertility treatment se hui pregnancy</li>
                <li>Baby ki growth kam ho</li>
                <li>Placenta ya paani mein koi problem</li>
                <li>Purana C-section ya bachedani ki surgery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Scan Se Judi Aam Galatfahmiyan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Ultrasound se baby ko garmi lagti hai ya nuksan
                  hota hai.&quot;</strong> Medical scan surakshit maane jaate
                  hain, lekin bina zaroorat baar-baar na karwayein.
                </li>
                <li>
                  <strong>&quot;Har scan mein baby ka gender batana
                  chahiye.&quot;</strong> Yeh gair-kanooni hai.
                </li>
                <li>
                  <strong>&quot;Normal scan ka matlab 100% sab theek
                  hai.&quot;</strong> Ultrasound ki seemayein hoti hain, isliye
                  regular check-up zaroori hai.
                </li>
                <li>
                  <strong>&quot;Sirf 1 scan kaafi hai.&quot;</strong>
                  Alag-alag hafton mein alag cheezein dekhi jaati hain.
                </li>
                <li>
                  <strong>&quot;3D/4D scan sabhi ke liye zaroori hai.&quot;</strong>{" "}
                  Nahi, doctor ki salah se hi karwayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ghar Par Kya Dhyan Rakhein?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Har scan ki date aur report ek file mein rakhein.
                </li>
                <li>
                  Doctor ki di hui dawaiyan aur supplements (jaise iron, folic
                  acid, calcium) samay par lein.
                </li>
                <li>Balanced diet aur paani achhe se lein.</li>
                <li>
                  Doctor ke bataye anusaar regular check-up karayein.
                </li>
                <li>
                  Baby ki halchal ke baare mein doctor ke nirdesh anusaar dhyan
                  rakhein.
                </li>
                <li>Koi bhi takleef ho to der na karein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bina doctor ki salah koi dawa ya herbal cheez na lein.
                </li>
                <li>
                  Gender jaanchne ke chakkar mein kisi anjaan clinic na jayein.
                </li>
                <li>
                  Non-medical &quot;keepsake scan&quot; ke liye baar-baar scan
                  na karwayein.
                </li>
                <li>Report dekhkar khud hi diagnose na karein.</li>
                <li>
                  Scan miss na karein, khaaskar NT aur anomaly scan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Dr. Priyanka Pachauri Se Pregnancy Ultrasound
                Kyun?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec Moradabad ka women&apos;s health aur fertility
                centre hai. Website ke mutabik yahan yeh suvidhayein hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dr. Priyanka Pachauri, jinhe mahilaon ki sehat, fertility aur
                  laparoscopy mein pehchan hasil hai.
                </li>
                <li>3D aur 4D ultrasound machine (Voluson).</li>
                <li>
                  Antenatal Services: Pregnancy ke dauran structured check-up aur
                  screenings.
                </li>
                <li>
                  Pregnancy & Birthing Care aur Normal Delivery ki suvidha.
                </li>
                <li>
                  High-risk pregnancy aur antenatal & postnatal care (centre ki
                  profile ke mutabik).
                </li>
                <li>
                  Paediatric care: Baby ke liye consultation, vaccination aur
                  newborn care.
                </li>
                <li>
                  &quot;Her Health First&quot; approach: pehle aapki baat suni
                  jaati hai.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Aapko kya fayda milta hai
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek hi jagah ultrasound, doctor ki salah aur delivery ki
                  planning.
                </li>
                <li>
                  Ek hi team ko aapki poori history ki jaankari.
                </li>
                <li>
                  Pregnancy se delivery aur baby ke check-up tak continuity of
                  care.
                </li>
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
