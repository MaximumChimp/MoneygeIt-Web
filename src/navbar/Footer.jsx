import React from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#145C84] text-[#F7F2B3] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 🌟 Brand Section */}
        <div>
          <h2 className="text-3xl font-extrabold mb-2">MoneygeIt</h2>
          <p className="text-[#F7F2B3]/80 leading-relaxed">
            Track smarter. Spend better.  
            Take control of your money with confidence.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <a href="#home"  className="hover:underline hover:text-white transition-colors duration-300">Home</a>
          <a href="#features"  className="hover:underline hover:text-white transition-colors duration-300">Features</a>
          <a href="#how"  className="hover:underline hover:text-white transition-colors duration-300">How It Works</a>
          <a href="#about" className="hover:underline hover:text-white transition-colors duration-300">About</a>
          <a href="#contact"  className="hover:underline hover:text-white transition-colors duration-300">Contact</a>
        </div>

        {/* 📬 Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            {/* <a href="#" className="hover:text-white"><FaFacebook size={22} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={22} /></a> */}
            <a href="https://github.com/MaximumChimp" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={22} />
            </a>
            <a href="mailto:arvincabrera37@gmail.com" className="hover:text-white">
              <FaEnvelope size={22} />
            </a>
          </div>
          <p className="text-[#F7F2B3]/70 text-sm">
            © 2025 MoneygeIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
