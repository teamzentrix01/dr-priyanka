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

export default function BachedaniKaOperationBinaChirfaad() {
  const faqs = [
    {
      q: "Kya bachedani ka operation bilkul bina cut ke ho sakta hai?",
      a: "Vaginal surgery mein pet par cut nahi hota. Keyhole mein chhote cuts lagte hain.",
    },
    {
      q: "Keyhole aur open surgery mein kya farak hai?",
      a: "Keyhole mein chhote cuts aur aam taur par tez recovery. Open mein bada cut lagta hai.",
    },
    {
      q: "Operation kab zaroori hota hai?",
      a: "Bade fibroid, zyada bleeding, prolapse, adenomyosis ya cancer jaise cases mein.",
    },
    {
      q: "Kya bina operation ilaj ho sakta hai?",
      a: "Kai cases mein dawa, hormonal IUD ya myomectomy jaise options kaam karte hain.",
    },
    {
      q: "Hospital mein kitne din rehna padta hai?",
      a: "Keyhole mein aam taur par 1-2 din.",
    },
    {
      q: "Recovery mein kitna time lagta hai?",
      a: "Halke kaam 2-4 hafte mein, poori recovery aur intercourse 6-8 hafte mein.",
    },
    {
      q: "Kya operation ke baad periods aate hain?",
      a: "Nahi, bachedani nikalne ke baad periods band ho jaate hain.",
    },
    {
      q: "Kya menopause turant aa jaata hai?",
      a: "Ovaries rakhi hon to nahi. Nikali hon to surgical menopause ho sakta hai.",
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
                Bachedani Ka Operation Bina Chirfaad: Keyhole Surgery Ki Poori
                Jaankari (Moradabad)
              </h1>

              <p className="mb-4 text-gray-700">
                Doctor ne bachedani ka operation bataya, aur sabse pehla sawaal
                aaya: &quot;Kya yeh bina chirfaad, bina bade cut ke ho sakta
                hai?&quot; Pehle pet par lamba cut lagta tha, dard zyada rehta
                tha aur recovery mein hafte lag jaate the. Aaj laparoscopy
                (keyhole surgery) aur vaginal surgery ki wajah se kai cases mein
                operation bina bade cut ke ho jaata hai.
              </p>

              <p className="mb-4 text-gray-700">
                Is guide mein hum simple Hinglish mein samjhayenge:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>&quot;Bina chirfaad&quot; ka sahi matlab kya hai</li>
                <li>Bachedani ka operation kab zaroori hota hai</li>
                <li>Keyhole surgery ke fayde aur limits</li>
                <li>Recovery, risks aur bina operation ke options</li>
                <li>Moradabad mein consult kaise karein</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                &quot;Bina Chirfaad&quot; Ka Sahi Matlab Kya Hai?
              </h2>

              <p className="mb-4 text-gray-700">
                Yeh baat pehle hi saaf samajh lein:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Vaginal hysterectomy:</strong> Bachedani yoni ke
                  raaste se nikalti hai. Pet par koi cut nahi lagta.
                </li>
                <li>
                  <strong>Laparoscopic (keyhole) hysterectomy:</strong> Pet par
                  3-4 bahut chhote cuts lagte hain (aam taur par 5-10 mm). Bada
                  chirfaad nahi hota.
                </li>
                <li>
                  <strong>Hysteroscopy:</strong> Polyp ya andar ke chhote
                  fibroid ka ilaj yoni ke raaste se hota hai, bina kisi cut ke.
                </li>
                <li>
                  <strong>Open (abdominal) surgery:</strong> Pet par bada cut.
                  Yeh sirf tab hota hai jab keyhole ya vaginal tareeka surakshit
                  na ho.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Sachai:</strong> &quot;Bilkul bina nishaan&quot; ka
                operation har mahila ke liye possible nahi hota. Sahi tareeka
                aapki bachedani ke size, purani surgery aur bimari par depend
                karta hai. Yeh faisla jaanch ke baad doctor hi kar sakti hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ka Operation Kab Zaroori Hota Hai?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bade ya kai fibroid jo dawa se control nahi hote.
                </li>
                <li>
                  Bahut zyada bleeding jo dawaiyon se theek na ho.
                </li>
                <li>
                  Adenomyosis (bachedani ki deewar mein endometrium ka ghus
                  jaana).
                </li>
                <li>
                  Endometriosis aur lambe time ka pelvic dard.
                </li>
                <li>Uterine prolapse (bachedani neeche khisakna).</li>
                <li>
                  Bachedani ya cervix mein precancer ya cancer.
                </li>
                <li>
                  Baar-baar hone wala gambhir infection ya cyst.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Zaroori baat:</strong> Har bachedani ki problem mein
                bachedani nikalna zaroori nahi hota. Kai cases mein bachedani
                bachakar ilaj hota hai, khaaskar jab aap aur bachche chahti hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bachedani Ke Operation Ke Alag Tareeke
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Hysteroscopic surgery (bina cut)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Camera yoni se andar jaata hai.</li>
                <li>Polyp aur kuch fibroid nikale ja sakte hain.</li>
                <li>
                  Aam taur par same day ya next day ghar jaana.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Laparoscopic Hysterectomy (keyhole)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pet par chhote cuts, HD/3D camera aur patle instruments.
                </li>
                <li>
                  Bachedani chhote tukdon mein ya yoni ke raaste bahar nikali
                  jaati hai.
                </li>
                <li>
                  Kai cases mein recovery tez hoti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Laparoscopic Myomectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Sirf fibroid nikalna, bachedani bachana.</li>
                <li>
                  Un mahilaon ke liye jo pregnancy chahti hain.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Vaginal Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pet par koi cut nahi.</li>
                <li>
                  Kai cases mein prolapse ke saath suitable.
                </li>
                <li>
                  Bahut badi bachedani ya purani surgery mein mushkil ho sakti
                  hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Sacrocolpopexy (keyhole)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bachedani ya vagina ke upar se khisakne (prolapse) ka keyhole
                  repair.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Open Hysterectomy
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Bahut badi bachedani, kai purani surgeries, ya cancer ke kuch
                  cases mein zaroori ho sakti hai.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Keyhole Surgery Ke Fayde
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Chhote cuts, isliye dard aam taur par kam.
                </li>
                <li>
                  Aam taur par kam khoon ka nuksan.
                </li>
                <li>
                  Hospital mein rehna aam taur par 1-2 din.
                </li>
                <li>Wound infection ka risk kam.</li>
                <li>Roz ke kaam par jaldi wapasi.</li>
                <li>Chhote nishaan.</li>
                <li>
                  HD/3D camera se andar ki cheezein saaf dikhti hain.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Note:</strong> Yeh fayde aam taur par dekhe jaate hain.
                Har mahila ke liye result alag ho sakta hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Keyhole Possible Nahi Hota?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bachedani bahut bahut badi ho.</li>
                <li>
                  Pet mein bahut zyada chipkav (adhesions) ho.
                </li>
                <li>Pehle kai badi surgeries hui hon.</li>
                <li>Kuch cancer cases mein.</li>
                <li>
                  Anesthesia ke liye health surakshit na ho.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Surgery ke dauran achanak dikkat aane par doctor open surgery mein
                badal sakti hain. Yeh surakshit rehne ke liye hota hai.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Bina Operation Ke Kya Options Hain?
              </h2>

              <p className="mb-4 text-gray-700">
                Kai baar operation se pehle yeh options try kiye ja sakte hain:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Dawaiyan:</strong> Bleeding kam karne aur hormone
                  control ki dawaiyan.
                </li>
                <li>
                  <strong>Hormonal IUD:</strong> Heavy bleeding mein kai
                  mahilaon ko madad milti hai.
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy:</strong> Polyp ke karan
                  bleeding ho to.
                </li>
                <li>
                  <strong>Myomectomy:</strong> Fibroid nikalna, bachedani
                  bachana.
                </li>
                <li>
                  <strong>Endometrial ablation:</strong> Bachedani ki andar ki
                  parat ko kam karna (sirf kuch cases mein).
                </li>
                <li>
                  <strong>Fibroid ke liye alag procedures</strong>, jaise uterine
                  artery embolization (sab jagah available nahi).
                </li>
                <li>
                  <strong>Pelvic floor exercises aur pessary:</strong> Halke
                  prolapse mein.
                </li>
                <li>
                  <strong>Lifestyle:</strong> Weight control, iron aur diet.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                <strong>Yaad rakhein:</strong> Sahi option doosri baaton par
                depend karta hai, jaise umar, bimari, family planning aur
                symptoms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Operation Se Pehle Kaunsi Jaanch Hoti Hain?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Detailed history aur pelvic examination</strong>
                </li>
                <li>
                  <strong>TVS ya 3D/4D ultrasound</strong>
                </li>
                <li>
                  <strong>Blood tests:</strong> CBC, blood sugar, kidney aur
                  liver function.
                </li>
                <li>
                  <strong>Thyroid aur zaroori hormone tests</strong>
                </li>
                <li>
                  <strong>Pap smear aur zaroorat par biopsy</strong>
                </li>
                <li>
                  <strong>Diagnostic hysteroscopy ya laparoscopy</strong>
                  (zaroorat par).
                </li>
                <li>
                  <strong>ECG, chest X-ray aur anesthesia fitness</strong> (umar
                  aur bimari ke hisaab se).
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Operation Ki Taiyari Kaise Karein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctor ko apni saari dawaiyan batayein, khaaskar blood
                  thinner, diabetes aur BP ki.
                </li>
                <li>
                  Operation se pehle kuch ghante khaana-peena band karna hota
                  hai. Doctor ke nirdesh ka palan karein.
                </li>
                <li>Anemia ho to pehle theek karayein.</li>
                <li>Smoking band karein.</li>
                <li>Ghar ke liye madad ka intezaam rakhein.</li>
                <li>
                  Loose, aaram wale kapde aur zaroori papers saath rakhein.
                </li>
                <li>Apne saare sawaal pehle hi pooch lein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery Kaisi Hoti Hai?
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Hospital mein
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Operation ke kuch ghante baad uthna-chalna shuru karne ki
                  salah di jaati hai.
                </li>
                <li>Dard ki dawa aur drip di jaati hai.</li>
                <li>
                  Keyhole surgery mein aam taur par 1-2 din mein discharge.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Ghar par (aam taur par)
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Pehle 1-2 hafte: Aaram, halka khaana, halki walking.
                </li>
                <li>
                  2-4 hafte: Roz ke halke kaam. Keyhole ke baad kai mahilayein
                  jaldi routine par aati hain.
                </li>
                <li>
                  6-8 hafte: Intercourse aur bhaari kaam, doctor ki ijaazat ke
                  baad.
                </li>
                <li>
                  Open surgery mein recovery aam taur par zyada time leti hai.
                </li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Recovery ke tips
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Doctor ki di hui dawaiyan samay par lein.</li>
                <li>
                  Fibre wali diet aur paani piyein, kabz se bachein.
                </li>
                <li>4-6 hafte tak bhaari saman na uthayein.</li>
                <li>Dheere-dheere walking badhayein.</li>
                <li>Follow-up check-up zaroor karayein.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Kab Turant Doctor Ko Dikhayein?
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Tez bukhar ya kaanpna.</li>
                <li>Bahut zyada bleeding ya bade clots.</li>
                <li>Badbudar discharge.</li>
                <li>
                  Tez pet dard jo dawa se kam na ho.
                </li>
                <li>
                  Cut wali jagah par laali, sujan ya peep.
                </li>
                <li>Peshab ya potty mein dikkat.</li>
                <li>Pair mein dard, sujan ya saans phoolna.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Operation Ke Risks
              </h2>

              <p className="mb-4 text-gray-700">
                Har surgery mein kuch risk hota hai. Keyhole mein bhi:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Bleeding ya infection.</li>
                <li>
                  Aas-paas ke ang, jaise bladder ya aant, mein chot (bahut
                  kam).
                </li>
                <li>Anesthesia se juda risk.</li>
                <li>Blood clot banna.</li>
                <li>
                  Zaroorat par open surgery mein badalna.
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Doctor risk ko kam karne ke liye pehle jaanch, sahi taiyari aur
                surakshit technique par dhyan deti hain.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Operation Ke Baad Zindagi
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Periods band ho jaate hain, aur pregnancy possible nahi rehti.
                </li>
                <li>
                  Agar ovaries rakhi gayi hain, to hormones chalte rehte hain.
                  Menopause apni natural umar par aata hai.
                </li>
                <li>
                  Agar ovaries nikali gayi hon, to surgical menopause ho sakta
                  hai. Garmi lagna, neend ki dikkat jaise lakshan aa sakte hain.
                  Doctor iska ilaj batati hain.
                </li>
                <li>
                  Intimate life aam taur par theek hone ke baad normal ho jaati
                  hai.
                </li>
                <li>
                  Pap smear ki zaroorat aapki surgery ke type par depend karti
                  hai. Doctor se poochein.
                </li>
                <li>
                  Mood aur emotions par asar ho sakta hai. Apne parivaar se
                  baat karein.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Aam Galatfahmiyan (Myths)
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>&quot;Bachedani nikalne se aurat kamzor ho jaati
                  hai.&quot;</strong> Nahi, sahi recovery ke baad aap normal
                  zindagi jee sakti hain.
                </li>
                <li>
                  <strong>&quot;Keyhole mein koi risk nahi hota.&quot;</strong>{" "}
                  Risk kam ho sakta hai, lekin bilkul zero nahi hota.
                </li>
                <li>
                  <strong>&quot;Bachedani nikalne se motapa badhta hai.&quot;</strong>{" "}
                  Yeh sabhi mein zaroori nahi. Diet aur exercise se weight
                  control ho sakta hai.
                </li>
                <li>
                  <strong>&quot;Operation ke baad sex life khatam ho jaati
                  hai.&quot;</strong> Zyada-tar mahilayein theek hone ke baad
                  normal life jeeti hain.
                </li>
                <li>
                  <strong>&quot;Har fibroid mein bachedani nikalni padti
                  hai.&quot;</strong> Nahi, kai cases mein sirf fibroid nikala
                  jaata hai.
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
                  Dr. Priyanka Pachauri, jinhe laparoscopy, fertility aur
                  endometriosis care mein pehchan hasil hai.
                </li>
                <li>
                  High-Definition 3D Laparoscopic Surgery.
                </li>
                <li>
                  Laparoscopic Hysterectomy, jise website &quot;minimally
                  invasive keyhole hysterectomy with fast recovery&quot; batati
                  hai.
                </li>
                <li>
                  Laparoscopic Myomectomy (uterus-preserving), Cystectomy aur
                  Endometriosis Surgery.
                </li>
                <li>
                  Diagnostic Hysteroscopy aur Polypectomy (bina cuts).
                </li>
                <li>
                  Sacrocolpopexy (prolapse ke liye keyhole repair).
                </li>
                <li>
                  3D/4D ultrasound aur pregnancy, fertility aur paediatric care
                  ek hi jagah.
                </li>
                <li>
                  &quot;Her Health First&quot; approach: pehle aapki baat suni
                  jaati hai.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-900">
                Consult par doctor se yeh poochein
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Mere case mein kaunsa tareeka best hai, aur kyun?
                </li>
                <li>Bachedani bachana possible hai kya?</li>
                <li>Ovaries rakhi jayengi ya nahi?</li>
                <li>Hospital stay aur recovery kitni hogi?</li>
                <li>Risks kya hain?</li>
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
