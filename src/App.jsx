import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import Info from "./components/guest/Info";
import HeroSection from "./components/guest/HeroSection";
import Product from "./components/guest/Product";
import Testi from "./components/guest/Testi";
import CekProduk from "./pages/guest/CekProduk";
import About from "./components/guest/About";

// Lazy load layouts
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));

// Lazy load pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Guest layout routes */}
        <Route element={<GuestLayout />}>
          <Route
            path="/guest"
            element={
              <>
                <HeroSection />
                <Info />
                <About/>
                <Product/>
                <Testi/>
              </>
            }
          />
          <Route path="/CekProduk" element={<CekProduk />} />
        </Route>

        {/* Main dashboard layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
        </Route>

        {/* Auth layout routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
