import { Outlet } from "react-router-dom";
import Navbar from "../components/guest/Navbar";
import Footer from "../components/guest/Footer"; // Pastikan path sesuai

export default function GuestLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content (outlet for nested routes) */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
