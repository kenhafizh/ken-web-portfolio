import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isDark, setDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setDark(!isDark);
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-slate-900 dark:text-white font-bold text-3xl">
          Ken.dev
        </h1>
        <div className="hidden md:flex gap-6 items-center">
          <ul className="text-slate-900 dark:text-white flex gap-8">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </ul>
          <span className="text-slate-400 text-xl">|</span>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-700 
                 text-black dark:text-white transition"
          >
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button className="bg-white text-slate-700 py-1.5 px-4 rounded-2xl">
            Download CV
          </button>
        </div>

        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      `{/* Mobile Menu*/}
      {open && (
        <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white dark:bg-slate-800 shadow-lg z-50 transition-transform duration-300 md:hidden">
          <div className="flex items-center justify-between py-3 px-4">
            <h1 className="text-slate-700 dark:text-white font-bold text-3xl">
              Ken.dev
            </h1>
            <button
              className=" text-slate-700 dark:text-white focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <hr className="border-slate-700" />
          <ul className="flex flex-col my-4 gap-4 px-4">
            <li className="text-slate-700 dark:text-white">About</li>
            <li className="text-slate-700 dark:text-white">Work</li>
            <li className="text-slate-700 dark:text-white">Testimonials</li>
            <li className="text-slate-700 dark:text-white">Contact</li>
          </ul>
          <hr className="border-slate-700" />
          <div onClick={toggleTheme} className="flex justify-between py-6 px-4">
            <p className="text-slate-700 dark:text-white">Switch Theme</p>
            {isDark ? (
              <BsMoon className="text-slate-700 dark:text-white text-xl" />
            ) : (
              <BsSun className="text-slate-700 dark:text-white text-xl" />
            )}
          </div>
          <div className="flex justify-center">
            <button className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-white py-1.5 px-12 rounded-2xl">
              Download CV
            </button>
          </div>
        </div>
      )}
      `
    </nav>
  );
};
