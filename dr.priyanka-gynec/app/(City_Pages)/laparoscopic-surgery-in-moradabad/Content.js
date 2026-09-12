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

export default function LaparoscopicSurgeryMoradabad() {
  const faqs = [
    {
      q: "What is laparoscopic surgery?",
      a: "Laparoscopic surgery is a minimally invasive surgical technique performed through small incisions using a camera and specialized instruments.",
    },
    {
      q: "Is laparoscopic surgery better than open surgery?",
      a: "For appropriately selected patients, laparoscopic surgery may offer smaller incisions and a shorter recovery. However, open surgery may be more appropriate for certain conditions. The decision should be made by the surgeon based on the individual case.",
    },
    {
      q: "How long does laparoscopic surgery take?",
      a: "The duration depends on the procedure, the condition being treated, and the complexity of the case. Your surgeon can provide a more specific estimate after evaluation.",
    },
    {
      q: "How long is recovery after laparoscopic surgery?",
      a: "Recovery depends on the type of surgery and individual health. Some patients recover relatively quickly, while more complex procedures require additional time.",
    },
    {
      q: "Can ovarian cysts be removed through laparoscopy?",
      a: "Yes, selected ovarian cysts can be treated with laparoscopic cystectomy. Whether surgery is required and which approach is appropriate depends on the characteristics of the cyst and the patient's medical situation.",
    },
    {
      q: "Can fibroids be removed through laparoscopic surgery?",
      a: "Selected uterine fibroids can be removed using laparoscopic myomectomy. Suitability depends on the size, number, location of the fibroids, and other patient-specific factors.",
    },
    {
      q: "Can laparoscopic surgery treat endometriosis?",
      a: "Laparoscopy can be used to diagnose and surgically treat endometriosis in appropriate cases. The extent of surgery depends on the location and severity of the disease.",
    },
    {
      q: "Does laparoscopic surgery affect fertility?",
      a: "Some laparoscopic procedures are designed to preserve reproductive organs and may be appropriate for women who wish to maintain fertility. However, the effect on fertility depends on the underlying condition and the procedure performed.",
    },
    {
      q: "Is laparoscopic hysterectomy possible?",
      a: "Yes. In selected patients, hysterectomy can be performed laparoscopically. Your doctor will determine whether this approach is suitable based on your condition.",
    },
    {
      q: "How can I book a laparoscopic surgery consultation in Moradabad?",
      a: "You can contact Dr. Priyanka Gynaec in Gandhi Nagar, Moradabad, using the phone or WhatsApp number provided above. A consultation can help determine the diagnosis, available treatment options, and whether laparoscopic surgery is appropriate.",
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
                Laparoscopic Surgery in Moradabad – Advanced Minimally Invasive Gynaecological Care
              </h1>

              <p className="text-gray-700 mb-4">
                If you have been diagnosed with an ovarian cyst, uterine fibroid, endometriosis, or another gynaecological condition that may require surgery, your doctor may discuss laparoscopic surgery in Moradabad as one of the treatment options.
              </p>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery, commonly known as keyhole surgery, is a minimally invasive surgical technique that uses small abdominal incisions and a camera to allow the surgeon to view and treat conditions inside the abdomen and pelvis. Compared with conventional open surgery, laparoscopic procedures generally involve smaller incisions and may offer benefits such as less postoperative discomfort, smaller scars, and a quicker recovery for appropriately selected patients.
              </p>

              <p className="text-gray-700">
                Dr. Priyanka Pachauri provides gynaecological and obstetric care in Moradabad, including evaluation and treatment of several conditions for which laparoscopic surgery may be considered. The recommended procedure depends on the patient's diagnosis, medical history, fertility plans, and overall health.
              </p>
            </div>

            {/* Section 2 — What Is Laparoscopic Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                What Is Laparoscopic Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is a minimally invasive procedure performed through small incisions rather than one large abdominal incision.
              </p>

              <p className="text-gray-700 mb-4">
                During the procedure, a laparoscope — a thin instrument with a camera and light — is inserted through a small opening, usually in the abdomen. The camera provides a magnified view of the pelvic and abdominal organs on a monitor.
              </p>

              <p className="text-gray-700">
                Additional small incisions may be used to introduce specialized surgical instruments. Depending on the condition being treated, laparoscopic surgery can be used to remove abnormal tissue, treat disease, investigate unexplained symptoms, or perform procedures such as hysterectomy. The exact number and size of incisions vary according to the procedure.
              </p>
            </div>

            {/* Section 3 — Why Consider Laparoscopic Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Why Consider Laparoscopic Surgery?
              </h2>

              <p className="text-gray-700 mb-4">
                For suitable patients, minimally invasive surgery can provide several advantages over traditional open surgery.
              </p>

              <p className="text-gray-700 mb-4">
                Potential benefits may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Smaller surgical incisions</li>
                <li>Less visible scarring</li>
                <li>Reduced postoperative discomfort in many cases</li>
                <li>Shorter hospital stay for many procedures</li>
                <li>Earlier return to normal activities</li>
                <li>Lower wound-related problems compared with larger abdominal incisions</li>
                <li>Better visualization of pelvic structures during surgery</li>
              </ul>

              <p className="text-gray-700">
                However, laparoscopic surgery is not appropriate for every patient or every condition. Your surgeon will determine whether it is suitable after evaluating your medical history and diagnostic reports.
              </p>
            </div>

            {/* Section 4 — Gynaecological Conditions Treated */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Gynaecological Conditions That May Be Treated With Laparoscopy
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery can be used for a range of gynaecological conditions. The appropriate procedure depends on the diagnosis and individual circumstances.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    1. Ovarian Cyst Surgery
                  </h3>
                  <p className="text-gray-700">
                    Many ovarian cysts do not require surgery and may resolve on their own. Surgery may be considered when a cyst is persistent, large, symptomatic, or has other features that require further evaluation. Laparoscopic cystectomy involves removing the cyst while aiming to preserve as much healthy ovarian tissue as medically possible. For women who wish to have children in the future, fertility considerations are an important part of treatment planning.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    2. Laparoscopic Myomectomy for Fibroids
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Uterine fibroids are non-cancerous growths that can cause:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Heavy menstrual bleeding</li>
                    <li>Pelvic pressure</li>
                    <li>Abdominal discomfort</li>
                    <li>Painful periods</li>
                    <li>Frequent urination</li>
                    <li>Fertility problems in some women</li>
                  </ul>
                  <p className="text-gray-700">
                    When appropriate, laparoscopic myomectomy can be used to remove selected fibroids while retaining the uterus. Whether laparoscopic myomectomy is suitable depends on factors such as the size, number, and location of fibroids and the patient's overall medical condition.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    3. Endometriosis Surgery
                  </h3>
                  <p className="text-gray-700">
                    Endometriosis can cause pelvic pain, painful periods, pain during intercourse, and fertility difficulties. Laparoscopy may be used to diagnose and surgically treat endometriosis. Depending on the disease, surgery may involve removal or treatment of endometriosis lesions and adhesions. The extent of surgery depends on the location and severity of the disease.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    4. Laparoscopic Hysterectomy
                  </h3>
                  <p className="text-gray-700 mb-2">
                    A hysterectomy is a surgical procedure to remove the uterus. In selected patients, a laparoscopic hysterectomy may be an alternative to open abdominal surgery. It may be considered for certain conditions such as:
                  </p>
                  <ul className="text-gray-700 space-y-1 list-disc pl-5 mb-2">
                    <li>Symptomatic fibroids</li>
                    <li>Abnormal uterine bleeding</li>
                    <li>Adenomyosis</li>
                    <li>Certain uterine conditions</li>
                    <li>Other gynaecological conditions where hysterectomy is medically indicated</li>
                  </ul>
                  <p className="text-gray-700">
                    A hysterectomy permanently ends the ability to become pregnant, so alternatives and fertility considerations should be discussed before making a decision.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    5. Diagnostic Laparoscopy
                  </h3>
                  <p className="text-gray-700">
                    Sometimes imaging tests and clinical examination cannot identify the exact cause of persistent pelvic pain or fertility problems. Diagnostic laparoscopy allows the surgeon to directly examine the pelvic organs and look for conditions such as endometriosis, pelvic adhesions, abnormal pelvic anatomy, certain causes of pelvic pain, and other abnormalities that may not be clearly identified through routine investigations. If a treatable problem is identified, treatment may sometimes be performed during the same procedure, depending on the situation and prior consent.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    6. Laparoscopic Treatment for Pelvic Adhesions
                  </h3>
                  <p className="text-gray-700">
                    Pelvic adhesions are bands of scar tissue that may develop after previous surgery, infection, endometriosis, or other conditions. In selected cases, laparoscopic surgery can be used to identify and treat adhesions. The decision depends on the symptoms, cause, extent of adhesions, and potential benefits and risks of surgery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    7. Laparoscopic Sterilization
                  </h3>
                  <p className="text-gray-700">
                    Laparoscopic tubal sterilization is a permanent contraception procedure that prevents pregnancy by blocking or cutting the fallopian tubes. It is intended for women who are certain that they do not want future pregnancies. Because sterilization is considered permanent, patients should discuss alternatives and the implications of the procedure with their doctor before making a decision.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 — How Is Laparoscopic Surgery Performed */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How Is Laparoscopic Surgery Performed?
              </h2>

              <p className="text-gray-700 mb-4">
                Although each procedure is different, laparoscopic surgery generally involves several steps.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Step 1: Consultation and Evaluation
                  </h3>
                  <p className="text-gray-700">
                    Your doctor first reviews your symptoms, medical history, previous surgeries, medications, fertility plans, and diagnostic reports. Depending on the condition, investigations may include ultrasound, blood tests, MRI, or other examinations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Step 2: Surgical Planning
                  </h3>
                  <p className="text-gray-700">
                    Once the diagnosis is established, the surgeon explains the available treatment options. If laparoscopic surgery is suitable, you should receive information about the planned procedure, expected benefits, possible risks, alternative treatments, anesthesia, expected hospital stay, recovery, and follow-up care.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Step 3: Anesthesia
                  </h3>
                  <p className="text-gray-700">
                    Most major laparoscopic gynaecological procedures are performed under general anesthesia. This means you remain asleep during the operation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Step 4: Small Abdominal Incisions
                  </h3>
                  <p className="text-gray-700">
                    The surgeon creates small openings in the abdomen through which the laparoscope and surgical instruments can be introduced. Carbon dioxide gas is commonly used to gently expand the abdomen, creating space for visualization and surgical instruments.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Step 5: Surgical Procedure
                  </h3>
                  <p className="text-gray-700">
                    The surgeon views the internal organs through the camera and performs the planned procedure using specialized instruments. The exact surgical technique depends on whether the procedure involves a cyst, fibroid, endometriosis, uterus, adhesions, or another condition.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Step 6: Recovery and Discharge
                  </h3>
                  <p className="text-gray-700">
                    After surgery, you are monitored in the recovery area. Hospital stay varies according to the procedure, your health, and your recovery. Some laparoscopic procedures may allow discharge relatively quickly, while more complex operations may require a longer stay.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 — Laparoscopic Surgery vs Open Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Surgery vs Open Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic and open surgery are different surgical approaches. The appropriate method depends on the patient's condition and the procedure required.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Factor
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Laparoscopic Surgery
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Open Surgery
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Incisions
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Usually several small incisions
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Usually one larger incision
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Scarring
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Generally smaller scars
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Usually a larger scar
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Recovery
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Often shorter for suitable procedures
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Often longer
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Hospital Stay
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        May be shorter depending on procedure
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        May be longer
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Postoperative discomfort
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Often less for many patients
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Can be greater due to larger incision
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Surgical suitability
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        Depends on condition and surgeon assessment
                      </td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                        May be preferred for certain complex cases
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700">
                Laparoscopic surgery is not automatically better for every patient. In some circumstances, open surgery may provide the safest or most appropriate approach.
              </p>
            </div>

            {/* Section 7 — Is Laparoscopic Surgery Safe */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Is Laparoscopic Surgery Safe?
              </h2>

              <p className="text-gray-700 mb-4">
                Laparoscopic surgery is an established surgical technique, but like every operation, it has potential risks.
              </p>

              <p className="text-gray-700 mb-4">
                Possible complications can include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Bleeding</li>
                <li>Infection</li>
                <li>Injury to nearby organs</li>
                <li>Blood clots</li>
                <li>Reaction to anesthesia</li>
                <li>Damage to blood vessels</li>
                <li>Need to convert to open surgery in some cases</li>
              </ul>

              <p className="text-gray-700">
                The level of risk depends on the specific operation, the patient's health, and the complexity of the condition. Before surgery, your surgeon should explain the procedure-specific risks and benefits so you can make an informed decision.
              </p>
            </div>

            {/* Section 8 — Recovery After Laparoscopic Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Recovery After Laparoscopic Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Recovery varies significantly depending on the type and complexity of surgery.
              </p>

              <p className="text-gray-700 mb-4">
                Some patients can return to light daily activities relatively quickly, while more extensive procedures require additional recovery time.
              </p>

              <p className="text-gray-700 mb-4">
                General postoperative advice may include:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Take prescribed medicines as directed</li>
                <li>Keep incision areas clean according to medical instructions</li>
                <li>Start gentle movement as advised</li>
                <li>Avoid strenuous activity until your surgeon permits it</li>
                <li>Avoid heavy lifting during the recommended recovery period</li>
                <li>Attend scheduled follow-up appointments</li>
                <li>Maintain adequate hydration and nutrition</li>
              </ul>

              <p className="text-gray-700">
                Always follow the specific instructions provided by your surgical team rather than relying on a standard recovery timeline.
              </p>
            </div>

            {/* Section 9 — Warning Signs After Surgery */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Warning Signs After Surgery
              </h2>

              <p className="text-gray-700 mb-4">
                Contact your doctor or seek urgent medical attention if you develop concerning symptoms such as:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>High fever</li>
                <li>Severe or worsening abdominal pain</li>
                <li>Heavy bleeding</li>
                <li>Increasing redness or discharge from an incision</li>
                <li>Persistent vomiting</li>
                <li>Difficulty breathing</li>
                <li>Chest pain</li>
                <li>Severe weakness or fainting</li>
              </ul>

              <p className="text-gray-700 mt-4">
                Postoperative symptoms should be assessed according to their severity and your individual circumstances.
              </p>
            </div>

            {/* Section 10 — Laparoscopic Surgery and Fertility */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Surgery and Fertility
              </h2>

              <p className="text-gray-700">
                Fertility is an important consideration for many women undergoing gynaecological surgery. Some procedures, such as selected laparoscopic myomectomy or ovarian cyst surgery, may be performed with the intention of preserving reproductive organs and healthy tissue. However, fertility outcomes depend on the underlying condition, extent of disease, ovarian reserve, age, previous surgeries, and several other factors. If future pregnancy is important to you, discuss your fertility goals with your gynaecologist before surgery.
              </p>
            </div>

            {/* Section 11 — How to Choose a Laparoscopic Surgeon */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                How to Choose a Laparoscopic Surgeon in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Choosing a surgeon is an important part of your treatment decision.
              </p>

              <p className="text-gray-700 mb-4">
                Before undergoing laparoscopic surgery in Moradabad, consider:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Surgical Training
                  </h3>
                  <p className="text-gray-700">
                    Ask about the surgeon's qualifications, experience, and specific training in gynaecological laparoscopy.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Experience With Your Condition
                  </h3>
                  <p className="text-gray-700">
                    A surgeon's experience should be relevant to the specific condition being treated, whether it is fibroids, ovarian cysts, endometriosis, or another problem.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Hospital Facilities
                  </h3>
                  <p className="text-gray-700">
                    Consider the availability of anesthesia services, emergency support, laboratory facilities, postoperative monitoring, and other necessary hospital infrastructure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-gray-700">
                    Your doctor should explain the diagnosis, treatment options, potential risks, recovery expectations, and alternatives.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Individualized Treatment
                  </h3>
                  <p className="text-gray-700">
                    The treatment plan should be based on your medical condition rather than using the same procedure for every patient.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 — Laparoscopic Gynaecological Care in Moradabad */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Gynaecological Care in Moradabad
              </h2>

              <p className="text-gray-700 mb-4">
                Dr. Priyanka Pachauri provides gynaecological and obstetric consultation in Moradabad.
              </p>

              <p className="text-gray-700 mb-4">
                Laparoscopic treatment may be considered for appropriate patients with conditions such as fibroids, ovarian cysts, endometriosis, and other gynaecological problems.
              </p>

              <p className="text-gray-700 mb-4">
                Treatment planning focuses on understanding the patient's symptoms, diagnosis, reproductive goals, and overall health before deciding whether surgery is appropriate.
              </p>

              <p className="text-gray-700 mb-4">
                Depending on the patient's condition, consultation may cover:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5">
                <li>Laparoscopic gynaecological surgery</li>
                <li>Laparoscopic cystectomy</li>
                <li>Laparoscopic myomectomy</li>
                <li>Laparoscopic hysterectomy</li>
                <li>Endometriosis management</li>
                <li>Fibroid treatment</li>
                <li>Ovarian cyst evaluation</li>
                <li>Diagnostic laparoscopy</li>
                <li>Hysteroscopy and uterine cavity evaluation</li>
                <li>Fertility and infertility care</li>
                <li>Pregnancy and antenatal care</li>
              </ul>
            </div>

            {/* Section 13 — Consultation and Appointment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-900">
                Laparoscopic Surgery in Moradabad – Consultation and Appointment
              </h2>

              <p className="text-gray-700 mb-4">
                If you have been advised to undergo surgery for a fibroid, ovarian cyst, endometriosis, or another gynaecological condition, a specialist consultation can help you understand your treatment options.
              </p>

              <p className="text-gray-700 mb-4">
                During your consultation, bring previous:
              </p>

              <ul className="text-gray-700 space-y-2 list-disc pl-5 mb-4">
                <li>Ultrasound reports</li>
                <li>MRI or other imaging reports</li>
                <li>Blood test reports</li>
                <li>Previous surgery records</li>
                <li>Current medication details</li>
                <li>Relevant medical history</li>
              </ul>

              <p className="text-gray-700 mb-4">
                This information can help the doctor assess your condition and determine whether laparoscopic surgery may be appropriate.
              </p>

              <div className="bg-[#F8F4EA] text-black rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Clinic Address
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Clinic Address */}
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

            {/* Section 14 — FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif mb-6 text-gray-900">
                Frequently Asked Questions About Laparoscopic Surgery in Moradabad
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