import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import heroImage from "../assets/foto_me2.jpeg";

export const Header = () => {
  return (
    <div className="bg-slate-900 w-full h-full py-20">
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-6">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl font-bold">
            Hi, I'm Ken Hafizh 👋
          </h1>
          <p className="text-white font-light my-4">
            I'm a Mobile developer (Flutter) with a focus on creating (and
            occasionally designing) exceptional digital experiences that are
            fast, accessible, visually appealing, and responsive. Even though I
            have been creating web applications for over 7 years, I still love
            it as if it was something new.
          </p>
          <div className="text-white flex items-center gap-2 my-8 font-light">
            <MdOutlineLocationOn />
            <span>Cirebon, Indonesia</span>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/kenhafizh" target="_blank">
              <FaLinkedin className="text-2xl text-white" />
            </a>
            <a href="https://www.instagram.com/kenhafizh" target="_blank">
              <FaInstagram className="text-2xl text-white" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -bottom-6 -right-6 w-[260px] h-[300px] rounded-xl bg-slate-700"></div>
          <div className="relative w-[260px] h-[300px] rounded-xl overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover"
              src={heroImage}
              alt="profile-pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
