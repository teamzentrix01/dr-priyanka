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

export default function PeriodsTimeSePehleAana() {
  const faqs = [
    {
      q: "Periods time se pehle aana kya normal hai?",
      a: "1-3 din ka farak normal hai. Baar-baar ya 21 din se kam cycle mein jaanch karayein.",
    },
    {
      q: "Periods jaldi aane ke sabse common karan kya hain?",
      a: "Stress, hormonal badlav, PCOS, thyroid, pills/emergency pill, fibroid aur perimenopause.",
    },
    {
      q: "Kya jaldi periods pregnancy ka sign ho sakte hain?",
      a: "Halki spotting implantation bleeding ho sakti hai. Pehle pregnancy test karayein.",
    },
    {
      q: "Kya emergency pill se periods jaldi aa sakte hain?",
      a: "Haan, uske baad periods aage-peeche ho sakte hain. Baar-baar lena theek nahi.",
    },
    {
      q: "Mahine mein 2 baar periods aana kya problem hai?",
      a: "Baar-baar ho to jaanch zaroori hai. Ek baar ho to stress ya hormonal karan ho sakta hai.",
    },
    {
      q: "Kab turant doctor ko dikhana chahiye?",
      a: "Zyada bleeding, tez dard, chakkar, bukhar, ya pregnancy ke saath bleeding mein.",
    },
    {
      q: "Kaunsi jaanch hoti hain?",
      a: "UPT, CBC, thyroid, hormone tests aur TVS ultrasound. Zaroorat par hysteroscopy.",
    },
    {
      q: "Kya iska ilaj ghar par ho sakta hai?",
      a: "Halki lifestyle problem mein aaram aur diet madad karte hain. Baaki cases mein doctor ka ilaj zaroori hai.",
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
                Periods Time Se Pehle Aana: Karan, Lakshan Aur Doctor Ka Ilaj
                (Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Aapke periods aam taur par 28-30 din mein aate the, lekin is
                baar 18-20 din mein hi aa gaye? Ya ek hi mahine mein do baar
                periods ho gaye? Aisa hone par kai mahilayein ghabra jaati hain
                aur sochti hain ki kya koi bimari ho gayi hai, ya pregnancy to
                nahi hai.
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki kabhi-kabhi periods ka ek-do din pehle aana
                bilkul normal hota hai. Lekin agar yeh baar-baar ho raha hai,
                bleeding zyada hai, ya dard aur kamzori ho rahi hai, to yeh kisi
                hormonal ya gynaecological problem ka signal ho sakta hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Normal periods cycle kya hota hai</li>
                <li>Periods time se pehle aane ke karan</li>
                <li>Kab doctor ko dikhana zaroori hai</li>
                <li>Kaunsi jaanch hoti hain</li>
                <li>Kaunsa ilaj kab kaam aata hai</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Normal Periods Cycle Kya Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Pehle yeh samajhna zaroori hai ki &quot;time se pehle&quot; ka
                matlab kya hai.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods cycle pehle din ki bleeding se agle periods ke pehle
                  din tak ginte hain.
                </li>
                <li>
                  Adult mahilaon mein cycle aam taur par 21 se 35 din ka hota
                  hai.
                </li>
                <li>Periods 2 se 7 din tak chal sakte hain.</li>
                <li>Har mahine 1-3 din ka farak bahut common hai.</li>
                <li>
                  Kishori ladkiyon mein shuru ke 1-2 saal cycle irregular ho
                  sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                &quot;Time se pehle&quot; kab maana jaata hai?
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycle 21 din se kam ho, yani periods 3 hafte se pehle hi aa
                  jayein.
                </li>
                <li>
                  Ya aapke apne normal cycle se 7 din ya usse zyada pehle
                  periods aayein.
                </li>
                <li>Ya mahine mein 2 baar bleeding ho.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Medical language mein: Bahut jaldi-jaldi periods ko polymenorrhea
                ya frequent menstruation kehte hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Yeh Sach Mein Periods Hain Ya Koi Aur Bleeding?
              </h2>

              <p className="mb-4 text-gray-700">
                Kai baar jo bleeding &quot;periods&quot; lagti hai, wo asal mein
                periods nahi hoti. Isliye yeh farak dhyan mein rakhein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Spotting:</strong> Bahut halka khoon, kuch boondein ya
                  halka brown discharge.
                </li>
                <li>
                  <strong>Implantation bleeding:</strong> Pregnancy ke shuruaati
                  dino mein halka pink ya brown khoon aa sakta hai.
                </li>
                <li>
                  <strong>Breakthrough bleeding:</strong> Hormonal pills ya
                  injection lene par beech mein bleeding.
                </li>
                <li>
                  <strong>Asli periods:</strong> Bleeding gehri lal hoti hai aur
                  2-3 din badhkar phir kam hoti hai.
                </li>
                <li>
                  <strong>Pregnancy complication ki bleeding:</strong>
                  Miscarriage ya ectopic pregnancy mein bleeding ke saath dard
                  ho sakta hai.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Agar periods jaldi aaye hain aur bleeding
                kam ya alag lag rahi hai, to home pregnancy test zaroor karein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Time Se Pehle Aane Ke Main Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Stress aur mansik dabav
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Zyada tension se hormones ka balance bigad sakta hai.
                </li>
                <li>
                  Exam, job pressure ya ghar ki pareshaniyon mein cycle badal
                  sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Neend, travel aur routine mein badlav
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Raat ki shift ya neend ki kami cycle par asar daal sakti hai.
                </li>
                <li>
                  Lambi yatra ya time zone ka farak bhi periods ko aage-peeche
                  kar sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Weight ka achanak badalna
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut tezi se weight badhna ya ghatna periods ko bigaad sakta
                  hai.
                </li>
                <li>
                  Crash dieting aur bahut kam khaana bhi ek bada karan hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Zyada exercise ya heavy workout
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut intense training se periods jaldi, late ya band ho sakte
                  hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Hormonal pills, emergency pill aur contraceptives
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency pill (I-pill) lene ke baad periods aage-peeche ho
                  sakte hain.
                </li>
                <li>
                  Birth control pills shuru, band ya beech mein chhodne par
                  cycle badal sakta hai.
                </li>
                <li>
                  Copper-T ya hormonal IUD lagwane ke baad shuru mein bleeding
                  pattern badal sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. PCOS/PCOD
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation irregular hota hai, isliye periods kabhi jaldi,
                  kabhi late aur kabhi kai mahine baad aate hain.
                </li>
                <li>
                  Chehre par baal, muhaase aur weight badhna iske sign ho sakte
                  hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Thyroid ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid ka kam ya zyada kaam karna periods ko frequent, heavy
                  ya irregular bana sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Short luteal phase ya jaldi ovulation
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kabhi ovulation jaldi ho jaata hai ya cycle ka doosra hissa
                  chhota hota hai, jisse periods jaldi aa jaate hain.
                </li>
                <li>
                  Yeh conceive karne mein bhi dikkat la sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Perimenopause (menopause ke aas-paas ka samay)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  40 saal ke baad hormones ghatne-badhne lagte hain.
                </li>
                <li>
                  Shuru mein periods aksar jaldi-jaldi aate hain, phir irregular
                  hote hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Fibroid aur Polyp
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ke andar ya uski deewar par gaanth ya polyp se heavy
                  aur frequent bleeding ho sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Adenomyosis aur Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods mein tez dard, heavy bleeding aur beech mein spotting
                  ho sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Infection (PID ya cervicitis)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ya cervix ke infection se beech mein bleeding,
                  discharge aur dard ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Pregnancy se juda karan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Implantation bleeding, miscarriage ya ectopic pregnancy mein
                  &quot;periods jaisi&quot; bleeding aa sakti hai.
                </li>
                <li>Ectopic pregnancy ek emergency ho sakti hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Bleeding ya clotting ki bimari
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch mahilaon mein khoon jamne ki problem hoti hai, jisse
                  bleeding zyada ya lambi chalti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                15. Dawaiyan aur doosri bimariyan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood thinners, kuch mental health dawaiyan aur diabetes bhi
                  periods ko affect kar sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                16. Delivery ya breastfeeding ke baad
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery ke baad shuru ke mahino mein cycle bilkul irregular
                  ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                17. Kam common lekin gambhir karan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ya cervix mein cell changes ya cancer ki bahut kam
                  sambhavna, jiski jaanch se pehle-pehle pakad ho sakti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Periods Jaldi Aana Normal Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Ye situations aksar chinta ki baat nahi hoti:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Kabhi-kabhi 1-3 din pehle periods aa jana</li>
                <li>Stress ya yatra ke baad ek baar cycle chhota hona</li>
                <li>Emergency pill ke baad ek baar timing badalna</li>
                <li>Puberty ke shuruaati saal</li>
                <li>Delivery ya breastfeeding ke baad ka dour</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Lekin agar yeh baar-baar ho raha hai, to jaanch karana behtar
                hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ko Dikhayein? (Red Flags)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cycle lagatar 2-3 mahine se 21 din se kam ho.
                </li>
                <li>Mahine mein 2 baar ya usse zyada bleeding.</li>
                <li>
                  Ek ghante mein ek pad poora bhig jaye, ya pad har 1-2 ghante
                  mein badalna pade.
                </li>
                <li>Bade clots aana.</li>
                <li>Bleeding 7 din se zyada chalna.</li>
                <li>Periods ke beech ya intercourse ke baad bleeding.</li>
                <li>Menopause ke baad kisi bhi tarah ki bleeding.</li>
                <li>Tez pet dard, chakkar aana, kamzori ya behoshi.</li>
                <li>Bukhar ya badbudar discharge.</li>
                <li>
                  Pregnancy test positive ho aur saath mein bleeding ya dard ho.
                </li>
                <li>Chehre par baal, weight badhna, ya achanak weight kam hona.</li>
                <li>
                  Palki ya nakhun safed dikhna, thakaan aur saans phoolna (anemia
                  ke sign).
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Emergency mein der na karein:</strong> Agar pregnancy ho
                sakti hai aur tez dard ke saath bleeding ho rahi hai, to turant
                hospital jayein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jaanch Kaise Hoti Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Sahi diagnosis ke liye doctor ye jaanch suggest kar sakti hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history:</strong> Periods ki dates, bleeding,
                  dard, dawaiyan, weight badlav, stress aur family history.
                </li>
                <li>
                  <strong>Physical aur pelvic examination</strong>
                </li>
                <li>
                  <strong>Urine Pregnancy Test (UPT)</strong>
                </li>
                <li>
                  <strong>CBC (Hemoglobin):</strong> Zyada bleeding se anemia ka
                  pata lagane ke liye.
                </li>
                <li>
                  <strong>Thyroid test (TSH)</strong>
                </li>
                <li>
                  <strong>Prolactin aur hormone tests</strong>
                </li>
                <li>
                  <strong>Blood sugar test</strong>
                </li>
                <li>
                  <strong>TVS (Transvaginal Ultrasound):</strong> Bachedani,
                  ovaries, fibroid, polyp aur cyst dekhne ke liye.
                </li>
                <li>
                  <strong>3D/4D Ultrasound:</strong> Zyada detail ke liye.
                </li>
                <li>
                  <strong>Pap smear:</strong> Cervix ki jaanch.
                </li>
                <li>
                  <strong>Diagnostic Hysteroscopy:</strong> Bachedani ke andar
                  camera se dekhna.
                </li>
                <li>
                  <strong>Endometrial biopsy:</strong> Zaroorat par, khaaskar
                  40+ umar mein ya heavy bleeding mein.
                </li>
                <li>
                  <strong>Blood clotting tests:</strong> Agar bleeding disorder
                  ka shak ho.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Apne periods ki dates ek diary ya app mein
                3 mahine tak note karein. Yeh doctor ke liye bahut kaam ka hota
                hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Jaldi Aane Ka Ilaj: Cause Ke Hisaab Se
              </h2>

              <p className="mb-4 text-gray-700">
                Har case ka ilaj alag hota hai. Yeh sirf general jaankari hai.
                Aapka treatment doctor ki jaanch ke baad hi tay hoga.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Agar karan stress ya lifestyle ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Neend, khaana aur exercise ko regular karein.</li>
                <li>
                  Stress kam karne ke liye yoga, meditation ya counselling.
                </li>
                <li>Weight ko healthy range mein laayein.</li>
                <li>2-3 cycle ke baad phir dekhein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Agar PCOS ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight management aur diet.</li>
                <li>Periods regulate karne ki dawaiyan.</li>
                <li>Conceive karna ho to ovulation induction.</li>
                <li>Regular follow-up.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Agar thyroid ki problem ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid ki dawa, doctor ki dose ke hisaab se.</li>
                <li>Regular blood tests.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Agar hormonal pills ya IUD ki wajah se ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Shuru ke 2-3 mahine bleeding pattern badalna common hai.
                </li>
                <li>
                  Doctor pill ka type ya IUD ka option change kar sakti hain.
                </li>
                <li>
                  Bina salah ke pills ya emergency pill baar-baar na lein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Agar zyada bleeding ya anemia ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Iron aur zaroori vitamins.</li>
                <li>
                  Bleeding kam karne wali dawaiyan (doctor ki salah se).
                </li>
                <li>Hormonal control.</li>
                <li>Zaroorat par blood ki jaanch aur monitoring.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Agar fibroid ya polyp ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hysteroscopic Polypectomy:</strong> Bachedani ke polyp
                  bina cut ke nikalna.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy:</strong> Bachedani bachakar
                  fibroid nikalna.
                </li>
                <li>
                  Chhote fibroid mein kabhi-kabhi sirf observation ya dawa.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Agar endometriosis ya adenomyosis ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dard aur hormonal management ki dawaiyan.
                </li>
                <li>Zaroorat par 3D laparoscopic surgery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Agar infection ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor ke bataye antibiotics ka poora course.</li>
                <li>Zaroorat par partner ka bhi ilaj.</li>
                <li>
                  Ghar ke nuskhon se infection theek karne ki koshish na karein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Agar perimenopause ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Symptoms ke hisaab se hormonal ya non-hormonal options.
                </li>
                <li>Bleeding zyada ho to jaanch zaroori.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Agar pregnancy se juda ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ultrasound aur blood test se pehle pakadna zaroori hai.
                </li>
                <li>Ectopic pregnancy mein turant medical care.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Periods Jaldi Aane Se Pregnancy Par Asar Padta Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Agar cycle 21-24 din ka ho, to ovulation jaldi ya luteal phase
                  chhota ho sakta hai.
                </li>
                <li>
                  Isse conceive karne mein dikkat aa sakti hai.
                </li>
                <li>
                  Baar-baar jaldi periods ke saath pregnancy nahi ho rahi ho to
                  fertility jaanch karana behtar hai.
                </li>
                <li>
                  PCOS, thyroid aur fibroid jaise karan ilaj se control ho sakte
                  hain.
                </li>
                <li>
                  Pregnancy plan kar rahi hain to pehle doctor se salah lein.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Yaad rakhein: Sirf periods jaldi aane ka matlab yeh nahi ki aap
                conceive nahi kar sakti. Sahi jaanch se asli karan pata chalta
                hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ghar Par Kya Dhyan Rakhein? (Do&apos;s aur Don&apos;ts)
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods ki dates aur bleeding ka record rakhein.</li>
                <li>
                  Iron aur protein wali diet lein: palak, chukandar, dal, ande,
                  nuts, fruits.
                </li>
                <li>Paani achhe se piyein.</li>
                <li>Roz 7-8 ghante ki neend lein.</li>
                <li>Halki exercise aur walking karein.</li>
                <li>Pad ya cup samay par badlein aur saaf-safai rakhein.</li>
                <li>Doctor ki di hui dawa poori lein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods jaldi ya late karne ki goli bina doctor ke na lein.
                </li>
                <li>Baar-baar emergency pill ka use na karein.</li>
                <li>Crash diet ya bahut zyada exercise na karein.</li>
                <li>
                  Kam bleeding ya zyada bleeding ko &quot;normal&quot; samajhkar
                  mahino tak na taalein.
                </li>
                <li>
                  Bina jaanch ke online ya padosi ki dawa na lein.
                </li>
                <li>
                  Bleeding ke saath dard ho to ghar par nuskhe aazmate na rahein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Gharelu Nuskhe Kaam Karte Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Balanced diet, aaram aur stress management se cycle kai baar
                  normal ho sakta hai.
                </li>
                <li>
                  Lekin fibroid, polyp, thyroid, PCOS ya infection ko nuskhon
                  se theek karne ka pukka saboot nahi hai.
                </li>
                <li>
                  Zyada bleeding mein nuskhon par time waste karne se anemia ho
                  sakta hai.
                </li>
                <li>
                  Koi bhi herbal ya Ayurvedic dawa lene se pehle gynaecologist
                  ko zaroor bataayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Ko Regular Rakhne Ke Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Healthy weight banaye rakhein.</li>
                <li>Sabzi, fruits, dal aur protein wali diet lein.</li>
                <li>Processed aur zyada meetha khaana kam karein.</li>
                <li>Har roz kam se kam 30 minute halki exercise karein.</li>
                <li>Yoga aur pranayam se stress kam karein.</li>
                <li>Neend ka schedule regular rakhein.</li>
                <li>Smoking aur zyada caffeine se bachein.</li>
                <li>Saal mein ek baar gynaecological check-up karayein.</li>
                <li>Periods ki ek diary ya app rakhein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Dr. Priyanka Pachauri Se Consult Kyun?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec Moradabad ka ek women&apos;s health aur
                fertility centre hai. Website ke mutabik yahan yeh suvidhayein
                aur approach hai:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dr. Priyanka Pachauri, jinhe laparoscopy, fertility treatment
                  aur endometriosis care mein pehchan hasil hai.
                </li>
                <li>
                  Menstrual disorder treatment ka mention centre ki profile mein
                  hai.
                </li>
                <li>3D aur 4D ultrasound (Voluson machine).</li>
                <li>
                  Diagnostic Hysteroscopy aur Hysteroscopic Polypectomy.
                </li>
                <li>High-Definition 3D Laparoscopic Surgery.</li>
                <li>
                  Laparoscopic Myomectomy, Cystectomy, Hysterectomy aur
                  Endometriosis Surgery.
                </li>
                <li>Fertility aur IVF, Pregnancy aur Antenatal care.</li>
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
                  Ek hi jagah jaanch, ultrasound aur zaroorat par surgery ki
                  suvidha.
                </li>
                <li>
                  Camera-based treatment mein chhote cuts aur aam taur par tez
                  recovery.
                </li>
                <li>Har visit par continuity of care.</li>
                <li>
                  Shaadi se pehle, pregnancy ke time aur menopause tak, har
                  stage par ek hi team.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pehli Appointment Par Kya Saath Layein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Purani ultrasound, blood test aur thyroid reports</li>
                <li>Chal rahi dawaiyon ya pills ki list</li>
                <li>Last 3-6 mahine ke periods ki dates</li>
                <li>
                  Bleeding kitni thi, kitne din chali aur dard ka record
                </li>
                <li>Purani surgery ya delivery ke papers</li>
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