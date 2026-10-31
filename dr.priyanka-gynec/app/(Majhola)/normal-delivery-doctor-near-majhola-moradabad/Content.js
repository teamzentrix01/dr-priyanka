
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

export default function MaternityDeliveryRoomInteriorDesign() {
  const faqs = [
    {
      q: "Why is interior design important in a maternity unit?",
      a: "It supports comfort, privacy, hygiene and quick staff movement.",
    },
    {
      q: "Which materials suit a maternity clinic?",
      a: "Washable, moisture-resistant and non-porous surfaces, such as BWP plywood or HDHMR cabinets with sealed edges.",
    },
    {
      q: "How wide should doors be?",
      a: "Wide enough for beds, stretchers and wheelchairs. Confirm exact sizes with your medical team.",
    },
    {
      q: "Which flooring is safest?",
      a: "Non-slip, level flooring without loose mats.",
    },
    {
      q: "Can furniture be made to measure?",
      a: "Yes. Modular counters, storage units and seating can be designed to fit your plan.",
    },
    {
      q: "Which colours feel calm?",
      a: "Soft whites, creams, pale greens and gentle pastels.",
    },
    {
      q: "Will I see the design before work starts?",
      a: "Yes. Space Build shares a 3D preview for approval before production.",
    },
    {
      q: "How can I book a consultation with Space Build?",
      a: "Visit spacebuild.co.in and share your requirements to schedule a visit.",
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
                Maternity and Delivery Room Interior Design in Majhola,
                Moradabad: Calm, Clean and Safe Spaces
              </h1>

              <p className="mb-4 text-gray-700">
                A maternity unit serves patients at one of the most important
                moments of their lives. The space must feel calm, private and
                safe for the mother and her family, while allowing medical staff
                to move quickly and work without obstruction. Good interior
                planning supports both needs.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                supports clients with design planning and interior solutions,
                and this guide explains how to plan a maternity clinic or
                nursing home interior in Majhola, Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Design Matters in a Maternity Unit
              </h2>

              <p className="mb-4 text-gray-700">
                The interior shapes comfort, safety and workflow. Design
                supports care, even though it is not part of the treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Calm surroundings ease anxiety for patients and families.
                </li>
                <li>Clean, tidy rooms build trust.</li>
                <li>Clear routes help staff respond quickly.</li>
                <li>Private rooms protect dignity.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Start with a Clear Brief
              </h2>

              <p className="mb-4 text-gray-700">
                A brief guides every decision. Write these points down before
                meeting a designer.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Number of beds, labour rooms and consultation rooms
                </li>
                <li>Services offered and expected patient load</li>
                <li>Staff size and shifts</li>
                <li>Budget, timeline and available area</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Study the Premises
              </h2>

              <p className="mb-4 text-gray-700">
                Every building has strengths and limits. Ground-floor or
                lift-served spaces are far easier for patients and staff.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Floor area, shape and entrance position</li>
                <li>
                  Lift or ramp access for stretchers and wheelchairs
                </li>
                <li>Natural light and windows</li>
                <li>Existing plumbing, electrical and ventilation points</li>
                <li>Rules set by the building owner or authority</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Plan the Patient Journey
              </h2>

              <p className="mb-4 text-gray-700">
                Map each step from entry to discharge. Keep routes short, clear
                and free of obstruction.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Arrival and entrance</li>
                <li>Reception and registration</li>
                <li>Waiting</li>
                <li>Consultation and examination</li>
                <li>Labour and delivery areas</li>
                <li>Recovery rooms</li>
                <li>Billing and discharge</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Entrance and Access
              </h2>

              <p className="mb-4 text-gray-700">
                Access should be easy in urgent and calm situations alike.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A wide, step-free entrance</li>
                <li>Space for stretchers and wheelchairs</li>
                <li>Non-slip flooring at the entrance</li>
                <li>Clear, well-lit signage</li>
                <li>
                  A covered approach for vehicles where possible
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reception and Waiting Area
              </h2>

              <p className="mb-4 text-gray-700">
                The first space visitors see should feel organised and
                welcoming.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A welcoming reception counter at a comfortable height
                </li>
                <li>
                  Discreet registration so details are not overheard
                </li>
                <li>
                  Comfortable chairs with armrests and back support
                </li>
                <li>Soft lighting and calm colours</li>
                <li>Space for family members to wait together</li>
                <li>Drinking water and washrooms nearby</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy by Design
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy is essential in maternity care. The layout should
                protect dignity while allowing staff to work efficiently.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Doors should not open directly onto public areas.
                </li>
                <li>Use solid or frosted partitions where needed.</li>
                <li>Keep sound from travelling outside rooms.</li>
                <li>Use curtains or screens in shared spaces.</li>
                <li>
                  Position beds out of line of sight from corridors.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation and Examination Rooms
              </h2>

              <p className="mb-4 text-gray-700">
                These rooms should feel calm and unhurried, with clinical needs
                supported by thoughtful planning.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A desk and chairs arranged for easy conversation
                </li>
                <li>Examination couch with clear space around it</li>
                <li>A hand-wash basin placed conveniently</li>
                <li>Storage for supplies within reach</li>
                <li>Glare-free lighting</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Labour and Delivery Rooms
              </h2>

              <p className="mb-4 text-gray-700">
                These rooms need careful planning with the medical team. Confirm
                equipment sizes and requirements with the medical team and
                suppliers before finalising layouts.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Enough space for staff, equipment and family where permitted
                </li>
                <li>Easy movement around the bed</li>
                <li>Dedicated power points and good ventilation</li>
                <li>Wide doors for beds and trolleys</li>
                <li>
                  Soft, adjustable lighting along with clinical lighting
                </li>
                <li>Easy-to-clean walls, floors and surfaces</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Recovery and Patient Rooms
              </h2>

              <p className="mb-4 text-gray-700">
                Comfort helps recovery. Rooms should support rest while remaining
                practical for nursing care.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Supportive beds and a comfortable visitor chair</li>
                <li>Storage for belongings</li>
                <li>A bedside table and wall-mounted lighting</li>
                <li>An attached or nearby washroom</li>
                <li>Good ventilation and temperature control</li>
                <li>Quiet finishes that reduce noise</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Newborn Care Area
              </h2>

              <p className="mb-4 text-gray-700">
                Plan this area for cleanliness and calm. Follow medical guidance
                on equipment and layout.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A clean, well-ventilated corner for newborn care
                </li>
                <li>Easy-to-clean counters and storage</li>
                <li>Soft lighting without glare</li>
                <li>Safe, stable surfaces</li>
                <li>Space for staff to work comfortably</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Nursing Station
              </h2>

              <p className="mb-4 text-gray-700">
                The nursing station is the working centre of the unit and should
                support observation, communication and documentation.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Placed with a clear view of corridors and rooms
                </li>
                <li>
                  Enough counter space for records and monitors
                </li>
                <li>
                  Storage for medicines and supplies, with lockable units
                </li>
                <li>Easy access to patient rooms</li>
                <li>
                  Good lighting and comfortable seating for staff
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Washrooms
              </h2>

              <p className="mb-4 text-gray-700">
                Washrooms must be safe and easy to use for patients, attendants
                and staff.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Non-slip floors and washable walls</li>
                <li>Grab bars and space for assistance</li>
                <li>Good ventilation and lighting</li>
                <li>Easy access from rooms and waiting areas</li>
                <li>Proper waste disposal</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hygiene-Friendly Materials
              </h2>

              <p className="mb-4 text-gray-700">
                Surfaces should be tough, smooth and simple to clean.
                Moradabad has hot summers, a humid monsoon and cool, foggy
                winters, so durable materials age better.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Flooring:</strong> Non-slip, seamless or tightly
                  jointed options.
                </li>
                <li>
                  <strong>Walls:</strong> Washable paints or laminates that
                  resist stains.
                </li>
                <li>
                  <strong>Countertops:</strong> Non-porous surfaces that wipe
                  clean easily.
                </li>
                <li>
                  <strong>Cabinets:</strong> BWP plywood or HDHMR with sealed
                  edges for moisture resistance.
                </li>
                <li>
                  <strong>Hardware:</strong> Anti-rust fittings for humid
                  weather.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safe Flooring and Edges
              </h2>

              <p className="mb-4 text-gray-700">
                Safety matters for patients who may be unsteady, as well as for
                staff moving beds and equipment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Avoid slippery finishes.</li>
                <li>Keep floors level, with no loose mats.</li>
                <li>Use rounded corners on counters and furniture.</li>
                <li>Keep walkways clear of cables and clutter.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Colours and Mood
              </h2>

              <p className="mb-4 text-gray-700">
                Colour changes how a space feels. Keep the palette calm,
                consistent and easy to maintain.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Soft whites, creams and pale greens feel clean and calm.
                </li>
                <li>Gentle pastels add warmth.</li>
                <li>Wood textures bring a welcoming touch.</li>
                <li>Avoid harsh or very dark shades.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lighting Design
              </h2>

              <p className="mb-4 text-gray-700">
                Lighting supports comfort and clinical work. Plan both general
                and task lighting from the beginning.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Use natural light in waiting areas where possible.</li>
                <li>Choose even, glare-free ceiling lights.</li>
                <li>Add task lighting where examination is done.</li>
                <li>
                  Provide soft, dimmable lighting in patient rooms.
                </li>
                <li>
                  Arrange reliable backup lighting for power cuts.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ventilation and Cooling
              </h2>

              <p className="mb-4 text-gray-700">
                Fresh, cool air is important for patient comfort and hygiene.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Plan air-conditioning and ducting early.</li>
                <li>Allow cross ventilation where possible.</li>
                <li>
                  Add exhaust in washrooms and procedure areas.
                </li>
                <li>Shade windows facing strong afternoon sun.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Acoustics
              </h2>

              <p className="mb-4 text-gray-700">
                Quiet spaces support rest and privacy for mothers, newborns and
                families.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Soft finishes reduce echo.</li>
                <li>Solid partitions block sound better than thin ones.</li>
                <li>Door seals reduce leakage.</li>
                <li>
                  Keep noisy equipment away from patient rooms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Modular Furniture and Storage
              </h2>

              <p className="mb-4 text-gray-700">
                Modular units suit healthcare spaces well because they can adapt
                as the unit grows.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reception counters and seating made to measure
                </li>
                <li>
                  Closed cabinets for supplies, records and consumables
                </li>
                <li>Wall-mounted units that keep floors easy to clean</li>
                <li>Soft-close drawers for quiet use</li>
                <li>
                  Units that can be added or changed as the unit grows
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Electrical, Data and Safety
              </h2>

              <p className="mb-4 text-gray-700">
                Healthcare spaces depend on reliable power and safety. Check
                current local requirements and confirm who handles approvals.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Enough sockets in every room, placed safely</li>
                <li>Backup power for key equipment</li>
                <li>Network coverage for records and billing</li>
                <li>Fire exits, extinguishers and electrical earthing</li>
                <li>Permissions from the building owner or authorities</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Budget Planning
              </h2>

              <p className="mb-4 text-gray-700">
                Costs depend on size, materials and finishes. Ask for an
                itemised quotation to compare offers fairly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Spend more on hygiene-friendly surfaces and hardware.
                </li>
                <li>Keep decorative items simple.</li>
                <li>
                  Prioritise privacy, lighting and safety before extras.
                </li>
                <li>Keep a reserve for unexpected changes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Narrow doors that block beds and trolleys</li>
                <li>Slippery flooring</li>
                <li>Poor sound control</li>
                <li>Weak privacy between rooms</li>
                <li>Skipping electrical and backup planning</li>
                <li>Choosing hard-to-clean finishes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Space Build Supports Your Project
              </h2>

              <p className="mb-4 text-gray-700">
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                follows a clear, step-by-step approach from consultation to
                handover.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  <strong>Consultation:</strong> The team listens to your needs,
                  patient flow and budget.
                </li>
                <li>
                  <strong>Site Measurement:</strong> Exact dimensions of walls,
                  doors, windows and services are recorded.
                </li>
                <li>
                  <strong>Design and 3D Preview:</strong> You see the layout
                  with colours and finishes in advance.
                </li>
                <li>
                  <strong>Itemised Quotation:</strong> Materials, hardware and
                  extras are listed clearly.
                </li>
                <li>
                  <strong>Production:</strong> Units are made with precise
                  machinery and quality checks.
                </li>
                <li>
                  <strong>Installation:</strong> Skilled fitters complete the
                  work neatly.
                </li>
                <li>
                  <strong>Handover:</strong> Every drawer, hinge and light is
                  tested.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Choose Space Build
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Designs planned around real working needs</li>
                <li>Materials selected to suit local weather</li>
                <li>Honest pricing and timely delivery</li>
                <li>Careful attention to detail</li>
                <li>Support that continues after handover</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Contact Space Build — Maternity Interior Design in Majhola,
                Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Interior Partner</p>
                      <p>Space Build</p>
                      <p className="text-sm text-gray-600">
                        Healthcare interior planning and maternity unit design
                        support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+919927611780"
                        className="hover:underline"
                      >
                        +91 99276 11780
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Call</p>
                      <a
                        href="tel:+918077973797"
                        className="hover:underline"
                      >
                        +91 80779 73797
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:spacebuild.india@gmail.com"
                        className="break-all hover:underline"
                      >
                        spacebuild.india@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p>Majhola, Moradabad, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://www.spacebuild.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        www.spacebuild.co.in
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
