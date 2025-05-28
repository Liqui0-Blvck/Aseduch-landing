import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../assets/aseduch-logo.jpg";
import logo_fundacion from "../assets/logo-fundacion-celeste (1).png";

export default function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | number>(null);

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

  // Menú con subenlaces para dropdowns
  const links = [
    { to: "/react/", label: "Inicio" },
    {
      label: "Quiénes Somos",
      to: "/react/about",
      dropdown: [
        { to: "/react/about", label: "Historia" },
        { to: "/react/about/vision-mision", label: "Misión" },
        { to: "/react/about/values", label: "Valores" },
        { to: "/react/about/directive", label: "Directiva" }
      ]
    },
    { to: "/react/docs", label: "Documentos" },
    {
      label: "Socios",
      to: "/react/partners",
      dropdown: [
        { to: "/react/partners", label: "Hazte socio" },
        { to: "/react/partners/social-quotes", label: "Cuotas sociales" },
        { to: "/react/partners/benefits", label: "Beneficios" },
        { to: "/react/partners/rights", label: "Derechos y obligaciones" },
        { to: "/react/partners/advices", label: "Asesoría" }
      ]
    },
    { to: "/react/news", label: "Actividades" },
    { to: "/react/media", label: "Medios" },
    { to: "/react/foundation", label: "Fundación" }
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
          <div className="flex items-center space-x-4">
            <img src={location.pathname === '/react/foundation' ? logo_fundacion : logo} alt="ASEDUCH Logo" className={location.pathname === '/react/foundation' ? 'w-22 h-22' : 'h-16'} />
            {/* <img src={logoFundacion} alt="Fundación ASEDUCH" className="h-14" /> */}
            <div className="hidden md:block">
              <div className="text-lg font-bold text-gray-800">
                {location.pathname === '/react/foundation' ? 'Fundación ASEDUCH' : 'ASEDUCH'}
              </div>
              <div className="text-xs text-gray-600">
                {location.pathname === '/react/foundation' ? 'Fundación de Educación en Chile' : 'Asociación de Educadores de Chile A.G.'}
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center text-sm font-semibold">
            {links.map((link, idx) =>
              link.dropdown ? (
                <div key={link.label} className="relative group" style={{display: 'inline-block'}}>
                  <div
                    onMouseEnter={() => setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`transition flex items-center gap-1 ${
                        isActive(link.to)
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`}
                      onClick={e => {
                        e.preventDefault();
                        setOpenDropdown(openDropdown === idx ? null : idx);
                      }}
                      aria-haspopup="true"
                      aria-expanded={openDropdown === idx}
                    >
                      {link.label}
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div className={`absolute left-0 mt-2 w-64 min-w-[220px] bg-white rounded-lg shadow-lg transition-all duration-200 z-40 ${openDropdown === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} ${openDropdown === idx ? '' : 'invisible'}`}>
                      <ul className="py-2">
                        {link.dropdown.map((sublink) => (
                          <li key={sublink.to}>
                            <Link
                              to={sublink.to}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700 font-medium rounded transition"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {sublink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
          </nav>

          {/* Social Media Links */}
          <div className="hidden md:flex space-x-4">
            <a href="https://facebook.com/Aseduch/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://x.com/aseduch1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition mt-[0.1rem]" aria-label="Twitter">
              <FaX size={17} />
            </a>
            <a href="https://instagram.com/aseduch_/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com/UCSmp_0yZJG5On1kC1-mqbjw/videos" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
            <a href="https://www.linkedin.com/company/asociación-de-educadores-de-chile/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <div className="text-sm font-bold text-gray-800 mr-4">
              ASEDUCH
            </div>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 text-gray-800 hover:text-blue-600 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? null : <HiMenu size={24} />}
            </button>
          </div>
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
        <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-300">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="ASEDUCH Logo" className="h-12" />
            {/* <img src={logoFundacion} alt="Fundación ASEDUCH" className="h-10" /> */}
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-gray-800 hover:text-blue-600 transition"
            aria-label="Close menu"
          >
            <HiX size={24} />
          </button>
        </div>
        <nav className="mt-6 flex flex-col space-y-4 px-6">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="">
                <div className="font-semibold text-gray-800 mb-1">{link.label}</div>
                <ul className="ml-2 mb-4">
                  {link.dropdown.map((sublink) => (
                    <li key={sublink.to}>
                      <Link
                        to={sublink.to}
                        onClick={() => setMobileOpen(false)}
                        className="block text-base py-1 px-2 rounded hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {sublink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
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
            )
          )}
          <div className="flex justify-center space-x-6 mt-6">
            <a href="https://facebook.com/Aseduch/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/aseduch1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition" aria-label="Twitter">
              <FaX size={24} />
            </a>
            <a href="https://instagram.com/aseduch_/?hl=es" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com/UCSmp_0yZJG5On1kC1-mqbjw/videos" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.linkedin.com/company/asociación-de-educadores-de-chile/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
