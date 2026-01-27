import portfolioImage from "../assets/portfolio_example.png";

const progLanguage = ["Flutter", "Bloc", "Rest API", "Android", "IOS"];

const Portfolio = () => {
  return (
    <section id="work">
      <div className="w-full bg-slate-900 py-16 px-6 md:px-36 text-center overflow-hidden">
        <button className="px-6 py-2 bg-slate-700 text-white rounded-full text-sm mb-8">
          Portfolio
        </button>
        <h2 className="text-white font-light text-sm">
          Some of the noteworthy projects I have built:
        </h2>

        <div className="w-full flex flex-col lg:flex-row mt-12">
          <div className="bg-slate-500 p-8 md:rounded-tl-2xl lg:rounded-bl-2xl rounded-t-2xl md:rounded-t-none w-full lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full">
              <img src={portfolioImage} alt="" />
            </div>
          </div>
          <div className="bg-slate-700 p-8 lg:rounded-tr-2xl lg:rounded-br-2xl rounded-b-2xl lg:rounded-b-none w-full lg:w-1/2 flex flex-col text-start justify-center">
            <h1 className="text-white font-semibold text-3xl">Prestige</h1>
            <p className="text-white font-light mt-6">
              Prestige adalah platform penyewaan kendaraan dan layanan premium
              berbasis web dan mobile yang ditujukan untuk pasar Australia.
              Aplikasi ini menyediakan berbagai layanan eksklusif seperti luxury
              car, motor, drive day experience, akomodasi, yacht, private jet,
              dan helikopter. Sistem dirancang dengan multi-role architecture
              untuk mendukung kebutuhan User, Driver, dan Host dalam satu
              ekosistem terintegrasi.
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
              {progLanguage.map((progLanguages, index) => (
                <div
                  key={index}
                  className="rounded-4xl bg-gray-500 text-center py-2 px-5"
                >
                  <p className="text-white">{progLanguages}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row mt-12">
          <div className="bg-slate-500 p-8 md:rounded-tl-2xl lg:rounded-bl-2xl rounded-t-2xl md:rounded-t-none w-full lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full">
              <img src={portfolioImage} alt="" />
            </div>
          </div>
          <div className="bg-slate-700 p-8 lg:rounded-tr-2xl lg:rounded-br-2xl rounded-b-2xl lg:rounded-b-none w-full lg:w-1/2 flex flex-col text-start justify-center">
            <h1 className="text-white font-semibold text-3xl">Prestige</h1>
            <p className="text-white font-light mt-6">
              Prestige adalah platform penyewaan kendaraan dan layanan premium
              berbasis web dan mobile yang ditujukan untuk pasar Australia.
              Aplikasi ini menyediakan berbagai layanan eksklusif seperti luxury
              car, motor, drive day experience, akomodasi, yacht, private jet,
              dan helikopter. Sistem dirancang dengan multi-role architecture
              untuk mendukung kebutuhan User, Driver, dan Host dalam satu
              ekosistem terintegrasi.
            </p>
            <div className="flex gap-2 mt-5 flex-wrap">
              {progLanguage.map((progLanguages, index) => (
                <div
                  key={index}
                  className="rounded-4xl bg-gray-500 text-center py-2 px-5"
                >
                  <p className="text-white">{progLanguages}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
