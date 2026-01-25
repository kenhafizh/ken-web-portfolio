import { BsMoon } from "react-icons/bs";

export const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900">
      <div className="container mx-auto max-w-full px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-3xl">Ken.dev</h1>
        <div className="flex gap-6 items-center">
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
      </div>
    </nav>
  );
};
