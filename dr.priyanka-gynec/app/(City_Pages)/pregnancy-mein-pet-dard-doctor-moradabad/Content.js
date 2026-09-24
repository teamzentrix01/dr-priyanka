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

export default function PregnancyMeinPetDardKabNormalHai() {
  const faqs = [
    {
      q: "Kya pregnancy mein pet dard normal hai?",
      a: "Halka aur kam samay ka dard aksar normal hai. Tez ya lagataar dard ho to doctor ko dikhayein.",
    },
    {
      q: "Pregnancy ke pehle mahine mein pet dard kyun hota hai?",
      a: "Implantation, bachedani ka badhna, gas ya UTI se. Bleeding ke saath ho to turant jaanch.",
    },
    {
      q: "Kab turant hospital jana chahiye?",
      a: "Tez dard, bleeding, paani girna, regular contractions, bukhar ya baby ki halchal kam hone par.",
    },
    {
      q: "Ek taraf tez pet dard kya ho sakta hai?",
      a: "Round ligament pain, cyst, appendicitis ya ectopic pregnancy. Turant jaanch karayein.",
    },
    {
      q: "Kya pregnancy mein dard ki goli le sakte hain?",
      a: "Bina doctor ki salah nahi. Ibuprofen aur diclofenac aam taur par surakshit nahi hote.",
    },
    {
      q: "Braxton Hicks kya hote hain?",
      a: "Baad ke mahino ke irregular, halke jhoothe dard jo aaram se kam ho jaate hain.",
    },
    {
      q: "Pregnancy mein pet dard ka ilaj kya hai?",
      a: "Karan ke hisaab se aaram, dawa, antibiotics ya hospital ilaj. Doctor jaanch ke baad tay karti hain.",
    },
    {
      q: "Kya pet ke upar ka dard khatarnak ho sakta hai?",
      a: "Sar dard, dhundhlapan ya sujan ke saath ho to pre-eclampsia ka shak. Turant doctor ko dikhayein.",
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
                Pregnancy Mein Pet Dard: Kab Normal Hai Aur Kab Doctor Ko
                Dikhayein (Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy mein pet mein achanak dard uthe, to dar lagna
                swabhavik hai. Mann mein turant sawaal aate hain: &quot;Kya
                baby ko koi dikkat hai? Kya miscarriage ho raha hai? Kya main
                doctor ke paas jaun ya thoda wait karun?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki pregnancy mein halka pet dard kai baar bilkul
                normal hota hai. Bachedani badh rahi hoti hai, ligaments kheench
                rahe hote hain aur hormones badal rahe hote hain. Lekin kuch
                prakar ka pet dard kisi gambhir problem ka signal ho sakta hai,
                aur usme der karna khatarnak ho sakta hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy mein pet dard ke common karan</li>
                <li>Trimester ke hisaab se dard kaisa hota hai</li>
                <li>Normal aur khatarnak dard mein farak</li>
                <li>Jaanch aur ilaj</li>
                <li>Ghar par kya karein aur kya na karein</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Mein Pet Dard Kab Normal Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Ye sthitiyan aam taur par chinta ki baat nahi hoti:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Halka, kuch second ya minute ka dard jo position badalne ya
                  aaram karne se kam ho jaye.
                </li>
                <li>
                  Halka khinchav ya chubhan, khaaskar khaansne, chheenkne ya
                  uthne par.
                </li>
                <li>
                  Periods jaise halke marod, jo tez na hon aur bleeding ke saath
                  na hon.
                </li>
                <li>
                  Gas ya kabz ka dard, jo potty ya gas nikalne se kam ho.
                </li>
                <li>
                  Pet ke dono taraf halka khinchne wala dard, jaise ligaments
                  kheench rahe hon.
                </li>
                <li>
                  Baad ke mahino mein kabhi-kabhi aane wali kadak (Braxton
                  Hicks) jo aaram ya paani peene se kam ho.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Zaroori baat:</strong> Har mahila ka dard sehne ka level
                alag hota hai. Agar aapko dard ajeeb, tez ya alag lag raha hai,
                to apni doctor ko zaroor batayein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Trimester Ke Hisaab Se Pet Dard Ke Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pehla Trimester (1-12 hafte)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Implantation ka halka dard:</strong> Embryo bachedani
                  mein chipakta hai. Halka marod ya spotting ho sakti hai.
                </li>
                <li>
                  <strong>Bachedani ka badhna:</strong> Ligaments aur muscles
                  kheenchte hain, jisse halka dard hota hai.
                </li>
                <li>
                  <strong>Gas aur kabz:</strong> Progesterone hormone se pachan
                  dheema hota hai.
                </li>
                <li>
                  <strong>Peshab ka infection (UTI):</strong> Peshab mein jalan,
                  baar-baar peshab aur pet ke neeche dard.
                </li>
                <li>
                  <strong>Threatened miscarriage:</strong> Bleeding ke saath pet
                  ke neeche dard. Doctor ko turant dikhayein.
                </li>
                <li>
                  <strong>Ectopic pregnancy:</strong> Pregnancy bachedani ke
                  bahar (aksar tube mein) hoti hai. Ek taraf tez dard, bleeding,
                  chakkar ya kandhe mein dard iske sign ho sakte hain. Yeh
                  emergency hai.
                </li>
                <li>
                  <strong>Molar pregnancy (bahut kam):</strong> Bleeding, tez
                  ulti aur pet mein dard. Ultrasound se pata chalta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Doosra Trimester (13-27 hafte)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Round ligament pain:</strong> Pet ke neeche ek ya
                  dono taraf tez, kheenchne wala dard. Achanak uthne ya position
                  badalne par hota hai. Aam taur par bekhatar hota hai.
                </li>
                <li>
                  <strong>Gas, kabz aur acidity</strong>
                </li>
                <li>
                  <strong>UTI ya kidney ka infection</strong>
                </li>
                <li>
                  <strong>Fibroid ka dard:</strong> Pregnancy mein fibroid ka
                  size ya blood supply badal sakti hai, jisse dard hota hai.
                </li>
                <li>
                  <strong>Cervix ka kamzor hona (cervical insufficiency):</strong>{" "}
                  Aksar bina tez dard ke, lekin pet mein dabav ya bhaari-pan ho
                  sakta hai.
                </li>
                <li>
                  <strong>Time se pehle contractions:</strong> Regular kadak ya
                  dard.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Teesra Trimester (28-40 hafte)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Braxton Hicks contractions:</strong> Pet ka
                  kabhi-kabhi kadak ho jaana. Aksar bina dard ya halka dard, aur
                  aaram se kam ho jaata hai.
                </li>
                <li>
                  <strong>Asli labour ke dard:</strong> Regular, badhte hue aur
                  time ke saath tez hote dard. Kamar se pet ki taraf jaate hain.
                </li>
                <li>
                  <strong>Time se pehle labour (preterm labour):</strong> 37
                  hafte se pehle regular contractions.
                </li>
                <li>
                  <strong>Placental abruption:</strong> Placenta ka bachedani se
                  alag hona. Tez, lagataar pet dard, kadak pet aur bleeding ho
                  sakti hai. Yeh emergency hai.
                </li>
                <li>
                  <strong>Pre-eclampsia:</strong> Blood pressure badhne ki
                  sthiti. Pet ke upar ke daayein hisse ya seene ke neeche dard,
                  tez sar dard, aankhon ke saamne dhundhlapan aur haath-pair
                  mein sujan iske sign ho sakte hain.
                </li>
                <li>
                  <strong>Pubic ya pelvic joint ka dard:</strong> Baby ka sar
                  neeche aane se pelvis mein dabav aur dard.
                </li>
                <li>
                  <strong>Baby ki lat ya position se pet mein dard.</strong>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kisi Bhi Trimester Mein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Acidity aur heartburn:</strong> Pet ke upar ya chhati
                  mein jalan.
                </li>
                <li>
                  <strong>Kabz aur piles</strong>
                </li>
                <li>
                  <strong>Gallstones ya pancreas ki sujan (kam common)</strong>
                </li>
                <li>
                  <strong>Appendicitis:</strong> Pet ke daayein neeche ke hisse
                  mein dard, bukhar aur ulti. Pregnancy mein dard ki jagah badal
                  sakti hai, isliye pehchanna mushkil ho sakta hai.
                </li>
                <li>
                  <strong>Kidney stone:</strong> Kamar se pet ki taraf jaata tez
                  dard, peshab mein khoon.
                </li>
                <li>
                  <strong>Ovarian cyst ka marod ya phatna (torsion)</strong>
                </li>
                <li>
                  <strong>Aant ki rukavat (bahut kam)</strong>
                </li>
                <li>
                  <strong>Trauma ya girna:</strong> Pet par chot lagne ke baad
                  dard aur bleeding ho to turant jaanch.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dard Kahan Ho Raha Hai? Sambhavit Karan
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Pet ke neeche (pelvis):</strong> Ligament ka dard,
                  UTI, threatened miscarriage, ectopic pregnancy ya preterm
                  labour.
                </li>
                <li>
                  <strong>Pet ke ek taraf tez dard (neeche):</strong> Round
                  ligament pain, ectopic pregnancy, ovarian cyst, appendicitis ya
                  kidney stone.
                </li>
                <li>
                  <strong>Pet ke upar (chhati ke neeche):</strong> Acidity, gas,
                  gallstones ya pre-eclampsia ka signal.
                </li>
                <li>
                  <strong>Kamar se pet ki taraf:</strong> Kidney ka infection ya
                  stone, ya labour ke dard.
                </li>
                <li>
                  <strong>Poore pet mein kadak:</strong> Braxton Hicks ya
                  labour.
                </li>
                <li>
                  <strong>Lagataar tez dard ke saath kadak pet:</strong>{" "}
                  Placental abruption ka shak. Turant hospital.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Yaad rakhein:</strong> Sirf jagah dekhkar karan pakka
                nahi hota. Doctor ki jaanch zaroori hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ya Hospital Jayein? (Red Flags)
              </h2>

              <p className="mb-4 text-gray-700">
                Ye lakshan hon to der na karein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tez ya badhta hua pet dard, jo aaram se kam na ho.
                </li>
                <li>
                  Bleeding, chahe halki ho ya zyada, khaaskar dard ke saath.
                </li>
                <li>
                  Ek taraf tez dard ke saath chakkar, kamzori ya kandhe mein
                  dard (ectopic pregnancy ka shak).
                </li>
                <li>
                  Paani ka rissna ya achanak paani girna.
                </li>
                <li>
                  Regular, badhte hue contractions (37 hafte se pehle to turant).
                </li>
                <li>
                  Kadak, patthar jaisa pet jo dheela na ho.
                </li>
                <li>
                  Baby ki halchal kam ya band lagna.
                </li>
                <li>
                  Tez bukhar ya kaanpna.
                </li>
                <li>
                  Tez sar dard, aankhon ke saamne dhundhlapan, haath-pair aur
                  chehre mein sujan.
                </li>
                <li>
                  Pet ke upar ke daayein hisse mein tez dard ya ulti (BP badhne
                  ka shak).
                </li>
                <li>
                  Peshab mein jalan ke saath bukhar ya kamar dard.
                </li>
                <li>
                  Behoshi, saans phoolna ya seene mein dard.
                </li>
                <li>
                  Girne ya pet par chot lagne ke baad dard ya bleeding.
                </li>
                <li>
                  Aapko lag raha ho ki &quot;kuch theek nahi hai&quot;.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Emergency mein der na karein. Turant apni doctor ya nazdeeki
                hospital jayein.
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
                  <strong>Detailed history:</strong> Dard kab shuru hua, kaisa
                  hai, kahan hai aur saath mein bleeding ya bukhar.
                </li>
                <li>
                  <strong>Blood pressure, pulse aur temperature</strong>
                </li>
                <li>
                  <strong>Pet ka examination:</strong> Bachedani ki kadakta aur
                  dard ki jagah.
                </li>
                <li>
                  <strong>Ultrasound (TVS ya pet ka):</strong> Pregnancy ki
                  jagah, baby ki dhadkan, placenta, paani aur cervix ki jaanch.
                </li>
                <li>
                  <strong>Doppler ultrasound:</strong> Baby aur placenta mein
                  khoon ke bahaav ke liye, zaroorat par.
                </li>
                <li>
                  <strong>Cervical length scan:</strong> Preterm labour ka risk
                  dekhne ke liye.
                </li>
                <li>
                  <strong>Urine test aur culture:</strong> UTI ke liye.
                </li>
                <li>
                  <strong>CBC:</strong> Anemia ya infection ke liye.
                </li>
                <li>
                  <strong>Blood pressure aur urine protein test:</strong>{" "}
                  Pre-eclampsia ke liye.
                </li>
                <li>
                  <strong>Blood group aur Rh factor:</strong> Rh negative mein
                  bleeding ho to zaroori.
                </li>
                <li>
                  <strong>Baby ka CTG (heart rate monitoring):</strong> Baad ke
                  mahino mein.
                </li>
                <li>
                  <strong>Doosri jaanch:</strong> Zaroorat par kidney,
                  gallbladder ya appendix ke liye alag ultrasound ya MRI.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Dard kab shuru hua, kitni der chala aur
                kya kam karta hai, iska note rakhein.
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
                1. Round ligament aur normal pregnancy dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Position dheere-dheere badlein.</li>
                <li>
                  Aaram aur garam (na ki bahut garam) senk, doctor ki salah se.
                </li>
                <li>Support belt ya pregnancy pillow.</li>
                <li>Prenatal yoga ya stretching, doctor ki salah se.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Gas, acidity aur kabz
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chhote-chhote meals, fibre aur paani.</li>
                <li>Halki walking.</li>
                <li>Doctor ki batayi surakshit dawa.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. UTI
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Urine test ke baad pregnancy-safe antibiotics.</li>
                <li>Zyada paani. Ilaj adhura na chhodein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Threatened miscarriage
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor ki salah se aaram aur follow-up ultrasound.</li>
                <li>Zaroorat par hormonal support.</li>
                <li>Rh negative ho to anti-D injection.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Ectopic pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Emergency ilaj: Dawa ya surgery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Preterm labour
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hospital mein monitoring aur contractions rokne ki dawa.</li>
                <li>
                  Baby ke phephde majboot karne ke injection, doctor ki salah
                  se.
                </li>
                <li>
                  Zaroorat par cerclage jaisa option agle ya isi pregnancy mein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Placental abruption
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency: Hospital mein monitoring aur zaroorat par turant
                  delivery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Pre-eclampsia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood pressure control, monitoring aur zaroorat par hospital
                  mein bharti.
                </li>
                <li>
                  Kai cases mein samay se delivery karani padti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Fibroid ka dard
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Aaram aur doctor ki batayi dard ki dawa.</li>
                <li>
                  Aam taur par pregnancy mein surgery se bacha jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Appendicitis, gallstones ya kidney stone
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgeon aur gynaecologist milkar decide karte hain.
                </li>
                <li>
                  Kai cases mein surgery ya specific ilaj zaroori hota hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dard Ki Goli Aur Dawaiyon Ke Baare Mein
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bina doctor ki salah koi bhi dard ki goli na lein.
                </li>
                <li>
                  Ibuprofen aur diclofenac jaisi dard ki goliyan pregnancy mein
                  aam taur par nahi di jaatin, khaaskar baad ke mahino mein.
                </li>
                <li>
                  Kai baar doctor paracetamol ko surakshit vikalp maanti hain,
                  lekin matra aur duration doctor hi tay karti hain.
                </li>
                <li>
                  Herbal ya Ayurvedic dawa bhi bina poochhe na lein.
                </li>
                <li>
                  Pehle se koi dawa chal rahi ho to doctor ko bataayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ghar Par Kya Karein? (Do&apos;s)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aaram karein aur dard hone par baith jayein ya lait jayein.
                </li>
                <li>
                  Baayein taraf karwat lekar letna aksar aaramdayak hota hai.
                </li>
                <li>
                  Paani achhe se piyein, kyunki dehydration se bhi kadak aur
                  dard ho sakta hai.
                </li>
                <li>
                  Fibre wali diet lein: sabziyan, fruits, dalia, dal.
                </li>
                <li>Chhote-chhote meals khayein.</li>
                <li>
                  Dheere-dheere position badlein, achanak na uthein.
                </li>
                <li>Support belt ya pregnancy pillow ka use karein.</li>
                <li>Halki walking karein, doctor ki salah se.</li>
                <li>
                  Dard ka record rakhein: kab, kitni der, kitna tez.
                </li>
                <li>
                  Baby ki halchal par dhyan dein, khaaskar teesre trimester
                  mein.
                </li>
                <li>
                  Doctor ke batye check-up aur scans samay par karayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Na Karein? (Don&apos;ts)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dard ko sahna zaroori nahi hai. Tez ya ajeeb dard ho to turant
                  batayein.
                </li>
                <li>
                  Bleeding ke saath dard ko &quot;normal&quot; samajhkar na
                  taalein.
                </li>
                <li>
                  Bina doctor ki salah dard ki goli, herbal ya gharelu dawa na
                  lein.
                </li>
                <li>
                  Bhaari saman ya zyada thakaane wale kaam na karein.
                </li>
                <li>
                  Pet par zor se dabav ya malish na karein.
                </li>
                <li>
                  Lambe time tak khaali pet na rahein.
                </li>
                <li>
                  Internet dekhkar khud diagnose na karein.
                </li>
                <li>
                  Baby ki halchal kam lage to intezaar na karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Braxton Hicks Aur Asli Labour Mein Farak
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Braxton Hicks (jhoothe dard)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Irregular hote hain.</li>
                <li>
                  Aaram, paani ya position badalne se kam ho jaate hain.
                </li>
                <li>Aksar tez nahi hote.</li>
                <li>Time ke saath tez nahi hote.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Asli labour (ya preterm labour)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Regular hote hain aur kam samay ke antar par aate hain.
                </li>
                <li>
                  Time ke saath tez aur lambe hote jaate hain.
                </li>
                <li>Aaram karne se kam nahi hote.</li>
                <li>Kamar se pet ki taraf jaate hain.</li>
                <li>
                  Paani girna ya blood-mila discharge saath ho sakta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Mein Pet Dard Se Bachne Ke Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular antenatal check-up aur scans karayein.</li>
                <li>Balanced diet aur paani lein.</li>
                <li>Kabz se bachne ke liye fibre lein.</li>
                <li>
                  Doctor ki salah se halki exercise ya prenatal yoga karein.
                </li>
                <li>
                  Sahi posture rakhein aur achanak jhatka na dein.
                </li>
                <li>
                  Doctor ki batayi iron, calcium aur vitamins samay par lein.
                </li>
                <li>Blood pressure aur sugar ki monitoring karayein.</li>
                <li>
                  Peshab ke infection ke lakshan par jaldi doctor ko dikhayein.
                </li>
                <li>Smoking aur alcohol se bilkul door rahein.</li>
                <li>Kisi bhi lakshan ko chhupayein nahi.</li>
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