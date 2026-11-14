
import Link from "next/link";
import {
  Award,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function AntenatalCareDoctor() {
  const faqs = [
    {
      q: "What is antenatal care?",
      a: "It is the regular medical care, tests and counselling given during pregnancy to keep mother and baby healthy and to detect problems early.",
    },
    {
      q: "When should I start antenatal care?",
      a: "As soon as your pregnancy test is positive, ideally within the first eight weeks.",
    },
    {
      q: "How many antenatal visits will I need?",
      a: "Usually monthly until 28 weeks, every two weeks until 36 weeks and weekly afterwards. High-risk pregnancies may need more visits.",
    },
    {
      q: "Which scans are done during pregnancy?",
      a: "An early dating scan, a detailed anomaly scan in the second trimester and growth scans later. Your doctor will advise what you need.",
    },
    {
      q: "Is ultrasound safe in pregnancy?",
      a: "Yes. Ultrasound does not use radiation and is considered safe when done for medical reasons by a qualified professional.",
    },
    {
      q: "What is a high-risk pregnancy?",
      a: "A pregnancy where the mother or baby has a higher chance of complications, such as with diabetes, hypertension, twins or previous pregnancy loss.",
    },
    {
      q: "Can I plan a normal delivery?",
      a: "Many women can if the pregnancy is healthy and there is no medical reason against it. Your doctor will guide you as the pregnancy progresses.",
    },
    {
      q: "Does the clinic offer care after delivery?",
      a: "Yes. Postnatal checkups, paediatric consultations, newborn care and vaccinations are available.",
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
                Antenatal Care Doctor Near Civil Lines, Moradabad: Structured Care for a Safe Pregnancy
              </h1>

              <p className="mb-4 text-gray-700">
                Pregnancy is a special time, but it can also feel overwhelming.
                You may worry about the baby&apos;s growth, your diet, which tests
                to take and what to expect at delivery. Antenatal care, also
                called prenatal care, is the regular medical support you
                receive from the early weeks of pregnancy until birth. If you
                are searching for an antenatal care doctor near Civil Lines,
                Moradabad, Dr. Priyanka Pachauri at Dr. Priyanka Gynaec offers
                structured prenatal care, with screenings and guidance through
                every trimester.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Is Antenatal Care?
              </h2>

              <p className="mb-4 text-gray-700">
                Antenatal care is a planned series of checkups, tests and
                counselling sessions that protect the health of mother and
                baby. Its goals are to:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirm the pregnancy and calculate the due date</li>
                <li>Monitor the baby&apos;s growth and development</li>
                <li>Track the mother&apos;s blood pressure, weight and haemoglobin</li>
                <li>Detect and treat complications early</li>
                <li>Provide nutrition and lifestyle advice</li>
                <li>Prepare you for labour, delivery and newborn care</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Women who receive regular antenatal care generally have safer
                pregnancies and better outcomes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Website Overview: Dr. Priyanka Gynaec
              </h2>

              <p className="mb-4 text-gray-700">
                The clinic&apos;s website describes a women&apos;s health and
                fertility centre guided by the philosophy &quot;Her Health
                First.&quot; Dr. Priyanka Pachauri is presented as a
                gynaecologist in Moradabad focused on antenatal and postnatal
                care, high-risk pregnancies, laparoscopic surgery and
                menstrual disorders. Antenatal services are listed as
                structured prenatal care and screenings throughout pregnancy.
                The site also lists normal delivery care, pregnancy and
                birthing support, paediatric care and 3D and 4D ultrasound.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should Antenatal Care Begin?
              </h2>

              <p className="mb-4 text-gray-700">
                Ideally, visit your doctor as soon as your pregnancy test turns
                positive, preferably in the first eight weeks. Early care
                allows folic acid to be started, medical history to be
                reviewed and an early scan to be planned.
              </p>

              <p className="mb-4 text-gray-700">
                Visit earlier if you have:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous miscarriage or pregnancy complications</li>
                <li>Thyroid disease, diabetes, hypertension or PCOS</li>
                <li>Conceived after fertility treatment</li>
                <li>Age below 18 or above 35</li>
                <li>Bleeding, severe pain or heavy vomiting</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Antenatal Checkup Schedule
              </h2>

              <p className="mb-4 text-gray-700">
                Your doctor will personalise your schedule, but a common
                pattern is:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li><strong>Up to 28 weeks:</strong> One visit every month</li>
                <li><strong>28 to 36 weeks:</strong> One visit every two weeks</li>
                <li><strong>After 36 weeks:</strong> Weekly visits until delivery</li>
              </ul>

              <p className="mt-4 text-gray-700">
                High-risk pregnancies may need more frequent visits.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                First Trimester (Weeks 1 to 12)
              </h2>

              <p className="mb-4 text-gray-700">
                The first visit includes a detailed history, physical
                examination and basic blood tests such as haemoglobin, blood
                group and Rh factor, thyroid and blood sugar. An early
                ultrasound confirms the pregnancy location, checks the
                heartbeat and dates the pregnancy.
              </p>

              <p className="mb-4 text-gray-700">
                Your doctor will advise on:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Folic acid and other supplements</li>
                <li>Managing nausea and tiredness</li>
                <li>Foods and medicines to avoid</li>
                <li>Safe activity and rest</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Second Trimester (Weeks 13 to 27)
              </h2>

              <p className="mb-4 text-gray-700">
                Many women feel better during this phase. Visits focus on the
                baby&apos;s growth and development.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A detailed anomaly scan checks the baby&apos;s organs and
                  structure
                </li>
                <li>
                  A glucose test screens for gestational diabetes, usually
                  around weeks 24 to 28
                </li>
                <li>Iron and calcium levels are reviewed</li>
                <li>You begin to feel the baby move</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Third Trimester (Weeks 28 to Delivery)
              </h2>

              <p className="mb-4 text-gray-700">
                Visits become more frequent as the due date approaches.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Growth scans check weight, position and amniotic fluid
                </li>
                <li>The placenta is assessed</li>
                <li>Blood pressure is monitored closely</li>
                <li>
                  Birth planning, labour signs and hospital preparation are
                  discussed
                </li>
                <li>
                  Your doctor reviews whether normal delivery is suitable or
                  a caesarean may be needed
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Tests and Scans in Antenatal Care
              </h2>

              <p className="mb-4 text-gray-700">
                Common investigations include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Blood tests:</strong> Haemoglobin, blood group,
                  thyroid, sugar and infection screening as advised
                </li>
                <li>
                  <strong>Urine tests:</strong> To detect infection or protein
                </li>
                <li>
                  <strong>Ultrasound scans:</strong> Dating, anomaly and growth
                  scans
                </li>
                <li>
                  <strong>3D and 4D ultrasound:</strong> Available at the clinic
                  when clearer imaging is medically helpful
                </li>
                <li>
                  <strong>Glucose tolerance test:</strong> To detect gestational
                  diabetes
                </li>
                <li>
                  <strong>Blood pressure and weight checks:</strong> At every
                  visit
                </li>
              </ul>

              <p className="mt-4 text-gray-700">
                Not every woman needs every test. A responsible doctor orders
                what is necessary and explains why.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                High-Risk Pregnancy Care
              </h2>

              <p className="mb-4 text-gray-700">
                A pregnancy is considered high-risk when there is a greater
                chance of complications for mother or baby. Examples include:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Diabetes, thyroid disease, hypertension or heart conditions</li>
                <li>Twin or multiple pregnancy</li>
                <li>Previous miscarriage, preterm birth or caesarean</li>
                <li>Low-lying placenta or slow baby growth</li>
                <li>Severe anaemia</li>
                <li>Pregnancy after fertility treatment</li>
                <li>Maternal age above 35</li>
              </ul>

              <p className="mt-4 text-gray-700">
                High-risk does not mean something will go wrong. It means
                closer monitoring, extra scans and timely decisions. Many
                women with high-risk pregnancies deliver healthy babies with
                the right care.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nutrition and Lifestyle During Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Take folic acid, iron and calcium as prescribed</li>
                <li>
                  Eat small, regular meals with dal, vegetables, fruit, dairy
                  and protein
                </li>
                <li>Drink plenty of water</li>
                <li>
                  Walk daily and do gentle exercise if your doctor approves
                </li>
                <li>Sleep well and rest when tired</li>
                <li>Avoid tobacco, alcohol and unprescribed medicines</li>
                <li>
                  Avoid raw papaya, unpasteurised dairy and undercooked meat
                  or eggs
                </li>
                <li>Manage stress with breathing exercises and family support</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Always consult your doctor before starting any supplement or
                herbal product.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Seek Help Immediately
              </h2>

              <p className="mb-4 text-gray-700">
                Contact your doctor or go to the nearest hospital if you notice:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Vaginal bleeding or leaking of fluid</li>
                <li>
                  Severe abdominal pain or regular tightening before the due
                  date
                </li>
                <li>Reduced or absent baby movements</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of the
                  face and hands
                </li>
                <li>High fever or burning urination</li>
                <li>
                  Persistent vomiting with inability to drink fluids
                </li>
                <li>Fainting, breathlessness or chest pain</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Preparing for Delivery
              </h2>

              <p className="mb-4 text-gray-700">
                Antenatal care includes birth preparation. Your doctor will
                discuss labour signs, pain relief options and what to pack.
                The clinic emphasises normal vaginal delivery wherever it is
                medically suitable, and also explains when a caesarean may be
                safer. Decisions are made together, based on your health and
                the baby&apos;s condition.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Postnatal and Newborn Care
              </h2>

              <p className="mb-4 text-gray-700">
                Care continues after birth. Postnatal visits check your
                recovery, bleeding, wound healing, breastfeeding and emotional
                wellbeing. The clinic also offers paediatric consultations,
                newborn care and vaccinations, so mother and baby can receive
                follow-up care in one place.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Women Choose Dr. Priyanka Gynaec for Antenatal Care
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A doctor who listens patiently and explains clearly</li>
                <li>
                  Structured prenatal care and screenings in every trimester
                </li>
                <li>3D and 4D ultrasound facilities</li>
                <li>Attention to high-risk pregnancies</li>
                <li>Support for normal delivery</li>
                <li>Paediatric and newborn care available</li>
                <li>Continuity, with a team that knows your history</li>
                <li>A private, respectful setting for sensitive questions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Bring to Your First Visit
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>The date of your last menstrual period</li>
                <li>Previous medical records and scan reports</li>
                <li>A list of current medicines and supplements</li>
                <li>Written questions and concerns</li>
                <li>A partner or family member, if you wish</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Location and Contact
              </h2>

              <p className="mb-4 text-gray-700">
                The clinic is at A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh 244001, and is accessible to women
                from Civil Lines and nearby areas. Call +91 90797 65578,
                message on WhatsApp at +91 89796 70705, or email
                drpriyankagynaec@gmail.com. If you are looking for an
                antenatal care doctor near Civil Lines, Moradabad, book your
                first consultation and begin your pregnancy journey with
                clear guidance.
              </p>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">

                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Doctor</p>
                      <p>Dr. Priyanka Pachauri</p>
                      <p className="text-sm text-gray-600">
                        Gynaecologist &amp; Fertility Specialist (MBBS, MS)
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
                        href="mailto:drpriyankagynaec@gmail.com"
                        className="break-all hover:underline"
                      >
                        drpriyankagynaec@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic Address</p>
                      <p>
                        A2, near Old Roadways, Gandhi Nagar, Moradabad,
                        Uttar Pradesh – 244001
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
                Frequently Asked Questions (FAQs)
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
