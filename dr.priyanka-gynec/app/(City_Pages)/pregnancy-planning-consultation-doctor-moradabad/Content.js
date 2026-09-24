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

export default function PregnancyPlanningConsultation() {
  const faqs = [
    {
      q: "Pregnancy planning consultation kab karwani chahiye?",
      a: "Koshish shuru karne se 2-3 mahine pehle, ya jab bhi aap baby plan karein.",
    },
    {
      q: "Preconception counselling kya hoti hai?",
      a: "Pregnancy se pehle doctor ki salah, jaanch aur taiyari, taaki pregnancy surakshit ho.",
    },
    {
      q: "Folic acid kab shuru karein?",
      a: "Aam taur par pregnancy se kam se kam 1 mahine pehle. Matra doctor tay karti hain.",
    },
    {
      q: "Kaunsi jaanch zaroori hain?",
      a: "CBC, blood group, thyroid, sugar, infection screening, ultrasound aur partner ka semen test.",
    },
    {
      q: "Kya partner ko bhi jaanch karani chahiye?",
      a: "Haan, lagbhag aadhe cases mein male factor ka role hota hai.",
    },
    {
      q: "Kab tak natural try karein?",
      a: "35 se kam umar mein 1 saal, 35+ mein 6 mahine. Irregular periods mein jaldi.",
    },
    {
      q: "Kya dawaiyan chalti rahengi?",
      a: "Kuch dawaiyan surakshit hain, kuch badalni padti hain. Khud band na karein, doctor se poochein.",
    },
    {
      q: "Kya vaccine pregnancy se pehle lagwana chahiye?",
      a: "Kuch vaccines, jaise rubella aur chickenpox, pehle lagte hain. Doctor jaanch karti hain.",
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
                Pregnancy Planning Consultation: Baby Plan Karne Se Pehle Kya
                Karein (Doctor, Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Aap aur aapke partner ne baby plan karne ka faisla kiya hai.
                Khushi ke saath kai sawaal bhi hain: &quot;Kab se koshish shuru
                karein? Kaunsi jaanch karani chahiye? Folic acid kab lena hai?
                Meri dawaiyan chalti rahengi ya nahi?&quot;
              </p>

              <p className="mb-4 text-gray-700">
                Bahut se couples pregnancy ka intezaar karte hain, aur jab tak
                pregnancy hoti hai, tab tak kai zaroori taiyariyan reh jaati
                hain. Pregnancy planning consultation (jise preconception
                counselling bhi kehte hain) ek aisi visit hai jo pregnancy se
                pehle hoti hai. Iska maqsad hai ki aap aur baby dono ke liye
                pregnancy jitni ho sake surakshit aur healthy ho.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy planning consultation kya hoti hai aur kiske liye
                  zaroori hai
                </li>
                <li>Consultation mein kya-kya hota hai</li>
                <li>
                  Kaunsi jaanch aur vaccines zaroori ho sakti hain
                </li>
                <li>Lifestyle, diet aur supplements</li>
                <li>
                  Kab natural try karein aur kab fertility specialist se milein
                </li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Planning Consultation Kya Hoti Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yeh pregnancy se kuch mahine pehle ki doctor ki visit hai.
                </li>
                <li>
                  Doctor aapki sehat, purani history aur dawaiyon ko dekhti
                  hain.
                </li>
                <li>
                  Zaroori jaanch, vaccines aur supplements ki salah di jaati
                  hai.
                </li>
                <li>
                  Kisi bhi medical problem (jaise thyroid, diabetes, BP) ko
                  pehle control karne ki koshish hoti hai.
                </li>
                <li>
                  Iska maqsad miscarriage, preterm delivery aur baby ke
                  complications ka risk kam karna hota hai.
                </li>
                <li>
                  Yeh sirf mahila ke liye nahi, partner ke liye bhi zaroori hai.
                </li>
                <li>
                  <strong>Zaroori baat:</strong> Consultation ka matlab yeh nahi
                  ki aap mein koi problem hai. Yeh ek taiyari hai, bilkul waise
                  jaise kisi bade safar se pehle gaadi ki jaanch karate hain.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Planning Consultation Kab Karwani Chahiye?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Koshish shuru karne se 2-3 mahine pehle ideal mana jaata hai.
                </li>
                <li>
                  Aaj hi, agar aap pregnancy se pehle kuch badlav karna chahti
                  hain.
                </li>
                <li>
                  Purani pregnancy mein complication rahi ho, jaise miscarriage
                  ya preterm delivery.
                </li>
                <li>Umar 35 saal ya usse zyada ho.</li>
                <li>
                  Koi lambi bimari ho, jaise diabetes, BP, thyroid, asthma ya
                  epilepsy.
                </li>
                <li>PCOS, endometriosis ya fibroid ki history ho.</li>
                <li>Periods irregular hon.</li>
                <li>
                  Purana C-section ya bachedani ki surgery hui ho.
                </li>
                <li>
                  Family mein genetic ya janamjaat bimari ka itihas ho.
                </li>
                <li>
                  IVF ya fertility treatment se pregnancy plan kar rahi hon.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Mein Kya-Kya Hota Hai?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Detailed history
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods ka pattern aur last periods ki date.</li>
                <li>Purani pregnancies, delivery ya miscarriage.</li>
                <li>Purani surgery aur bimariyan.</li>
                <li>Chal rahi dawaiyan aur supplements.</li>
                <li>Family ki medical history.</li>
                <li>
                  Lifestyle: khaana, exercise, neend, smoking, sharaab.
                </li>
                <li>
                  Kaam ki jagah par kisi chemical ya radiation ka sampark.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Physical examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Height, weight aur BMI.</li>
                <li>Blood pressure aur pulse.</li>
                <li>Thyroid, dil aur pet ki jaanch.</li>
                <li>Zaroorat par pelvic examination aur Pap smear.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Zaroori jaanch (doctor ki salah se)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood tests aur ultrasound (neeche detail mein).</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Vaccines ki jaanch
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kaunse vaccines pehle se lage hain aur kaunse baaki hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Counselling
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation ko kaise samjhein.</li>
                <li>Diet, supplements aur lifestyle badlav.</li>
                <li>Kab conceive karna surakshit hai.</li>
                <li>Kab doctor se dobara milna hai.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pregnancy Planning Ke Liye Zaroori Jaanch
              </h2>

              <p className="mb-4 text-gray-700">
                Har mahila ko sab jaanch ki zaroorat nahi hoti. Doctor aapki
                umar aur history ke hisaab se suggest karti hain.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Female ke liye
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>CBC (Hemoglobin):</strong> Anemia ka pata lagane ke
                  liye.
                </li>
                <li>
                  <strong>Blood group aur Rh factor:</strong> Rh negative ho to
                  pehle se planning zaroori hai.
                </li>
                <li>
                  <strong>Thyroid (TSH):</strong> Thyroid pregnancy mein bahut
                  important hai.
                </li>
                <li>
                  <strong>Blood sugar (HbA1c ya fasting):</strong> Diabetes ka
                  pata lagane ke liye.
                </li>
                <li>
                  <strong>Vitamin D aur B12:</strong> Kami ho to supplements.
                </li>
                <li>
                  <strong>Infection screening:</strong> Hepatitis B, HIV,
                  syphilis, aur zaroorat par rubella immunity.
                </li>
                <li>
                  <strong>TVS (Transvaginal Ultrasound):</strong> Bachedani,
                  ovaries, fibroid aur cyst dekhne ke liye.
                </li>
                <li>
                  <strong>Pap smear:</strong> Cervix ki jaanch.
                </li>
                <li>
                  <strong>Urine routine:</strong> Infection ke liye.
                </li>
                <li>
                  <strong>Zaroorat par:</strong> Hormone tests (AMH, prolactin),
                  HSG ya hysteroscopy.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Male (partner) ke liye
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Semen analysis:</strong> Sperm count, speed aur shape.
                </li>
                <li>
                  <strong>Blood sugar aur infection ki jaanch (zaroorat par):</strong>
                </li>
                <li>
                  <strong>Blood group:</strong>
                </li>
                <li>
                  <strong>Lifestyle aur dawaiyon ki jaankari:</strong>
                </li>
                <li>
                  <strong>Genetic screening (zaroorat par):</strong> Family mein
                  thalassemia, sickle cell ya kisi janamjaat bimari ka itihas ho
                  to carrier screening ya genetic counselling. Bharat mein
                  thalassemia carrier test kai couples ke liye suggest kiya
                  jaata hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Folic Acid: Kab Aur Kitna Lein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Folic acid ek B-vitamin hai jo baby ki neural tube (dimaag aur
                  reedh ki haddi) ki sahi banawat mein madad karta hai.
                </li>
                <li>
                  Aam taur par mahilaon ko pregnancy se kam se kam 1 mahine
                  pehle se hi folic acid shuru karne ki salah di jaati hai.
                </li>
                <li>
                  Aam taur par 400 mcg (0.4 mg) roz ki matra suggest ki jaati
                  hai.
                </li>
                <li>
                  Kuch cases mein zyada matra ki zaroorat hoti hai, jaise pehle
                  kisi baby mein neural tube defect hua ho, diabetes ho, ya
                  epilepsy ki dawa chal rahi ho. Yeh doctor hi tay karti hain.
                </li>
                <li>
                  Folic acid pregnancy ke pehle 3 mahine tak bahut zaroori hota
                  hai.
                </li>
                <li>
                  Food se bhi folate milta hai: hari sabziyan, dal, chana,
                  santra aur fortified anaaj.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Vaccines Aur Pregnancy Planning
              </h2>

              <p className="mb-4 text-gray-700">
                Kuch vaccines pregnancy se pehle lagwana behtar hota hai.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Rubella (MMR) aur chickenpox (varicella):</strong> Yeh
                  live vaccines hote hain, isliye pregnancy mein nahi lagaye
                  jaate. Doctor aam taur par vaccine ke baad kuch samay tak
                  pregnancy rokne ki salah deti hain. Exact samay doctor batati
                  hain.
                </li>
                <li>
                  <strong>Hepatitis B:</strong> Agar immunity nahi hai, to doctor
                  vaccine suggest kar sakti hain.
                </li>
                <li>
                  <strong>Flu (influenza) aur Tdap/Td:</strong> Pregnancy mein
                  bhi doctor ki salah se diye jaate hain.
                </li>
                <li>
                  <strong>COVID-19:</strong> Doctor ki salah ke anusaar.
                </li>
                <li>
                  Aapke purane vaccine ka record saath layein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Pehle Se Chal Rahi Bimariyon Ka Dhyan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Thyroid
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Thyroid ka kam ya zyada hona pregnancy mein miscarriage aur
                  baby ki growth ko affect kar sakta hai.
                </li>
                <li>
                  Pregnancy se pehle dose set karna behtar hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Diabetes
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Blood sugar control mein na ho to baby mein janamjaat problems
                  ka risk badhta hai.
                </li>
                <li>
                  Pregnancy se pehle sugar ko control mein laana zaroori hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                High Blood Pressure
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch BP ki dawaiyan pregnancy mein surakshit nahi hoti. Doctor
                  se poochein aur dawa khud band na karein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                PCOS
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation irregular hone se conceive karne mein time lag sakta
                  hai.
                </li>
                <li>Weight, diet aur ilaj se madad milti hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Anemia
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Iron aur diet se pehle se sudhaar karein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Epilepsy, asthma, dil ya kidney ki bimari
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Specialist ke saath milkar dawaiyon ko adjust karna padta hai.
                </li>
                <li>
                  Kabhi bhi dawa khud band na karein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Fibroid, polyp ya bachedani ki banawat ki problem
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy se pehle ilaj se madad mil sakti hai. Hysteroscopy
                  aur laparoscopy jaise options kai baar kaam aate hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Endometriosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Fertility par asar dal sakta hai. Doctor ke saath planning
                  karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dawaiyon Aur Supplements Ki Jaanch
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctor ko har dawa aur supplement ke baare mein bataayein,
                  chahe Ayurvedic ya herbal ho.
                </li>
                <li>
                  Kuch dawaiyan pregnancy mein surakshit nahi hoti.
                </li>
                <li>
                  Bina doctor ki salah dawa band ya badalna khatarnak ho sakta
                  hai.
                </li>
                <li>
                  Vitamin A ki bahut zyada matra ya kuch herbal cheezein
                  pregnancy ke liye nuksandayak ho sakti hain.
                </li>
                <li>Doctor pregnancy-safe vikalp batati hain.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lifestyle Aur Diet: Kya Badlav Karein?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Healthy weight ki taraf jayein. Bahut zyada ya bahut kam weight
                  dono fertility ko affect karte hain.
                </li>
                <li>
                  Balanced diet: hari sabziyan, fruits, dal, anaaj, doodh-dahi,
                  ande, nuts.
                </li>
                <li>
                  Iron wali cheezein: palak, chukandar, chana, gud, dal.
                </li>
                <li>
                  Calcium: doodh, dahi, paneer, ragi.
                </li>
                <li>
                  Protein: dal, ande, paneer, soya, chicken ya machhli.
                </li>
                <li>Paani achhe se piyein.</li>
                <li>Roz halki exercise: walking, yoga, stretching.</li>
                <li>7-8 ghante ki neend.</li>
                <li>
                  Stress kam karein: meditation, pasandida kaam, family ke saath
                  time.
                </li>
                <li>Dental check-up karayein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Smoking aur tambaku bilkul band karein. Yeh mahila aur partner
                  dono ke liye zaroori hai.
                </li>
                <li>Sharaab band karein.</li>
                <li>
                  Bahut zyada caffeine (chai, coffee, energy drinks) kam karein.
                </li>
                <li>Crash diet na karein.</li>
                <li>
                  Nashile padarth se poori tarah door rahein.
                </li>
                <li>
                  Kaccha ya aadha pakka maans, kaccha doodh aur anhygienic
                  khaane se bachein.
                </li>
                <li>
                  Bina doctor ki salah herbal ya diet supplements na lein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Partner Ki Bhoomika: Sirf Mahila Ki Zimmedari Nahi
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy planning dono partners ki team ka kaam hai.
                </li>
                <li>
                  Lagbhag aadhe cases mein infertility mein male factor ka role
                  hota hai.
                </li>
                <li>
                  Partner ko bhi jaanch karani chahiye, khaaskar semen analysis.
                </li>
                <li>
                  Smoking, tambaku aur sharaab sperm ki quality ko kharab karte
                  hain.
                </li>
                <li>
                  Zyada garmi (laptop godi mein, bahut tight kapde, garam jagah
                  par lamba kaam) se sperm par asar padta hai.
                </li>
                <li>
                  Healthy diet, exercise aur neend partner ke liye bhi zaroori
                  hain.
                </li>
                <li>
                  Stress aur mansik sehat ka dhyan dono rakhein.
                </li>
                <li>
                  Emotionally ek doosre ka saath dein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ovulation Aur Conceive Karne Ka Sahi Time
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation aam taur par agle periods se lagbhag 14 din pehle
                  hota hai.
                </li>
                <li>
                  28 din ke cycle mein yeh lagbhag 14th din ke aas-paas hota
                  hai, lekin har mahila mein alag hota hai.
                </li>
                <li>
                  Fertile window ovulation ke 5 din pehle se ovulation ke din
                  tak hoti hai.
                </li>
                <li>
                  Is dauran har 2-3 din mein intercourse rakhna kaafi hota hai.
                </li>
                <li>
                  Ovulation kits ya apps ka use kar sakti hain, lekin unhe
                  doctor ki jaanch ka vikalp na samjhein.
                </li>
                <li>
                  Irregular periods mein sirf calendar par bharosa na karein.
                  Follicular study (ultrasound se ovulation dekhna) zyada
                  bharosemand hai.
                </li>
                <li>
                  Bina tension ke natural rahein. Zyada pressure se stress badhta
                  hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Tak Natural Try Karein? Kab Fertility Specialist Se Milein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>35 saal se kam umar mein:</strong> 1 saal regular
                  koshish ke baad pregnancy na ho to jaanch karayein.
                </li>
                <li>
                  <strong>35 saal ya usse zyada umar mein:</strong> 6 mahine
                  baad hi doctor ko dikhayein.
                </li>
                <li>
                  Periods bahut irregular ya kai mahine na aayein to pehle hi
                  dikhayein.
                </li>
                <li>
                  Endometriosis, PCOS, tubes ki problem ya purani pelvic
                  infection ho to jaldi consult karein.
                </li>
                <li>
                  2 ya usse zyada miscarriage ho chuke hon to jaanch zaroori
                  hai.
                </li>
                <li>
                  Partner ko koi sperm ki problem ka shak ho to bhi jaldi
                  dikhayein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kin Situations Mein Pregnancy Planning Aur Zaroori Hai?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                35 saal ke baad
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovarian reserve aur egg ki quality umar ke saath kam hoti hai.
                </li>
                <li>
                  Miscarriage aur chromosomal problem ka risk badhta hai.
                </li>
                <li>Consultation aur monitoring aur zaroori hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pehle miscarriage ya preterm delivery hui ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Karan dhoondhne ki jaanch pehle karayein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pehle C-section hua ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Do pregnancy ke beech ke gap aur scar ki sthiti par doctor ki
                  salah lein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Twins ya IVF se pregnancy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Special monitoring aur extra scans ki zaroorat hoti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bachedani ki surgery ya fibroid ho
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Surgery ke baad pregnancy kab karein, doctor batati hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Lambe time ki dawaiyan chal rahi hon
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dawaiyon mein badlav pehle se planning ki maang karta hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mansik Sehat Aur Emotional Taiyari
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pregnancy ki taiyari mansik roop se bhi hoti hai.
                </li>
                <li>
                  Partner ke saath khulkar baat karein: parenting, paise, kaam
                  aur family support.
                </li>
                <li>
                  Agar aapko anxiety ya depression ki history hai, to doctor ko
                  zaroor batayein.
                </li>
                <li>
                  Kuch dawaiyan mansik sehat ke liye chalti hain. Unhe khud band
                  na karein, doctor se planning karein.
                </li>
                <li>
                  Pregnancy mein der ho to tension aur dabav aam hai. Counselling
                  lene mein sharm na karein.
                </li>
                <li>
                  Rishtedaron ke sawaal-jawab se pareshan ho to apni sima tay
                  karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kya Nuskhe Ya Herbal Supplements Pregnancy Planning Mein Madad
                Karte Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Balanced diet aur healthy lifestyle sabse zyada madadgar hain.
                </li>
                <li>
                  Kai herbal ya &quot;fertility booster&quot; cheezein prove
                  nahi hui hain.
                </li>
                <li>
                  Kuch herbal cheezein pregnancy ke liye nuksandayak ho sakti
                  hain.
                </li>
                <li>
                  Gharelu nuskhe infection, tube blockage ya sperm ki problem ko
                  theek nahi karte.
                </li>
                <li>
                  Koi bhi Ayurvedic, herbal ya supplement lene se pehle
                  gynaecologist ko zaroor bataayein.
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