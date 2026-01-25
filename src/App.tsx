import { AboutMe } from "./components/AboutMe";
import Experience from "./components/Experience";
import { Header } from "./components/Header";
import MySkill from "./components/MySkill";
import { Navbar } from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <MySkill />
      <Experience />
      <Portfolio />
      <Testimonials />
    </>
  );
}

export default App;
