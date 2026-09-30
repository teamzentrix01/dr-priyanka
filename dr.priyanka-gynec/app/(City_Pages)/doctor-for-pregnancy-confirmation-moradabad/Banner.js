import { CalendarCheck2, CheckCircle2, Clock3, ShieldCheck, Star } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden px-6 py-28 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294075/pregwomam-holding-scaning-repot_avsrx1.webp')",
          }}
        />
        <div className="absolute inset-0 bg-green-900/70" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="mb-4 mt-2 text-2xl font-serif md:text-3xl">
            Doctor for Pregnancy Confirmation in Moradabad
          </h1>
          <p className="mb-3 text-xl font-serif md:text-2xl">
            Dr. Priyanka Pachauri – Early Pregnancy Consultation
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-sm text-green-100 md:text-lg">
            Get medical guidance to confirm pregnancy and discuss suitable
            next steps for your antenatal care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <button className="flex items-center gap-2 rounded-lg border border-white bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50">
                <CalendarCheck2 size={20} />
                Book Appointment
              </button>
            </a>
            <a href="/services">
              <button className="flex items-center gap-2 rounded-lg border border-white bg-transparent px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-green-700">
                <CheckCircle2 size={20} />
                Explore Services
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className="relative z-10 mx-auto -mt-10 max-w-6xl rounded-xl bg-white px-6 py-5 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-6 text-sm font-medium text-gray-700">
          <span className="flex items-center gap-2"><Clock3 size={18} className="text-green-600" />Early Assessment</span>
          <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-green-600" />Pregnancy Guidance</span>
          <span className="flex items-center gap-2"><Star size={18} className="text-green-600" />Antenatal Planning</span>
          <span className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-600" />Moradabad Care</span>
        </div>
      </div>
    </div>
  );
}
