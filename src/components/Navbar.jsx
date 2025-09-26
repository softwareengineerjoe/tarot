import { useNavigate } from "react-router-dom";
import { LeftOutlined, MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const goToPage = (path) => {
    navigate(path);
    setIsOpen(false); // Close on navigation
  };

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleNavbar}
        className="lg:hidden p-3 absolute top-4 left-4 z-10 rounded-md shadow"
        aria-label="Toggle navigation"
      >
        <MenuOutlined style={{ fontSize: "1.5rem" }} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed lg:relative top-0 left-0 w-full rounded-md bg-gray-200 z-20 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-0" : "-translate-y-full"} lg:translate-y-0`}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 p-4 lg:p-0">
          {/* Home Button */}
          <button
            onClick={() => goToPage("/cards")}
            className="flex items-center text-[#B66D38] font-semibold px-6 py-2 hover:opacity-90 transition"
          >
            <LeftOutlined className="hidden lg:inline-block mr-2 font-bold" />
            <span className="lg:hidden">Home</span>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col lg:flex-row gap-2 w-full justify-between">
            {[
              { label: "Major Arcana", path: "/cards/major-arcana" },
              { label: "Swords", path: "/cards/swords" },
              { label: "Cups", path: "/cards/cups" },
              { label: "Wands", path: "/cards/wands" },
              { label: "Pentacles", path: "/cards/pentacles" },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => goToPage(item.path)}
                className="w-full lg:w-auto text-[#B66D38] font-semibold px-6 py-2 text-center hover:scale-105 hover:opacity-90 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
