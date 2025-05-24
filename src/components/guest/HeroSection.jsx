import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-[#fff8ee] to-[#fefeff]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center py-20 px-6 lg:px-12 gap-12 overflow-visible">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Nikmati <br /> Makananmu <br /> 
            </h1>
            <p className="text-gray-500 text-lg mb-8">
              Temukan makanan terbaik dari tempat terbaik. Kami antar langsung
              ke pintu rumah kamu.
            </p>
          </div>

          {/* Select & Button (diperbaiki agar dropdown ke bawah) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pb-10 relative z-40">
            <select className="relative z-50 px-4 py-3 w-full sm:w-64 rounded-lg shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]">
              <option>Pilih Restoran</option>
              <option>Opet</option>
              <option>Mamak</option>
              <option>Iwan</option>
            </select>
            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300">
              ORDER NOW
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex-1 flex justify-center items-center overflow-visible">
          {/* Shape Background */}
          <div className="absolute w-[320px] h-[400px] bg-orange-400 rotate-[12deg] rounded-3xl -z-10 shadow-lg"></div>

          {/* Hero Image */}
          {/* Hero Image */}
          <img
            src="https://i.pinimg.com/1200x/fc/3b/ef/fc3bef6a8df6e825f8005db8aceef0c6.jpg"
            alt="Delivery Hero"
            className="relative w-full max-w-md lg:max-w-lg rounded-3xl object-cover shadow-lg"
          />

          {/* Top Badge */}
          <div className="absolute top-6 right-10 bg-white px-4 py-2 rounded-full shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#f59e0b] rounded-full"></div>
              <p className="text-sm font-semibold text-gray-700">12 Restoran</p>
            </div>
            <span className="text-xs text-gray-400">Tersedia di kota kamu</span>
          </div>

          {/* Info Card at the Bottom */}
          <div className="absolute bottom-[-30px] right-6 bg-white shadow-lg rounded-xl flex items-center p-4 gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="Food Icon"
              className="w-12 h-12"
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">
                Pengiriman Cepat
              </p>
              <p className="text-xs text-gray-400">
                Kurir sampai kurang dari 30 menit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
