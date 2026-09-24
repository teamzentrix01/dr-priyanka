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

export default function BachedaniKaSizeBadhna() {
  const faqs = [
    {
      q: "Bachedani ka normal size kitna hota hai?",
      a: "Lagbhag 7-8 cm lambi, 4-5 cm chaudi aur 2.5-3 cm moti. Thoda farak normal hai.",
    },
    {
      q: "Bachedani ka size kyun badhta hai?",
      a: "Pregnancy, fibroid, adenomyosis, polyp, hormonal problem ya infection se.",
    },
    {
      q: "Kya bulky uterus khatarnak hai?",
      a: "Aksar nahi, lekin sahi karan ke liye jaanch zaroori hai.",
    },
    {
      q: "Kya isme operation zaroori hota hai?",
      a: "Har case mein nahi. Kai cases dawa ya observation se sambhal jaate hain.",
    },
    {
      q: "Kya bachedani bachakar ilaj possible hai?",
      a: "Haan, fibroid ke liye myomectomy jaise options hain, doctor ki salah se.",
    },
    {
      q: "Kya bachedani ka size badhne se pregnancy mein dikkat hoti hai?",
      a: "Kabhi-kabhi. Fibroid ya adenomyosis conceive karne ya pregnancy tikne mein rukavat la sakte hain.",
    },
    {
      q: "Kaunsi jaanch hoti hain?",
      a: "TVS ultrasound, blood tests, pap smear aur zaroorat par hysteroscopy, biopsy ya MRI.",
    },
    {
      q: "Kya gharelu nuskhon se fibroid chhota hota hai?",
      a: "Iska pukka saboot nahi hai. Sahi jaanch aur ilaj zaroori hai.",
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
                Bachedani Ka Size Badhna: Karan, Lakshan Aur Ilaj (Doctor,
                Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Ultrasound report mein likha aaya: &quot;bulky uterus&quot; ya
                &quot;enlarged uterus.&quot; Ya aapko pet ke neeche bhaari-pan
                mehsoos ho raha hai, aur doctor ne kaha ki bachedani ka size badh
                gaya hai. Aisa sunkar kai mahilayein ghabra jaati hain aur
                sochti hain ki kya yeh cancer hai, ya kya bachedani nikalni
                padegi.
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki bachedani ka size badhna ek finding hai, bimari
                ka naam nahi. Iske peeche kabhi bilkul normal karan hote hain,
                jaise pregnancy. Kabhi fibroid ya adenomyosis jaisi problem
                hoti hai, jiska ilaj ho sakta hai. Bahut kam cases mein gambhir
                bimari bhi ho sakti hai, isliye sahi jaanch zaroori hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bachedani ka normal size kitna hota hai</li>
                <li>Size badhne ke karan aur lakshan</li>
                <li>Kaunsi jaanch hoti hain</li>
                <li>
                  Ilaj ke options, bina operation se lekar keyhole surgery tak
                </li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ka Normal Size Kitna Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek adult, jisko baccha nahi hua, uski bachedani aam taur par
                  7-8 cm lambi, 4-5 cm chaudi aur 2.5-3 cm moti hoti hai.
                </li>
                <li>
                  Yeh lagbhag nashpati (pear) ki shape aur size ki hoti hai.
                </li>
                <li>
                  Baby hone ke baad bachedani thodi badi reh sakti hai. Yeh
                  normal hai.
                </li>
                <li>
                  Menopause ke baad bachedani aam taur par chhoti ho jaati hai.
                </li>
                <li>
                  Size mein thoda farak har mahila mein hota hai. Isliye sirf ek
                  number dekhkar ghabrana nahi chahiye.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>&quot;Bulky uterus&quot; ka matlab:</strong> Report mein
                yeh shabd tab likha jaata hai jab bachedani apni umar ke hisaab
                se badi dikhti hai. Iska asli karan pata karna doctor ka kaam
                hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ka Size Badhne Ke Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy mein bachedani badhna bilkul normal hai.</li>
                <li>
                  Isliye periods late hon aur pet ka size badhe to pehle
                  pregnancy test karayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Delivery ke baad (Subinvolution)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Delivery ke baad bachedani dheere-dheere sikudti hai.
                </li>
                <li>
                  Kai baar infection ya bache hue hisse ki wajah se yeh dheere
                  ya adhoori sikudti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Fibroid (Uterine Fibroid)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh bachedani ki muscle mein bani non-cancerous gaanth hoti
                  hai.
                </li>
                <li>
                  Yeh sabse common karanon mein se ek hai.
                </li>
                <li>
                  Ek ya kai fibroid ho sakte hain, aur size chhote daane se bade
                  phal tak ho sakta hai.
                </li>
                <li>
                  Heavy periods, pelvic dabav aur baar-baar peshab iske common
                  lakshan hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ki andar ki parat (endometrium) uski muscle ki
                  deewar mein ghus jaati hai.
                </li>
                <li>
                  Bachedani puri tarah se moti aur badi ho sakti hai.
                </li>
                <li>
                  Periods mein tez dard aur heavy bleeding aam hai.
                </li>
                <li>
                  Yeh aksar 30-50 saal ki umar mein dekha jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Endometrial polyp ya thickening
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Andar ki parat ka moti hona ya polyp banna.
                </li>
                <li>
                  Hormonal imbalance, PCOS ya lambe time ke estrogen effect se
                  ho sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. PCOS aur hormonal imbalance
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation na hone se estrogen ka asar zyada rehta hai, jisse
                  endometrium moti ho sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Bachedani mein fluid, khoon ya peep
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cervix band ho to andar khoon (hematometra) ya peep (pyometra)
                  jama ho sakti hai.
                </li>
                <li>
                  Bachedani ka size badhta hai aur dard hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Infection (PID ya Endometritis)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani mein sujan aur infection se uska size badh sakta
                  hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Endometrial hyperplasia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Andar ki parat ka bahut moti hona. Kuch cases mein isse cancer
                  ka risk badhta hai, isliye jaanch zaroori hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Bachedani ka cancer (kam common)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut kam cases mein bachedani ka size badhne ki wajah cancer
                  ho sakta hai.
                </li>
                <li>
                  Menopause ke baad bleeding ke saath badi bachedani mein jaanch
                  zaroori hai.
                </li>
                <li>
                  Pehle pakadne par ilaj ke chances behtar hote hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Hormonal dawaiyan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch hormone therapy ya dawaiyan bachedani ya uski parat par
                  asar daal sakti hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Aas-paas ki gaanth ya cyst
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovary ki badi cyst ya gaanth ko kai baar &quot;bachedani ka
                  badhna&quot; samajh liya jaata hai.
                </li>
                <li>
                  Ultrasound se yeh farak saaf hota hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ka Size Badhne Ke Lakshan
              </h2>

              <p className="mb-4 text-gray-700">
                Kai mahilaon mein koi lakshan nahi hota, aur yeh ultrasound mein
                pakda jaata hai. Fir bhi ye signs dhyan se dekhein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy ya lambe periods.</li>
                <li>Periods ke beech mein bleeding ya spotting.</li>
                <li>Periods mein tez dard.</li>
                <li>Pelvis ya pet ke neeche bhaari-pan ya dabav.</li>
                <li>Baar-baar peshab aana (bladder par dabav).</li>
                <li>Kabz ya potty mein dikkat.</li>
                <li>Pet ka bahar nikalna ya kapde tight hona.</li>
                <li>Kamar dard ya pair mein dard.</li>
                <li>Intercourse ke time dard.</li>
                <li>
                  Thakaan, chakkar aur kamzori (zyada bleeding se anemia).
                </li>
                <li>Pregnancy na hona ya baar-baar miscarriage.</li>
                <li>Pet mein gaanth jaisa mehsoos hona.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ko Dikhayein? (Red Flags)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut zyada bleeding, jaise har 1-2 ghante mein pad badalna.
                </li>
                <li>Bade clots aana.</li>
                <li>Achanak tez pet dard.</li>
                <li>Bukhar ke saath pelvic dard.</li>
                <li>Menopause ke baad kisi bhi tarah ki bleeding.</li>
                <li>Peshab rukna ya bilkul na hona.</li>
                <li>Chakkar, behoshi, saans phoolna ya bahut kamzori.</li>
                <li>Pet ka tezi se badhna aur wazan ghatna.</li>
                <li>
                  Pregnancy ke shak mein dard ke saath bleeding.
                </li>
              </ul>
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
                  <strong>Detailed history aur pelvic examination:</strong>{" "}
                  Periods, dard, pregnancy history aur dawaiyan.
                </li>
                <li>
                  <strong>TVS (Transvaginal Ultrasound):</strong> Bachedani ka
                  size, fibroid aur endometrium dekhne ke liye sabse common test.
                </li>
                <li>
                  <strong>3D/4D ultrasound:</strong> Zyada detail mein bachedani
                  ki shape aur andar ki cheezein dikhata hai.
                </li>
                <li>
                  <strong>Urine Pregnancy Test:</strong> Pregnancy rule out
                  karne ke liye.
                </li>
                <li>
                  <strong>Blood tests:</strong> CBC (anemia ke liye), thyroid,
                  hormone aur blood sugar.
                </li>
                <li>
                  <strong>Pap smear:</strong> Cervix ki jaanch.
                </li>
                <li>
                  <strong>Diagnostic Hysteroscopy:</strong> Camera se bachedani
                  ke andar dekhna.
                </li>
                <li>
                  <strong>Endometrial biopsy:</strong> Zaroorat par, khaaskar
                  heavy bleeding ya 40+ umar mein.
                </li>
                <li>
                  <strong>MRI:</strong> Fibroid aur adenomyosis mein farak karne
                  ya complex cases mein.
                </li>
                <li>
                  <strong>Diagnostic Laparoscopy:</strong> Zaroorat par
                  endometriosis ya doosri problem ke liye.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ka Size Badhne Ka Ilaj: Cause Ke Hisaab Se
              </h2>

              <p className="mb-4 text-gray-700">
                Har case ka ilaj alag hota hai. Yeh sirf general jaankari hai.
                Aapka treatment doctor ki jaanch ke baad hi tay hoga.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Kuch nahi karna (observation)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chhote fibroid jo koi takleef nahi de rahe, unhe sirf dekha
                  jaata hai.
                </li>
                <li>
                  Doctor kuch mahine baad phir se ultrasound karati hain.
                </li>
                <li>
                  Menopause ke baad fibroid aam taur par chhote ho jaate hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Dawaiyan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy bleeding aur dard ke liye dawaiyan.
                </li>
                <li>
                  Hormonal dawaiyan jo periods ko control karti hain.
                </li>
                <li>
                  Anemia ho to iron aur zaroori vitamins.
                </li>
                <li>
                  Kuch dawaiyan fibroid ko temporary roop se chhota karti hain
                  (doctor ki salah par).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hormonal IUD
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch mahilaon mein heavy bleeding aur adenomyosis ke dard mein
                  madad karti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Hysteroscopic Polypectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ke andar ke polyp ya chhote fibroid bina cut ke,
                  yoni ke raaste se nikale jaate hain.
                </li>
                <li>
                  Aam taur par jaldi ghar jaana ho jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Laparoscopic Myomectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sirf fibroid nikalna, bachedani bachana.</li>
                <li>
                  Un mahilaon ke liye jo baccha chahti hain ya bachedani rakhna
                  chahti hain.
                </li>
                <li>Keyhole tareeke mein chhote cuts lagte hain.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Adenomyosis ka ilaj
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dawaiyan ya hormonal therapy pehle try ki jaati hain.
                </li>
                <li>Kuch cases mein procedure.</li>
                <li>
                  Agar bahut takleef ho aur family complete ho, to bachedani
                  nikalne ka option.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Endometrial hyperplasia ya thickening
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Hormonal ilaj aur follow-up biopsy.</li>
                <li>
                  Kuch cases mein bachedani nikalne ki salah di ja sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Infection ka ilaj
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antibiotics ka poora course.</li>
                <li>Zaroorat par partner ka bhi ilaj.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Bachedani mein fluid ya khoon
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cervix ka rasta khol kar fluid nikalna aur andar ki jaanch.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Laparoscopic Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Jab dawaiyan aur baaki ilaj kaam na karein, ya family complete
                  ho.
                </li>
                <li>
                  Keyhole tareeke mein chhote cuts, aam taur par tez recovery.
                </li>
                <li>
                  Bachedani nikalne ke baad periods band ho jaate hain aur
                  pregnancy possible nahi rehti.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Uterine artery embolization aur doosre procedures
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch cases mein fibroid ke liye alag procedures hote hain. Yeh
                  har jagah available nahi hote.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Cancer ki sambhavna
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Jaanch mein cancer ya precancer nikle to specialist ke saath
                  alag treatment plan banta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ka Size Aur Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chhote fibroid ya halki bulky bachedani mein bhi kai mahilayein
                  conceive kar leti hain.
                </li>
                <li>
                  Bachedani ke andar ke fibroid ya polyp embryo ko chipakne se
                  rok sakte hain.
                </li>
                <li>
                  Adenomyosis se conceive karne mein dikkat ya miscarriage ka
                  risk badh sakta hai.
                </li>
                <li>
                  Pregnancy plan karne se pehle jaanch aur zaroori ilaj karana
                  behtar hai.
                </li>
                <li>
                  Bachedani bachakar fibroid nikalna (myomectomy) fertility
                  bachane ka ek option hai.
                </li>
                <li>
                  Pregnancy ke dauran fibroid ke saath extra monitoring ki
                  zaroorat ho sakti hai.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Yaad rakhein: Har mahila ka case alag hota hai. Sahi salah ke
                liye pehle jaanch zaroori hai.
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
                <li>
                  Periods ki dates, bleeding aur dard ka record rakhein.
                </li>
                <li>
                  Iron aur protein wali diet lein: palak, chukandar, dal, ande,
                  nuts, fruits.
                </li>
                <li>
                  Fibre wali diet aur paani se kabz se bachein.
                </li>
                <li>
                  Healthy weight banaye rakhein (zyada weight se hormone
                  imbalance badh sakta hai).
                </li>
                <li>Halki exercise, walking aur yoga karein.</li>
                <li>
                  Follow-up ultrasound doctor ke bataye time par karayein.
                </li>
                <li>Doctor ki di hui dawaiyan poori lein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bina jaanch ke hormonal goli ya herbal dawa na lein.
                </li>
                <li>
                  Bahut heavy bleeding ko &quot;normal&quot; samajhkar mahino
                  tak na taalein.
                </li>
                <li>
                  Jhaad-phoonk ya bina jaanch ke nuskhon mein time waste na
                  karein.
                </li>
                <li>Pet par zor se malish ya dabav na dalein.</li>
                <li>Report dekhkar khud diagnose na karein.</li>
                <li>Menopause ke baad bleeding ko ignore na karein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Gharelu Nuskhe Fibroid Ya Badi Bachedani Ko Chhota Kar Sakte
                Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Balanced diet, weight control aur exercise general sehat ke
                  liye achhe hain.
                </li>
                <li>
                  Lekin fibroid ya adenomyosis ko nuskhon se chhota karne ka
                  pukka saboot nahi hai.
                </li>
                <li>
                  Nuskhon par depend karne se problem badh sakti hai aur anemia
                  ho sakta hai.
                </li>
                <li>
                  Koi bhi Ayurvedic ya herbal cheez lene se pehle gynaecologist
                  ko zaroor bataayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ki Sehat Ke Liye Tips
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Saal mein ek baar gynaecological check-up karayein.</li>
                <li>
                  Periods ke badlav (zyada bleeding, dard ya irregularity) ko
                  ignore na karein.
                </li>
                <li>Anemia ho to jaldi ilaj karayein.</li>
                <li>Weight ko control mein rakhein.</li>
                <li>Regular exercise aur achhi neend lein.</li>
                <li>Pap smear doctor ki salah par karayein.</li>
                <li>
                  40 ke baad ya menopause ke paas bleeding ho to turant jaanch
                  karayein.
                </li>
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
                  Dr. Priyanka Pachauri, jinhe laparoscopy, fertility treatment
                  aur endometriosis care mein pehchan hasil hai.
                </li>
                <li>3D aur 4D ultrasound (Voluson machine).</li>
                <li>
                  Diagnostic Hysteroscopy aur Hysteroscopic Polypectomy (bina
                  cuts).
                </li>
                <li>
                  Laparoscopic Myomectomy, jise website &quot;uterus-preserving
                  3D laparoscopic surgery&quot; batati hai.
                </li>
                <li>Laparoscopic Hysterectomy (keyhole).</li>
                <li>
                  Endometriosis Surgery aur Laparoscopic Cystectomy.
                </li>
                <li>High-Definition 3D Laparoscopic Surgery.</li>
                <li>
                  Fertility aur IVF, aur pregnancy aur delivery care ek hi jagah.
                </li>
                <li>
                  &quot;Her Health First&quot; approach: pehle aapki baat suni
                  jaati hai, phir plan banta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Appointment Par Kya Saath Layein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Purani aur nayi ultrasound reports</li>
                <li>Blood aur thyroid ki reports</li>
                <li>Chal rahi dawaiyon ki list</li>
                <li>
                  Periods ki dates aur bleeding ka record (kam se kam 3 mahine)
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
