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

export default function MoradabadDoctorReviewsDelayedPeriods() {
  const faqs = [
    {
      q: "Where can I check reviews for Dr. Priyanka Pachauri in Moradabad?",
      a: "Reviews and listing details can be found on healthcare directories such as HexaHealth, as well as by contacting the clinic directly.",
    },
    {
      q: "What is Dr. Priyanka Pachauri's experience level?",
      a: "She has over 15 years of experience in obstetrics and gynaecology, according to verified listing data.",
    },
    {
      q: "Should I choose a doctor based only on star ratings?",
      a: "No, it's better to consider credentials, experience, and reviews specific to your concern alongside overall ratings.",
    },
    {
      q: "Are online doctor reviews always accurate?",
      a: "Not always; it's best to cross-check across multiple platforms and confirm key details directly with the clinic.",
    },
    {
      q: "What should I look for in reviews about delayed period treatment specifically?",
      a: "Look for mentions of thorough diagnosis, clear explanations, and effective follow-up care for cycle-related concerns.",
    },
    {
      q: "Does a high recommendation percentage mean a doctor is right for me?",
      a: "It's a positive indicator, but it's still worth confirming that the doctor's experience matches your specific concern.",
    },
    {
      q: "Is it better to read reviews or speak with the clinic directly?",
      a: "Both are useful; reviews offer general insight, while speaking with the clinic clarifies details specific to your situation.",
    },
    {
      q: "Can I ask the clinic questions before booking an appointment?",
      a: "Yes, you can call or message the clinic directly with any questions before confirming your appointment.",
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
                Moradabad Doctor Reviews for Delayed Periods: A Guide to Choosing the Right Gynaecologist
              </h1>

              <p className="text-gray-700">
                When you&apos;re dealing with delayed or irregular periods,
                choosing the right doctor matters just as much as getting the
                right treatment. Many women naturally turn to reviews and ratings
                before booking an appointment, wanting reassurance that
                they&apos;re in capable, caring hands. This guide explains what to
                actually look for in Moradabad doctor reviews for delayed
                periods, how to read ratings critically, and what verified
                information shows about Dr. Priyanka Pachauri&apos;s reputation and
                experience in this area.
              </p>
            </div>

            {/* Section 2 — Why Reviews Matter */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Reviews Matter When Choosing a Doctor for Delayed Periods
              </h2>

              <p className="mb-4 text-gray-700">
                Delayed periods can stem from sensitive causes like PCOS,
                thyroid imbalance, or stress, and the diagnostic conversation
                often involves personal details. This makes the doctor-patient
                relationship especially important, and reviews can offer useful
                insight before your first visit.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Reviews can indicate how comfortable other patients felt discussing sensitive symptoms</li>
                <li>Ratings often reflect how clearly a doctor explains diagnosis and treatment options</li>
                <li>Patient feedback can hint at appointment wait times and clinic environment</li>
                <li>Reviews may reflect whether a doctor takes time to listen rather than rushing consultations</li>
                <li>Aggregate ratings across multiple platforms give a broader picture than a single review</li>
              </ul>
            </div>

            {/* Section 3 — Read Reviews Critically */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Read Doctor Reviews Critically
              </h2>

              <p className="mb-4 text-gray-700">
                Not all reviews are equally reliable, and knowing how to evaluate
                them helps you make a more informed decision.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Look for reviews that mention specific experiences rather than generic praise</li>
                <li>Check ratings across multiple platforms (Google, Practo, HexaHealth, and others) rather than relying on just one</li>
                <li>Pay attention to how a doctor&apos;s team responds to any negative feedback, if present</li>
                <li>Be cautious of reviews that seem overly promotional or lack any real detail</li>
                <li>Consider the total number of reviews, as a rating based on very few responses may not be fully representative</li>
                <li>Look specifically for feedback related to your concern, such as comments about diagnosis and treatment of period-related issues</li>
                <li>Cross-check credentials and experience independently rather than relying on reviews alone</li>
              </ul>
            </div>

            {/* Section 4 — Verified Listings */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Verified Listings Show About Dr. Priyanka Pachauri
              </h2>

              <p className="mb-4 text-gray-700">
                Independent healthcare directories provide verified, aggregate
                information about doctors that can be a useful starting point
                alongside patient reviews. According to listings on HexaHealth,
                Dr. Priyanka Pachauri has over 15 years of experience in
                obstetrics and gynaecology and is listed with a 96%
                recommendation rate from patients.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Verified listings reflect significant clinical experience in the field</li>
                <li>A high recommendation percentage reflects consistent positive patient sentiment</li>
                <li>Independent directories provide a more neutral, aggregated view compared to isolated reviews</li>
                <li>These figures can be a helpful supplement to speaking directly with the clinic about your specific concern</li>
              </ul>

              <p className="text-gray-700">
                It&apos;s worth noting that online review counts and detailed written
                feedback can vary across different listing platforms and change
                over time, so it&apos;s always a good idea to check current reviews
                directly before booking, alongside speaking with the clinic about
                your specific needs.
              </p>
            </div>

            {/* Section 5 — Delayed Period Reviews */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Look For Specifically in Reviews About Delayed Period Treatment
              </h2>

              <p className="mb-4 text-gray-700">
                When you&apos;re searching reviews specifically related to delayed or
                irregular periods, certain details are more relevant than general
                clinic reviews.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Mentions of thorough history-taking and testing rather than quick assumptions</li>
                <li>Feedback on whether the doctor explained the likely cause, such as PCOS, thyroid imbalance, or stress, clearly</li>
                <li>Comments on follow-up care and whether treatment led to noticeable improvement</li>
                <li>Feedback on comfort level discussing sensitive symptoms without feeling rushed or judged</li>
                <li>Notes on whether unnecessary tests or treatments were avoided</li>
                <li>Experiences specifically from patients who were trying to conceive with irregular cycles, if relevant to your situation</li>
              </ul>
            </div>

            {/* Section 6 — Credentials */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Credentials Matter Alongside Reviews
              </h2>

              <p className="mb-4 text-gray-700">
                While reviews are helpful, they should be considered alongside a
                doctor&apos;s actual qualifications and experience, especially for a
                condition like delayed periods that can have multiple underlying
                causes.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Formal qualifications and specialized training in obstetrics and gynaecology</li>
                <li>Specific experience managing hormonal conditions like PCOS and thyroid-related irregularities</li>
                <li>Access to proper diagnostic tools, including ultrasound and hormonal testing</li>
                <li>A track record of managing both simple and complex menstrual irregularities</li>
                <li>Fellowship training or additional certifications relevant to reproductive health</li>
              </ul>
            </div>

            {/* Section 7 — About Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                About Dr. Priyanka Pachauri: Experience and Approach
              </h2>

              <p className="mb-4 text-gray-700">
                Dr. Priyanka Pachauri is a gynaecologist in Moradabad with a
                strong, verifiable background in women&apos;s reproductive health,
                including the diagnosis and management of delayed and irregular
                periods.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Gold medal credentials with international fellowship training</li>
                <li>Over 15 years of experience in obstetrics and gynaecology</li>
                <li>Extensive experience managing PCOS, thyroid-related, and stress-related cycle irregularities</li>
                <li>Access to advanced diagnostic tools, including 3D/4D ultrasound imaging</li>
                <li>Known for taking time to explain diagnosis and treatment options clearly to patients</li>
                <li>A patient-first approach that prioritizes understanding the root cause before recommending treatment</li>
              </ul>
            </div>

            {/* Section 8 — Services */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Services Relevant to Delayed Period Concerns
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Detailed diagnostic evaluation for delayed and irregular periods</li>
                <li>Hormonal testing and PCOS management</li>
                <li>Thyroid-related cycle irregularity evaluation and coordinated treatment</li>
                <li>Ultrasound-based assessment of the uterus and ovaries</li>
                <li>Fertility-focused treatment for women trying to conceive with irregular cycles</li>
                <li>Ongoing follow-up and cycle monitoring over time</li>
              </ul>
            </div>

            {/* Section 9 — Trusted Doctor */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why a Thorough, Trusted Doctor Matters for Delayed Periods
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A rushed consultation can miss important underlying causes like PCOS or thyroid imbalance</li>
                <li>Proper diagnosis requires time for detailed history-taking, not just a quick prescription</li>
                <li>Trust and comfort encourage patients to share relevant symptoms openly</li>
                <li>Continuity of care across follow-up visits improves long-term treatment outcomes</li>
                <li>A doctor who explains results clearly helps patients feel more confident in their treatment plan</li>
              </ul>
            </div>

            {/* Section 10 — Myths */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Choosing a Doctor Based on Reviews
              </h2>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Myth:</strong> A doctor with the highest star rating is automatically the best fit for your specific concern.
                  <br />
                  <strong>Fact:</strong> Reviews specific to your condition, like delayed periods, are often more relevant than overall ratings.
                </p>

                <p>
                  <strong>Myth:</strong> Fewer reviews always mean a doctor is less experienced.
                  <br />
                  <strong>Fact:</strong> Experience and credentials matter more than review volume alone; many excellent doctors have limited online review activity.
                </p>

                <p>
                  <strong>Myth:</strong> All online reviews are equally trustworthy.
                  <br />
                  <strong>Fact:</strong> It&apos;s important to cross-check reviews across multiple platforms and look for detailed, specific feedback.
                </p>

                <p>
                  <strong>Myth:</strong> A single negative review means you should avoid a doctor entirely.
                  <br />
                  <strong>Fact:</strong> It&apos;s more useful to look at overall patterns and how such feedback, if any, has been addressed.
                </p>

                <p>
                  <strong>Myth:</strong> Online directories always reflect the most current information.
                  <br />
                  <strong>Fact:</strong> It&apos;s a good idea to confirm details directly with the clinic, as online listings can sometimes be outdated.
                </p>
              </div>
            </div>

            {/* Section 11 — Questions Before Booking */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask Before Booking, Beyond Reviews
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Does the doctor have specific experience managing PCOS or thyroid-related cycle issues?</li>
                <li>What diagnostic tests are typically recommended for delayed periods?</li>
                <li>How are follow-up visits structured to track treatment progress?</li>
                <li>Is the consultation environment private and comfortable for discussing sensitive symptoms?</li>
                <li>Are test results and treatment plans explained clearly, in understandable terms?</li>
              </ul>
            </div>

            {/* Section 12 — Consultation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Expect During Your Consultation
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A calm, private, and judgment-free consultation environment</li>
                <li>Sufficient time to discuss your cycle history and symptoms in detail</li>
                <li>Clear explanation of possible causes based on examination and test results</li>
                <li>Only necessary diagnostic tests recommended for an accurate diagnosis</li>
                <li>A treatment plan tailored to your specific situation and goals</li>
                <li>Ongoing follow-up to monitor progress over several cycles</li>
              </ul>
            </div>

            {/* Section 13 — Verify Information */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Verify Information Before Booking
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>Check the clinic&apos;s official website for accurate contact details and services</li>
                <li>Cross-reference credentials through recognized medical directories</li>
                <li>Call or message the clinic directly with any specific questions before your visit</li>
                <li>Confirm consultation fees and appointment availability directly with the clinic</li>
                <li>Ask the clinic about typical wait times and what to bring to your first visit</li>
              </ul>
            </div>

            {/* Section 14 — Red Flags */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags to Watch For When Researching Doctors Online
              </h2>

              <p className="mb-4 text-gray-700">
                While most reviews are genuine, it helps to be aware of a few
                patterns that can signal unreliable information.
              </p>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A sudden cluster of very similar, overly generic positive reviews posted in a short time frame</li>
                <li>Reviews that focus entirely on offers or discounts rather than actual care experience</li>
                <li>Listings with inconsistent information, such as mismatched addresses or outdated contact numbers</li>
                <li>Profiles with no verifiable credentials or hospital affiliation listed</li>
                <li>An absence of any way to directly contact the clinic to confirm details</li>
              </ul>

              <p className="text-gray-700">
                If something feels inconsistent, the safest approach is always to
                verify directly with the clinic rather than relying solely on
                third-party listings.
              </p>
            </div>

            {/* Section 15 — Direct Conversation */}
            <div className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                The Value of a Direct Conversation Over Reviews Alone
              </h2>

              <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                <li>A phone call or WhatsApp message can quickly clarify whether a doctor manages your specific concern</li>
                <li>Speaking directly allows you to ask about diagnostic approach and typical treatment timelines</li>
                <li>Clinics can confirm current appointment availability and consultation fees accurately</li>
                <li>Direct communication helps you gauge responsiveness and comfort even before your first visit</li>
                <li>It allows you to ask specifically about experience with delayed or irregular periods, rather than relying on general reviews</li>
              </ul>
            </div>

            {/* Section 16 — Booking */}
            <div className="mb-12 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 font-serif text-3xl">
                Booking an Appointment with Dr. Priyanka Pachauri, Moradabad
              </h2>

              <p className="mb-6 text-black">
                If you are looking for a doctor for delayed periods in Moradabad
                and want to speak directly with the clinic rather than relying on
                reviews alone, Dr. Priyanka Pachauri&apos;s team is ready to assist.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Clinic</p>
                    <p className="text-black">Dr. Priyanka Gynaec</p>
                    <p className="text-black">
                      A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh, 244001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0 text-black" />
                  <div>
                    <p className="font-semibold">Call for Appointment</p>
                    <div className="flex flex-wrap items-center gap-3 text-black">
                      <a href="tel:9079765578" className="hover:underline">
                        +91 90797 65578
                      </a>

                      <span className="text-gray-400">|</span>

                      <a href="tel:8979670705" className="hover:underline">
                        +91 89796 70705 (WhatsApp)
                      </a>
                    </div>
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

            {/* Section 17 — FAQs */}
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
