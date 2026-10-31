
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

export default function GynaecologistClinicInteriorDesign() {
  const faqs = [
    {
      q: "Why is privacy so important in a gynaecologist clinic design?",
      a: "Patients share sensitive details, so layout, doors and sound control must protect their comfort.",
    },
    {
      q: "Which materials suit a clinic interior?",
      a: "Washable, moisture-resistant and non-porous surfaces, such as BWP plywood or HDHMR cabinets with sealed edges.",
    },
    {
      q: "How big should the waiting area be?",
      a: "It depends on daily patient numbers, but seating should never feel crowded.",
    },
    {
      q: "Can furniture be made to measure for a clinic?",
      a: "Yes. Modular reception counters, storage units and seating can be designed to fit your plan.",
    },
    {
      q: "Which colours work best for a women&apos;s clinic?",
      a: "Soft whites, creams, pale greens and gentle pastels create a calm, clean feel.",
    },
    {
      q: "Should I plan lighting and ventilation early?",
      a: "Yes. Early planning avoids costly changes after construction begins.",
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
                Gynaecologist Clinic Interior Design in Majhola, Moradabad:
                Creating a Calm, Private and Hygienic Space
              </h1>

              <p className="mb-4 text-gray-700">
                A gynaecologist&apos;s clinic is a place where patients need to
                feel safe, respected and at ease. The design of the space
                shapes that feeling from the moment someone walks in. Privacy,
                cleanliness, comfort and smooth movement matter more here than
                in most other clinics. A thoughtful interior also helps the
                doctor and staff work efficiently through a busy day. Space
                Build supports clients with design planning and interior
                solutions, and this guide explains how to plan a gynaecology
                clinic in Majhola, Moradabad.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Why Clinic Interiors Matter
              </h2>

              <p className="mb-4 text-gray-700">
                Patients form an impression of a clinic long before they meet
                the doctor.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A calm space reduces anxiety.</li>
                <li>A clean look builds trust.</li>
                <li>Good layout cuts waiting time and confusion.</li>
                <li>Comfortable rooms make patients more willing to return.</li>
              </ul>

              <p className="mt-4 text-gray-700">
                Design supports care, even though it is not part of the
                treatment.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Start with Your Brief
              </h2>

              <p className="mb-4 text-gray-700">
                A clear brief guides every decision. Before meeting a designer,
                write down the following details:
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Number of consultation rooms and procedure rooms</li>
                <li>Expected patients per day</li>
                <li>Staff size and roles</li>
                <li>Services offered at the clinic</li>
                <li>Budget, timeline and available area</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Study the Space
              </h2>

              <p className="mb-4 text-gray-700">
                Every premises has strengths and limits. Accurate measurement
                at the start prevents costly changes later.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Total area and shape of the floor</li>
                <li>Entrance, windows and natural light</li>
                <li>Existing plumbing, electrical and ventilation points</li>
                <li>
                  Accessibility for elderly and differently abled visitors
                </li>
                <li>Rules set by the building owner or local authority</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Plan the Patient Journey
              </h2>

              <p className="mb-4 text-gray-700">
                Think through each step a patient takes. A smooth journey
                avoids crowding and keeps private areas undisturbed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Arrival and entrance</li>
                <li>Reception and registration</li>
                <li>Waiting</li>
                <li>Consultation</li>
                <li>Tests or procedures, if offered</li>
                <li>Billing, pharmacy and exit</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Reception Design
              </h2>

              <p className="mb-4 text-gray-700">
                The reception sets the tone for the clinic. It should feel
                welcoming, organised and professional.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A clear, welcoming counter at a comfortable height</li>
                <li>Neat storage for files and records</li>
                <li>
                  Discreet registration, so personal details are not overheard
                </li>
                <li>Soft branding that feels professional, not loud</li>
                <li>A low-height section for wheelchair users</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Waiting Area
              </h2>

              <p className="mb-4 text-gray-700">
                Waiting is often the longest part of a visit, so comfort
                counts. Avoid cramming too many chairs into a small area.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Cushioned seating with proper back support</li>
                <li>Enough space between seats for privacy</li>
                <li>Soft lighting and calm colours</li>
                <li>Reading material or a quiet display screen</li>
                <li>Easy access to drinking water and washrooms</li>
                <li>Space for companions and elderly visitors</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Privacy by Design
              </h2>

              <p className="mb-4 text-gray-700">
                Privacy is the most important quality in a gynaecology clinic.
                The layout should protect patients from unnecessary exposure and
                overheard conversations.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Consultation doors should not open straight onto the waiting
                  area.
                </li>
                <li>Use solid or frosted partitions where needed.</li>
                <li>
                  Keep conversation sound from travelling outside rooms.
                </li>
                <li>
                  Place changing areas and examination zones out of line of
                  sight.
                </li>
                <li>
                  Design entry and exit paths so patients are not crowded
                  together.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Consultation Room Layout
              </h2>

              <p className="mb-4 text-gray-700">
                This is where the doctor and patient talk, so it should feel
                calm and unhurried.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  A desk and chairs arranged for a comfortable conversation
                </li>
                <li>
                  Storage for records and equipment within easy reach
                </li>
                <li>Hand-wash basin placed conveniently</li>
                <li>Good lighting without harsh glare</li>
                <li>Clear space around the examination area</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Examination Area
              </h2>

              <p className="mb-4 text-gray-700">
                The examination zone needs careful planning so that the patient
                remains comfortable and screened at all times.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>A curtained or partitioned space for privacy</li>
                <li>A changing section with hooks and a small seat</li>
                <li>Storage for supplies, sterile items and instruments</li>
                <li>Safe, well-placed power points</li>
                <li>Easy-to-clean surfaces and floors</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Procedure or Scan Rooms
              </h2>

              <p className="mb-4 text-gray-700">
                If your clinic offers procedures or scans, plan these rooms with
                extra care. Confirm equipment sizes and requirements with
                suppliers before finalising layouts.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Adequate space for equipment and staff movement</li>
                <li>Proper ventilation and temperature control</li>
                <li>Dedicated power and data connections</li>
                <li>Door widths that allow trolleys and wheelchairs</li>
                <li>Sound control for sensitive conversations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Washrooms
              </h2>

              <p className="mb-4 text-gray-700">
                Clean, accessible washrooms are essential in any healthcare
                space.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Separate facilities for patients and staff where possible
                </li>
                <li>Easy-to-clean walls and floors</li>
                <li>Good ventilation and non-slip flooring</li>
                <li>Grab bars and space for wheelchair access</li>
                <li>Proper waste disposal arrangements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Hygiene-Friendly Materials
              </h2>

              <p className="mb-4 text-gray-700">
                Surfaces should be tough, smooth and simple to clean.
                Moradabad has hot summers, a humid monsoon and cool, foggy
                winters, so material choice affects how well interiors age.
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
                  <strong>Cabinets:</strong> Moisture-resistant boards such as
                  BWP plywood or HDHMR with sealed edges.
                </li>
                <li>
                  <strong>Hardware:</strong> Anti-rust fittings that last in
                  humid weather.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Colours and Mood
              </h2>

              <p className="mb-4 text-gray-700">
                Colour changes how a space feels. Keep the scheme simple and
                consistent across rooms.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Soft whites, creams and pale greens feel clean and calm.</li>
                <li>Gentle pastels add warmth without feeling clinical.</li>
                <li>Wood textures bring a soft, welcoming touch.</li>
                <li>Avoid very bright or dark shades in treatment areas.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Lighting Design
              </h2>

              <p className="mb-4 text-gray-700">
                Good lighting supports both comfort and clinical work.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Use natural light in waiting areas where possible.</li>
                <li>Choose even, glare-free ceiling lights in rooms.</li>
                <li>Add task lighting where close examination is needed.</li>
                <li>
                  Use warm, soft lighting in reception and waiting spaces.
                </li>
                <li>Provide backup lighting for power cuts.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Ventilation and Cooling
              </h2>

              <p className="mb-4 text-gray-700">
                Fresh, cool air matters in a busy clinic. Plan mechanical
                services early so they do not interfere with the final layout.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Plan air-conditioning and ducting early.</li>
                <li>Allow cross ventilation where possible.</li>
                <li>Add exhaust in washrooms and procedure areas.</li>
                <li>Shade windows that face strong afternoon sun.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Acoustics
              </h2>

              <p className="mb-4 text-gray-700">
                Quiet rooms support private conversations and help patients feel
                relaxed.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Soft finishes reduce echo.</li>
                <li>Solid partitions block sound better than thin ones.</li>
                <li>Door seals reduce leakage.</li>
                <li>
                  Place noisy equipment away from consultation rooms.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Furniture and Storage
              </h2>

              <p className="mb-4 text-gray-700">
                Modular furniture suits clinics well because it can be added or
                changed as the clinic grows.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Reception counters and waiting seats made to measure
                </li>
                <li>Closed cabinets for supplies, records and consumables</li>
                <li>Wall-mounted units to keep floors easy to clean</li>
                <li>Drawers with soft-close hardware for quiet use</li>
                <li>Space for files, forms and stationery</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Electrical and Data Planning
              </h2>

              <p className="mb-4 text-gray-700">
                Clinics depend on reliable power and connectivity. Mark all
                points before furniture and partitions are made.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Enough sockets in every room, placed safely</li>
                <li>Network and Wi-Fi coverage for records and billing</li>
                <li>Backup power for key equipment</li>
                <li>Safe wiring that meets electrical standards</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Safety and Approvals
              </h2>

              <p className="mb-4 text-gray-700">
                Healthcare spaces must meet safety expectations. Check current
                local requirements, and confirm who will handle approvals.
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
                itemised quotation so you can compare offers fairly.
              </p>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Spend more on hygiene-friendly surfaces and good hardware.
                </li>
                <li>Keep decorative items simple.</li>
                <li>Prioritise privacy and lighting before extras.</li>
                <li>Keep a reserve for unexpected changes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                Common Mistakes to Avoid
              </h2>

              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>
                  Placing consultation doors in line with the waiting area
                </li>
                <li>Using porous or hard-to-clean finishes</li>
                <li>Ignoring sound control</li>
                <li>
                  Packing too many seats into a small waiting space
                </li>
                <li>Forgetting accessibility</li>
                <li>Skipping electrical and data planning</li>
              </ul>

              <p className="mt-4 text-gray-700">
                A site visit and a 3D preview usually catch these problems
                early.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 font-serif text-3xl text-gray-900">
                How Space Build Supports Your Project
              </h2>

              <p className="mb-4 text-gray-700">
                Space Build follows a clear, step-by-step approach from the
                first consultation to final handover.
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
                Contact Space Build — Clinic Interior Design in Majhola,
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
                        Design planning and interior solutions for clinics
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
                      <p className="font-semibold">Service Area</p>
                      <p>
                        Majhola, Moradabad, Uttar Pradesh – 244001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">Website</p>
                      <a
                        href="https://spacebuild.co.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all hover:underline"
                      >
                        spacebuild.co.in
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