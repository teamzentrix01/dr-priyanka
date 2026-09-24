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

export default function BachedaniKiJaanch() {
  const faqs = [
    {
      q: "Bachedani ki jaanch kab karwani chahiye?",
      a: "Heavy ya irregular periods, discharge, dard, pregnancy mein dikkat ya menopause ke baad bleeding mein.",
    },
    {
      q: "Bachedani ki jaanch kaise hoti hai?",
      a: "Examination, ultrasound, Pap smear aur zaroorat par HSG, hysteroscopy ya biopsy se.",
    },
    {
      q: "Kya jaanch mein dard hota hai?",
      a: "Zyada-tar tests mein nahi. Kuch mein halka marod ya discomfort ho sakta hai.",
    },
    {
      q: "Ultrasound ke liye bladder bhara rakhna zaroori hai?",
      a: "Pet ke scan mein aksar haan. TVS mein aam taur par khali. Clinic ki salah maanein.",
    },
    {
      q: "Pap smear kya hai?",
      a: "Cervix ke cells ki jaanch, jisse cervical cancer ya precancer ka pata lagta hai.",
    },
    {
      q: "Hysteroscopy kya hoti hai?",
      a: "Camera se bachedani ke andar dekhna. Polyp ya chipkav ka ilaj bhi kai baar saath ho jaata hai.",
    },
    {
      q: "Kya periods ke dauran jaanch ho sakti hai?",
      a: "Ultrasound ho sakta hai. Pap smear aur HSG periods ke dauran aam taur par nahi hote.",
    },
    {
      q: "Bina lakshan ke bhi jaanch karwani chahiye?",
      a: "Haan, saal mein ek baar routine checkup aur doctor ki salah par Pap smear.",
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
                Bachedani Ki Jaanch: Kab, Kaise Aur Kaunse Test Hote Hain
                (Doctor, Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Periods mein dard, zyada bleeding, white discharge ya pregnancy
                mein dikkat ho, to doctor aksar kehti hain: &quot;Bachedani ki
                jaanch karwa lijiye.&quot; Yeh sunkar kai mahilayein ghabra
                jaati hain. Sochti hain ki kaunsa test hoga, dard hoga ya nahi,
                aur kya koi badi bimari to nahi hai.
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki bachedani ki jaanch zyada-tar cases mein simple
                aur surakshit hoti hai. Kai tests mein dard bilkul nahi hota.
                Sahi jaanch se problem shuru mein hi pakad mein aa jaati hai,
                aur ilaj aasan ho jaata hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bachedani ki jaanch kab zaroori hai</li>
                <li>
                  Kaunse tests hote hain aur unse kya pata chalta hai
                </li>
                <li>Taiyari kaise karein</li>
                <li>Kab turant doctor ko dikhayein</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ki Jaanch Kab Karwani Chahiye?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods bahut zyada, bahut kam, irregular ya bahut dardnak hon.
                </li>
                <li>
                  Periods ke beech ya intercourse ke baad bleeding.
                </li>
                <li>Menopause ke baad kisi bhi tarah ki bleeding.</li>
                <li>White ya badbudar discharge ho.</li>
                <li>
                  Pelvic dard ya pet ke neeche bhaari-pan rehta ho.
                </li>
                <li>
                  Pregnancy nahi ho rahi, ya baar-baar miscarriage ho raha ho.
                </li>
                <li>
                  Baar-baar peshab aana ya kabz (bachedani ke dabav se).
                </li>
                <li>
                  Ultrasound mein fibroid, polyp, cyst ya bachedani ka size
                  badha dikha ho.
                </li>
                <li>Pregnancy plan karne se pehle.</li>
                <li>
                  21 saal ke baad ya doctor ki salah par routine Pap smear ke
                  liye.
                </li>
                <li>
                  Koi lakshan na ho, tab bhi saal mein ek baar routine checkup.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ki Jaanch Ke Alag-Alag Tests
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Doctor ka examination (History aur Pelvic Exam)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods, pregnancy, dard aur dawaiyon ki history li jaati hai.
                </li>
                <li>Pet aur pelvis ki jaanch hoti hai.</li>
                <li>
                  Zaroorat par speculum se cervix dekhi jaati hai.
                </li>
                <li>
                  Yeh jaanch kuch minute ki hoti hai. Halka discomfort ho sakta
                  hai, lekin aam taur par bahut dard nahi hota.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Pap Smear Test
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cervix (bachedani ke munh) se cells ka chhota sa sample liya
                  jaata hai.
                </li>
                <li>
                  Isse cervical cancer ya precancer changes ka pata lagta hai.
                </li>
                <li>Aam taur par 2-3 minute ka test hai.</li>
                <li>
                  Doctor ki salah ke anusaar har kuch saal mein karaya jaata
                  hai.
                </li>
                <li>
                  HPV test bhi kai baar saath kiya jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Sound waves se bachedani aur ovaries ki tasveer li jaati hai.
                </li>
                <li>
                  <strong>Abdominal ultrasound:</strong> Pet ke upar se, aksar
                  bhara bladder ke saath.
                </li>
                <li>
                  <strong>TVS (Transvaginal Sonography):</strong> Patli probe
                  yoni ke andar se, khali bladder ke saath. Zyada saaf tasveer
                  deta hai.
                </li>
                <li>Isse dikhta hai:</li>
                <li className="pl-5">
                  Bachedani ka size aur shape.
                </li>
                <li className="pl-5">Fibroid aur polyp.</li>
                <li className="pl-5">Endometrium ki motai.</li>
                <li className="pl-5">Ovarian cyst.</li>
                <li className="pl-5">Pregnancy ki jagah.</li>
                <li>
                  Ismein radiation nahi hoti, aur dard bhi aam taur par nahi
                  hota.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. 3D/4D Ultrasound
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ki shape aur andar ki cheezein zyada detail mein
                  dikhta hai.
                </li>
                <li>
                  Septum ya janamjaat banawat ki problem dekhne mein madad
                  karta hai.
                </li>
                <li>
                  Har mahila ko zaroori nahi, doctor ki salah se hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Saline Sonography (SIS)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani mein thoda saline daalkar ultrasound kiya jaata hai.
                </li>
                <li>
                  Andar ke polyp ya fibroid zyada saaf dikhte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. HSG (Hysterosalpingography)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani aur tubes mein dye daalkar X-ray li jaati hai.
                </li>
                <li>
                  Dekha jaata hai ki tubes khuli hain ya band, aur bachedani ki
                  andar ki shape kaisi hai.
                </li>
                <li>
                  Aam taur par infertility ki jaanch mein hota hai.
                </li>
                <li>
                  Periods ke baad ke kuch din mein hota hai. Halka marod ho
                  sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Diagnostic Hysteroscopy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Patla camera yoni ke raaste bachedani ke andar jaata hai.
                </li>
                <li>
                  Polyp, fibroid, chipkav, septum aur andar ki parat seedha
                  dikhti hai.
                </li>
                <li>
                  Kai baar jaanch ke saath ilaj bhi ho jaata hai.
                </li>
                <li>
                  Aam taur par same day ya jaldi ghar jaana ho jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Endometrial Biopsy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ki andar ki parat ka chhota sample liya jaata hai.
                </li>
                <li>
                  Heavy ya abnormal bleeding, khaaskar 40+ umar mein, ya
                  menopause ke baad bleeding mein hota hai.
                </li>
                <li>
                  Isse motai, infection ya precancer changes ka pata lagta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Diagnostic Laparoscopy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pet par chhote cuts se camera andar jaata hai.
                </li>
                <li>
                  Endometriosis, tubes ki problem, chipkav aur pelvic dard ka
                  karan dekhne ke liye.
                </li>
                <li>Anesthesia ke saath hoti hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. MRI aur CT
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Complex cases mein, jaise adenomyosis, badi gaanth ya cancer
                  ke shak mein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Blood aur urine tests
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>CBC:</strong> Bleeding se anemia ka pata lagane ke
                  liye.
                </li>
                <li>
                  <strong>Thyroid, prolactin aur hormone tests:</strong> Periods
                  ki problem ke liye.
                </li>
                <li>
                  <strong>UPT ya hCG:</strong> Pregnancy ke liye.
                </li>
                <li>
                  <strong>Infection ki jaanch:</strong> Discharge ya bukhar ho
                  to.
                </li>
                <li>
                  <strong>CA-125:</strong> Kuch cases mein, doctor ki salah se.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kaunsi Problem Mein Kaunsa Test?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Heavy periods:</strong> CBC, TVS ultrasound, kabhi
                  biopsy ya hysteroscopy.
                </li>
                <li>
                  <strong>Periods mein tez dard:</strong> TVS, zaroorat par MRI
                  ya laparoscopy.
                </li>
                <li>
                  <strong>White discharge:</strong> Swab test, Pap smear,
                  infection ki jaanch.
                </li>
                <li>
                  <strong>Pregnancy nahi ho rahi:</strong> TVS, hormone tests,
                  HSG, hysteroscopy.
                </li>
                <li>
                  <strong>Baar-baar miscarriage:</strong> 3D ultrasound,
                  hysteroscopy, thyroid, sugar aur clotting tests.
                </li>
                <li>
                  <strong>Menopause ke baad bleeding:</strong> TVS, hysteroscopy
                  aur endometrial biopsy.
                </li>
                <li>
                  <strong>Bachedani neeche khisakna:</strong> Pelvic examination
                  aur urine tests.
                </li>
                <li>
                  <strong>Fibroid ya polyp ka shak:</strong> TVS, saline
                  sonography ya hysteroscopy.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jaanch Ki Taiyari Kaise Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>TVS:</strong> Aam taur par bladder khali rakhein.
                </li>
                <li>
                  <strong>Pet ka ultrasound:</strong> Scan se pehle 3-4 glass
                  paani piyein, aur peshab na karein. Clinic ke instruction
                  follow karein.
                </li>
                <li>
                  <strong>Pap smear:</strong> Test se 1-2 din pehle intercourse,
                  douching ya yoni ki dawa/cream se bachein, aur periods ke
                  dauran test na karayein.
                </li>
                <li>
                  <strong>HSG:</strong> Periods ke baad ke kuch din mein hota
                  hai. Doctor pehle pregnancy rule out karti hain aur zaroorat
                  par dard ki dawa batati hain.
                </li>
                <li>
                  <strong>Hysteroscopy ya laparoscopy:</strong> Aam taur par
                  kuch ghante khaali pet rehna padta hai. Doctor ke nirdesh
                  maanein.
                </li>
                <li>
                  Apni chal rahi dawaiyan doctor ko bataayein.
                </li>
                <li>
                  Purani reports aur periods ki dates saath layein.
                </li>
                <li>
                  Ilaqe ke hisaab se aaramdayak kapde pehnein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Bachedani Ki Jaanch Mein Dard Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Ultrasound:</strong> Aam taur par dard nahi hota. TVS
                  mein halka discomfort ho sakta hai.
                </li>
                <li>
                  <strong>Pap smear:</strong> Halka dabav ya chubhan, kuch second
                  ke liye.
                </li>
                <li>
                  <strong>HSG:</strong> Periods jaisa marod ho sakta hai.
                </li>
                <li>
                  <strong>Endometrial biopsy:</strong> Kuch second ke liye tez
                  marod ho sakta hai.
                </li>
                <li>
                  <strong>Hysteroscopy aur laparoscopy:</strong> Aam taur par
                  anesthesia ya sedation ke saath hoti hain.
                </li>
                <li>
                  Agar aapko dard ya dar ki chinta hai, to doctor ko pehle
                  bataayein. Woh aapko tareeka samjhati hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Jaanch Ke Baad Kya Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Halki spotting ya marod kuch ghante ya ek-do din mein aam hai.
                </li>
                <li>Doctor ke bataye anusaar dawa lein.</li>
                <li>
                  Hysteroscopy ya biopsy ke baad kuch din intercourse aur tampon
                  se bachne ki salah di ja sakti hai.
                </li>
                <li>
                  Report doctor ke saath dekhein. Sirf report padhkar khud
                  diagnose na karein.
                </li>
                <li>Follow-up date par zaroor aayein.</li>
                <li>
                  <strong>Turant doctor ko dikhayein agar:</strong>
                </li>
                <li className="pl-5">
                  Bahut zyada bleeding ya bade clots.
                </li>
                <li className="pl-5">Tez bukhar ya kaanpna.</li>
                <li className="pl-5">
                  Tez pet dard jo dawa se kam na ho.
                </li>
                <li className="pl-5">Badbudar discharge.</li>
                <li className="pl-5">Chakkar ya behoshi.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ki Aam Problems Jo Jaanch Se Pakdi Jaati Hain
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Fibroid:</strong> Bachedani ki muscle mein
                  non-cancerous gaanth.
                </li>
                <li>
                  <strong>Polyp:</strong> Andar ki parat ka chhota ubhar.
                </li>
                <li>
                  <strong>Adenomyosis:</strong> Andar ki parat ka muscle mein
                  ghus jaana.
                </li>
                <li>
                  <strong>Endometrial thickening ya hyperplasia:</strong>
                </li>
                <li>
                  <strong>Bachedani ka infection (PID):</strong>
                </li>
                <li>
                  <strong>Septum ya janamjaat banawat ki problem:</strong>
                </li>
                <li>
                  <strong>Chipkav (adhesions):</strong>
                </li>
                <li>
                  <strong>Endometriosis:</strong>
                </li>
                <li>
                  <strong>PCOS ke sign:</strong> Ovaries mein chhote follicles.
                </li>
                <li>
                  <strong>Cervix ki problem:</strong> Infection ya cell changes.
                </li>
                <li>
                  <strong>Bachedani ka neeche khisakna (prolapse):</strong>
                </li>
                <li>
                  <strong>Cancer ya precancer:</strong> Kam cases mein, jaldi
                  jaanch se pehle-pehle pakad.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Yaad rakhein:</strong> Report mein kuch dikhne ka matlab
                hamesha badi bimari nahi hota. Kai findings ka ilaj dawa se ya
                chhoti procedure se ho jaata hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Report Mein Aane Wale Aam Shabd
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Anteverted uterus:</strong> Bachedani aage ki taraf
                  jhuki hui (normal).
                </li>
                <li>
                  <strong>Retroverted uterus:</strong> Peeche ki taraf jhuki hui
                  (aksar normal variation).
                </li>
                <li>
                  <strong>Bulky uterus:</strong> Bachedani apni umar ke hisaab
                  se badi.
                </li>
                <li>
                  <strong>Endometrial thickness:</strong> Andar ki parat ki
                  motai, jo cycle ke din ke hisaab se badalti hai.
                </li>
                <li>
                  <strong>Fibroid ya leiomyoma:</strong> Bachedani ki gaanth.
                </li>
                <li>
                  <strong>Free fluid:</strong> Pelvis mein thoda pani, kai baar
                  normal.
                </li>
                <li>
                  <strong>PCOS morphology:</strong> Ovaries mein kai chhote
                  follicles.
                </li>
                <li>
                  <strong>Nabothian cyst:</strong> Cervix par chhoti cyst, aksar
                  bekhatar.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Tip:</strong> Har shabd ka matlab aapki age, cycle ke
                din aur lakshan ke saath badalta hai. Report doctor ko hi
                dikhayein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Routine Checkup Kitni Baar Karwayein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Saal mein ek baar gynaecological checkup achhi aadat hai.
                </li>
                <li>
                  Pap smear doctor ki salah ke hisaab se, aam taur par har kuch
                  saal mein.
                </li>
                <li>
                  Pregnancy plan karne se pehle preconception checkup.
                </li>
                <li>
                  PCOS, fibroid ya endometriosis ho to doctor ke bataye anusaar
                  follow-up.
                </li>
                <li>
                  40 ke baad ya perimenopause mein periods ka pattern badle to
                  jaanch.
                </li>
                <li>Koi bhi naya lakshan ho to der na karein.</li>
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
                  Periods ki dates aur bleeding ka record rakhein.
                </li>
                <li>
                  Iron aur protein wali balanced diet lein.
                </li>
                <li>Healthy weight banaye rakhein.</li>
                <li>Regular exercise aur achhi neend.</li>
                <li>Intimate hygiene ka dhyan rakhein.</li>
                <li>
                  Doctor ki di hui dawaiyan aur follow-up poore karein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Douching (andar se dhona) na karein.</li>
                <li>
                  Bina jaanch koi hormonal goli ya herbal dawa na lein.
                </li>
                <li>
                  Heavy bleeding ya discharge ko mahino tak na taalein.
                </li>
                <li>
                  Dard ya sharm ke karan jaanch talein nahi.
                </li>
                <li>
                  Report dekhkar ya internet padhkar khud diagnose na karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Dr. Priyanka Pachauri Se Jaanch Kyun?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec Moradabad ka women&apos;s health aur fertility
                centre hai. Website ke mutabik yahan yeh suvidhayein hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dr. Priyanka Pachauri, jinhe laparoscopy, fertility aur
                  endometriosis care mein pehchan hasil hai.
                </li>
                <li>3D aur 4D ultrasound (Voluson machine).</li>
                <li>
                  Diagnostic Hysteroscopy: Bachedani ke andar ki jaanch.
                </li>
                <li>
                  Hysteroscopic Polypectomy: Polyp ka bina cut ke ilaj.
                </li>
                <li>
                  High-Definition 3D Laparoscopic Surgery.
                </li>
                <li>
                  Laparoscopic Myomectomy, Cystectomy aur Endometriosis Surgery.
                </li>
                <li>
                  Fertility aur IVF, Pregnancy aur Antenatal care.
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
                  Ek hi jagah ultrasound, jaanch aur zaroorat par ilaj.
                </li>
                <li>
                  Camera-based jaanch aur ilaj mein chhote cuts aur aam taur par
                  tez recovery.
                </li>
                <li>
                  Ek hi team ko aapki poori history ki jaankari.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Doctor se yeh poochein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mujhe kaunsi jaanch ki zaroorat hai, aur kyun?
                </li>
                <li>Jaanch mein dard hoga kya?</li>
                <li>Report kab tak milegi?</li>
                <li>Kya mujhe kisi ilaj ki zaroorat padegi?</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Appointment Par Kya Saath Layein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Purani ultrasound aur blood reports.</li>
                <li>Chal rahi dawaiyon ki list.</li>
                <li>
                  Periods ki dates aur bleeding ka record (kam se kam 3 mahine).
                </li>
                <li>Purani surgery ya delivery ke papers.</li>
                <li>
                  Pap smear ki purani report (agar hai).
                </li>
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