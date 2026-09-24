
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

export default function PeriodsKeSathBukhar() {
  const faqs = [
    {
      q: "Kya periods ke saath bukhar aana normal hai?",
      a: "Halki garmi aur thakaan hormones se ho sakti hai. Asli bukhar (100.4°F+) ho to jaanch karayein.",
    },
    {
      q: "Periods mein bukhar ke common karan kya hain?",
      a: "Hormonal badlav, viral bukhar, UTI, PID, mausami bimariyan aur miscarriage ka infection.",
    },
    {
      q: "Kab turant doctor ko dikhana chahiye?",
      a: "Tez bukhar, tez dard, badbudar discharge, zyada bleeding ya behoshi mein.",
    },
    {
      q: "Kya tampon se bukhar ho sakta hai?",
      a: "Bahut kam cases mein Toxic Shock Syndrome ho sakta hai. Tez bukhar aur rash ho to turant hospital jayein.",
    },
    {
      q: "Kya periods ke saath bukhar pregnancy ka sign hai?",
      a: "Nahi hamesha. Periods late ho ya bleeding alag lage to pehle pregnancy test karayein.",
    },
    {
      q: "Kaunsi jaanch hoti hain?",
      a: "CBC, urine test, pregnancy test, ultrasound aur zaroorat par dengue, malaria, typhoid ke tests.",
    },
    {
      q: "Bukhar mein kaun si dawa lein?",
      a: "Bina doctor ki salah antibiotics na lein. Paracetamol bhi doctor ke batye dose mein.",
    },
    {
      q: "Kya gharelu nuskhe kaafi hain?",
      a: "Halke viral bukhar mein aaram de sakte hain. Infection ka ilaj doctor se karayein.",
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
                Periods Ke Sath Bukhar: Karan, Red Flags Aur Ilaj (Doctor,
                Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Periods shuru hue aur saath mein bukhar bhi aa gaya. Sharir
                tapta hai, kamzori lagti hai, pet mein dard hai aur samajh nahi
                aata ki yeh periods ki wajah se hai ya koi alag bimari. Bahut si
                mahilayein ise &quot;periods ka asar&quot; samajhkar taal deti
                hain.
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki periods ke aas-paas halka sa temperature badhna
                aksar hormones ki wajah se hota hai. Lekin agar asli bukhar
                (100.4°F ya 38°C se upar) ho, ya bukhar ke saath tez dard,
                badbudar discharge ya zyada bleeding ho, to yeh infection ya
                kisi aur problem ka signal ho sakta hai. Us waqt doctor ko
                dikhana zaroori hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods ke saath bukhar kab normal hai aur kab nahi
                </li>
                <li>Iske common karan</li>
                <li>Kaunsi jaanch hoti hain</li>
                <li>Ilaj aur ghar par dhyan rakhne wali baatein</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Periods Ke Saath Bukhar Aana Normal Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods se pehle aur uske dauran progesterone aur prostaglandin
                  jaise hormones ka level badalta hai.
                </li>
                <li>
                  Isse kai mahilaon ko halki garmi, thakaan aur body temperature
                  mein thoda badlav mehsoos hota hai.
                </li>
                <li>
                  Yeh badlav aam taur par bahut halka hota hai, aur thermometer
                  par aksar asli bukhar nahi dikhta.
                </li>
                <li>
                  Ovulation ke baad body temperature thoda badhta hai aur periods
                  shuru hone tak bana rehta hai.
                </li>
              </ul>

              <h3 className="mb-2 mt-4 text-xl font-semibold text-gray-900">
                Asli bukhar kab maana jaata hai?
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mooh (oral) se naapne par 100.4°F (38°C) ya usse zyada.
                </li>
                <li>
                  Saath mein kaanpna, sar dard ya badan dard ho sakta hai.
                </li>
                <li>
                  Yaad rakhein: Thoda garam mehsoos karna aur asli bukhar hona
                  alag baatein hain. Thermometer se naap kar hi pata chalta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Ke Saath Bukhar Ke Common Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Hormonal badlav aur PMS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods se pehle hormones ke utaar-chadhaav se halki garmi,
                  thakaan aur sar dard ho sakta hai.
                </li>
                <li>
                  Aksar bukhar bahut halka hota hai aur periods shuru hone ke
                  baad kam ho jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Viral bukhar ya aam infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sardi-zukam ya flu ka bukhar periods ke time hone par ek saath
                  hone ka sanyog ho sakta hai.
                </li>
                <li>
                  Periods ke dauran shareer thoda kamzor mehsoos hota hai,
                  isliye bukhar zyada lagta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Mausami bimariyan (dengue, malaria, typhoid)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Barsaat ke mausam mein dengue, malaria aur typhoid ke cases
                  badhte hain.
                </li>
                <li>
                  Inme bukhar ke saath periods mein zyada bleeding bhi ho sakti
                  hai, kyunki dengue mein platelets kam ho sakte hain.
                </li>
                <li>
                  Bukhar 2-3 din se zyada chale to blood test zaroor karayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Peshab ka infection (UTI)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Peshab mein jalan, baar-baar peshab aur pet ke neeche dard ke
                  saath bukhar aa sakta hai.
                </li>
                <li>
                  Periods ke dauran safai ki kami se risk badh sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani, tubes ya ovaries ka infection.
                </li>
                <li>
                  Bukhar, pet ke neeche dard aur badbudar discharge iske mukhya
                  sign hain.
                </li>
                <li>
                  Periods ke dauran ya baad mein lakshan badh sakte hain.
                </li>
                <li>
                  Ilaj mein der hone par tubes ko nuksan aur pregnancy mein
                  dikkat ho sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Endometritis (bachedani ki andar ki parat ka infection)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery, abortion, miscarriage ya kisi procedure ke baad ho
                  sakta hai.
                </li>
                <li>
                  Bukhar, dard aur zyada ya badbudar bleeding.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Copper-T ya IUD se juda infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  IUD lagwane ke kuch hafton mein infection ka risk thoda zyada
                  hota hai.
                </li>
                <li>
                  Bukhar, dard ya discharge ho to doctor ko dikhayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Toxic Shock Syndrome (TSS)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut kam hota hai, lekin gambhir emergency hai.
                </li>
                <li>
                  Tampon ya menstrual cup bahut der tak lagakar rakhne se
                  bacteria ka toxin badh sakta hai.
                </li>
                <li>
                  Achanak tez bukhar, chakkar, ulti, dast, badan par laal daane
                  (sunburn jaisa rash) aur behoshi iske sign hain.
                </li>
                <li>
                  Turant tampon nikaal kar hospital jayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Endometriosis aur Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods mein tez dard aur heavy bleeding hoti hai.
                </li>
                <li>
                  Kai mahilaon ko dard ke saath halka bukhar ya thakaan mehsoos
                  hota hai. Yeh sab mein nahi hota.
                </li>
                <li>
                  Isme infection na ho to bhi dard ke karan body ka temperature
                  thoda badh sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Miscarriage ya pregnancy se juda karan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods jaisi bleeding actually miscarriage ho sakti hai.
                </li>
                <li>
                  Miscarriage mein infection ho jaye to bleeding ke saath bukhar
                  aa sakta hai.
                </li>
                <li>
                  Ectopic pregnancy mein bhi dard aur bleeding ho sakti hai.
                </li>
                <li>
                  Agar periods late the ya pregnancy ka shak hai, to pehle UPT
                  karayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Delivery ya abortion ke baad ki bleeding
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch mahilayein delivery ke baad ki bleeding ko periods samajh
                  leti hain.
                </li>
                <li>
                  Isme bukhar ke saath badbudar discharge infection ka sign hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Thyroid ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid zyada kaam kare (hyperthyroidism) to garmi lagna,
                  dhadkan tez hona aur periods irregular hona ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Genital TB ya anya lambe time ka infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kam common, lekin bharat mein infertility aur lambe bukhar ke
                  ek karan ke roop mein jaana jaata hai.
                </li>
                <li>
                  Halka bukhar, kamzori, periods kam ya band hona jaise lakshan
                  ho sakte hain.
                </li>
                <li>Doctor ki jaanch se hi pata chalta hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Doosre karan
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Appendicitis, kidney ka infection, ya pelvic abscess. Yeh pet
                  dard ke saath bukhar dete hain aur emergency ho sakte hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lakshan Jinpar Dhyan Dein
              </h2>

              <p className="mb-4 text-gray-700">
                Bukhar ke saath ye lakshan ho to karan dhoondhna zaroori hai:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Tez pet ke neeche dard jo dawa se kam na ho.
                </li>
                <li>Badbudar ya peela-hara discharge.</li>
                <li>
                  Bahut zyada bleeding: har 1-2 ghante mein pad badalna, ya bade
                  clots.
                </li>
                <li>Peshab mein jalan ya baar-baar peshab.</li>
                <li>Intercourse ke time dard.</li>
                <li>Kamar ya pelvic dard.</li>
                <li>Kaanpna, ulti ya dast.</li>
                <li>Periods ke beech mein bleeding.</li>
                <li>Bukhar 2-3 din se zyada chale.</li>
                <li>Thakaan, chakkar ya kamzori.</li>
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
                  Tez bukhar (102°F/39°C ya usse zyada) ya kaanpna.
                </li>
                <li>Bahut zyada bleeding ya bade clots.</li>
                <li>Tez pet dard jo badhta ja raha ho.</li>
                <li>Badbudar discharge.</li>
                <li>Chakkar, behoshi ya blood pressure gir jaana.</li>
                <li>
                  Tampon ya cup ke saath achanak tez bukhar, ulti, dast ya rash
                  (TSS ka shak).
                </li>
                <li>
                  Pregnancy ka shak ya positive test ke saath dard aur bleeding.
                </li>
                <li>
                  Bukhar ke saath saans phoolna, seene mein dard ya bahut zyada
                  kamzori.
                </li>
                <li>
                  Bukhar 3 din se zyada chale aur dawa se kam na ho.
                </li>
                <li>IUD lagwane ke baad bukhar ya dard.</li>
                <li>
                  Delivery, abortion ya procedure ke baad bukhar aur badbudar
                  bleeding.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Emergency mein der na karein.</strong> Turant apni doctor
                ya nazdeeki hospital jayein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jaanch Kaise Hoti Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Sahi karan pata lagne par hi sahi ilaj hota hai.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history:</strong> Periods ki dates, bleeding
                  ka pattern, dard, discharge, purani infection aur dawaiyan.
                </li>
                <li>Physical aur pelvic examination.</li>
                <li>
                  <strong>Temperature ka record:</strong> Din mein kai baar naap
                  kar likhein.
                </li>
                <li>
                  <strong>CBC (Complete Blood Count):</strong> Infection ya anemia
                  ka pata lagane ke liye.
                </li>
                <li>
                  <strong>Urine routine aur culture:</strong> UTI ke liye.
                </li>
                <li>
                  <strong>Urine Pregnancy Test (UPT) ya blood hCG.</strong>
                </li>
                <li>
                  <strong>High vaginal swab ya discharge culture:</strong> Yoni
                  ke infection ke liye.
                </li>
                <li>
                  <strong>TVS (Transvaginal Ultrasound):</strong> Bachedani,
                  tubes aur ovaries mein infection, collection ya cyst dekhne ke
                  liye.
                </li>
                <li>
                  <strong>Mausami bukhar ke tests:</strong> Dengue
                  (NS1/platelets), malaria aur typhoid ki jaanch, zaroorat par.
                </li>
                <li>Blood sugar aur thyroid tests.</li>
                <li>Pap smear ya STI screening: Zaroorat par.</li>
                <li>
                  Zaroorat par CT/MRI, hysteroscopy ya laparoscopy: Jaise
                  abscess, endometriosis ya TB ka shak ho.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Bukhar ka record (kab shuru hua, kitna
                tha), periods ki dates aur bleeding ka note saath layein.
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
                1. Halka hormonal ya PMS wala bukhar
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Aaram, paani aur halka khaana.</li>
                <li>
                  Halka-phulka dard ya bukhar ke liye doctor ki batayi dawa.
                </li>
                <li>
                  Kai baar kisi khaas ilaj ki zaroorat nahi hoti.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Viral bukhar
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Aaram, zyada paani, ORS aur halka khaana.</li>
                <li>
                  Doctor ki batayi paracetamol jaisi dawa, sahi dose mein.
                </li>
                <li>
                  Bukhar 2-3 din se zyada chale to blood test zaroori.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Dengue, malaria ya typhoid
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Jaanch ke baad specific ilaj (jaise malaria ki dawa ya typhoid
                  ke antibiotics).
                </li>
                <li>
                  Dengue mein platelets aur hydration ki nigrani.
                </li>
                <li>
                  Periods mein zyada bleeding ho to platelets zaroor check
                  karayein.
                </li>
                <li>
                  Bina jaanch ke antibiotics ya steroid na lein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. UTI
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Urine test ke baad antibiotics aur zyada paani.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. PID ya endometritis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctor ke bataye antibiotics ka poora course (kai baar
                  injection ke saath).
                </li>
                <li>Zaroorat par partner ka bhi ilaj.</li>
                <li>Gambhir cases mein hospital mein bharti.</li>
                <li>Abscess ho to procedure ya surgery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. IUD se juda infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Antibiotics aur zaroorat par IUD nikalna. Yeh doctor hi decide
                  karti hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Toxic Shock Syndrome
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency ilaj: tampon nikalna, hospital mein drip aur
                  antibiotics.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Endometriosis aur adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dard ki dawaiyan aur hormonal therapy.</li>
                <li>Zaroorat par 3D laparoscopic surgery.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Miscarriage ya pregnancy se juda infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Turant jaanch, antibiotics aur zaroorat par bachedani saaf
                  karne ki procedure.
                </li>
                <li>Ectopic pregnancy mein emergency treatment.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Thyroid
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid ki dawa aur regular blood tests.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. TB
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lambe course ka TB ilaj, specialist ki nigrani mein.
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
                <li>Temperature naapein aur record rakhein.</li>
                <li>
                  Paani, ORS, nimbu-pani aur nariyal paani achhe se piyein.
                </li>
                <li>Aaram karein aur poori neend lein.</li>
                <li>
                  Halka, pachne wala khaana khayein: khichdi, dal, dalia, fruits.
                </li>
                <li>
                  Iron aur protein wali diet lein: palak, chukandar, ande, dal,
                  paneer.
                </li>
                <li>
                  Pad har 4-6 ghante mein badlein. Bleeding zyada ho to jaldi.
                </li>
                <li>
                  Tampon ya cup ko samay par badlein aur saaf haath se lagayein.
                </li>
                <li>
                  Intimate hygiene ka dhyan rakhein, halka safai se dhoyein.
                </li>
                <li>Doctor ki di hui dawaiyan poori lein.</li>
                <li>Doctor ke bataye follow-up par jayein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bina doctor ki salah antibiotics na lein.</li>
                <li>Douching (andar se dhona) na karein.</li>
                <li>
                  Tampon ya cup ko 8 ghante se zyada na lagayein.
                </li>
                <li>
                  Bukhar ko periods ka asar samajhkar 3 din se zyada na taalein.
                </li>
                <li>
                  Bahut zyada dard ki goliyan khud se na lein.
                </li>
                <li>Bleeding ya badbu ko ignore na karein.</li>
                <li>
                  Infection ke dauran unsafe intercourse na karein.
                </li>
                <li>
                  Jhaad-phoonk ya nuskhon mein time waste na karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Mein Hygiene Ke Sahi Tareeke
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Sanitary pad:</strong> Har 4-6 ghante mein badlein.
                </li>
                <li>
                  <strong>Tampon:</strong> Har 4-8 ghante mein badlein, aur raat
                  mein bhi 8 ghante se zyada nahi. Kam bleeding ke din bhi dhyan
                  rakhein.
                </li>
                <li>
                  <strong>Menstrual cup:</strong> Doctor ya product ke nirdesh
                  ke anusaar khaali karein aur ubaalkar saaf karein.
                </li>
                <li>
                  Purane kapde ke tukde ka use na karein, agar unhe sahi tarah
                  dhokar dhoop mein sukhaya na gaya ho.
                </li>
                <li>Cotton ke saaf undergarments pehnein.</li>
                <li>
                  Periods ke dauran roz nahayein, aur intimate area ko saaf aur
                  sukha rakhein.
                </li>
                <li>
                  Product istemal se pehle aur baad mein haath dhoyein.
                </li>
                <li>
                  Agar tampon ya cup ke saath kuch bhi ajeeb lage, to use band
                  karein aur doctor se milein.
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
