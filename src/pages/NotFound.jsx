export default function NotFound() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-2xl w-full">
        <img
          src="https://www.icegif.com/wp-content/uploads/icegif-6116.gif"
          alt="404 Illustration"
          className="w-52 mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold text-red-500 mb-3">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-2">
          Halaman tidak ditemukan!
        </p>
        <p className="text-gray-500 mb-6">
          Mungkin tautan yang Anda masukkan salah atau halaman telah dihapus.
        </p>
        <button
         href = "/" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold py-2 px-6 rounded-full shadow"
          onClick={() => window.history.back()}
        >
          Kembali ke Halaman Sebelumnya
        </button>
      </div>
    </div>
  );
}
