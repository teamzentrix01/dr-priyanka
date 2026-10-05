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


export default function WhereToFindPregnancyDoctorMoradabad() {
  const faqs = [
    {
      q: "Where can I find a pregnancy doctor in Moradabad?",
      a: "Use family recommendations, Google Maps, clinic websites, listing platforms and your local health centre.",
    },
    {
      q: "Which doctor should I see during pregnancy?",
      a: "A gynaecologist or obstetrician experienced in antenatal care and delivery.",
    },
    {
      q: "When should I start looking for a doctor?",
      a: "As soon as your pregnancy test is positive.",
    },
    {
      q: "How do I check if a doctor is genuine?",
      a: "Verify qualifications, medical council registration, experience and patient feedback.",
    },
    {
      q: "Can I find a pregnancy doctor through social media?",
      a: "Yes, for discovery, but always verify credentials before booking.",
    },
    {
      q: "Does Dr. Priyanka offer antenatal care?",
      a: "Yes. The clinic lists antenatal services, pregnancy and birthing care and normal delivery.",
    },
    {
      q: "Does she manage high-risk pregnancies?",
      a: "Yes. Her website highlights high-risk pregnancy care.",
    },
    {
      q: "Does the clinic handle night emergencies?",
      a: "Please confirm emergency and delivery arrangements directly with the clinic.",
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
                Where to Find a Pregnancy Doctor in Moradabad: A Simple
                Step-by-Step Guide
              </h1>


              <p className="mb-4 text-gray-700">
                A positive pregnancy test brings joy, and then a very practical
                question: Which doctor should I see, and where do I find one? If
                you are new to Moradabad, expecting your first baby or unhappy
                with your current doctor, searching for the right pregnancy
                doctor can feel overwhelming.
              </p>


              <p className="mb-4 text-gray-700">
                This guide explains every reliable way to find a pregnancy
                doctor in Moradabad, how to shortlist and compare options, what
                to check before your first visit and how to book with Dr.
                Priyanka Gynaec. It is written to help you decide with
                confidence.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Which Doctor Should You Look For?
              </h2>


              <p className="mb-4 text-gray-700">
                Several types of doctors care for pregnant women. Knowing the
                terms makes your search easier.
              </p>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Obstetrician:</strong> A doctor who specialises in
                  pregnancy and childbirth
                </li>
                <li>
                  <strong>Gynaecologist:</strong> A doctor for women&apos;s
                  reproductive health, often trained in obstetrics as well
                </li>
                <li>
                  <strong>Obstetrician-gynaecologist (OB-GYN):</strong> Covers
                  both pregnancy care and women&apos;s health
                </li>
                <li>
                  <strong>High-risk pregnancy specialist:</strong> Handles
                  complicated pregnancies
                </li>
                <li>
                  <strong>Fertility specialist:</strong> Helps if conception has
                  been difficult or after IVF
                </li>
                <li>
                  <strong>Paediatrician:</strong> Cares for your newborn after
                  birth
                </li>
                <li>
                  <strong>Midwife or nurse:</strong> Supports antenatal care and
                  labour in some settings
                </li>
              </ul>


              <p className="text-gray-700">
                For most women, one qualified gynaecologist and obstetrician can
                manage the whole journey, from the first scan to delivery and
                postnatal care.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                When Should You Start Looking?
              </h2>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>As soon as your home pregnancy test is positive</li>
                <li>
                  Before 8–10 weeks, if possible, for the first scan and
                  baby&apos;s heartbeat check
                </li>
                <li>
                  Earlier if you have a history of miscarriage, diabetes, high
                  blood pressure, thyroid disease or fertility treatment
                </li>
                <li>
                  Immediately if you notice bleeding, severe pain or persistent
                  vomiting
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Why Early Booking Helps
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Confirms the pregnancy and its location</li>
                <li>Starts folic acid and vitamins on time</li>
                <li>Identifies risks early</li>
                <li>
                  Gives you time to choose a doctor calmly, not in an emergency
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Where to Find a Pregnancy Doctor: 10 Reliable Ways
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                1. Ask Family, Friends and Neighbours
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Women who have delivered recently can share honest experiences
                </li>
                <li>
                  Ask about the doctor&apos;s behaviour, waiting time and
                  delivery experience
                </li>
                <li>Ask what they liked and what they would change</li>
                <li>Personal recommendations are often the most trusted source</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                2. Search on Google Maps
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Type &quot;gynaecologist near me&quot; or &quot;pregnancy
                  doctor Moradabad&quot;
                </li>
                <li>Check distance, opening hours and recent photos</li>
                <li>Read detailed reviews, not only star ratings</li>
                <li>Note the clinic address and landmarks</li>
                <li>Use &quot;Call&quot; and &quot;Directions&quot; buttons to save time</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                3. Visit Clinic and Hospital Websites
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Read the About, Services and Contact pages</li>
                <li>
                  Look for antenatal care, delivery services and high-risk
                  pregnancy management
                </li>
                <li>Check for doctor qualifications and experience</li>
                <li>Look for contact numbers and appointment options</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                4. Use Doctor Listing and Booking Platforms
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Search by city, speciality and area</li>
                <li>
                  Compare qualifications, experience and fees where displayed
                </li>
                <li>Read verified patient reviews, when available</li>
                <li>Cross-check details with the clinic website</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                5. Check Social Media
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doctors and clinics often share patient education and updates
                  on Instagram and Facebook
                </li>
                <li>Look for consistent, informative posts</li>
                <li>
                  Check how the clinic responds to comments and messages
                </li>
                <li>
                  Be careful: social media is useful for discovery but not proof
                  of quality
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                6. Ask Your Family Physician or Other Doctors
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A general physician can refer you to a trusted gynaecologist
                </li>
                <li>
                  Lab and ultrasound centres often know which doctors are
                  experienced
                </li>
                <li>
                  A paediatrician can suggest obstetricians they work with
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                7. Consider Government Facilities
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  District women&apos;s hospitals and community or primary
                  health centres provide antenatal services
                </li>
                <li>
                  Free or low-cost scans, supplements and vaccinations may be
                  available
                </li>
                <li>
                  Registration with your local health worker or ASHA can help
                  you access schemes and benefits
                </li>
                <li>
                  Ask your local health centre for current services and timings
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                8. Check Your Health Insurance Network
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Some policies list network hospitals and doctors</li>
                <li>Maternity cover often has waiting periods</li>
                <li>
                  Check cashless options and pre-authorisation rules before
                  delivery planning
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                9. Look at Local Directories and Pharmacies
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Local pharmacies and diagnostic centres know active doctors in
                  the area
                </li>
                <li>Ask for names and then verify them online</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                10. Use WhatsApp and Phone Enquiries
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Message or call the shortlisted clinics</li>
                <li>
                  Ask about appointment availability, timings and consultation
                  approach
                </li>
                <li>
                  Pay attention to how politely and clearly the staff respond
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Shortlist: A Simple 5-Step Method
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 1: Collect 3–5 Names
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Use at least two sources, such as family recommendations and Google Maps</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 2: Check the Basics
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Qualifications and medical council registration</li>
                <li>Experience in antenatal care and delivery</li>
                <li>Distance from your home</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 3: Compare Services
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Antenatal check-ups and scans</li>
                <li>Normal delivery and caesarean care</li>
                <li>High-risk pregnancy management</li>
                <li>Postnatal and newborn care</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 4: Read Feedback Wisely
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Look for patterns across several reviews</li>
                <li>
                  Notice comments on listening, clarity and follow-up
                </li>
                <li>
                  Ignore reviews that look repetitive or exaggerated
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Step 5: Call or Visit
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask your questions</li>
                <li>Observe cleanliness, privacy and staff behaviour</li>
                <li>Decide how comfortable you feel</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What to Check Before You Choose
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Qualifications and Registration
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Postgraduate degree in obstetrics and gynaecology
                </li>
                <li>Medical council registration</li>
                <li>
                  Extra training in high-risk pregnancy, ultrasound or
                  laparoscopy
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Services Offered
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Regular antenatal check-ups</li>
                <li>Ultrasound and laboratory support</li>
                <li>Delivery arrangements and emergency plans</li>
                <li>Postnatal care and newborn vaccinations</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Facilities
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Comfortable, clean clinic with privacy</li>
                <li>
                  Imaging equipment, including 3D/4D ultrasound where relevant
                </li>
                <li>Clear emergency instructions</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Communication
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>The doctor listens without rushing</li>
                <li>Reports are explained in simple language</li>
                <li>Your partner and family are welcome</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Convenience
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Reasonable distance and travel time</li>
                <li>Appointment availability</li>
                <li>Phone or WhatsApp follow-up</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Red Flags When Searching
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A doctor who rushes consultations and ignores your questions
                </li>
                <li>
                  Pressure to choose caesarean without medical reasons
                </li>
                <li>
                  A very long list of tests for everyone without explanation
                </li>
                <li>No clear emergency plan</li>
                <li>
                  Unclear information about who will deliver your baby
                </li>
                <li>Pushy packages and unclear billing</li>
                <li>Fake-looking reviews or unrealistic promises</li>
                <li>No follow-up after delivery</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Questions to Ask When You Call a Clinic
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Do you provide complete antenatal care and delivery?</li>
                <li>Do you manage high-risk pregnancies?</li>
                <li>
                  What are your clinic timings and appointment process?
                </li>
                <li>
                  What is the consultation fee, and which scans or tests are
                  extra?
                </li>
                <li>
                  Who will deliver my baby, and what if the doctor is
                  unavailable?
                </li>
                <li>How do I contact you in an emergency?</li>
                <li>What newborn care support is available?</li>
                <li>Do you provide postnatal follow-up?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Dr. Priyanka Gynaec in Moradabad: One Option to Consider
              </h2>


              <p className="mb-4 text-gray-700">
                Here is what the clinic&apos;s website presents.
              </p>


              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Patient-first philosophy: &quot;Her Health First&quot; puts
                  your comfort and choices at the centre
                </li>
                <li>
                  Doctor: Dr. Priyanka Pachauri, known for antenatal and
                  postnatal care, high-risk pregnancies and safe-motherhood
                  focused care
                </li>
                <li>
                  Credentials mentioned on the website: Gold medal credentials
                  and international fellowships
                </li>
                <li>
                  Pregnancy services: Pregnancy &amp; Birthing Care, Antenatal
                  Services and Normal Delivery
                </li>
                <li>Imaging: 3D/4D ultrasound capability</li>
                <li>
                  Other services: Fertility and IVF, 3D laparoscopy and
                  gynaecological surgery, paediatric consultations and
                  vaccinations
                </li>
                <li>
                  Continuity of care: An integrated team that follows your
                  history across visits
                </li>
                <li>Contact options: Phone, WhatsApp and email</li>
                <li>
                  Location: A2, Near Old Roadways, Gandhi Nagar, Moradabad
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                What to Confirm Directly With the Clinic
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Clinic timings and appointment availability</li>
                <li>
                  Delivery and emergency arrangements, including nights
                </li>
                <li>Newborn care facilities</li>
                <li>Fees and insurance options</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Warning Signs: Do Not Delay Care While You Search
              </h2>


              <p className="mb-4 text-gray-700">
                Go to the nearest hospital immediately if you have:
              </p>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Heavy vaginal bleeding</li>
                <li>Severe abdominal pain</li>
                <li>Sudden severe headache with blurred vision</li>
                <li>Sudden swelling of the face or hands</li>
                <li>Fluid leaking from the vagina</li>
                <li>Reduced baby movements</li>
                <li>Fever with chills</li>
                <li>Seizures, fainting or chest pain</li>
              </ul>


              <p className="mt-4 text-gray-700">
                Searching for a doctor can wait. Emergencies cannot.
              </p>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                What Happens at Your First Pregnancy Visit?
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Conversation and History
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Date of your last period</li>
                <li>Previous pregnancies, miscarriages and surgeries</li>
                <li>Medical conditions and current medicines</li>
                <li>
                  Family history of diabetes, high blood pressure or twins
                </li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Examination
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Blood pressure, weight and general check-up</li>
                <li>Abdominal or pelvic examination if needed</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tests and Scans
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Pregnancy confirmation scan</li>
                <li>
                  Blood group, haemoglobin, thyroid and infection screening
                </li>
                <li>Urine tests</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Advice and Plan
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Folic acid and vitamins</li>
                <li>Diet and lifestyle guidance</li>
                <li>Schedule of future visits and scans</li>
                <li>Warning signs to remember</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How to Prepare for Your First Visit
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Gather Information
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>First day of your last period</li>
                <li>Symptoms and when they started</li>
                <li>Current medicines and supplements</li>
                <li>Allergies</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Bring Documents
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Previous scans and blood reports</li>
                <li>Old prescriptions</li>
                <li>Vaccination records</li>
                <li>Photo ID</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Prepare Your Questions
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Is my pregnancy progressing normally?</li>
                <li>Which tests and scans do I need?</li>
                <li>What should I eat and avoid?</li>
                <li>When should I call you urgently?</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Diet and Lifestyle Tips While You Search
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Nutritious Foods
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Leafy greens, lentils, beans and sprouts</li>
                <li>Milk, curd and paneer</li>
                <li>
                  Eggs, fish and lean meat if non-vegetarian and well cooked
                </li>
                <li>Seasonal fruits and vegetables</li>
                <li>Plenty of water</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Foods to Avoid or Limit
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Raw or undercooked meat, eggs and fish</li>
                <li>Unpasteurised milk</li>
                <li>Excess caffeine</li>
                <li>Alcohol and tobacco</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Healthy Habits
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Start folic acid as advised</li>
                <li>Walk gently if your doctor agrees</li>
                <li>Rest well and avoid stress</li>
                <li>Do not self-medicate</li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Special Situations
              </h2>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are New to Moradabad
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Ask your new neighbours and colleagues for recommendations</li>
                <li>Use Google Maps to find clinics near your home</li>
                <li>Transfer your previous medical records</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Travelling From Another Town
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Call first to confirm timings</li>
                <li>Carry all reports</li>
                <li>Ask whether tests can be done on the same day</li>
                <li>Plan your delivery arrangements early</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Are Changing Your Doctor
              </h3>
              <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
                <li>Collect your records and scans</li>
                <li>Explain your history clearly</li>
                <li>Do not delay care between doctors</li>
              </ul>


              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                If You Have a High-Risk Pregnancy
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Choose a doctor experienced in high-risk care</li>
                <li>
                  Ask about monitoring plans and emergency arrangements
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Myths About Finding a Pregnancy Doctor
              </h2>


              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Myth:</strong> The biggest hospital is always the best.{" "}
                  <strong>Fact:</strong> Care quality depends on the doctor, the
                  team and preparedness.
                </li>
                <li>
                  <strong>Myth:</strong> The most expensive doctor is the best.{" "}
                  <strong>Fact:</strong> Experience, ethics and communication
                  matter more than price.
                </li>
                <li>
                  <strong>Myth:</strong> You should wait until the third month
                  to see a doctor. <strong>Fact:</strong> Early care helps
                  detect problems and start supplements.
                </li>
                <li>
                  <strong>Myth:</strong> Reviews alone are enough.{" "}
                  <strong>Fact:</strong> Verify credentials and meet the doctor.
                </li>
                <li>
                  <strong>Myth:</strong> You cannot change your doctor.{" "}
                  <strong>Fact:</strong> You can, but do it early and carry your
                  records.
                </li>
              </ul>
            </section>


            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Book Your Appointment Today
              </h2>


              <p className="mb-4 text-gray-700">
                Once you have a shortlist, meeting the doctor is the best way to
                decide.
              </p>


              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Clinic</p>
                      <p>Dr. Priyanka Gynaec</p>
                    </div>
                  </div>


                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Phone / Appointments</p>
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


                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>
                        A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar
                        Pradesh – 244001
                      </p>
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
                Frequently Asked Questions (FAQ)
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
