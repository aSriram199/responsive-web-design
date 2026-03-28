import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import vbit_logo from "../assets/vbit-logo.png";
import avkLogo from "../assets/avk_logo.png";
import ieeeLogo from "../assets/ieee_logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Our Team" },
  {
    to: "/resources", label: "More", children: [
      { to: "/resources", label: "Resources" },
      { to: "/sample", label: "Sample" },
      { to: "/faqs", label: "FAQs" },
    ]
  },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-[#0A1628] sticky top-0 z-50 shadow-sm">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center justify-center lg:justify-start gap-5 sm:gap-8">
          <img src={vbit_logo} alt="VBIT Logo" className="h-10 sm:h-12 w-auto object-contain" />
          <img src={avkLogo} alt="Avishkar Logo" className="h-16 sm:h-20 w-auto object-contain translate-y-1.5" />
          <img src={ieeeLogo} alt="IEEE Logo" className="h-12 sm:h-14 w-auto object-contain" />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-1`}>
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full right-0 mt-1 bg-[#152336] rounded-md shadow-lg border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px] z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className={`block px-4 py-2 text-sm hover:bg-white/10 transition-colors ${location.pathname === child.to ? "text-white font-semibold" : "text-white/80"}`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.to ? "text-white bg-white/20" : "text-white/80 hover:text-white hover:bg-white/10"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/90 hover:text-white">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A1628] border-t border-white/10 px-4 pb-4 animate-fade-in shadow-xl relative z-50">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="w-full flex flex-row items-center justify-between py-3 text-sm font-medium text-white/90 border-b border-white/10"
                >
                  {link.label} {moreOpen ? <ChevronDown size={14} className="rotate-180 transition-transform" /> : <ChevronDown size={14} className="transition-transform" />}
                </button>
                {moreOpen && link.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="block pl-4 py-3 text-sm text-white/70 hover:text-white border-b border-white/5"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm font-medium border-b border-white/10 ${location.pathname === link.to ? "text-white" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
