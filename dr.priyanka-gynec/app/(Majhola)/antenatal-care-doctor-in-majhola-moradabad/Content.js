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

export default function AntenatalCareClinicInteriorDesign() {
  const faqs = [
    {
      q: "Why does clinic design matter for antenatal care?",
      a: "Comfort, privacy and easy access make long visits less tiring for patients.",
    },
    {
      q: "What seating suits a waiting area?",
      a: "Cushioned chairs with back support and armrests, at a height that is easy to rise from.",
    },
    {
      q: "Which flooring is safest?",
      a: "Non-slip, level flooring without loose mats or polished slippery finishes.",
    },
    {
      q: "Which materials suit a clinic?",
      a: "Washable, moisture-resistant surfaces, such as BWP plywood or HDHMR cabinets with sealed edges.",
    },
    {
      q: "Can furniture be made to measure?",
      a: "Yes. Modular reception counters, storage units and seating can be designed to fit your plan.",
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
                Antenatal Care Clinic Interior Design in Majhola, Moradabad:
                Comfort, Privacy and Safety
              </h1>

              <p className="mb-4 text-gray-700">
                Expectant mothers visit a clinic often, sometimes for long
                appointments. They may feel tired, anxious or uncomfortable on
                their feet. The design of the space can make each visit easier.
                Comfortable seating, short walking distances, clean surfaces and
                private rooms all matter.{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Space Build
                </a>{" "}
                supports clients with design planning and interior solutions,
                and this guide explains how to plan an antenatal care clinic in
                Majhola, Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Interior Design Matters Here
              </h2>

              <p className="mb-4 text-gray-700">
                Patients in this setting need extra comfort. Good design
                supports care without being part of the treatment.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Long waits are tiring, so seating must be supportive.</li>
                <li>Calm surroundings reduce anxiety.</li>
                <li>Short, step-free routes ease movement.</li>
                <li>Clean, tidy rooms build trust.</li>
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
                <li>Services offered and expected patients per day</li>
                <li>Number of consultation and scan rooms</li>
                <li>Staff size and roles</li>
                <li>Budget, timeline and available area</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Study the Premises
              </h2>

              <p className="mb-4 text-gray-700">
                Every space has strengths and limits. A ground-floor or
                lift-served location is far easier for expectant mothers.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Floor area, shape and entrance position</li>
                <li>Natural light and windows</li>
                <li>Existing plumbing, electrical and ventilation points</li>
                <li>Lift or stair access</li>
                <li>Rules set by the building owner or authority</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Plan the Patient Journey
              </h2>

              <p className="mb-4 text-gray-700">
                Map every step a patient takes. Keep distances short and routes
                clear.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Arrival and entrance</li>
                <li>Reception and registration</li>
                <li>Waiting</li>
                <li>Consultation and tests</li>
                <li>Billing, pharmacy and exit</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Entrance and Access
              </h2>

              <p className="mb-4 text-gray-700">
                Access should be easy for everyone, including patients with
                limited mobility.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A ramp or step-free approach</li>
                <li>A wide door with a smooth threshold</li>
                <li>Non-slip flooring at the entrance</li>
                <li>Handrails where steps cannot be avoided</li>
                <li>Clear, well-lit signage</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reception Design
              </h2>

              <p className="mb-4 text-gray-700">
                The reception sets the tone for the entire clinic visit.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A welcoming counter at a comfortable height</li>
                <li>A lower section for wheelchair users</li>
                <li>
                  Discreet registration so details are not overheard
                </li>
                <li>Neat storage for files and records</li>
                <li>Soft, subtle branding</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Waiting Area
              </h2>

              <p className="mb-4 text-gray-700">
                Waiting is often the longest part of a visit. Avoid crowding
                the area with too many seats.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Cushioned chairs with armrests and back support
                </li>
                <li>Seat height that is easy to rise from</li>
                <li>Enough space between chairs for comfort</li>
                <li>Soft lighting and calm colours</li>
                <li>Drinking water and washrooms nearby</li>
                <li>Space for companions and family members</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy by Design
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy is essential in a women&apos;s health setting.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation doors should not face the waiting area.
                </li>
                <li>Use solid or frosted partitions where needed.</li>
                <li>Keep sound from travelling outside rooms.</li>
                <li>
                  Place changing and examination zones out of line of sight.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Room Layout
              </h2>

              <p className="mb-4 text-gray-700">
                The room should feel calm and unhurried, with everything the
                doctor needs within easy reach.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A desk and chairs set for easy conversation</li>
                <li>Records and equipment within the doctor&apos;s reach</li>
                <li>A hand-wash basin placed conveniently</li>
                <li>Glare-free lighting</li>
                <li>Clear space around the examination couch</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Examination and Scan Areas
              </h2>

              <p className="mb-4 text-gray-700">
                Plan these areas with extra care. Confirm equipment sizes with
                suppliers before finalising layouts.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A screened space with hooks and a small seat</li>
                <li>Space for equipment and staff movement</li>
                <li>Dedicated power and data points</li>
                <li>Good ventilation and temperature control</li>
                <li>Door widths that allow wheelchairs and trolleys</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Washrooms
              </h2>

              <p className="mb-4 text-gray-700">
                Washrooms are used often, so plan them well and keep them easy
                to reach.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Close to the waiting area and easy to reach</li>
                <li>Non-slip floors and washable walls</li>
                <li>Grab bars and wheelchair-friendly space</li>
                <li>Good ventilation and lighting</li>
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
                  <strong>Walls:</strong> Washable paints or laminates.
                </li>
                <li>
                  <strong>Countertops:</strong> Non-porous surfaces that wipe
                  clean.
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
                Safety matters for patients who may be unsteady or tired.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Avoid polished or slippery floor finishes.</li>
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
                Colour changes how a space feels. Keep the palette simple,
                warm and consistent across the clinic.
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
                Lighting supports both patient comfort and clinical work.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Use natural light in waiting areas where possible.</li>
                <li>Choose even, glare-free ceiling lights in rooms.</li>
                <li>Add task lighting for examination.</li>
                <li>Use warm, soft light in reception.</li>
                <li>Provide backup lighting for power cuts.</li>
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
                  Add exhaust fans in washrooms and procedure areas.
                </li>
                <li>Shade windows facing strong afternoon sun.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Acoustics
              </h2>

              <p className="mb-4 text-gray-700">
                Quiet rooms protect private conversations and help patients
                feel relaxed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Soft finishes reduce echo.</li>
                <li>Solid partitions block sound better than thin ones.</li>
                <li>Door seals reduce leakage.</li>
                <li>
                  Keep noisy equipment away from consultation rooms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Modular Furniture
              </h2>

              <p className="mb-4 text-gray-700">
                Modular furniture suits clinics well because it can adapt as
                the practice grows.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Reception counters and seating made to measure</li>
                <li>Closed cabinets for supplies, records and consumables</li>
                <li>Wall-mounted units that keep floors easy to clean</li>
                <li>Soft-close drawers for quiet use</li>
                <li>
                  Units that can be added or changed as the clinic grows
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Storage Planning
              </h2>

              <p className="mb-4 text-gray-700">
                Good storage keeps the clinic tidy and helps staff work
                efficiently.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Separate areas for supplies, files and consumables</li>
                <li>Lockable cabinets for sensitive items</li>
                <li>Labelled shelves for quick access</li>
                <li>Tall units to use vertical space</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Electrical and Data Planning
              </h2>

              <p className="mb-4 text-gray-700">
                Clinics rely on power and connectivity. Mark all points before
                furniture and partitions are made.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Enough sockets in every room, placed safely</li>
                <li>Network and Wi-Fi for records and billing</li>
                <li>Backup power for key equipment</li>
                <li>Safe wiring that meets standards</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety and Approvals
              </h2>

              <p className="mb-4 text-gray-700">
                Healthcare spaces must meet safety expectations. Check current
                local requirements and confirm who handles approvals.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Fire exits and extinguishers</li>
                <li>Electrical safety and earthing</li>
                <li>Waste management arrangements</li>
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
                <li>Prioritise seating comfort, privacy and lighting.</li>
                <li>Keep a reserve for unexpected changes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Hard, uncomfortable waiting chairs</li>
                <li>Slippery flooring</li>
                <li>Consultation doors facing the waiting area</li>
                <li>Poor sound control</li>
                <li>Ignoring accessibility</li>
                <li>Skipping electrical and data planning</li>
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
                  <strong>Consultation:</strong> The team listens to your
                  needs, patient flow and budget.
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
                Contact Space Build — Antenatal Care Clinic Interior Design in
                Majhola, Moradabad
              </h2>

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Interior Partner</p>
                      <p>Space Build</p>
                      <p className="text-sm text-gray-600">
                        Interior design and clinic planning support
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
                      <p>
                        Majhola, Moradabad, Uttar Pradesh, India
                      </p>
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