import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Our Team" },
  { to: "/resources", label: "More", children: [
    { to: "/resources", label: "Resources" },
    { to: "/sample", label: "Sample" },
    { to: "/faqs", label: "FAQs" },
  ]},
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-nav sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl font-bold text-nav-foreground tracking-tight">AVISHKAR 2K26</span>
          <span className="text-xs text-muted-foreground hidden sm:inline">| IEEE - VBIT SB</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className={`px-3 py-2 text-sm font-medium rounded-md transition-colors text-nav-foreground hover:bg-primary/10`}>
                  {link.label}
                </button>
                <div className="absolute top-full right-0 mt-1 bg-card rounded-md shadow-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[140px] z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${location.pathname === child.to ? "text-primary font-semibold" : "text-foreground"}`}
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
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.to ? "text-primary bg-primary/10" : "text-nav-foreground hover:bg-primary/10"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-nav-foreground">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setMoreOpen(!moreOpen)}
                  className="w-full text-left py-3 text-sm font-medium text-foreground border-b border-border"
                >
                  {link.label} {moreOpen ? "▲" : "▼"}
                </button>
                {moreOpen && link.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="block pl-4 py-2 text-sm text-muted-foreground hover:text-primary"
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
                className={`block py-3 text-sm font-medium border-b border-border ${location.pathname === link.to ? "text-primary" : "text-foreground"}`}
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
