import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  MdOutlineCall,
  MdOutlineEmail,
  MdOutlineFileCopy,
} from "react-icons/md";

const Contact = () => {
  const email = "kenhafiz16@gmail.com";
  const phone = "+6285711924319";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full bg-slate-900 py-16 px-8 text-center overflow-hidden">
      <button className="px-6 py-2 bg-slate-700 text-white rounded-full text-sm mb-8">
        Get in touch
      </button>
      <div className="max-w-md mx-auto">
        <h2 className="text-white font-light text-sm text-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </h2>
      </div>
      <div className="flex gap-5 mt-12 justify-center items-center">
        <MdOutlineEmail className="text-white lg:text-2xl text-3xl" />
        <h1 className="text-white text-2xl font-bold">{email}</h1>
        <MdOutlineFileCopy
          className="text-white lg:text-2xl text-3xl cursor-pointer"
          onClick={() => handleCopy(email)}
          title="Copy Email"
        />
      </div>
      <div className="flex gap-5 mt-4 justify-center items-center">
        <MdOutlineCall className="text-white text-2xl" />
        <h1 className="text-white text-2xl font-bold">{phone}</h1>
        <MdOutlineFileCopy
          className="text-white text-2xl cursor-pointer"
          onClick={() => handleCopy(phone)}
          title="Copy Number"
        />
      </div>
      <p className="text-sm font-light mt-12 text-slate-500">
        You may also find me on these platforms!
      </p>
      <div className="flex gap-2 justify-center mt-2">
        <a href="https://www.linkedin.com/in/kenhafizh" target="_blank">
          <FaLinkedin className="text-xl text-white" />
        </a>
        <a href="https://www.instagram.com/kenhafizh" target="_blank">
          <FaInstagram className="text-xl text-white" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
