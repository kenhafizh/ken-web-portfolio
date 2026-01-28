import logo from "../assets/zmi-logo-2.webp";
import logoDark from "../assets/zmi-logo-blue.png";

const Experience = () => {
  return (
    <section>
      <div className="bg-white dark:bg-slate-800 w-full py-14 overflow-hidden flex flex-col items-center">
        <div className="text-center mb-12 mx-6">
          <button className="px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-full text-sm">
            Experience
          </button>
          <h1 className="text-center text-slate-900 dark:text-white mt-4 text-sm">
            Here is a quick summary of my most recent experiences
          </h1>
        </div>

        <div className="max-w-7xl bg-slate-200 dark:bg-slate-700 rounded-2xl mx-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-6 p-6 md:p-8">
            <div className="w-32 md:w-48 mx-auto md:mx-0">
              <img src={logoDark} alt="logo" className="block dark:hidden" />
              <img src={logo} alt="logo" className="hidden dark:block" />
            </div>
            <h1 className="text-slate-900 dark:text-white font-semibold text-xl md:text-2xl">
              Mobile Developer
              <ul className="list-disc text-slate-700 dark:text-white text-sm font-light flex flex-col items-center gap-2 ml-4 mt-2">
                <li className="max-w-xl">
                  Mengembangkan dan memelihara aplikasi mobile (Android)
                  menggunakan Flutter (Dart).
                </li>
                <li className="max-w-xl">
                  Menerjemahkan desain UI/UX (Figma) ke dalam implementasi
                  aplikasi yang responsif dan reusable.
                </li>
                <li className="max-w-xl">
                  Mengimplementasikan state management menggunakan Bloc/Cubit
                  untuk mengelola alur data aplikasi.
                </li>
                <li className="max-w-xl">
                  Berkolaborasi dengan tim backend, UI/UX designer, dan QA untuk
                  memastikan kualitas aplikasi.
                </li>
              </ul>
            </h1>

            <h1 className="text-slate-900 dark:text-white text-sm font-semibold text-center md:text-left">
              Agustus 2024 - Sekarang
            </h1>
          </div>
        </div>

        <div className="max-w-7xl bg-slate-200 dark:bg-slate-700 rounded-2xl mx-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between gap-6 p-6 md:p-8">
            <div className="w-32 md:w-48 mx-auto md:mx-0">
              <img src={logoDark} alt="logo" className="block dark:hidden" />
              <img src={logo} alt="logo" className="hidden dark:block" />
            </div>
            <h1 className="text-slate-900 dark:text-white font-semibold text-xl md:text-2xl">
              Mobile Developer
              <ul className="list-disc text-slate-700 dark:text-white text-sm font-light flex flex-col items-center gap-2 ml-4 mt-2">
                <li className="max-w-xl">
                  Mengembangkan dan memelihara aplikasi mobile (Android)
                  menggunakan Flutter (Dart).
                </li>
                <li className="max-w-xl">
                  Menerjemahkan desain UI/UX (Figma) ke dalam implementasi
                  aplikasi yang responsif dan reusable.
                </li>
                <li className="max-w-xl">
                  Mengimplementasikan state management menggunakan Bloc/Cubit
                  untuk mengelola alur data aplikasi.
                </li>
                <li className="max-w-xl">
                  Berkolaborasi dengan tim backend, UI/UX designer, dan QA untuk
                  memastikan kualitas aplikasi.
                </li>
              </ul>
            </h1>

            <h1 className="text-slate-900 dark:text-white text-sm font-semibold text-center md:text-left">
              Agustus 2024 - Sekarang
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
