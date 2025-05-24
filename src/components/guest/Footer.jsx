import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Kontak */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Hubungi Kami</h3>
          <div className="space-y-3 text-lg text-gray-300">
            <p className="flex items-center">
              <FaPhone className="mr-3" /> +62 812 3456 7890
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-3" /> support@sedapfood.id
            </p>
            <p>Jl. Cendrawasih No. 121, Manado, Indonesia</p>
          </div>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Sosial Media</h3>
          <p className="text-gray-300 text-lg mb-4">Ikuti kami untuk update terbaru:</p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-orange-500 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-orange-500">Partner Kami</h3>
          <div className="flex flex-wrap items-center gap-4">
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/620/795/large_2x/konoha-symbol-hidden-leaf-naruto-free-vector.jpg"
              alt="1"
              className="h-10"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/620/800/original/uzumaki-clan-symbol-naruto-free-vector.jpg"
              alt="2"
              className="h-10"
            />
            <img
              src="https://i.pinimg.com/originals/96/77/bb/9677bb9159f8daf2289447abf1527c1f.jpg"
              alt="3"
              className="h-10"
            />
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
        © 2025 SEDAP. All rights reserved.
      </div>
    </footer>
  );
}
