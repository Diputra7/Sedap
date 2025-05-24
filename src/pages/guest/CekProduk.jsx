import React, { useState } from "react";
import produk from "../../data/cekproduk.json";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaShoppingCart,
} from "react-icons/fa";

export default function CekProduk() {
  const [kode, setKode] = useState("");
  const [pesan, setPesan] = useState(null);

  const handleCek = (e) => {
    e.preventDefault();

    if (kode.trim() === "" || kode.length < 4) {
      setPesan({
        status: "error",
        message: "Kode produk tidak boleh kosong dan minimal 4 karakter.",
      });
      return;
    }

    const cariProduk = produk.find(
      (p) => p.kode_produk === kode.toUpperCase()
    );

    if (!cariProduk) {
      setPesan({
        status: "notfound",
        message: "❌ Kode produk tidak ditemukan.",
      });
    } else if (cariProduk.stok === 0) {
      setPesan({
        status: "habis",
        message: `⚠️ Produk ${cariProduk.nama_produk} saat ini sedang habis.`,
      });
    } else {
      setPesan({
        status: "tersedia",
        produk: cariProduk,
      });
    }
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-white min-h-screen">
      <div className="max-w-xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Cek Ketersediaan Produk
        </h2>
        <form onSubmit={handleCek} className="mb-8">
          <input
            type="text"
            placeholder="Masukkan Kode Produk"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            className="w-full p-3 border rounded-md mb-4 text-lg"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-2 rounded-md transition-colors"
          >
            Cek Sekarang
          </button>
        </form>

        {pesan && pesan.status === "error" && (
          <div className="bg-red-100 text-red-800 p-4 rounded-lg text-center">
            <p className="text-lg font-semibold">{pesan.message}</p>
          </div>
        )}

        {pesan && pesan.status === "tersedia" && (
          <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
            <FaCheckCircle className="text-4xl mx-auto mb-2" />
            <p className="text-xl font-semibold mb-2">
              Produk <strong>{pesan.produk.nama_produk}</strong> tersedia dengan harga{" "}
              <span className="text-green-600 font-bold">
                Rp{pesan.produk.harga.toLocaleString("id-ID")}
              </span>
            </p>
            <p>
              Stok tersedia: <strong>{pesan.produk.stok}</strong>
            </p>
            <FaShoppingCart className="text-4xl mx-auto mt-3 text-orange-500" />
          </div>
        )}

        {pesan && pesan.status === "habis" && (
          <div className="bg-yellow-100 text-yellow-800 p-6 rounded-lg text-center">
            <FaExclamationTriangle className="text-4xl mx-auto mb-2" />
            <p className="text-lg font-semibold">{pesan.message}</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5956/5956670.png"
              alt="Out of Stock"
              className="w-20 mx-auto mt-3"
            />
          </div>
        )}

        {pesan && pesan.status === "notfound" && (
          <div className="bg-red-100 text-red-800 p-6 rounded-lg text-center">
            <FaTimesCircle className="text-4xl mx-auto mb-2" />
            <p className="text-lg font-semibold">{pesan.message}</p>
          </div>
        )}
      </div>
    </section>
  );
}