import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import heroImage from "../assets/foto_me2.jpeg";

export const Header = () => {
  return (
    <div className="bg-white dark:bg-slate-900 w-full h-full py-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl md:flex md:flex-row-reverse items-center justify-between px-6 md:gap-8">
        <div className="relative mb-8 md:mb-0 flex justify-center">
          <div className="absolute -bottom-6 -right-6 w-[260px] h-[300px] rounded-xl md:bg-slate-200 md:dark:bg-slate-700"></div>
          <div className="relative w-[260px] h-[300px] rounded-xl overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover"
              src={heroImage}
              alt="profile-pic"
            />
          </div>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-slate-900 dark:text-white text-2xl md:text-4xl font-bold">
            Hi, I'm Ken Hafizh 👋
          </h1>
          <p className="text-slate-700 dark:text-white font-light my-4">
            I'm a Mobile developer (Flutter) with a focus on creating (and
            occasionally designing) exceptional digital experiences that are
            fast, accessible, visually appealing, and responsive. Even though I
            have been creating web applications for over 7 years, I still love
            it as if it was something new.
          </p>
          <div className="text-slate-700 dark:text-white flex items-center gap-2 my-8 font-light">
            <MdOutlineLocationOn />
            <span>Cirebon, Indonesia</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/kenhafizh" target="_blank">
              <FaLinkedin className="text-2xl text-slate-900 dark:text-white" />
            </a>
            <a href="https://www.instagram.com/kenhafizh" target="_blank">
              <FaInstagram className="text-2xl text-slate-900 dark:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
