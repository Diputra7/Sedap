import React, { useState } from "react";
import testi from "../../data/testi.json";

export default function Testi() {
  const [index, setIndex] = useState(0);
  const currentTesti = testi[index];

  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-[#fff8ee] to-[#fefeff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* KIRI: TEKS */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Apa kata pelanggan <br /> tentang kami
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
            "{currentTesti.message}"
          </p>
          <div className="flex items-center mb-4">
            <img
              src={currentTesti.avatar}
              alt={currentTesti.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="text-gray-800 font-semibold">
              {currentTesti.name}
            </span>
          </div>

          {/* Indikator bulat */}
          <div className="flex space-x-3 mt-4">
            {testi.map((_, i) => (
              <button
                key={i}
                className={`w-5 h-5 rounded-full border border-gray-500 ${
                  index === i ? "bg-gray-800" : "bg-transparent"
                }`}
                onClick={() => setIndex(i)}
              ></button>
            ))}
          </div>
        </div>

        {/* KANAN: GAMBAR DEKORASI */}
        <div className="relative w-full h-full flex justify-center items-center">
          <img
            src="https://th.bing.com/th/id/OIP.58nLBIqYrfbTR-_yGJepPgHaGw?w=193&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7"
            alt="Delivery Hero"
            className="relative w-full max-w-md lg:max-w-lg rounded-3xl object-cover shadow-lg"
          />
          {/* Gaya dekorasi tambahan bisa ditambahkan dengan CSS/shape SVG */}
        </div>
      </div>
    </section>
  );
}
