import {
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Star,
  Calendar,
} from "lucide-react";

export default function Banner() {
  return (
    <div className="relative">

      {/* HERO SECTION */}
      <section className="relative text-white py-28 px-6 overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1786294075/pregwomam-holding-scaning-repot_avsrx1.webp')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900/70"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">

          <h1 className="text-1xl md:text-2xl font-serif mb-4 mt-2 leading-tight">
           Normal Delivery Treatment Moradabad
          </h1>

          <p className="text-2xl md:text-3xl mb-3 font-serif">
            Dr. Priyanka Pachauri – Your Health, Her Priority
          </p>

          <p className="text-sm md:text-lg mb-8 text-green-100 max-w-2xl mx-auto">
            Trusted care for antenatal & postnatal management, high-risk
            pregnancies, laparoscopic gynaecological surgery, and menstrual
            disorders — delivered with empathy, expertise, and a commitment
            to safe motherhood.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">

            <a href="/contact">
              <button className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold border border-white hover:bg-green-50 transition">
                <Calendar size={20} />
                Book an Appointment
              </button>
            </a>

            <a href="/services">
              <button className="flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-lg font-semibold border border-white hover:bg-white hover:text-green-700 transition">
                <CheckCircle2 size={20} />
                Explore Services
              </button>
            </a>

          </div>

        </div>
      </section>

      {/* WHITE TRUST BAR */}
      <div className="relative z-10 max-w-6xl mx-auto -mt-10 bg-white shadow-lg rounded-xl py-5 px-6">
        <div className="flex flex-wrap justify-between items-center gap-6 text-gray-700 text-sm font-medium">

          <span className="flex items-center gap-2">
            <Clock size={18} className="text-green-600" />
            High-Risk Pregnancy Care
          </span>

          <span className="flex items-center gap-2">
            <Shield size={18} className="text-green-600" />
            Laparoscopic Gynaecological Surgery
          </span>

          <span className="flex items-center gap-2">
            <Star size={18} className="text-green-600" />
            Antenatal & Postnatal Management
          </span>

          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-green-600" />
            Empathetic, Safe-Motherhood Focused Care
          </span>

        </div>
      </div>

    </div>
  );
}