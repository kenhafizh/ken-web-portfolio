import { useState } from "react";
import { BsMoon } from "react-icons/bs";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900">
      <div className="container mx-auto max-w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-3xl">Ken.dev</h1>
        <div className="hidden md:flex gap-6 items-center">
          <ul className="text-white flex gap-8">
            <li>About</li>
            <li>Work</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <span className="text-slate-700 text-xl">|</span>
          <BsMoon className="text-white text-xl"></BsMoon>
          <button className="bg-white text-slate-700 py-1.5 px-4 rounded-2xl">
            Download CV
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
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
        <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-slate-800 shadow-lg z-50 transition-transform duration-300 md:hidden">
          <div className="flex items-center justify-between py-3 px-4">
            <h1 className="text-white font-bold text-3xl">Ken.dev</h1>
            <button
              className=" text-white focus:outline-none"
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
            <li className="text-white">About</li>
            <li className="text-white">Work</li>
            <li className="text-white">Testimonials</li>
            <li className="text-white">Contact</li>
          </ul>
          <hr className="border-slate-700" />
          <div className="flex justify-between py-6 px-4">
            <p className="text-white">Switch Theme</p>
            <BsMoon className="text-white text-xl" />
          </div>
          <div className="flex justify-center">
            <button className="bg-white text-slate-700 py-1.5 px-12 rounded-2xl">
              Download CV
            </button>
          </div>
        </div>
      )}
      `
    </nav>
  );
};
