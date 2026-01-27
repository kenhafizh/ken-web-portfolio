const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="w-full bg-slate-800 overflow-hidden">
        <div className="text-center py-24">
          <button className="px-6 py-2 bg-slate-700 text-white rounded-full text-sm">
            Testimonials
          </button>
          <h1 className="text-center text-white mt-4 text-sm font-light">
            Nice things people have said about me:
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 px-6 md:px-12 mt-12 max-w-6xl mx-auto">
            <div className="rounded-2xl bg-slate-600 p-8 md:p-10 flex flex-col items-center max-w-sm w-full">
              <div className="w-16 h-16 rounded-full mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=128&h=128&facepad=2"
                  alt="Person"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed text-center font-light">
                “Job well done! I am really impressed. He is very very good at
                what he does I would recommend Sagar and will rehire in the
                future for Frontend development.”
              </p>
              <div className="text-center mt-10 flex flex-col items-center">
                <h1 className="text-white font-semibold text-xl">
                  Sugeng Dalu
                </h1>
                <p className=" font-light text-slate-300 text-sm">
                  Chief Executive Officer - ZMI
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-600 p-12 flex flex-col items-center max-w-sm w-full">
              <div className="w-16 h-16 rounded-full mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&h=128&facepad=2"
                  alt="Person"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed text-center font-light">
                “Job well done! I am really impressed. He is very very good at
                what he does I would recommend Sagar and will rehire in the
                future for Frontend development.”
              </p>
              <div className="text-center mt-10 flex flex-col items-center">
                <h1 className="text-white font-semibold text-xl">Nisa Cakwe</h1>
                <p className=" font-light text-slate-300 text-sm">
                  Chief Executive Officer - ZMI
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-600 p-12 flex flex-col items-center max-w-sm w-full">
              <div className="w-16 h-16 rounded-full mb-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&h=128&facepad=2"
                  alt="Person"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed text-center font-light">
                “Job well done! I am really impressed. He is very very good at
                what he does I would recommend Sagar and will rehire in the
                future for Frontend development.”
              </p>
              <div className="text-center mt-10 flex flex-col items-center">
                <h1 className="text-white font-semibold text-xl">
                  Lisa Manoban
                </h1>
                <p className=" font-light text-slate-300 text-sm">
                  Chief Executive Officer - ZMI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
