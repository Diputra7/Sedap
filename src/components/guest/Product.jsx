import React from "react";
import product from "../../data/product.json";

export default function Product() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-[#fff8ee] to-[#fefeff]">
      <div className="max-w-7xl mx-auto text-center mb-14">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Menu Favorit</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Pilih makanan favoritmu dari berbagai pilihan langsung dari daftar kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {product.map((item) => (
          <div
            key={item.id}
            className="bg-[#f9f9f9] rounded-xl shadow-sm flex flex-col items-center p-6 text-center"
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {item.nama}
            </h3>
            <p className="text-base font-bold text-green-600">
              Rp {item.harga.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
