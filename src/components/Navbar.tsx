import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/aseduch-logo.jpg";

export default function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { to: "/react/", label: "Inicio" },
    { to: "/react/about", label: "Quiénes Somos" },
    { to: "/react/docs", label: "Documentos" },
    { to: "/react/partners", label: "Socios" },
    { to: "/react/news", label: "Noticias" },
    { to: "/react/medios", label: "Medios" },
  ];

  return (
    <>
      <header
        className={`bg-white shadow-sm sticky top-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="ASEDUCH Logo" className="h-14" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center text-sm font-semibold">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition ${
                  isActive(link.to)
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => navigate("/react/partners")}
            className="hidden md:inline-block bg-[#C0392B] hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold"
          >
            ¡Hazte Socio!
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? null : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between border-b-zinc-300">
          <img src={logo} alt="ASEDUCH Logo" className="h-12" />
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-gray-800 hover:text-blue-600 transition"
            aria-label="Close menu"
          >
            <HiX size={24} />
          </button>
        </div>
        <nav className="mt-6 flex flex-col space-y-4 px-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-lg font-medium transition ${
                isActive(link.to)
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              navigate("/react/partners");
            }}
            className="mt-6 bg-[#C0392B] hover:bg-red-700 text-white px-4 py-2 rounded-full text-center font-bold"
          >
            ¡Hazte Socio!
          </button>
        </nav>
      </aside>
    </>
  );
}
