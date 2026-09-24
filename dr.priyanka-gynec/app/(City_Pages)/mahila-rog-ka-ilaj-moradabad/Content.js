
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

export default function MahilaRogKaIlajMoradabad() {
  const faqs = [
    {
      q: "Mahila rog kya hote hain?",
      a: "Mahilaon ke prajnan tantra ki bimariyan, jaise periods, PCOS, infection, fibroid aur cyst.",
    },
    {
      q: "Sabse common mahila rog kaunse hain?",
      a: "Irregular periods, PCOS, white discharge, UTI, fibroid, cyst aur infertility.",
    },
    {
      q: "Mahila rog ke pehle lakshan kya hote hain?",
      a: "Periods mein badlav, dard, badbudar discharge, bleeding ya pregnancy mein der.",
    },
    {
      q: "Kab doctor ko dikhana chahiye?",
      a: "Heavy bleeding, tez dard, bukhar, menopause ke baad bleeding ya lambe time ki takleef mein.",
    },
    {
      q: "Kya white discharge hamesha bimari hai?",
      a: "Nahi. Badbu, khujli ya rang badle to jaanch karayein.",
    },
    {
      q: "Mahila rog ki jaanch kaise hoti hai?",
      a: "Examination, ultrasound, blood tests, Pap smear aur zaroorat par hysteroscopy ya laparoscopy.",
    },
    {
      q: "Kya sab problems mein operation zaroori hai?",
      a: "Nahi. Kai problems dawa aur lifestyle se theek hoti hain.",
    },
    {
      q: "Kya nuskhon se mahila rog theek ho sakte hain?",
      a: "Infection, cyst ya tube blockage ka ilaj nuskhon se nahi hota. Doctor se jaanch zaroori hai.",
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
                Mahila Rog Ka Ilaj Moradabad: Common Bimariyan, Lakshan Aur Sahi
                Treatment
              </h1>

              <p className="mb-4 text-gray-700">
                Bahut si mahilayein apni takleef ko chhupati hain. Periods ka
                dard &quot;sabko hota hai&quot;, white discharge &quot;normal
                hai&quot;, aur kamar dard &quot;kaam ki thakaan hai&quot;.
                Ghar-parivaar ki zimmedariyon ke beech apni sehat aakhri number
                par chali jaati hai. Jab tak takleef badhti hai, tab tak problem
                kaafi badi ho chuki hoti hai.
              </p>

              <p className="mb-4 text-gray-700">
                Sach yeh hai ki zyada-tar mahila rog samay par jaanch aur sahi
                ilaj se theek ho sakte hain. Sharm ya jhijhak ki jagah sahi
                doctor se baat karna sabse pehla kadam hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Mahila rog kya hote hain</li>
                <li>Sabse common bimariyan aur unke lakshan</li>
                <li>Kab turant doctor ko dikhana zaroori hai</li>
                <li>Jaanch aur ilaj ke options</li>
                <li>Moradabad mein sahi doctor se kaise milein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahila Rog Kya Hote Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mahila rog un bimariyon ko kehte hain jo mahilaon ke prajnan
                  (reproductive) tantra ko affect karti hain.
                </li>
                <li>
                  Isme bachedani, ovaries, tubes, cervix aur yoni ki problems
                  aati hain.
                </li>
                <li>
                  Iska doosra naam gynaecological problems hai.
                </li>
                <li>
                  Inka ilaj gynaecologist (mahila rog visheshagya) karti hain.
                </li>
                <li>
                  Yeh problems kisi bhi umar mein ho sakti hain: kishori,
                  jawaani, pregnancy ya menopause.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sabse Common Mahila Rog Aur Unke Lakshan
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Periods ki problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Irregular periods:</strong> Periods kabhi jaldi, kabhi
                  der se, ya kai mahine na aana.
                </li>
                <li>
                  <strong>Heavy bleeding:</strong> Bahut zyada khoon, bade clots,
                  ya 7 din se zyada bleeding.
                </li>
                <li>
                  <strong>Dardnak periods:</strong> Itna dard ki roz ke kaam ruk
                  jaayein.
                </li>
                <li>
                  <strong>Periods ke beech bleeding:</strong> Spotting ya
                  intercourse ke baad khoon.
                </li>
                <li>
                  <strong>Karan:</strong> hormonal imbalance, PCOS, thyroid,
                  fibroid, polyp ya endometriosis.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. PCOS/PCOD
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods irregular ya band.</li>
                <li>Chehre par zyada baal, muhaase.</li>
                <li>Weight badhna, baal jhadna.</li>
                <li>Pregnancy mein der.</li>
                <li>
                  Ovaries mein chhote follicles (pani ki thailiyan).
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. White discharge (Leucorrhoea) aur yoni ka infection
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Safed, peela ya hara discharge.</li>
                <li>Badbu, khujli ya jalan.</li>
                <li>
                  Kai baar halka discharge normal hota hai. Badbu, rang badalna
                  ya khujli ho to infection ka shak hota hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Pelvic Inflammatory Disease (PID)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani, tubes ya ovaries ka infection.
                </li>
                <li>
                  Pet ke neeche dard, bukhar, badbudar discharge.
                </li>
                <li>
                  Ilaj mein der hone par tubes kharab ho sakti hain aur
                  pregnancy mein dikkat aa sakti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Peshab ka infection (UTI)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Peshab mein jalan, baar-baar peshab, pet ke neeche dard.
                </li>
                <li>Mahilaon mein bahut common hai.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Fibroid (bachedani ki gaanth)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy periods, pelvic bhaari-pan.</li>
                <li>Baar-baar peshab, kabz.</li>
                <li>Kai baar koi lakshan nahi hota.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Ovarian cyst
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pet ke ek taraf dard.</li>
                <li>Bloating, periods mein badlav.</li>
                <li>
                  Kai simple cyst khud theek ho jaati hain. Badi ya complex cyst
                  ki jaanch zaroori hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Endometriosis aur Adenomyosis
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods mein tez dard.</li>
                <li>Intercourse ke time dard.</li>
                <li>Heavy bleeding.</li>
                <li>Pregnancy mein dikkat.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Infertility (pregnancy na hona)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ek saal ki koshish ke baad bhi conceive na hona (35+ umar mein
                  6 mahine).
                </li>
                <li>
                  Karan: ovulation problem, tubes ka blockage, endometriosis,
                  sperm ki problem.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Pregnancy se judi problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding, baar-baar miscarriage.</li>
                <li>High BP ya diabetes pregnancy mein.</li>
                <li>Delivery ke baad ki takleef.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                11. Bachedani ka neeche khisakna (Prolapse)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Yoni mein bhaari-pan ya kuch bahar aata mehsoos hona.
                </li>
                <li>
                  Chheenkne ya khaansne par peshab nikalna.
                </li>
                <li>
                  Delivery ke baad ya menopause ke baad zyada common.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                12. Cervix ki problems
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Cervicitis, polyp aur cell changes.</li>
                <li>
                  Cervical cancer ka pehle se pata Pap smear aur HPV test se lag
                  sakta hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                13. Menopause ke lakshan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Garmi lagna, raat mein pasina.</li>
                <li>Neend ki dikkat, mood swings.</li>
                <li>Yoni mein sukhapan.</li>
                <li>Hadiyon ki kamzori.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                14. Anemia aur kamzori
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Heavy periods ya kuposhan se khoon ki kami.
                </li>
                <li>Thakaan, chakkar, saans phoolna.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kin Lakshan Ko Kabhi Ignore Na Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods mein bahut zyada bleeding ya bade clots.
                </li>
                <li>
                  Periods ke beech ya intercourse ke baad bleeding.
                </li>
                <li>
                  Menopause ke baad kisi bhi tarah ki bleeding.
                </li>
                <li>Badbudar ya khoon wala discharge.</li>
                <li>
                  Pelvic dard jo mahino se chal raha ho.
                </li>
                <li>
                  Intercourse ke time lagataar dard.
                </li>
                <li>Pet mein gaanth ya achanak pet badhna.</li>
                <li>
                  Yoni mein bhaari-pan ya kuch bahar aana.
                </li>
                <li>Peshab ya potty mein khoon.</li>
                <li>
                  Bina wajah weight ghatna ya bahut thakaan.
                </li>
                <li>
                  Pregnancy ki koshish mein bahut der hona.
                </li>
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
                <li>Achanak tez pet dard.</li>
                <li>Tez bukhar ke saath pelvic dard.</li>
                <li>
                  Pregnancy test positive ho aur saath mein dard ya bleeding ho.
                </li>
                <li>Chakkar, behoshi ya saans phoolna.</li>
                <li>Badbudar discharge ke saath bukhar.</li>
                <li>
                  Delivery ya abortion ke baad zyada bleeding ya badbu.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Emergency mein der na karein.</strong> Turant apni doctor
                ya nazdeeki hospital jayein.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahila Rog Ki Jaanch Kaise Hoti Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history:</strong> Periods, pregnancy, dard,
                  discharge aur dawaiyan.
                </li>
                <li>Physical aur pelvic examination.</li>
                <li>
                  <strong>Blood tests:</strong> CBC (anemia), thyroid, sugar aur
                  hormone tests.
                </li>
                <li>Urine test aur pregnancy test.</li>
                <li>
                  <strong>Ultrasound (TVS):</strong> Bachedani, ovaries aur cyst
                  dekhne ke liye.
                </li>
                <li>
                  <strong>3D/4D ultrasound:</strong> Zyada detail ki jaanch ke
                  liye.
                </li>
                <li>
                  <strong>Pap smear aur HPV test:</strong> Cervix ki screening.
                </li>
                <li>
                  <strong>Discharge ka swab test:</strong> Infection ke liye.
                </li>
                <li>
                  <strong>Diagnostic Hysteroscopy:</strong> Camera se bachedani
                  ke andar dekhna.
                </li>
                <li>
                  <strong>Diagnostic Laparoscopy:</strong> Pet ke andar ki
                  problem dekhne ke liye.
                </li>
                <li>
                  <strong>HSG:</strong> Tubes khuli hain ya band.
                </li>
                <li>
                  <strong>Endometrial biopsy:</strong> Zaroorat par.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahila Rog Ka Ilaj: Kaise Hota Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Har case ka ilaj alag hota hai. Yeh sirf general jaankari hai.
                Ilaj doctor ki jaanch ke baad hi tay hoga.
              </p>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Lifestyle aur diet mein badlav
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  PCOS, irregular periods aur hormonal problems mein weight
                  management, exercise aur balanced diet.
                </li>
                <li>Stress kam karna aur neend poori lena.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Dawaiyan
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Infection ke liye antibiotics ya anti-fungal dawaiyan (poora
                  course).
                </li>
                <li>
                  Periods regulate karne aur heavy bleeding kam karne ki
                  hormonal dawaiyan.
                </li>
                <li>Thyroid ki dawa.</li>
                <li>Anemia ke liye iron aur vitamins.</li>
                <li>Dard ki dawaiyan.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Hormonal IUD ya doosre options
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Kuch mahilaon mein heavy bleeding aur dard ke liye.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Camera-based (minimally invasive) procedures
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Hysteroscopic Polypectomy:</strong> Bachedani ke polyp
                  bina cut ke nikalna.
                </li>
                <li>
                  <strong>Laparoscopic Cystectomy:</strong> Ovarian cyst
                  nikalna, fertility bachane par focus.
                </li>
                <li>
                  <strong>Laparoscopic Myomectomy:</strong> Fibroid nikalna,
                  bachedani bachana.
                </li>
                <li>
                  <strong>Endometriosis Surgery:</strong> Endometriosis ka
                  excision aur pelvic dard mein rahat.
                </li>
                <li>
                  <strong>Laparoscopic Hysterectomy:</strong> Zaroorat par
                  bachedani nikalna.
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> Prolapse ke liye keyhole
                  repair.
                </li>
                <li>
                  Chhote cuts aur aam taur par tez recovery.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Fertility treatment
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Ovulation induction, IUI ya IVF, cause ke hisaab se.
                </li>
                <li>
                  Tubes ya bachedani ki problem ka pehle ilaj.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Pregnancy aur delivery care
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Antenatal check-up, scans, high-risk pregnancy ki monitoring.
                </li>
                <li>Normal delivery ya zaroorat par C-section.</li>
                <li>Delivery ke baad postnatal care.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Pelvic floor exercises aur pessary
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Halke prolapse aur peshab leak mein.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Menopause ka management
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Lakshan ke hisaab se hormonal ya non-hormonal options, calcium
                  aur vitamin D.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Cancer ki screening aur ilaj
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pap smear aur HPV test se pehle pakadna.
                </li>
                <li>
                  Precancer ya cancer mein specialist ke saath treatment plan.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Umar Ke Hisaab Se Mahila Rog
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kishori ladkiyon mein (10-19 saal)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods ka shuru na hona ya irregular hona.</li>
                <li>Dardnak periods.</li>
                <li>PCOS aur anemia.</li>
                <li>
                  Sahi jaankari aur pyaar bhari baat-cheet zaroori hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Jawaani mein (20-40 saal)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>PCOS, infection, fibroid, cyst.</li>
                <li>Infertility aur miscarriage.</li>
                <li>Pregnancy aur delivery ki planning.</li>
                <li>Family planning ki salah.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                40 ke baad (perimenopause)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Periods ka irregular ya heavy hona.</li>
                <li>Fibroid, polyp aur endometrial thickening.</li>
                <li>Menopause ke lakshan shuru hona.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Menopause ke baad (50+)
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Yoni ka sukhapan, peshab ki problem.</li>
                <li>Prolapse.</li>
                <li>Hadiyon ki kamzori.</li>
                <li>
                  Kisi bhi tarah ki bleeding ki turant jaanch.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Mahila Rog Se Bachne Ke Upay
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya karein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Saal mein ek baar gynaecological check-up karayein.
                </li>
                <li>
                  Intimate hygiene ka dhyan rakhein, cotton undergarments
                  pehnein.
                </li>
                <li>
                  Periods mein pad ya cup samay par badlein.
                </li>
                <li>
                  Balanced diet: hari sabziyan, dal, fruits, protein, iron aur
                  calcium.
                </li>
                <li>Regular exercise aur yoga.</li>
                <li>Healthy weight banaye rakhein.</li>
                <li>Safe intercourse ka dhyan rakhein.</li>
                <li>
                  Pap smear aur HPV screening doctor ki salah par karayein.
                </li>
                <li>
                  HPV vaccine ke baare mein doctor se poochein.
                </li>
                <li>Periods ki diary rakhein.</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Kya na karein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Douching (andar se dhona) na karein.</li>
                <li>
                  Bina doctor ki salah antibiotics, hormonal goli ya herbal dawa
                  na lein.
                </li>
                <li>
                  Lakshan ko mahino tak na taalein.
                </li>
                <li>
                  Sharm ke karan jaanch talein nahi.
                </li>
                <li>
                  Report ya internet dekhkar khud diagnose na karein.
                </li>
                <li>Smoking aur zyada alcohol se bachein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Sharm Aur Jhijhak Kyun Nahi Karni Chahiye?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Gynaecologist ke liye yeh sab roz ka kaam hai. Woh bina judge
                  kiye aapki baat sunti hain.
                </li>
                <li>
                  Aapki baat gopniya rakhi jaati hai.
                </li>
                <li>
                  Jaanch se pehle doctor poori baat samjhati hain.
                </li>
                <li>
                  Kisi bhi jaanch se pehle sawaal poochna aapka haq hai.
                </li>
                <li>
                  Chaho to ghar ki koi mahila ya partner saath aa sakte hain.
                </li>
                <li>
                  Jitni jaldi doctor ko dikhayein, utna aasan ilaj.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Aam Galatfahmiyan (Myths)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;White discharge hamesha bimari hai.&quot;</strong>{" "}
                  Nahi. Halka safed discharge normal ho sakta hai. Badbu, rang
                  badalna ya khujli ho to jaanch karayein.
                </li>
                <li>
                  <strong>&quot;Periods ka dard sabko hota hai, ilaj ki zaroorat
                  nahi.&quot;</strong> Halka dard aam hai, lekin roz ke kaam rok
                  de to jaanch zaroori hai.
                </li>
                <li>
                  <strong>&quot;Fibroid ka matlab cancer hai.&quot;</strong>{" "}
                  Zyada-tar fibroid non-cancerous hote hain.
                </li>
                <li>
                  <strong>&quot;Pregnancy na ho to sirf mahila mein problem
                  hai.&quot;</strong> Lagbhag aadhe cases mein male factor ka
                  role hota hai.
                </li>
                <li>
                  <strong>&quot;Bachedani nikalne se aurat kamzor ho jaati
                  hai.&quot;</strong> Sahi recovery ke baad normal zindagi jee
                  sakti hain.
                </li>
                <li>
                  <strong>&quot;Nuskhon se har rog theek ho jaata hai.&quot;</strong>{" "}
                  Infection, cyst ya tube blockage ka ilaj nuskhon se nahi hota.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Moradabad Mein Dr. Priyanka Pachauri Se Ilaj Kyun?
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec Moradabad ka ek women&apos;s health aur fertility
                centre hai. Website ke mutabik yahan yeh suvidhayein hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Dr. Priyanka Pachauri, jinhe laparoscopy, fertility treatment
                  aur endometriosis care mein pehchan hasil hai.
                </li>
                <li>Gynaecology aur 3D Laparoscopy.</li>
                <li>
                  Fertility aur IVF, AI-based semen analysis aur time-lapse
                  embryo monitoring ke saath.
                </li>
                <li>
                  Pregnancy, Antenatal aur Normal Delivery care.
                </li>
                <li>
                  Laparoscopic Cystectomy, Myomectomy aur Hysterectomy.
                </li>
                <li>
                  Sacrocolpopexy, Sterilization, Diagnostic Hysteroscopy aur
                  Polypectomy.
                </li>
                <li>Endometriosis Surgery.</li>
                <li>3D aur 4D ultrasound (Voluson machine).</li>
                <li>
                  Paediatric care: Baby ke liye consultation aur vaccination.
                </li>
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
                  Ek hi jagah jaanch, ultrasound aur ilaj.
                </li>
                <li>
                  Kishori se menopause tak har stage par ek hi team.
                </li>
                <li>
                  Camera-based ilaj mein chhote cuts aur aam taur par tez
                  recovery.
                </li>
                <li>
                  Mother aur baby ki dekhbhaal ek hi jagah.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Doctor se yeh poochein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Meri takleef ka sambhavit karan kya hai?
                </li>
                <li>Kaunsi jaanch zaroori hain?</li>
                <li>Ilaj dawa se hoga ya procedure se?</li>
                <li>Kab tak aaram milega?</li>
                <li>Kab dobara dikhana hai?</li>
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
