import React from "react";

export default function Info() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-[#fff8ee] to-[#fefeff]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Cara Kerja</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-20">
          Proses mudah dan cepat untuk mendapatkan makanan favoritmu. Ikuti langkah-langkah berikut untuk mulai memesan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/illustration-1.png"
              alt="Select Restaurant"
              className="w-80 h-auto mb-8"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              <span className="text-gray-300 mr-1">01</span> Pilih Restoran
            </h3>
            <p className="text-base text-gray-500 mt-3">
              Temukan restoran favoritmu dengan mudah dari berbagai pilihan yang tersedia di aplikasi kami.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/illustration-2.png"
              alt="Select Menu"
              className="w-80 h-auto mb-8"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              <span className="text-gray-300 mr-1">02</span> Pilih Menu
            </h3>
            <p className="text-base text-gray-500 mt-3">
              Telusuri menu lengkap dan sesuaikan pesananmu sesuai selera, langsung dari smartphone kamu.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://bslthemes.com/html/quickeat/assets/img/illustration-3.png"
              alt="Wait for Delivery"
              className="w-80 h-auto mb-8"
            />
            <h3 className="text-2xl font-bold text-gray-800">
              <span className="text-gray-300 mr-1">03</span> Tunggu Pengantaran
            </h3>
            <p className="text-base text-gray-500 mt-3">
              Duduk santai dan tunggu makananmu diantar dengan cepat oleh kurir kami langsung ke depan pintumu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
