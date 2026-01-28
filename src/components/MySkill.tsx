import { FaFlutter, FaJs, FaReact } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const skill = [
  {
    name: "JavaScript",
    icon: <FaJs size={40} className="text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact size={40} className="text-cyan-400"></FaReact>,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-500" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss size={40} className="text-sky-400" />,
  },
  {
    name: "Flutter",
    icon: <FaFlutter size={40} className="text-sky-500" />,
  },
];

const MySkill = () => {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 py-16">
      <div className="text-center mb-12">
        <button className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-full text-sm mb-8">
          Skills
        </button>
        <h2 className="text-slate-900 dark:text-white font-semibold text-sm md:px-0 px-4">
          The skills, tools and technologies I am really good at
        </h2>

        <div className="mt-12 grid md:grid-cols-5 grid-cols-3 gap-8 max-w-2xl mx-auto">
          {skill.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 text-slate-900 dark:text-white"
            >
              {skill.icon}
              <span className="text-sm text-slate-600 dark:text-slate-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkill;
