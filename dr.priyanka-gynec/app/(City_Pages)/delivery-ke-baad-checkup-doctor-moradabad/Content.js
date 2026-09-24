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

export default function DeliveryKeBaadCheckup() {
  const faqs = [
    {
      q: "Delivery ke baad checkup kab karwana chahiye?",
      a: "Aam taur par 1-2 hafte mein wound check, aur 6 hafte ke aas-paas poora checkup.",
    },
    {
      q: "Kya normal delivery ke baad bhi checkup zaroori hai?",
      a: "Haan, bleeding, tanke, BP aur anemia ki jaanch ke liye zaroori hai.",
    },
    {
      q: "Checkup mein kya dekha jaata hai?",
      a: "BP, wound, bleeding, bachedani ka size, anemia, breastfeeding aur mansik sehat.",
    },
    {
      q: "Delivery ke baad bleeding kitne din chalti hai?",
      a: "Aam taur par 4-6 hafte. Zyada ya badbudar ho to turant doctor ko dikhayein.",
    },
    {
      q: "Delivery ke baad family planning kab shuru karein?",
      a: "Jaldi, kyunki periods se pehle bhi pregnancy ho sakti hai. Doctor sahi option batati hain.",
    },
    {
      q: "Postpartum depression kya hai?",
      a: "2 hafte se zyada udaasi ya ghabrahat. Yeh ilaj yogya hai, doctor se baat karein.",
    },
    {
      q: "Intercourse kab shuru karein?",
      a: "Aam taur par 6 hafte ke checkup ke baad, doctor ki ijaazat se.",
    },
    {
      q: "Kab turant doctor ko dikhana chahiye?",
      a: "Tez bukhar, zyada bleeding, badbu, pair mein sujan ya saans phoolne par.",
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
                Delivery Ke Baad Checkup: Kab, Kyun Aur Kya-Kya Jaanch Hoti Hai
                (Doctor, Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Baby ki delivery ho gayi, ghar mein khushi ka mahaul hai, aur
                poora dhyan nanhe mehmaan par hai. Aksar maa apni sehat ko
                peeche chhod deti hai. Neend poori nahi hoti, dard hota hai,
                mann kabhi udaas lagta hai, aur soch aati hai: &quot;Ab doctor
                ke paas jaane ki kya zaroorat?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki delivery ke baad ke shuruaati hafte maa ki sehat
                ke liye bahut zaroori hote hain. Kai problems, jaise infection,
                anemia, high BP ya udaasi, is dauran samay par pakdi ja sakti
                hain. Isliye postnatal checkup ko chhodna nahi chahiye.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery ke baad checkup kab karwana chahiye
                </li>
                <li>Checkup mein kya-kya dekha jaata hai</li>
                <li>
                  Kaunsi jaanch aur family planning ki salah milti hai
                </li>
                <li>
                  Kab turant doctor ko dikhana zaroori hai
                </li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Checkup Kyun Zaroori Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ke wapas sikudne (involution) ki jaanch hoti hai.
                </li>
                <li>
                  Wound, tanke ya C-section ke cut ka theek se bharna dekha
                  jaata hai.
                </li>
                <li>
                  Infection, bleeding aur anemia samay par pakde ja sakte hain.
                </li>
                <li>
                  Blood pressure ka check hota hai, kyunki delivery ke baad bhi
                  BP badh sakta hai.
                </li>
                <li>
                  Mansik sehat (baby blues, postpartum depression) par baat hoti
                  hai.
                </li>
                <li>
                  Breastfeeding mein aane wali dikkat ka hal milta hai.
                </li>
                <li>Family planning ki sahi salah milti hai.</li>
                <li>
                  Pregnancy ke dauran hui problems (jaise diabetes ya BP) ka
                  follow-up hota hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Checkup Kab Karwana Chahiye?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>1-2 hafte ke andar:</strong> Khaaskar C-section,
                  episiotomy ya tear ke wound ki jaanch ke liye.
                </li>
                <li>
                  <strong>6 hafte ke aas-paas:</strong> Poora postnatal checkup.
                  Yeh sabse important visit hai.
                </li>
                <li>
                  Diabetes ya BP ki history ho to doctor jaldi ya alag se dobara
                  bulati hain.
                </li>
                <li>
                  <strong>Kabhi bhi, turant:</strong> Agar koi red flag lakshan
                  ho (neeche diye gaye hain).
                </li>
                <li>
                  <strong>Note:</strong> Sahi schedule aapki delivery ke type,
                  health aur pregnancy ke complications par depend karta hai.
                  Apni doctor ki di hui date follow karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Delivery Ke Baad Checkup Mein Kya Dekha Jaata Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Bleeding (lochia):</strong> Kitni hai, rang aur badbu.
                </li>
                <li>
                  <strong>Perineum ya tanke ka bharna:</strong> Dard aur sujan.
                </li>
                <li>
                  <strong>Bachedani ka size:</strong> Pet ki jaanch se.
                </li>
                <li>
                  <strong>Peshab aur potty ki dikkat:</strong>
                </li>
                <li>
                  <strong>Piles ya kabz ka ilaj:</strong>
                </li>
                <li>
                  <strong>Pelvic floor ki kamzori:</strong> Chheenkne ya hansne
                  par peshab nikalna.
                </li>
                <li>
                  <strong>Breastfeeding:</strong> Latch, doodh ki matra aur
                  nipple ka dard.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                C-Section Ke Baad Checkup Mein Kya Dekha Jaata Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Cut wali jagah:</strong> Laali, sujan, peep ya paani
                  ka rissna.
                </li>
                <li>
                  <strong>Dard aur uthne-baithne mein takleef:</strong>
                </li>
                <li>
                  <strong>Bleeding aur discharge:</strong>
                </li>
                <li>
                  <strong>Bachedani ka sikudna:</strong>
                </li>
                <li>
                  <strong>Pair mein sujan:</strong> Blood clot ka shak.
                </li>
                <li>
                  <strong>Kabz aur gas:</strong>
                </li>
                <li>
                  <strong>Peshab ki dikkat:</strong>
                </li>
                <li>
                  <strong>Cut ke aas-paas ubhar ya gaanth:</strong> Hernia ka
                  shak.
                </li>
                <li>
                  <strong>Kab kya kaam karna hai:</strong> Gaadi chalana, seedhi
                  chadhna, bhaari saman uthana.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal Checkup Mein Kaunsi Jaanch Hoti Hain?
              </h2>

              <p className="mb-4 text-gray-700">
                Har mahila ko sab jaanch ki zaroorat nahi hoti. Doctor aapki
                situation ke hisaab se suggest karti hain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Blood pressure aur pulse:</strong>
                </li>
                <li>
                  <strong>Weight aur BMI:</strong>
                </li>
                <li>
                  <strong>CBC (Hemoglobin):</strong> Anemia ka pata lagane ke
                  liye.
                </li>
                <li>
                  <strong>Thyroid (TSH):</strong> Delivery ke baad thyroid ki
                  problem ho sakti hai. Thakaan, baal jhadna ya mood mein badlav
                  iske sign ho sakte hain.
                </li>
                <li>
                  <strong>Blood sugar:</strong> Agar pregnancy mein gestational
                  diabetes tha, to delivery ke baad (aam taur par 6-12 hafte
                  mein) dobara jaanch zaroori hoti hai.
                </li>
                <li>
                  <strong>Urine test:</strong> Infection ke shak mein.
                </li>
                <li>
                  <strong>Ultrasound:</strong> Bleeding, dard ya bache hue hisse
                  ka shak ho to.
                </li>
                <li>
                  <strong>Pap smear:</strong> Agar due ho, doctor ki salah se.
                </li>
                <li>
                  <strong>Vitamin D aur B12:</strong> Kami ka shak ho to.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bleeding (Lochia): Kya Normal Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery ke baad bleeding 4-6 hafte tak ho sakti hai.
                </li>
                <li>
                  <strong>Pehle 3-4 din:</strong> Gehra lal rang, thodi zyada.
                </li>
                <li>
                  <strong>Baad mein:</strong> Gulabi ya bhura, kam.
                </li>
                <li>
                  <strong>Phir:</strong> Peela ya safed discharge.
                </li>
                <li>Chhote clots aana aam hai.</li>
                <li>
                  Bleeding kam hote-hote band ho jaati hai.
                </li>
              </ul>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
                Chinta ki baat:
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bleeding achanak badh jaye ya ek ghante mein pad poora bhig
                  jaye.
                </li>
                <li>
                  Bade clots (ande ya usse bade).
                </li>
                <li>Badbudar discharge.</li>
                <li>
                  Bleeding ke saath bukhar ya tez dard.
                </li>
                <li>
                  Bleeding kam hokar dobara badh jaye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mansik Sehat: Baby Blues Aur Postpartum Depression
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Baby Blues
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery ke baad pehle 1-2 hafte mein rona, chidchidapan,
                  ghabrahat aur mood swings.
                </li>
                <li>
                  Aam taur par apne aap kam ho jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Postpartum Depression (PPD)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  2 hafte se zyada udaasi, bhookh ya neend mein badlav, aur
                  thakaan.
                </li>
                <li>
                  Baby ke saath jud paana mushkil lagna.
                </li>
                <li>
                  Bahut zyada chinta, dar ya gussa.
                </li>
                <li>
                  Khud ko ya baby ko nuksan pahunchane ke vichar aana.
                </li>
                <li>
                  Yeh kamzori ya galti nahi hai, ek ilaaj yogya sthiti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor se khulkar baat karein.</li>
                <li>Partner aur parivaar se madad maangein.</li>
                <li>Jab baby soye, tab aap bhi aaram karein.</li>
                <li>Halki walking aur dhoop lein.</li>
                <li>
                  Counselling ya dawa ki zaroorat ho sakti hai, jo doctor
                  batayengi.
                </li>
                <li>
                  Agar khud ko ya baby ko nuksan pahunchane ke vichar aayein,
                  to turant doctor ko batayein ya kisi apne vyakti ke saath
                  rahein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Family Planning
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery ke baad kuch hafton mein bhi ovulation shuru ho sakta
                  hai, isliye periods aane se pehle bhi pregnancy possible hai.
                </li>
                <li>
                  Breastfeeding pregnancy ko poori tarah nahi rokti.
                </li>
                <li>
                  Doctor aapke liye sahi option batati hain:
                </li>
                <li className="pl-5">Condom</li>
                <li className="pl-5">
                  Copper-T (IUD): Delivery ke turant baad ya kuch hafte baad
                  lagwaya ja sakta hai.
                </li>
                <li className="pl-5">
                  Progesterone-only pills ya injection: Breastfeeding mein aam
                  taur par surakshit.
                </li>
                <li className="pl-5">
                  Combined pills: Aam taur par breastfeeding mein shuruaati
                  mahino mein nahi di jaati.
                </li>
                <li className="pl-5">
                  Permanent sterilization: Jab family poori ho.
                </li>
                <li>
                  Do pregnancy ke beech ka gap maa aur baby dono ke liye achha
                  hota hai. Doctor se poochein ki aapke case mein kitna gap theek
                  rahega, khaaskar C-section ke baad.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ko Dikhayein? (Red Flags)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tez bukhar (100.4°F ya 38°C se zyada) ya kaanpna.
                </li>
                <li>Bahut zyada bleeding ya bade clots.</li>
                <li>Badbudar discharge.</li>
                <li>Tez ya badhta pet dard.</li>
                <li>
                  Cut wali jagah par laali, sujan, garmi, peep ya rissna.
                </li>
                <li>Pair mein dard, sujan ya laali.</li>
                <li>Saans phoolna ya seene mein dard.</li>
                <li>
                  Tez sar dard, aankhon ke saamne dhundhlapan ya haath-pair mein
                  sujan.
                </li>
                <li>Peshab mein jalan ya rukavat.</li>
                <li>Chakkar, behoshi ya bahut kamzori.</li>
                <li>
                  Doodh pilate waqt chhati mein gaanth, laali ya tez dard
                  (mastitis ka shak).
                </li>
                <li>
                  Bahut udaasi ya khud ko nuksan pahunchane ke vichar.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Breastfeeding Aur Chhati Ki Dekhbhaal
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Baby ko jaldi-jaldi aur sahi position mein doodh pilayein.
                </li>
                <li>
                  Latch sahi ho to nipple mein dard kam hota hai.
                </li>
                <li>
                  Nipple mein dard ya cracks ho to doctor ya lactation
                  counsellor se poochein.
                </li>
                <li>
                  Chhati mein bhaari-pan (engorgement) ho to baby ko baar-baar
                  pilayein aur doctor ki salah se garam senk ya expressing.
                </li>
                <li>
                  Gaanth, laali, garmi aur bukhar ho to mastitis ka shak, turant
                  doctor ko dikhayein.
                </li>
                <li>
                  Doodh kam lag raha ho to paani, aaram aur sahi diet par dhyan
                  dein. Zaroorat par doctor se poochein.
                </li>
                <li>
                  Bina doctor ki salah koi dawa na lein, kyunki kuch dawaiyan
                  doodh se baby tak pahunch sakti hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Exercise Aur Pelvic Floor
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Halki walking pehle hafte se shuru ki ja sakti hai, doctor ki
                  salah se.
                </li>
                <li>
                  Pelvic floor (Kegel) exercises peshab nikalne aur bachedani ke
                  neeche khisakne ka risk kam karne mein madad karti hain.
                </li>
                <li>
                  C-section ke baad bhaari exercise aur crunches doctor ki
                  ijaazat se hi shuru karein.
                </li>
                <li>Yoga aur stretching dheere-dheere shuru karein.</li>
                <li>
                  Pet ke beech mein ubhar (diastasis recti) ho to physiotherapy
                  ki salah lein.
                </li>
                <li>Dard ya bleeding badhe to exercise rok dein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Intercourse Kab Shuru Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aam taur par 6 hafte ke checkup ke baad, jab doctor ijaazat
                  dein.
                </li>
                <li>
                  Yoni mein sukhapan aur dard breastfeeding mein hormonal badlav
                  ki wajah se ho sakta hai. Lubricant madad karta hai.
                </li>
                <li>Family planning ka intezaam pehle se rakhein.</li>
                <li>
                  Dard bahut zyada ho to doctor ko batayein.
                </li>
                <li>
                  Mann na ho to yeh bhi aam hai. Partner ke saath baat karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Baby Ka Checkup Bhi Na Bhoolein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaccination schedule ka palan karein.</li>
                <li>Baby ka wazan, growth aur feeding ka check.</li>
                <li>
                  Piliya (jaundice), rone ya doodh na pine jaise lakshan mein
                  doctor ko dikhayein.
                </li>
                <li>
                  Ek hi jagah mother aur baby ka check-up ho sake, to aasani
                  hoti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Ghar Par Kya Dhyan Rakhein?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aaram karein aur jab baby soye, tab aap bhi soyein.
                </li>
                <li>Wound ko saaf aur sukha rakhein.</li>
                <li>Doctor ki di hui dawaiyan samay par lein.</li>
                <li>
                  Intimate hygiene ka dhyan rakhein, pad har 4-6 ghante mein
                  badlein.
                </li>
                <li>
                  Kabz se bachne ke liye fibre aur paani lein.
                </li>
                <li>
                  Madad maangein: Ghar ke kaam aur baby ki dekhbhaal mein.
                </li>
                <li>Follow-up visit miss na karein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bhaari saman ya zyada mehnat wale kaam jaldi shuru na karein.
                </li>
                <li>
                  Cut par tel, haldi ya koi cheez na lagayein.
                </li>
                <li>
                  Bina doctor ki salah dard ki goli ya herbal dawa na lein.
                </li>
                <li>
                  Bleeding, bukhar ya badbu ko &quot;normal&quot; samajhkar na
                  taalein.
                </li>
                <li>Udaasi ko chhupayein nahi.</li>
                <li>Apni sehat ko baby ke peeche na chhodein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Dr. Priyanka Pachauri Se Postnatal Checkup Kyun?
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
                <li>
                  Pregnancy & Birthing Care aur Normal Delivery care.
                </li>
                <li>
                  Centre ki profile mein antenatal aur postnatal care ka
                  mention.
                </li>
                <li>
                  Paediatric care: Baby ke liye consultation, vaccination aur
                  newborn care.
                </li>
                <li>3D aur 4D ultrasound (Voluson machine).</li>
                <li>
                  Zaroorat par gynaecological surgery aur laparoscopy ki suvidha.
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
                  Ek hi jagah mother aur baby ki dekhbhaal.
                </li>
                <li>
                  Ek hi team ko aapki pregnancy aur delivery ki poori history ki
                  jaankari.
                </li>
                <li>Continuity of care.</li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Doctor se yeh poochein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Meri recovery theek chal rahi hai kya?</li>
                <li>Kaunsi jaanch zaroori hain?</li>
                <li>
                  Family planning ka kaunsa tareeka mere liye behtar hai?
                </li>
                <li>Exercise aur intercourse kab shuru karun?</li>
                <li>Agli pregnancy kab plan karun?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Appointment Par Kya Saath Layein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Delivery ke discharge papers aur reports.</li>
                <li>Chal rahi dawaiyon aur supplements ki list.</li>
                <li>Bleeding aur dard ka note.</li>
                <li>Bukhar ka record (agar aaya ho).</li>
                <li>
                  Pregnancy ki reports (sugar, BP ki jaankari).
                </li>
                <li>Baby ke papers aur vaccination card.</li>
                <li>Apne sawaal ek paper par likhkar.</li>
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
