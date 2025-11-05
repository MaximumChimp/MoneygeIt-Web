import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Features", to: "features" },
    { name: "About", to: "about" },
    { name: "Reviews", to: "review" },
  ];

  return (
    <nav className="w-full bg-[#EDEDEE] backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#145C84] tracking-tight">
          MoneygeIt
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-[#89C3E6] font-semibold"
                className="cursor-pointer hover:text-[#145C84] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#beta"
            className="bg-[#145C84] text-white px-4 py-2 rounded-lg hover:bg-[#89C3E6] transition-all shadow-md"
          >
            Join Beta
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-[#89C3E6] font-semibold"
                  className="cursor-pointer hover:text-[#145C84] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#beta"
                className="bg-[#145C84] text-white px-4 py-2 rounded-lg hover:bg-[#89C3E6] transition-all"
              >
                Join Beta
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
