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

export default function DeliveryKeBaadPetDard() {
  const faqs = [
    {
      q: "Delivery ke baad pet dard kitne din rehta hai?",
      a: "After-pains aam taur par 2-7 din. C-section ka dard kuch hafte tak reh sakta hai.",
    },
    {
      q: "Kya delivery ke baad pet dard normal hai?",
      a: "Halka dard normal hai. Badhta ya tez dard, bukhar ya badbu ho to doctor ko dikhayein.",
    },
    {
      q: "Doodh pilate waqt pet dard kyun hota hai?",
      a: "Hormone bachedani ko sikudata hai. Yeh aksar kuch dino mein kam ho jaata hai.",
    },
    {
      q: "Kab turant doctor ko dikhana chahiye?",
      a: "Tez bukhar, zyada bleeding, badbudar discharge, pair mein sujan ya saans phoolne par.",
    },
    {
      q: "C-section ke baad dard kab tak rehta hai?",
      a: "Aam taur par kuch hafte. Sunn-pan ya khujli mahino tak reh sakti hai.",
    },
    {
      q: "Kya bachedani mein infection ho sakta hai?",
      a: "Haan. Bukhar, badbu aur pet ke neeche dard iske sign hain. Doctor antibiotics deti hain.",
    },
    {
      q: "Kaunsi jaanch hoti hain?",
      a: "Examination, blood aur urine test, aur ultrasound.",
    },
    {
      q: "Kya dard ki goli le sakte hain?",
      a: "Sirf doctor ki batayi breastfeeding-safe dawa hi lein.",
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
                Delivery Ke Baad Pet Dard: Kab Normal Hai Aur Kab Doctor Ko
                Dikhayein (Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Baby ki delivery ho gayi, ghar mein khushi hai, lekin aapko pet
                mein dard ho raha hai. Kya yeh normal hai? Kab tak chalega? Kya
                kisi bimari ka signal hai? Bahut si nayi mommies yeh sawaal
                poochne mein jhijhakti hain ya sochti hain ki &quot;delivery ke
                baad dard to hota hi hai.&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki delivery ke baad halka pet dard aksar normal
                hota hai, kyunki bachedani apni purani size mein wapas aati hai
                aur sharir theek ho raha hota hai. Lekin kuch prakar ka dard
                infection, bleeding ya blood clot ka signal ho sakta hai, aur
                usme der karna khatarnak ho sakta hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Delivery ke baad dard ke common karan</li>
                <li>Normal aur khatarnak dard mein farak</li>
                <li>Kaunsi jaanch hoti hain</li>
                <li>Ilaj aur ghar par dhyan rakhne wali baatein</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Pet Dard Kyun Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Delivery ke baad sharir mein bahut se badlav hote hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani pregnancy ke waqt bahut badi ho jaati hai, aur
                  delivery ke baad dheere-dheere sikudti hai (involution).
                </li>
                <li>
                  Pet ki mansapeshiyan kheench chuki hoti hain aur wapas theek
                  hoti hain.
                </li>
                <li>
                  Hormones ka level tezi se badalta hai.
                </li>
                <li>
                  C-section mein pet ki deewar par cut aur andar ke tishu theek
                  ho rahe hote hain.
                </li>
                <li>
                  Normal delivery mein yoni aur perineum ke aas-paas ke tishu
                  par bhi dard aur sujan ho sakti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Pet Dard Ke Common Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. After-pains (bachedani ke sikudne ka dard)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani sikudti hai to periods jaisa ya marod jaisa dard
                  hota hai.
                </li>
                <li>
                  Baby ko doodh pilate waqt yeh dard zyada mehsoos ho sakta hai,
                  kyunki hormone bachedani ko aur sikudata hai.
                </li>
                <li>
                  Doosre ya usse zyada baby ke baad yeh dard aksar zyada hota
                  hai.
                </li>
                <li>
                  Aam taur par 2-3 din mein kam hone lagta hai aur ek hafte ke
                  aas-paas tak reh sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. C-section ke cut ka dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cut wali jagah par dard, khinchav aur jalan hoti hai.
                </li>
                <li>
                  Khaansi, chheenk, uthna-baithna aur hansna dard badha sakte
                  hain.
                </li>
                <li>
                  Kuch hafton mein dard kam hota hai, lekin scar ke aas-paas
                  sunn-pan ya khujli mahino tak ho sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Gas aur kabz
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Anesthesia, dawaiyan, kam chalna-phirna aur aaram ki wajah se
                  pet mein gas banti hai.
                </li>
                <li>
                  Yeh dard kai baar tez bhi lagta hai, kabhi kandhe tak.
                </li>
                <li>
                  Kabz mein potty ke waqt bhi dard ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Episiotomy ya tear ka dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Normal delivery mein perineum ke tanke ya tear ki wajah se
                  neeche ki taraf dard hota hai.
                </li>
                <li>
                  Yeh aksar pelvic ya niche ke pet ke dard jaisa mehsoos ho
                  sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Peshab ka infection (UTI)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Catheter ya delivery ke baad peshab mein jalan, baar-baar
                  peshab aur pet ke neeche dard ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Bachedani ka infection (Endometritis)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ki andar ki parat mein infection ho jaata hai.
                </li>
                <li>
                  Bukhar, badbudar discharge aur pet ke neeche dard iske mukhya
                  sign hain.
                </li>
                <li>
                  C-section ya lambi labour ke baad iska risk thoda zyada hota
                  hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Wound infection (C-section ya episiotomy)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cut wali jagah laal, garam, sooji hui ya peep wali ho sakti
                  hai.
                </li>
                <li>Bukhar aur dard badhta hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Bachedani mein bache hue hisse (Retained products)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Placenta ya jhilli ka koi hissa andar reh jaye to dard, zyada
                  bleeding aur infection ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Delivery ke baad zyada bleeding (PPH)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani theek se sikud nahi paati, isliye zyada khoon aata
                  hai.
                </li>
                <li>Yeh emergency ho sakti hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Hematoma ya collection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cut ya bachedani ke paas khoon ya fluid jama ho sakta hai,
                  jisse dard aur sujan hoti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Blood clot (DVT)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pair mein dard, sujan ya laali ho sakti hai.</li>
                <li>
                  Agar clot phephdon tak pahunch jaye to saans phoolna aur
                  seene mein dard hota hai (turant emergency).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Hernia ya wound ka kamzor hona
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  C-section ke cut ke paas ubhar ya gaanth mehsoos ho sakti
                  hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Pet ki mansapeshiyon ka alagaav (Diastasis recti)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pet ke beech mein ubhar dikhta hai, aur kamar ya pet mein
                  bhaari-pan ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Kamar aur pelvic dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy ke baad ligaments dheele ho jaate hain, aur baby ko
                  utha-utha kar dard badhta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                15. Doosre karan (kam common)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gallstones, appendicitis ya aant ka blockage bhi ho sakta hai.
                  Zaroorat par alag jaanch hoti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Dard Kaisa Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Ye aam taur par chinta ki baat nahi hoti:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Halka ya madhyam marod, jo dheere-dheere kam ho raha ho.
                </li>
                <li>
                  Doodh pilate waqt aane wala dard jo kuch din mein kam ho.
                </li>
                <li>
                  Lochia (delivery ke baad ka discharge) 4-6 hafte tak chalna,
                  jo dheere-dheere lal se gulabi aur phir peela-safed hota hai.
                </li>
                <li>
                  C-section ke cut ke paas halka dard, khinchav aur sunn-pan.
                </li>
                <li>
                  Kabz ya gas ka halka dard jo motion ya gas nikalne se kam ho.
                </li>
                <li>
                  Dawa se dard control ho raha ho.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ko Dikhayein? (Red Flags)
              </h2>

              <p className="mb-4 text-gray-700">
                Ye lakshan hon to der na karein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tez bukhar (100.4°F ya 38°C se zyada) ya kaanpna.
                </li>
                <li>Badbudar discharge ya peep jaisa discharge.</li>
                <li>
                  Bahut zyada bleeding, jaise ek ghante mein pad poora bhig
                  jaye.
                </li>
                <li>Bade clots (ande ya usse bade) aana.</li>
                <li>
                  Dard badhta ja raha ho ya dawa se kam na ho.
                </li>
                <li>
                  Cut wali jagah par laali, sujan, garmi ya peep.
                </li>
                <li>Cut se khoon ya paani ka rissna.</li>
                <li>Pair mein dard, sujan ya laali.</li>
                <li>Saans phoolna ya seene mein dard.</li>
                <li>
                  Tez sar dard, aankhon ke saamne dhundhlapan ya haath-pair mein
                  sujan (delivery ke baad bhi blood pressure badh sakta hai).
                </li>
                <li>Chakkar, kamzori ya behoshi.</li>
                <li>Peshab ya potty mein bahut dard ya rukavat.</li>
                <li>Pet ka lagataar phoolna aur ulti.</li>
                <li>
                  Mann bahut udaas ya ghabrahat ho (mansik sehat ka bhi dhyan
                  rakhein).
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Turant hospital jayein:</strong> Agar seene mein dard,
                saans phoolna, behoshi ya bahut zyada bleeding ho.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jaanch Kaise Hoti Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Doctor dard ka karan dekhne ke liye ye kar sakti hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history:</strong> Delivery ka type, dard kab
                  shuru hua, bleeding aur bukhar.
                </li>
                <li>
                  <strong>Physical examination:</strong> Pet, bachedani ka size
                  aur cut wali jagah.
                </li>
                <li>
                  <strong>Temperature aur blood pressure</strong>
                </li>
                <li>
                  <strong>CBC:</strong> Infection ya anemia ka pata lagane ke
                  liye.
                </li>
                <li>
                  <strong>Urine test aur culture</strong>
                </li>
                <li>
                  <strong>Ultrasound:</strong> Bachedani mein bache hue hisse ya
                  fluid collection dekhne ke liye.
                </li>
                <li>
                  <strong>Wound swab culture:</strong> Wound infection mein.
                </li>
                <li>
                  <strong>Doppler ultrasound:</strong> Pair mein DVT ka shak ho
                  to.
                </li>
                <li>
                  <strong>Doosri jaanch:</strong> Zaroorat par CT ya MRI.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Bukhar ka temperature, dard kab badhta hai
                aur pad kitne bhige, iska record rakhein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ilaj: Cause Ke Hisaab Se
              </h2>

              <p className="mb-4 text-gray-700">
                Har case ka ilaj alag hota hai. Yeh sirf general jaankari hai.
                Ilaj doctor ki jaanch ke baad hi tay hoga.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. After-pains ya halka dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aaram aur garam senk (doctor ki salah se).
                </li>
                <li>
                  Doctor ki batayi, breastfeeding mein surakshit dard ki dawa.
                </li>
                <li>
                  Baby ko doodh pilate waqt aaramdayak position.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. C-section wound ka dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dawaiyan aur wound ki saaf-safai.</li>
                <li>
                  Khaansi ya uthte waqt pet ko takiye se support dein.
                </li>
                <li>Doctor ki salah par abdominal binder.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Gas aur kabz
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dheere-dheere chalna-phirna.</li>
                <li>Fibre wali diet aur paani.</li>
                <li>Zaroorat par doctor ki batayi kabz ki dawa.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Episiotomy ya tear ka dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Saaf-safai aur sitz bath (doctor ki salah se).
                </li>
                <li>Dard ki dawa aur soft cushion par baithna.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. UTI
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Urine test ke baad antibiotics.</li>
                <li>Zyada paani.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Bachedani ka infection ya wound infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Antibiotics (kai baar injection se hospital mein).
                </li>
                <li>Wound ki safai aur zaroorat par peep nikalna.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Retained products
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ultrasound se pata lagane par dawa ya chhoti procedure.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Zyada bleeding (PPH)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Turant hospital mein dawaiyan, drip aur zaroorat par procedure
                  ya blood.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. DVT ya blood clot
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood thinner aur monitoring.</li>
                <li>Yeh doctor ki nigrani mein hi hota hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Hernia ya diastasis recti
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Halke cases mein exercise aur physiotherapy.
                </li>
                <li>Bade hernia mein surgery.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Pet Ki Dekhbhaal: Kya Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aaram karein, lekin dheere-dheere chalna bhi zaroori hai
                  (blood clot aur kabz se bachav).
                </li>
                <li>
                  Paani achhe se piyein, khaaskar breastfeeding mein.
                </li>
                <li>
                  Fibre wali diet lein: dalia, fruits, sabziyan, dal.
                </li>
                <li>
                  Protein aur iron wale khaane: dal, ande, doodh, paneer, palak.
                </li>
                <li>
                  Cut ko saaf aur sukha rakhein. Doctor ne jo dressing bataya
                  hai, wahi follow karein.
                </li>
                <li>Doctor ki di hui dawaiyan samay par lein.</li>
                <li>
                  Khaansi ya uthte waqt pet ko takiye se support dein.
                </li>
                <li>
                  Baby ko doodh pilate waqt peeth aur pet ko support dein.
                </li>
                <li>
                  Halki pelvic floor exercises (doctor ki salah se).
                </li>
                <li>
                  Neend ka dhyan rakhein, jab baby soye tab aap bhi aaram karein.
                </li>
                <li>Follow-up visit miss na karein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Nahi Karna Chahiye?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bina doctor ki salah ke koi bhi dard ki goli ya herbal dawa
                  na lein, khaaskar breastfeeding mein.
                </li>
                <li>
                  Bhaari saman ya baby ke alawa kuch na uthayein (khaaskar
                  C-section ke baad kuch hafte).
                </li>
                <li>
                  Cut par tel, haldi ya koi cheez na lagayein.
                </li>
                <li>Pet par zor se dabav ya malish na karein.</li>
                <li>
                  Tez exercise ya crunches jaldi shuru na karein.
                </li>
                <li>
                  Bleeding, bukhar ya badbu ko &quot;normal&quot; samajhkar na
                  taalein.
                </li>
                <li>
                  Intercourse doctor ki ijaazat se pehle na karein.
                </li>
                <li>
                  Dard ko sahna zaroori nahi hai. Dard ki baat doctor se zaroor
                  karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Gharelu Nuskhe Aur Parivaar Ki Salah
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Garam pani ki senk aur halka khaana kai baar aaram deta hai.
                </li>
                <li>
                  Lekin infection, blood clot ya zyada bleeding ka ilaj gharelu
                  nuskhon se nahi hota.
                </li>
                <li>
                  &quot;Pet ko baandhna&quot; ya &quot;pet par kapda kasna&quot;
                  purani parampara hai. Ise doctor ki salah ke bina na karein,
                  khaaskar C-section ke baad.
                </li>
                <li>
                  Parivaar ki salah sunein, lekin red flag dikhne par doctor ko
                  hi dikhayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Delivery Ke Baad Check-up Kab Karayein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  C-section ya episiotomy ke baad wound check ke liye aam taur
                  par 1-2 hafte ke andar.
                </li>
                <li>6 hafte ke aas-paas poora postnatal check-up.</li>
                <li>
                  Bleeding, bukhar ya dard ho to next appointment ka intezaar na
                  karein.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Check-up mein aam taur par ye dekhe jaate hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bachedani ka size aur wound</li>
                <li>Blood pressure aur anemia</li>
                <li>Family planning ki salah</li>
                <li>Breastfeeding aur mansik sehat</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Dr. Priyanka Pachauri Se Consult Kyun?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec Moradabad ka women&apos;s health aur
                fertility centre hai. Website ke mutabik yahan yeh suvidhayein
                hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dr. Priyanka Pachauri, jinhe laparoscopy, fertility aur
                  mahilaon ki sehat mein pehchan hasil hai.
                </li>
                <li>
                  Pregnancy aur Birthing Care, Antenatal Services aur Normal
                  Delivery care.
                </li>
                <li>
                  Centre ki profile mein antenatal aur postnatal care ka
                  mention.
                </li>
                <li>3D aur 4D ultrasound (Voluson machine).</li>
                <li>
                  Paediatric care: baby ke liye consultation, vaccination aur
                  newborn care.
                </li>
                <li>
                  High-Definition 3D Laparoscopic Surgery (zaroorat par
                  gynaecological surgery ke liye).
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
                  Pregnancy se delivery aur delivery ke baad, ek hi team se
                  care.
                </li>
                <li>Mother aur baby, dono ke liye ek hi jagah suvidha.</li>
                <li>Aapka poora record aapki team ke paas.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Appointment Par Kya Saath Layein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Delivery ke discharge papers aur reports</li>
                <li>Chal rahi dawaiyon ki list</li>
                <li>Bukhar ka record (agar aaya ho)</li>
                <li>
                  Bleeding aur dard ka note: kab shuru hua, kitna hai
                </li>
                <li>Purani ultrasound ya blood reports</li>
                <li>Apne sawaal ek paper par likhkar</li>
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
