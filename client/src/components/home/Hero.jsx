import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  return (
    <>
    <svg className="size-full absolute -z-10 inset-0" width="1440" height="720" viewBox="0 0 1440 720" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#E2E8F0" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
    <circle cx="711.819" cy="372.562" r="308.334" stroke="#E2E8F0" strokeOpacity=".7" />
    <circle cx="16.942" cy="20.834" r="308.334" stroke="#E2E8F0" strokeOpacity=".7" />
    <path stroke="#E2E8F0" strokeOpacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
    <circle cx="782.595" cy="411.166" r="308.334" stroke="#E2E8F0" strokeOpacity=".7" />
</svg>
      <div className="min-h-screen pb-20">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <a href="#">
            <img src="/logo.png" alt="logo" className="h-11 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <a href="#" className="hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#features" className="hover:text-indigo-600 transition">
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-indigo-600 transition"
            >
              Testimonials
            </a>
            <a href="#cta" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
              hidden={user}
            >
              Get started
            </Link>
            <Link
              to="/app?state=login"
              className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900"
              hidden={user}
            >
              Login
            </Link>
            <Link
              to="/app"
              className="hidden md:block px-8 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#testimonials" className="text-white">
            Testimonials
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex"
          >
            X
          </button>
        </div>

        <Banner />

        {/* Hero Section */}
        <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-400 text-gray-500 text-xs">
              <div className="flex items-center">
                <img
                  className="size-7 rounded-full border-3 border-white"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                  alt="userImage1"
                />
                <img
                  className="size-7 rounded-full border-3 border-white -translate-x-2"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                  alt="userImage2"
                />
                <img
                  className="size-7 rounded-full border-3 border-white -translate-x-4"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                  alt="userImage3"
                />
              </div>
              <p className="-translate-x-2">Trusted by 1m+ founders</p>
            </div>

            <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-900">
              Create Job-Ready Resume in Minutes
            </h1>

            <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
              Create, edit and download professional resumes with AI-powered
              assistance.
            </p>

            <div className="flex items-center gap-4 mt-8 text-sm">
              <Link to="/app" className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex items-center transition-colors">
                Get started
              </Link>
            </div>
          </div>

          <img
            src="https://static.resumetrick.com/home-landing.webp"
            alt="hero"
            className="max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300"
          />
        </section>
      </div>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
      </style>
    </>
  );
};

export default Hero;
