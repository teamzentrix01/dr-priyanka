import Link from "next/link";
import {
  Phone,
  CheckCircle2,
  MapPin,
  Shield,
  Mail,
  Clock,
  Activity,
  Heart,
  Star,
  Award,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function InfertilitySpecialistDoctor() {
  const faqs = [
    {
      q: "What does an infertility specialist doctor do?",
      a: "They diagnose the cause of difficulty conceiving and recommend suitable treatment.",
    },
    {
      q: "When should I see an infertility specialist doctor?",
      a: "After 12 months of trying, or 6 months if you are 35 or older.",
    },
    {
      q: "Should my husband also be seen?",
      a: "Yes. Male factors cause about one-third of infertility cases.",
    },
    {
      q: "How do I choose a good fertility doctor?",
      a: "Check qualifications, ethics, facilities, time given and cost transparency.",
    },
    {
      q: "Will the doctor advise IVF immediately?",
      a: "Not necessarily. A good doctor starts with the simplest effective option.",
    },
    {
      q: "What should I bring to my first visit?",
      a: "Previous reports, scans, prescriptions and your partner if possible.",
    },
    {
      q: "Can the same doctor manage my pregnancy later?",
      a: "Yes. Dr. Priyanka Gynaec provides antenatal care and normal delivery support.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="order-1 flex-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="mb-4 font-serif text-3xl text-gray-900">
                Infertility Specialist Doctor: Who to See, When to Go and How to Choose the Right One
              </h1>

              <p className="mb-4 text-gray-700">
                Deciding to see a fertility doctor is a big step. Many couples
                wait because they feel unsure, anxious or worried about
                judgement. Yet the first consultation is often the moment things
                begin to improve, because a clear diagnosis replaces guesswork.
              </p>

              <p className="mb-4 text-gray-700">
                This guide explains what an infertility specialist doctor does,
                when you should see one, what qualifications to look for and how
                to tell a good doctor from a pushy one. It also explains how
                fertility care works at Dr. Priyanka Gynaec in Moradabad.
              </p>
            </div>

            {/* Section 2 — Who Is an Infertility Specialist */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Who Is an Infertility Specialist Doctor?
              </h2>

              <p className="mb-4 text-gray-700">
                An infertility specialist, also called a fertility doctor, is a
                medical professional trained to diagnose and treat difficulty in
                conceiving.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>In India, this is usually an obstetrician-gynaecologist with additional training or experience in reproductive medicine.</li>
                <li>Some hold advanced fellowships in infertility, IVF or reproductive endocrinology.</li>
                <li>Many also perform laparoscopy and hysteroscopy, which help treat structural causes of infertility.</li>
                <li>For male-specific problems, the fertility team may work with a urologist or andrologist.</li>
                <li>A good fertility doctor treats the couple, not only the woman.</li>
              </ul>
            </div>

            {/* Section 3 — What a Specialist Does */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Does an Infertility Specialist Doctor Do?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Takes a detailed medical, menstrual and sexual history from both partners</li>
                <li>Examines you and performs ultrasound scans</li>
                <li>Orders targeted blood tests, semen analysis and other investigations</li>
                <li>Finds the cause or combination of causes</li>
                <li>Treats underlying conditions such as PCOS, thyroid problems or infection</li>
                <li>Recommends the simplest effective treatment first</li>
                <li>Performs minimally invasive surgery when a structural problem is present</li>
                <li>Offers IUI, IVF and ICSI when appropriate</li>
                <li>Monitors your treatment cycles closely</li>
                <li>Supports you emotionally and explains your chances honestly</li>
                <li>Continues care into pregnancy, where the clinic offers it</li>
              </ul>
            </div>

            {/* Section 4 — When to See */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You See an Infertility Specialist Doctor?
              </h2>

              <p className="mb-4 text-gray-700">General guidance:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Under 35 years: after 12 months of trying without success</li>
                <li>35 years and above: after 6 months</li>
                <li>Over 40: consult as soon as you plan to conceive</li>
              </ul>

              <p className="mb-4 text-gray-700">See a doctor earlier if:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Your periods are irregular, very infrequent or absent</li>
                <li>You have severe period pain or chronic pelvic pain</li>
                <li>You have been diagnosed with PCOS, endometriosis, fibroids or thyroid disease</li>
                <li>You have had pelvic infection, tuberculosis or pelvic surgery</li>
                <li>You have had two or more miscarriages</li>
                <li>Your partner has a low sperm count or an abnormal semen report</li>
                <li>Earlier treatments such as IUI have not worked</li>
                <li>You want to freeze eggs or check your fertility potential</li>
              </ul>

              <p className="text-gray-700">
                Do not wait for &quot;the right time.&quot; Fertility declines
                with age, so earlier action gives more choices.
              </p>
            </div>

            {/* Section 5 — Both Partners */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Should the Woman or the Man Be Seen First?
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Both partners should be evaluated together.</li>
                <li>Male factors contribute to about one-third of infertility cases.</li>
                <li>Another group of couples have problems in both partners.</li>
                <li>Testing the man is simple, private and painless, and it saves months.</li>
                <li>Seeing only one partner can delay the correct diagnosis.</li>
              </ul>
            </div>

            {/* Section 6 — Common Problems */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Problems an Infertility Specialist Doctor Treats
              </h2>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Women
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ovulation problems: PCOS, thyroid disorders, high prolactin</li>
                <li>Blocked fallopian tubes: after infection, surgery or endometriosis</li>
                <li>Endometriosis: causing pain and affecting the pelvis</li>
                <li>Fibroids and polyps: distorting the uterine cavity</li>
                <li>Uterine septum or adhesions</li>
                <li>Ovarian cysts</li>
                <li>Low ovarian reserve and age-related decline</li>
                <li>Recurrent pregnancy loss</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Men
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Low sperm count</li>
                <li>Poor sperm movement</li>
                <li>Abnormal sperm shape</li>
                <li>No sperm in the semen</li>
                <li>Varicocele</li>
                <li>Sperm DNA damage</li>
                <li>Hormonal imbalance and infections</li>
              </ul>

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                In Both
              </h3>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Unexplained infertility: normal tests but no pregnancy</li>
                <li>Lifestyle-related problems: obesity, smoking, alcohol, stress</li>
                <li>Failed earlier treatments: reassessment and a new plan</li>
              </ul>
            </div>

            {/* Section 7 — Qualifications */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Qualifications and Experience Should You Look For?
              </h2>

              <p className="mb-4 text-gray-700">
                Check these points before you decide.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Medical degree: MBBS followed by MD or MS in obstetrics and gynaecology, or an equivalent qualification</li>
                <li>Additional training: fellowship or certificate courses in infertility, IVF or reproductive medicine</li>
                <li>Surgical skills: training in laparoscopy and hysteroscopy</li>
                <li>Registration: valid registration with the Medical Council</li>
                <li>Professional memberships: societies related to fertility and gynaecology</li>
                <li>Years of experience: especially in fertility care</li>
                <li>Continuing education: participation in conferences and updates</li>
                <li>Verifiable credentials: ask to see them, and check the clinic website</li>
              </ul>

              <p className="text-gray-700">
                Tip: a good doctor will be happy to explain their training and
                experience.
              </p>
            </div>

            {/* Section 8 — How to Choose */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Choose the Right Infertility Specialist Doctor
              </h2>

              <p className="mb-4 text-gray-700">
                Use this checklist as you compare options.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ethical approach: the doctor should not push IVF when simpler options may work.</li>
                <li>Time and attention: you should feel heard, not rushed.</li>
                <li>Clear explanations: you should understand your diagnosis in simple language.</li>
                <li>Both partners welcomed: male testing should be taken seriously.</li>
                <li>Complete facilities: ultrasound, laboratory, semen analysis, hysteroscopy and laparoscopy in one place</li>
                <li>Modern technology: embryo monitoring and advanced sperm testing indicate a modern laboratory.</li>
                <li>Transparent costs: you should receive a written, itemised estimate.</li>
                <li>Realistic expectations: no honest doctor guarantees a pregnancy.</li>
                <li>Continuity of care: a team that can also manage pregnancy and delivery</li>
                <li>Reachability: a clinic that answers calls and WhatsApp messages</li>
                <li>Real patient experiences: word of mouth and genuine reviews</li>
                <li>Comfort and trust: you should feel safe asking any question</li>
              </ul>
            </div>

            {/* Section 9 — Warning Signs */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs to Watch Out For
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Promises of guaranteed pregnancy or very high success claims</li>
                <li>Pressure to begin IVF immediately without a proper evaluation</li>
                <li>Unclear or constantly changing quotes</li>
                <li>No explanation of why a test or medicine is being advised</li>
                <li>Testing only the woman and ignoring the man</li>
                <li>Reluctance to show credentials or discuss results honestly</li>
                <li>Making you feel rushed or judged</li>
              </ul>
            </div>

            {/* Section 10 — Questions to Ask */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Your Fertility Doctor
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>What do you think is the cause of our difficulty?</li>
                <li>Which tests do we really need, and why?</li>
                <li>What is the simplest treatment for our situation?</li>
                <li>When would you recommend IUI or IVF?</li>
                <li>How many cycles might we need?</li>
                <li>What are the risks and side effects?</li>
                <li>What is the total estimated cost?</li>
                <li>How often will we need to visit?</li>
                <li>What happens if the first attempt does not work?</li>
                <li>Will you also manage my pregnancy and delivery?</li>
              </ul>
            </div>

            {/* Section 11 — First Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect at Your First Consultation
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A calm, unhurried conversation about your story and goals</li>
                <li>Detailed questions about your cycle, health, previous pregnancies, surgeries and lifestyle</li>
                <li>A physical examination and ultrasound of the uterus and ovaries</li>
                <li>Basic blood tests and a semen analysis for your partner</li>
                <li>A clear plan with realistic timelines</li>
                <li>An honest discussion about options, expected outcomes and costs</li>
                <li>Time for every question you have</li>
              </ul>

              <p className="mb-4 text-gray-700">What to bring:</p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous reports, scans and prescriptions</li>
                <li>HSG, hormone and semen analysis reports</li>
                <li>Your menstrual cycle dates</li>
                <li>A list of current medicines</li>
                <li>Your partner, if possible</li>
                <li>A list of your questions</li>
              </ul>
            </div>

            {/* Section 12 — Treatment Options */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Treatment Options Your Doctor May Suggest
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Lifestyle changes: healthy weight, balanced diet, exercise, quitting tobacco and alcohol</li>
                <li>Treating underlying conditions: thyroid, prolactin, diabetes and infections</li>
                <li>Ovulation induction: medicines to help the ovaries release eggs, monitored by scans</li>
                <li>Hysteroscopy: to treat polyps, septum or adhesions without cuts</li>
                <li>Laparoscopy: keyhole surgery for cysts, fibroids, endometriosis and tubal problems</li>
                <li>IUI: prepared sperm placed in the uterus around ovulation</li>
                <li>IVF and ICSI: eggs fertilised in the laboratory, with a single sperm injected in ICSI</li>
                <li>Frozen embryo transfer and fertility preservation: for flexibility and future planning</li>
              </ul>

              <p className="text-gray-700">
                Your doctor will choose from this list based on your diagnosis,
                not the other way around.
              </p>
            </div>

            {/* Section 13 — What Affects Success */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Affects Your Chances of Success
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>The woman&apos;s age: the strongest factor</li>
                <li>Ovarian reserve and egg quality</li>
                <li>Sperm quality and DNA health</li>
                <li>Cause and duration of infertility</li>
                <li>Condition of the uterus and tubes</li>
                <li>Lifestyle and general health</li>
                <li>Choosing the right treatment at the right time</li>
                <li>The skill of the doctor and the laboratory team</li>
              </ul>
            </div>

            {/* Section 14 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Seeing a Fertility Doctor
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Myth: a fertility doctor will recommend IVF immediately. Fact: a good doctor begins with the simplest effective option.</li>
                <li>Myth: only women need to be tested. Fact: male testing is essential and quick.</li>
                <li>Myth: you should wait for years before seeing a doctor. Fact: early evaluation improves your options.</li>
                <li>Myth: fertility treatment always means surgery or injections. Fact: many couples need only lifestyle changes or simple medicines.</li>
                <li>Myth: a consultation commits you to treatment. Fact: a consultation gives you information, and decisions remain yours.</li>
              </ul>
            </div>

            {/* Section 15 — Emotional Wellbeing */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Looking After Your Emotional Wellbeing
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Feeling anxious, sad or frustrated is normal.</li>
                <li>Talk openly with your partner and share the journey.</li>
                <li>Avoid comparing your path with others.</li>
                <li>Take planned breaks between cycles if you need them.</li>
                <li>Seek counselling when stress feels heavy.</li>
                <li>Choose a doctor and team who treat you with respect and patience.</li>
              </ul>
            </div>

            {/* Section 16 — Why Choose Dr Priyanka */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Couples Choose Dr. Priyanka Gynaec in Moradabad
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Gynaec combines fertility care, gynaecological
                surgery and maternity services under the philosophy &quot;Her
                Health First&quot;.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Fertility and IVF services: personalised plans for each couple</li>
                <li>3D laparoscopic surgery: for cysts, fibroids, endometriosis and tubal factors</li>
                <li>Hysteroscopy services: diagnostic hysteroscopy and polyp removal</li>
                <li>GERI time-lapse imaging incubator: advanced embryo monitoring</li>
                <li>AI-powered semen analysis: includes DNA integrity testing for a deeper male fertility assessment</li>
                <li>3D/4D ultrasound: detailed imaging during fertility care and pregnancy</li>
                <li>One team from conception to delivery: antenatal services, normal delivery support and newborn care</li>
                <li>Empathetic, unhurried consultations: you are heard before any plan is made</li>
              </ul>

              <p className="text-gray-700">
                The clinic describes its approach as one built on trust earned
                through patient referrals, with mothers recommending it to
                daughters and friends to friends. Please confirm the
                doctor&apos;s current qualifications and experience directly
                with the clinic when you book.
              </p>
            </div>

            {/* Section 17 — Contact */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Book Your Consultation Today
              </h2>

              <p className="mb-6 text-black">
                Do not let hesitation cost you precious time. Reach out, share
                your reports and take the first step with a team that listens.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <a href="tel:9079765578" className="text-black hover:underline">
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a href="tel:8979670705" className="text-black hover:underline">
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="text-black hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      className="text-black hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.gynaecologistmoradabad.com/
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black">
                      A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50">
                    <Phone className="mr-2 inline" size={18} />
                    Contact Us
                  </button>
                </Link>

                <Link href="/services">
                  <button className="rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-[#e181b5]">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>

            {/* Section 18 — FAQs */}
            <div className="mb-12">
              <h2 className="mb-6 font-serif text-3xl text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-lg border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-2 w-full lg:w-[380px] xl:w-[420px]">
            <div className="space-y-6 lg:sticky lg:top-28">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}