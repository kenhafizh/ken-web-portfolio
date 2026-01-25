const Testimonials = () => {
  return (
    <div className="w-full bg-slate-800">
      <div className="text-center py-24">
        <button className="px-6 py-2 bg-slate-700 text-white rounded-full text-sm">
          Testimonials
        </button>
        <h1 className="text-center text-white mt-4 text-sm font-light">
          Nice things people have said about me:
        </h1>

        <div className="flex gap-12 p-12">
          <div className="rounded-2xl bg-slate-600 pt-12 pr-12 pl-12 pb-24 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full mb-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=128&h=128&facepad=2"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white text-start font-light">
              “Job well done! I am really impressed. He is very very good at
              what he does I would recommend Sagar and will rehire in the future
              for Frontend development.”
            </h1>
            <div className="text-center mt-6 flex flex-col items-center">
              <h1 className="text-white font-semibold text-xl">Sugeng Dalu</h1>
              <p className=" font-light text-slate-300 text-sm">
                Chief Executive Officer - ZMI
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-600 pt-12 pr-12 pl-12 pb-24 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full mb-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&h=128&facepad=2"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white text-start font-light">
              “Job well done! I am really impressed. He is very very good at
              what he does I would recommend Sagar and will rehire in the future
              for Frontend development.”
            </h1>
            <div className="text-center mt-6 flex flex-col items-center">
              <h1 className="text-white font-semibold text-xl">Nisa Cakwe</h1>
              <p className=" font-light text-slate-300 text-sm">
                Chief Executive Officer - ZMI
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-600 pt-12 pr-12 pl-12 pb-24 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full mb-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&h=128&facepad=2"
                alt="Person"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white text-start font-light">
              “Job well done! I am really impressed. He is very very good at
              what he does I would recommend Sagar and will rehire in the future
              for Frontend development.”
            </h1>
            <div className="text-center mt-6 flex flex-col items-center">
              <h1 className="text-white font-semibold text-xl">Lisa Manoban</h1>
              <p className=" font-light text-slate-300 text-sm">
                Chief Executive Officer - ZMI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
