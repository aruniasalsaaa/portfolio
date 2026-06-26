import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Certificates", path: "/certificates" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path.startsWith("#")) return false;
    return location.pathname === path;
  };

  const handleClick = (path) => {
    setIsOpen(false);

    if (path.startsWith("#")) {
      document.querySelector(path)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(path);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-[#EAF5FB]">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* DESKTOP */}
        <div className="hidden md:flex flex-wrap items-center gap-5 py-3">
          {/* STATUS BADGE */}
          <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-[#89CFF1]/20 border border-[#89CFF1]">
            <span className="w-2 h-2 rounded-full bg-[#3776A1] animate-pulse"></span>

            <span className="text-[#003A6B] text-xs font-medium">
              Available for Opportunities
            </span>
          </div>

          {/* LINKS */}
          {links.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.path)}
              className={`
                px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer
                ${
                  isActive(item.path)
                    ? "bg-[#3776A1] text-white shadow-md"
                    : "bg-white text-[#3776A1] hover:bg-[#3776A1] hover:text-white"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center justify-between py-3">
          {/* STATUS BADGE */}
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#89CFF1]/20 border border-[#89CFF1]">
            <span className="w-2 h-2 rounded-full bg-[#3776A1] animate-pulse"></span>

            <span className="text-[#003A6B] text-[11px] font-medium">
              Available
            </span>
          </div>

          {/* BURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#003A6B] text-xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleClick(item.path)}
                  className={`
                    text-left px-4 py-3 rounded-xl transition-all
                    ${
                      isActive(item.path)
                        ? "bg-[#3776A1] text-white"
                        : "bg-[#F8FBFD] text-[#3776A1]"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
