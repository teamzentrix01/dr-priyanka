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

export default function CheckupForLatePeriods() {
  const faqs = [
    {
      q: "Periods kitne din late hone par doctor ko dikhana chahiye?",
      a: "7 din se zyada late ho aur pregnancy test negative ho, ya 3 mahine se na aaye, to dikhayein.",
    },
    {
      q: "Periods late hone ka sabse common karan kya hai?",
      a: "Pregnancy, stress, PCOS, thyroid aur weight ka badlav.",
    },
    {
      q: "Kya late periods ka matlab pregnancy hai?",
      a: "Hamesha nahi. Pehle pregnancy test karayein. Negative aaye to 3-7 din baad dobara.",
    },
    {
      q: "Late periods mein kaunsi jaanch hoti hain?",
      a: "Pregnancy test, CBC, thyroid, prolactin, hormone tests aur TVS ultrasound.",
    },
    {
      q: "Kya periods laane ki goli lena surakshit hai?",
      a: "Bina jaanch nahi. Pregnancy ya cyst chhup sakti hai. Doctor ki salah zaroori hai.",
    },
    {
      q: "Kya stress se periods late ho sakte hain?",
      a: "Haan, zyada stress hormones ko badal deta hai aur periods late kar sakta hai.",
    },
    {
      q: "Kya PCOS mein periods late aate hain?",
      a: "Haan, PCOS mein ovulation irregular hone se periods late ya kai mahine baad aate hain.",
    },
    {
      q: "Kya late periods se pregnancy mein dikkat hoti hai?",
      a: "Kabhi-kabhi. Irregular ovulation se conceive karne mein der ho sakti hai. Ilaj se madad milti hai.",
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
                Checkup For Late Periods: Karan, Jaanch Aur Ilaj (Doctor,
                Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Periods ki date nikal gayi, aur aaj 5, 10 ya 15 din ho gaye,
                lekin periods nahi aaye. Pregnancy test negative hai ya karwaya
                hi nahi. Mann mein tension hai: &quot;Kya pregnancy hai? Kya
                koi bimari hai? Kya koi goli le loon?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Yeh sawaal bahut si mahilaon ke hote hain. Periods ka kabhi-kabhi
                late hona aam baat hai, aur zyada-tar cases mein iska karan
                stress, weight ya hormonal badlav hota hai. Lekin baar-baar late
                periods, ya kai mahine tak periods na aana, sharir ka ek signal
                hota hai jise ignore nahi karna chahiye.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods late kab maane jaate hain</li>
                <li>Sabse pehle kya karein</li>
                <li>Late periods ke common karan</li>
                <li>Checkup mein kya-kya jaanch hoti hain</li>
                <li>
                  Ilaj ke options aur ghar par dhyan rakhne wali baatein
                </li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Late Kab Maane Jaate Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Adult mahilaon mein cycle aam taur par 21 se 35 din ka hota
                  hai.
                </li>
                <li>
                  Har mahine 1-3 din ka farak bilkul normal hai.
                </li>
                <li>
                  Periods aam taur par tab late maane jaate hain jab expected
                  date se 7 din ya usse zyada nikal jayein.
                </li>
                <li>
                  Missed period ka matlab hai ki pura ek cycle bina periods ke
                  nikal gaya.
                </li>
                <li>
                  Amenorrhea ka matlab hai periods ka band ho jaana:
                </li>
                <li className="pl-5">
                  <strong>Secondary amenorrhea:</strong> Pehle regular periods
                  aate the, lekin ab 3 mahine ya zyada se nahi aaye (ya pehle
                  irregular the aur 6 mahine se nahi aaye).
                </li>
                <li className="pl-5">
                  <strong>Primary amenorrhea:</strong> Ladki ko 15-16 saal ki
                  umar tak periods shuru hi nahi hue.
                </li>
                <li>
                  Yaad rakhein: Kishori ladkiyon mein shuru ke 1-2 saal aur
                  delivery ya breastfeeding ke baad ke mahino mein cycle
                  irregular hona common hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Late Hon To Sabse Pehle Kya Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy test (UPT) karein, agar aap sexually active hain.
                </li>
                <li>
                  Subah ka pehla peshab test ke liye behtar hota hai.
                </li>
                <li>
                  Periods late hone ke kuch din baad test zyada bharosemand hota
                  hai.
                </li>
                <li>
                  Negative aaye lekin periods na aayein, to 3-7 din baad dobara
                  test karein.
                </li>
                <li>
                  Positive aaye, to jaldi doctor se milein aur ultrasound
                  karayein.
                </li>
                <li>Periods ki last date (LMP) note karein.</li>
                <li>Pichle 3-6 mahine ke cycle ka record dekhein.</li>
                <li>
                  Apna weight, stress, dawaiyan aur routine mein badlav yaad
                  karein.
                </li>
                <li>
                  Bina doctor ki salah periods laane ki goli na lein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Periods Late Hone Ke Common Karan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Late periods ka sabse pehla aur common karan.
                </li>
                <li>
                  Periods ke saath ulti, chakkar, chhati mein bhaari-pan aur
                  thakaan ho sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Stress aur mansik dabav
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Zyada tension, exam, kaam ka pressure ya ghar ki pareshaniyan
                  hormones ko affect karti hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Weight ka badalna
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut tezi se weight badhna ya ghatna periods ko late ya band
                  kar sakta hai.
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
                  Intense training se ovulation ruk sakta hai aur periods late
                  ho sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. PCOS/PCOD
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation irregular hone se periods kai hafte ya mahine late
                  aa sakte hain.
                </li>
                <li>
                  Chehre par baal, muhaase, baal jhadna aur weight badhna iske
                  sign ho sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Thyroid ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid kam ya zyada kaam kare, to periods late, heavy ya kam
                  ho sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Prolactin hormone ka zyada hona
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh hormone zyada hone par ovulation ruk sakta hai.
                </li>
                <li>
                  Kabhi-kabhi doodh jaisa discharge bhi ho sakta hai, bina
                  pregnancy ke.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Hormonal pills, emergency pill aur contraceptives
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Emergency pill (I-pill) ke baad periods aage-peeche ho sakte
                  hain.
                </li>
                <li>
                  Birth control pills band karne ke baad kuch mahine cycle
                  irregular reh sakta hai.
                </li>
                <li>
                  Injection ya hormonal IUD se bhi periods kam ya band ho sakte
                  hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Breastfeeding aur delivery ke baad
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doodh pilate waqt kai mahilaon ke periods kuch mahine ya zyada
                  time tak nahi aate.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Perimenopause (menopause ke aas-paas)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  40 ke baad hormones ghatne-badhne lagte hain.
                </li>
                <li>
                  Periods late, kam ya irregular ho jaate hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Premature Ovarian Insufficiency (POI)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  40 saal se pehle ovaries ka kaam kam ho jaana.
                </li>
                <li>
                  Periods band hona, garmi lagna aur pregnancy mein dikkat jaise
                  lakshan ho sakte hain.
                </li>
                <li>Jaanch aur samay par ilaj zaroori hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Anemia aur kamzori
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Khoon ki kami aur kuposhan se bhi periods late ho sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Purani bimariyan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diabetes, celiac disease ya lambi bimari ke baad periods badal
                  sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Kuch dawaiyan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch mental health ki dawaiyan, steroids aur cancer ki dawaiyan
                  periods ko affect kar sakti hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                15. Bachedani ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Purani surgery, D&C ya infection ke baad bachedani mein
                  chipkav (Asherman syndrome) ho sakta hai.
                </li>
                <li>
                  Isme periods bahut kam ya band ho sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                16. Ovarian cyst ya gaanth
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch cases mein ovary ki cyst hormones ko badal sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                17. Lifestyle ke karan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Raat ki shift, neend ki kami, yatra ya mausam badalna.</li>
                <li>Smoking aur zyada caffeine.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                18. Kam common karan
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dimaag ki pituitary gland ki problem ya bachedani ki banawat
                  mein janamjaat kami (kishori ladkiyon mein). Inki jaanch
                  specialist karti hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lakshan Jo Karan Ka Ishara Dete Hain
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pregnancy ke sign
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ulti ya jee machlana.</li>
                <li>Chhati mein bhaari-pan ya dard.</li>
                <li>Baar-baar peshab.</li>
                <li>Thakaan aur chakkar.</li>
                <li>Halki spotting.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS ke sign
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Chehre ya pet par zyada baal.</li>
                <li>Muhaase.</li>
                <li>Weight badhna.</li>
                <li>Baal jhadna.</li>
                <li>
                  Gardan ya kokh ke aas-paas kaali parat.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Thyroid ke sign
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Wazan mein achanak badlav.</li>
                <li>Zyada thand ya garmi lagna.</li>
                <li>Dhadkan tez ya dheemi.</li>
                <li>Baal jhadna, kabz ya dast.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Perimenopause ya POI ke sign
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Garmi lagna aur raat mein pasina.</li>
                <li>Neend ki dikkat.</li>
                <li>Yoni mein sukhapan.</li>
                <li>Mood swings.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hormonal (prolactin) ke sign
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Chhati se doodh jaisa discharge.</li>
                <li>
                  Sar dard ya nazar ki dikkat (kabhi-kabhi).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ko Dikhayein? (Red Flags)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  3 mahine ya zyada se periods na aaye hon (pregnancy nahi hai).
                </li>
                <li>
                  Pregnancy test positive ho aur saath mein dard ya bleeding ho.
                </li>
                <li>
                  Periods late ke baad bahut zyada bleeding ya bade clots.
                </li>
                <li>
                  Tez pet dard, chakkar ya behoshi (ectopic pregnancy ka shak).
                </li>
                <li>Tez bukhar ya badbudar discharge.</li>
                <li>
                  Chehre par zyada baal, tezi se wazan badhna ya ghatna.
                </li>
                <li>
                  Chhati se doodh jaisa discharge, jab aap breastfeed nahi kar
                  rahi.
                </li>
                <li>
                  15-16 saal ki umar tak periods shuru na hue hon.
                </li>
                <li>Achanak bahut kamzori ya saans phoolna.</li>
                <li>
                  40 se pehle menopause jaise lakshan (garmi lagna, periods band
                  hona).
                </li>
                <li>
                  Kai saal se pregnancy ki koshish mein late periods ke saath
                  conceive na ho raha ho.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Periods Checkup Mein Kya-Kya Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Sahi karan pata karne ke liye doctor kuch jaanch suggest karti
                hain. Har mahila ko sab jaanch ki zaroorat nahi hoti.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Detailed history
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Last periods ki date aur cycle ka pattern.</li>
                <li>Bleeding kitni hoti hai.</li>
                <li>
                  Pregnancy ki koshish, contraceptive ya emergency pill.
                </li>
                <li>Weight, stress, exercise aur diet.</li>
                <li>Purani bimariyan aur dawaiyan.</li>
                <li>
                  Family mein PCOS, thyroid ya early menopause ki history.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Physical examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight, height aur BMI.</li>
                <li>Blood pressure aur pulse.</li>
                <li>
                  Chehre aur sharir par baal, muhaase aur skin ke badlav.
                </li>
                <li>Thyroid ki gland ki jaanch.</li>
                <li>Zaroorat par pelvic examination.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Pregnancy test
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Urine pregnancy test (UPT) ya blood beta-hCG, jo zyada sahi
                  hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Blood tests
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>CBC:</strong> Anemia ka pata lagane ke liye.
                </li>
                <li>
                  <strong>Thyroid (TSH):</strong>
                </li>
                <li>
                  <strong>Prolactin:</strong>
                </li>
                <li>
                  <strong>FSH, LH aur estradiol:</strong> Ovaries ki kaam karne
                  ki kshamta dekhne ke liye.
                </li>
                <li>
                  <strong>AMH:</strong> Ovarian reserve dekhne ke liye (zaroorat
                  par).
                </li>
                <li>
                  <strong>Blood sugar aur insulin:</strong> PCOS ya diabetes ka
                  shak ho to.
                </li>
                <li>
                  <strong>Testosterone (androgen) tests:</strong> Zyada baal ya
                  muhaase ho to.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. TVS (Transvaginal Ultrasound)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani, endometrium ki motai aur ovaries ki jaanch.
                </li>
                <li>
                  PCOS mein ovaries mein chhote follicles dikhte hain.
                </li>
                <li>Pregnancy ya cyst ka pata lagta hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. 3D/4D ultrasound aur hysteroscopy (zaroorat par)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ki banawat ya andar ke chipkav ka shak ho to.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Doosri jaanch (zaroorat par)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pap smear, infection ki jaanch ya MRI (pituitary ke liye).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Periods Ka Ilaj: Cause Ke Hisaab Se
              </h2>

              <p className="mb-4 text-gray-700">
                Har case ka ilaj alag hota hai. Yeh sirf general jaankari hai.
                Ilaj doctor ki jaanch ke baad hi tay hoga.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ultrasound se pregnancy ki jagah aur dhadkan confirm hoti hai.
                </li>
                <li>Folic acid aur antenatal care shuru hoti hai.</li>
                <li>
                  Dard ya bleeding ho to ectopic pregnancy rule out karna zaroori
                  hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Stress, weight aur lifestyle
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Neend, khaana aur exercise ko regular karein.</li>
                <li>
                  Yoga, meditation ya counselling se stress kam karein.
                </li>
                <li>Weight ko healthy range mein laayein.</li>
                <li>
                  Aksar 2-3 cycle mein cycle wapas normal ho jaata hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. PCOS/PCOD
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Weight management, diet aur exercise sabse pehla kadam.</li>
                <li>
                  Periods regulate karne ki dawaiyan (doctor ki salah se).
                </li>
                <li>
                  Conceive karna ho to ovulation induction.
                </li>
                <li>Regular follow-up.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Thyroid
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Thyroid ki dawa doctor ki dose ke hisaab se.</li>
                <li>Regular blood tests.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Prolactin zyada ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Dawa se ilaj hota hai.</li>
                <li>Zaroorat par pituitary ki alag jaanch.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Hormonal pills ya contraceptive ka asar
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Zyada-tar cases mein cycle kuch mahine mein wapas aa jaata hai.
                </li>
                <li>Lambe time tak na aaye to jaanch.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Breastfeeding ke baad
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Aksar kisi ilaj ki zaroorat nahi. Doodh chhutne ke baad periods
                  wapas aate hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Perimenopause
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Symptoms ke hisaab se hormonal ya non-hormonal options.
                </li>
                <li>Zyada bleeding ho to jaanch.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. POI
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Hormone replacement therapy aur specialist ki nigrani.
                </li>
                <li>
                  Pregnancy chahiye ho to fertility specialist ki salah.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Anemia ya kuposhan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Iron, protein aur zaroori vitamins.</li>
                <li>Diet mein sudhaar.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Bachedani mein chipkav ya banawat ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Diagnostic Hysteroscopy se andar dekha jaata hai.
                </li>
                <li>
                  Hysteroscopic procedure se chipkav ya septum theek kiye ja
                  sakte hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Ovarian cyst
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Chhoti cyst mein observation.</li>
                <li>
                  Badi ya complex cyst mein laparoscopic surgery.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Periods Ke Dauran Ghar Par Kya Karein?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods ki diary ya app rakhein.</li>
                <li>
                  Balanced diet lein: hari sabziyan, dal, fruits, protein,
                  doodh-dahi.
                </li>
                <li>
                  Iron wali cheezein khayein: palak, chukandar, ande, nuts.
                </li>
                <li>Paani achhe se piyein.</li>
                <li>Roz 7-8 ghante ki neend lein.</li>
                <li>Halki exercise, walking aur yoga karein.</li>
                <li>
                  Stress kam karne ke liye pasandida kaam ko time dein.
                </li>
                <li>Doctor ke bataye anusaar follow-up karayein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Crash diet ya bahut zyada exercise na karein.</li>
                <li>
                  Bina doctor ki salah hormonal ya herbal goli na lein.
                </li>
                <li>Baar-baar emergency pill ka use na karein.</li>
                <li>
                  Periods ko &quot;apne aap aa jayenge&quot; sochkar kai mahine
                  na taalein.
                </li>
                <li>Pregnancy test ko ignore na karein.</li>
                <li>
                  Report ya internet dekhkar khud diagnose na karein.
                </li>
                <li>Smoking aur alcohol se bachein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Late Periods Aur Fertility (Pregnancy Ki Koshish)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Irregular ya late periods ka matlab aksar irregular ovulation
                  hota hai.
                </li>
                <li>
                  Isse conceive karne mein der ho sakti hai.
                </li>
                <li>
                  PCOS, thyroid aur prolactin ka ilaj karne se ovulation wapas aa
                  sakta hai.
                </li>
                <li>
                  6-12 mahine koshish ke baad bhi pregnancy na ho, to doctor se
                  milein (35 saal se zyada umar mein 6 mahine baad).
                </li>
                <li>
                  Ovulation ki follicular study se sahi timing ka pata chalta
                  hai.
                </li>
                <li>
                  Pregnancy plan karne se pehle thyroid, sugar aur weight ki
                  jaanch aur sudhaar behtar hai.
                </li>
                <li>
                  Husband ka semen analysis bhi zaroor karayein.
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
