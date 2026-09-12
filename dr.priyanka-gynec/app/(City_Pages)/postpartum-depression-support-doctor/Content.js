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
  Globe,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

export default function PostpartumDepressionMoradabad() {
  const faqs = [
    {
      q: "What is postpartum depression?",
      a: "Postpartum depression is a depressive condition that can occur after childbirth. It may cause persistent sadness, anxiety, loss of interest, guilt, hopelessness, difficulty functioning or problems with bonding.",
    },
    {
      q: "How is postpartum depression different from baby blues?",
      a: "Baby blues are generally milder and often improve within around two weeks. Postpartum depression can be more persistent or severe and may interfere with everyday life.",
    },
    {
      q: "When should I see a Postpartum Depression Support Doctor In Moradabad?",
      a: "If symptoms persist beyond two weeks, become severe, interfere with daily activities, or simply feel difficult to manage, it is appropriate to seek professional support.",
    },
    {
      q: "Can postpartum depression happen after a C-section?",
      a: "Yes. Postpartum depression can occur after either vaginal or C-section delivery.",
    },
    {
      q: "Can postpartum depression happen months after childbirth?",
      a: "Yes. Symptoms can develop later during the postpartum period, so emotional changes should not be ignored simply because several weeks or months have passed.",
    },
    {
      q: "Can postpartum anxiety occur without depression?",
      a: "Yes. Postpartum anxiety can occur on its own or alongside depression.",
    },
    {
      q: "Can postpartum depression be treated?",
      a: "Yes. Treatment depends on the individual's symptoms and may include psychological support, counselling, specialist mental health care, medication when appropriate, and follow-up.",
    },
    {
      q: "Does postpartum depression mean I am a bad mother?",
      a: "No. Postpartum depression is a health condition and is not a measure of a mother's love for her baby or her ability to be a good parent.",
    },
    {
      q: "What if I have thoughts of harming myself or my baby?",
      a: "Seek immediate emergency help. Do not wait for a routine appointment. Stay with a trusted person and contact local emergency services or go to the nearest emergency department.",
    },
    {
      q: "Can my family member come with me to the consultation?",
      a: "Yes. A trusted partner or family member can provide support, provided the mother is comfortable with their involvement.",
    },
    {
      q: "Where is the clinic located in Moradabad?",
      a: "Dr. Priyanka Gynaec is located at A2, Near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
    },
    {
      q: "How can I book a consultation?",
      a: "You can contact the clinic by phone or WhatsApp to enquire about appointment availability.",
    },
  ];

  return (
    <main className="bg-white">
      <Banner />

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 order-1">
            {/* Section 1 — Introduction */}
            <div className="mb-12">
              <h1 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Depression Support Doctor In Moradabad
              </h1>

              <p className="text-gray-700 mb-4">
                The weeks and months after childbirth can bring major physical and emotional changes. While some mood changes are common after delivery, persistent sadness, anxiety, hopelessness, excessive worry, difficulty bonding with the baby, or feeling unable to cope may need professional attention.
              </p>

              <p className="text-gray-700 mb-4">
                If you are searching for a Postpartum Depression Support Doctor In Moradabad, Dr. Priyanka Pachauri provides postnatal and gynaecological consultation for women experiencing emotional or physical concerns after childbirth.
              </p>

              <p className="text-gray-700">
                Postpartum depression is a recognised health condition. It is not a sign of weakness or a failure as a mother. With appropriate assessment and support, women can receive help that is suited to their individual symptoms and circumstances.
              </p>
            </div>

            {/* Section 2 — What Is Postpartum Depression */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Postpartum Depression?
              </h2>

              <p className="text-gray-700 mb-4">
                Postpartum depression (PPD) is a type of depression that can occur after childbirth. Symptoms may develop soon after delivery or later during the postpartum period.
              </p>

              <p className="text-gray-700 mb-4">
                Postpartum depression can affect women regardless of whether the pregnancy was planned, whether the delivery was vaginal or by C-section, or how much family support they have.
              </p>

              <p className="text-gray-700 mb-4">
                Possible symptoms include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Persistent sadness or low mood</li>
                <li>Feeling hopeless or emotionally overwhelmed</li>
                <li>Loss of interest in activities</li>
                <li>Excessive worry or anxiety</li>
                <li>Feeling guilty or like an inadequate mother</li>
                <li>Difficulty concentrating</li>
                <li>Changes in sleep or appetite</li>
                <li>Feeling disconnected from the baby</li>
                <li>Avoiding family or social interaction</li>
                <li>Severe fatigue or low energy</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Experiencing one difficult day does not necessarily mean that someone has postpartum depression. However, persistent, severe or worsening symptoms should be discussed with a healthcare professional.
              </p>
            </div>

            {/* Section 3 — Baby Blues Vs Postpartum Depression */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Baby Blues Vs Postpartum Depression
              </h2>

              <p className="text-gray-700 mb-4">
                Mood changes after childbirth are common, but baby blues and postpartum depression are not the same condition.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Baby Blues
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Baby blues may include:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Tearfulness</li>
                    <li>Irritability</li>
                    <li>Mood swings</li>
                    <li>Feeling overwhelmed</li>
                    <li>Increased sensitivity</li>
                    <li>Temporary anxiety</li>
                  </ul>
                  <p className="text-gray-700">
                    These symptoms commonly begin during the first days after childbirth and often improve within about two weeks.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Postpartum Depression
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Postpartum depression may involve:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Persistent sadness</li>
                    <li>Severe anxiety</li>
                    <li>Loss of interest</li>
                    <li>Feelings of hopelessness</li>
                    <li>Difficulty functioning normally</li>
                    <li>Significant guilt</li>
                    <li>Difficulty bonding with the baby</li>
                    <li>Symptoms that continue or become worse</li>
                  </ul>
                  <p className="text-gray-700">
                    If symptoms last beyond two weeks, are severe, or interfere with daily life, professional evaluation is recommended.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 — Symptoms To Watch For */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Depression Symptoms To Watch For
              </h2>

              <p className="text-gray-700 mb-4">
                Every woman's experience can be different. Some women may notice emotional symptoms first, while others may primarily experience anxiety, exhaustion or difficulty functioning.
              </p>

              <p className="text-gray-700 mb-4">
                Watch for symptoms such as:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Emotional Changes
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Persistent sadness</li>
                    <li>Frequent crying</li>
                    <li>Irritability</li>
                    <li>Feelings of guilt</li>
                    <li>Hopelessness</li>
                    <li>Feeling emotionally numb</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Anxiety And Worry
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Constant worry about the baby</li>
                    <li>Fear that something bad will happen</li>
                    <li>Difficulty relaxing</li>
                    <li>Panic symptoms</li>
                    <li>Repeatedly checking on the baby because of overwhelming fear</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Changes In Daily Functioning
                  </h3>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5">
                    <li>Difficulty completing normal activities</li>
                    <li>Loss of interest in usual activities</li>
                    <li>Problems concentrating</li>
                    <li>Changes in eating patterns</li>
                    <li>Difficulty sleeping even when the baby is sleeping</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Mother-Baby Bonding Difficulties
                  </h3>
                  <p className="text-gray-700">
                    Some mothers may feel emotionally disconnected from their baby or may worry that they are not experiencing the feelings they expected. This does not mean that a mother does not love her baby. It can be a symptom that deserves support and professional attention.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — Postpartum Depression Support Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Depression Support Doctor In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                A Postpartum Depression Support Doctor In Moradabad can help a new mother understand whether her symptoms may require further assessment or specialist mental health support.
              </p>

              <p className="text-gray-700 mb-4">
                During a consultation, the doctor may discuss:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Emotional wellbeing after delivery</li>
                <li>Sleep and appetite</li>
                <li>Anxiety and mood changes</li>
                <li>Previous mental health concerns</li>
                <li>Pregnancy and delivery history</li>
                <li>Current medications</li>
                <li>Physical recovery after childbirth</li>
                <li>Support available at home</li>
                <li>Concerns about caring for the baby</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The purpose of the consultation is to understand the woman's overall situation and identify appropriate next steps.
              </p>
            </div>

            {/* Section 6 — Postpartum Depression Treatment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Depression Treatment In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Treatment for postpartum depression depends on the severity of symptoms and the individual's circumstances.
              </p>

              <p className="text-gray-700 mb-4">
                Support may involve:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Regular follow-up</li>
                <li>Psychological counselling or therapy through an appropriate mental health professional</li>
                <li>Support from family or trusted people</li>
                <li>Practical help with rest and daily responsibilities</li>
                <li>Referral to a psychiatrist or psychologist when needed</li>
                <li>Medication when prescribed by an appropriate healthcare professional</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Not every woman needs the same type of treatment. A doctor can help determine whether symptoms require monitoring, counselling, specialist referral or another form of care.
              </p>
            </div>

            {/* Section 7 — Postnatal Depression Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postnatal Depression Doctor In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                The terms postpartum depression and postnatal depression are often used to describe depression occurring after childbirth.
              </p>

              <p className="text-gray-700 mb-4">
                Women experiencing persistent emotional difficulties after delivery can discuss their symptoms during a postnatal or gynaecological consultation.
              </p>

              <p className="text-gray-700">
                It is important not to ignore symptoms simply because they are occurring after childbirth. Emotional health is an important part of postpartum recovery.
              </p>
            </div>

            {/* Section 8 — Postpartum Anxiety And Depression */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Anxiety And Depression
              </h2>

              <p className="text-gray-700 mb-4">
                Postpartum anxiety can occur with postpartum depression or independently.
              </p>

              <p className="text-gray-700 mb-4">
                A new mother may experience:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Excessive worry</li>
                <li>Racing thoughts</li>
                <li>Fear about the baby's health</li>
                <li>Difficulty sleeping because of worry</li>
                <li>Restlessness</li>
                <li>Panic symptoms</li>
                <li>Constantly expecting something bad to happen</li>
              </ul>

              <p className="text-gray-700 mt-4">
                If anxiety becomes difficult to manage or interferes with daily life, professional support can be helpful.
              </p>
            </div>

            {/* Section 9 — Who Is More Likely To Experience PPD */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Who Is More Likely To Experience Postpartum Depression?
              </h2>

              <p className="text-gray-700 mb-4">
                Postpartum depression can affect any mother. Certain circumstances may increase the likelihood of experiencing emotional difficulties.
              </p>

              <p className="text-gray-700 mb-4">
                Possible risk factors include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Previous depression or anxiety</li>
                <li>Depression during pregnancy</li>
                <li>Previous postpartum depression</li>
                <li>Difficult or traumatic childbirth</li>
                <li>Limited social or family support</li>
                <li>Major life stress</li>
                <li>Sleep deprivation</li>
                <li>Breastfeeding difficulties</li>
                <li>Complications involving the mother or baby</li>
                <li>Significant adjustment difficulties after childbirth</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Having a risk factor does not mean that a woman will definitely develop postpartum depression.
              </p>
            </div>

            {/* Section 10 — Can PPD Start Months After Delivery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Postpartum Depression Start Months After Delivery?
              </h2>

              <p className="text-gray-700 mb-4">
                Yes. Symptoms do not necessarily appear immediately after childbirth.
              </p>

              <p className="text-gray-700 mb-4">
                A mother may initially feel that she is coping well and later begin experiencing persistent sadness, anxiety, withdrawal or difficulty functioning.
              </p>

              <p className="text-gray-700">
                For this reason, emotional wellbeing should continue to receive attention during the postpartum period. If something feels significantly different from your usual emotional state, discussing it with a healthcare professional can help clarify what is happening.
              </p>
            </div>

            {/* Section 11 — How Is PPD Evaluated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Postpartum Depression Evaluated?
              </h2>

              <p className="text-gray-700 mb-4">
                There is no single conversation that can diagnose every emotional problem after childbirth.
              </p>

              <p className="text-gray-700 mb-4">
                A healthcare professional may ask about:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Mood</li>
                <li>Anxiety</li>
                <li>Sleep</li>
                <li>Appetite</li>
                <li>Energy levels</li>
                <li>Concentration</li>
                <li>Feelings toward the baby</li>
                <li>Ability to manage daily activities</li>
                <li>Previous mental health history</li>
                <li>Thoughts of self-harm or harm to the baby</li>
              </ul>

              <p className="text-gray-700 mt-4">
                A validated screening questionnaire may also be used as part of an assessment. Screening tools can help identify women who may need further evaluation, but they do not replace a complete clinical assessment.
              </p>
            </div>

            {/* Section 12 — When Should You See A Doctor */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Should You See A Doctor?
              </h2>

              <p className="text-gray-700 mb-4">
                Consider seeking professional support if:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Low mood continues for more than two weeks</li>
                <li>Anxiety becomes difficult to control</li>
                <li>You feel persistently overwhelmed</li>
                <li>You have difficulty caring for yourself</li>
                <li>You feel disconnected from your baby</li>
                <li>You have lost interest in things you normally enjoy</li>
                <li>You feel hopeless or excessively guilty</li>
                <li>Symptoms are affecting relationships or everyday activities</li>
                <li>You are unsure whether your feelings are normal after childbirth</li>
              </ul>

              <p className="text-gray-700 mt-4">
                You do not need to wait until symptoms become severe before discussing them with a healthcare professional.
              </p>
            </div>

            {/* Section 13 — When Urgent Help Is Needed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                When Postpartum Mental Health Needs Urgent Help
              </h2>

              <p className="text-gray-700 mb-4">
                Certain symptoms require immediate attention.
              </p>

              <p className="text-gray-700 mb-4">
                Seek urgent medical or emergency help if a mother:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Has thoughts of suicide or self-harm</li>
                <li>Has thoughts of harming the baby</li>
                <li>Feels unable to keep herself or the baby safe</li>
                <li>Experiences hallucinations</li>
                <li>Becomes severely confused or disoriented</li>
                <li>Experiences extreme agitation or unusual behaviour</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Do not wait for a routine appointment in these situations. If there is an immediate danger, contact local emergency services or go to the nearest emergency department.
              </p>
            </div>

            {/* Section 14 — Supporting A Mother With PPD */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Supporting A Mother With Postpartum Depression
              </h2>

              <p className="text-gray-700 mb-4">
                Family members and partners can play an important role.
              </p>

              <p className="text-gray-700 mb-4">
                Helpful approaches include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Listen without judgement</li>
                <li>Take her concerns seriously</li>
                <li>Help with household responsibilities</li>
                <li>Offer practical childcare support</li>
                <li>Encourage professional help</li>
                <li>Help her attend appointments</li>
                <li>Give her opportunities to rest</li>
                <li>Avoid statements such as "you should be happy because you have a baby"</li>
                <li>Avoid comparing her experience with another mother's experience</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The goal is not to force someone to "think positively." The goal is to provide practical and emotional support while appropriate professional care is arranged.
              </p>
            </div>

            {/* Section 15 — Self-Care During Postpartum */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Self-Care During The Postpartum Period
              </h2>

              <p className="text-gray-700 mb-4">
                Self-care cannot replace professional treatment when postpartum depression is present, but basic support can help with recovery and overall wellbeing.
              </p>

              <p className="text-gray-700 mb-4">
                Where possible:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Rest when opportunities are available</li>
                <li>Accept practical help from trusted people</li>
                <li>Eat regular nutritious meals</li>
                <li>Stay hydrated</li>
                <li>Take short walks when medically appropriate</li>
                <li>Maintain contact with supportive family or friends</li>
                <li>Attend postnatal appointments</li>
                <li>Talk openly about emotional difficulties</li>
                <li>Follow prescribed treatment and follow-up recommendations</li>
              </ul>

              <p className="text-gray-700 mt-4">
                New mothers should not be expected to recover physically and emotionally without support.
              </p>
            </div>

            {/* Section 16 — PPD And Breastfeeding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Depression And Breastfeeding
              </h2>

              <p className="text-gray-700 mb-4">
                Some mothers worry about how emotional difficulties or treatment may affect breastfeeding.
              </p>

              <p className="text-gray-700 mb-4">
                Breastfeeding decisions and medication choices should be discussed individually with the treating healthcare professional.
              </p>

              <p className="text-gray-700">
                Do not stop prescribed medication or begin a new medicine without discussing it with your doctor. The mother's mental and physical health are both important considerations during postpartum care.
              </p>
            </div>

            {/* Section 17 — PPD And Mother-Baby Bonding */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Can Postpartum Depression Affect Mother-Baby Bonding?
              </h2>

              <p className="text-gray-700 mb-4">
                Postpartum depression may make bonding feel difficult for some mothers. A mother may feel guilty because she does not experience the emotions she expected to feel immediately.
              </p>

              <p className="text-gray-700">
                This does not mean she is a bad mother. With appropriate support and treatment, the mother can work through these difficulties while continuing to care for herself and her baby.
              </p>
            </div>

            {/* Section 18 — Why Early Support Matters */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Early Support Matters
              </h2>

              <p className="text-gray-700 mb-4">
                Many women hesitate to discuss emotional symptoms after childbirth because they are worried about being judged.
              </p>

              <p className="text-gray-700 mb-4">
                However, asking for help is an important part of healthcare. Early discussion can help:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Identify concerning symptoms</li>
                <li>Distinguish baby blues from possible depression</li>
                <li>Identify anxiety or other mental health concerns</li>
                <li>Connect the mother with appropriate professional support</li>
                <li>Create a follow-up plan</li>
                <li>Involve trusted family members when the mother is comfortable</li>
              </ul>

              <p className="text-gray-700 mt-4">
                You do not have to wait until you are unable to cope before asking for help.
              </p>
            </div>

            {/* Section 19 — Postpartum Depression Support In Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Postpartum Depression Support In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Women in Moradabad who are experiencing emotional difficulties after childbirth can seek a postnatal consultation to discuss their symptoms.
              </p>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecology and postnatal care in Moradabad. During a consultation, women can discuss emotional wellbeing alongside physical recovery after pregnancy and delivery.
              </p>

              <p className="text-gray-700">
                When specialist mental health care is appropriate, referral to a qualified mental health professional may be recommended.
              </p>
            </div>

            {/* Section 20 — Why Choose Dr. Priyanka */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Choose Dr. Priyanka For Postnatal Care?
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecological and postnatal consultations in Moradabad.
              </p>

              <p className="text-gray-700 mb-4">
                Women can discuss concerns related to:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Postpartum depression</li>
                <li>Postpartum anxiety</li>
                <li>Postnatal recovery</li>
                <li>Breastfeeding-related concerns</li>
                <li>Menstrual changes after delivery</li>
                <li>Pregnancy recovery</li>
                <li>Contraception after delivery</li>
                <li>General women's health</li>
              </ul>

              <p className="text-gray-700 mt-4">
                The appropriate care depends on the symptoms and individual medical history.
              </p>
            </div>

            {/* Section 21 — Book A Consultation */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Book A Postpartum Depression Consultation In Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                If you are looking for a Postpartum Depression Doctor In Moradabad or need support with emotional changes after childbirth, discussing your symptoms with a healthcare professional is an important first step.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Dr. Priyanka Gynaec</p>
                      <p className="text-black">
                        A2, Near Old Roadways, Gandhi Nagar,
                        Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-black mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Contact Us</p>

                      <div className="flex items-center gap-3 text-black">
                        <a href="tel:9079765578" className="hover:underline">
                          +91 90797 65578
                        </a>

                        <span className="text-gray-400">|</span>

                        <a href="tel:8979670705" className="hover:underline">
                          +91 8979670705 (WhatsApp)
                        </a>
                      </div>

                      <div className="mt-2">
                        <Mail size={18} className="inline mr-2 text-black" />
                        <a
                          href="mailto:drpriyankagynec@gmail.com"
                          className="hover:underline"
                        >
                          drpriyankagynec@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  You can contact the clinic to enquire about a postnatal or gynaecological consultation.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                      <Phone className="inline mr-2" size={18} />
                      Contact Us
                    </button>
                  </Link>

                  <Link href="/services">
                    <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e181b5] transition">
                      Explore Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 22 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="border border-gray-200 rounded-lg p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] xl:w-[420px] order-2">
            <div className="lg:sticky lg:top-28 space-y-6">
              <LandingEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}