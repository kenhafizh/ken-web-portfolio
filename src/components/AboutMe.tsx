import heroImage from "../assets/foto_me3.jpeg";

export const AboutMe = () => {
  return (
    <section id="about">
      <div className="w-full bg-white dark:bg-slate-800 py-14 overflow-hidden">
        <div className="text-center mb-12">
          <button className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-full text-sm">
            About Me
          </button>
        </div>

        <div className="container mx-auto md:flex max-w-7xl justify-center items-start gap-16 px-6">
          <div className="relative mb-8 md:mb-0 flex justify-center md:justify-start">
            <div className="absolute -bottom-6 -left-6 w-[260px] h-[360px] rounded-xl md:bg-slate-200 md:dark:bg-slate-700"></div>
            <div className="relative w-[260px] h-[360px] rounded-xl overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                src={heroImage}
                alt="profile-pic"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-slate-900 dark:text-white text-2xl font-semibold mb-6 ">
              Curious about me? Here you have it
            </h2>
            <p className="text-slate-700 dark:text-white text-sm mb-4">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="text-slate-700 dark:text-white text-sm mb-4">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <br />
            <p className="text-slate-700 dark:text-white text-sm mb-4">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <br />
            <p className="text-slate-700 dark:text-white text-sm mb-4">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
